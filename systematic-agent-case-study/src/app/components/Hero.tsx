'use client';

import { SearchBarTyping } from './SearchBarTyping';
import { Clock, Users, Layers } from 'lucide-react';

const meta = [
  { icon: Users, label: 'Role', value: 'Product Designer' },
  { icon: Clock, label: 'Timeline', value: '2 months' },
  { icon: Layers, label: 'Domain', value: 'Fintech / AI' },
];

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#f3f0ff] pt-20 pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c4b5fd22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-8 pt-24 pb-20 text-center">
        <h1 className="font-bold mb-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 bg-clip-text text-transparent tracking-tight text-5xl sm:text-7xl lg:text-8xl">
          Systematic Agent
        </h1>

        <p className="text-2xl md:text-3xl text-gray-500 font-light tracking-tight mb-8">
          AI-powered company discovery
        </p>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Designing a context-aware AI system that helps investors move from information overload to confident decisions.
        </p>

        <SearchBarTyping />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200/80 pt-8">
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
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5 hero-scroll-hint">
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
