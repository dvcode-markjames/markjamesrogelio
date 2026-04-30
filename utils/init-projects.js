/**
 * init-projects.js — Entry point for projects.html
 *
 * Boots all utilities needed on the projects page:
 *   • Dark mode
 *   • Preloader
 *   • No right-click
 *
 * Exposes toggleDarkMode on window so the dark-mode button's
 * inline onclick attribute can still call it.
 */

import { initTheme, toggleDarkMode } from './theme.js';
import { initPreloader }             from './preloader.js';
import { initNoRightClick }          from './no-right-click.js';

// Apply saved/system theme immediately (before paint)
initTheme();

// DOM-dependent inits
document.addEventListener('DOMContentLoaded', () => {
    initPreloader(500, 1500);
    initNoRightClick();
});

// Expose to global scope for HTML onclick="…" attribute
window.toggleDarkMode = () => toggleDarkMode();
