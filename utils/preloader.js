/**
 * preloader.js
 * Hides the preloader overlay once the page has loaded.
 * Shared by both index.html and projects.html.
 */

/**
 * Sets up preloader removal on window load with a configurable delay.
 * Also adds a hard fallback timeout so it never blocks indefinitely.
 * @param {number} [loadDelay=500]    - ms to wait after window 'load' fires.
 * @param {number} [fallbackDelay=3000] - absolute max ms before forcing removal.
 */
export function initPreloader(loadDelay = 500, fallbackDelay = 3000) {
    function removePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('vanish-out');
    }

    window.addEventListener('load', () => setTimeout(removePreloader, loadDelay));
    setTimeout(removePreloader, fallbackDelay);
}
