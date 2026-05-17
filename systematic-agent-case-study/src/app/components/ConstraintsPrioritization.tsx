'use client';

import { motion } from 'motion/react';
import { Clock, Database, Code2, ArrowUp, ArrowDown, Minus } from 'lucide-react';

const constraints = [
  {
    type: 'Time',
    icon: Clock,
    iconBg: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
    constraint: 'Only 8 weeks to ship',
    detail: 'We had a hard deadline tied to a board review. There was no time to do things one step at a time — design, research, and building all had to happen at once.',
    impact: 'We tested with real users in Week 3 instead of waiting. It wasn\'t perfect, but it gave us feedback fast enough to act on.',
    impactTag: 'High Impact',
    impactTagStyle: 'bg-red-100 text-red-700',
  },
  {
    type: 'Data',
    icon: Database,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    constraint: 'The AI wasn\'t fully ready yet',
    detail: 'The AI could understand most questions, but not all. It got things right about 74% of the time at the start — which meant it would sometimes miss the mark.',
    impact: 'We designed the product to handle AI mistakes gracefully. Every response showed how confident the AI was, and users could easily rephrase if something didn\'t look right.',
    impactTag: 'Design Workaround',
    impactTagStyle: 'bg-amber-100 text-amber-700',
  },
  {
    type: 'Engineering',
    icon: Code2,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    constraint: 'Engineering had limited capacity',
    detail: 'The AI chat and the existing search ran on the same backend. Adding new features required the ML team — and they were already stretched thin.',
    impact: 'We kept the first version simple and used what already existed. Features like memory across conversations were saved for a later release.',
    impactTag: 'MVP Scope Cut',
    impactTagStyle: 'bg-blue-100 text-blue-700',
  },
];

const priorityItems = [
  {
    priority: 'P0 — Must ship',
    color: 'border-l-red-500',
    headerBg: 'bg-red-50',
    headerText: 'text-red-700',
    dot: 'bg-red-500',
    items: [
      { label: 'Conversational entry point', reason: 'Core hypothesis — if this fails, nothing else matters' },
      { label: 'FTUE for first-time users', reason: 'Adoption depends entirely on the first 60 seconds' },
      { label: 'Chat history & session recovery', reason: 'Institutional investors revisit — no history = no return' },
      { label: 'Error + loading states', reason: 'Trust-critical. Bad empty states would kill credibility' },
    ],
  },
  {
    priority: 'P1 — Should ship',
    color: 'border-l-amber-400',
    headerBg: 'bg-amber-50',
    headerText: 'text-amber-700',
    dot: 'bg-amber-400',
    items: [
      { label: 'AI Insights on company profiles', reason: 'Directly solves the evaluation problem — builds on chat momentum' },
      { label: 'Structured insight format (SWOT-style)', reason: 'Validates scan-first principle without complex ML dependency' },
      { label: 'Inline "View All" redirect', reason: 'Bridges chat output → existing data tabs without rebuilding' },
    ],
  },
  {
    priority: 'P2 — Deprioritised',
    color: 'border-l-gray-300',
    headerBg: 'bg-gray-50',
    headerText: 'text-gray-500',
    dot: 'bg-gray-400',
    items: [
      { label: 'Multi-turn context memory', reason: 'Requires ML sprint — parked for v2' },
      { label: 'Proactive AI suggestions (push model)', reason: 'Valuable but too complex; retention-phase feature' },
      { label: 'Collaborative sessions / team sharing', reason: 'B2B team use case — future product bet' },
      { label: 'ML-based recommendations dashboard', reason: 'Cold-start problem not solved; needs 3 months of signal data' },
    ],
  },
];

const decisionMoments = [
  {
    moment: 'Cut multi-turn memory from v1',
    detail: 'We aligned on accepting a stateless v1 chat rather than delaying 3 weeks for ML backend work. We compensated with persistent history and a clear "new chat" pattern.',
    icon: ArrowDown,
    iconStyle: 'bg-red-50 text-red-600',
  },
  {
    moment: 'Shipped FTUE as a standalone design sprint',
    detail: 'We prioritized FTUE as its own 5-day sprint after internal testing showed 40% of first-time users dropped off at the blank chat input.',
    icon: ArrowUp,
    iconStyle: 'bg-emerald-50 text-emerald-600',
  },
  {
    moment: 'Kept legacy search as a fallback',
    detail: 'We aligned on not removing the existing search during v1. Trade-off: added UX complexity. Benefit: reduced adoption risk and gave us a safety net against AI failures.',
    icon: Minus,
    iconStyle: 'bg-amber-50 text-amber-600',
  },
];

export function ConstraintsPrioritization() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">05.2 — Constraints & Scope</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">Constraints &<br />Prioritization</h2>
              <p className="text-gray-500 text-lg">Good design isn't just what you ship — it's what you decide not to ship, and why.</p>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Constraint Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          
          <div className="grid md:grid-cols-3 gap-5">
            {constraints.map((c, i) => (
              <motion.div
                key={c.type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${c.iconBg}`}>
                  <c.icon className={`w-5 h-5 ${c.iconColor}`} strokeWidth={2} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.type} Challenge</p>
                <p className="font-bold text-gray-900 mb-2">{c.constraint}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.detail}</p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${c.impactTagStyle}`}>{c.impactTag}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Priority tiers */}
        

        {/* Key decision moments */}
        

      </div>
    </section>
  );
}