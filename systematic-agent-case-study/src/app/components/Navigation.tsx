'use client';

import { motion, useScroll } from 'motion/react';
import { ArrowUp, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Impact', href: '#impact' },
];

export function Navigation() {
  const { scrollYProgress } = useScroll({ layoutEffect: false });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setShowScrollTop(latest > 0.1);
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <motion.div className="flex items-center gap-3">
            <a
              href="../../index.html"
              className={`text-xs font-medium transition-colors duration-300 hidden sm:inline ${
                scrolled ? 'text-gray-500 hover:text-purple-700' : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              ← Portfolio
            </a>
            <span className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-700'}`}>
              Systematic Agent
            </span>
          </motion.div>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-white/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-300 ${
              scrolled
                ? 'border-purple-200 text-purple-700 bg-purple-50'
                : 'border-purple-300/60 text-purple-700 bg-white/60'
            }`}>
              Product Design Case Study
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1"
          >
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
          </motion.div>
        )}
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3.5 rounded-full shadow-xl hover:bg-purple-700 hover:scale-110 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}