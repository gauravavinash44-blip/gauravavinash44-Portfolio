'use client';

import { Suspense, type ReactNode } from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';

function SectionPlaceholder() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: string;
};

/** Mounts children (and their JS/images) only when the section nears the viewport. */
export function DeferredSection({ children, minHeight = '40vh' }: DeferredSectionProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('280px');

  return (
    <div ref={ref} style={{ minHeight: inView ? undefined : minHeight }}>
      {inView ? (
        <Suspense fallback={<SectionPlaceholder />}>{children}</Suspense>
      ) : (
        <SectionPlaceholder />
      )}
    </div>
  );
}
