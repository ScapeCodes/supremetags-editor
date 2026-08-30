(() => {
  const navNode = document.getElementById('wikiNav');
  const contentNode = document.getElementById('wikiContent');
  const searchNode = document.getElementById('wikiSearch');
  const versionNode = document.getElementById('wikiVersion');

  let wiki = null;
  let orderedPages = [];
  let currentSlug = '';

  init();

  async function init() {
    try {
      const response = await fetch('./wiki.json', { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Wiki request failed with ${response.status}`);
      }

      wiki = await response.json();
      orderedPages = flattenNav(wiki.nav || []);
      versionNode.textContent = `Version ${wiki.version || 'current'}`;

      searchNode.addEventListener('input', () => {
        renderNav(searchNode.value);
      });

      window.addEventListener('hashchange', () => {
        renderCurrentPage(true);
      });

      renderNav('');
      renderCurrentPage(false);
    } catch (error) {
      navNode.innerHTML = '<li class="wiki-empty">Docs unavailable</li>';
      contentNode.innerHTML = [
        '<div class="wiki-state-panel">',
        '<h1>Wiki unavailable</h1>',
        '<p>The documentation could not be loaded. Check that <code>wiki.json</code> is being served beside this page.</p>',
        '</div>'
      ].join('');
      console.error(error);
    }
  }

  function flattenNav(entries) {
    const pages = [];

    entries.forEach((entry) => {
      if (entry.slug) {
        pages.push({
          label: entry.label,
          slug: entry.slug,
          section: 'Overview'
        });
        return;
      }

      (entry.items || []).forEach((item) => {
        pages.push({
          label: item.label,
          slug: item.slug,
          section: entry.label
        });
      });
    });

    return pages;
  }

  function renderNav(query) {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = normalizedQuery
      ? orderedPages.filter((page) => searchableText(page).includes(normalizedQuery))
      : orderedPages;

    if (!matches.length) {
      navNode.innerHTML = '<li class="wiki-empty">No matching pages</li>';
      return;
    }

    let currentSection = '';
    navNode.innerHTML = matches.map((page) => {
      const sectionLabel = page.section !== currentSection
        ? `<li class="wiki-sublabel">${escapeHtml(page.section)}</li>`
        : '';
      currentSection = page.section;

      return [
        sectionLabel,
        '<li>',
        `<a href="#${encodeURIComponent(page.slug)}" data-wiki-link="${escapeHtml(page.slug)}">`,
        `<span>${escapeHtml(page.label)}</span>`,
        '</a>',
        '</li>'
      ].join('');
    }).join('');

    markActiveLink();
  }

  function renderCurrentPage(shouldScroll) {
    const requestedSlug = decodeURIComponent(window.location.hash.replace(/^#/, '')) || 'home';
    const page = wiki.pages[requestedSlug] ? wiki.pages[requestedSlug] : wiki.pages.home;
    const slug = wiki.pages[requestedSlug] ? requestedSlug : 'home';

    currentSlug = slug;
    contentNode.innerHTML = `${page.content}${renderPager(slug)}`;
    document.title = `${page.title} - SupremeTags Wiki`;
    markActiveLink();

    if (shouldScroll) {
      const scrollTarget = window.matchMedia('(max-width: 980px)').matches
        ? contentNode
        : document.querySelector('main');
      window.setTimeout(() => {
        scrollTarget.scrollIntoView({ block: 'start' });
      }, 0);
    }
  }

  function renderPager(slug) {
    const index = orderedPages.findIndex((page) => page.slug === slug);
    const previous = orderedPages[index - 1];
    const next = orderedPages[index + 1];

    if (!previous && !next) {
      return '';
    }

    return [
      '<nav class="wiki-pager" aria-label="Wiki page navigation">',
      previous ? pagerLink(previous, 'Previous') : '<span></span>',
      next ? pagerLink(next, 'Next') : '<span></span>',
      '</nav>'
    ].join('');
  }

  function pagerLink(page, label) {
    return [
      `<a href="#${encodeURIComponent(page.slug)}">`,
      `<small>${label}</small>`,
      `<strong>${escapeHtml(page.label)}</strong>`,
      '</a>'
    ].join('');
  }

  function markActiveLink() {
    navNode.querySelectorAll('a').forEach((link) => {
      link.classList.toggle('active', link.dataset.wikiLink === currentSlug);
    });
  }

  function searchableText(page) {
    const content = wiki.pages[page.slug]?.content || '';
    return `${page.label} ${page.section} ${stripHtml(content)}`.toLowerCase();
  }

  function stripHtml(value) {
    const template = document.createElement('template');
    template.innerHTML = value;
    return template.content.textContent || '';
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }
})();
