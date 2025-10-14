import { Hero } from "@/components/sections/hero";
import { ValuePropositions } from "@/components/sections/value-propositions";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Technology } from "@/components/sections/technology";
import { ChemicalSubscription } from "@/components/sections/chemical-subscription";
import { AppReporting } from "@/components/sections/app-reporting";
import { TeamEducation } from "@/components/sections/team-education";
import { CustomerSegments } from "@/components/sections/customer-segments";
import { ServiceAreas } from "@/components/sections/service-areas";
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
      <ValuePropositions />
      <Services />
      <HowItWorks />
      <Technology />
      <ChemicalSubscription />
      <AppReporting />
      <TeamEducation />
      <CustomerSegments />
      <ServiceAreas />
      <Pricing />
      <KeyDifferentiators />
      <ProblemSolution />
      <Contact />
      <Footer />
    </div>
  );
}
