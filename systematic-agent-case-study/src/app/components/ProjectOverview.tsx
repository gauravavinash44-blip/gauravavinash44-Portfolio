'use client';

import { motion } from 'motion/react';
import { Briefcase, User, Target, Lightbulb, ArrowRight } from 'lucide-react';

const overviewCards = [
  {
    title: 'The Product',
    description:
      'Systematic is a US-based fintech platform that helps institutional and angel investors discover, evaluate, and track companies — replacing fragmented Excel workflows with a unified data-driven system.',
    icon: Briefcase,
    accentColor: 'bg-teal-500',
    borderColor: 'border-teal-400/40',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    tag: 'Context',
  },
  {
    title: 'My Role',
    description:
      'Product Designer & UX Researcher. End-to-end ownership: user research, problem framing, concepting, high-fidelity UI, and engineering handoff. Managed stakeholder alignment across product, data, and ML teams.',
    icon: User,
    accentColor: 'bg-purple-500',
    borderColor: 'border-purple-400/40',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    tag: 'My Contribution',
  },
  {
    title: 'The Problem',
    description:
      'Investors had access to data but couldn\'t act on it. Search was too rigid, filters required upfront expertise, and evaluation took hours of manual synthesis — causing analysis paralysis and session abandonment.',
    icon: Target,
    accentColor: 'bg-rose-500',
    borderColor: 'border-rose-400/40',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    tag: 'Challenge',
  },
  {
    title: 'The Outcome',
    description:
      'A two-part AI system: conversational discovery (chat-based search) and an AI insights engine (auto-generated company summaries). Reduced discovery time 3× and improved CSAT to 85%.',
    icon: Lightbulb,
    accentColor: 'bg-amber-500',
    borderColor: 'border-amber-400/40',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    tag: 'Result',
  },
];

const stakes = [
  { value: '$2.1B+', label: 'AUM tracked on platform', color: 'text-purple-700' },
  { value: '400+', label: 'Institutional investors', color: 'text-teal-700' },
  { value: '50K+', label: 'Companies in database', color: 'text-indigo-700' },
];

export function ProjectOverview() {
  return (
    <section id="overview" className="py-28 bg-gray-50">
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
            01 — Introduction
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
              What This Product<br />Had to Solve
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed md:text-right text-[16px]">A fintech platform where the data was never the problem but getting investors to trust it and act on it was.</p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Business stakes strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12"
        >
          
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {overviewCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group cursor-default"
            >
              <div
                className={`h-full bg-white rounded-2xl p-8 border ${card.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] ${card.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`${card.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} strokeWidth={2} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${card.iconColor} opacity-60`}>
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why it mattered */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-900/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <p className="text-purple-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  Why This Mattered
                </p>
                <p className="text-2xl text-white font-medium leading-relaxed mb-6">
                  Investors weren't failing because of bad data. They were failing because the interface demanded precision they didn't yet have.
                </p>
                
              </div>

              <div className="flex-1 space-y-5 border-t border-white/10 pt-8 md:pt-0 md:border-t-0 md:border-l md:border-white/10 md:pl-10">
                <p className="text-purple-100/80 leading-relaxed">Fixing this wasn't just a UX problem it was a product moat. Platforms that reduce time-to-insight in investment research command significantly higher retention and willingness to pay.</p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-300 uppercase tracking-wider mb-1">Retention</p>
                    <p className="text-white font-bold">+12%</p>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-300 uppercase tracking-wider mb-1">Discovery Speed</p>
                    <p className="text-white font-bold">3× Faster</p>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs text-purple-300 uppercase tracking-wider mb-1">CSAT</p>
                    <p className="text-white font-bold">85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}