import { apps, siteConfig } from './data';
import {
  renderApps,
  renderFilterSection,
  renderFooter,
  setupSearch,
  updateAppCount,
} from './renderer';
import { escapeHtml } from './utils';
import './style.css';

/**
 * User context (can be set by authentication system)
 * Example: window.user = { name: "John" };
 */
interface User {
  name?: string;
}

declare global {
  interface Window {
    user?: User;
  }
}

/**
 * GitHub icon SVG
 */
const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

/**
 * Email icon SVG
 */
const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

/**
 * Personalizes the header title based on user context
 */
function personalizeHeader(): void {
  const titleElement = document.getElementById('hero-title');
  if (!titleElement) return;

  // If user context exists, personalize the greeting
  if (window.user?.name) {
    titleElement.textContent = `Welcome, ${window.user.name}`;
  }
  // Otherwise, keep default "Your Apps"
}

/**
 * Renders the hero action links (GitHub, Contact)
 */
function renderHeroActions(): void {
  const container = document.getElementById('hero-actions');
  if (!container) return;

  container.innerHTML = `
    <a href="${escapeHtml(siteConfig.github)}" class="hero-link" target="_blank" rel="noopener noreferrer">
      ${githubIcon}
      GitHub
    </a>
    <a href="${escapeHtml(siteConfig.email)}" class="hero-link">
      ${emailIcon}
      Contact
    </a>
  `;
}

/**
 * Initialize the application
 * Renders all apps to the DOM when ready
 */
function init(): void {
  const bootstrap = () => {
    // Personalize header if user context exists
    personalizeHeader();

    // Render hero action links
    renderHeroActions();

    // Render filter/search section
    renderFilterSection('filter-container');

    // Render app cards
    renderApps(apps, 'apps-grid');

    // Update app count
    updateAppCount(apps.length, apps.length);

    // Setup search functionality
    setupSearch(apps, 'apps-grid');

    // Render footer with config
    renderFooter('footer', {
      github: siteConfig.github,
      email: siteConfig.email,
      linkedin: siteConfig.linkedin,
      instagram: siteConfig.instagram,
      brand: siteConfig.brand,
    });
  };

  // Render apps when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
}

// Start the application
init();
