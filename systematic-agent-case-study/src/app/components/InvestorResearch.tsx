'use client';

import { motion } from 'motion/react';
import { Quote, Users, MessageSquare, Lightbulb, AlertTriangle, TrendingDown } from 'lucide-react';

const quotes = [
  {
    text: "I know exactly the type of company I'm looking for — but I can't describe it in keywords. The filter system expects me to already have the answer.",
    role: 'General Partner',
    firm: 'Early-stage VC Fund',
    avatar: 'GP',
    color: 'from-purple-500 to-indigo-600',
    tag: 'Discovery Friction',
    tagStyle: 'bg-purple-100 text-purple-700',
  },
  {
    text: "By the time I've read through a company profile, cross-checked their funding history, and looked up their competitors — the round is gone. Speed is everything.",
    role: 'Investment Analyst',
    firm: 'Multi-Stage VC',
    avatar: 'IA',
    color: 'from-blue-500 to-cyan-500',
    tag: 'Time Pressure',
    tagStyle: 'bg-blue-100 text-blue-700',
  },
  {
    text: "I don't trust AI summaries I can't verify. If the system can't show me where that 'strong market position' claim comes from, I'm not putting it in a memo.",
    role: 'Principal',
    firm: 'Growth Equity Fund',
    avatar: 'PR',
    color: 'from-emerald-500 to-teal-600',
    tag: 'AI Trust',
    tagStyle: 'bg-emerald-100 text-emerald-700',
  },
  {
    text: "We evaluated Systematic's search twice and churned both times. Not because the data was bad — but because finding what we needed felt like work on top of work.",
    role: 'Head of Research',
    firm: 'Institutional LP',
    avatar: 'HR',
    color: 'from-rose-500 to-orange-500',
    tag: 'Session Abandonment',
    tagStyle: 'bg-rose-100 text-rose-700',
  },
];

const synthesisInsights = [
  {
    number: '01',
    title: 'Language mismatch was the root cause of discovery failure',
    detail: 'Investors think in investment theses — "B2B SaaS, post-PMF, Series A ready in logistics." The platform thought in database columns. Neither translated to the other.',
    icon: MessageSquare,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    number: '02',
    title: 'Evaluation time was the biggest deal-flow bottleneck',
    detail: 'Research showed that 68% of session time was spent on evaluation, not discovery. Improving search alone would only solve 32% of the problem.',
    icon: TrendingDown,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    number: '03',
    title: 'AI explainability was a prerequisite for professional trust',
    detail: 'Unlike consumer products, investment decisions require documented reasoning. Users needed to know why the AI made a claim — not just what it claimed.',
    icon: AlertTriangle,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    number: '04',
    title: 'Conversational workflows were already the mental model',
    detail: '6 of 8 investors described their research process using chat-like language: "I\'d ask a colleague..." The interface just hadn\'t caught up with how they already thought.',
    icon: Lightbulb,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
];

const researchStats = [
  { value: '14', label: 'User interviews conducted', sub: 'VC, PE, and analyst profiles' },
  { value: '6', label: 'Session recordings analyzed', sub: 'Screen + audio, think-aloud protocol' },
  { value: '3', label: 'Weeks of field research', sub: 'Discovery, synthesis, and validation' },
  { value: '400+', label: 'Survey responses', sub: 'Quantitative validation pass' },
];

export function InvestorResearch() {
  return (
    null
  );
}
