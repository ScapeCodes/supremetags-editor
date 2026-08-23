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
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
  reverse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h11a4 4 0 0 1 0 8H7"/><path d="m7 11-4 4 4 4"/></svg>',
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

function normalizeTag(tag) {
  tag.tag = Array.isArray(tag.tag) && tag.tag.length ? tag.tag : [''];
  tag.permission = tag.permission || 'none';
  tag.groups = Array.isArray(tag.groups) ? tag.groups : [];
  tag.description = Array.isArray(tag.description) ? tag.description : [];
  tag.category = tag.category || categories[0] || 'default';
  tag.order = Number(tag.order || 0);
  tag.withdrawable = Boolean(tag.withdrawable);
  tag.rarity = tag.rarity || rarities[0] || 'common';
  tag.displayName = tag.displayName || '&7Tag: %tag%';
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
    displayName: tag.voucher?.displayName || '%tag% &f&lVoucher',
    lore: Array.isArray(tag.voucher?.lore) ? tag.voucher.lore : ['&7&m-----------------------------', '&eClick to equip!', '&7&m-----------------------------'],
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
    unlockedDisplayName: variant.unlockedDisplayName || '&7Variant: %tag%',
    unlockedCustomModelData: Number(variant.unlockedCustomModelData || 0),
    lockedMaterial: variant.lockedMaterial || 'BARRIER',
    lockedDisplayName: variant.lockedDisplayName || '&cLocked Variant: %tag%',
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
  display: '&f- &7Required permission'
}))));

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
    groups: [],
    category: 'default',
    rarity: 'common',
    order: tags.length + 1,
    withdrawable: true,
    description: ['New tag description'],
    displayName: '&7Tag: %tag%',
    displayItem: 'NAME_TAG',
    customModelData: 0,
    effects: [],
    abilities: [],
    customPlaceholders: {},
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
}

function currentPayload() {
  return {
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

['colorText', 'colorStart', 'colorEnd', 'colorFormat', 'colorStep', 'colorTrimSpaces', 'colorWrapper'].forEach((id) => $(id).addEventListener('input', generateColor));
document.querySelectorAll('[data-format-code]').forEach((button) => button.addEventListener('click', () => insertAtCursor($('colorText'), button.dataset.formatCode)));
$('swapColorsButton').addEventListener('click', () => {
  const start = $('colorStart').value;
  $('colorStart').value = $('colorEnd').value;
  $('colorEnd').value = start;
  generateColor();
});
$('reverseTextButton').addEventListener('click', () => {
  $('colorText').value = reverseVisibleText($('colorText').value);
  generateColor();
});
$('applyColorToTagButton').addEventListener('click', () => {
  const output = $('colorOutput').value;
  if (!output) return;
  updateSelected((tag) => tag.tag = [output]);
});
$('copyColorButton').addEventListener('click', () => navigator.clipboard?.writeText($('colorOutput').value));

function generateColor() {
  const rawText = $('colorText').value || '';
  const start = $('colorStart').value;
  const end = $('colorEnd').value;
  const format = $('colorFormat').value;
  const step = Math.max(1, Number($('colorStep').value || 1));
  const trimSpaces = $('colorTrimSpaces').checked;
  const wrapper = $('colorWrapper').value;
  const tokens = tokenizeMinecraftText(rawText);
  const colorable = tokens.filter((token) => token.type === 'char' && (!trimSpaces || !/\s/.test(token.value)));
  const colors = gradient(start, end, Math.max(1, Math.ceil(colorable.length / step)));
  let colorIndex = 0;
  let charsInColor = 0;
  let generated = '';

  if (format === 'minimessage') {
    generated = `<gradient:${start}:${end}>${escapeMiniMessage(stripMinecraftCodes(rawText))}</gradient>`;
  } else {
    tokens.forEach((token) => {
      if (token.type === 'format') {
        generated += token.value;
        return;
      }
      if (trimSpaces && /\s/.test(token.value)) {
        generated += token.value;
        return;
      }
      const color = colors[Math.min(colorIndex, colors.length - 1)];
      generated += `${formatColorPrefix(color, format)}${token.value}`;
      charsInColor++;
      if (charsInColor >= step) {
        charsInColor = 0;
        colorIndex++;
      }
    });
  }

  const output = wrapper ? wrapper.replace('$t', generated) : generated;
  $('colorOutput').value = output;
  $('typedColorPreview').innerHTML = minecraftToHtml(rawText);
  $('colorPreview').innerHTML = minecraftToHtml(generated);
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

function formatColorPrefix(hex, format) {
  const clean = hex.slice(1);
  if (format === 'classic') return nearestLegacy(hex);
  if (format === 'ampx') return `&x${[...clean].map((char) => `&${char}`).join('')}`;
  if (format === 'sectionx') return `§x${[...clean].map((char) => `§${char}`).join('')}`;
  if (format === 'minimessage-single') return `<#${clean}>`;
  return `&#${clean}`;
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

function insertAtCursor(input, value) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${value}${input.value.slice(end)}`;
  input.focus();
  input.setSelectionRange(start + value.length, start + value.length);
  generateColor();
}

function reverseVisibleText(input) {
  return stripMinecraftCodes(input).split('').reverse().join('');
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
  if (!activeSession.id || !activeSession.token || !activeSession.apiUrl) {
    showInvalidSession();
    return;
  }

  try {
    const api = activeSession.apiUrl.replace(/\/$/, '');
    const response = await fetch(`${api}/sessions/${encodeURIComponent(activeSession.id)}?token=${encodeURIComponent(activeSession.token)}`);
    if (response.status === 410) {
      showInvalidSession('This editor session has already been applied or has expired. Create a new session with /tags editor web.');
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const session = await response.json();
    applyPayload(session.payload);
  } catch (error) {
    showInvalidSession(`Session could not be loaded: ${error.message}`);
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
  if (message) {
    const note = document.querySelector('.small-note');
    if (note) note.textContent = message;
  }
}

function clearSessionUrl() {
  if (!window.history?.replaceState) return;
  const cleanUrl = window.location.hostname === 'supremetags.net'
    ? `${window.location.origin}/`
    : `${window.location.origin}${window.location.pathname}`;
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

if (hasSessionLink) {
  render();
  loadSessionDraft();
} else {
  showInvalidSession();
}
