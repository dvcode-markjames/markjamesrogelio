/**
 * gallery.js
 * Horizontal scroll helper for the photo gallery strip.
 * Used by index.html.
 */

/**
 * Scrolls the gallery container left or right.
 * @param {number} direction - -1 for left, +1 for right.
 * @param {number} [amount=300] - Pixels to scroll per click.
 */
export function scrollGallery(direction, amount = 300) {
    const container = document.getElementById('gallery-container');
    if (container) {
        container.scrollBy({ left: direction * amount, behavior: 'smooth' });
    }
}
