import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Building2,
  Ruler,
  Wrench,
  Shield,
  Camera,
  Droplets,
  Sun,
  MapPin,
  Phone,
  Clock,
  Award,
  Hammer,
  Layers,
  Zap
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PoolConstructionBali() {
  const poolTypes = [
    "Premium villa swimming pools",
    "Airbnb & rental property pools",
    "Luxury resort and hotel pools",
    "Plunge and compact pools",
    "Oversized family pools",
    "Infinity pools facing rice fields or ocean views",
    "Saltwater pools",
    "Overflow and skimmer-type pools",
    "High-strength concrete pools",
    "Fully tiled pools (stone, ceramic, mosaic, Sukabumi, etc.)"
  ];

  const benefits = [
    { icon: Award, text: "10+ years of experience in Bali" },
    { icon: Ruler, text: "Full structural engineering analysis" },
    { icon: Layers, text: "Soil test included (important for Canggu, Ubud, Sanur)" },
    { icon: Shield, text: "Thick reinforced steel for long-term strength" },
    { icon: Droplets, text: "Top-tier waterproofing layers" },
    { icon: Wrench, text: "Crack-prevention system" },
    { icon: Zap, text: "Premium pump and filtration setup" },
    { icon: Building2, text: "High-quality pipes and fittings" },
    { icon: Sun, text: "Professional electrical installation" },
    { icon: Camera, text: "WhatsApp updates throughout the project" }
  ];

  const constructionSteps = [
    { num: "1", title: "On-site visit, measurements & land evaluation" },
    { num: "2", title: "3D pool design & engineering drawings" },
    { num: "3", title: "Excavation and preparation" },
    { num: "4", title: "Steel installation and structural reinforcement" },
    { num: "5", title: "Concrete pouring using high-grade mix" },
    { num: "6", title: "Plumbing installation (pump, skimmer, filter, lights)" },
    { num: "7", title: "Waterproofing system application" },
    { num: "8", title: "Tile installation with premium materials" },
    { num: "9", title: "Water filling, testing & chemical balancing" },
    { num: "10", title: "Final inspection and handover" }
  ];

  const pricingTable = [
    { type: "Standard concrete pool", size: "3 x 7 m", price: "IDR 140 – 250 million" },
    { type: "Infinity pool", size: "3 x 10 m", price: "IDR 220 – 350 million" },
    { type: "Plunge pool", size: "2 x 3 m", price: "IDR 70 – 120 million" },
    { type: "Premium villa pool", size: "Custom", price: "IDR 180 million+" }
  ];

  const inclusions = [
    "Excavation",
    "Structural concrete",
    "Steel reinforcement",
    "Waterproofing",
    "Tiling",
    "Pump & filter system",
    "Plumbing & electrical",
    "Skimmer/overflow setup",
    "Underwater lighting",
    "Safety steps",
    "Commissioning & first chemical setup",
    "30-day support after handover"
  ];

  const locations = [
    "Canggu", "Seminyak", "Uluwatu", "Kuta", "Jimbaran", "Pererenan",
    "Berawa", "Ubud", "Sanur", "Denpasar", "Kerobokan", "Legian", "Seseh", "Amed"
  ];

  return (
    <>
      <Helmet>
        <title>New Swimming Pool Construction Bali | Villa & Resort Pool Builders</title>
        <meta 
          name="description" 
          content="Build a beautiful, long-lasting swimming pool in Bali. Expert pool builders for villas, resorts & private homes. Infinity pools, concrete pools, saltwater pools. Free quotes. 10+ years experience." 
        />
        <meta name="keywords" content="pool builder bali, swimming pool construction bali, bali pool contractor, villa pool builder bali, cost to build pool in bali, infinity pool construction bali, concrete pool builder bali, pool installation bali" />
        <meta property="og:title" content="New Swimming Pool Construction Bali | Expert Pool Builders" />
        <meta property="og:description" content="Build your dream pool in Bali. Villa pools, infinity pools, resort pools. 10+ years experience, premium materials, full project management." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://poolservicebali.com/pool-construction-bali" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-construction-hero">
                <Hammer className="w-3 h-3 mr-1" />
                Pool Construction Experts
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-construction-hero">
                New Swimming Pool Construction in Bali
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build a beautiful, long-lasting swimming pool designed specifically for Bali's climate, soil, and lifestyle. Our construction team specializes in villa, resort, and luxury residential pools that combine aesthetics, engineering, and smart water systems. Whether you want a sleek modern pool, a family pool for your private home, or a resort-standard design, we manage the entire project from the first sketch to the final handover.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild data-testid="button-whatsapp-hero">
                  <a 
                    href="https://wa.me/6282237565997?text=Hi! I'm interested in building a new swimming pool in Bali."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Get Free Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-call-hero">
                  <a href="tel:+6282237565997">
                    <Phone className="h-4 w-4 mr-2" />
                    +62 822-3756-5997
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pool Types Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-pool-types">
              Expert Pool Builders for Villas, Resorts & Private Homes
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl">
              Every property in Bali is different. From the rocky cliffs of Uluwatu to the soft soil of Canggu, we adapt your pool design to match local ground conditions, sun exposure, and the flow of your outdoor space.
            </p>

            <h3 className="text-2xl font-bold mb-8">We Build All Types of Swimming Pools</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {poolTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg" data-testid={`pool-type-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Pools Last Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-durability">
              Why Our Pools Last Longer in Bali's Climate
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl">
              Bali is beautiful, but it's hard on pools. High humidity, salt in the air, tropical rain, and rising temperatures destroy weak construction within months. Our builds are designed for durability.
            </p>

            <h3 className="text-2xl font-bold mb-8">Benefits of Building With Us</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`benefit-${index}`}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium pt-3">{benefit.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Process Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-process">
              Our Complete Construction Process
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl">
              We manage the entire build so you don't need to coordinate multiple contractors.
            </p>

            <h3 className="text-2xl font-bold mb-8">Step-by-Step</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {constructionSteps.map((step) => (
                <div key={step.num} className="flex gap-4 items-start" data-testid={`step-${step.num}`}>
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <p className="font-medium pt-2">{step.title}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mt-8 text-lg">
              Every step includes photo and video updates for transparency.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-pricing">
              Bali Pool Construction Prices (Realistic 2025 Rates)
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full max-w-4xl border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 font-bold">Pool Type</th>
                    <th className="text-left p-4 font-bold">Typical Size</th>
                    <th className="text-left p-4 font-bold">Estimated Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((row, index) => (
                    <tr key={index} className="border-b" data-testid={`pricing-row-${index}`}>
                      <td className="p-4">{row.type}</td>
                      <td className="p-4">{row.size}</td>
                      <td className="p-4 font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground italic">
              *Pricing depends on depth, design, tile material, and filtration system.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-12" data-testid="heading-inclusions">
              What's Included in a New Pool Build
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg" data-testid={`inclusion-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-locations">
              Locations We Build Pools
            </h2>
            <p className="text-xl text-muted-foreground mb-8">We cover the entire island:</p>
            
            <div className="flex flex-wrap gap-3 max-w-4xl">
              {locations.map((location, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2" data-testid={`location-${index}`}>
                  <MapPin className="h-3 w-3 mr-1" />
                  {location}
                </Badge>
              ))}
              <Badge variant="secondary" className="text-sm px-4 py-2">
                and all surrounding areas
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
              Get a Free Pool Construction Quote
            </h2>
            <p className="text-xl mb-8 opacity-90">
              WhatsApp us your location and the pool size you want. We reply fast, with real prices — no surprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild data-testid="button-whatsapp-cta">
                <a 
                  href="https://wa.me/6282237565997?text=Hi! I'd like a free quote for swimming pool construction in Bali."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild data-testid="button-call-cta">
                <a href="tel:+6282237565997">
                  <Phone className="h-4 w-4 mr-2" />
                  +62 822-3756-5997
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
