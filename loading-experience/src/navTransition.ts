export const INTERNAL_NAV_KEY = 'ga-portfolio-internal-nav';

export function peekInternalNav(): boolean {
  try {
    return sessionStorage.getItem(INTERNAL_NAV_KEY) === '1';
  } catch {
    return false;
  }
}

export function markInternalNav(): void {
  try {
    sessionStorage.setItem(INTERNAL_NAV_KEY, '1');
  } catch {
    // Ignore private-mode / storage failures.
  }
}

export function consumeInternalNav(): boolean {
  try {
    const wasInternal = sessionStorage.getItem(INTERNAL_NAV_KEY) === '1';
    if (wasInternal) {
      sessionStorage.removeItem(INTERNAL_NAV_KEY);
    }
    return wasInternal;
  } catch {
    return false;
  }
}

export function isBackForwardNavigation(): boolean {
  try {
    const entry = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    return entry?.type === 'back_forward';
  } catch {
    return false;
  }
}

/** Mark same-origin page navigations so the next page can show a skeleton instead of the intro. */
export function installInternalNavCapture(): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname && url.search === window.location.search) {
          return;
        }
        markInternalNav();
      } catch {
        // Ignore malformed hrefs.
      }
    },
    true,
  );

  (window as Window & { __markPortfolioInternalNav?: () => void }).__markPortfolioInternalNav =
    markInternalNav;
}
