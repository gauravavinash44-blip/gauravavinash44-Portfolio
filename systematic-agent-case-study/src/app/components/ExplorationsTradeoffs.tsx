'use client';

import { motion } from 'motion/react';
import { Check, X, ArrowRight, Lightbulb } from 'lucide-react';

const approaches = [
  {
    id: 'A',
    label: 'Option A — Explored',
    title: 'Enhanced Filter System',
    description: 'Rebuild filters with smarter groupings, saved templates, and contextual tooltips.',
    visual: (
      <div className="bg-gray-100 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-gray-300" />
          <div className="h-2 bg-gray-300 rounded w-24" />
          <div className="h-2 bg-gray-200 rounded w-12 ml-auto" />
        </div>
        {['Sector', 'Revenue', 'Geography', 'Stage', 'Growth', 'Team Size'].map((f, i) => (
          <div key={f} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded border ${i < 2 ? 'bg-gray-400 border-gray-400' : 'bg-white border-gray-300'}`} />
            <div className="h-2 bg-gray-200 rounded" style={{ width: `${40 + i * 10}px` }} />
          </div>
        ))}
        <div className="mt-3 pt-2 border-t border-gray-200 flex gap-2">
          <div className="bg-gray-300 rounded px-3 py-1 h-5 w-16" />
          <div className="bg-gray-200 rounded px-3 py-1 h-5 w-12" />
        </div>
      </div>
    ),
    pros: [
      'Familiar pattern — no learning curve',
      'Fast to ship with existing infrastructure',
      'Predictable results',
    ],
    cons: [
      'Requires upfront knowledge to use correctly',
      'Doesn\'t handle ambiguity or exploratory intent',
      'More filters ≠ less cognitive load',
    ],
    verdict: 'rejected',
    verdictNote: 'Filters demand precision. Our users didn\'t have it yet.',
    accentColor: 'border-l-gray-300',
    tag: 'Explored & Rejected',
    tagStyle: 'bg-gray-100 text-gray-500 border-gray-200',
  },
  {
    id: 'B',
    label: 'Option B — Explored',
    title: 'AI-Powered Dashboard',
    description: 'Surface pre-computed recommendations on a personalized home screen based on portfolio + behaviour signals.',
    visual: (
      <div className="bg-gray-100 rounded-xl p-4 space-y-2">
        <div className="h-2 bg-gray-300 rounded w-32 mb-3" />
        <div className="grid grid-cols-2 gap-2">
          {[0,1,2,3].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-2 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-gray-200" />
                <div className="h-1.5 bg-gray-200 rounded w-14" />
              </div>
              <div className="h-1.5 bg-gray-100 rounded w-full" />
              <div className="h-1.5 bg-gray-100 rounded w-3/4" />
              <div className="flex justify-end mt-1">
                <div className="h-1.5 bg-indigo-200 rounded w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    pros: [
      'Reduces blank-slate problem',
      'Passive — no effort required from user',
      'High-impact if signals are accurate',
    ],
    cons: [
      'Cold-start failure for new investors',
      'Opaque — users don\'t trust "magic" suggestions',
      'Doesn\'t support thesis-driven exploration',
    ],
    verdict: 'partial',
    verdictNote: 'Good for retention loop, not for initial discovery. Parked for Phase 2.',
    accentColor: 'border-l-amber-300',
    tag: 'Considered → Phased',
    tagStyle: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'C',
    label: 'Option C — Chosen',
    title: 'Conversational AI Interface',
    description: 'Natural language input that interprets investor intent and maps to structured company data in real time.',
    visual: (
      <div className="bg-[#1a1a2e] rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="h-1.5 bg-white/20 rounded w-28" />
        </div>
        <div className="bg-white/10 rounded-lg px-3 py-2 flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-purple-500 shrink-0 mt-0.5" />
          <div className="space-y-1 flex-1">
            <div className="h-1.5 bg-white/30 rounded w-full" />
            <div className="h-1.5 bg-white/20 rounded w-3/4" />
          </div>
        </div>
        <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-3 py-2">
          <div className="space-y-1">
            {[1, 0.7, 0.85, 0.6].map((w, i) => (
              <div key={i} className="h-1.5 bg-emerald-400/50 rounded" style={{ width: `${w * 100}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-white/5 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10">
          <div className="h-1.5 bg-white/20 rounded flex-1" />
          <div className="w-5 h-5 rounded-full bg-purple-500 shrink-0 flex items-center justify-center">
            <ArrowRight className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
    ),
    pros: [
      'Meets investors at the exploration stage — not after',
      'Handles ambiguous, fuzzy intent naturally',
      'Progressive disclosure reduces blank-slate anxiety',
    ],
    cons: [
      'FTUE is critical — poor first run kills adoption',
      'Higher engineering complexity vs filter rebuild',
      'Requires careful error state design',
    ],
    verdict: 'chosen',
    verdictNote: 'Best fit. Investors explore before they can specify. Chat mirrors that naturally.',
    accentColor: 'border-l-purple-500',
    tag: 'Chosen Direction',
    tagStyle: 'bg-purple-100 text-purple-700 border-purple-200',
  },
];

const keyTradeoffs = [
  {
    tradeoff: 'Exploration speed vs precision',
    decision: 'We prioritized exploration — accepting that results would be less precise than filter-based search in exchange for reducing the barrier to start.',
    icon: '⚡',
  },
  {
    tradeoff: 'AI flexibility vs trust',
    decision: 'Trade-off: full autonomy vs explainability. We chose to surface reasoning ("Here\'s why I surfaced these companies") to build trust with skeptical institutional investors.',
    icon: '🔍',
  },
  {
    tradeoff: 'Full redesign vs chat overlay',
    decision: 'We prioritized a chat overlay pattern — preserving the existing search as fallback. This reduced adoption risk while allowing the new system to prove itself.',
    icon: '🧩',
  },
];

export function ExplorationsTradeoffs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">05.1 — Design Explorations</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
                Explorations &<br />Trade-offs
              </h2>
              <p className="text-gray-500 text-lg">We didn't land on chat immediately. Three directions were fully explored before committing.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-2xl px-6 py-4 shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">Design sprint</p>
              <p className="text-purple-800 font-semibold">2 weeks ideation · 3 concepts</p>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${approach.verdict === 'chosen' ? 'md:-mt-4' : ''}`}
            >
              {approach.verdict === 'chosen' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                  <span className="bg-purple-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    ✓ Direction chosen
                  </span>
                </div>
              )}
              <div className={`h-full bg-white rounded-2xl border-2 ${
                approach.verdict === 'chosen' ? 'border-purple-300 shadow-2xl shadow-purple-100' :
                approach.verdict === 'partial' ? 'border-amber-200' : 'border-gray-200'
              } overflow-hidden`}>
                {/* Visual mockup */}
                <div className={`p-5 ${
                  approach.verdict === 'chosen' ? 'bg-[#0f0a1e]' : 'bg-gray-50'
                } border-b ${approach.verdict === 'chosen' ? 'border-white/5' : 'border-gray-100'}`}>
                  {approach.visual}
                </div>

                <div className="p-7">
                  {/* Tag */}
                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${approach.tagStyle}`}>
                      {approach.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{approach.description}</p>

                  {/* Pros */}
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2.5">For</p>
                    <ul className="space-y-1.5">
                      {approach.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2.5">Against</p>
                    <ul className="space-y-1.5">
                      {approach.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verdict */}
                  <div className={`rounded-xl px-4 py-3 border text-sm leading-relaxed ${
                    approach.verdict === 'chosen' ? 'bg-purple-50 border-purple-200 text-purple-800' :
                    approach.verdict === 'partial' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                    'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <span className="font-bold">Decision: </span>{approach.verdictNote}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Trade-offs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-purple-600" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Key Trade-offs We Made</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {keyTradeoffs.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7"
              >
                <span className="text-2xl mb-4 block">{t.icon}</span>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">Trade-off</p>
                <p className="font-bold text-gray-900 mb-3">{t.tradeoff}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t.decision}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
