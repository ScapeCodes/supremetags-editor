const icons = {
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.6 13.1 13.1 20.6a2 2 0 0 1-2.8 0L3 13.3V3h10.3l7.3 7.3a2 2 0 0 1 0 2.8Z"/><path d="M7.5 7.5h.01"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-1.5a1.5 1.5 0 0 0-1.2 2.4l.3.4A2 2 0 0 1 14 22h-2Z"/><path d="M7.5 10.5h.01M10.5 7.5h.01M14.5 7.5h.01M17.5 10.5h.01"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2.5 6.4 9.2a8 8 0 1 0 11.2 0L12 2.5Z"/></svg>',
  ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m5.7 5.7 12.6 12.6"/></svg>',
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
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 15H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>'
};

document.querySelectorAll('[data-icon]').forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || '';
});

const DEFAULT_API_URL = 'https://supremetags-editor-api.noscapedev.workers.dev';
const categories = ['default', 'holiday', 'achievements', 'donator'];
const rarities = ['common', 'uncommon', 'rare', 'legendary'];
const editorInfo = {
  version: '2026.1'
};
let history = [];
let selectedId = 'hexsupport';
let originalTagSnapshots = new Map();
let activeTab = 'basic';
let colorStops = ['#ff4d8d', '#f6c453', '#55d6be', '#5d7cff', '#b45cff'];
const colorPresets = ['#ff4d8d', '#f6c453', '#55d6be', '#5d7cff', '#b45cff', '#ff7ab6', '#f8f0c5', '#d8f3ec', '#d9e8f8', '#e7dbff', '#05070a', '#555555', '#aaaaaa', '#ffffff'];
let colorMode = 'gradient';
let activeColorStopIndex = 0;
let pendingFormatColorSelection = null;
const routeSession = parseSessionRoute();
const activeSession = {
  id: routeSession.id,
  token: routeSession.token,
  apiUrl: routeSession.apiUrl || window.ST_EDITOR_API_URL || DEFAULT_API_URL
};
const hasSessionLink = Boolean(activeSession.token && activeSession.apiUrl);

let tags = [
  {
    identifier: 'hexsupport',
    tag: ['<reset><dark_gray>[<bold><gradient:#afe4a4:#bc43fd>HexColor</gradient><reset><dark_gray>]'],
    permission: 'supremetags.tag.hex',
    category: 'default',
    rarity: 'common',
    order: 1,
    withdrawable: true,
    description: ['<reset><gray>Supports MiniMessage colors'],
    displayName: '<reset><gray>Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: false, type: 'CUSTOM', amount: 200, takeCommand: 'eco take %player% %amount%', condition: '%vault_eco_balance% >= %amount%' },
    voucher: { material: 'NAME_TAG', displayName: '%tag% <reset><white><bold>Voucher', customModelData: 0, glow: true, lore: ['<reset><gray><strikethrough>-----------------------------', '<reset><yellow>Click to equip!', '<reset><gray><strikethrough>-----------------------------'] },
    variants: [],
    requirements: { enabled: true, persistUnlock: true, mode: 'all', list: [{ name: 'playtime', type: 'placeholder', value: '1728000' }] }
  },
  {
    identifier: 'santa',
    tag: ['<reset><dark_gray>[<bold><gradient:#ff3131:#ffffff>Santa</gradient><reset><dark_gray>]'],
    permission: 'supremetags.tag.santa',
    category: 'holiday',
    rarity: 'common',
    order: 2,
    withdrawable: false,
    description: ['<reset><gray>ho ho hooooooo!'],
    displayName: '<reset><gray>Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: false, type: 'VAULT', amount: 200, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '<reset><dark_gray>[<reset><red><bold>Santa<reset><dark_gray>] <reset><white><bold>Voucher', customModelData: 0, glow: true, lore: ['<reset><gray><strikethrough>-----------------------------', '<reset><yellow>Click to equip!', '<reset><gray><strikethrough>-----------------------------'] },
    variants: [{ identifier: 'white-santa', tag: '<reset><white>[<reset><red>Santa<reset><white>]', permission: 'supremetags.tag.santa.white' }],
    requirements: { enabled: false, persistUnlock: false, mode: 'all', list: [] }
  },
  {
    identifier: 'vipplus',
    tag: ['<reset><dark_gray>[<bold><gradient:#00ff87:#00c3ff>VIP+</gradient><reset><dark_gray>]'],
    permission: 'supremetags.tag.vip',
    category: 'donator',
    rarity: 'rare',
    order: 4,
    withdrawable: false,
    description: ['<reset><green>VIP donator tag!'],
    displayName: '<reset><gray>Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    economy: { enabled: true, type: 'VAULT', amount: 500, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '<reset><green>[VIP+] <reset><white><bold>Voucher', customModelData: 0, glow: true, lore: ['<reset><gray><strikethrough>-----------------------------', '<reset><yellow>Click to equip!', '<reset><gray><strikethrough>-----------------------------'] },
    variants: [
      { identifier: 'vipplus_blue', tag: '<reset><green>[VIP<aqua>+<green>]', permission: 'supremetags.tag.vip.blue' },
      { identifier: 'vipplus_red', tag: '<reset><green>[VIP<red>+<green>]', permission: 'supremetags.tag.vip.red' }
    ],
    requirements: { enabled: false, persistUnlock: false, mode: 'all', list: [] }
  }
];

const pluginInfo = {
  installedVersion: '3.0.0',
  latestVersion: '3.0.0',
  serverVersion: 'Paper 26.2',
  storageMode: 'File tags',
  categoriesLoaded: categories.length,
  checkedAt: 'SpigotMC checked 2026-08-25'
};

const $ = (id) => document.getElementById(id);
const selectedTag = () => tags.find((tag) => tag.identifier === selectedId) || tags[0];

function normalizeTag(tag) {
  tag.tag = Array.isArray(tag.tag) && tag.tag.length ? tag.tag : [''];
  tag.permission = tag.permission || 'none';
  tag.groups = Array.isArray(tag.groups) ? tag.groups : [];
  tag.description = Array.isArray(tag.description) ? tag.description : [];
  tag.category = tag.category || categories[0] || 'default';
  tag.order = Number(tag.order || 0);
  tag.withdrawable = Boolean(tag.withdrawable);
  tag.rarity = tag.rarity || rarities[0] || 'common';
  tag.displayName = tag.displayName || '<reset><gray>Tag: %tag%';
  tag.displayItem = tag.displayItem || 'NAME_TAG';
  tag.customModelData = Number(tag.customModelData || 0);
  tag.effects = Array.isArray(tag.effects) ? tag.effects : [];
  tag.abilities = Array.isArray(tag.abilities) ? tag.abilities : [];
  tag.customPlaceholders = tag.customPlaceholders && typeof tag.customPlaceholders === 'object' ? tag.customPlaceholders : {};
  tag.economy = {
    enabled: Boolean(tag.economy?.enabled),
    type: tag.economy?.type || 'VAULT',
    amount: Number(tag.economy?.amount || 0),
    takeCommand: tag.economy?.takeCommand || '',
    condition: tag.economy?.condition || ''
  };
  tag.voucher = {
    material: tag.voucher?.material || 'NAME_TAG',
    displayName: tag.voucher?.displayName || '%tag% <reset><white><bold>Voucher',
    lore: Array.isArray(tag.voucher?.lore) ? tag.voucher.lore : ['<reset><gray><strikethrough>-----------------------------', '<reset><yellow>Click to equip!', '<reset><gray><strikethrough>-----------------------------'],
    customModelData: Number(tag.voucher?.customModelData || 0),
    glow: tag.voucher?.glow !== false
  };
  tag.variants = Array.isArray(tag.variants) ? tag.variants.map(normalizeVariant) : [];
  tag.requirements = {
    enabled: Boolean(tag.requirements?.enabled),
    persistUnlock: Boolean(tag.requirements?.persistUnlock),
    mode: tag.requirements?.mode || 'all',
    list: Array.isArray(tag.requirements?.list) ? tag.requirements.list.map(normalizeRequirement) : []
  };
  return tag;
}

function normalizeVariant(variant) {
  return {
    identifier: variant.identifier || 'variant',
    tag: Array.isArray(variant.tag) ? variant.tag : [variant.tag || ''],
    permission: variant.permission || 'none',
    description: Array.isArray(variant.description) ? variant.description : [],
    rarity: variant.rarity || '',
    unlockedMaterial: variant.unlockedMaterial || 'NAME_TAG',
    unlockedDisplayName: variant.unlockedDisplayName || '<reset><gray>Variant: %tag%',
    unlockedCustomModelData: Number(variant.unlockedCustomModelData || 0),
    lockedMaterial: variant.lockedMaterial || 'BARRIER',
    lockedDisplayName: variant.lockedDisplayName || '<reset><red>Locked Variant: %tag%',
    lockedCustomModelData: Number(variant.lockedCustomModelData || 0)
  };
}

function normalizeRequirement(rule) {
  return {
    name: rule.name || 'new-rule',
    type: rule.type || 'placeholder',
    permission: rule.permission || '',
    placeholder: rule.placeholder || '',
    operator: rule.operator || '>=',
    value: rule.value || '',
    tag: rule.tag || '',
    economyType: rule.economyType || 'VAULT',
    amount: Number(rule.amount || 0),
    display: rule.display || '',
    loreDisplay: rule.loreDisplay || '',
    message: rule.message || ''
  };
}

function pushHistory() {
  history.push(JSON.stringify(tags));
  if (history.length > 40) history.shift();
}

function cloneTag(tag) {
  return JSON.parse(JSON.stringify(tag));
}

function setOriginalIdentifier(tag, identifier) {
  Object.defineProperty(tag, '__originalIdentifier', {
    value: identifier,
    writable: true,
    configurable: true
  });
}

function establishTagBaseline(sourceTags = tags) {
  originalTagSnapshots = new Map();
  sourceTags.forEach((tag) => {
    const normalized = normalizeTag(tag);
    originalTagSnapshots.set(normalized.identifier, cloneTag(normalized));
    setOriginalIdentifier(normalized, normalized.identifier);
  });
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
  tags = tags.map(normalizeTag);
  fillSelect($('categoryFilter'), categories, 'All categories');
  fillSelect($('rarityFilter'), rarities, 'All rarities');
  fillSelect($('fieldCategory'), categories);
  fillSelect($('fieldRarity'), rarities);
  fillSelect($('bulkMatchCategory'), categories, 'Any category');
  fillSelect($('bulkMatchRarity'), rarities, 'Any rarity');
  fillSelect($('bulkSetCategory'), categories, 'Keep category');
  fillSelect($('bulkSetRarity'), rarities, 'Keep rarity');
  renderTagList();
  renderDetails();
  renderBulkMatches();
  renderPayload();
  renderPluginInfo();
  generateColor();
}

function renderTagList() {
  const query = $('searchInput').value.trim().toLowerCase();
  const category = $('categoryFilter').value;
  const rarity = $('rarityFilter').value;
  const visible = tags
    .filter((tag) => !category || tag.category === category)
    .filter((tag) => !rarity || tag.rarity === rarity)
    .filter((tag) => !query || [tag.identifier, tag.permission, tag.category, tag.rarity, tag.tag.join(' '), tag.groups.join(' '), tag.effects.join(' '), tag.abilities.join(' '), Object.values(tag.customPlaceholders).join(' ')].join(' ').toLowerCase().includes(query))
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
  $('fieldGroups').value = tag.groups.join('\n');
  $('fieldEffects').value = tag.effects.join('\n');
  $('fieldAbilities').value = tag.abilities.join('\n');
  $('fieldCustomPlaceholders').value = keyValueLines(tag.customPlaceholders);
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

function updateSelectedInline(mutator) {
  const tag = selectedTag();
  if (!tag) return;
  pushHistory();
  mutator(tag);
  renderTagList();
  renderBulkMatches();
  renderPayload();
}

function nextDuplicateIdentifier(identifier) {
  const match = String(identifier || 'tag').match(/^(.*?)(\d+)?$/);
  const root = match?.[1] || 'tag';
  let suffix = Math.max(2, Number(match?.[2] || 1) + 1);
  let candidate = `${root}${suffix}`;
  const existing = new Set(tags.map((tag) => tag.identifier));
  while (existing.has(candidate)) {
    suffix++;
    candidate = `${root}${suffix}`;
  }
  return candidate;
}

function duplicateSelectedTag() {
  const tag = selectedTag();
  if (!tag) return;
  closeTagActionsMenu();
  syncSelectedFromForm();
  pushHistory();
  const sourceId = tag.identifier;
  const nextId = nextDuplicateIdentifier(sourceId);
  const copy = normalizeTag(JSON.parse(JSON.stringify(tag)));
  copy.identifier = nextId;
  copy.order = Number.isFinite(Number(copy.order)) ? Number(copy.order) + 1 : tags.length + 1;
  if (copy.permission === `supremetags.tag.${sourceId}` || copy.permission.endsWith(`.${sourceId}`)) {
    copy.permission = copy.permission.slice(0, -sourceId.length) + nextId;
  }
  tags.push(copy);
  selectedId = nextId;
  render();
}

function deleteSelectedTag() {
  const tag = selectedTag();
  if (!tag) return;
  closeTagActionsMenu();
  if (tags.length <= 1) {
    window.alert('You need at least one tag in the editor.');
    return;
  }
  const confirmed = window.confirm(`Delete tag "${tag.identifier}"? This cannot be undone unless you use Undo before applying changes.`);
  if (!confirmed) return;
  pushHistory();
  const index = tags.findIndex((item) => item.identifier === tag.identifier);
  if (index === -1) return;
  tags.splice(index, 1);
  selectedId = tags[Math.min(index, tags.length - 1)]?.identifier;
  render();
}

function resetSelectedTag() {
  const tag = selectedTag();
  if (!tag) return;
  closeTagActionsMenu();
  const confirmed = window.confirm(`Reset changes for "${tag.identifier}"? This restores only this tag to the settings from the loaded JSON.`);
  if (!confirmed) return;
  const originalIdentifier = tag.__originalIdentifier || tag.identifier;
  const original = originalTagSnapshots.get(originalIdentifier);
  if (!original) {
    window.alert(`No original JSON settings were found for "${tag.identifier}".`);
    return;
  }
  const index = tags.findIndex((item) => item === tag);
  if (index === -1) return;
  pushHistory();
  const restored = normalizeTag(cloneTag(original));
  setOriginalIdentifier(restored, originalIdentifier);
  tags[index] = restored;
  selectedId = restored.identifier;
  render();
}

function closeTagActionsMenu() {
  document.querySelector('.tag-actions-menu')?.removeAttribute('open');
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
bindField('fieldGroups', (tag, input) => tag.groups = lines(input.value));
bindField('fieldEffects', (tag, input) => tag.effects = lines(input.value));
bindField('fieldAbilities', (tag, input) => tag.abilities = lines(input.value));
bindField('fieldCustomPlaceholders', (tag, input) => tag.customPlaceholders = parseKeyValueLines(input.value));
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
    row.className = 'mini-card variant-card';
    row.innerHTML = `
      <div class="mini-card-head">
        <strong>${escapeHtml(variant.identifier)}</strong>
        <button type="button" class="danger-button" data-action="remove">×</button>
      </div>
      <div class="mini-card-grid">
        <label>Identifier<input data-field="identifier" value="${escapeAttr(variant.identifier)}"></label>
        <label>Permission<input data-field="permission" value="${escapeAttr(variant.permission)}"></label>
        <label>Rarity<select data-field="rarity"><option value="">Use tag rarity</option>${rarities.map((rarity) => `<option value="${escapeAttr(rarity)}">${escapeHtml(rarity)}</option>`).join('')}</select></label>
        <label class="full-span">Frames<textarea data-field="tag" rows="3">${escapeHtml(asLines(variant.tag))}</textarea></label>
        <label class="full-span">Description<textarea data-field="description" rows="2">${escapeHtml(asLines(variant.description))}</textarea></label>
        <label>Unlocked material<input data-field="unlockedMaterial" value="${escapeAttr(variant.unlockedMaterial)}"></label>
        <label>Unlocked name<input data-field="unlockedDisplayName" value="${escapeAttr(variant.unlockedDisplayName)}"></label>
        <label>Unlocked model data<input data-field="unlockedCustomModelData" type="number" min="0" value="${escapeAttr(variant.unlockedCustomModelData)}"></label>
        <label>Locked material<input data-field="lockedMaterial" value="${escapeAttr(variant.lockedMaterial)}"></label>
        <label>Locked name<input data-field="lockedDisplayName" value="${escapeAttr(variant.lockedDisplayName)}"></label>
        <label>Locked model data<input data-field="lockedCustomModelData" type="number" min="0" value="${escapeAttr(variant.lockedCustomModelData)}"></label>
      </div>
    `;
    row.querySelector('[data-field="rarity"]').value = variant.rarity || '';
    row.querySelectorAll('[data-field]').forEach((control) => {
      control.addEventListener('input', () => updateSelectedInline((target) => {
        const field = control.dataset.field;
        if (field === 'identifier') target.variants[index].identifier = slugify(control.value);
        else if (field === 'tag') target.variants[index].tag = lines(control.value);
        else if (field === 'description') target.variants[index].description = control.value.split('\n');
        else if (field.endsWith('CustomModelData')) target.variants[index][field] = Number(control.value || 0);
        else target.variants[index][field] = control.value;
      }));
    });
    row.querySelector('[data-action="remove"]').addEventListener('click', () => updateSelected((target) => target.variants.splice(index, 1)));
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
    row.className = 'mini-card requirement-card';
    row.innerHTML = `
      <div class="mini-card-head">
        <strong>${escapeHtml(rule.name)}</strong>
        <button type="button" class="danger-button" data-action="remove">×</button>
      </div>
      <div class="mini-card-grid">
        <label>Name<input data-field="name" value="${escapeAttr(rule.name)}"></label>
        <label>Type<select data-field="type">
          ${['placeholder', 'permission', 'tag', 'economy'].map((type) => `<option value="${type}">${type}</option>`).join('')}
        </select></label>
        <label>Operator<select data-field="operator">
          ${['>=', '<=', '>', '<', '==', '!=', 'contains', 'starts-with', 'ends-with'].map((operator) => `<option value="${escapeAttr(operator)}">${escapeHtml(operator)}</option>`).join('')}
        </select></label>
        <label>Permission<input data-field="permission" value="${escapeAttr(rule.permission)}"></label>
        <label>Placeholder<input data-field="placeholder" value="${escapeAttr(rule.placeholder)}" placeholder="%statistic_time_played%"></label>
        <label>Value<input data-field="value" value="${escapeAttr(rule.value)}"></label>
        <label>Required tag<input data-field="tag" value="${escapeAttr(rule.tag)}"></label>
        <label>Economy type<input data-field="economyType" value="${escapeAttr(rule.economyType)}"></label>
        <label>Amount<input data-field="amount" type="number" min="0" step="0.01" value="${escapeAttr(rule.amount)}"></label>
        <label class="full-span">Menu display<input data-field="display" value="${escapeAttr(rule.display)}"></label>
        <label class="full-span">Lore display<input data-field="loreDisplay" value="${escapeAttr(rule.loreDisplay)}"></label>
        <label class="full-span">Failure message<input data-field="message" value="${escapeAttr(rule.message)}"></label>
      </div>
    `;
    row.querySelector('[data-field="type"]').value = rule.type || 'placeholder';
    row.querySelector('[data-field="operator"]').value = rule.operator || '>=';
    row.querySelectorAll('[data-field]').forEach((control) => {
      control.addEventListener('input', () => updateSelectedInline((target) => {
        const field = control.dataset.field;
        if (field === 'name') target.requirements.list[index].name = slugify(control.value);
        else if (field === 'amount') target.requirements.list[index].amount = Number(control.value || 0);
        else target.requirements.list[index][field] = control.value;
      }));
    });
    row.querySelector('[data-action="remove"]').addEventListener('click', () => updateSelected((target) => target.requirements.list.splice(index, 1)));
    $('requirementTable').appendChild(row);
  });
}

$('addVariantButton').addEventListener('click', () => updateSelected((tag) => tag.variants.push(normalizeVariant({
  identifier: `${tag.identifier}_variant`,
  tag: [tag.tag[0]],
  permission: `${tag.permission}.variant`,
  rarity: tag.rarity
}))));
$('addRequirementButton').addEventListener('click', () => updateSelected((tag) => tag.requirements.list.push(normalizeRequirement({
  name: 'new-rule',
  type: 'permission',
  permission: tag.permission,
  display: '<reset><white>- <gray>Required permission'
}))));

document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((node) => node.classList.remove('active'));
    document.querySelectorAll('.view').forEach((node) => node.classList.remove('active'));
    button.classList.add('active');
    $(`view-${button.dataset.view}`).classList.add('active');
    if (button.dataset.view === 'colors') {
      generateColor();
    }
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
$('duplicateTagButton').addEventListener('click', duplicateSelectedTag);
$('resetTagButton').addEventListener('click', resetSelectedTag);
$('deleteTagButton').addEventListener('click', deleteSelectedTag);

$('newTagButton').addEventListener('click', () => {
  pushHistory();
  const next = `new_tag_${tags.length + 1}`;
  tags.push({
    identifier: next,
    tag: ['<reset><gray>[New Tag]'],
    permission: `supremetags.tag.${next}`,
    groups: [],
    category: 'default',
    rarity: 'common',
    order: tags.length + 1,
    withdrawable: true,
    description: ['New tag description'],
    displayName: '<reset><gray>Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    effects: [],
    abilities: [],
    customPlaceholders: {},
    economy: { enabled: false, type: 'VAULT', amount: 0, takeCommand: '', condition: '' },
    voucher: { material: 'NAME_TAG', displayName: '%tag% <reset><white><bold>Voucher', customModelData: 0, glow: true, lore: ['<reset><gray><strikethrough>-----------------------------', '<reset><yellow>Click to equip!', '<reset><gray><strikethrough>-----------------------------'] },
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
  const matches = getBulkMatches();
  if (!matches.length) return;
  pushHistory();
  const setCategory = $('bulkSetCategory').value;
  const setRarity = $('bulkSetRarity').value;
  const permissionPrefix = $('bulkPermission').value.trim();
  const addGroup = $('bulkAddGroup').value.trim();
  const removeGroup = $('bulkRemoveGroup').value.trim();
  const setCost = $('bulkSetCost').value;
  const economyState = $('bulkEconomyState').value;

  matches.forEach((tag) => {
    if (setCategory) tag.category = setCategory;
    if (setRarity) tag.rarity = setRarity;
    if (permissionPrefix) tag.permission = `${permissionPrefix}${tag.identifier}`;
    if (addGroup && !tag.groups.includes(addGroup)) tag.groups.push(addGroup);
    if (removeGroup) tag.groups = tag.groups.filter((group) => group !== removeGroup);
    if (setCost !== '') tag.economy.amount = Number(setCost || 0);
    if (economyState !== '') tag.economy.enabled = economyState === 'true';
  });
  render();
});

$('toggleBulkButton').addEventListener('click', () => $('bulkPanel').classList.toggle('active'));
$('closeBulkButton').addEventListener('click', () => $('bulkPanel').classList.remove('active'));
['bulkMatchCategory', 'bulkMatchRarity', 'bulkMatchText', 'bulkSetCategory', 'bulkSetRarity', 'bulkPermission', 'bulkAddGroup', 'bulkRemoveGroup', 'bulkSetCost', 'bulkEconomyState']
  .forEach((id) => $(id).addEventListener('input', renderBulkMatches));

function getBulkMatches() {
  const category = $('bulkMatchCategory').value;
  const rarity = $('bulkMatchRarity').value;
  const query = $('bulkMatchText').value.trim().toLowerCase();
  return tags.filter((tag) => {
    if (category && tag.category !== category) return false;
    if (rarity && tag.rarity !== rarity) return false;
    if (!query) return true;
    return [
      tag.identifier,
      tag.permission,
      tag.category,
      tag.rarity,
      tag.tag.join(' '),
      tag.description.join(' '),
      tag.groups.join(' '),
      tag.abilities.join(' '),
      Object.entries(tag.customPlaceholders).map(([key, value]) => `${key} ${value}`).join(' ')
    ].join(' ').toLowerCase().includes(query);
  });
}

function renderBulkMatches() {
  const matches = getBulkMatches();
  $('bulkSummary').textContent = matches.length === 1 ? '1 tag matched' : `${matches.length} tags matched`;
  $('bulkMatches').innerHTML = matches.length
    ? matches.slice(0, 24).map((tag) => `<span>${escapeHtml(tag.identifier)}</span>`).join('') + (matches.length > 24 ? `<span>+${matches.length - 24} more</span>` : '')
    : '<p>No tags match the current filters.</p>';
}

function renderPayload() {
  currentPayload();
  renderPluginInfo();
}

function currentPayload() {
  return {
    schemaVersion: 1,
    editor: 'supremetags-web',
    editorVersion: editorInfo.version,
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
}

function renderPluginInfo() {
  const variantCount = tags.reduce((total, tag) => total + (Array.isArray(tag.variants) ? tag.variants.length : 0), 0);
  const requirementCount = tags.reduce((total, tag) => total + (Array.isArray(tag.requirements?.list) ? tag.requirements.list.length : 0), 0);
  $('installedVersion').textContent = pluginInfo.installedVersion;
  $('latestVersion').textContent = pluginInfo.latestVersion;
  $('editorVersion').textContent = editorInfo.version;
  $('serverVersion').textContent = pluginInfo.serverVersion;
  $('storageMode').textContent = pluginInfo.storageMode;
  $('editorSessionState').textContent = hasSessionLink ? 'Connected' : 'Local preview';
  $('pluginTagsLoaded').textContent = tags.length;
  $('editorVariantCount').textContent = variantCount;
  $('editorRequirementCount').textContent = requirementCount;
  $('pluginCategoriesLoaded').textContent = categories.length;
  $('editorRarityCount').textContent = rarities.length;
  $('editorUndoCount').textContent = history.length;
  $('versionCheckedAt').textContent = pluginInfo.checkedAt;

  const outdated = compareVersions(pluginInfo.installedVersion, pluginInfo.latestVersion) < 0;
  $('pluginVersionState').textContent = outdated ? 'Update available' : 'Up to date';
  $('pluginVersionState').classList.toggle('outdated', outdated);
  $('sidebarPluginTitle').textContent = 'SupremeTags';
  $('sidebarPluginVersion').textContent = `Plugin v${pluginInfo.installedVersion} · Editor v${editorInfo.version}`;
  $('sidebarStatusDot').classList.toggle('outdated', outdated);
  $('updateCallout').classList.toggle('outdated', outdated);
  $('updateCallout').innerHTML = outdated
    ? `<span data-icon="info">${icons.info}</span><div><strong>Update available</strong><p>SupremeTags ${pluginInfo.latestVersion} is available on SpigotMC. Apply or discard your current session before updating the plugin.</p></div>`
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

$('applyChangesButton').addEventListener('click', async () => {
  syncSelectedFromForm();
  const originalApplyText = $('applyChangesButton').innerHTML;
  $('applyChangesButton').disabled = true;
  $('applyChangesButton').innerHTML = `${icons.download} Saving...`;
  if (!activeSession.id) {
    $('applyChangesButton').disabled = false;
    $('applyChangesButton').innerHTML = originalApplyText;
    showApplyModal('/tags editor web', 'This page is not connected to a web session. Create a new session from your server first.');
    return;
  }

  const saved = await saveSessionDraft();
  $('applyChangesButton').disabled = false;
  $('applyChangesButton').innerHTML = originalApplyText;
  if (saved) {
    lockEditorAfterApply();
    showApplyModal(`/tags editor apply ${activeSession.id}`, 'Run this command on your server to apply the saved editor changes.');
  } else {
    showApplyModal('/tags editor web', 'The web session could not be saved or may have expired. Create a new session and try again.');
  }
});

renderColorStops();
$('colorText').addEventListener('input', () => {
  generateColor();
});
$('colorText').addEventListener('blur', syncControlsFromInput);
$('colorOutput').addEventListener('click', copyColorOutput);
$('colorOutput').addEventListener('focus', () => $('colorOutput').select());
document.querySelectorAll('[data-format-tag]').forEach((button) => {
  button.addEventListener('mousedown', (event) => event.preventDefault());
  button.addEventListener('click', () => applyFormatTag(button.dataset.formatTag));
});
$('formatColorButton').addEventListener('mousedown', (event) => {
  event.preventDefault();
  pendingFormatColorSelection = readTextSelection($('colorText'));
});
$('formatColorButton').addEventListener('click', (event) => {
  event.stopPropagation();
  pendingFormatColorSelection = pendingFormatColorSelection || readTextSelection($('colorText'));
  toggleColorPicker($('formatColorPopover'));
});
$('formatColorInput').addEventListener('input', () => {
  $('formatColorSwatch').style.backgroundColor = $('formatColorInput').value;
});
$('formatColorInput').addEventListener('change', () => {
  applyFormatColor($('formatColorInput').value, pendingFormatColorSelection);
  pendingFormatColorSelection = null;
});
$('formatColorPickerControl').addEventListener('input', () => setFormatColorValue($('formatColorPickerControl').value));
$('formatColorPickerControl').addEventListener('change', () => applySelectedFormatColor());
document.querySelectorAll('[data-color-mode]').forEach((button) => button.addEventListener('click', () => {
  colorMode = button.dataset.colorMode;
  renderColorStops();
  applyColorSyntaxToInput();
}));
$('addColorStopButton').addEventListener('click', () => {
  if (colorMode === 'solid') colorMode = 'gradient';
  colorStops.push(colorStops[colorStops.length - 1] || '#ffffff');
  renderColorStops();
  applyColorSyntaxToInput();
});
$('removeColorStopButton').addEventListener('click', () => {
  if (colorStops.length <= 1) return;
  colorStops.pop();
  activeColorStopIndex = Math.min(activeColorStopIndex, colorStops.length - 1);
  renderColorStops();
  applyColorSyntaxToInput();
});
$('copyColorButton').addEventListener('click', copyColorOutput);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.color-stop-row, .format-color-button, .format-color-popover')) {
    document.querySelectorAll('.color-picker-popover').forEach((panel) => panel.hidden = true);
  }
  if (!event.target.closest('.tag-actions-menu')) {
    closeTagActionsMenu();
  }
});
renderFormatColorPresets();

async function copyColorOutput() {
  await navigator.clipboard?.writeText($('colorOutput').value);
  const button = $('copyColorButton');
  const old = button.innerHTML;
  button.innerHTML = `${icons.copy}Copied`;
  setTimeout(() => button.innerHTML = old, 1100);
}

function generateColor() {
  const rawText = $('colorText').value || '';
  const generated = normalizeColorLabInput(rawText);
  $('colorOutput').value = generated;
  $('colorPreview').innerHTML = miniMessageToHtml(generated);
}

function renderColorStops() {
  const container = $('colorStops');
  container.innerHTML = '';
  document.querySelectorAll('[data-color-mode]').forEach((button) => button.classList.toggle('active', button.dataset.colorMode === colorMode));
  $('colorStops').classList.toggle('empty', colorMode === 'uncolored');
  $('addColorStopButton').disabled = colorMode === 'uncolored' || colorMode === 'solid';
  $('removeColorStopButton').disabled = colorMode !== 'gradient' || colorStops.length <= 1;

  if (colorMode === 'uncolored') {
    container.innerHTML = '<p class="color-mode-note">Color tags are removed. Formatting tags still apply.</p>';
    $('colorStopCount').textContent = 'No color';
    return;
  }

  const visibleStops = colorMode === 'solid' ? colorStops.slice(0, 1) : colorStops;
  activeColorStopIndex = colorMode === 'solid' ? 0 : Math.min(activeColorStopIndex, visibleStops.length - 1);
  visibleStops.forEach((color, index) => {
    const row = document.createElement('div');
    row.className = `color-stop-row${index === activeColorStopIndex ? ' active' : ''}`;
    row.innerHTML = `
      <span>${index + 1}</span>
      <button type="button" class="color-swatch-button" style="--stop-color:${escapeAttr(color)}" aria-label="Open color picker ${index + 1}" title="${escapeAttr(color.toUpperCase())}">
        <span></span>
      </button>
      <div class="color-picker-popover" hidden>
        <input type="color" class="color-picker-control" value="${escapeAttr(color)}" aria-label="Color ${index + 1}">
        <div class="color-picker-presets">
          ${colorPresets.map((preset) => `<button type="button" class="color-preset" style="background-color:${escapeAttr(preset)}" title="${escapeAttr(preset.toUpperCase())}" data-color-preset="${escapeAttr(preset)}"></button>`).join('')}
        </div>
      </div>
      <input type="text" value="${escapeAttr(color.toUpperCase())}" aria-label="Hex color ${index + 1}" spellcheck="false">
      <button type="button" class="danger-button" title="Remove color" ${colorMode !== 'gradient' || colorStops.length <= 1 ? 'disabled' : ''}>x</button>
    `;
    const swatchButton = row.querySelector('.color-swatch-button');
    const picker = row.querySelector('.color-picker-control');
    const hexInput = row.querySelector('input[type="text"]');
    const popover = row.querySelector('.color-picker-popover');
    const removeButton = row.querySelector('.danger-button');
    row.addEventListener('click', (event) => {
      if (!event.target.closest('.color-picker-popover')) setActiveColorStop(index);
    });
    swatchButton.addEventListener('click', (event) => {
      event.stopPropagation();
      setActiveColorStop(index);
      toggleColorPicker(popover);
    });
    hexInput.addEventListener('focus', () => setActiveColorStop(index));
    picker.addEventListener('input', () => {
      activeColorStopIndex = index;
      setColorStopValue(index, picker.value, row);
    });
    row.querySelectorAll('[data-color-preset]').forEach((button) => button.addEventListener('click', (event) => {
      event.stopPropagation();
      setColorStopValue(index, button.dataset.colorPreset, row);
    }));
    hexInput.addEventListener('input', () => {
      const normalized = normalizeHex(hexInput.value);
      if (!normalized) return;
      activeColorStopIndex = index;
      updateColorStop(index, normalized, false);
      syncColorStopRow(row, normalized);
    });
    removeButton.addEventListener('click', () => {
      if (colorStops.length <= 1) return;
      colorStops.splice(index, 1);
      activeColorStopIndex = Math.min(activeColorStopIndex, colorStops.length - 1);
      renderColorStops();
      applyColorSyntaxToInput();
    });
    container.appendChild(row);
  });
  $('colorStopCount').textContent = colorMode === 'solid' ? 'Solid' : `${colorStops.length} ${colorStops.length === 1 ? 'stop' : 'stops'}`;
}

function toggleColorPicker(popover) {
  const wasOpen = !popover.hidden;
  document.querySelectorAll('.color-picker-popover').forEach((panel) => panel.hidden = true);
  popover.hidden = wasOpen;
}

function renderFormatColorPresets() {
  const container = $('formatColorPresets');
  container.innerHTML = '';
  colorPresets.forEach((color) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'color-preset';
    button.title = color.toUpperCase();
    button.style.backgroundColor = color;
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      setFormatColorValue(color);
      applySelectedFormatColor();
    });
    container.appendChild(button);
  });
}

function setFormatColorValue(color) {
  const normalized = normalizeHex(color);
  if (!normalized) return;
  $('formatColorInput').value = normalized;
  $('formatColorPickerControl').value = normalized;
  $('formatColorSwatch').style.backgroundColor = normalized;
}

function applySelectedFormatColor() {
  applyFormatColor($('formatColorPickerControl').value, pendingFormatColorSelection);
  pendingFormatColorSelection = null;
}

function setActiveColorStop(index) {
  if (colorMode === 'uncolored') return;
  activeColorStopIndex = colorMode === 'solid' ? 0 : Math.min(index, colorStops.length - 1);
  document.querySelectorAll('.color-stop-row').forEach((row, rowIndex) => row.classList.toggle('active', rowIndex === activeColorStopIndex));
}

function setColorStopValue(index, value, row) {
  const normalized = normalizeHex(value);
  if (!normalized) return;
  activeColorStopIndex = index;
  colorStops[index] = normalized;
  syncColorStopRow(row, normalized);
  applyColorSyntaxToInput();
}

function syncColorStopRow(row, color) {
  row.querySelector('.color-swatch-button').style.setProperty('--stop-color', color);
  row.querySelector('.color-swatch-button').title = color.toUpperCase();
  row.querySelector('.color-picker-control').value = color;
  row.querySelector('input[type="text"]').value = color.toUpperCase();
}

function updateColorStop(index, value, rerender = true) {
  const normalized = normalizeHex(value);
  if (!normalized) return;
  colorStops[index] = normalized;
  if (rerender) renderColorStops();
  applyColorSyntaxToInput();
}

function applyColorSyntaxToInput() {
  const input = $('colorText');
  input.value = applyColorMode(input.value);
  generateColor();
}

function applyColorMode(input) {
  const normalized = normalizeColorLabInput(input);
  const bracketed = readBracketedColorBody(normalized);
  if (bracketed) {
    return `<dark_gray>[${applyColorBody(bracketed)}<dark_gray>]`;
  }

  const body = stripColorTags(stripOuterColorTags(normalized));
  return applyColorBody(body);
}

function applyColorBody(body) {
  if (!body) return '';
  const colors = colorStops.map((stop) => normalizeHex(stop)).filter(Boolean);
  if (colorMode === 'uncolored' || !colors.length) return body;
  if (colorMode === 'solid' || colors.length === 1) {
    const color = colors[0];
    return `<${color}>${body}</${color}>`;
  }
  return `<gradient:${colors.join(':')}>${body}</gradient>`;
}

function readBracketedColorBody(input) {
  const value = String(input || '').trim();
  const match = value.match(/^<dark_gray>\[(?:<gradient:[^>]+>|<#[0-9a-fA-F]{6}>)([\s\S]*?)(?:<\/gradient>|<\/#[0-9a-fA-F]{6}>)(?:<dark_gray>|<\/dark_gray>)\]$/i);
  return match ? stripColorTags(match[1]) : '';
}

function normalizeColorLabInput(input) {
  const value = String(input || '');
  return hasMiniMessageTags(value) ? value : minecraftCodesToMiniMessage(value);
}

function syncControlsFromInput() {
  const parsed = readOuterColorTags($('colorText').value);
  if (!parsed) return;
  colorMode = parsed.mode;
  if (parsed.colors.length) colorStops = parsed.colors;
  renderColorStops();
}

function readOuterColorTags(input) {
  const value = String(input || '').trim();
  const gradientMatch = value.match(/^<gradient:([^>]+)>[\s\S]*<\/gradient>$/i);
  if (gradientMatch) {
    const colors = gradientMatch[1].split(':').map(normalizeHex).filter(Boolean);
    return { mode: colors.length > 1 ? 'gradient' : 'solid', colors };
  }
  const solidMatch = value.match(/^<#[0-9a-fA-F]{6}>[\s\S]*<\/#[0-9a-fA-F]{6}>$/i);
  if (solidMatch) return { mode: 'solid', colors: [normalizeHex(value.slice(1, 8))] };
  return { mode: 'uncolored', colors: [] };
}

function stripOuterColorTags(input) {
  const value = String(input || '').trim();
  const gradientMatch = value.match(/^<gradient:[^>]+>([\s\S]*)<\/gradient>$/i);
  if (gradientMatch) return gradientMatch[1];
  const solidMatch = value.match(/^<#[0-9a-fA-F]{6}>([\s\S]*)<\/#[0-9a-fA-F]{6}>$/i);
  if (solidMatch) return solidMatch[1];
  return value;
}

function stripColorTags(input) {
  const colorNames = Object.keys(miniMessageColors).join('|');
  const pattern = new RegExp(`</?(?:gradient:[^>]+|gradient|#[0-9a-fA-F]{6}|${colorNames})>`, 'gi');
  return String(input || '').replace(pattern, '');
}

function hasMiniMessageTags(input) {
  return /<\/?(?:gradient:[^>]+|reset|dark_gray|dark_grey|gray|grey|white|black|red|green|blue|yellow|gold|aqua|dark_red|dark_green|dark_blue|dark_aqua|dark_purple|light_purple|b|bold|i|italic|u|underlined|st|strikethrough|obf|obfuscated|#[0-9a-fA-F]{6})\b/i.test(input || '');
}

function minecraftCodesToMiniMessage(input) {
  const chars = [...(input || '')];
  const active = [];
  let output = '';
  const tagFor = { l: 'b', o: 'i', n: 'u', m: 'st', k: 'obf' };

  const closeAll = () => {
    while (active.length) output += `</${active.pop()}>`;
  };

  for (let i = 0; i < chars.length; i++) {
    const code = readMinecraftCode(chars, i);
    if (code) {
      const raw = normalizeCodePrefix(code.raw).toLowerCase();
      const next = raw[1];
      if (next === 'r') {
        closeAll();
        output += '<reset>';
      } else if (raw.startsWith('&#')) {
        output += `<#${raw.slice(2)}>`;
      } else if (raw.startsWith('&x')) {
        output += `<#${raw.replace(/[&x]/gi, '')}>`;
      } else if (raw.startsWith('<#')) {
        output += raw;
      } else if (legacyColors[next]) {
        output += `<${legacyMiniMessageColors[next]}>`;
      } else if (tagFor[next] && !active.includes(tagFor[next])) {
        output += `<${tagFor[next]}>`;
        active.push(tagFor[next]);
      }
      i += code.length - 1;
      continue;
    }
    output += escapeMiniMessage(chars[i]);
  }

  closeAll();
  return output;
}

function tokenizeMinecraftText(input) {
  const chars = [...input];
  const tokens = [];
  for (let i = 0; i < chars.length; i++) {
    const code = readMinecraftCode(chars, i);
    if (code) {
      const isFormat = /[&§][klmnorKLMNOR]/.test(code.raw);
      if (isFormat) tokens.push({ type: 'format', value: normalizeCodePrefix(code.raw) });
      i += code.length - 1;
      continue;
    }
    tokens.push({ type: 'char', value: chars[i] });
  }
  return tokens;
}

function readMinecraftCode(chars, index) {
  const current = chars[index];
  const next = chars[index + 1];
  if ((current === '&' || current === '§') && next === '#') {
    const hex = chars.slice(index + 2, index + 8).join('');
    if (/^[0-9a-fA-F]{6}$/.test(hex)) return { raw: `${current}#${hex}`, length: 8 };
  }
  if ((current === '&' || current === '§') && next && /[0-9a-fk-orA-FK-OR]/.test(next)) {
    return { raw: `${current}${next}`, length: 2 };
  }
  if ((current === '&' || current === '§') && next?.toLowerCase() === 'x') {
    const sequence = chars.slice(index, index + 14).join('');
    const pattern = current === '&'
      ? /^&x(&[0-9a-fA-F]){6}$/
      : /^§x(§[0-9a-fA-F]){6}$/;
    if (pattern.test(sequence)) return { raw: sequence, length: 14 };
  }
  if (current === '<' && next === '#') {
    const hex = chars.slice(index + 2, index + 8).join('');
    if (/^[0-9a-fA-F]{6}$/.test(hex) && chars[index + 8] === '>') return { raw: `<#${hex}>`, length: 9 };
  }
  return null;
}

function normalizeCodePrefix(code) {
  return code.startsWith('§') ? `&${code.slice(1)}` : code;
}


function stripMinecraftCodes(input) {
  const chars = [...input];
  let output = '';
  for (let i = 0; i < chars.length; i++) {
    const code = readMinecraftCode(chars, i);
    if (code) {
      i += code.length - 1;
      continue;
    }
    output += chars[i];
  }
  return output;
}

function escapeMiniMessage(value) {
  return String(value).replace(/[\\<>]/g, (char) => `\\${char}`);
}

function applyFormatTag(tag) {
  const input = $('colorText');
  if (tag === 'reset') {
    insertMiniMessageAtSelection(input, '<reset>', '');
  } else {
    insertMiniMessageAtSelection(input, `<${tag}>`, `</${tag}>`);
  }
  generateColor();
}

function applyFormatColor(color, selection) {
  const normalized = normalizeHex(color);
  if (!normalized) return;
  insertMiniMessageAtSelection($('colorText'), `<${normalized}>`, `</${normalized}>`, selection);
  generateColor();
}

function readTextSelection(input) {
  return {
    start: input.selectionStart ?? input.value.length,
    end: input.selectionEnd ?? input.value.length
  };
}

function insertMiniMessageAtSelection(input, openTag, closeTag, selection = readTextSelection(input)) {
  const start = selection.start;
  const end = selection.end;
  const selected = input.value.slice(start, end);
  const replacement = `${openTag}${selected}${closeTag}`;
  input.value = `${input.value.slice(0, start)}${replacement}${input.value.slice(end)}`;
  input.focus();
  if (selected) {
    input.setSelectionRange(start + openTag.length, start + openTag.length + selected.length);
  } else {
    input.setSelectionRange(start + openTag.length, start + openTag.length);
  }
}

function normalizeHex(value) {
  const clean = String(value || '').trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(clean)) {
    return `#${[...clean].map((char) => `${char}${char}`).join('').toLowerCase()}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(clean)) return `#${clean.toLowerCase()}`;
  return '';
}

function gradientStops(stops, steps) {
  const colors = stops.map((stop) => normalizeHex(stop)).filter(Boolean);
  if (!colors.length) return [];
  if (colors.length === 1 || steps <= 1) return Array.from({ length: Math.max(1, steps) }, () => colors[0]);

  const segmentCount = colors.length - 1;
  return Array.from({ length: steps }, (_, index) => {
    const position = (index / (steps - 1)) * segmentCount;
    const segment = Math.min(Math.floor(position), segmentCount - 1);
    const local = position - segment;
    const a = hexToRgb(colors[segment]);
    const b = hexToRgb(colors[segment + 1]);
    return rgbToHex({
      r: Math.round(a.r + (b.r - a.r) * local),
      g: Math.round(a.g + (b.g - a.g) * local),
      b: Math.round(a.b + (b.b - a.b) * local)
    });
  });
}

function minecraftToHtml(input) {
  if (/<gradient:|<\/?(?:b|bold|i|italic|u|underlined|st|strikethrough|obf|#[0-9a-fA-F]{6})\b/i.test(input || '')) {
    return miniMessageToHtml(input);
  }
  let html = '';
  let color = '#eef4f8';
  const styles = new Set();
  const chars = [...(input || '')];
  for (let i = 0; i < chars.length; i++) {
    const code = readMinecraftCode(chars, i);
    if (code) {
      const raw = code.raw;
      const lower = raw.toLowerCase();
      if (lower.startsWith('&#') || lower.startsWith('§#')) {
        color = `#${raw.slice(2)}`;
        i += code.length - 1;
        continue;
      }
      if (lower.startsWith('<#')) {
        color = `#${raw.slice(2, 8)}`;
        i += code.length - 1;
        continue;
      }
      if (lower.startsWith('&x') || lower.startsWith('§x')) {
        color = `#${raw.replace(/[&§x]/gi, '')}`;
        i += code.length - 1;
        continue;
      }
      const next = lower[1];
      if (legacyColors[next]) {
        color = legacyColors[next];
        styles.clear();
      } else if (next === 'r') {
        color = '#eef4f8';
        styles.clear();
      } else if ('klmno'.includes(next)) {
        styles.add(next);
      }
      i += code.length - 1;
      continue;
    }
    html += `<span style="${styleAttr(color, styles)}">${escapeHtml(chars[i])}</span>`;
  }
  return html;
}

function miniMessageToHtml(input) {
  const value = String(input || '');
  const gradientPattern = /<gradient:([^>]+)>([\s\S]*?)<\/gradient>/ig;
  let html = '';
  let cursor = 0;
  let match;

  while ((match = gradientPattern.exec(value))) {
    html += miniMessageSegmentToHtml(value.slice(cursor, match.index), null);
    const colors = match[1].split(':').map(normalizeHex).filter(Boolean);
    html += miniMessageSegmentToHtml(match[2], colors);
    cursor = match.index + match[0].length;
  }

  if (cursor) {
    html += miniMessageSegmentToHtml(value.slice(cursor), null);
    return html;
  }

  return miniMessageSegmentToHtml(value, null);
}

function miniMessageSegmentToHtml(input, gradientColors) {
  const chars = [...String(input || '')];
  const styles = new Set();
  let color = '#eef4f8';
  const colorStack = [];
  let html = '';
  const visibleLength = stripMiniMessageTags(input).length;
  const colors = gradientColors ? gradientStops(gradientColors, Math.max(1, visibleLength)) : [];
  let colorIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '<') {
      const end = chars.indexOf('>', i + 1);
      if (end > i) {
        const tag = chars.slice(i + 1, end).join('').trim().toLowerCase();
        const closingTag = tag.startsWith('/') ? tag.slice(1) : '';
        if (miniMessageColors[tag]) {
          colorStack.push(color);
          color = miniMessageColors[tag];
        } else if (miniMessageColors[closingTag]) {
          color = colorStack.pop() || '#eef4f8';
        }
        else if (tag === 'reset') {
          color = '#eef4f8';
          colorStack.length = 0;
          styles.clear();
        } else if (tag === 'b' || tag === 'bold') styles.add('l');
        else if (tag === '/b' || tag === '/bold') styles.delete('l');
        else if (tag === 'i' || tag === 'italic') styles.add('o');
        else if (tag === '/i' || tag === '/italic') styles.delete('o');
        else if (tag === 'u' || tag === 'underlined') styles.add('n');
        else if (tag === '/u' || tag === '/underlined') styles.delete('n');
        else if (tag === 'st' || tag === 'strikethrough') styles.add('m');
        else if (tag === '/st' || tag === '/strikethrough') styles.delete('m');
        else if (tag === 'obf' || tag === 'obfuscated') styles.add('k');
        else if (tag === '/obf' || tag === '/obfuscated') styles.delete('k');
        else if (/^#[0-9a-f]{6}$/.test(tag)) {
          colorStack.push(color);
          color = tag;
        } else if (/^\/#[0-9a-f]{6}$/.test(tag)) {
          color = colorStack.pop() || '#eef4f8';
        }
        i = end;
        continue;
      }
    }

    const nextColor = colors.length ? colors[Math.min(colorIndex, colors.length - 1)] : color;
    html += `<span style="${styleAttr(nextColor, styles)}">${escapeHtml(chars[i])}</span>`;
    colorIndex++;
  }

  return html;
}

function stripMiniMessageTags(input) {
  return String(input || '').replace(/<[^>]+>/g, '');
}

function styleAttr(color, styles) {
  const declarations = [`color:${color}`];
  if (styles.has('l')) declarations.push('font-weight:800');
  if (styles.has('o')) declarations.push('font-style:italic');
  const decorations = [];
  if (styles.has('n')) decorations.push('underline');
  if (styles.has('m')) decorations.push('line-through');
  if (decorations.length) declarations.push(`text-decoration:${decorations.join(' ')}`);
  if (styles.has('k')) declarations.push('filter:blur(.8px)');
  return declarations.join(';');
}

const legacyColors = {
  0: '#000000', 1: '#0000aa', 2: '#00aa00', 3: '#00aaaa',
  4: '#aa0000', 5: '#aa00aa', 6: '#ffaa00', 7: '#aaaaaa',
  8: '#555555', 9: '#5555ff', a: '#55ff55', b: '#55ffff',
  c: '#ff5555', d: '#ff55ff', e: '#ffff55', f: '#ffffff'
};

const legacyMiniMessageColors = {
  0: 'black', 1: 'dark_blue', 2: 'dark_green', 3: 'dark_aqua',
  4: 'dark_red', 5: 'dark_purple', 6: 'gold', 7: 'gray',
  8: 'dark_gray', 9: 'blue', a: 'green', b: 'aqua',
  c: 'red', d: 'light_purple', e: 'yellow', f: 'white'
};

const miniMessageColors = {
  black: '#000000',
  dark_blue: '#0000aa',
  dark_green: '#00aa00',
  dark_aqua: '#00aaaa',
  dark_red: '#aa0000',
  dark_purple: '#aa00aa',
  gold: '#ffaa00',
  gray: '#aaaaaa',
  grey: '#aaaaaa',
  dark_gray: '#555555',
  dark_grey: '#555555',
  blue: '#5555ff',
  green: '#55ff55',
  aqua: '#55ffff',
  red: '#ff5555',
  light_purple: '#ff55ff',
  yellow: '#ffff55',
  white: '#ffffff'
};

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

function lines(value) {
  return String(value || '').split('\n').map((line) => line.trim()).filter(Boolean);
}

function asLines(value) {
  return Array.isArray(value) ? value.join('\n') : String(value || '');
}

function parseKeyValueLines(value) {
  return lines(value).reduce((result, line) => {
    const separator = line.indexOf('=');
    if (separator <= 0) return result;
    const key = line.slice(0, separator).trim();
    const val = line.slice(separator + 1).trim();
    if (key) result[key] = val;
    return result;
  }, {});
}

function keyValueLines(value) {
  return Object.entries(value || {}).map(([key, val]) => `${key}=${val}`).join('\n');
}

function firstVariantFrame(variant) {
  if (Array.isArray(variant.tag)) {
    return variant.tag[0] || '';
  }
  return variant.tag || '';
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
  if (!activeSession.token || !activeSession.apiUrl) {
    showInvalidSession();
    return;
  }

  try {
    const api = activeSession.apiUrl.replace(/\/$/, '');
    if (!activeSession.id) {
      const resolveResponse = await fetch(`${api}/sessions/resolve?token=${encodeURIComponent(activeSession.token)}`, { cache: 'no-store' });
      if (!resolveResponse.ok) {
        throw new Error(resolveResponse.status === 404 ? 'Session was not found or has expired.' : `HTTP ${resolveResponse.status}`);
      }
      const resolved = await resolveResponse.json();
      activeSession.id = resolved.id;
    }

    const response = await fetch(`${api}/sessions/${encodeURIComponent(activeSession.id)}?token=${encodeURIComponent(activeSession.token)}`);
    if (response.status === 410) {
      showInvalidSession('This editor session has already been applied or has expired. Create a new session with /tags editor web.');
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const session = await response.json();
    applyPayload(session.payload);
  } catch (error) {
    showInvalidSession('Session expired. Run /tags dump again if required.');
  }
}

async function saveSessionDraft() {
  if (!activeSession.id || !activeSession.token || !activeSession.apiUrl) {
    return false;
  }

  try {
    const api = activeSession.apiUrl.replace(/\/$/, '');
    const payload = currentPayload();
    const response = await fetch(`${api}/sessions/${encodeURIComponent(activeSession.id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${activeSession.token}`
      },
      body: JSON.stringify({ payload })
    });
    if (response.status === 410) {
      showInvalidSession('This editor session has already been applied or has expired. Create a new session with /tags editor web.');
      return false;
    }
    if (!response.ok) throw new Error(await response.text());
    return await waitForSavedSession(api, payload);
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function waitForSavedSession(api, expectedPayload) {
  const sessionUrl = `${api}/sessions/${encodeURIComponent(activeSession.id)}?token=${encodeURIComponent(activeSession.token)}`;
  const attempts = [250, 500, 800, 1200, 1600, 2200, 3000];
  let lastError = 'Session save was not verified.';

  for (const delay of attempts) {
    await sleep(delay);
    const verifyResponse = await fetch(sessionUrl, { cache: 'no-store' });
    if (verifyResponse.status === 410) {
      showInvalidSession('This editor session has already been applied or has expired. Create a new session with /tags editor web.');
      return false;
    }
    if (!verifyResponse.ok) {
      lastError = `Could not verify saved session: HTTP ${verifyResponse.status}`;
      continue;
    }

    const verified = await verifyResponse.json();
    if (verified.status !== 'ready') {
      lastError = `Session is still ${verified.status || 'not ready'}.`;
      continue;
    }
    if (!samePayload(expectedPayload, verified.payload)) {
      lastError = 'Saved session verification failed. The latest browser changes did not reach the backend.';
      continue;
    }
    return true;
  }

  throw new Error(lastError);
}

function applyPayload(payload) {
  const importedTags = payload?.data?.tags || payload?.tags;
  if (!Array.isArray(importedTags)) {
    throw new Error('Missing data.tags array');
  }

  tags = importedTags;
  history = [];
  establishTagBaseline(tags);
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

function syncSelectedFromForm() {
  const tag = selectedTag();
  if (!tag || !document.getElementById('fieldIdentifier')) return;

  const oldId = tag.identifier;
  tag.identifier = slugify($('fieldIdentifier').value);
  selectedId = tag.identifier;
  tag.permission = $('fieldPermission').value;
  tag.category = $('fieldCategory').value;
  tag.rarity = $('fieldRarity').value;
  tag.order = Number($('fieldOrder').value || 0);
  tag.economy.amount = Number($('fieldCost').value || 0);
  tag.withdrawable = $('fieldWithdrawable').checked;
  tag.economy.enabled = $('fieldEconomyEnabled').checked;
  tag.tag = $('fieldTagFrames').value.split('\n').filter(Boolean);
  tag.description = $('fieldDescription').value.split('\n');
  tag.groups = lines($('fieldGroups').value);
  tag.effects = lines($('fieldEffects').value);
  tag.abilities = lines($('fieldAbilities').value);
  tag.customPlaceholders = parseKeyValueLines($('fieldCustomPlaceholders').value);
  tag.displayName = $('fieldDisplayName').value;
  tag.displayItem = $('fieldDisplayItem').value;
  tag.customModelData = Number($('fieldModelData').value || 0);
  tag.economy.type = $('fieldEconomyType').value;
  tag.economy.takeCommand = $('fieldTakeCommand').value;
  tag.economy.condition = $('fieldCondition').value;
  tag.voucher.material = $('fieldVoucherMaterial').value;
  tag.voucher.customModelData = Number($('fieldVoucherModelData').value || 0);
  tag.voucher.displayName = $('fieldVoucherName').value;
  tag.voucher.glow = $('fieldVoucherGlow').checked;
  tag.voucher.lore = $('fieldVoucherLore').value.split('\n');
  tag.requirements.enabled = $('fieldReqEnabled').checked;
  tag.requirements.mode = $('fieldReqMode').value;
  tag.requirements.persistUnlock = $('fieldReqPersist').checked;

  if (oldId !== tag.identifier && tag.permission.endsWith(oldId)) {
    tag.permission = `supremetags.tag.${tag.identifier}`;
  }
}

function samePayload(expected, actual) {
  return stableStringify(expected) === stableStringify(actual);
}

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(',')}]`;
  }
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function showInvalidSession(message) {
  clearSessionUrl();
  document.body.classList.add('invalid-session-active');
  const notice = $('sessionNotice');
  if (notice) {
    notice.textContent = message || 'Web editor links are private, short-lived sessions created in-game. Open a fresh session from your server to start editing.';
    notice.classList.toggle('warning', Boolean(message));
  }
}

function clearSessionUrl() {
  if (!window.history?.replaceState) return;
  const path = window.location.pathname.endsWith('/editor') ? '/editor/' : window.location.pathname;
  const cleanUrl = `${window.location.origin}${path || '/'}`;
  if (window.location.href !== cleanUrl) {
    window.history.replaceState({}, document.title, cleanUrl);
  }
}

function showApplyModal(command, message) {
  $('applyCommand').textContent = command;
  $('applyModalText').textContent = message;
  $('applyModal').classList.add('active');
  $('applyModal').setAttribute('aria-hidden', 'false');
}

function lockEditorAfterApply() {
  document.querySelectorAll('.app-shell input, .app-shell select, .app-shell textarea, .app-shell button').forEach((control) => {
    if (control.closest('#applyModal')) return;
    control.disabled = true;
  });
}

$('copyApplyCommand').addEventListener('click', () => navigator.clipboard?.writeText($('applyCommand').textContent));
$('closeApplyModal').addEventListener('click', () => {
  $('applyModal').classList.remove('active');
  $('applyModal').setAttribute('aria-hidden', 'true');
});

establishTagBaseline(tags);
generateColor();

if (hasSessionLink) {
  render();
  loadSessionDraft();
} else {
  showInvalidSession();
}
