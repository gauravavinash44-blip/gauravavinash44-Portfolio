'use client';

import { motion } from 'motion/react';
import { Users, CheckCircle2, ArrowRight, MessageSquare, Zap } from 'lucide-react';

const collaborators = [
  {
    role: 'Product Manager',
    initials: 'PM',
    color: 'bg-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    how: 'Weekly alignment on scope + priority. I drove design strategy; PM owned business framing and stakeholder narrative.',
    myContribution: [
      'Translated research findings into prioritized design bets',
      'Challenged feature requests that added friction without user value',
      'Brought competitive context that shaped product positioning',
    ],
  },
  {
    role: 'ML / Engineering',
    initials: 'ENG',
    color: 'bg-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    how: 'Embedded in bi-weekly ML reviews. I translated user needs into API constraints early — avoiding rework in build phase.',
    myContribution: [
      'Co-defined NLP accuracy thresholds that would be "good enough" for v1 UX',
      'Designed around pipeline limitations rather than waiting for them to be solved',
      'Flagged trust-critical UX requirements (confidence signals, fallback states) as day-1 dependencies',
    ],
  },
  {
    role: 'Data / Analytics',
    initials: 'DATA',
    color: 'bg-teal-600',
    borderColor: 'border-teal-200',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    how: 'Worked with data team to define which signals to surface in AI insights. Avoided vanity metrics; prioritised investor-relevant signals.',
    myContribution: [
      'Defined the information hierarchy for AI insight summaries based on what investors actually asked in interviews',
      'Ensured SWOT-style signals mapped to actual data fields (not aspirational fields that didn\'t exist yet)',
      'Designed the "See source data" link pattern — informed by analytics showing where drop-off happened',
    ],
  },
];

const ownershipMap = [
  { area: 'UX Research & Synthesis', owner: 'Me', level: 100 },
  { area: 'Problem Framing & POV', owner: 'Me + PM', level: 80 },
  { area: 'Ideation & Direction', owner: 'Me (PM review)', level: 90 },
  { area: 'High-Fidelity UI & Specs', owner: 'Me', level: 100 },
  { area: 'Stakeholder Presentations', owner: 'Me + PM', level: 70 },
  { area: 'Usability Testing', owner: 'Me', level: 100 },
  { area: 'Engineering Handoff', owner: 'Me (ENG review)', level: 85 },
];

const challenge = {
  title: 'The hard conversation: scoping out multi-turn memory',
  context: 'Three weeks before deadline, engineering flagged that multi-turn context memory (where the AI remembers what you searched in earlier messages) would require a 2-sprint ML backend change — outside our window.',
  tension: 'PM wanted to keep it in scope as a key differentiator. I had already designed the UX around it. Removing it meant rethinking the interaction model mid-sprint.',
  myAction: [
    'Ran a rapid audit of which features depended on multi-turn memory vs. which could work without it',
    'Prototyped a stateless-but-persistent pattern: chat doesn\'t remember between sessions, but full history is always accessible in the sidebar',
    'Presented the trade-off with user impact clearly quantified — "this affects 20% of use cases in v1, but history panel covers the most critical one (return visits)"',
    'We aligned on shipping without it — and I redesigned the history sidebar UX to compensate within 2 days',
  ],
  outcome: 'Shipped on time. Multi-turn memory is now Phase 2 with a clear spec already written.',
  outcomeStyle: 'bg-emerald-50 border-emerald-200 text-emerald-700',
};

export function CollaborationLeadership() {
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
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">08 — Collaboration & Leadership</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
                How I Led &<br />Worked With Others
              </h2>
              <p className="text-gray-500 text-lg">Design doesn't happen in isolation. Here's how I drove alignment and navigated ambiguity.</p>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Collaboration cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Cross-functional collaboration</p>
          <div className="grid md:grid-cols-3 gap-5">
            {collaborators.map((c, i) => (
              <motion.div
                key={c.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Role header */}
                <div className={`${c.bgColor} border-b ${c.borderColor} px-6 py-5 flex items-center gap-4`}>
                  <div className={`${c.color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                    <span className="text-white text-xs font-black">{c.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{c.role}</p>
                    <p className={`text-xs font-semibold ${c.textColor}`}>Collaborated closely</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{c.how}</p>
                  
                  <ul className="space-y-2">
                    {c.myContribution.map((item, ii) => (
                      null
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ownership map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          
        </motion.div>

        {/* The hard conversation */}
        

      </div>
    </section>
  );
}
