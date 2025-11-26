import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Thermometer,
  Snowflake,
  Zap,
  Shield,
  Droplets,
  Sun,
  MapPin,
  Phone,
  Heart,
  Building2,
  Gauge,
  Timer,
  Battery
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ColdPlungeBali() {
  const plungeTypes = [
    "Stainless-steel cold plunge tubs",
    "Concrete cold plunge pools",
    "Tiled cold plunge wells",
    "Indoor & outdoor cold plunge units",
    "Ice bath tubs",
    "Recovery tubs for athletes",
    "Spa & gym cold plunge systems"
  ];

  const inclusions = [
    { icon: Thermometer, text: "Commercial-grade cooling (3–12°C)" },
    { icon: Gauge, text: "Digital temperature control" },
    { icon: Battery, text: "Strong insulation for energy efficiency" },
    { icon: Droplets, text: "Durable waterproof interior" },
    { icon: Shield, text: "Non-slip stairs or built-in seating" },
    { icon: Zap, text: "Filtration & circulation system" },
    { icon: Sun, text: "Electrical installation and safety setup" },
    { icon: Heart, text: "Optional matching hot tub setup" },
    { icon: Timer, text: "Optional maintenance plan" }
  ];

  const climateFeatures = [
    "High humidity",
    "Continuous use",
    "Fast cooling",
    "Lower electricity bills",
    "Stable temperature",
    "Outdoor exposure"
  ];

  const pricingTable = [
    { type: "Portable stainless tub", use: "Homes & small villas", price: "IDR 14 – 25 million" },
    { type: "Concrete/tiled plunge pool", use: "2–4 person capacity", price: "IDR 40 – 85 million" },
    { type: "Commercial cold plunge unit", use: "Gyms & spas", price: "IDR 65 million+" }
  ];

  const locations = [
    "Canggu", "Ubud", "Seminyak", "Kuta", "Uluwatu", "Jimbaran",
    "Sanur", "Denpasar", "Pererenan", "Berawa", "Kerobokan"
  ];

  return (
    <>
      <Helmet>
        <title>Cold Plunge Installation Bali | Ice Bath & Cold Therapy Systems</title>
        <meta 
          name="description" 
          content="Cold plunge installation in Bali. Ice bath tubs, cold therapy pools for villas, gyms & spas. Commercial-grade cooling systems designed for tropical climate. Get a quote today." 
        />
        <meta name="keywords" content="cold plunge bali, ice bath installation bali, cold therapy bali, bali cold plunge prices, gym cold plunge bali, ice bath tub bali, cold plunge builder bali, cold plunge for villa bali, wellness cold plunge bali" />
        <meta property="og:title" content="Cold Plunge Installation Bali | Ice Bath & Wellness Systems" />
        <meta property="og:description" content="Professional cold plunge installation in Bali. Stainless steel tubs, concrete plunge pools, commercial systems. Designed for Bali's tropical climate." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://poolservicebali.com/cold-plunge-bali" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" data-testid="badge-plunge-hero">
                <Snowflake className="w-3 h-3 mr-1" />
                Cold Plunge Experts
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-plunge-hero">
                Cold Plunge Installation in Bali
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Cold plunge pools are one of the fastest-growing wellness features in Bali. From private villas to fitness centers and yoga studios, more people are using cold therapy for recovery, energy, and relaxation. We design, build, and install cold plunge systems that stay cold even in Bali's tropical heat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-cyan-600 hover:bg-cyan-700" asChild data-testid="button-whatsapp-hero">
                  <a 
                    href="https://wa.me/6282237565997?text=Hi! I'm interested in cold plunge installation in Bali."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Get Quote
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

        {/* Plunge Types Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-plunge-types">
              High-Quality Cold Plunge Systems for Homes and Businesses
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl">
              Cold plunges in Bali require powerful cooling, strong insulation, and proper waterproofing. We install systems built for long-term performance, using premium materials and commercial-grade chilling units.
            </p>

            <h3 className="text-2xl font-bold mb-8">We Install All Types of Cold Plunges</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
              {plungeTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg" data-testid={`plunge-type-${index}`}>
                  <Snowflake className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-inclusions">
              What's Included in Every Installation
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your system comes fully ready to use:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inclusions.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`inclusion-${index}`}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-cyan-600" />
                    </div>
                    <span className="font-medium pt-3">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Systems Work Better Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-climate">
              Why Our Cold Plunges Work Better in Bali
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Standard cooling units overheat in Bali's climate. Our systems are designed specifically for:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mb-8">
              {climateFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg" data-testid={`feature-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-4xl">
              This makes them ideal for villas, gyms, spas, retreats, ice-bath classes, and private homes.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8" data-testid="heading-pricing">
              Cold Plunge Prices in Bali (2025 Realistic Rates)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-8">
              {pricingTable.map((item, index) => (
                <Card key={index} className={index === 1 ? "border-cyan-500 border-2" : ""} data-testid={`pricing-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.type}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.use}</p>
                    <p className="text-2xl font-bold text-cyan-600">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Pricing depends on the cooling system, material, size, and installation location.
            </p>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8" data-testid="heading-locations">
              Locations We Install Cold Plunges
            </h2>
            
            <div className="flex flex-wrap gap-3 max-w-4xl">
              {locations.map((location, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2" data-testid={`location-${index}`}>
                  <MapPin className="h-3 w-3 mr-1" />
                  {location}
                </Badge>
              ))}
              <Badge variant="secondary" className="text-sm px-4 py-2">
                and surrounding areas
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <Snowflake className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
              Get Your Cold Plunge Installed
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Send us a WhatsApp message with your location and preferred size. We will provide a design plan, price estimate, and installation timeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild data-testid="button-whatsapp-cta">
                <a 
                  href="https://wa.me/6282237565997?text=Hi! I'd like to get a cold plunge installed in Bali. Can you provide a quote?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild data-testid="button-call-cta">
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
