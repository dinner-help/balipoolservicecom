import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Droplets, 
  Shield, 
  Clock, 
  Award, 
  Smartphone, 
  CheckCircle2,
  FlaskConical,
  Waves,
  Brush,
  Filter,
  TestTube,
  Settings,
  FileText,
  Calendar,
  Sparkles
} from "lucide-react";
import poolCleaningHero from "@assets/stock_images/professional_pool_cl_e9f1a165.jpg";
import poolCleaning2 from "@assets/stock_images/professional_pool_cl_2cac1b80.jpg";
import poolCleaning3 from "@assets/stock_images/professional_pool_cl_b1f985cf.jpg";
import crystalClearPool from "@assets/stock_images/crystal_clear_blue_s_b1579e3a.jpg";
import crystalClearPool2 from "@assets/stock_images/crystal_clear_blue_s_316525ec.jpg";
import poolChemicals from "@assets/stock_images/pool_maintenance_equ_f6ef178d.jpg";
import poolEquipment from "@assets/stock_images/pool_maintenance_equ_d886bdcb.jpg";
import teamWork from "@assets/stock_images/indonesian_team_work_50ef183a.jpg";

export default function PoolCleaner() {
  const cleaningSteps = [
    {
      icon: Waves,
      title: "Surface Skimming & Debris Removal",
      description: "Professional-grade skimming nets remove leaves, flowers, organic matter, insects, and surface contaminants before they sink and stain your pool surfaces."
    },
    {
      icon: Brush,
      title: "Brushing Walls, Steps & Surfaces",
      description: "Specialized brushes for different pool surfaces remove algae spores, biofilm, calcium deposits, and grime—preventing the need for aggressive acid washing."
    },
    {
      icon: Droplets,
      title: "Vacuuming the Pool Floor",
      description: "Professional vacuums systematically clean the entire pool floor, corners, and hard-to-reach areas using manual or vacuum-to-waste methods."
    },
    {
      icon: Filter,
      title: "Filter Cleaning & Maintenance",
      description: "Sand filter backwashing, cartridge cleaning, or DE filter maintenance ensures optimal circulation and chemical effectiveness."
    },
    {
      icon: TestTube,
      title: "Water Testing & Chemical Balancing",
      description: "Digital testing equipment measures 7 critical parameters including pH, chlorine, alkalinity, and calcium hardness for perfect water chemistry."
    },
    {
      icon: Settings,
      title: "Equipment Inspection & Reporting",
      description: "Thorough pump, filtration, chlorination, and accessory checks with immediate issue reporting and repair recommendations."
    },
    {
      icon: FileText,
      title: "Detailed Service Reporting",
      description: "Comprehensive digital reports with chemistry readings, services performed, chemicals added, photos, and technician recommendations."
    }
  ];

  const servicePlans = [
    {
      icon: Sparkles,
      name: "Daily Pool Cleaning",
      frequency: "Daily service visits",
      ideal: "Hotels, resorts, high-traffic rental villas",
      features: [
        "Daily skimming, brushing, and vacuuming",
        "Water chemistry testing and adjustment",
        "Filter maintenance as needed",
        "Equipment monitoring",
        "Real-time issue reporting"
      ],
      result: "Consistently perfect pool conditions that impress every guest"
    },
    {
      icon: Calendar,
      name: "3x Weekly Pool Cleaning",
      frequency: "Monday, Wednesday, Friday",
      ideal: "Active rental villas, frequently used private pools",
      features: [
        "Full cleaning protocol each visit",
        "Chemistry balancing every visit",
        "Proactive issue detection",
        "Ideal for moderate to heavy use"
      ],
      result: "Reliable, crystal-clear water with minimal algae risk"
    },
    {
      icon: CheckCircle2,
      name: "Weekly Pool Cleaning",
      frequency: "Once per week",
      ideal: "Occasionally used private villas, seasonal properties",
      features: [
        "Complete service once per week",
        "Comprehensive cleaning and chemistry balancing",
        "Equipment inspection and reporting",
        "Suitable for light to moderate use"
      ],
      result: "Well-maintained pool without daily attention"
    },
    {
      icon: Clock,
      name: "Bi-Weekly Pool Cleaning",
      frequency: "Every two weeks",
      ideal: "Owner-occupied properties with active involvement",
      features: [
        "Service every two weeks",
        "Full cleaning and chemistry balancing",
        "Owner handles light maintenance between visits",
        "Equipment checks and professional adjustments"
      ],
      result: "Professional oversight with reduced service frequency"
    }
  ];

  const additionalServices = [
    {
      title: "Deep Pool Cleaning",
      description: "Quarterly or annual intensive cleaning including acid washing, tile and grout deep cleaning, calcium deposit removal, stain treatment, filter media replacement, and complete system flushing."
    },
    {
      title: "Green Pool Recovery",
      description: "Emergency treatment for algae-infested pools with rapid algae elimination, water chemistry restoration, filter cleaning, and equipment damage prevention. Typically resolved within 3-5 days."
    },
    {
      title: "Pool Equipment Repair",
      description: "Certified technician service for pump replacement and repair, filter system repairs, heater installation, salt chlorinator service, automation system setup, and leak detection."
    },
    {
      title: "Pool Opening & Closing",
      description: "Seasonal service for properties with periods of non-use including winterization, pre-season startup, complete system testing, and water replacement if needed."
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24-Hour Emergency Response",
      description: "Pool emergencies don't wait for business hours. Round-the-clock support for urgent situations—green pool before guest check-in, equipment failures, or pre-event crises."
    },
    {
      icon: Award,
      title: "Certified, Professional Technicians",
      description: "Our team receives continuous training in water chemistry, equipment repair, and customer service. Every technician is certified and insured for your protection."
    },
    {
      icon: Shield,
      title: "Same Technician, Every Visit",
      description: "You'll work with the same dedicated technician who learns your pool's unique characteristics and your preferences. No surprises, no strangers on your property."
    },
    {
      icon: Smartphone,
      title: "Proprietary Reporting App",
      description: "Real-time service documentation, water chemistry history, and equipment tracking—all accessible from your phone. Complete transparency whether you're in Bali or abroad."
    },
    {
      icon: FlaskConical,
      title: "EU-Standard Chemicals",
      description: "We use only professional-grade chemicals that meet international safety standards. No cheap alternatives that irritate skin or damage equipment."
    },
    {
      icon: CheckCircle2,
      title: "Transparent, Predictable Pricing",
      description: "Fixed monthly rates with all chemicals and supplies included. No hidden fees, no surprise charges—just straightforward, honest pricing."
    }
  ];

  const faqs = [
    {
      question: "How often does my pool need professional cleaning in Bali?",
      answer: "In Bali's tropical climate, we recommend minimum 2x weekly pool cleaning for pools with moderate use, and 3x weekly for rental properties or heavily used pools. Bali's warm temperatures, high humidity, and abundant vegetation create ideal conditions for algae growth and debris accumulation."
    },
    {
      question: "What causes my pool water to turn green?",
      answer: "Green pool water indicates algae growth, typically caused by insufficient chlorine levels, poor circulation or filtration, high phosphate levels, imbalanced pH preventing chlorine effectiveness, skipped pool cleaning services, or heavy rainfall diluting chemical levels. Professional pool cleaning prevents algae by maintaining proper chemistry and removing organic matter."
    },
    {
      question: "How do I know if my pool water is safe to swim in?",
      answer: "Safe swimming water requires free chlorine 1.0-3.0 ppm, pH 7.2-7.6, clear transparent water (can see drain at deepest point), no strong chlorine smell, no skin or eye irritation, and no visible algae or debris. Our pool cleaning service includes professional testing and documentation ensuring your pool meets all safety standards."
    },
    {
      question: "Why does my pool smell strongly of chlorine?",
      answer: "Surprisingly, a strong chlorine smell indicates insufficient free chlorine, not too much. The smell comes from chloramines—used chlorine bonded to contaminants like sweat, urine, and body oils. Proper pool cleaning and 'shocking' (super-chlorination) breaks apart chloramines, eliminating the smell and restoring sanitization effectiveness."
    },
    {
      question: "Can I clean my pool myself instead of hiring professionals?",
      answer: "While basic skimming and debris removal can be done by owners, professional pool cleaning offers significant advantages: expertise in water chemistry, professional testing equipment, time savings (45-90 minutes per session), consistency in maintaining stable chemistry, equipment protection and warranty compliance, and liability coverage with documentation for rental properties."
    },
    {
      question: "What's included in your pool cleaning service?",
      answer: "Every pool cleaning service includes surface skimming and debris removal, wall/floor/step brushing, vacuuming entire pool floor, filter cleaning, complete water chemistry testing (7 parameters), chemical balancing with professional-grade products, equipment inspection and reporting, skimmer and pump basket cleaning, and detailed service documentation with photo reports. All chemicals, equipment, and labor are included in your fixed monthly rate."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Pool Cleaning Bali | Professional Maintenance Service</title>
        <meta name="description" content="Expert pool cleaning in Bali. CPO-certified technicians, crystal-clear water guaranteed. Serving Seminyak, Canggu, Uluwatu. Same-day emergency service available." />
        <meta name="keywords" content="pool cleaning Bali, pool maintenance Bali, professional pool service, pool cleaner Seminyak, pool cleaning Canggu, Bali pool care, pool chemical balancing, swimming pool maintenance, pool technician Bali, pool cleaning service" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://balipoolservice.com/pool-cleaner" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-cleaner" />
        <meta property="og:title" content="Pool Cleaning Bali | Professional Maintenance Service" />
        <meta property="og:description" content="Expert pool cleaning in Bali. CPO-certified technicians, crystal-clear water guaranteed. Same-day emergency service available. 50+ team members serving all Bali." />
        <meta property="og:image" content="https://balipoolservice.com/og-image-pool-cleaning.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bali Pool Service" />
        <meta property="og:locale" content="en_ID" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://balipoolservice.com/pool-cleaner" />
        <meta name="twitter:title" content="Pool Cleaning Bali | Professional Maintenance Service" />
        <meta name="twitter:description" content="Expert pool cleaning in Bali. CPO-certified technicians, crystal-clear water guaranteed. Same-day emergency service available." />
        <meta name="twitter:image" content="https://balipoolservice.com/og-image-pool-cleaning.jpg" />
        
        {/* Schema.org JSON-LD - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://balipoolservice.com",
            "name": "Bali Pool Service - Pool Cleaning Division",
            "image": "https://balipoolservice.com/logo.png",
            "description": "Professional pool cleaning and maintenance services in Bali. CPO-certified technicians providing expert pool care for villas, hotels, and homes across Bali.",
            "url": "https://balipoolservice.com/pool-cleaner",
            "telephone": "+6282237565997",
            "priceRange": "IDR 800,000 - IDR 2,800,000",
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
        
        {/* Schema.org JSON-LD - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        
        {/* Schema.org JSON-LD - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pool Cleaning and Maintenance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bali Pool Service"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bali"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pool Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Silver Package - Pool Cleaning"
                  },
                  "price": "2900000",
                  "priceCurrency": "IDR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gold Package - Pool Cleaning"
                  },
                  "price": "3900000",
                  "priceCurrency": "IDR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Platinum Package - Pool Cleaning"
                  },
                  "price": "5500000",
                  "priceCurrency": "IDR"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0">
              <img 
                src={poolCleaningHero} 
                alt="Professional pool cleaning service in Bali"
                className="w-full h-full object-cover opacity-5"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Your Pool, Always Perfect
              </h1>
              <p className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                Professional maintenance that keeps your pool crystal clear, so you never have to think about it
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-black/90 text-white border-black"
                  asChild
                  data-testid="button-hero-contact"
                >
                  <a href="#contact">Get Free Assessment</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black/5"
                  asChild
                  data-testid="button-hero-whatsapp"
                >
                  <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>

              {/* Certifications & Trust Badges */}
              <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <p className="text-xs uppercase tracking-wider text-black/40 mb-6 font-semibold">Trusted & Certified</p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <span className="text-xs font-semibold text-black/70">CPO Certified</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <span className="text-xs font-semibold text-black/70">NSF Approved</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <span className="text-xs font-semibold text-black/70">ISO 9001</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <span className="text-xs font-semibold text-black/70">Fully Insured</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-black" />
                    </div>
                    <span className="text-xs font-semibold text-black/70">12+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src={teamWork} 
                    alt="Bali Pool Service team - 50 dedicated professionals"
                    className="rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm">Team Members</div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our People Are Our Greatest Asset
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We're incredibly proud of our team of 50+ dedicated pool care professionals. From certified technicians to customer service specialists, every member brings expertise, passion, and commitment to excellence.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>We wouldn't be where we are today without our people.</strong> Each team member undergoes rigorous training in water chemistry, equipment maintenance, and customer service. They're not just employees—they're pool care specialists who take genuine pride in keeping your pool perfect.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">CPO Certified Technicians</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Years Average Experience</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Pools Maintained</div>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground mt-6 italic">
                    "Our team members are carefully selected and continuously trained. They treat every pool as if it were their own, because they understand that your satisfaction is our success."
                  </p>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">Get in Touch With Our Specialists</h3>
                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Our dedicated team is here to help. Reach out directly to the specialist who can best serve your needs.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 text-center hover-elevate">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Pool Cleaning</h4>
                    <p className="text-sm text-muted-foreground mb-4">Regular maintenance & chemical balancing</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://wa.me/6282237565997?text=Hi, I'm interested in pool cleaning services", "_blank")}
                      data-testid="button-contact-cleaning"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Contact Team
                    </Button>
                  </Card>

                  <Card className="p-6 text-center hover-elevate">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Pool Repair</h4>
                    <p className="text-sm text-muted-foreground mb-4">Equipment fixes & emergency repairs</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://wa.me/6282237565997?text=Hi, I need help with pool repair", "_blank")}
                      data-testid="button-contact-repair"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Contact Team
                    </Button>
                  </Card>

                  <Card className="p-6 text-center hover-elevate">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Waves className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Pool Construction</h4>
                    <p className="text-sm text-muted-foreground mb-4">New pool builds & renovations</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://wa.me/6282237565997?text=Hi, I'm interested in building a new pool", "_blank")}
                      data-testid="button-contact-construction"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Contact Team
                    </Button>
                  </Card>

                  <Card className="p-6 text-center hover-elevate">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Sales & Quotes</h4>
                    <p className="text-sm text-muted-foreground mb-4">Custom packages & pricing</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://wa.me/6282237565997?text=Hi, I'd like to get a quote for pool services", "_blank")}
                      data-testid="button-contact-sales"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Contact Team
                    </Button>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Or call our main office: <a href="tel:+6282237565997" className="text-primary hover:underline font-semibold">+62 822 3756 5997</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Same-Day Emergency Service */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pool Emergency? We Can Visit Today & Fix It
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Don't let pool problems ruin your plans. Our expert technicians can assess and <a href="/pool-repair" className="text-primary hover:underline font-semibold">repair your pool</a> the same day. <strong>There's nothing we can't fix.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 bg-white border-l-4 border-l-red-500">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Droplets className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Green Pool Water</h3>
                      <p className="text-sm text-muted-foreground mb-3">Algae outbreak turning your pool green? We'll shock treat, balance chemicals, and restore crystal-clear water.</p>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open("https://wa.me/6282237565997?text=URGENT: My pool is green, I need same-day service", "_blank")}
                        data-testid="button-emergency-green"
                      >
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        Book Same-Day Visit
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-l-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Changing Color</h3>
                      <p className="text-sm text-muted-foreground mb-3">Pool turning cloudy, yellow, or brown? Chemical imbalance or metal oxidation - we'll diagnose and fix it today.</p>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open("https://wa.me/6282237565997?text=URGENT: My pool water is changing color, need help today", "_blank")}
                        data-testid="button-emergency-color"
                      >
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        Book Same-Day Visit
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-l-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Settings className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Broken Pool Lights</h3>
                      <p className="text-sm text-muted-foreground mb-3">Pool lights not working or flickering? We repair or replace any lighting system - LED, halogen, fiber optic.</p>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open("https://wa.me/6282237565997?text=I need pool light repair - can you visit today?", "_blank")}
                        data-testid="button-emergency-lights"
                      >
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        Book Same-Day Visit
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Expert Knowledge. Guaranteed Solutions.
                  </h3>
                  <p className="text-lg mb-6 text-primary-foreground/90">
                    With <strong>12+ years of experience</strong> and a team of <strong>50+ certified technicians</strong>, we've seen and solved every pool problem imaginable. <a href="/pool-repair" className="text-white hover:underline font-semibold">Pump failures, filter issues</a>, chemical imbalances, <a href="/pool-repair" className="text-white hover:underline font-semibold">equipment malfunctions</a>—there's nothing we can't diagnose and fix.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-semibold">Same-Day Service Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-semibold">Free On-Site Assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-semibold">90-Day Warranty</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 backdrop-blur-sm text-base"
                    onClick={() => window.open("https://wa.me/6282237565997?text=I need a pool expert to visit and give me an offer", "_blank")}
                    data-testid="button-emergency-cta"
                  >
                    <FaWhatsapp className="h-5 w-5 mr-2" />
                    Send Our Team Today - Get Free Quote
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Why Professional Pool Cleaning Matters */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Professional Pool Cleaning Matters in Bali
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Bali's warm, humid climate creates unique challenges for pool maintenance. High temperatures accelerate algae growth, heavy rainfall dilutes water chemistry, and tropical debris from palm trees constantly falls into pools. Without proper pool cleaning and chemical management, a pristine pool can turn green within 48-72 hours.
                  </p>
                  
                  <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                    <p className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong>Did you know?</strong> A single day of missed pool maintenance in Bali's climate can trigger algae blooms that take 3-5 days to fully resolve, potentially costing you guest bookings and emergency treatment fees.
                      </span>
                    </p>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">The hidden costs of poor pool maintenance:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Health risks</strong> - Unbalanced water chemistry causes skin irritation, eye redness, and can harbor harmful bacteria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Equipment damage</strong> - Improper chemical levels corrode pumps, filters, and heating systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Property value loss</strong> - Stained tiles and damaged surfaces decrease property appeal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Guest complaints</strong> - Pool issues directly impact reviews and booking rates</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <img 
                    src={crystalClearPool} 
                    alt="Crystal clear pool water with proper maintenance"
                    className="rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Pool Cleaning Process */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Pool Cleaning Process: Step-by-Step
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We follow a rigorous pool cleaning methodology developed specifically for Bali's tropical environment. Every service visit follows the same professional standards, ensuring consistent results you can depend on.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cleaningSteps.map((step, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <step.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Water Chemistry Table */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Professional Water Chemistry Management
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our technicians use digital testing equipment to measure seven critical water parameters
                </p>
              </div>

              <Card className="p-6 md:p-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold">Parameter</th>
                      <th className="text-left py-4 px-4 font-semibold">Ideal Range</th>
                      <th className="text-left py-4 px-4 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">pH Level</td>
                      <td className="py-4 px-4 text-primary font-medium">7.2 - 7.6</td>
                      <td className="py-4 px-4 text-muted-foreground">Controls chemical effectiveness and swimmer comfort</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Free Chlorine</td>
                      <td className="py-4 px-4 text-primary font-medium">1.0 - 3.0 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Sanitizes water and kills bacteria</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Total Alkalinity</td>
                      <td className="py-4 px-4 text-primary font-medium">80 - 120 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Buffers pH changes, prevents fluctuation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Calcium Hardness</td>
                      <td className="py-4 px-4 text-primary font-medium">200 - 400 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Prevents surface etching and scaling</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Cyanuric Acid</td>
                      <td className="py-4 px-4 text-primary font-medium">30 - 50 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Protects chlorine from UV degradation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Total Dissolved Solids</td>
                      <td className="py-4 px-4 text-primary font-medium">&lt; 1500 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Indicates overall water quality</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Phosphates</td>
                      <td className="py-4 px-4 text-primary font-medium">&lt; 100 ppb</td>
                      <td className="py-4 px-4 text-muted-foreground">Prevents algae growth</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <img 
                  src={poolChemicals} 
                  alt="Pool water chemistry testing equipment"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
                <img 
                  src={poolEquipment} 
                  alt="Professional pool maintenance equipment"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Service Plans */}
          <section className="py-16 md:py-24" id="service-plans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pool Cleaning Service Plans
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Flexible pool cleaning service plans designed for Bali's climate and your property's specific needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {servicePlans.map((plan, index) => (
                  <Card key={index} className="p-6 md:p-8 hover-elevate">
                    <div className="flex items-center gap-3 mb-4">
                      <plan.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Frequency:</strong> {plan.frequency}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Ideal for:</strong> {plan.ideal}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t">
                      <p className="text-sm">
                        <strong>Result:</strong> {plan.result}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <img 
                  src={poolCleaning2} 
                  alt="Professional pool cleaning in progress"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
                <img 
                  src={poolCleaning3} 
                  alt="Pool technician maintaining water quality"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
                <img 
                  src={crystalClearPool2} 
                  alt="Beautifully maintained crystal clear pool"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Additional Pool Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Beyond routine pool cleaning, we offer comprehensive pool care services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Bali Pool Service
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Professional, reliable pool cleaning service that Bali's international property owners depend on
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Common Pool Cleaning Questions
                </h2>
              </div>

              <div className="grid gap-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pool Cleaning Service Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Transparent, all-inclusive pricing with no hidden costs. All chemicals, labor, and equipment included.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="p-6 hover-elevate">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Silver Package</h3>
                    <div className="text-3xl font-bold text-primary">IDR 800,000</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for private villas</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">1 visit per week (4/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Complete cleaning & chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Water testing & balancing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Equipment inspection</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-get-started-silver">
                    <FaWhatsapp className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Card>

                <Card className="p-6 hover-elevate border-primary shadow-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Gold Package</h3>
                    <div className="text-3xl font-bold text-primary">IDR 1,500,000</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for rental properties</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">2 visits per week (8/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Everything in Silver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Monthly water quality report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Priority 4-hour emergency</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-get-started-gold">
                    <FaWhatsapp className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Card>

                <Card className="p-6 hover-elevate">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Platinum Package</h3>
                    <div className="text-3xl font-bold text-primary">IDR 2,800,000</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for hotels & resorts</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">4 visits per week (16/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Premium imported chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 emergency (2-hour)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Dedicated technician</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-get-started-platinum">
                    <FaWhatsapp className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Card>
              </div>

              {/* Chemical Packages */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Monthly Chemical Subscription</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                    Premium-grade chemicals delivered to your door. Our 90% pure formulas use 50% less product, last longer, and are eco-friendly & NSF-certified.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">NSF Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">90% Pure Formula</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">Eco-Friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">International Brands</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 hover-elevate transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Droplets className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Small Pool</h4>
                        <p className="text-sm text-muted-foreground">Up to 30m³</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">IDR 600,000</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monthly delivery to your door</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">90% pure premium chemicals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">International brands only</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3-month supply guarantee</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-chemical-small">
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </Button>
                  </Card>

                  <Card className="p-6 hover-elevate transition-all border-primary shadow-lg relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Droplets className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Medium Pool</h4>
                        <p className="text-sm text-muted-foreground">30-50m³</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">IDR 900,000</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monthly delivery to your door</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">90% pure premium chemicals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">International brands only</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3-month supply guarantee</span>
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-chemical-medium">
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </Button>
                  </Card>

                  <Card className="p-6 hover-elevate transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Droplets className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Large Pool</h4>
                        <p className="text-sm text-muted-foreground">50m³+</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">IDR 1,200,000</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monthly delivery to your door</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">90% pure premium chemicals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">International brands only</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3-month supply guarantee</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={() => window.open("https://wa.me/6282237565997", "_blank")} data-testid="button-chemical-large">
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </Button>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-4">
                    <FlaskConical className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">What's Included in Every Delivery</h4>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                        <div>• Chlorine tablets or granules</div>
                        <div>• pH increaser/decreaser</div>
                        <div>• Alkalinity adjuster</div>
                        <div>• Algaecide (preventative)</div>
                        <div>• Clarifier solution</div>
                        <div>• Test strips or reagents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-On Services */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Add-On Services</h3>
                  <p className="text-muted-foreground">Customize your package with additional services</p>
                </div>
                <Card className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Extra weekly visit</span>
                      <span className="text-primary font-bold">IDR 400,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Pool chemical delivery</span>
                      <span className="text-primary font-bold">IDR 150,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Water feature maintenance</span>
                      <span className="text-primary font-bold">IDR 500,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Saltwater system maintenance</span>
                      <span className="text-primary font-bold">IDR 400,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Spa/Jacuzzi maintenance</span>
                      <span className="text-primary font-bold">IDR 800,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                      <span className="font-medium">Monthly photo/video report</span>
                      <span className="text-primary font-bold">IDR 300,000/month</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Special Offer & CTA */}
          <section className="py-16 md:py-24 bg-primary/5" id="contact">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Hassle-Free Pool Cleaning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop worrying about your pool and start enjoying it. Whether you're a villa owner, property manager, or hotel operator, Bali Pool Service delivers the professional, reliable pool cleaning service that Bali's international property owners depend on.
              </p>

              <Card className="p-8 bg-primary/10 border-primary/30 mb-8">
                <h3 className="text-2xl font-bold mb-4">Special Offer for New Clients</h3>
                <p className="text-lg mb-6">
                  First month of pool cleaning service at <strong>20% off</strong> when you sign up for a 6-month contract. Plus, receive a free comprehensive pool equipment inspection and water chemistry report (IDR 1,200,000 value).
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Mention this offer when you contact us. Valid for new residential and commercial clients.
                </p>
              </Card>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <FaWhatsapp className="h-6 w-6 text-primary" />
                  <a href="https://wa.me/6282237565997" className="text-primary hover:underline" data-testid="link-whatsapp">
                    +6282237565997
                  </a>
                </div>
                <p className="text-muted-foreground">Available 24 hours for emergencies</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  asChild
                  data-testid="button-get-assessment"
                >
                  <a href="https://wa.me/6282237565997">Get Your Free Pool Assessment</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  data-testid="button-view-pricing"
                >
                  <a href="/#pricing">View Pricing Plans</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
              <p className="text-muted-foreground italic">
                Serving <a href="/#service-areas" className="text-primary hover:underline">Seminyak</a>, <a href="/#service-areas" className="text-primary hover:underline">Canggu</a>, <a href="/#service-areas" className="text-primary hover:underline">Uluwatu</a>, <a href="/#service-areas" className="text-primary hover:underline">Sanur</a>, <a href="/#service-areas" className="text-primary hover:underline">Nusa Dua</a>, <a href="/#service-areas" className="text-primary hover:underline">Ubud</a>, <a href="/#service-areas" className="text-primary hover:underline">Jimbaran</a>, and all of Bali with certified <a href="/" className="text-primary hover:underline">pool cleaning and maintenance services</a>.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
