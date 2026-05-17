'use client';

import { motion } from 'motion/react';
import { FlaskConical, X, ArrowRight, CheckCircle2, Users } from 'lucide-react';

const testingRounds = [
  {
    round: 'Round 1',
    label: 'Guerrilla testing — Week 3',
    method: 'Unmoderated prototype test with 6 internal users (analysts + ops). Figma prototype, 3 tasks.',
    participants: '6 participants',
    focus: 'FTUE + first chat query',
    style: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    round: 'Round 2',
    label: 'Moderated sessions — Week 6',
    method: '45-min moderated sessions with 8 external investors. Think-aloud protocol. Live staging environment.',
    participants: '8 participants',
    focus: 'Full flow + AI insights panel',
    style: 'bg-blue-50 border-blue-200 text-blue-700',
  },
];

const findings = [
  {
    id: 'F1',
    severity: 'Critical',
    severityStyle: 'bg-red-100 text-red-700 border-red-200',
    finding: 'Blank chat input caused paralysis',
    observation: '4 of 6 users in Round 1 stalled at the empty chat input for 15+ seconds. The open-ended "Ask anything" prompt was too vague for professional users with a specific research context.',
    whatFailed: 'We assumed investors would know how to start. They didn\'t.',
    whatChanged: 'Added contextual prompt suggestions (3 pre-filled query starters based on user role). Redesigned empty state to feel like an invitation, not a blank form.',
    changeType: 'Redesign',
    changeStyle: 'bg-red-50 text-red-700 border-red-200',
    icon: '💬',
  },
  {
    id: 'F2',
    severity: 'High',
    severityStyle: 'bg-orange-100 text-orange-700 border-orange-200',
    finding: 'AI response format was unreadable at speed',
    observation: 'In Round 2, investors wanted to scan results in under 10 seconds. Prose-style AI responses required reading, not scanning — users skipped them entirely and went straight to the company list.',
    whatFailed: 'We over-indexed on narrative response quality and under-indexed on scan-ability.',
    whatChanged: 'Restructured all AI responses to lead with a bolded summary line followed by scannable bullets. Tables replaced prose for comparative data.',
    changeType: 'Format overhaul',
    changeStyle: 'bg-orange-50 text-orange-700 border-orange-200',
    icon: '📋',
  },
  {
    id: 'F3',
    severity: 'High',
    severityStyle: 'bg-orange-100 text-orange-700 border-orange-200',
    finding: '"New Chat" created unexpected anxiety',
    observation: '3 users hesitated before clicking "New Chat" — they feared losing the current context or search history. One user said: "If I start over, I lose everything I\'ve done."',
    whatFailed: 'The "New Chat" interaction was treated as a reset, not as a fork.',
    whatChanged: 'Added a confirmation tooltip ("Your history is saved — this just starts a fresh thread") and ensured history sidebar was always visible before the action. Renamed to "Start new thread."',
    changeType: 'Copy + interaction',
    changeStyle: 'bg-orange-50 text-orange-700 border-orange-200',
    icon: '↩️',
  },
  {
    id: 'F4',
    severity: 'Medium',
    severityStyle: 'bg-amber-100 text-amber-700 border-amber-200',
    finding: 'AI Insights panel felt disconnected from company data',
    observation: 'Users praised the AI insight summary but then struggled to reconcile it with raw data in other tabs. They wanted to fact-check — but the path back was unclear.',
    whatFailed: 'We didn\'t bridge the gap between AI synthesis and raw data trust.',
    whatChanged: 'Added inline "See source data" links within the insight panel. Each AI claim now links to the specific tab and section where the underlying data lives.',
    changeType: 'Navigation + trust',
    changeStyle: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: '🔗',
  },
];

const iterationSummary = [
  { label: 'Critical issues fixed', value: '1', color: 'text-red-600' },
  { label: 'High-priority changes', value: '2', color: 'text-orange-600' },
  { label: 'Design iterations between rounds', value: '3', color: 'text-purple-600' },
  { label: 'SUS score improvement', value: '+18pt', color: 'text-emerald-600' },
];

export function UsabilityTesting() {
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
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">07 — Usability Testing & Iteration</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
                What We Tested.<br />What We Changed.
              </h2>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">Two rounds of testing with investors surfaced critical issues — and drove the most impactful design iterations.</p>
            </div>
            <div className="flex flex-col gap-2">
              {iterationSummary.map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
                  <span className={`text-xl font-black tabular-nums ${s.color}`}>{s.value}</span>
                  <span className="text-gray-600 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-purple-200 via-purple-100 to-transparent" />
        </motion.div>

        {/* Testing rounds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-5 mb-3">
            {testingRounds.map((r, i) => (
              <div key={i} className={`bg-white border-2 rounded-2xl p-7 flex items-start gap-5 border-gray-100`}>
                <div className="w-10 h-10 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-purple-600" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-black uppercase tracking-widest text-purple-600">{r.round}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-500 font-medium">{r.label}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{r.method}</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${r.style}`}>
                      <Users className="w-3 h-3 inline mr-1" />{r.participants}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full font-medium">
                      Focus: {r.focus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Findings */}
        <div className="space-y-5">
          {findings.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="grid md:grid-cols-[auto_1fr_1fr] gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                {/* Finding ID + severity */}
                <div className="px-7 py-7 flex flex-col justify-center items-center md:w-28 text-center gap-2">
                  <span className="text-3xl">{f.icon}</span>
                  <span className="text-2xl font-black text-gray-200">{f.id}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${f.severityStyle}`}>
                    {f.severity}
                  </span>
                </div>

                {/* Observation */}
                <div className="px-7 py-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Finding</p>
                  <p className="font-bold text-gray-900 mb-3">{f.finding}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.observation}</p>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-red-600 italic">{f.whatFailed}</p>
                  </div>
                </div>

                {/* What changed */}
                <div className="px-7 py-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">What Changed</p>
                  <div className={`rounded-xl border px-4 py-2 mb-4 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 ${f.changeStyle}`}>
                    <ArrowRight className="w-3 h-3" />
                    {f.changeType}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{f.whatChanged}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2} />
                    <p className="text-xs text-emerald-700 font-semibold">Validated in next round</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
              <FlaskConical className="w-7 h-7 text-purple-600" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-3">Testing Philosophy</p>
              <p className="text-gray-900 font-medium leading-relaxed mb-4 text-lg">
                "We didn't test to validate our assumptions — we tested to{' '}
                <span className="text-purple-700 font-bold">break them</span>
                . The most valuable findings came when investors did something we didn't expect."
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'SUS Score', before: '54', after: '72', delta: '+18pt' },
                  { label: 'Task Completion', before: '61%', after: '89%', delta: '+28%' },
                  { label: 'Time on Task', before: '4m 20s', after: '1m 55s', delta: '−55%' },
                ].map((m, mi) => (
                  <div key={mi} className="bg-white border border-purple-100 rounded-xl px-5 py-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{m.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 line-through">{m.before}</span>
                      <span className="text-gray-600">→</span>
                      <span className="text-sm font-bold text-gray-900">{m.after}</span>
                      <span className="text-xs font-black text-emerald-600">{m.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}