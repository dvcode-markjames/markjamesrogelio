/**
 * init.js — Entry point for index.html
 *
 * Boots all utilities needed on the main portfolio page:
 *   • Dark mode
 *   • Preloader
 *   • Lightbox
 *   • Gallery scroll
 *   • Visit counter
 *   • No right-click
 *
 * Exposes scrollGallery and toggleDarkMode on window so
 * inline HTML onclick attributes can still call them.
 */

import { initTheme, toggleDarkMode } from './theme.js';
import { initPreloader }             from './preloader.js';
import { initLightbox }              from './lightbox.js';
import { scrollGallery }             from './gallery.js';
import { initVisitCounter }          from './visits.js';
import { initNoRightClick }          from './no-right-click.js';

// Apply saved/system theme immediately (before paint)
initTheme('profile-img');

// DOM-dependent inits
document.addEventListener('DOMContentLoaded', () => {
    initPreloader(500, 3000);
    initLightbox();
    initVisitCounter('visit-count');
    initNoRightClick();
});

// Expose to global scope for HTML onclick="…" attributes
window.toggleDarkMode = () => toggleDarkMode('profile-img');
window.scrollGallery  = scrollGallery;
