const icons = {
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.6 13.1 13.1 20.6a2 2 0 0 1-2.8 0L3 13.3V3h10.3l7.3 7.3a2 2 0 0 1 0 2.8Z"/><path d="M7.5 7.5h.01"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-1.5a1.5 1.5 0 0 0-1.2 2.4l.3.4A2 2 0 0 1 14 22h-2Z"/><path d="M7.5 10.5h.01M10.5 7.5h.01M14.5 7.5h.01M17.5 10.5h.01"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17.5 19H8a6 6 0 1 1 1.1-11.9A7 7 0 0 1 22 11a4 4 0 0 1-4.5 8Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 4 5 5L8 21l-5-5L15 4Z"/><path d="m14 5 5 5"/><path d="M5 4v3M3.5 5.5h3M20 16v3M18.5 17.5h3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
  ,
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>'
};

document.querySelectorAll('[data-icon]').forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || '';
});

const categories = ['default', 'holiday', 'achievements', 'donator'];
const rarities = ['common', 'uncommon', 'rare', 'legendary'];
let history = [];
let selectedId = 'hexsupport';
let activeTab = 'basic';
const routeSession = parseSessionRoute();
const activeSession = {
  id: routeSession.id,
  token: routeSession.token,
  apiUrl: routeSession.apiUrl || window.ST_EDITOR_API_URL || ''
};
const hasSessionLink = Boolean(activeSession.id && activeSession.token && activeSession.apiUrl);

let tags = [
  {
    identifier: 'hexsupport',
    tag: ['&8[&#afe4a4&lHex&#bc43fd&lColor&8]'],
    permission: 'supremetags.tag.hex',
    category: 'default',
    rarity: 'common',
    order: 1,
    withdrawable: true,
    description: ['Supports normal and hex colors'],
    displayName: '&7Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: false, type: 'CUSTOM', amount: 200, takeCommand: 'eco take %player% %amount%', condition: '%vault_eco_balance% >= %amount%' },
    voucher: { material: 'NAME_TAG', displayName: '%tag% &f&lVoucher', customModelData: 0, glow: true, lore: ['&7&m-----------------------------', '&eClick to equip!', '&7&m-----------------------------'] },
    variants: [],
    requirements: { enabled: true, persistUnlock: true, mode: 'all', list: [{ name: 'playtime', type: 'placeholder', value: '1728000' }] }
  },
  {
    identifier: 'santa',
    tag: ['&8[&c&lSanta&8]'],
    permission: 'supremetags.tag.santa',
    category: 'holiday',
    rarity: 'common',
    order: 2,
    withdrawable: false,
    description: ['ho ho hooooooo!'],
    displayName: '&7Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: false, type: 'VAULT', amount: 200, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '&8[&c&lSanta&8] &f&lVoucher', customModelData: 0, glow: true, lore: ['&7&m-----------------------------', '&eClick to equip!', '&7&m-----------------------------'] },
    variants: [{ identifier: 'white-santa', tag: '&f[&cSanta&f]', permission: 'supremetags.tag.santa.white' }],
    requirements: { enabled: false, persistUnlock: false, mode: 'all', list: [] }
  },
  {
    identifier: 'vipplus',
    tag: ['&a[VIP+]'],
    permission: 'supremetags.tag.vip',
    category: 'donator',
    rarity: 'rare',
    order: 4,
    withdrawable: false,
    description: ['VIP donator tag!'],
    displayName: '&7Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: true, type: 'VAULT', amount: 500, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '&a[VIP+] &f&lVoucher', customModelData: 0, glow: true, lore: ['&7&m-----------------------------', '&eClick to equip!', '&7&m-----------------------------'] },
    variants: [
      { identifier: 'vipplus_blue', tag: '&a[VIP&b+&a]', permission: 'supremetags.tag.vip.blue' },
      { identifier: 'vipplus_red', tag: '&a[VIP&c+&a]', permission: 'supremetags.tag.vip.red' }
    ],
    requirements: { enabled: false, persistUnlock: false, mode: 'all', list: [] }
  }
];

const pluginInfo = {
  installedVersion: '2.2.9',
  latestVersion: '2.2.9',
  serverVersion: 'Paper 26.2',
  storageMode: 'File tags',
  categoriesLoaded: categories.length,
  checkedAt: 'SpigotMC checked 2026-08-22'
};

const $ = (id) => document.getElementById(id);
const selectedTag = () => tags.find((tag) => tag.identifier === selectedId) || tags[0];

function pushHistory() {
  history.push(JSON.stringify(tags));
  if (history.length > 40) history.shift();
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = allLabel ? `<option value="">${allLabel}</option>` : '';
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function render() {
  fillSelect($('categoryFilter'), categories, 'All categories');
  fillSelect($('rarityFilter'), rarities, 'All rarities');
  fillSelect($('fieldCategory'), categories);
  fillSelect($('fieldRarity'), rarities);
  fillSelect($('bulkCategory'), categories, 'Choose category');
  fillSelect($('bulkRarity'), rarities, 'Keep rarity');
  renderTagList();
  renderDetails();
  renderBulkMatches();
  renderPayload();
  renderPluginInfo();
  renderCommandTargets();
  generateCommands();
  generateColor();
}

function renderTagList() {
  const query = $('searchInput').value.trim().toLowerCase();
  const category = $('categoryFilter').value;
  const rarity = $('rarityFilter').value;
  const visible = tags
    .filter((tag) => !category || tag.category === category)
    .filter((tag) => !rarity || tag.rarity === rarity)
    .filter((tag) => !query || [tag.identifier, tag.permission, tag.category, tag.rarity, tag.tag.join(' ')].join(' ').toLowerCase().includes(query))
    .sort((a, b) => a.order - b.order);

  $('tagCount').textContent = tags.length;
  $('visibleCount').textContent = `${visible.length} visible`;
  $('tagList').innerHTML = '';

  visible.forEach((tag) => {
    const button = document.createElement('button');
    button.className = `tag-row ${tag.identifier === selectedId ? 'active' : ''}`;
    button.innerHTML = `<div><strong>${tag.identifier}</strong><span>${tag.category} · ${tag.permission}</span></div><em class="rarity-badge">${tag.rarity}</em>`;
    button.addEventListener('click', () => {
      selectedId = tag.identifier;
      renderDetails();
      renderTagList();
    });
    $('tagList').appendChild(button);
  });
}

function renderDetails() {
  const tag = selectedTag();
  if (!tag) return;
  selectedId = tag.identifier;
  $('detailTitle').textContent = tag.identifier;
  $('headerPreview').innerHTML = minecraftToHtml(tag.tag[0]);
  $('chatPreview').innerHTML = minecraftToHtml(tag.tag[0]);

  $('fieldIdentifier').value = tag.identifier;
  $('fieldPermission').value = tag.permission;
  $('fieldCategory').value = tag.category;
  $('fieldRarity').value = tag.rarity;
  $('fieldOrder').value = tag.order;
  $('fieldCost').value = tag.economy.amount;
  $('fieldWithdrawable').checked = tag.withdrawable;
  $('fieldEconomyEnabled').checked = tag.economy.enabled;
  $('fieldTagFrames').value = tag.tag.join('\n');
  $('fieldDescription').value = tag.description.join('\n');
  $('fieldDisplayName').value = tag.displayName;
  $('fieldDisplayItem').value = tag.displayItem;
  $('fieldModelData').value = tag.customModelData;
  $('fieldEconomyType').value = tag.economy.type;
  $('fieldTakeCommand').value = tag.economy.takeCommand;
  $('fieldCondition').value = tag.economy.condition;
  $('fieldVoucherMaterial').value = tag.voucher.material;
  $('fieldVoucherModelData').value = tag.voucher.customModelData;
  $('fieldVoucherName').value = tag.voucher.displayName;
  $('fieldVoucherGlow').checked = tag.voucher.glow;
  $('fieldVoucherLore').value = tag.voucher.lore.join('\n');
  $('fieldReqEnabled').checked = tag.requirements.enabled;
  $('fieldReqMode').value = tag.requirements.mode;
  $('fieldReqPersist').checked = tag.requirements.persistUnlock;

  renderVariants(tag);
  renderRequirements(tag);
}

function updateSelected(mutator) {
  const tag = selectedTag();
  if (!tag) return;
  pushHistory();
  mutator(tag);
  renderTagList();
  renderDetails();
  renderPayload();
}

function bindField(id, mutator, eventName = 'input') {
  $(id).addEventListener(eventName, (event) => updateSelected((tag) => mutator(tag, event.target)));
}

bindField('fieldIdentifier', (tag, input) => {
  const oldId = tag.identifier;
  tag.identifier = slugify(input.value);
  selectedId = tag.identifier;
  if (tag.permission.endsWith(oldId)) tag.permission = `supremetags.tag.${tag.identifier}`;
});
bindField('fieldPermission', (tag, input) => tag.permission = input.value);
bindField('fieldCategory', (tag, input) => tag.category = input.value, 'change');
bindField('fieldRarity', (tag, input) => tag.rarity = input.value, 'change');
bindField('fieldOrder', (tag, input) => tag.order = Number(input.value || 0));
bindField('fieldCost', (tag, input) => tag.economy.amount = Number(input.value || 0));
bindField('fieldWithdrawable', (tag, input) => tag.withdrawable = input.checked, 'change');
bindField('fieldEconomyEnabled', (tag, input) => tag.economy.enabled = input.checked, 'change');
bindField('fieldTagFrames', (tag, input) => tag.tag = input.value.split('\n').filter(Boolean));
bindField('fieldDescription', (tag, input) => tag.description = input.value.split('\n'));
bindField('fieldDisplayName', (tag, input) => tag.displayName = input.value);
bindField('fieldDisplayItem', (tag, input) => tag.displayItem = input.value);
bindField('fieldModelData', (tag, input) => tag.customModelData = Number(input.value || 0));
bindField('fieldEconomyType', (tag, input) => tag.economy.type = input.value);
bindField('fieldTakeCommand', (tag, input) => tag.economy.takeCommand = input.value);
bindField('fieldCondition', (tag, input) => tag.economy.condition = input.value);
bindField('fieldVoucherMaterial', (tag, input) => tag.voucher.material = input.value);
bindField('fieldVoucherModelData', (tag, input) => tag.voucher.customModelData = Number(input.value || 0));
bindField('fieldVoucherName', (tag, input) => tag.voucher.displayName = input.value);
bindField('fieldVoucherGlow', (tag, input) => tag.voucher.glow = input.checked, 'change');
bindField('fieldVoucherLore', (tag, input) => tag.voucher.lore = input.value.split('\n'));
bindField('fieldReqEnabled', (tag, input) => tag.requirements.enabled = input.checked, 'change');
bindField('fieldReqMode', (tag, input) => tag.requirements.mode = input.value, 'change');
bindField('fieldReqPersist', (tag, input) => tag.requirements.persistUnlock = input.checked, 'change');

function renderVariants(tag) {
  $('variantTable').innerHTML = '';
  if (!tag.variants.length) {
    $('variantTable').innerHTML = '<p>No variants configured.</p>';
    return;
  }
  tag.variants.forEach((variant, index) => {
    const row = document.createElement('div');
    row.className = 'mini-row';
    row.innerHTML = `<input value="${escapeAttr(variant.identifier)}" aria-label="Variant identifier"><input value="${escapeAttr(variant.tag)}" aria-label="Variant tag"><input value="${escapeAttr(variant.permission)}" aria-label="Variant permission"><button type="button">×</button>`;
    const [identifier, text, permission] = row.querySelectorAll('input');
    identifier.addEventListener('input', () => updateSelected((target) => target.variants[index].identifier = slugify(identifier.value)));
    text.addEventListener('input', () => updateSelected((target) => target.variants[index].tag = text.value));
    permission.addEventListener('input', () => updateSelected((target) => target.variants[index].permission = permission.value));
    row.querySelector('button').addEventListener('click', () => updateSelected((target) => target.variants.splice(index, 1)));
    $('variantTable').appendChild(row);
  });
}

function renderRequirements(tag) {
  $('requirementTable').innerHTML = '';
  if (!tag.requirements.list.length) {
    $('requirementTable').innerHTML = '<p>No requirement rules configured.</p>';
    return;
  }
  tag.requirements.list.forEach((rule, index) => {
    const row = document.createElement('div');
    row.className = 'mini-row';
    row.innerHTML = `<input value="${escapeAttr(rule.name)}" aria-label="Requirement name"><input value="${escapeAttr(rule.type)}" aria-label="Requirement type"><input value="${escapeAttr(rule.value)}" aria-label="Requirement value"><button type="button">×</button>`;
    const [name, type, value] = row.querySelectorAll('input');
    name.addEventListener('input', () => updateSelected((target) => target.requirements.list[index].name = slugify(name.value)));
    type.addEventListener('input', () => updateSelected((target) => target.requirements.list[index].type = type.value));
    value.addEventListener('input', () => updateSelected((target) => target.requirements.list[index].value = value.value));
    row.querySelector('button').addEventListener('click', () => updateSelected((target) => target.requirements.list.splice(index, 1)));
    $('requirementTable').appendChild(row);
  });
}

$('addVariantButton').addEventListener('click', () => updateSelected((tag) => tag.variants.push({ identifier: `${tag.identifier}_variant`, tag: tag.tag[0], permission: `${tag.permission}.variant` })));
$('addRequirementButton').addEventListener('click', () => updateSelected((tag) => tag.requirements.list.push({ name: 'new-rule', type: 'permission', value: tag.permission })));

document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((node) => node.classList.remove('active'));
    document.querySelectorAll('.view').forEach((node) => node.classList.remove('active'));
    button.classList.add('active');
    $(`view-${button.dataset.view}`).classList.add('active');
  });
});

document.querySelectorAll('.tab-button').forEach((button) => {
  button.addEventListener('click', () => {
    activeTab = button.dataset.tab;
    document.querySelectorAll('.tab-button').forEach((node) => node.classList.toggle('active', node.dataset.tab === activeTab));
    document.querySelectorAll('.tab-panel').forEach((node) => node.classList.toggle('active', node.id === `tab-${activeTab}`));
  });
});

['searchInput', 'categoryFilter', 'rarityFilter'].forEach((id) => $(id).addEventListener('input', renderTagList));

$('newTagButton').addEventListener('click', () => {
  pushHistory();
  const next = `new_tag_${tags.length + 1}`;
  tags.push({
    identifier: next,
    tag: ['&7[New Tag]'],
    permission: `supremetags.tag.${next}`,
    category: 'default',
    rarity: 'common',
    order: tags.length + 1,
    withdrawable: true,
    description: ['New tag description'],
    displayName: '&7Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: false, type: 'VAULT', amount: 0, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '%tag% &f&lVoucher', customModelData: 0, glow: true, lore: ['&7&m-----------------------------', '&eClick to equip!', '&7&m-----------------------------'] },
    variants: [],
    requirements: { enabled: false, persistUnlock: false, mode: 'all', list: [] }
  });
  selectedId = next;
  render();
});

$('undoButton').addEventListener('click', () => {
  const previous = history.pop();
  if (!previous) return;
  tags = JSON.parse(previous);
  if (!tags.find((tag) => tag.identifier === selectedId)) selectedId = tags[0]?.identifier;
  render();
});

$('applyBulkButton').addEventListener('click', () => {
  const category = $('bulkCategory').value;
  if (!category) return;
  pushHistory();
  tags.forEach((tag) => {
    if (tag.category !== category) return;
    if ($('bulkRarity').value) tag.rarity = $('bulkRarity').value;
    if ($('bulkPermission').value.trim()) tag.permission = `${$('bulkPermission').value.trim()}${tag.identifier}`;
  });
  render();
});

['bulkCategory', 'bulkRarity', 'bulkPermission'].forEach((id) => $(id).addEventListener('input', renderBulkMatches));

function renderBulkMatches() {
  const category = $('bulkCategory').value;
  const matches = category ? tags.filter((tag) => tag.category === category) : [];
  $('bulkMatches').innerHTML = matches.length ? matches.map((tag) => `<span>${tag.identifier}</span>`).join('') : '<p>Choose a category to preview matches.</p>';
}

function renderPayload() {
  const payload = {
    schemaVersion: 1,
    editor: 'supremetags-web',
    exportedAt: new Date().toISOString(),
    plugin: {
      name: 'SupremeTags',
      version: pluginInfo.installedVersion,
      latestVersion: pluginInfo.latestVersion,
      serverVersion: pluginInfo.serverVersion,
      storageMode: pluginInfo.storageMode,
      tagsLoaded: tags.length,
      categoriesLoaded: pluginInfo.categoriesLoaded
    },
    data: {
      categories,
      rarities,
      tags
    }
  };
  $('payloadOutput').value = JSON.stringify(payload, null, 2);
}

function renderPluginInfo() {
  $('installedVersion').textContent = pluginInfo.installedVersion;
  $('latestVersion').textContent = pluginInfo.latestVersion;
  $('serverVersion').textContent = pluginInfo.serverVersion;
  $('storageMode').textContent = pluginInfo.storageMode;
  $('pluginTagsLoaded').textContent = tags.length;
  $('pluginCategoriesLoaded').textContent = pluginInfo.categoriesLoaded;
  $('versionCheckedAt').textContent = pluginInfo.checkedAt;

  const outdated = compareVersions(pluginInfo.installedVersion, pluginInfo.latestVersion) < 0;
  $('pluginVersionState').textContent = outdated ? 'Update available' : 'Up to date';
  $('pluginVersionState').classList.toggle('outdated', outdated);
  $('sidebarPluginTitle').textContent = 'SupremeTags';
  $('sidebarPluginVersion').textContent = `v${pluginInfo.installedVersion} · ${outdated ? 'out of date' : 'up to date'}`;
  $('sidebarStatusDot').classList.toggle('outdated', outdated);
  $('updateCallout').classList.toggle('outdated', outdated);
  $('updateCallout').innerHTML = outdated
    ? `<span data-icon="info">${icons.info}</span><div><strong>Update available</strong><p>SupremeTags ${pluginInfo.latestVersion} is available on SpigotMC. Export safely, update the plugin, then reopen a fresh editor session.</p></div>`
    : `<span data-icon="check">${icons.check}</span><div><strong>Plugin is up to date</strong><p>The server-reported version matches the latest known Spigot release.</p></div>`;
}

function compareVersions(current, latest) {
  const left = String(current).split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const right = String(latest).split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const length = Math.max(left.length, right.length);
  for (let i = 0; i < length; i++) {
    if ((left[i] || 0) < (right[i] || 0)) return -1;
    if ((left[i] || 0) > (right[i] || 0)) return 1;
  }
  return 0;
}

$('exportButton').addEventListener('click', () => {
  renderPayload();
  navigator.clipboard?.writeText($('payloadOutput').value);
  saveSessionDraft();
});

$('importButton').addEventListener('click', () => {
  const raw = prompt('Paste a SupremeTags editor JSON payload');
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    applyPayload(parsed);
  } catch (error) {
    alert(`Invalid payload: ${error.message}`);
  }
});

['colorText', 'colorStart', 'colorEnd', 'colorFormat'].forEach((id) => $(id).addEventListener('input', generateColor));
$('generateColorButton').addEventListener('click', generateColor);
$('copyColorButton').addEventListener('click', () => navigator.clipboard?.writeText($('colorOutput').value));
$('generateCommandsButton').addEventListener('click', generateCommands);
$('copyCommandsButton').addEventListener('click', () => navigator.clipboard?.writeText($('commandOutput').value));
$('commandTarget').addEventListener('change', generateCommands);

function generateColor() {
  const text = $('colorText').value || '';
  const start = $('colorStart').value;
  const end = $('colorEnd').value;
  const format = $('colorFormat').value;
  const colors = gradient(start, end, text.length || 1);
  let output = '';
  if (format === 'minimessage') {
    output = `<gradient:${start}:${end}>${text}</gradient>`;
  } else if (format === 'classic') {
    output = [...text].map((char, index) => `${nearestLegacy(colors[index])}${char}`).join('');
  } else {
    output = [...text].map((char, index) => `&#${colors[index].slice(1)}${char}`).join('');
  }
  $('colorOutput').value = output;
  $('colorPreview').innerHTML = [...text].map((char, index) => `<span style="color:${colors[index]}">${escapeHtml(char)}</span>`).join('');
}

function renderCommandTargets() {
  const current = $('commandTarget').value || selectedId;
  $('commandTarget').innerHTML = tags
    .sort((a, b) => a.order - b.order)
    .map((tag) => `<option value="${escapeAttr(tag.identifier)}">${escapeHtml(tag.identifier)}</option>`)
    .join('');
  $('commandTarget').value = tags.some((tag) => tag.identifier === current) ? current : selectedId;
}

function generateCommands() {
  const targetId = $('commandTarget')?.value || selectedId;
  const tag = tags.find((entry) => entry.identifier === targetId) || selectedTag();
  if (!tag) {
    $('commandOutput').value = '';
    return;
  }

  const firstFrame = tag.tag[0] || '';
  const commands = [
    `/tags create ${tag.identifier} ${firstFrame}`,
    `/tags edit ${tag.identifier} tag ${firstFrame}`,
    `/tags edit ${tag.identifier} permission ${tag.permission}`,
    `/tags edit ${tag.identifier} category ${tag.category}`,
    `/tags edit ${tag.identifier} rarity ${tag.rarity}`,
    `/tags edit ${tag.identifier} cost ${tag.economy.amount}`,
    `/tags edit ${tag.identifier} withdrawable ${tag.withdrawable}`,
    '',
    '# Full-fidelity edits use the web editor apply command:',
    '/tags editor apply-session <sessionId> <applyToken>',
    '# Or local JSON:',
    '/tags editor apply-file editor-export.json'
  ];

  $('commandOutput').value = commands.join('\n');
}

function gradient(start, end, steps) {
  const a = hexToRgb(start);
  const b = hexToRgb(end);
  return Array.from({ length: steps }, (_, index) => {
    const t = steps <= 1 ? 0 : index / (steps - 1);
    return rgbToHex({
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t)
    });
  });
}

function minecraftToHtml(input) {
  let html = '';
  let color = '#eef4f8';
  const chars = [...(input || '')];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '&' && chars[i + 1] === '#') {
      const hex = chars.slice(i + 2, i + 8).join('');
      if (/^[0-9a-fA-F]{6}$/.test(hex)) {
        color = `#${hex}`;
        i += 7;
        continue;
      }
    }
    if (chars[i] === '&' && chars[i + 1]) {
      const next = chars[i + 1].toLowerCase();
      const legacy = legacyColors[next];
      if (legacy) color = legacy;
      i++;
      continue;
    }
    html += `<span style="color:${color}">${escapeHtml(chars[i])}</span>`;
  }
  return html;
}

const legacyColors = {
  0: '#000000', 1: '#0000aa', 2: '#00aa00', 3: '#00aaaa',
  4: '#aa0000', 5: '#aa00aa', 6: '#ffaa00', 7: '#aaaaaa',
  8: '#555555', 9: '#5555ff', a: '#55ff55', b: '#55ffff',
  c: '#ff5555', d: '#ff55ff', e: '#ffff55', f: '#ffffff'
};

function nearestLegacy(hex) {
  const target = hexToRgb(hex);
  let best = '&f';
  let distance = Infinity;
  Object.entries(legacyColors).forEach(([code, value]) => {
    const rgb = hexToRgb(value);
    const d = (target.r - rgb.r) ** 2 + (target.g - rgb.g) ** 2 + (target.b - rgb.b) ** 2;
    if (d < distance) {
      distance = d;
      best = `&${code}`;
    }
  });
  return best;
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '') || 'tag';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function parseSessionRoute() {
  const query = new URLSearchParams(window.location.search);
  const hash = window.location.hash || '';
  const hashMatch = hash.match(/^#\/session\/([^?]+)/);
  const hashQuery = new URLSearchParams(hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : '');

  return {
    id: hashMatch ? decodeURIComponent(hashMatch[1]) : query.get('session'),
    token: hashQuery.get('token') || query.get('token'),
    apiUrl: hashQuery.get('api') || query.get('api') || ''
  };
}

async function loadSessionDraft() {
  if (!activeSession.id || !activeSession.token || !activeSession.apiUrl) {
    showInvalidSession();
    return;
  }

  try {
    const api = activeSession.apiUrl.replace(/\/$/, '');
    const response = await fetch(`${api}/sessions/${encodeURIComponent(activeSession.id)}?token=${encodeURIComponent(activeSession.token)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const session = await response.json();
    applyPayload(session.payload);
  } catch (error) {
    showInvalidSession(`Session could not be loaded: ${error.message}`);
  }
}

async function saveSessionDraft() {
  if (!activeSession.id || !activeSession.token || !activeSession.apiUrl) {
    return;
  }

  try {
    const api = activeSession.apiUrl.replace(/\/$/, '');
    const payload = JSON.parse($('payloadOutput').value);
    const response = await fetch(`${api}/sessions/${encodeURIComponent(activeSession.id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${activeSession.token}`
      },
      body: JSON.stringify({ payload })
    });
    if (!response.ok) throw new Error(await response.text());
  } catch (error) {
    alert(`Failed to save editor session: ${error.message}`);
  }
}

function applyPayload(payload) {
  const importedTags = payload?.data?.tags || payload?.tags;
  if (!Array.isArray(importedTags)) {
    throw new Error('Missing data.tags array');
  }

  pushHistory();
  tags = importedTags;
  if (Array.isArray(payload.data?.categories)) {
    categories.splice(0, categories.length, ...payload.data.categories);
  }
  if (Array.isArray(payload.data?.rarities)) {
    rarities.splice(0, rarities.length, ...payload.data.rarities);
  }
  if (payload.plugin) {
    pluginInfo.installedVersion = payload.plugin.version || pluginInfo.installedVersion;
    pluginInfo.latestVersion = payload.plugin.latestVersion || pluginInfo.latestVersion;
    pluginInfo.serverVersion = payload.plugin.serverVersion || pluginInfo.serverVersion;
    pluginInfo.storageMode = payload.plugin.storageMode || pluginInfo.storageMode;
    pluginInfo.categoriesLoaded = payload.plugin.categoriesLoaded || categories.length;
  }

  selectedId = tags[0]?.identifier;
  render();
}

function showInvalidSession(message) {
  document.body.classList.add('invalid-session-active');
  if (message) {
    const note = document.querySelector('.small-note');
    if (note) note.textContent = message;
  }
}

if (hasSessionLink) {
  render();
  loadSessionDraft();
} else {
  showInvalidSession();
}
