'use client';

import { ArrowUp, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Impact', href: '#impact' },
];

export function Navigation() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      setScrolled(scrollTop > 30);
      setShowScrollTop(scrollTop > window.innerHeight * 0.35);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="../../index.html"
              className="text-xs font-medium text-gray-500 hover:text-purple-700 transition-colors hidden sm:inline"
            >
              ← Portfolio
            </a>
            <span className={`text-sm font-semibold ${scrolled ? 'text-gray-900' : 'text-gray-700'}`}>
              Systematic Agent
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1" aria-label="Case study sections">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs px-3 py-1.5 rounded-full border border-purple-200 text-purple-700 bg-purple-50 font-medium">
              Product Design Case Study
            </span>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-purple-600 origin-left z-[60] pointer-events-none will-change-transform"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-purple-600 text-white p-3.5 rounded-full shadow-xl hover:bg-purple-700 transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
