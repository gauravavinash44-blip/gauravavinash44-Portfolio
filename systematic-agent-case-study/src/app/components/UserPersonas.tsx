'use client';

import { motion } from 'motion/react';
import { TrendingUp, BarChart2, Briefcase, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const personas = [
  {
    id: 'investor',
    label: 'Investor',
    role: 'VC / Angel Investor',
    abbr: 'INV',
    accent: 'from-violet-600 to-purple-700',
    border: 'border-violet-200',
    bg: 'bg-violet-50',
    textAccent: 'text-violet-700',
    icon: TrendingUp,
    description: 'Manages a portfolio thesis and evaluates deal flow at speed. Decision-making is time-gated — rounds close fast.',
    goals: [
      'Discover high-signal companies before they are widely known',
      'Build conviction quickly with minimal manual research',
      'Validate thesis fit without switching between tools',
    ],
    workflow: 'Reviews 30–50 companies per week. Starts with a market thesis, uses search to identify targets, then deep-dives on shortlisted companies before partner meetings.',
    painPoints: [
      "Can't express a thesis as a search query — keywords return noise",
      'Evaluation takes 45 min per company across 5–7 tabs',
      'Misses deals because research takes longer than the round',
    ],
    aiExpectation: 'AI that speaks investment language, not database columns',
  },
  {
    id: 'analyst',
    label: 'Analyst',
    role: 'Investment Analyst',
    abbr: 'ANA',
    accent: 'from-blue-600 to-cyan-600',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    textAccent: 'text-blue-700',
    icon: BarChart2,
    description: 'Supports partners by producing structured company briefs, comp tables, and sector reports under tight deadlines.',
    goals: [
      'Produce structured company briefs ready for partner review',
      'Cross-reference funding history, competitors, and team signals',
      'Generate comparable tables across 10–20 companies quickly',
    ],
    workflow: "Assigned a sector or thesis. Deep-dives into a cohort of companies, builds analysis docs, and synthesises findings into a partner-readable format — often overnight.",
    painPoints: [
      'Manual copy-paste from profiles into spreadsheets',
      'Profiles have inconsistent structure — hard to compare',
      'No way to generate a structured brief without starting from scratch',
    ],
    aiExpectation: 'Exportable, sourced AI summaries that hold up in a review',
  },
  {
    id: 'pe',
    label: 'VC / PE Team',
    role: 'PE Researcher / VC Team',
    abbr: 'PE',
    accent: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    textAccent: 'text-emerald-700',
    icon: Briefcase,
    description: 'Operates with a broader mandate — sector screens, portfolio monitoring, acquisition targets, or competitive intelligence at scale.',
    goals: [
      'Run sector-wide screens and track deal flow over time',
      'Identify acquisition targets by operational and financial profile',
      'Deliver weekly intelligence briefs to leadership on market movements',
    ],
    workflow: 'Runs periodic screens across hundreds of companies. Monitors watchlists, flags new signals, and builds pattern recognition across cohorts rather than single-company depth.',
    painPoints: [
      'AI outputs are unverifiable — no source attribution',
      'No watchlist or portfolio-level monitoring view',
      'Fundamental filters (EBITDA, margins) are imprecise or missing',
    ],
    aiExpectation: 'Enterprise-grade AI reasoning with explainable, auditable outputs',
  },
];

const insights = [
  { value: '45–90 min', label: 'avg. time to evaluate one company', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
  { value: '5–7 tabs', label: 'opened per research session', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
  { value: '73%', label: 'sessions ended without a shortlist', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-100' },
  { value: '0', label: 'tools that understood investment language', color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-100' },
];

export function UserPersonas() {
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
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">01.5 — Users</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
                Who Are the Users?
              </h2>
              
            </div>
            <div className="flex items-center gap-2 shrink-0">
              
              
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Persona cards — 3 columns */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">

                {/* Header */}
                <div className={`bg-gradient-to-br ${persona.accent} px-6 py-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <persona.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full">
                      {persona.label}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight mb-2">{persona.role}</h3>
                  
                </div>

                {/* Body */}
                <div className="px-6 py-6 space-y-5 flex-1">

                  {/* Workflow */}
                  <div className={`${persona.bg} border ${persona.border} rounded-xl px-4 py-3`}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Typical Workflow</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{persona.workflow}</p>
                  </div>

                  {/* Goals */}
                  

                  {/* Pain Points */}
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2.5">Pain Points</p>
                    <ul className="space-y-2">
                      {persona.painPoints.map((p, pi) => (
                        <li key={pi} className="flex items-start gap-2">
                          <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-600 text-xs leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Expectation */}
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5 text-center">
            Cross-Persona Research Findings — The Cost of the Broken Workflow
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`${insight.bg} border ${insight.border} rounded-2xl p-6 text-center`}
              >
                <p className={`text-3xl font-black ${insight.color} mb-2`}>{insight.value}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{insight.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
