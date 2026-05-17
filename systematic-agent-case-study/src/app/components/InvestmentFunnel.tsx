'use client';

import { motion } from 'motion/react';
import { Sparkles, Search, Filter, BarChart2, Star, TrendingUp } from 'lucide-react';

const funnelSteps = [
  {
    step: '01',
    title: 'Search',
    subtitle: 'The Query',
    description: 'Investor articulates initial intent via keyword or natural language',
    icon: Search,
    highlight: false,
  },
  {
    step: '02',
    title: 'Exploratory Filtering',
    subtitle: 'Defining Parameters',
    description: 'Users refine scope through filters — sector, growth, geography',
    icon: Filter,
    highlight: false,
  },
  {
    step: '03',
    title: 'Insight Evaluation',
    subtitle: 'AI Pivot Point',
    description: 'The critical moment where AI-generated insights reduce manual effort',
    icon: Sparkles,
    highlight: true,
  },
  {
    step: '04',
    title: 'Shortlisting',
    subtitle: 'Building the Case',
    description: 'Promising companies are saved and organized for comparison',
    icon: Star,
    highlight: false,
  },
  {
    step: '05',
    title: 'Deep Analysis',
    subtitle: 'The Deep Dive',
    description: 'Final validation with structured data before investment decisions',
    icon: TrendingUp,
    highlight: false,
  },
];

export function InvestmentFunnel() {
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
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">04 — Strategic Insight</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
              Where the Real<br />Friction Lives
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed md:text-right">Mapping the investment funnel revealed something critical: the problem wasn't at the top it was in the middle.</p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Funnel Steps — horizontal on desktop */}
        <div className="relative mb-16">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-gray-200 via-purple-300 to-gray-200 z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6">
            {funnelSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group text-center"
              >
                {/* Icon circle */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      step.highlight
                        ? 'bg-gradient-to-br from-purple-600 to-purple-800 shadow-xl shadow-purple-400/30 ring-4 ring-purple-200'
                        : 'bg-gray-50 border border-gray-200 group-hover:border-purple-200 group-hover:bg-purple-50'
                    }`}
                  >
                    <step.icon
                      className={`w-8 h-8 ${step.highlight ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'} transition-colors`}
                      strokeWidth={1.8}
                    />
                    {step.highlight && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-900" />
                      </div>
                    )}
                    {/* Step number badge */}
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-gray-500">{step.step}</span>
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-base font-bold mb-1 ${
                    step.highlight ? 'text-purple-700' : 'text-gray-900'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    step.highlight ? 'text-purple-500' : 'text-gray-400'
                  }`}
                >
                  {step.subtitle}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed hidden md:block">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-400/30">
              <BarChart2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-purple-900 font-semibold mb-2">
                <span className="text-purple-600 font-bold">Friction Peak:</span> Stage 3 — Insight Evaluation.
              </p>
              <p className="text-purple-700/80 mb-3">This is where investors stall. They have a shortlist but no fast way to assess fit. They read entire profiles, cross-reference tabs, and still feel unsure. It's not a data problem, it's a synthesis problem.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  🎯 Highest drop-off point
                </span>
                <span className="bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  💡 Where AI creates maximum value
                </span>
                <span className="bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  ⚡ Our primary design opportunity
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}