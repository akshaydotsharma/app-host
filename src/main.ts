import { apps } from './data';
import { renderApps } from './renderer';
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
  if (!titleElement) return;

  // If user context exists, personalize the greeting
  if (window.user?.name) {
    titleElement.textContent = `Welcome, ${window.user.name}`;
  }
  // Otherwise, keep default "Your Apps"
}

/**
 * Initialize the application
 * Renders all apps to the DOM when ready
 */
function init(): void {
  // Render apps when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      personalizeHeader();
      renderApps(apps, 'apps-grid');
    });
  } else {
    personalizeHeader();
    renderApps(apps, 'apps-grid');
  }
}

// Start the application
init();
