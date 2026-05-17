'use client';

import { motion } from 'motion/react';
import { Search, SlidersHorizontal, XCircle, AlertTriangle, ArrowRight, Brain } from 'lucide-react';

const journeySteps = [
  {
    step: '01',
    icon: Search,
    title: 'Start with keywords',
    pain: 'No results matched intent',
    detail: 'Investors typed broad terms like "innovative fintech" — but the database only matched exact strings. Results were either too broad or empty.',
    emotion: 'Confused',
    emotionColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    step: '02',
    icon: SlidersHorizontal,
    title: 'Try advanced filters',
    pain: '40+ parameters, no guidance',
    detail: 'Filters existed for sector, revenue, geography, growth rate — but users didn\'t know which parameters mattered for their thesis.',
    emotion: 'Overwhelmed',
    emotionColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    step: '03',
    icon: XCircle,
    title: 'Review results, still lost',
    pain: 'No way to evaluate quickly',
    detail: 'Even after finding companies, there was no quick way to understand fit. Users manually read 10–15 profiles before shortlisting anyone.',
    emotion: 'Stuck',
    emotionColor: 'text-red-600 bg-red-50 border-red-200',
  },
];

const behavioralInsights = [
  {
    stat: '12+',
    label: 'profiles opened',
    detail: 'On average, investors browsed 12 or more company profiles before shortlisting even a single one.',
    icon: '📂',
  },
  {
    stat: '73%',
    label: 'sessions ended without a decision',
    detail: 'Nearly three in four research sessions ended with no shortlist, no action — just closed tabs.',
    icon: '🔄',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-28 bg-gradient-to-br from-[#0f0a1e] via-[#1a0f3c] to-[#0d1b2a] text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">02 — Problem Discovery</p>
          <h2 className="text-5xl font-bold tracking-tight mb-6">The Discovery Trap</h2>
          
          <div className="mt-8 h-px bg-gradient-to-r from-purple-500/40 via-purple-400/20 to-transparent" />
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">The typical investor research journey</p>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-purple-500/30 via-red-400/40 to-red-600/30 z-0" />

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                  className="group"
                >
                  <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 h-full">
                    {/* Step + emotion */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-white/10">{step.step}</span>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${step.emotionColor}`}>
                        {step.emotion}
                      </span>
                    </div>

                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-bold text-white">{step.title}</h3>
                    </div>

                    {/* Pain highlight */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5 mb-4">
                      <p className="text-red-300 text-sm font-semibold">↳ {step.pain}</p>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Arrow → Analysis Paralysis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-white/20" />
            <div className="flex items-center gap-2 text-white/40">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl px-8 py-4 text-center">
              <div className="flex items-center gap-3 justify-center mb-1">
                <Brain className="w-5 h-5 text-red-400" />
                <p className="text-red-300 font-black uppercase tracking-widest text-sm">Analysis Paralysis</p>
              </div>
              <p className="text-white/50 text-sm">Too many options. Not enough signal. No path forward.</p>
            </div>
            <div className="h-px w-16 bg-white/20" />
          </div>
        </motion.div>

        {/* Behavioral Insights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6 text-center">Behavioral Insights from Research</p>
          <div className="grid md:grid-cols-2 gap-5">
            {behavioralInsights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white/[0.06] border border-white/15 rounded-2xl p-8 flex items-start gap-6"
              >
                <span className="text-4xl">{insight.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-white">{insight.stat}</span>
                    <span className="text-purple-300 font-semibold text-lg">{insight.label}</span>
                  </div>
                  <p className="text-white/50 leading-relaxed">{insight.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design POV */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-purple-600/20 border border-purple-400/30 rounded-2xl p-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <AlertTriangle className="w-4 h-4 text-purple-400" />
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">Design POV</p>
            </div>
            <p className="text-2xl text-white font-medium leading-relaxed">"The problem wasn't that investors lacked data, it's that they couldn't translate their instincts into a structured query. The interface forced precision before they had it."</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
