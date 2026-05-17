'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';

const beforeItems = [
  { text: 'Keyword search with no guidance', detail: 'Users had to know exactly what to type' },
  { text: 'Overwhelming filter complexity', detail: '40+ parameters with no context' },
  { text: 'Manual data synthesis required', detail: 'Hours spent copying data across tools' },
  { text: 'Inconsistent company profiles', detail: 'Different formats, missing fields' },
  { text: 'Buried insights across sections', detail: 'Key info hidden behind multiple clicks' },
];

const afterItems = [
  { text: 'Natural language queries with context', detail: 'AI interprets intent and maps to data' },
  { text: 'Progressive, guided exploration', detail: 'Options revealed based on what matters' },
  { text: 'Auto-generated AI summaries', detail: 'Key facts surfaced instantly' },
  { text: 'Structured, scannable insights', detail: 'Consistent format across all profiles' },
  { text: 'Risk & relevance front and center', detail: 'Critical signals visible at a glance' },
];

type View = 'split' | 'before' | 'after';

export function BeforeAfterComparison() {
  const [view, setView] = useState<View>('split');

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            08 — Transformation
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                Before vs After
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Transforming the user experience from friction to flow
              </p>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1.5">
              {(['split', 'before', 'after'] as View[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    view === v
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Comparison panels */}
        <AnimatePresence mode="wait">
          {view === 'split' && (
            <motion.div
              key="split"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* BEFORE */}
              <BeforeCard items={beforeItems} />
              {/* AFTER */}
              <AfterCard items={afterItems} />
            </motion.div>
          )}

          {view === 'before' && (
            <motion.div
              key="before"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto"
            >
              <BeforeCard items={beforeItems} expanded />
            </motion.div>
          )}

          {view === 'after' && (
            <motion.div
              key="after"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto"
            >
              <AfterCard items={afterItems} expanded />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transformation arrow (split view only) */}
        {view === 'split' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                <ToggleLeft className="w-5 h-5" />
                High Friction
              </div>
              <div className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg">
                <span>Design Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                Confident Flow
                <ToggleRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

function BeforeCard({ items, expanded = false }: { items: typeof beforeItems; expanded?: boolean }) {
  return (
    <div className="bg-gray-50 rounded-3xl p-9 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-xl">
            <X className="w-5 h-5 text-red-600" strokeWidth={3} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">BEFORE</h3>
            <p className="text-sm text-gray-400">Existing experience</p>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest bg-red-100 text-red-600 px-3 py-1.5 rounded-full">
          High Friction
        </span>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-start gap-4"
          >
            <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-gray-800 font-medium">{item.text}</p>
              <p className="text-sm text-gray-400 mt-1">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-red-500 font-medium">
          → High cognitive load, slow decision-making, low confidence
        </p>
      </div>
    </div>
  );
}

function AfterCard({ items, expanded = false }: { items: typeof afterItems; expanded?: boolean }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50/40 rounded-3xl p-9 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-md shadow-emerald-200">
            <Check className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">AFTER</h3>
            <p className="text-sm text-gray-400">Systematic Agent</p>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
          Confident Flow
        </span>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-start gap-4"
          >
            <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-gray-900 font-medium">{item.text}</p>
              <p className="text-sm text-gray-400 mt-1">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-purple-200">
        <p className="text-sm text-purple-700 font-semibold">
          ✨ Reduced cognitive load, confident decisions at speed
        </p>
      </div>
    </div>
  );
}