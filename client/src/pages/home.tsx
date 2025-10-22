import { Helmet } from "react-helmet-async";
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
import { ChemicalSafety } from "@/components/sections/chemical-safety";
import { SmallHomes } from "@/components/sections/small-homes";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pool Service Bali",
    "description": "Professional pool cleaning and maintenance services across Bali",
    "url": "https://poolservicebali.com",
    "telephone": "+628113702343",
    "priceRange": "Rp 325,000 - Rp 550,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bali",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.6705",
      "longitude": "115.2126"
    },
    "areaServed": [
      { "@type": "City", "name": "Seminyak" },
      { "@type": "City", "name": "Canggu" },
      { "@type": "City", "name": "Ubud" },
      { "@type": "City", "name": "Sanur" },
      { "@type": "City", "name": "Kuta" },
      { "@type": "City", "name": "Denpasar" },
      { "@type": "City", "name": "Jimbaran" },
      { "@type": "City", "name": "Nusa Dua" },
      { "@type": "City", "name": "Legian" }
    ],
    "serviceType": [
      "Pool Cleaning",
      "Pool Maintenance",
      "Pool Repair",
      "Water Chemistry Testing",
      "Equipment Maintenance",
      "Chemical Treatment"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "200"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": "Cash, Bank Transfer, QRIS, GoPay, OVO, Dana"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Bali | Professional Service in Seminyak, Canggu, Ubud</title>
        <meta 
          name="description" 
          content="Expert pool cleaning & maintenance across Bali. Serving Seminyak, Canggu, Ubud, Sanur, Kuta, Denpasar, Jimbaran, Nusa Dua & Legian. Same-day service, EU-certified chemicals. Call +628113702343" 
        />
        <meta 
          name="keywords" 
          content="pool cleaning bali, pool maintenance bali, pool service seminyak, pool cleaning canggu, pool maintenance ubud, professional pool cleaner bali, villa pool service bali" 
        />
        <link rel="canonical" href="https://poolservicebali.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      <Hero />
      <BrandPartnerships />
      <PoolChallenge />
      <ValuePropositions />
      <Services />
      <CustomerBenefits />
      <SmallHomes />
      <CustomerJourney />
      <CaseStudies />
      <ServiceComparison />
      <HowItWorks />
      <Technology />
      <ChemicalSubscription />
      <ChemicalSafety />
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
