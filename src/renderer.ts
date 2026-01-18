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
 * GitHub icon for footer
 */
const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

/**
 * Email icon for footer
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
 * Creates an HTML string for a single app card
 */
export function createAppCard(app: App): string {
  const techPills = app.techStack
    .map((tech) => `<span class="tech-pill">${escapeHtml(tech)}</span>`)
    .join('');

  return `
    <article class="app-card" data-app-id="${escapeHtml(app.id)}">
      <div class="app-header">
        <div class="app-header-bg ${escapeHtml(app.gradient)}"></div>
        <div class="app-header-decor"></div>
        <div class="app-header-pattern"></div>
        <div class="app-icon-wrapper">
          ${getIcon(app.icon)}
        </div>
      </div>
      <div class="app-card-content">
        <h3 class="app-name">${escapeHtml(app.name)}</h3>
        <p class="app-tagline">${escapeHtml(app.tagline)}</p>
        <p class="app-description">${escapeHtml(app.description)}</p>
        <div class="app-tech-stack">
          ${techPills}
        </div>
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

  if (!appsGrid) {
    console.error(`Container element with id "${containerId}" not found`);
    return;
  }

  if (apps.length === 0) {
    appsGrid.innerHTML =
      '<p class="no-apps">No apps available yet. Check back soon!</p>';
    return;
  }

  const appsHtml = apps.map((app) => createAppCard(app)).join('');
  appsGrid.innerHTML = appsHtml;
}

/**
 * Renders the search/filter section
 */
export function renderFilterSection(containerId: string): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="search-wrapper">
      <span class="search-icon">${searchIcon}</span>
      <input
        type="text"
        class="search-input"
        id="app-search"
        placeholder="Search apps by name or tech..."
        aria-label="Search apps"
      >
    </div>
  `;
}

/**
 * Renders the footer with GitHub, Email, LinkedIn, Instagram, and copyright
 */
export function renderFooter(
  containerId: string,
  config: {
    github: string;
    email: string;
    linkedin: string;
    instagram: string;
    brand: string;
  }
): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <p class="footer-copyright">&copy; ${currentYear} ${escapeHtml(config.brand)}. All rights reserved.</p>
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
            ${escapeHtml(config.email)}
          </a>
        </nav>
      </div>
    </div>
  `;
}

/**
 * Sets up search functionality
 */
export function setupSearch(apps: App[], gridId: string): void {
  const searchInput = document.getElementById('app-search') as HTMLInputElement;
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase().trim();

    if (!query) {
      renderApps(apps, gridId);
      updateAppCount(apps.length, apps.length);
      return;
    }

    const filtered = apps.filter(
      (app) =>
        app.name.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        (app.category && app.category.toLowerCase().includes(query))
    );

    renderApps(filtered, gridId);
    updateAppCount(filtered.length, apps.length);
  });
}

/**
 * Updates the app count display
 */
export function updateAppCount(shown: number, total: number): void {
  const countElement = document.getElementById('app-count');
  if (!countElement) return;

  if (shown === total) {
    countElement.textContent = `${total} app${total !== 1 ? 's' : ''}`;
  } else {
    countElement.textContent = `${shown} of ${total} app${total !== 1 ? 's' : ''}`;
  }
}
