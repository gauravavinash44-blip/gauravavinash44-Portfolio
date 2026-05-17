import { Hero } from './Hero';
import { ProjectOverview } from './ProjectOverview';
import { UserPersonas } from './UserPersonas';
import { ProblemSection } from './ProblemSection';
import { InvestorResearch } from './InvestorResearch';
import { DiscoveryBlindness } from './DiscoveryBlindness';
import { MarketLandscape } from './MarketLandscape';
import { InvestmentFunnel } from './InvestmentFunnel';
import { DecisionFraming } from './DecisionFraming';
import { ExplorationsTradeoffs } from './ExplorationsTradeoffs';
import { ConstraintsPrioritization } from './ConstraintsPrioritization';
import { SolutionSection } from './SolutionSection';
import { DesignSolutions } from './DesignSolutions';
import { UsabilityTesting } from './UsabilityTesting';
import { BeforeAfterComparison } from './BeforeAfterComparison';
import { CollaborationLeadership } from './CollaborationLeadership';
import { ImpactMetrics } from './ImpactMetrics';
import { Reflection } from './Reflection';
import { Navigation } from './Navigation';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 01 — Intro */}
      <Hero />
      <ProjectOverview />

      {/* 01.5 — Users */}
      <UserPersonas />

      {/* 02 — Problem Discovery */}
      <ProblemSection />

      {/* 02.5 — Investor Research & Feedback */}
      <InvestorResearch />

      <DiscoveryBlindness />

      {/* 03 — Competitive Landscape */}
      <MarketLandscape />

      {/* 04 — Strategic Insight: Investment Funnel */}
      <InvestmentFunnel />

      {/* 05 — Decision Framing: Why AI Chat? */}
      <DecisionFraming />

      {/* 05.1 — Explorations & Trade-offs */}
      <ExplorationsTradeoffs />

      {/* 05.2 — Constraints & Prioritization */}
      <ConstraintsPrioritization />

      {/* 06 — Solution Overview */}
      <SolutionSection />

      {/* 06 Detail — Solution screens + Problem 2 + AI Insights Engine */}
      <DesignSolutions />

      {/* 07 — Usability Testing & Iteration */}
      <UsabilityTesting />

      {/* 08 — Before vs After */}
      <BeforeAfterComparison />

      {/* 08 — Collaboration & Leadership */}
      <CollaborationLeadership />

      {/* 09 — Impact & Results */}
      <ImpactMetrics />

      {/* 10 — Reflection */}
      <Reflection />
    </div>
  );
}