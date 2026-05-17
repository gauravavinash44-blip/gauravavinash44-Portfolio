'use client';

import { motion } from 'motion/react';
import { X, Check, Zap } from 'lucide-react';

const competitors = [
  {
    type: 'Manual Tools',
    approach: 'Keyword search + rigid filters',
    failure: "Users don't know what to filter for",
    edge: 'AI-driven discovery',
    icon: '🔧',
    failColor: 'text-red-600',
    failBg: 'bg-red-50',
  },
  {
    type: 'ChatGPT-style',
    approach: 'Conversational, open-ended',
    failure: 'Hard to compare or structure',
    edge: 'Structured AI insights',
    icon: '💬',
    failColor: 'text-orange-600',
    failBg: 'bg-orange-50',
  },
  {
    type: 'Screeners',
    approach: 'Parameter-first filtering',
    failure: 'Requires upfront knowledge',
    edge: 'Context-aware suggestions',
    icon: '📊',
    failColor: 'text-amber-600',
    failBg: 'bg-amber-50',
  },
];

export function MarketLandscape() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            03 — Competitive Landscape
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
              Market Landscape
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed md:text-right">
              Understanding what exists and where the gap lives.
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Competitor Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {competitors.map((comp, index) => (
            <motion.div
              key={comp.type}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{comp.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{comp.type}</h3>
                </div>

                {/* Approach */}
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Approach</p>
                  <p className="text-gray-700 font-medium">{comp.approach}</p>
                </div>

                {/* Failure point */}
                <div className={`${comp.failBg} rounded-xl p-4 mb-5 border border-dashed border-gray-200`}>
                  <div className="flex items-start gap-2">
                    <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${comp.failColor}`} strokeWidth={2.5} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Failure Point</p>
                      <p className={`text-sm font-medium ${comp.failColor}`}>{comp.failure}</p>
                    </div>
                  </div>
                </div>

                {/* Systematic edge */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">Systematic Edge</p>
                      <p className="text-sm font-semibold text-purple-700">{comp.edge}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
        </motion.div>

      </div>
    </section>
  );
}