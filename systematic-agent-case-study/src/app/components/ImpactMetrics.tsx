'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Target, Quote, ArrowRight } from 'lucide-react';

const metrics = [
  {
    value: 40,
    suffix: '%',
    prefix: '',
    label: 'Reduction in cognitive load',
    sublabel: 'Measured via task completion & SUS scores',
    meaning: 'Users moved from information overload to confident shortlisting in under 3 minutes — down from an average of 8.',
    icon: Target,
    color: 'from-purple-400 to-purple-600',
    glow: 'shadow-purple-500/30',
    delay: 0,
  },
  {
    value: 12,
    suffix: '%',
    prefix: '+',
    label: 'User retention',
    sublabel: 'Month-over-month active users',
    meaning: 'Feature adoption drove weekly active usage among investors who previously churned after 2 sessions.',
    icon: Users,
    color: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/30',
    delay: 0.15,
  },
  {
    value: 3,
    suffix: 'x',
    prefix: '',
    label: 'Faster discovery',
    sublabel: 'From query to shortlist',
    meaning: 'The query-to-insight pipeline compressed a 2-hour research workflow into approximately 35 minutes.',
    icon: Clock,
    color: 'from-blue-400 to-indigo-500',
    glow: 'shadow-blue-500/30',
    delay: 0.3,
  },
  {
    value: 85,
    suffix: '%',
    prefix: '',
    label: 'User satisfaction (CSAT)',
    sublabel: 'Post-launch survey, n=120',
    meaning: 'Satisfaction driven primarily by AI transparency and structured summaries — users trusted the output because they could see the reasoning.',
    icon: TrendingUp,
    color: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/30',
    delay: 0.45,
  },
];

function useCountUp(end: number, duration: number = 1800, started: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let animFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      }
    };

    animFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameId);
  }, [started, end, duration]);

  return count;
}

function MetricCard({ metric }: { metric: typeof metrics[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(metric.value, 1600, isInView);

  return (
    <motion.div
      ref={ref}
      key={metric.label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: metric.delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/[0.13] hover:border-white/25 transition-all duration-300 shadow-xl ${metric.glow} h-full`}>
        {/* Icon */}
        <div className={`bg-gradient-to-br ${metric.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <metric.icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Counter */}
        <div className="mb-2">
          <span className="text-6xl font-black text-white tabular-nums">
            {metric.prefix}{count}{metric.suffix}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-purple-50 mb-1">{metric.label}</h3>
        <p className="text-xs text-purple-300/70 mb-5">{metric.sublabel}</p>

        {/* What it means */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">What this means</p>
          <p className="text-sm text-purple-100/70 leading-relaxed">{metric.meaning}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ImpactMetrics() {
  return (
    <section id="impact" className="py-28 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#5b21b6] text-white relative overflow-hidden">
      {/* Background textures */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-purple-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            09 — Impact & Results
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl font-bold tracking-tight">
              Measuring What<br />Actually Mattered
            </h2>
            <p className="text-purple-200 max-w-sm leading-relaxed md:text-right">Numbers alone don't tell the story. Here's what the metrics meant for users and the business.</p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-400/40 via-purple-300/20 to-transparent" />
        </motion.div>

        {/* Metric cards with counter animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Outcome narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {[
            {
              label: 'Business Impact',
              stat: '3×',
              detail: 'Faster deal-flow evaluation reduced time-to-shortlist from 2 hours to 35 minutes — directly tied to increased platform stickiness.',
              color: 'from-purple-500 to-indigo-600',
            },
            {
              label: 'Product Impact',
              stat: '+12%',
              detail: 'Monthly active user retention improved as investors found the chat interface more intuitive than filtered search for exploratory queries.',
              color: 'from-emerald-500 to-teal-600',
            },
            {
              label: 'Design Impact',
              stat: '85%',
              detail: 'CSAT driven by AI transparency — investors cited sourced summaries and scannable response formats as the top satisfaction drivers.',
              color: 'from-amber-500 to-orange-500',
            },
          ].map((item, i) => (
            null
          ))}
        </motion.div>

        {/* Investor testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {[
            {
              quote: 'The AI summary on each company profile changed how I prepare for partner meetings. I used to spend 40 minutes per company — now I spend 10.',
              name: 'Investment Partner',
              firm: 'Series A VC Fund',
              initials: 'IP',
            },
            {
              quote: 'I was skeptical about AI in investment research. But being able to see exactly where each claim came from made it something I could actually put in a memo.',
              name: 'Senior Analyst',
              firm: 'Multi-Stage Venture',
              initials: 'SA',
            },
          ].map((t, i) => (
            null
          ))}
        </motion.div>

      </div>
    </section>
  );
}