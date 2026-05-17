'use client';

import { motion } from 'motion/react';
import { CheckCircle2, RotateCcw, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';

const whatWorked = [
  {
    title: 'Starting with the funnel, not the feature',
    detail: 'Mapping the full investor research journey before touching UI revealed that evaluation was the real bottleneck — not discovery. This reframe shaped every design decision downstream.',
  },
  {
    title: 'Keeping traditional search as a fallback',
    detail: 'AI chat was the headline feature, but retaining keyword search as a parallel path reduced adoption risk. Users who trusted the existing flow weren\'t forced into a new paradigm on day one.',
  },
  {
    title: 'AI transparency in the insight engine',
    detail: 'Linking every AI claim to a source data tab wasn\'t a nice-to-have — it was a prerequisite for professional trust. Investors needed to see the reasoning, not just the conclusion.',
  },
];

const whatIdChange = [
  {
    title: 'Earlier usability testing on FTUE',
    detail: 'We underestimated how cognitively demanding the first chat interaction would be for expert users. Earlier testing on the empty-state experience would have saved an entire design iteration.',
  },
  {
    title: 'More involvement from investors in ideation',
    detail: 'We ran research sessions but ideated internally. Co-design workshops with 2–3 investors during the concept phase would have surfaced the "natural language thesis" insight earlier.',
  },
  {
    title: 'Clearer success metrics from day one',
    detail: 'We measured CSAT and retention, but "confidence in AI outputs" wasn\'t formalized as a KPI until midway through. Defining that metric upfront would have focused the trust design work.',
  },
];

const whatNext = [
  {
    title: 'Proactive AI suggestions',
    detail: 'Move from reactive chat to proactive signals — e.g. "3 companies matching your last query have new funding rounds." This shifts the product from search to intelligence.',
    tag: 'Phase 2',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Portfolio-level AI analysis',
    detail: 'Expand insights from individual companies to the investor\'s existing portfolio — surfacing overlaps, risks, and diversification opportunities across their holdings.',
    tag: 'Scale',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Collaborative discovery',
    detail: 'Enable team-based research — shared chat sessions, comment threads on AI insights, and co-shortlisting. Investment decisions are rarely made alone.',
    tag: 'Feature',
    tagColor: 'bg-teal-100 text-teal-700',
  },
];

export function Reflection() {
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
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">10 — Reflection</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">Looking Back. Looking Forward.</h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed">What worked, what I'd change, and where I'd take this next with the benefit of hindsight.</p>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* What Worked */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">What worked well</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whatWorked.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7"
              >
                
                <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I'd Change */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-amber-600" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">What I would do differently</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whatIdChange.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-amber-50 border border-amber-100 rounded-2xl p-7"
              >
                
                <h4 className="font-bold text-gray-900 mb-3 text-[15px]">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Where I would take this next</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whatNext.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Senior-level closing callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#f8f6ff] to-[#ede9fe] border border-purple-200 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-purple-600" />
                <p className="text-purple-600 text-xs font-bold uppercase tracking-widest">Key Takeaway</p>
              </div>
              <p className="font-medium text-gray-900 leading-relaxed mb-8 text-[24px]">
                "The most important design decision wasn't the chat interface — it was choosing to{' '}
                <span className="text-purple-700 font-bold">reframe the problem</span>
                {' '}from 'how do we improve search' to 'how do we reduce the cost of forming a view.' That shift changed everything."
              </p>
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}