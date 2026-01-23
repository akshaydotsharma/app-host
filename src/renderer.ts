import type { App, AppIcon } from './types';
import { escapeHtml } from './utils';

/**
 * SVG icon definitions for each app type
 */
const icons: Record<AppIcon, string> = {
  'layout-dashboard': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  utensils: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  film: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>`,
  'globe-scan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a10 10 0 1 0 10 10"/><path d="M12 12 2 12"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M19 5V2h3"/><path d="M19 2 12 9"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

/**
 * Gets the SVG icon for an app
 */
function getIcon(icon: AppIcon): string {
  return icons[icon] || icons['code'];
}

/**
 * Arrow icon for the CTA button
 */
const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

/**
 * GitHub icon
 */
const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

/**
 * Email icon
 */
const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

/**
 * Search icon
 */
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

/**
 * LinkedIn icon
 */
const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

/**
 * Instagram icon
 */
const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;

/**
 * Menu icon for mobile nav
 */
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;

/**
 * Close icon for mobile nav
 */
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

/**
 * Empty/search icon for no results state
 */
const emptySearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 8h6"/></svg>`;

/**
 * Chevron down icon for sort dropdown
 */
const chevronDownIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

/**
 * Creates the screenshot carousel HTML
 */
function createScreenshotCarousel(
  app: App,
  gradient: string
): string {
  // If no screenshots, fall back to gradient header with icon
  if (!app.screenshots || app.screenshots.length === 0) {
    return `
      <div class="app-header">
        <div class="app-header-bg ${escapeHtml(gradient)}"></div>
        <div class="app-header-decor"></div>
        <div class="app-header-pattern"></div>
        <div class="app-icon-wrapper">
          ${getIcon(app.icon)}
        </div>
      </div>
    `;
  }

  // Create screenshot slides
  const slides = app.screenshots
    .map(
      (src, index) => `
      <div class="screenshot-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(app.name)} screenshot ${index + 1}" loading="lazy" />
      </div>
    `
    )
    .join('');

  return `
    <div class="app-header screenshot-carousel" data-app-id="${escapeHtml(app.id)}">
      <div class="app-header-bg ${escapeHtml(gradient)}"></div>
      <div class="screenshot-slides">
        ${slides}
      </div>
    </div>
  `;
}

/**
 * Creates an HTML string for a single app card
 */
export function createAppCard(app: App): string {
  const headerHtml = createScreenshotCarousel(app, app.gradient);

  return `
    <article class="app-card" data-app-id="${escapeHtml(app.id)}" data-category="${escapeHtml(app.category || '')}">
      ${headerHtml}
      <div class="app-card-content">
        <h3 class="app-name">${escapeHtml(app.name)}</h3>
        <p class="app-tagline">${escapeHtml(app.tagline)}</p>
        <p class="app-description">${escapeHtml(app.description)}</p>
        <a
          href="${escapeHtml(app.url)}"
          class="app-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${escapeHtml(app.name)} in a new tab"
        >
          Open app
          ${arrowIcon}
        </a>
      </div>
    </article>
  `;
}

/**
 * Renders all app cards to the apps grid container
 */
export function renderApps(apps: App[], containerId: string): void {
  const appsGrid = document.getElementById(containerId);
  const emptyState = document.getElementById('empty-state');

  if (!appsGrid) {
    console.error(`Container element with id "${containerId}" not found`);
    return;
  }

  if (apps.length === 0) {
    appsGrid.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'flex';
    }
    return;
  }

  if (emptyState) {
    emptyState.style.display = 'none';
  }

  const appsHtml = apps.map((app) => createAppCard(app)).join('');
  appsGrid.innerHTML = appsHtml;
}

/**
 * Renders the navigation bar
 */
export function renderNavBar(
  containerId: string,
  config: {
    brand: string;
    tagline: string;
    github: string;
  }
): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <div class="nav-links" id="nav-links">
          <a href="#" class="nav-link active">Apps</a>
          <a href="${escapeHtml(config.github)}" class="nav-link" target="_blank" rel="noopener noreferrer">About</a>
          <a href="#footer" class="nav-link">Contact</a>
          <a href="${escapeHtml(config.github)}" class="nav-icon-link" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
            ${githubIcon}
          </a>
        </div>
        <button class="nav-menu-btn" id="nav-menu-btn" aria-label="Toggle menu" aria-expanded="false">
          ${menuIcon}
        </button>
      </div>
    </div>
  `;

  // Setup mobile menu toggle
  setupMobileMenu();

  // Setup scroll listener for nav background
  setupNavScroll(container);
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu(): void {
  const menuBtn = document.getElementById('nav-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (!menuBtn || !navLinks) return;

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    navLinks.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.innerHTML = isOpen ? closeIcon : menuIcon;
  });

  // Close menu when clicking a link
  navLinks.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('nav-link') || target.classList.contains('nav-icon-link')) {
      isOpen = false;
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = menuIcon;
    }
  });
}

/**
 * Setup scroll listener for nav background effect
 */
function setupNavScroll(navBar: HTMLElement): void {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          navBar.classList.add('scrolled');
        } else {
          navBar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Gets unique categories from apps
 */
export function getCategories(apps: App[]): { name: string; count: number }[] {
  const categoryMap = new Map<string, number>();

  apps.forEach((app) => {
    const category = app.category || 'Other';
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Renders the search/filter section
 */
export function renderFilterSection(containerId: string, apps: App[]): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categories = getCategories(apps);

  const categoryButtons = categories
    .map(
      (cat) => `
      <button class="category-btn" data-category="${escapeHtml(cat.name)}">
        ${escapeHtml(cat.name)}
        <span class="category-count">${cat.count}</span>
      </button>
    `
    )
    .join('');

  container.innerHTML = `
    <div class="filter-inner">
      <div class="filter-row">
        <div class="search-wrapper">
          <span class="search-icon">${searchIcon}</span>
          <input
            type="text"
            class="search-input"
            id="app-search"
            placeholder="Search apps..."
            aria-label="Search apps"
          >
        </div>
        <div class="category-filters">
          <button class="category-btn active" data-category="all">
            All
            <span class="category-count">${apps.length}</span>
          </button>
          ${categoryButtons}
        </div>
        <div class="sort-wrapper">
          <select class="sort-select" id="sort-select" aria-label="Sort apps">
            <option value="default">Default order</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
          <span class="sort-icon">${chevronDownIcon}</span>
        </div>
      </div>
    </div>
  `;

  // Setup empty state
  const emptyStateIcon = document.getElementById('empty-state-icon');
  if (emptyStateIcon) {
    emptyStateIcon.innerHTML = emptySearchIcon;
  }
}

/**
 * Renders the footer
 */
export function renderFooter(
  containerId: string,
  config: {
    github: string;
    email: string;
    linkedin: string;
    instagram: string;
    brand: string;
    tagline: string;
  }
): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="${escapeHtml(config.github)}" class="footer-link" target="_blank" rel="noopener noreferrer">
            ${githubIcon}
            GitHub
          </a>
          <a href="${escapeHtml(config.linkedin)}" class="footer-link" target="_blank" rel="noopener noreferrer">
            ${linkedinIcon}
            LinkedIn
          </a>
          <a href="${escapeHtml(config.instagram)}" class="footer-link" target="_blank" rel="noopener noreferrer">
            ${instagramIcon}
            Instagram
          </a>
          <a href="mailto:${escapeHtml(config.email)}" class="footer-link">
            ${emailIcon}
            Email
          </a>
        </nav>
        <p class="footer-copyright">&copy; ${currentYear} All rights reserved.</p>
      </div>
    </div>
  `;
}

/**
 * Sets up search, filter, and sort functionality
 */
export function setupFilters(
  gridId: string,
  originalApps: App[]
): void {
  const searchInput = document.getElementById('app-search') as HTMLInputElement;
  const categoryBtns = document.querySelectorAll('.category-btn');
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;
  const emptyStateBtn = document.getElementById('empty-state-btn');

  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'default';

  const filterAndRender = () => {
    let filtered = [...originalApps];

    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter((app) => app.category === currentCategory);
    }

    // Filter by search
    if (currentSearch) {
      const query = currentSearch.toLowerCase();
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(query) ||
          app.tagline.toLowerCase().includes(query) ||
          app.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
          (app.category && app.category.toLowerCase().includes(query))
      );
    }

    // Sort
    switch (currentSort) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep original order
        break;
    }

    renderApps(filtered, gridId);
    initScreenshotCarousels();
    updateAppCount(filtered.length, originalApps.length);
  };

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = (e.target as HTMLInputElement).value.trim();
      filterAndRender();
    });
  }

  // Category button handlers
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category') || 'all';
      currentCategory = category;

      // Update active state
      categoryBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      filterAndRender();
    });
  });

  // Sort select handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = (e.target as HTMLSelectElement).value;
      filterAndRender();
    });
  }

  // Clear filters button
  if (emptyStateBtn) {
    emptyStateBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      currentSort = 'default';

      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';

      categoryBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
      });

      filterAndRender();
    });
  }
}

/**
 * Updates the app count display
 */
export function updateAppCount(shown: number, total: number): void {
  const countElement = document.getElementById('app-count');
  const emptyStateText = document.getElementById('empty-state-text');

  if (countElement) {
    if (shown === total) {
      countElement.textContent = `${total} app${total !== 1 ? 's' : ''}`;
    } else {
      countElement.textContent = `${shown} of ${total} app${total !== 1 ? 's' : ''}`;
    }
  }

  if (emptyStateText && shown === 0) {
    emptyStateText.textContent = 'No apps match your filters';
  }
}

/**
 * Screenshot carousel state
 */
const carouselIntervals: Map<string, number> = new Map();

/**
 * Initializes screenshot carousels with auto-rotation
 */
export function initScreenshotCarousels(): void {
  // Clear any existing intervals
  carouselIntervals.forEach((interval) => clearInterval(interval));
  carouselIntervals.clear();

  const carousels = document.querySelectorAll('.screenshot-carousel');

  carousels.forEach((carousel) => {
    const appId = carousel.getAttribute('data-app-id');
    if (!appId) return;

    const slides = carousel.querySelectorAll('.screenshot-slide');

    if (slides.length <= 1) return;

    let currentIndex = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      currentIndex = index;
    };

    // Auto-rotate every 3 seconds
    const interval = window.setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 3000);

    carouselIntervals.set(appId, interval);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      const existingInterval = carouselIntervals.get(appId);
      if (existingInterval) {
        clearInterval(existingInterval);
      }
    });

    carousel.addEventListener('mouseleave', () => {
      const newInterval = window.setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }, 3000);
      carouselIntervals.set(appId, newInterval);
    });
  });
}

// Keep old function name for backwards compatibility
export const setupSearch = setupFilters;
