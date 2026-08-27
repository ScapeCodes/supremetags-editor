const DEFAULT_API_URL = 'https://supremetags-editor-api.noscapedev.workers.dev';
const $ = (id) => document.getElementById(id);

const params = new URLSearchParams(window.location.search);
const dumpId = params.get('bytebin') || params.get('id');
const apiUrl = (params.get('api') || window.ST_EDITOR_API_URL || DEFAULT_API_URL).replace(/\/$/, '');

if (!dumpId) {
  showState('No dump id was provided. Create one in-game with /tags dump.', true);
} else {
  loadDump(dumpId);
}

async function loadDump(id) {
  try {
    const response = await fetch(`${apiUrl}/dumps/${encodeURIComponent(id)}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(response.status === 404 ? 'Dump was not found or has expired.' : `HTTP ${response.status}`);
    }

    const dump = await response.json();
    renderDump(dump);
  } catch (error) {
    showState(error.message || 'Dump could not be loaded.', true);
  }
}

function renderDump(dump) {
  const payload = dump.payload || {};
  const supremeTags = payload.supremeTags || {};
  const server = payload.server || {};
  const environment = payload.environment || {};

  $('dumpSubtitle').textContent = `Created ${formatDate(dump.createdAt || payload.createdAt)}. Sensitive connection values are redacted before upload.`;
  $('dumpPluginVersion').textContent = supremeTags.version || 'Unknown';
  $('dumpDatabaseType').textContent = supremeTags.databaseType || 'Unknown';
  $('dumpTagsLoaded').textContent = value(supremeTags.tagsLoaded);
  $('dumpCategoriesLoaded').textContent = value(supremeTags.categoriesLoaded);
  $('dumpPersonalTags').textContent = supremeTags.personalTags || 'Unknown';

  renderKeyValues($('serverInfo'), {
    'Server Version': server.version,
    'Online Mode': server.onlineMode === true ? 'Enabled' : server.onlineMode === false ? 'Disabled' : 'Unknown',
    'SupremeTags Support': server.supportStatus
  });

  renderKeyValues($('environmentInfo'), {
    'Java Version': environment.javaVersion,
    'Operating System': environment.operatingSystem,
    'Uptime': environment.uptime,
    'Allocated Memory': environment.allocatedMemory
  });

  const plugins = Array.isArray(payload.plugins) ? payload.plugins : [];
  $('pluginCount').textContent = plugins.length;
  $('pluginList').innerHTML = plugins.map((plugin) => `
    <div>
      <strong>${escapeHtml(plugin.name || 'Unknown')}</strong>
      <span>${escapeHtml(plugin.version || 'Unknown')} ${plugin.enabled === false ? 'Disabled' : 'Enabled'}</span>
    </div>
  `).join('');

  $('configFile').textContent = payload.config?.content || '# config.yml was not included.';
  $('categoriesFile').textContent = payload.categories?.content || '# categories.yml was not included.';

  const tagFiles = Array.isArray(payload.tagFiles) ? payload.tagFiles : [];
  $('tagFileCount').textContent = tagFiles.length;
  $('tagFiles').innerHTML = '';
  tagFiles.forEach((file, index) => {
    const details = document.createElement('details');
    details.className = 'dump-file';
    if (index === 0) details.open = true;
    details.innerHTML = `
      <summary>${escapeHtml(file.path || file.name || `tag-file-${index + 1}.yml`)}</summary>
      <pre><code></code></pre>
    `;
    details.querySelector('code').textContent = file.content || '# Empty file.';
    $('tagFiles').appendChild(details);
  });

  $('dumpState').hidden = true;
  $('dumpSummary').hidden = false;
  $('dumpContent').hidden = false;
}

function renderKeyValues(container, entries) {
  container.innerHTML = Object.entries(entries).map(([key, val]) => `
    <div>
      <span>${escapeHtml(key)}</span>
      <strong>${escapeHtml(value(val))}</strong>
    </div>
  `).join('');
}

function showState(message, error = false) {
  const node = $('dumpState');
  node.textContent = message;
  node.classList.toggle('error', error);
}

function value(input) {
  if (input === null || input === undefined || input === '') return 'Unknown';
  return String(input);
}

function formatDate(input) {
  if (!input) return 'unknown time';
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return input;
  return date.toLocaleString();
}

function escapeHtml(input) {
  return String(input ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}
