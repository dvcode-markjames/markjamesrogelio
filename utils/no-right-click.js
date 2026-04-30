/**
 * no-right-click.js
 * Disables the context menu across the whole site to protect assets.
 * Shared by both index.html and projects.html.
 */

/**
 * Attaches a contextmenu listener that prevents the browser's right-click menu.
 */
export function initNoRightClick() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
}
