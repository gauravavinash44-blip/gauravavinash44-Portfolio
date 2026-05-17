'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';

const searchQueries = [
  'Companies in renewable energy with strong growth',
  'Find AI startups in healthcare sector',
  'Sustainable tech companies under $1B valuation',
  'High-growth SaaS companies in fintech',
];

export function SearchBarTyping() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('200px');
  const [currentQuery, setCurrentQuery] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const query = searchQueries[currentQuery];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === query) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentQuery((prev) => (prev + 1) % searchQueries.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? query.substring(0, typedText.length - 1)
            : query.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentQuery, inView]);

  return (
    <div ref={ref} className="mt-12 max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 p-4 flex items-center gap-4">
        <div className="bg-purple-100 p-3 rounded-xl">
          <Search className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1 min-h-[24px]">
          <p className="text-gray-700 text-lg">
            {inView ? typedText : searchQueries[0]}
            {inView && (
              <span className="inline-block w-0.5 h-6 bg-purple-600 ml-1 animate-pulse" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
