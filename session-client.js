(function (root) {
  class EditorSessionError extends Error {
    constructor(message, status = 0) {
      super(message);
      this.status = status;
      this.terminal = [401, 403, 404, 410].includes(status);
    }
  }

  class EditorSession {
    constructor({ id, token, apiUrl, fetch: fetcher = root.fetch.bind(root), timeout = 30000,
      sleep = (ms) => new Promise((resolve) => root.setTimeout(resolve, ms)) }) {
      Object.assign(this, { id, token, apiUrl, timeout, sleep });
      this.fetcher = fetcher;
      this.forceRequired = false;
      this.revision = null;
      this.expiresAt = null;
    }

    async request(path, options = {}) {
      const controller = new AbortController();
      const timer = root.setTimeout(() => controller.abort(), this.timeout);
      try {
        const response = await this.fetcher(`${this.apiUrl.replace(/\/$/, '')}${path}`, {
          cache: 'no-store',
          ...options,
          signal: controller.signal
        });
        if (!response.ok) {
          const temporarilyMissing = [404, 410].includes(response.status)
            && (this.forceRequired || (this.expiresAt && Date.parse(this.expiresAt) > Date.now()));
          const message = response.status === 401 || response.status === 403
            ? 'This link is not authorized to access the editor session.'
            : temporarilyMissing ? 'The session update is not available at this location yet. Keep this page open and try again.'
            : response.status === 404 || response.status === 410
              ? 'This editor session was not found or its initial one-hour window has expired.'
              : `The editor service could not complete the request (HTTP ${response.status}). Try again.`;
          const error = new EditorSessionError(message, response.status);
          if (temporarilyMissing) error.terminal = false;
          throw error;
        }
        return await response.json();
      } catch (error) {
        if (error instanceof EditorSessionError) throw error;
        throw new EditorSessionError(error.name === 'AbortError'
          ? 'The editor service took too long to respond. Try again.'
          : 'Could not connect to the editor service. Check your connection and try again.');
      } finally {
        root.clearTimeout(timer);
      }
    }

    updateMetadata(session) {
      // A stale read must never remove the override requirement after a server apply.
      this.forceRequired ||= session.forceRequired === true;
      this.expiresAt = this.forceRequired ? null : (session.expiresAt ?? this.expiresAt);
      if (session.revision !== undefined) this.revision = session.revision;
      return session;
    }

    async read() {
      if (!this.id) {
        const resolved = await this.request(`/sessions/resolve?token=${encodeURIComponent(this.token)}`);
        if (!resolved.id) throw new EditorSessionError('The editor service returned an invalid session. Try again.');
        this.id = resolved.id;
      }
      return this.updateMetadata(await this.request(`/sessions/${encodeURIComponent(this.id)}?token=${encodeURIComponent(this.token)}`));
    }

    async save(payload) {
      // Keep verification tied to what was sent, even when the user keeps typing.
      const snapshot = JSON.parse(JSON.stringify(payload));
      const saved = this.updateMetadata(await this.request(`/sessions/${encodeURIComponent(this.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` },
        body: JSON.stringify({ payload: snapshot })
      }));
      let lastError;
      for (const delay of [250, 500, 800, 1200, 1600, 2200, 3000]) {
        await this.sleep(delay);
        let verified;
        try {
          verified = await this.read();
        } catch (error) {
          if (error.terminal) throw error;
          lastError = error;
          continue;
        }
        if ((!saved.revision || verified.revision === saved.revision)
          && ['ready', 'applied'].includes(verified.status)
          && stableStringify(snapshot) === stableStringify(verified.payload)) {
          return verified;
        }
        lastError = new EditorSessionError('The latest save could not be verified. Your browser edits are still here; try Apply Changes again.');
      }
      throw lastError;
    }

    get applyCommand() {
      return `/tags editor apply ${this.id}${this.forceRequired ? ' --force' : ''}`;
    }
  }

  function stableStringify(value) {
    if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
    if (value && typeof value === 'object') {
      return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
    }
    return JSON.stringify(value);
  }

  root.SupremeTagsEditorSession = EditorSession;
  if (typeof module !== 'undefined' && module.exports) module.exports = { EditorSession, EditorSessionError };
})(globalThis);
