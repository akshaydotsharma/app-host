import type { App } from './types';
import { escapeHtml } from './utils';

/**
 * Creates a dashboard SVG illustration
 * Simple CSS-based dashboard representation for Personal Dashboard app
 */
function createDashboardSvg(): string {
  return `
    <svg width="100%" height="100%" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Background gradient -->
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="300" height="180" fill="url(#grad1)"/>

      <!-- Dashboard illustration elements with white/transparent colors -->
      <!-- Header bar -->
      <rect x="30" y="30" width="240" height="8" rx="4" fill="rgba(255,255,255,0.9)"/>

      <!-- Three cards/widgets -->
      <rect x="30" y="55" width="70" height="50" rx="6" fill="rgba(255,255,255,0.85)"/>
      <rect x="115" y="55" width="70" height="50" rx="6" fill="rgba(255,255,255,0.85)"/>
      <rect x="200" y="55" width="70" height="50" rx="6" fill="rgba(255,255,255,0.85)"/>

      <!-- List items below -->
      <rect x="30" y="120" width="240" height="6" rx="3" fill="rgba(255,255,255,0.75)"/>
      <rect x="30" y="135" width="200" height="6" rx="3" fill="rgba(255,255,255,0.75)"/>
      <rect x="30" y="150" width="220" height="6" rx="3" fill="rgba(255,255,255,0.75)"/>
    </svg>
  `;
}

/**
 * Creates an HTML string for a single app card
 * @param app - The app object containing all app details
 * @returns HTML string for the app card
 */
export function createAppCard(app: App): string {
  // Generate app-specific imagery (currently only dashboard)
  const appImage = createDashboardSvg();

  return `
    <article class="app-card">
      <div class="app-image">
        ${appImage}
      </div>
      <div class="app-card-content">
        <h3 class="app-name">${escapeHtml(app.name)}</h3>
        <p class="app-tagline">${escapeHtml(app.tagline)}</p>
        <p class="app-description">${escapeHtml(app.description)}</p>
        <p class="app-tech">Tech stack: ${escapeHtml(app.techStack)}</p>
        <a
          href="${escapeHtml(app.url)}"
          class="app-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${escapeHtml(app.name)} in a new tab"
        >
          Open app
        </a>
      </div>
    </article>
  `;
}

/**
 * Renders all app cards to the apps grid container
 * @param apps - Array of apps to render
 * @param containerId - ID of the container element
 */
export function renderApps(apps: App[], containerId: string): void {
  const appsGrid = document.getElementById(containerId);

  if (!appsGrid) {
    console.error(`Container element with id "${containerId}" not found`);
    return;
  }

  if (apps.length === 0) {
    appsGrid.innerHTML = '<p class="no-apps">No apps available yet. Check back soon!</p>';
    return;
  }

  // Generate HTML for all app cards
  const appsHtml = apps.map(app => createAppCard(app)).join('');
  appsGrid.innerHTML = appsHtml;
}
