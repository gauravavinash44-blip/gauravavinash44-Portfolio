import { lazy } from 'react';
import { Hero } from './Hero';
import { ProjectOverview } from './ProjectOverview';
import { ProblemSection } from './ProblemSection';
import { Navigation } from './Navigation';
import { DeferredSection } from './DeferredSection';

const UserPersonas = lazy(() =>
  import('./UserPersonas').then((m) => ({ default: m.UserPersonas }))
);
const InvestorResearch = lazy(() =>
  import('./InvestorResearch').then((m) => ({ default: m.InvestorResearch }))
);
const DiscoveryBlindness = lazy(() =>
  import('./DiscoveryBlindness').then((m) => ({ default: m.DiscoveryBlindness }))
);
const MarketLandscape = lazy(() =>
  import('./MarketLandscape').then((m) => ({ default: m.MarketLandscape }))
);
const InvestmentFunnel = lazy(() =>
  import('./InvestmentFunnel').then((m) => ({ default: m.InvestmentFunnel }))
);
const DecisionFraming = lazy(() =>
  import('./DecisionFraming').then((m) => ({ default: m.DecisionFraming }))
);
const ExplorationsTradeoffs = lazy(() =>
  import('./ExplorationsTradeoffs').then((m) => ({ default: m.ExplorationsTradeoffs }))
);
const ConstraintsPrioritization = lazy(() =>
  import('./ConstraintsPrioritization').then((m) => ({ default: m.ConstraintsPrioritization }))
);
const SolutionSection = lazy(() =>
  import('./SolutionSection').then((m) => ({ default: m.SolutionSection }))
);
const DesignSolutions = lazy(() =>
  import('./DesignSolutions').then((m) => ({ default: m.DesignSolutions }))
);
const UsabilityTesting = lazy(() =>
  import('./UsabilityTesting').then((m) => ({ default: m.UsabilityTesting }))
);
const BeforeAfterComparison = lazy(() =>
  import('./BeforeAfterComparison').then((m) => ({ default: m.BeforeAfterComparison }))
);
const CollaborationLeadership = lazy(() =>
  import('./CollaborationLeadership').then((m) => ({ default: m.CollaborationLeadership }))
);
const ImpactMetrics = lazy(() =>
  import('./ImpactMetrics').then((m) => ({ default: m.ImpactMetrics }))
);
const Reflection = lazy(() =>
  import('./Reflection').then((m) => ({ default: m.Reflection }))
);

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Hero />
      <ProjectOverview />
      <ProblemSection />

      <DeferredSection>
        <UserPersonas />
      </DeferredSection>
      <DeferredSection>
        <InvestorResearch />
      </DeferredSection>
      <DeferredSection minHeight="50vh">
        <DiscoveryBlindness />
      </DeferredSection>
      <DeferredSection>
        <MarketLandscape />
      </DeferredSection>
      <DeferredSection>
        <InvestmentFunnel />
      </DeferredSection>
      <DeferredSection>
        <DecisionFraming />
      </DeferredSection>
      <DeferredSection>
        <ExplorationsTradeoffs />
      </DeferredSection>
      <DeferredSection>
        <ConstraintsPrioritization />
      </DeferredSection>
      <DeferredSection>
        <SolutionSection />
      </DeferredSection>
      <DeferredSection minHeight="60vh">
        <DesignSolutions />
      </DeferredSection>
      <DeferredSection>
        <UsabilityTesting />
      </DeferredSection>
      <DeferredSection>
        <BeforeAfterComparison />
      </DeferredSection>
      <DeferredSection>
        <CollaborationLeadership />
      </DeferredSection>
      <DeferredSection>
        <ImpactMetrics />
      </DeferredSection>
      <DeferredSection>
        <Reflection />
      </DeferredSection>
    </div>
  );
}
