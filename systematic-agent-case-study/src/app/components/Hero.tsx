'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { SearchBarTyping } from './SearchBarTyping';
import { Clock, Users, Layers } from 'lucide-react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI-powered company discovery';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const meta = [
    { icon: Users, label: 'Role', value: 'Product Designer' },
    { icon: Clock, label: 'Timeline', value: '2 months' },
    { icon: Layers, label: 'Domain', value: 'Fintech / AI' },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#f3f0ff] pt-20 pb-16">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, #c4b5fd22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-8 pt-24 pb-20 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-bold mb-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 bg-clip-text text-transparent tracking-tight text-[96px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >Systematic Agent</motion.h1>

        {/* Typed subtitle */}
        <motion.div
          className="h-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-2xl md:text-3xl text-gray-500 font-light tracking-tight">
            {typedText}
            <span className="inline-block w-[3px] h-8 bg-purple-600 ml-1 animate-pulse align-middle" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Designing a context-aware AI system that helps investors move from information overload to confident decisions.
        </motion.p>

        {/* Search bar animation — kept exactly as-is */}
        <SearchBarTyping />

        {/* Project meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200/80 pt-8"
        >
          {meta.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-purple-600" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">{item.label}</p>
                <p className="text-sm text-gray-800 font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}