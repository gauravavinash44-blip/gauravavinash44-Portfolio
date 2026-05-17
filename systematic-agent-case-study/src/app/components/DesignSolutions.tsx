'use client';

import { motion } from 'motion/react';
import {
  MessageSquare,
  Search,
  Monitor,
  History,
  AlertTriangle,
  Brain,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  TrendingUp,
  ArrowRight,
  BarChart2,
  Shield,
} from 'lucide-react';

import imgImage26 from 'figma:asset/04a1485035ff79a1d1a092ffdd7c37ff6438f82e.png';
import imgImage27 from 'figma:asset/9dbd27573f07a3f256ee2d47ae3cae20b2081760.png';
import imgChatHistory from 'figma:asset/43b328c946fc4a900afe828cfa82398f6559ce23.png';
import imgImage2 from 'figma:asset/e72560f0676eba7a9475a0259a66a2312c43d42b.png';
import imgFTUE from '../../imports/image.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ─── Reusable pill label ─────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
      {children}
    </p>
  );
}

/* ─── Sub-section heading ─────────────────────────── */
function SubHeading({
  icon: Icon,
  title,
  iconColor = 'text-purple-600',
}: {
  icon: React.ElementType;
  title: string;
  iconColor?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
        <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );
}

/* ─── Solution Part 1 ─────────────────────────────── */
function Part1Header() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-16"
    >
      <SectionLabel>05 — Design Solutions</SectionLabel>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className="text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Solution Part 1
          </span>
          <br />
          <span className="text-gray-900">Conversational Discovery</span>
        </h2>
      </div>
      <div className="mt-8 h-px bg-gradient-to-r from-emerald-200 via-purple-200 to-transparent" />

      {/* Why Chat */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-4">Why Chat?</h4>
          <ul className="space-y-3">
            {['Investors start with vague, exploratory questions', 'Chat allowed ambiguity as valid input — no rigid filters needed'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-4">What made this different from generic chat?</h4>
          <ul className="space-y-3">
            {[
              "Grounded in Systematic's internal database",
              'Context-aware (profile + session)',
              'Designed to guide discovery, not replace judgment',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Entry Points ────────────────────────────────── */
function EntryPoints() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20"
    >
      <SubHeading icon={Search} title="Entry Points" />
      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <img
              src={imgImage26}
              alt="Search bar entry point"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="lg:w-72 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">Entry via Search Bar</p>
              <p className="text-gray-700 leading-relaxed">
                Click on the Search Bar → Opens recent searches (if available), or allows the user to begin typing a query. This action also enables direct access to the AI chat mode.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl px-5 py-3 inline-flex items-center gap-2 shadow-lg">
              <Search className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Ask Systematic Agent</span>
            </div>
            <p className="text-sm text-gray-500">Click on "Ask Systematic Agent" CTA → Opens the same entry point.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── FTUE Design ─────────────────────────────────── */
function FTUEDesign() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20"
    >
      <SubHeading icon={Monitor} title="FTUE Design" />
      <div className="relative">
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow border border-gray-100 z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">First-Time User Experience</p>
        </div>
        <img
          src={imgFTUE}
          alt="FTUE Design"
          className="w-full rounded-2xl shadow-xl border border-gray-100"
        />
      </div>
    </motion.div>
  );
}

/* ─── Chat Interface Behavior ─────────────────────── */
function ChatInterfaceBehavior() {
  const behaviors = [
    { icon: '↘️', label: 'Collapse', desc: 'Minimize the chat popup window' },
    { icon: '🕐', label: 'History', desc: 'Access previous conversations' },
    { icon: '✏️', label: 'New Chat', desc: 'Start a fresh conversation' },
  ];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20"
    >
      <SubHeading icon={MessageSquare} title="Chat Interface Behavior" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          <img
            src={imgImage27}
            alt="Chat interface"
            className="w-full rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Header Icons</p>
            <div className="space-y-3">
              {behaviors.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="text-lg w-8">{b.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{b.label}</p>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">Hover states exist for all icons.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">📋 Chat Response Format</p>
            <p className="text-gray-700">Supports: <span className="font-semibold text-gray-900">Text, Tables, and Links</span></p>
          </div>
          <div className="bg-purple-50 rounded-2xl border border-purple-100 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">If the answer is long</p>
            <p className="text-gray-700 text-sm">Add <span className="font-semibold text-purple-700">"View All"</span> → redirects to specific tab (Investor, Competitor, etc.)</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
            <RotateCcw className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">🔃 New Chat Behavior</p>
            <p className="text-gray-700 text-sm">Resets conversation state</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <History className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">History Preserved</p>
            <p className="text-gray-700 text-sm">Retains ability to access previous history</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Chat History Management ─────────────────────── */
function ChatHistoryManagement() {
  const details = [
    { icon: '🏷️', label: 'Auto-titled Sessions', desc: 'Chats are named by the AI based on the query topic — users never have to label them manually.' },
    { icon: '🔍', label: 'Searchable History', desc: 'Past conversations are keyword-searchable, not just a chronological list.' },
    { icon: '🔄', label: 'Session Recovery', desc: 'Returning users land back in context, reducing drop-off and repeated queries.' },
    { icon: '✨', label: '"New Chat" Resets State', desc: 'Clears the current thread without losing history — a deliberate reset, not a delete.' },
  ];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20"
    >
      <SubHeading icon={History} title="Chat History Management" />
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2 space-y-3">
          {details.map((d) => (
            <div key={d.label} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">{d.icon}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">{d.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3">
          <img
            src={imgChatHistory}
            alt="Chat interface and history management"
            className="w-full rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Errors & Loading States ─────────────────────── */
function ErrorsAndLoadingStates() {
  const errors = [
    { color: 'bg-red-50 border-red-200', iconColor: 'bg-red-500', message: 'Something went wrong' },
    { color: 'bg-red-50 border-red-200', iconColor: 'bg-red-500', message: "I didn't quite get that. Try rephrasing or ask me something else." },
    { color: 'bg-red-50 border-red-200', iconColor: 'bg-red-500', message: "That data isn't available right now." },
  ];
  const warnings = [
    { color: 'bg-amber-50 border-amber-200', iconColor: 'bg-amber-400', message: 'Still working on it... thanks for your patience.', action: null },
    { color: 'bg-amber-50 border-amber-200', iconColor: 'bg-amber-400', message: 'Having trouble reaching servers. Please retry soon.', action: 'Retry' },
    { color: 'bg-amber-50 border-amber-200', iconColor: 'bg-amber-400', message: "You've used 3 chats this week. Subscribe for more.", action: 'Subscribe' },
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-20"
    >
      <SubHeading icon={AlertTriangle} title="Errors & Loading States" iconColor="text-amber-500" />

      <div className="mb-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Loading State</p>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">Generating response…</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
            <XCircle className="w-4 h-4" /> Error States
          </p>
          <div className="space-y-3">
            {errors.map((e, i) => (
              <div key={i} className={`${e.color} border rounded-xl px-4 py-3 flex items-center gap-3`}>
                <span className={`${e.iconColor} w-5 h-5 rounded-full flex items-center justify-center shrink-0`}>
                  <XCircle className="w-3 h-3 text-white" />
                </span>
                <p className="text-sm text-gray-800">{e.message}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Warning States
          </p>
          <div className="space-y-3">
            {warnings.map((w, i) => (
              <div key={i} className={`${w.color} border rounded-xl px-4 py-3 flex items-center justify-between gap-3`}>
                <div className="flex items-center gap-3">
                  <span className={`${w.iconColor} w-5 h-5 rounded-full flex items-center justify-center shrink-0`}>
                    <AlertTriangle className="w-3 h-3 text-white" />
                  </span>
                  <p className="text-sm text-gray-800">{w.message}</p>
                </div>
                {w.action && (
                  <span className="text-xs font-bold text-blue-500 shrink-0">{w.action}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Transition Banner ───────────────────────────── */
function TransitionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#111c2d] rounded-3xl mx-0 my-0 px-12 py-16 mb-0"
    >
      <div className="max-w-5xl">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">Problem 2 — Emerging from the data</p>
        <p className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent text-3xl font-bold leading-snug mb-6">
          Chat solved discovery. But evaluation was still broken.
        </p>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Investors could now find companies, but still struggled to answer the critical question:{' '}
          <span className="text-white font-medium italic">
            "Is this company worth my time and investment?"
          </span>
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { issue: 'Company profiles were inconsistent', detail: 'Different formats, missing fields, no standard structure' },
            { issue: 'Key insights buried across sections', detail: 'Users clicked through 4–5 tabs to form a basic view' },
            { issue: 'Comparison required heavy manual effort', detail: 'No synthesis — just raw data dumps' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <p className="text-white font-semibold text-sm mb-1">{item.issue}</p>
              <p className="text-white/40 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Old vs New Profile Comparison ──────────────── */
function MockProfileBefore() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-red-200 shadow-lg">
      {/* Tab bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-3 flex items-center gap-1 overflow-x-auto">
        {['Overview', 'Team', 'Investors', 'News', 'Financials', 'Patents', 'Similar'].map((tab, i) => (
          <div
            key={tab}
            className={`px-2.5 py-2.5 text-[10px] font-medium whitespace-nowrap border-b-2 shrink-0 ${
              i === 0 ? 'border-gray-500 text-gray-700' : 'border-transparent text-gray-400'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Content: wall of text */}
      <div className="p-5 bg-white">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded bg-gray-200" />
            <p className="text-sm font-bold text-gray-900">NeuralFlow Inc.</p>
          </div>
          <p className="text-[10px] text-gray-400 mb-4">Artificial Intelligence · San Francisco · Founded 2019</p>
          {/* Wall of unscannable text */}
          <div className="space-y-1.5 mb-4">
            {[100, 95, 100, 88, 100, 92, 78].map((w, i) => (
              <div key={i} className="h-2 bg-gray-200 rounded" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
        {/* Raw unlabelled data */}
        <div className="border-t border-gray-100 pt-3 grid grid-cols-2 gap-x-4 gap-y-2">
          {[
            ['Last Round', 'Series B'],
            ['Total Raised', '$45M'],
            ['Investors', '12 listed'],
            ['Employees', '120–200'],
            ['Founded', '2019'],
            ['HQ', 'San Francisco'],
          ].map(([label, val]) => (
            <div key={label}>
              <p className="text-[9px] text-gray-400">{label}</p>
              <p className="text-[10px] text-gray-700 font-medium">{val}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[9px] text-gray-300">Investment Potential — see Financials tab for more</p>
        </div>
      </div>
      {/* Problem callouts */}
      <div className="bg-red-50 border-t border-red-100 px-5 py-3 space-y-1.5">
        {[
          'No hierarchy — all data presented equally',
          'Key signals buried in unstructured text',
          'No AI synthesis or investment context',
          'Requires 5+ tab switches for a full view',
        ].map((issue, i) => (
          <div key={i} className="flex items-center gap-2">
            <XCircle className="w-3 h-3 text-red-400 shrink-0" />
            <p className="text-[10px] text-red-600">{issue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockProfileAfter() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-purple-200 shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a0f3c] to-[#0d0720] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/30 border border-purple-400/30 flex items-center justify-center">
            <span className="text-white text-xs font-black">NF</span>
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-tight">NeuralFlow Inc.</p>
            <p className="text-white/50 text-[10px]">AI Infrastructure · Series B</p>
          </div>
        </div>
        <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl px-3 py-1.5 text-center">
          <p className="text-emerald-300 text-xs font-black">92%</p>
          <p className="text-emerald-400/70 text-[9px]">AI Match</p>
        </div>
      </div>

      {/* AI Summary panel */}
      <div className="px-5 py-4 border-b border-gray-100 bg-purple-50/30">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-purple-600" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600">AI Summary</p>
          <span className="ml-auto text-[9px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">47 signals</span>
        </div>
        <p className="text-xs text-gray-700 leading-relaxed">
          NeuralFlow builds real-time ML inference infrastructure. Strong NRR (142%), expanding enterprise contracts, and capital-efficient growth signal clear product-market fit in a high-demand category.
        </p>
      </div>

      {/* Investment signals */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Investment Signals</p>
        <div className="space-y-2">
          {[
            { type: 'pos', text: '142% NRR — strong product retention' },
            { type: 'pos', text: 'Enterprise ACV growing 3x YoY' },
            { type: 'pos', text: 'Founding team: 2x ML infra, 1x enterprise SaaS' },
            { type: 'warn', text: 'Cloud provider competition entering segment' },
            { type: 'risk', text: 'Runway: 14 months — raise likely in Q2' },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`text-[10px] shrink-0 mt-0.5 ${s.type === 'pos' ? 'text-emerald-500' : s.type === 'warn' ? 'text-amber-500' : 'text-red-400'}`}>
                {s.type === 'pos' ? '✓' : s.type === 'warn' ? '△' : '✕'}
              </span>
              <p className="text-[10px] text-gray-700 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key metrics strip */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: 'ARR', val: '$12M' },
            { label: 'NRR', val: '142%' },
            { label: 'Stage', val: 'Series B' },
            { label: 'Raised', val: '$45M' },
          ].map((m) => (
            <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-center">
              <p className="text-[9px] text-gray-400 mb-0.5">{m.label}</p>
              <p className="text-xs font-bold text-gray-900">{m.val}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-3 py-2">
          <Shield className="w-3 h-3 text-purple-500 shrink-0" />
          <p className="text-[9px] text-purple-700">AI confidence: High · Based on verified data · <span className="underline cursor-pointer">View sources</span></p>
        </div>
      </div>

      {/* Improvement callouts */}
      <div className="bg-emerald-50 border-t border-emerald-100 px-5 py-3 space-y-1.5">
        {[
          'Clear hierarchy — scan in under 60 seconds',
          'AI summary surfaces key signals upfront',
          'Sourced outputs — usable in formal memos',
          'All context in one view — no tab switching',
        ].map((win, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
            <p className="text-[10px] text-emerald-700">{win}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Compare Companies Mockup ────────────────────── */
function MockCompareCompanies() {
  const companies = [
    { name: 'NeuralFlow', tag: 'Series B', arr: '$12M', nrr: '142%', risk: 'Low', fit: 92, fitColor: 'emerald', recommended: true },
    { name: 'DataSphere', tag: 'Series A', arr: '$4.2M', nrr: '118%', risk: 'Medium', fit: 74, fitColor: 'amber', recommended: false },
    { name: 'LogixAI', tag: 'Seed', arr: '$820K', nrr: '95%', risk: 'High', fit: 48, fitColor: 'red', recommended: false },
  ];
  const dims = ['Stage', 'ARR', 'NRR', 'Risk', 'AI Fit Score'];

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
      {/* Header bar */}
      <div className="bg-[#0f0a1e] px-5 py-3 flex items-center gap-3">
        <BarChart2 className="w-4 h-4 text-purple-400" />
        <span className="text-white text-xs font-semibold">Compare Companies</span>
        <span className="ml-auto text-[10px] text-white/40">3 selected</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 w-28">Metric</th>
              {companies.map((c) => (
                <th key={c.name} className="px-4 py-3 text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-gray-900">{c.name}</p>
                    {c.recommended && (
                      <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
                        Top Pick
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Stage */}
            <tr className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="px-4 py-2.5 text-[10px] text-gray-400 font-medium">Stage</td>
              {companies.map((c) => (
                <td key={c.name} className="px-4 py-2.5 text-xs text-gray-700">{c.tag}</td>
              ))}
            </tr>
            {/* ARR */}
            <tr className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="px-4 py-2.5 text-[10px] text-gray-400 font-medium">ARR</td>
              {companies.map((c) => (
                <td key={c.name} className="px-4 py-2.5 text-xs font-semibold text-gray-900">{c.arr}</td>
              ))}
            </tr>
            {/* NRR */}
            <tr className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="px-4 py-2.5 text-[10px] text-gray-400 font-medium">NRR</td>
              {companies.map((c) => (
                <td key={c.name} className="px-4 py-2.5">
                  <span className={`text-xs font-bold ${parseFloat(c.nrr) >= 130 ? 'text-emerald-600' : parseFloat(c.nrr) >= 110 ? 'text-amber-600' : 'text-gray-600'}`}>
                    {c.nrr}
                  </span>
                </td>
              ))}
            </tr>
            {/* Risk */}
            <tr className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="px-4 py-2.5 text-[10px] text-gray-400 font-medium">Risk</td>
              {companies.map((c) => (
                <td key={c.name} className="px-4 py-2.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    c.risk === 'Low' ? 'bg-emerald-50 text-emerald-700' :
                    c.risk === 'Medium' ? 'bg-amber-50 text-amber-700' :
                    'bg-red-50 text-red-600'
                  }`}>{c.risk}</span>
                </td>
              ))}
            </tr>
            {/* AI Fit */}
            <tr>
              <td className="px-4 py-3 text-[10px] text-gray-400 font-medium">
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-500" />
                  AI Fit
                </div>
              </td>
              {companies.map((c) => (
                <td key={c.name} className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5 max-w-[60px]">
                      <div
                        className={`h-1.5 rounded-full ${
                          c.fitColor === 'emerald' ? 'bg-emerald-500' :
                          c.fitColor === 'amber' ? 'bg-amber-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${c.fit}%` }}
                      />
                    </div>
                    <span className={`text-xs font-black ${
                      c.fitColor === 'emerald' ? 'text-emerald-600' :
                      c.fitColor === 'amber' ? 'text-amber-600' : 'text-red-500'
                    }`}>{c.fit}%</span>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI footnote */}
      <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
        <p className="text-[9px] text-gray-400">
          AI fit score reflects your query: <em>"B2B SaaS Series A, strong NRR, AI-native"</em> ·{' '}
          <span className="text-purple-600 cursor-pointer">See reasoning</span>
        </p>
      </div>
    </div>
  );
}

/* ─── AI Evaluation Summary Mockup ───────────────── */
function MockAIEvaluationSummary() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-purple-200 shadow-xl">
      <div className="bg-gradient-to-r from-[#1a0f3c] to-[#0d0720] px-5 py-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-purple-400" />
        <span className="text-white text-xs font-semibold">AI-Generated Evaluation Brief</span>
        <span className="ml-auto text-[9px] text-white/40 bg-white/10 px-2 py-0.5 rounded-full">NeuralFlow Inc.</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Summary */}
        <div className="bg-purple-50/60 border border-purple-100 rounded-xl px-4 py-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-purple-500 mb-2">Business Overview</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            Real-time ML inference platform for enterprise teams. Reduces model deployment time from weeks to hours.
            Capital-efficient with strong NRR indicating deep product stickiness.
          </p>
        </div>

        {/* Strengths + Risks */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Strengths</p>
            <div className="space-y-1.5">
              {['142% NRR', 'Repeat founder', 'Patent-protected core'].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <p className="text-[10px] text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-red-500 mb-2">Risks</p>
            <div className="space-y-1.5">
              {['Cloud entrants', 'Key person risk', '14mo runway'].map((r, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <XCircle className="w-3 h-3 text-red-400 shrink-0" />
                  <p className="text-[10px] text-gray-700">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidence */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[9px] text-gray-500">AI Confidence</p>
            <p className="text-[9px] font-bold text-emerald-600">High</p>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
            <div className="h-1.5 rounded-full bg-emerald-500 w-[87%]" />
          </div>
          <p className="text-[9px] text-gray-400">
            Based on 47 verified data points ·{' '}
            <span className="text-purple-600 cursor-pointer">View sources →</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Loading / Empty States Mockup ──────────────── */
function MockLoadingStates() {
  return (
    <div className="grid md:grid-cols-3 gap-4">

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="bg-[#0f0a1e] px-4 py-2.5 flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-white/70 text-[10px] font-medium">New conversation</span>
        </div>
        <div className="p-4 text-center py-6">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mx-auto mb-3">
            <Brain className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-xs font-semibold text-gray-800 mb-1">Ask anything about a company</p>
          <p className="text-[10px] text-gray-400 mb-4">Try a natural language query to start</p>
          <div className="space-y-2 text-left">
            {[
              'Series A fintech with strong NRR',
              'B2B SaaS, logistics, pre-Series B',
            ].map((s, i) => (
              <button key={i} className="w-full text-left bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-[10px] text-gray-600 flex items-center gap-2 hover:bg-purple-50 transition-colors">
                <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
            <span className="text-[10px] text-gray-300 flex-1">Ask about any company…</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
          </div>
        </div>
      </div>

      {/* Loading state */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="bg-[#0f0a1e] px-4 py-2.5 flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-white/70 text-[10px] font-medium">Analyzing…</span>
        </div>
        <div className="p-4 space-y-3">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-purple-600 text-white text-[10px] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              Show me Series A fintech with strong NRR
            </div>
          </div>
          {/* AI thinking */}
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-purple-600" />
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm px-3 py-2.5">
              <p className="text-[10px] text-gray-500 mb-2">Scanning 50,000+ companies…</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="h-1 bg-purple-500 rounded-full w-[60%] animate-pulse" />
              </div>
            </div>
          </div>
          {/* Skeleton results */}
          <div className="space-y-2 mt-2">
            {[80, 65, 50].map((w, i) => (
              <div key={i} className="h-7 bg-gray-100 rounded-xl animate-pulse" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* No results / refine state */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="bg-[#0f0a1e] px-4 py-2.5 flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-white/70 text-[10px] font-medium">Refine query</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-end">
            <div className="bg-purple-600 text-white text-[10px] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              Pre-IPO nuclear energy Series D+
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-purple-600" />
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm px-3 py-2.5">
              <p className="text-[10px] text-gray-700 leading-relaxed mb-2">
                No exact matches — but I found{' '}
                <span className="font-bold text-purple-700">4 adjacent companies</span>. Want me to:
              </p>
              <div className="space-y-1.5">
                {[
                  'Broaden to Series C+ energy tech?',
                  'Include fusion energy companies?',
                  'Show climate infra with late-stage funding?',
                ].map((s, i) => (
                  <button key={i} className="w-full text-left text-[10px] text-purple-600 hover:text-purple-800 flex items-center gap-1 transition-colors">
                    <ChevronRight className="w-2.5 h-2.5 shrink-0" />
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Solution Part 2 ─────────────────────────────── */
function Part2AIInsights() {
  const surfaced = [
    'Clear business summary',
    'Industry context',
    'SWOT-style signals',
    'Investment relevance',
  ];
  const principles = [
    { tag: 'Scan-first, explainable', desc: 'Users can quickly skim before diving deep.' },
    { tag: 'Structured, not conversational', desc: 'Organized panels, not open-ended chat.' },
    { tag: 'Summary first, details later', desc: 'Progressive disclosure reduces overwhelm.' },
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="pt-24"
    >
      {/* Part 2 header */}
      <div className="mb-16">
        <SectionLabel>05 — Design Solutions</SectionLabel>
        <h2 className="text-5xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Solution Part 2
          </span>
          <br />
          <span className="text-gray-900">AI Insights Engine</span>
        </h2>
        <div className="h-px bg-gradient-to-r from-emerald-200 via-purple-200 to-transparent mb-12" />
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We introduced AI Insights directly on company profiles to support fast, confident evaluation.
        </p>
      </div>

      {/* Existing: content + screenshot */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800">What AI Insights Surfaced</h4>
            </div>
            <ul className="space-y-3">
              {surfaced.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Design Principles</p>
            <div className="space-y-3">
              {principles.map((p, i) => (
                <div key={i} className="bg-purple-50 border border-purple-100 rounded-xl px-5 py-4">
                  <p className="font-semibold text-purple-800 text-sm mb-1">{p.tag}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
            <p className="font-bold text-purple-700 mb-2">
              This reduced the need for manual synthesis while preserving access to deeper data.
            </p>
            <p className="text-gray-600 text-sm">
              Better context → better insights → higher trust → better decisions
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <img
            src={imgImage2}
            alt="AI Insights panel"
            className="w-full rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
      </div>

      {/* ── OLD vs NEW COMPARISON ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="mb-10">
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Before vs After — Company Profile
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            What the evaluation experience transformed into
          </h3>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Five key design improvements: visual hierarchy, readability, AI explainability, trust signals, and decision support — all addressed in a single redesigned profile view.
          </p>
        </div>

        {/* Improvement dimensions */}
        <div className="grid sm:grid-cols-5 gap-3 mb-10">
          {[
            { icon: TrendingUp, label: 'Hierarchy', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
            { icon: BarChart2, label: 'Readability', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
            { icon: Sparkles, label: 'AI Explainability', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
            { icon: Shield, label: 'Trust', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
            { icon: Brain, label: 'Decision Support', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
          ].map((dim, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`${dim.bg} border ${dim.border} rounded-2xl p-4 text-center`}
            >
              <div className={`w-8 h-8 rounded-xl ${dim.bg} border ${dim.border} flex items-center justify-center mx-auto mb-2`}>
                <dim.icon className={`w-4 h-4 ${dim.color}`} strokeWidth={2} />
              </div>
              <p className={`text-xs font-bold ${dim.color}`}>{dim.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Side-by-side profile mockups */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-red-200">
                Before
              </span>
              <p className="text-sm text-gray-500">Fragmented · No hierarchy · No AI</p>
            </div>
            <MockProfileBefore />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-emerald-200">
                After
              </span>
              <p className="text-sm text-gray-500">Structured · AI-powered · Trusted</p>
            </div>
            <MockProfileAfter />
          </motion.div>
        </div>
      </motion.div>

      {/* ── COMPARE COMPANIES ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="mb-8">
          <p className="text-purple-600 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Premium Interaction — Compare Companies
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Side-by-Side AI Comparison</h3>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Investors can select companies from their results and compare them across standardised dimensions — including an AI-generated fit score tied to their original thesis query.
          </p>
        </div>
        <MockCompareCompanies />
      </motion.div>

      {/* ── AI EVALUATION SUMMARY + LOADING/EMPTY STATES ── */}
      

    </motion.div>
  );
}

/* ─── Main export ─────────────────────────────────── */
export function DesignSolutions() {
  return (
    <>
      {/* Part 1 */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <Part1Header />
          <EntryPoints />
          <FTUEDesign />
          <ChatInterfaceBehavior />
          <ChatHistoryManagement />
          <ErrorsAndLoadingStates />
        </div>
      </section>

      {/* Dark transition banner */}
      <div className="max-w-7xl mx-auto px-8 pb-0">
        <TransitionBanner />
      </div>

      {/* Part 2 */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <Part2AIInsights />
        </div>
      </section>
    </>
  );
}
