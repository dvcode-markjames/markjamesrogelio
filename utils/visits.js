/**
 * visits.js
 * Fetches and displays a live visit count from CounterAPI.
 * Used by index.html's footer visit counter.
 */

/**
 * Fetches the visit count and updates the given element.
 * @param {string} elementId - The ID of the element to populate (e.g. 'visit-count').
 * @param {string} [apiUrl]  - The CounterAPI endpoint to call.
 */
export function initVisitCounter(
    elementId = 'visit-count',
    apiUrl = 'https://api.counterapi.dev/v1/markjamesrogelio-portfolio/visits/up'
) {
    const el = document.getElementById(elementId);
    if (!el) return;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => { el.innerText = data.count; })
        .catch(() => { el.innerText = 'N/A'; });
}
