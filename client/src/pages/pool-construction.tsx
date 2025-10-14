import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, CheckCircle, Clock, Shield, Waves, Building2, Sparkles, Users, FileCheck, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export default function PoolConstruction() {
  const scrollToContact = () => {
    window.open("https://wa.me/628113702343", "_blank");
  };

  const poolTypes = [
    {
      title: "Infinity Pools",
      description: "Stunning vanishing edge pools that blend seamlessly with Bali's landscapes and ocean views.",
      features: ["Vanishing edge design", "Panoramic views", "Precision engineering", "Overflow systems", "Luxury finishes"],
      icon: Waves,
    },
    {
      title: "Traditional Pools",
      description: "Classic rectangular or custom-shaped pools perfect for villas, hotels, and family properties.",
      features: ["Versatile sizing", "Energy-efficient systems", "Durable construction", "Standard or heated", "Easy maintenance"],
      icon: Building2,
    },
    {
      title: "Custom Designs",
      description: "Fully bespoke pool solutions tailored to your property's architecture and your vision.",
      features: ["Unique shapes & features", "Water features integration", "Lighting design", "Natural stone finishes", "Beach entry options"],
      icon: Sparkles,
    },
  ];

  const constructionProcess = [
    {
      step: "1",
      title: "Design Consultation",
      description: "We visit your property, discuss your vision, assess the site, and create detailed 3D renderings of your dream pool.",
      duration: "1-2 weeks",
    },
    {
      step: "2",
      title: "Engineering & Permits",
      description: "Our team handles all engineering calculations, structural designs, and local permit applications in Bali.",
      duration: "2-3 weeks",
    },
    {
      step: "3",
      title: "Excavation & Foundation",
      description: "Professional excavation, reinforced steel framework installation, and concrete foundation preparation.",
      duration: "1-2 weeks",
    },
    {
      step: "4",
      title: "Pool Structure",
      description: "Shotcrete or gunite application, waterproofing, plumbing installation, and electrical systems setup.",
      duration: "3-4 weeks",
    },
    {
      step: "5",
      title: "Finishing & Equipment",
      description: "Tile or plaster finishing, coping installation, equipment setup (pumps, filters, heaters), and landscaping.",
      duration: "2-3 weeks",
    },
    {
      step: "6",
      title: "Final Testing & Handover",
      description: "Complete system testing, water balancing, staff training, and comprehensive warranty documentation.",
      duration: "1 week",
    },
  ];

  const materials = [
    {
      name: "Premium Tiles",
      description: "Imported Italian and Spanish tiles, slip-resistant finishes, color-fast glazing",
    },
    {
      name: "Reinforced Concrete",
      description: "High-strength concrete mix, corrosion-resistant steel reinforcement, earthquake-resistant design",
    },
    {
      name: "Waterproofing Systems",
      description: "Multi-layer waterproofing membranes, crack-resistant technology, 10-year leak warranty",
    },
    {
      name: "Premium Equipment",
      description: "German & American brands (Pentair, Hayward), energy-efficient pumps, advanced filtration",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "6-Month Construction Warranty",
      description: "Comprehensive coverage on workmanship, materials, and equipment for complete peace of mind.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Licensed engineers, certified pool builders, and skilled craftsmen with 100+ completed projects.",
    },
    {
      icon: FileCheck,
      title: "Transparent Process",
      description: "Fixed-price contracts, regular progress updates, detailed documentation, and no hidden costs.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Realistic timelines with built-in buffers. 95% of our projects complete on or ahead of schedule.",
    },
  ];

  const faqs = [
    {
      question: "How long does pool construction take in Bali?",
      answer: "A typical pool construction project takes 10-14 weeks from design approval to completion, depending on size and complexity. Infinity pools or custom designs may require additional time. We provide a detailed timeline during consultation.",
    },
    {
      question: "What permits are needed to build a pool in Bali?",
      answer: "You'll need building permits (IMB) from the local government and potentially environmental clearances depending on your location. We handle all permit applications and liaise with local authorities on your behalf.",
    },
    {
      question: "Can you build pools in all areas of Bali?",
      answer: "Yes, we serve all major areas including Seminyak, Canggu, Uluwatu, Sanur, Nusa Dua, Jimbaran, and Ubud. We assess site accessibility and soil conditions during our initial consultation.",
    },
    {
      question: "What's included in the construction price?",
      answer: "Our fixed-price includes design, permits, excavation, construction, equipment installation, finishing, and 6-month warranty. Additional features like water features, lighting, or heating are quoted separately.",
    },
    {
      question: "Do you offer financing options?",
      answer: "We offer flexible payment schedules tied to construction milestones: 30% deposit, 40% at structure completion, 20% at finishing, and 10% at handover. We can discuss custom payment arrangements for larger projects.",
    },
    {
      question: "What maintenance is required after construction?",
      answer: "We provide complete training on pool operation and offer maintenance packages starting from our Silver plan. Most villa owners choose our Gold or Platinum packages for worry-free ongoing care. Learn more about our pool cleaning and maintenance services.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Pool Construction Bali | Custom Pool Builders & Design</title>
        <meta name="description" content="Expert pool construction in Bali. Custom infinity pools, traditional designs. Starting IDR 85 million. 10-12 week completion. Serving Seminyak, Canggu, Uluwatu." />
        <meta name="keywords" content="pool construction bali, pool builder bali, infinity pool construction, custom pool design bali, swimming pool construction seminyak, pool contractor bali, new pool construction" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://balipoolservice.com/pool-construction" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-construction" />
        <meta property="og:title" content="Pool Construction Bali | Custom Pool Builders" />
        <meta property="og:description" content="Build your dream pool in Bali. Expert construction of infinity pools, traditional designs, custom shapes. Starting IDR 85 million. 10-12 week completion." />
        <meta property="og:image" content="https://balipoolservice.com/og-image-pool-construction.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pool Service Bali" />
        <meta property="og:locale" content="en_ID" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://balipoolservice.com/pool-construction" />
        <meta name="twitter:title" content="Pool Construction Bali | Custom Pool Builders" />
        <meta name="twitter:description" content="Build your dream pool in Bali. Custom infinity & traditional pools. Starting IDR 85 million. Expert construction team." />
        <meta name="twitter:image" content="https://balipoolservice.com/og-image-pool-construction.jpg" />
        
        {/* Schema.org JSON-LD - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://balipoolservice.com",
            "name": "Pool Service Bali - Pool Construction Division",
            "image": "https://balipoolservice.com/logo.png",
            "description": "Professional pool construction services in Bali. Custom infinity pools, traditional designs, and bespoke pool solutions built by expert craftsmen.",
            "url": "https://balipoolservice.com/pool-construction",
            "telephone": "+628113702343",
            "priceRange": "IDR 85,000,000 - IDR 500,000,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalan Sunset Road",
              "addressLocality": "Seminyak",
              "addressRegion": "Bali",
              "postalCode": "80361",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -8.6705,
              "longitude": 115.1614
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://facebook.com/poolservicebali",
              "https://instagram.com/poolservicebali"
            ],
            "areaServed": [
              "Seminyak", "Canggu", "Uluwatu", "Sanur", "Nusa Dua", "Ubud", "Denpasar", "Jimbaran"
            ]
          })}
        </script>
        
        {/* Schema.org JSON-LD - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pool Construction & Design",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pool Service Bali"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bali"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "lowPrice": "85000000",
              "highPrice": "500000000"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Hammer className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Pool Construction</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Your Dream Pool in Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Custom-designed infinity pools, traditional builds, and luxury installations for villas, hotels, and resorts across Bali. Fixed pricing, transparent process, 6-month warranty.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="gap-2"
                data-testid="button-hero-consultation"
              >
                <FaWhatsapp className="h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-process"
              >
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Types */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Types We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              From stunning infinity edges to classic family pools, we design and build pools that complement Bali's natural beauty and your property's architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {poolTypes.map((type, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`pool-type-${index}`}>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <type.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{type.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section id="process" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Construction Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven 6-step process that ensures quality, transparency, and on-time delivery. Total timeline: 10-14 weeks from design to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionProcess.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden" data-testid={`process-step-${index}`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[100px]" />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {phase.step}
                    </div>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {phase.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Materials */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Materials & Equipment
            </h2>
            <p className="text-xl text-muted-foreground">
              We use only the highest quality materials and internationally recognized equipment brands to ensure longevity and minimal maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`material-${index}`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {material.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed pl-7">
                    {material.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Pool Service Bali
            </h2>
            <p className="text-xl text-muted-foreground">
              Licensed engineers, proven track record, and commitment to excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-elevate transition-all" data-testid={`benefit-${index}`}>
                <CardHeader>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Fixed-price contracts with no hidden costs. Get a detailed quote during your free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Complete design and 3D renderings",
                  "All permits and government approvals",
                  "Full excavation and site preparation",
                  "Premium construction materials",
                  "Professional equipment installation",
                  "Finishing work (tiles, coping, deck)",
                  "6-month comprehensive warranty",
                  "Staff training on pool operation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Typical Pricing Range</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-semibold">Small Pool (3x6m)</span>
                    <span className="text-2xl font-bold text-primary">IDR 150-200M</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for villas, includes basic equipment</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-semibold">Medium Pool (4x8m)</span>
                    <span className="text-2xl font-bold text-primary">IDR 250-350M</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Standard size for hotels and luxury villas</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-semibold">Infinity Pool (Custom)</span>
                    <span className="text-2xl font-bold text-primary">IDR 400M+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Bespoke designs with premium finishes</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Payment Schedule:</strong> 30% deposit, 40% at structure completion, 20% at finishing, 10% at handover
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Installation Pricing */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Equipment Installation
            </h2>
            <p className="text-xl text-muted-foreground">
              Premium equipment installation with 6-month warranty. Professional setup ensures optimal performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">New Pool Pump</h3>
                  <p className="text-sm text-muted-foreground">Variable speed, energy-efficient models</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 7,000,000 - 18,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Includes pump unit, installation, plumbing connections, electrical work, and 6-month warranty</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">New Filter System</h3>
                  <p className="text-sm text-muted-foreground">Sand, cartridge, or DE filtration</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 5,000,000 - 12,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Complete filter installation with valve system, media, plumbing, and commissioning</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Automatic Pool Cleaner</h3>
                  <p className="text-sm text-muted-foreground">Robotic or suction-side cleaners</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 8,000,000 - 20,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Premium automatic cleaner with installation, programming, and operator training</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Pool Heater</h3>
                  <p className="text-sm text-muted-foreground">Gas, electric, or heat pump systems</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 15,000,000 - 40,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Complete heater installation with gas/electrical connections, controls, and efficiency testing</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">LED Pool Lighting</h3>
                  <p className="text-sm text-muted-foreground">Color-changing LED fixtures</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 2,500,000 - 6,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Energy-efficient LED lights with transformer, controls, and waterproof installation</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Saltwater Chlorination System</h3>
                  <p className="text-sm text-muted-foreground">Automatic salt cell chlorinator</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 12,000,000 - 25,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Complete saltwater system with cell, control unit, plumbing, and salt startup</p>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Pool Cover System</h3>
                  <p className="text-sm text-muted-foreground">Manual or automatic pool covers</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 10,000,000 - 30,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Custom-fitted pool cover with track system, motor (if automatic), and safety features</p>
            </Card>

            <Card className="p-6 hover-elevate border-primary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Complete Equipment Package</h3>
                  <p className="text-sm text-muted-foreground">Pump, filter, heater, lights, automation</p>
                </div>
                <span className="text-primary font-bold whitespace-nowrap">IDR 45,000,000 - 90,000,000</span>
              </div>
              <p className="text-sm text-muted-foreground">Full equipment suite for new pools - pump, filter, heater, chlorination, lights, and automation system</p>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-center">Installation Includes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">Premium Equipment</p>
                <p className="text-sm text-muted-foreground">International brand equipment with proven reliability</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">Professional Installation</p>
                <p className="text-sm text-muted-foreground">Certified technicians, proper plumbing & electrical</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">6-Month Warranty</p>
                <p className="text-sm text-muted-foreground">Parts and labor covered, plus manufacturer warranty. <a href="/pool-repair" className="text-primary hover:underline">24/7 repair service</a> available anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about building a pool in Bali
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`faq-${index}`}>
                <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {faq.answer}
                  {faq.question.includes("maintenance") && (
                    <span> <a href="/pool-cleaner" className="text-primary hover:underline font-semibold">View our pool maintenance packages →</a></span>
                  )}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Pool?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free consultation with our pool design experts. We'll visit your property, discuss your vision, and provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="gap-2"
              data-testid="button-cta-consultation"
            >
              <FaWhatsapp className="h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = "/#contact"}
              data-testid="button-cta-contact"
            >
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Available 24/7 • Island-wide service • Response within 2 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
