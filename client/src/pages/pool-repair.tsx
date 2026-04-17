import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Wrench, Clock, Shield, CheckCircle2, AlertTriangle, Zap, 
  Droplet, Thermometer, Activity, Settings, Award,
  Phone, MapPin, Star, Package, Timer, Users, Search
} from "lucide-react";

import poolRepairHero from "@assets/stock_images/pool_repair_technici_25fac79a.jpg";
import brokenEquipment from "@assets/stock_images/broken_pool_pump_fil_85061bb5.jpg";
import tileRepair from "@assets/stock_images/pool_tile_repair_cra_48217d8a.jpg";
import technicianTools from "@assets/stock_images/professional_pool_te_8b4df2e6.jpg";

export default function PoolRepair() {
  const emergencyServices = [
    {
      icon: Zap,
      title: "Pump & Motor Failures",
      description: "Complete pump system diagnostics, motor replacement, impeller repairs, and seal replacements. 24-hour emergency response for complete system failures.",
      response: "2-4 hours"
    },
    {
      icon: Droplet,
      title: "Leak Detection & Repair",
      description: "Advanced electronic leak detection, pressure testing, structural crack repair, plumbing line replacement, and tile/grout waterproofing.",
      response: "Same day"
    },
    {
      icon: Settings,
      title: "Filter System Repairs",
      description: "Sand filter media replacement, cartridge housing repairs, D.E. filter grid replacement, multiport valve repairs, and automatic backwash system fixes.",
      response: "4-6 hours"
    },
    {
      icon: Thermometer,
      title: "Heater & Heat Pump Service",
      description: "Gas heater repairs, heat pump compressor service, flow sensor replacement, thermostat calibration, and heat exchanger descaling.",
      response: "6-8 hours"
    },
    {
      icon: Activity,
      title: "Automation System Fixes",
      description: "Salt chlorinator cell replacement, automatic chemical feeder repairs, timer and valve actuator replacement, control panel diagnostics and programming.",
      response: "Same day"
    },
    {
      icon: AlertTriangle,
      title: "Structural Damage Repair",
      description: "Tile crack repair, coping stone replacement, pool surface resurfacing (plaster, pebble, fiberglass), deck drainage fixes, and waterline restoration.",
      response: "24-48 hours"
    }
  ];

  const commonProblems = [
    {
      problem: "Green or Cloudy Water Won't Clear",
      causes: ["Filter malfunction", "Pump circulation failure", "Chemical feeder breakdown"],
      solution: "Complete system diagnostic with water testing, filter inspection, pump performance analysis, and chemical automation repair. Typically resolved within 24 hours."
    },
    {
      problem: "Pool Losing Water (Visible Drop)",
      causes: ["Underground plumbing leak", "Equipment pad leaks", "Tile/structure cracks"],
      solution: "Electronic leak detection (pressure testing + dye testing) to pinpoint exact location, followed by targeted repair using epoxy injection, pipe replacement, or tile regrouting."
    },
    {
      problem: "Pump Making Loud Noise or Not Running",
      causes: ["Motor bearing failure", "Impeller blockage", "Capacitor failure"],
      solution: "Motor diagnostic testing, bearing replacement, impeller cleaning/replacement, and electrical component testing. Most repairs completed same day with parts in stock."
    },
    {
      problem: "Heater Not Warming Pool",
      causes: ["Thermostat failure", "Heat exchanger scale buildup", "Gas valve issues"],
      solution: "Complete heater system inspection, thermostat calibration or replacement, heat exchanger chemical cleaning (muriatic acid descaling), and gas flow testing."
    },
    {
      problem: "Salt System Showing 'Check Cell' Error",
      causes: ["Calcium buildup on cell plates", "Cell lifespan exhausted", "Control board failure"],
      solution: "Cell inspection and acid cleaning, flow sensor testing, and if needed, new cell installation with 5-year warranty. Board diagnostics and firmware updates included."
    },
    {
      problem: "Tiles Falling Off or Cracked",
      causes: ["Water chemistry imbalance", "Structural movement", "Adhesive failure"],
      solution: "Water chemistry correction, structural crack assessment, tile removal and surface prep, waterproof thinset application, and professional tile installation with flexible grout."
    }
  ];

  const equipmentRepairs = [
    {
      category: "Circulation Systems",
      items: [
        "Pump motor replacement (0.5 HP to 3 HP)",
        "Impeller and diffuser repairs",
        "Mechanical seal replacement",
        "Variable speed drive calibration",
        "Pump basket and strainer repairs",
        "Plumbing valve replacement (check, ball, gate valves)"
      ]
    },
    {
      category: "Filtration Systems",
      items: [
        "Sand filter media replacement (grade #20 silica)",
        "Cartridge element replacement (all brands)",
        "D.E. filter grid replacement and cleaning",
        "Multiport valve rebuilding",
        "Pressure gauge replacement and calibration",
        "Filter tank crack repair and reinforcement"
      ]
    },
    {
      category: "Heating Systems",
      items: [
        "Gas heater ignition system repair",
        "Heat pump compressor service",
        "Heat exchanger descaling and replacement",
        "Thermostat and temperature sensor replacement",
        "Flow switch and pressure switch repairs",
        "Pilot assembly and gas valve service"
      ]
    },
    {
      category: "Automation & Chemical Systems",
      items: [
        "Salt chlorinator cell replacement (all brands)",
        "ORP and pH probe replacement and calibration",
        "Peristaltic pump repairs (chemical feeders)",
        "Control panel circuit board diagnostics",
        "Valve actuator motor replacement",
        "UV and ozone system service"
      ]
    },
    {
      category: "Structural & Aesthetic",
      items: [
        "Tile and coping stone replacement",
        "Plaster resurfacing (white, colored, aggregate)",
        "Fiberglass gel coat repairs",
        "Pool light replacement (LED upgrade available)",
        "Return fitting and main drain repairs",
        "Deck crack injection and sealing"
      ]
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Emergency Contact",
      description: "Call or WhatsApp us 24/7. Describe the problem and we'll assess urgency. Emergency repairs dispatched within 2-4 hours.",
      icon: Phone
    },
    {
      step: "2",
      title: "On-Site Diagnosis",
      description: "Technician arrives with full diagnostic tools: multimeter, pressure gauges, leak detection equipment, and water testing kit. Complete system inspection performed.",
      icon: Search
    },
    {
      step: "3",
      title: "Transparent Quote",
      description: "Detailed repair estimate with parts and labor breakdown. Photos of damaged components sent to your phone. No hidden costs, no surprises.",
      icon: Package
    },
    {
      step: "4",
      title: "Expert Repair",
      description: "Certified technicians perform repairs using OEM or premium aftermarket parts. All work photographed and documented with before/after comparisons.",
      icon: Wrench
    },
    {
      step: "5",
      title: "Quality Testing",
      description: "Complete system performance testing: pressure testing (pumps/filters), flow rate measurement, temperature verification, and water chemistry balancing.",
      icon: CheckCircle2
    },
    {
      step: "6",
      title: "Warranty & Follow-Up",
      description: "All repairs backed by 90-day labor warranty and manufacturer parts warranty. Follow-up inspection scheduled 7-14 days after major repairs.",
      icon: Shield
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      points: [
        "2-4 hour response for critical failures",
        "Same-day service for most repairs",
        "Weekend and holiday availability",
        "Direct technician WhatsApp line"
      ]
    },
    {
      icon: Award,
      title: "Certified Technicians",
      points: [
        "NSF/ANSI-50 water chemistry certified",
        "Manufacturer-trained on major brands",
        "Electrical and plumbing licensed",
        "8+ years average experience"
      ]
    },
    {
      icon: Settings,
      title: "Professional Equipment",
      points: [
        "Electronic leak detection systems",
        "Digital multimeters and oscilloscopes",
        "Pressure testing equipment (0-60 PSI)",
        "Full replacement parts inventory"
      ]
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      points: [
        "90-day labor warranty on all repairs",
        "Manufacturer warranty on parts",
        "Before/after photo documentation",
        "Performance verification testing"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Pool Repair Bali | 24/7 Emergency Service & Experts</title>
        <meta name="description" content="Emergency pool repair Bali. Expert pump, filter, heater & leak repairs. 2-4 hour response time. 90-day warranty. Serving Seminyak, Canggu, Uluwatu 24/7." />
        <meta name="keywords" content="pool repair bali, pool equipment repair bali, emergency pool repair, pool pump repair bali, pool leak detection bali, pool heater repair bali, swimming pool repair seminyak, pool repair canggu" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://balipoolservice.com/pool-repair" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-repair" />
        <meta property="og:title" content="Pool Repair Bali | 24/7 Emergency Service & Experts" />
        <meta property="og:description" content="24/7 emergency pool repair in Bali. Expert technicians fix pumps, filters, heaters, leaks. 2-4 hour response time. 90-day warranty on all repairs." />
        <meta property="og:image" content="https://balipoolservice.com/og-image-pool-repair.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bali Pool Service" />
        <meta property="og:locale" content="en_ID" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://balipoolservice.com/pool-repair" />
        <meta name="twitter:title" content="Pool Repair Bali | 24/7 Emergency Service" />
        <meta name="twitter:description" content="Emergency pool repair Bali. Expert pump, filter, heater & leak repairs. 2-4 hour response. 90-day warranty." />
        <meta name="twitter:image" content="https://balipoolservice.com/og-image-pool-repair.jpg" />
        
        {/* Schema.org JSON-LD - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://balipoolservice.com",
            "name": "Bali Pool Service - Pool Repair Division",
            "image": "https://balipoolservice.com/logo.png",
            "description": "24/7 emergency pool repair services in Bali. Expert technicians specializing in pump repairs, filter systems, heaters, leak detection, and all pool equipment.",
            "url": "https://balipoolservice.com/pool-repair",
            "telephone": "+6282340709041",
            "priceRange": "IDR 500,000 - IDR 15,000,000",
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
                "opens": "00:00",
                "closes": "23:59"
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
        
        {/* Schema.org JSON-LD - Emergency Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Bali Pool Service - Emergency Pool Repair",
            "serviceType": "24/7 Emergency Pool Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bali Pool Service"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bali"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": {
                "@type": "ContactPoint",
                "telephone": "+6282340709041",
                "contactType": "Emergency",
                "availableLanguage": ["English", "Indonesian"]
              }
            }
          })}
        </script>
        
        {/* Schema.org JSON-LD - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pool Equipment Repair",
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
              "name": "Pool Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pump & Motor Repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection & Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Filter System Repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Heater & Heat Pump Service"
                  }
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
          <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={poolRepairHero} 
                alt="Professional pool repair service in Bali - emergency response"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">24/7 Emergency Pool Repair</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Expert Pool Repair Services in Bali
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Pumps, filters, heaters, leaks — we fix it all. 2-4 hour emergency response. Certified technicians. 90-day warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
                  className="gap-2 bg-red-600 hover:bg-red-700 text-white text-lg px-8"
                  data-testid="button-emergency-contact"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Emergency Repair - WhatsApp Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("repair-process")?.scrollIntoView({ behavior: "smooth" })}
                  className="gap-2 text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  data-testid="button-learn-repair"
                >
                  How Repairs Work
                </Button>
              </div>
            </div>
          </section>

          {/* Emergency Services Grid */}
          <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Emergency Pool Repair Services
                </h2>
                <p className="text-xl text-muted-foreground">
                  From equipment failures to structural damage — our certified technicians handle every type of pool repair with professional-grade tools and genuine parts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyServices.map((service, index) => (
                  <Card key={index} className="hover-elevate border-2" data-testid={`emergency-service-${index}`}>
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">Response: {service.response}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Common Problems Section */}
          <section className="py-20 md:py-32 bg-accent/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Common Pool Problems We Solve
                </h2>
                <p className="text-xl text-muted-foreground">
                  Recognize your issue? Here's how we diagnose and fix the most frequent pool equipment failures in Bali's tropical climate.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {commonProblems.map((item, index) => (
                  <Card key={index} className="hover-elevate border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                        <h3 className="text-xl font-bold">{item.problem}</h3>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Common Causes:</p>
                        <ul className="space-y-1">
                          {item.causes.map((cause, cIndex) => (
                            <li key={cIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold mb-2">Our Solution:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <img 
                  src={brokenEquipment} 
                  alt="Pool equipment repair and diagnosis - broken pump and filter"
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-6"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground italic">
                  Professional diagnostic equipment allows us to pinpoint issues quickly and accurately
                </p>
              </div>
            </div>
          </section>

          {/* Equipment Repairs Detailed */}
          <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete Pool Equipment Repair Services
                </h2>
                <p className="text-xl text-muted-foreground">
                  We service and repair all major pool equipment brands: Pentair, Hayward, Jandy, Sta-Rite, Zodiac, and more. OEM and premium aftermarket parts available.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {equipmentRepairs.map((category, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Wrench className="h-6 w-6 text-primary" />
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src={tileRepair} 
                  alt="Pool tile and structural repair - crack fixing and waterproofing"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
                <img 
                  src={technicianTools} 
                  alt="Professional pool repair tools and diagnostic equipment"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Repair Process */}
          <section id="repair-process" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Professional Repair Process
                </h2>
                <p className="text-xl text-muted-foreground">
                  From emergency call to quality testing — here's exactly what happens when you need pool repair in Bali.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repairProcess.map((step, index) => (
                  <div key={index} className="relative" data-testid={`process-step-${index}`}>
                    <Card className="hover-elevate border-2 h-full">
                      <CardContent className="p-6">
                        <div className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold border-4 border-background">
                          {step.step}
                        </div>
                        <div className="mt-6">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Bali Property Owners Trust Us
                </h2>
                <p className="text-xl text-muted-foreground">
                  We're not just fast — we're thorough, professional, and committed to lasting repairs that prevent future breakdowns.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="border-2 hover-elevate">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <ul className="space-y-2">
                            {item.points.map((point, pIndex) => (
                              <li key={pIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-semibold">Emergency Service Coverage</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  24/7 Pool Repair Across Bali
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Emergency response available in all major areas. We stock parts locally for same-day repairs in most locations.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {["Seminyak", "Canggu", "Uluwatu", "Sanur", "Nusa Dua", "Jimbaran"].map((area) => (
                  <a key={area} href="/#service-areas" className="text-center p-4 rounded-xl bg-background/50 border-2 hover-elevate block">
                    <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{area}</p>
                    <p className="text-xs text-muted-foreground">2-4 hour response</p>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border-2 border-red-500/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Pool Emergency? We're Ready.</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Equipment failure? Water leak? Chemical issue? Our emergency team is standing by 24/7 with fully stocked repair vehicles.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
                  className="gap-2 bg-red-600 hover:bg-red-700 text-white"
                >
                  <Phone className="h-5 w-5" />
                  Call Emergency Repair Hotline
                </Button>
              </div>
            </div>
          </section>

          {/* Comprehensive Pricing */}
          <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Transparent Repair Pricing
                </h2>
                <p className="text-xl text-muted-foreground">
                  No hidden fees, no surprises. You approve the quote before any work begins.
                </p>
              </div>

              {/* Diagnostic & Inspection */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Diagnostic & Inspection Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 hover-elevate">
                    <h4 className="font-bold mb-2">Pool Leak Detection</h4>
                    <div className="text-2xl font-bold text-primary mb-2">IDR 1,000,000</div>
                    <p className="text-sm text-muted-foreground">Complete leak detection using pressure testing, dye testing, and electronic leak detection equipment. Pinpoint exact location of water loss.</p>
                  </Card>
                  <Card className="p-6 hover-elevate">
                    <h4 className="font-bold mb-2">Equipment Diagnostic</h4>
                    <div className="text-2xl font-bold text-primary mb-2">IDR 500,000</div>
                    <p className="text-sm text-muted-foreground">Comprehensive equipment inspection including pump, filter, heater, chlorinator, and automation systems. Detailed report with recommendations.</p>
                  </Card>
                  <Card className="p-6 hover-elevate">
                    <h4 className="font-bold mb-2">Water Quality Analysis</h4>
                    <div className="text-2xl font-bold text-primary mb-2">IDR 300,000</div>
                    <p className="text-sm text-muted-foreground">Professional 27-parameter water analysis using laboratory equipment. Includes complete chemistry report and treatment plan.</p>
                  </Card>
                </div>
              </div>

              {/* Equipment Repairs */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Equipment Repairs</h3>
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Minor Pump Repair</span>
                        <span className="text-xs text-muted-foreground">Impeller, seal, gasket replacement</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 1,500,000 - 2,500,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pump Replacement</span>
                        <span className="text-xs text-muted-foreground">Complete pump unit + installation</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 6,000,000 - 15,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Filter Deep Cleaning</span>
                        <span className="text-xs text-muted-foreground">Chemical cleaning, media inspection</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 800,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Filter Replacement</span>
                        <span className="text-xs text-muted-foreground">Sand, cartridge, or DE filter system</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 3,500,000 - 9,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pool Heater Repair</span>
                        <span className="text-xs text-muted-foreground">Heat exchanger, thermostat, controls</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 2,500,000 - 6,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Skimmer Repair</span>
                        <span className="text-xs text-muted-foreground">Basket, weir, body replacement</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 600,000 - 1,200,000</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Structural Repairs */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Structural Repairs</h3>
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Minor Leak Repair</span>
                        <span className="text-xs text-muted-foreground">Small cracks, fitting leaks</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 1,500,000 - 3,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Major Leak Repair</span>
                        <span className="text-xs text-muted-foreground">Structural cracks, underground pipes</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 5,000,000 - 12,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Tile Repair (per m²)</span>
                        <span className="text-xs text-muted-foreground">Broken tile replacement, re-grouting</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 400,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pool Surface Patching</span>
                        <span className="text-xs text-muted-foreground">Plaster, pebble, or fiberglass repair</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 2,000,000 - 5,000,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pipe Repair/Replacement</span>
                        <span className="text-xs text-muted-foreground">PVC pipe, underground excavation</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 3,000,000 - 8,000,000</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Electrical Repairs */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Electrical Repairs</h3>
                <Card className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pool Light Replacement</span>
                        <span className="text-xs text-muted-foreground">LED or halogen fixture + installation</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 1,200,000 - 2,500,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Electrical Safety Inspection</span>
                        <span className="text-xs text-muted-foreground">GFCI, bonding, grounding check</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 600,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-accent/5 hover-elevate">
                      <div>
                        <span className="font-bold block">Pump Motor Replacement</span>
                        <span className="text-xs text-muted-foreground">Motor unit + rewiring if needed</span>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">IDR 2,500,000 - 5,000,000</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Warranty Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-primary border-2">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">90-Day Labor Warranty</h4>
                  <p className="text-sm text-muted-foreground">All repairs backed by our workmanship guarantee</p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Genuine Parts</h4>
                  <p className="text-sm text-muted-foreground">OEM parts with manufacturer warranties</p>
                </Card>
                <Card className="p-6 text-center">
                  <Timer className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Diagnostic Fee Waived</h4>
                  <p className="text-sm text-muted-foreground">When you approve the repair</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't Let a Broken Pool Ruin Your Day
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Professional repair service with certified technicians, genuine parts, and 90-day warranty. Available 24/7 across Bali. After repairs, keep your pool pristine with our <a href="/pool-cleaner" className="text-white hover:underline font-semibold">regular maintenance service</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
                  className="gap-2 bg-white text-primary hover:bg-gray-100 text-lg px-8"
                >
                  <FaWhatsapp className="h-6 w-6" />
                  Get Emergency Repair Quote
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-75">
                Average response time: 2-4 hours • Available 24/7 • No fix, no fee guarantee
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
