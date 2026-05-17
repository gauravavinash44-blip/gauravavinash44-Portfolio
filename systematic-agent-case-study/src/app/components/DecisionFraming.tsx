'use client';

import { motion } from 'motion/react';
import { X, Check, AlertCircle, MessageSquare, Filter, Sparkles, ChevronRight } from 'lucide-react';

const alternatives = [
  {
    option: 'A',
    title: 'Better Filters',
    description: 'Improve existing filter UX — smarter defaults, grouped parameters, contextual help.',
    icon: Filter,
    pros: ['Familiar interface pattern', 'Low learning curve', 'Fast to execute'],
    cons: ['Still requires upfront knowledge', 'Doesn\'t handle ambiguity', 'Doesn\'t reduce cognitive load — just reorganizes it'],
    verdict: 'rejected',
    verdictLabel: 'Rejected',
    verdictReason: 'Filters are a precision tool. Our users needed an exploration tool.',
    verdictStyle: 'bg-red-50 border-red-200 text-red-700',
    verdictIcon: X,
  },
  {
    option: 'B',
    title: 'ML Recommendations',
    description: 'Surface companies based on historical behavior, peer actions, and profile similarity.',
    icon: Sparkles,
    pros: ['Reduces decision fatigue', 'Improves over time', 'Familiar from consumer apps'],
    cons: ['Black-box — users don\'t understand why', 'Cold start problem for new investors', 'Doesn\'t support thesis-based exploration'],
    verdict: 'partial',
    verdictLabel: 'Considered',
    verdictReason: 'Good for retention, not for discovery. Saved for a later phase.',
    verdictStyle: 'bg-amber-50 border-amber-200 text-amber-700',
    verdictIcon: AlertCircle,
  },
  {
    option: 'C',
    title: 'Conversational AI',
    description: 'Natural language interface that interprets investor intent and maps it to structured company data.',
    icon: MessageSquare,
    pros: ['Handles ambiguous, exploratory queries', 'Mirrors how investors actually think', 'Graceful fallback when intent is unclear'],
    cons: ['FTUE complexity — first run is critical', 'Requires strong NL-to-data pipeline', 'Adoption risk with non-tech-savvy users'],
    verdict: 'chosen',
    verdictLabel: 'Chosen',
    verdictReason: 'Best fit for the problem. Investors explore before they decide.',
    verdictStyle: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    verdictIcon: Check,
  },
];

const tradeoffs = [
  {
    label: 'FTUE Complexity',
    detail: 'First-time users needed onboarding — we designed structured entry prompts to reduce the blank-slate problem.',
    resolved: true,
  },
  {
    label: 'ML Pipeline Dependency',
    detail: 'We worked closely with engineering to scope the MVP — Phase 1 used rule-based NL parsing before full ML.',
    resolved: true,
  },
  {
    label: 'Adoption Risk',
    detail: 'Chat adoption is still maturing in B2B tools. We kept the traditional search as fallback to reduce drop-off.',
    resolved: true,
  },
];

export function DecisionFraming() {
  return (
    null
  );
}
