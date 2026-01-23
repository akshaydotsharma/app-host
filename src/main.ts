import { apps, siteConfig } from './data';
import {
  renderApps,
  renderNavBar,
  renderFilterSection,
  renderFooter,
  setupFilters,
  updateAppCount,
  initScreenshotCarousels,
} from './renderer';
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
 * Personalizes the header title based on user context
 */
function personalizeHeader(): void {
  const titleElement = document.getElementById('hero-title');
  const subtitleElement = document.getElementById('hero-subtitle');

  if (!titleElement) return;

  // If user context exists, personalize the greeting
  if (window.user?.name) {
    titleElement.textContent = `Welcome, ${window.user.name}`;
  } else {
    titleElement.textContent = siteConfig.title;
  }

  // Update subtitle
  if (subtitleElement) {
    subtitleElement.textContent = siteConfig.subtitle;
  }
}

/**
 * Initialize the application
 * Renders all apps to the DOM when ready
 */
function init(): void {
  const bootstrap = () => {
    // Render navigation bar
    renderNavBar('nav-bar', {
      brand: siteConfig.brand,
      tagline: siteConfig.subtitle,
      github: siteConfig.github,
    });

    // Personalize header if user context exists
    personalizeHeader();

    // Render filter/search section with category filters
    renderFilterSection('filter-container', apps);

    // Render app cards
    renderApps(apps, 'apps-grid');

    // Initialize screenshot carousels
    initScreenshotCarousels();

    // Update app count
    updateAppCount(apps.length, apps.length);

    // Setup search, filter, and sort functionality
    setupFilters('apps-grid', apps);

    // Render footer with config
    renderFooter('footer', {
      github: siteConfig.github,
      email: siteConfig.email,
      linkedin: siteConfig.linkedin,
      instagram: siteConfig.instagram,
      brand: siteConfig.brand,
      tagline: siteConfig.subtitle,
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
