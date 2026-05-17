'use client';

import { motion } from 'motion/react';
import { MessageSquare, Brain, CheckCircle2, ArrowRight } from 'lucide-react';

const solutions = [
  {
    number: '01',
    title: 'Conversational Discovery',
    problem: 'Problem addressed: Analysis paralysis at the search stage',
    icon: MessageSquare,
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    accentColor: 'bg-emerald-500',
    borderColor: 'border-emerald-200',
    features: [
      'Natural language queries instead of rigid filters',
      'Progressive disclosure of options',
      'Context-aware suggestions based on intent',
    ],
    principles: [
      'Guide without overwhelming',
      'Flexible exploration',
      'Learn from user behavior',
    ],
    impact: 'Moves users from blank-slate anxiety to confident exploration in under 60 seconds.',
  },
  {
    number: '02',
    title: 'AI Insights Engine',
    problem: 'Problem addressed: Manual synthesis at the evaluation stage',
    icon: Brain,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    accentColor: 'bg-purple-500',
    borderColor: 'border-purple-200',
    features: [
      'Auto-generated company summaries',
      'Risk assessment highlighting',
      'Investment relevance scoring',
    ],
    principles: [
      'Scan-first, explainable',
      'Structured, not conversational',
      'Summary first, details later',
    ],
    impact: 'Converts a 2-hour profile analysis into a 10-minute structured evaluation.',
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            06 — The Solution
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">A Two-Part<br />Response</h2>
            <p className="text-gray-500 max-w-sm leading-relaxed md:text-right">
              Each part of the solution directly targets a specific friction point revealed in the funnel analysis.
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Narrative bridge from funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-sm">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">So we designed two focused interventions</p>
              <p className="text-gray-800 text-lg leading-relaxed">The funnel showed <span className="font-semibold text-purple-700">discovery friction</span> at Stage 1–2 and  at Stage 3. Rather than one universal solution, we built two complementary systems each tackling a distinct failure mode.<span className="font-semibold text-purple-700">evaluation friction</span></p>
            </div>
          </div>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className={`h-full bg-white rounded-3xl p-9 shadow-sm hover:shadow-2xl transition-all duration-300 border ${solution.borderColor} relative overflow-hidden`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] ${solution.accentColor}`} />

                {/* Step number background */}
                <span className="absolute top-6 right-6 text-7xl font-black text-gray-100 select-none leading-none">
                  {solution.number}
                </span>

                {/* Problem addressed tag */}
                <div className="relative z-10 mb-6"><span className="text-xs uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">{solution.problem}</span></div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`${solution.iconBg} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-6" />

                {/* Design Principles */}
                <div className="mb-6">
                  
                  
                </div>

                {/* Impact statement */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-xl px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">Expected Impact</p>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">{solution.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Rationale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
        </motion.div>

      </div>
    </section>
  );
}
