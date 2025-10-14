import { Hero } from "@/components/sections/hero";
import { BrandPartnerships } from "@/components/sections/brand-partnerships";
import { PoolChallenge } from "@/components/sections/pool-challenge";
import { ValuePropositions } from "@/components/sections/value-propositions";
import { Services } from "@/components/sections/services";
import { CustomerBenefits } from "@/components/sections/customer-benefits";
import { CustomerJourney } from "@/components/sections/customer-journey";
import { CaseStudies } from "@/components/sections/case-studies";
import { ServiceComparison } from "@/components/sections/service-comparison";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Technology } from "@/components/sections/technology";
import { ChemicalSubscription } from "@/components/sections/chemical-subscription";
import { AppReporting } from "@/components/sections/app-reporting";
import { TeamEducation } from "@/components/sections/team-education";
import { Testimonials } from "@/components/sections/testimonials";
import { CustomerSegments } from "@/components/sections/customer-segments";
import { ServiceAreas } from "@/components/sections/service-areas";
import { ServiceLocations } from "@/components/sections/service-locations";
import { Pricing } from "@/components/sections/pricing";
import { KeyDifferentiators } from "@/components/sections/key-differentiators";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BrandPartnerships />
      <PoolChallenge />
      <ValuePropositions />
      <Services />
      <CustomerBenefits />
      <CustomerJourney />
      <CaseStudies />
      <ServiceComparison />
      <HowItWorks />
      <Technology />
      <ChemicalSubscription />
      <AppReporting />
      <TeamEducation />
      <Testimonials />
      <CustomerSegments />
      <ServiceAreas />
      <ServiceLocations />
      <Pricing />
      <KeyDifferentiators />
      <ProblemSolution />
      <Contact />
      <Footer />
    </div>
  );
}
