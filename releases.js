const releaseDownloadIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>';

const releaseText = {
  stable: 'stable',
  coming_soon: 'Coming soon',
  development: 'development'
};

loadReleaseData();

async function loadReleaseData() {
  try {
    const response = await fetch(`/version.json?updated=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const releaseData = await response.json();
    applyReleaseData(releaseData);
  } catch (error) {
    console.warn('Could not load version.json', error);
  }
}

function applyReleaseData(releaseData) {
  const stable = releaseData.stable || releaseData.versions?.find((release) => release.status === 'stable');
  const development = releaseData.development || releaseData.versions?.find((release) => release.status !== 'stable');
  if (!stable) return;

  document.querySelectorAll('[data-release-version="stable"]').forEach((node) => {
    node.textContent = stable.version;
  });
  document.querySelectorAll('[data-release-version-label="stable"]').forEach((node) => {
    node.textContent = `v${stable.version}`;
  });
  document.querySelectorAll('[data-release-href="stable"]').forEach((node) => {
    setReleaseLink(node, stable);
  });
  document.querySelectorAll('[data-release-download-text="stable"]').forEach((node) => {
    node.textContent = `Download ${stable.version}`;
  });

  if (development) {
    document.querySelectorAll('[data-release-version="development"]').forEach((node) => {
      node.textContent = development.version;
    });
    document.querySelectorAll('[data-development-tab]').forEach((node) => {
      node.textContent = development.status === 'coming_soon'
        ? `Development Build - ${development.version} coming soon`
        : `Development Build - ${development.version}`;
    });
    document.querySelectorAll('[data-release-summary="development"]').forEach((node) => {
      node.textContent = development.summary || releaseText[development.status] || 'Development build';
    });
  }

  const intro = document.querySelector('[data-release-intro]');
  if (intro) {
    intro.innerHTML = `The latest stable version of SupremeTags is <strong>${escapeHtml(stable.version)}</strong>. ${
      development
        ? `Version <strong>${escapeHtml(development.version)}</strong> is ${development.status === 'coming_soon' ? 'the next development build and is coming soon.' : 'available as a development build.'}`
        : 'This page only links to files hosted on the SupremeTags site.'
    }`;
  }

  renderReleasePackages(releaseList(releaseData, stable, development));
}

function releaseList(releaseData, stable, development) {
  const extraReleases = Array.isArray(releaseData.archive) ? releaseData.archive : [];
  if (stable || development) return [stable, development, ...extraReleases].filter(Boolean);
  return Array.isArray(releaseData.versions) ? releaseData.versions : [];
}

function renderReleasePackages(versions) {
  const container = document.getElementById('releasePackages');
  if (!container) return;
  container.innerHTML = '';
  versions.forEach((release) => {
    const packageNode = document.createElement('article');
    const isStable = release.status === 'stable';
    const isAvailable = Boolean(release.file) && release.status !== 'coming_soon';
    packageNode.className = `download-package ${isStable ? 'stable-release' : 'coming-soon'}`;
    packageNode.innerHTML = `
      <span class="package-mark" aria-hidden="true">${releaseDownloadIcon}</span>
      <div>
        <h3>${escapeHtml(release.label || 'SupremeTags')}${isStable ? '' : ` ${escapeHtml(release.version)}`} <small>${escapeHtml(release.badge || releaseText[release.status] || 'Release')}</small></h3>
        <p>${escapeHtml(release.description || '')}</p>
        <span class="package-version">${escapeHtml(release.summary || `${release.version} ${releaseText[release.status] || 'release'}`)}</span>
      </div>
      ${isAvailable
        ? `<a class="download-icon-button" href="${escapeAttr(downloadPath(release.file))}" download aria-label="Download SupremeTags ${escapeAttr(release.version)}"><span data-icon="download">${releaseDownloadIcon}</span></a>`
        : `<span class="download-icon-button disabled" aria-label="SupremeTags ${escapeAttr(release.version)} coming soon"><span data-icon="download">${releaseDownloadIcon}</span></span>`
      }
    `;
    container.appendChild(packageNode);
  });
}

function setReleaseLink(node, release) {
  if (!release.file) return;
  node.href = downloadPath(release.file);
  if (node.hasAttribute('download')) node.setAttribute('download', '');
  if (node.hasAttribute('aria-label')) node.setAttribute('aria-label', `Download SupremeTags ${release.version}`);
}

function downloadPath(file) {
  return `/downloads/${file}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}
