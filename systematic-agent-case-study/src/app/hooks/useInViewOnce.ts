'use client';

import { useEffect, useRef, useState } from 'react';

/** Fires once when the element enters the viewport — use to defer heavy work below the fold. */
export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(rootMargin = '120px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
