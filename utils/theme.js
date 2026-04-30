/**
 * theme.js
 * Handles dark mode initialization and toggling.
 * Reads/writes preference to localStorage.
 * Works on both index.html and projects.html.
 */

/**
 * Applies the saved or system-preferred theme on page load.
 * @param {string} [profileImgId] - Optional ID of a profile image that swaps on theme change.
 */
export function initTheme(profileImgId = null) {
    const isDark =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    if (isDark) {
        html.classList.add('dark');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        if (profileImgId) _swapProfileImg(profileImgId, true);
    } else {
        html.classList.remove('dark');
    }
}

/**
 * Toggles between dark and light mode.
 * Called by the dark-mode button's onclick.
 * @param {string} [profileImgId] - Optional ID of a profile image to swap.
 */
export function toggleDarkMode(profileImgId = null) {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    if (profileImgId) {
        const img = document.getElementById(profileImgId);
        if (img) img.classList.add('fading');

        setTimeout(() => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            if (icon) {
                icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
            }
            localStorage.theme = isDark ? 'dark' : 'light';
            if (img) {
                img.src = isDark
                    ? './assets/images/me-black.jpg'
                    : './assets/images/me-white.jpg';
                img.classList.remove('fading');
            }
        }, 150);
    } else {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        if (icon) {
            icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
        }
        localStorage.theme = isDark ? 'dark' : 'light';
    }
}

/** @private */
function _swapProfileImg(id, isDark) {
    const img = document.getElementById(id);
    if (img) {
        img.src = isDark
            ? './assets/images/me-black.jpg'
            : './assets/images/me-white.jpg';
    }
}
