/**
 * lightbox.js
 * Fullscreen image lightbox with prev/next navigation, keyboard support,
 * backdrop-click-to-close, and a download button.
 * Used by index.html's gallery section.
 */

/**
 * Initialises the lightbox by binding all gallery items and control buttons.
 * Expects the following IDs to exist in the DOM:
 *   #lightbox, #lightbox-img, #lightbox-caption, #lb-download,
 *   #lb-close, #lb-prev, #lb-next
 * Gallery items must have class `.gallery-item` and data attributes:
 *   data-src, data-caption, data-index
 */
export function initLightbox() {
    const lightbox   = document.getElementById('lightbox');
    if (!lightbox) return; // page doesn't have a lightbox

    const lbImg      = document.getElementById('lightbox-img');
    const lbCaption  = document.getElementById('lightbox-caption');
    const lbDownload = document.getElementById('lb-download');
    const lbClose    = document.getElementById('lb-close');
    const lbPrev     = document.getElementById('lb-prev');
    const lbNext     = document.getElementById('lb-next');

    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex   = 0;

    /** Opens the lightbox at the given gallery index. */
    function openLightbox(index) {
        currentIndex = index;
        const item    = galleryItems[index];
        const src     = item.dataset.src;
        const caption = item.dataset.caption;

        lbImg.src                = src;
        lbImg.alt                = caption;
        lbCaption.textContent    = caption;
        lbDownload.href          = src;
        lbDownload.download      = caption.toLowerCase().replace(/[^a-z0-9]+/g, '-') +
                                   src.slice(src.lastIndexOf('.'));

        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    /** Closes the lightbox. */
    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    /** Moves to an adjacent image by direction (-1 = prev, +1 = next). */
    function navigateLightbox(dir) {
        const next = (currentIndex + dir + galleryItems.length) % galleryItems.length;
        openLightbox(next);
    }

    // Bind gallery item clicks
    galleryItems.forEach((item, i) => {
        item.addEventListener('click', () => openLightbox(i));
    });

    // Control buttons
    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click',  () => navigateLightbox(-1));
    lbNext.addEventListener('click',  () => navigateLightbox(1));

    // Backdrop click closes lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft')  navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}
