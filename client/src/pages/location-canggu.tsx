import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, CheckCircle2, Star, ArrowRight, Droplets, Shield, Award, Users, Wifi } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function CangguPoolCleaning() {
  const services = [
    { name: "Weekly Pool Cleaning", description: "Flexible scheduling for villa rentals", link: "/weekly-pool-maintenance-bali" },
    { name: "Water Chemistry Balancing", description: "Professional testing and adjustment", link: "/chemical-balancing-service-bali" },
    { name: "Eco-Friendly Pool Care", description: "Sustainable chemical options", link: "/pool-cleaning-service-bali" },
    { name: "Green Pool Recovery", description: "Algae removal specialists", link: "/green-pool-cleaning-bali" },
    { name: "Pool Equipment Repair", description: "Pump, filter, and equipment fixes", link: "/pool-pump-repair-bali" },
    { name: "Multi-Property Service", description: "Coordination for property managers", link: "/property-manager-pool-service-bali" },
  ];

  const neighborhoods = [
    "Batu Bolong", "Berawa", "Echo Beach", "Pererenan",
    "Nelayan", "Padonan", "Cemagi", "Old Man's"
  ];

  const nearbyLocations = [
    { name: "Pererenan", slug: "/location-pererenan" },
    { name: "Kerobokan", slug: "/location-kerobokan" },
    { name: "Seminyak", slug: "/location-seminyak" },
    { name: "Umalas", slug: "/location-umalas" },
  ];

  const faqs = [
    {
      question: "How much does pool cleaning cost in Canggu?",
      answer: "Pool cleaning in Canggu starts from IDR 800,000/month for our Silver Package (1 visit/week). Our Gold Package is IDR 1,500,000/month for 2 visits/week, and Platinum is IDR 2,800,000/month for 4 visits/week. All chemicals and supplies included."
    },
    {
      question: "Do you service all areas of Canggu?",
      answer: "Yes! We cover all Canggu areas including Batu Bolong, Berawa, Echo Beach, Pererenan, Nelayan, Padonan, and Cemagi. We also serve nearby areas like Kerobokan and Umalas."
    },
    {
      question: "Can you work around my rental guest schedule?",
      answer: "Absolutely! We specialize in Canggu rental properties and coordinate with property managers. We can schedule visits during checkout periods or early mornings to avoid guest disruption."
    },
    {
      question: "Do you offer eco-friendly pool cleaning options?",
      answer: "Yes! We offer eco-friendly chemical options for environmentally conscious properties. Our premium 90% pure chemicals are also more sustainable, requiring 50% less product while delivering better results."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Canggu | Villa & Rental Pool Maintenance Bali</title>
        <meta name="description" content="Expert pool cleaning in Canggu for villas, rentals & coworking spaces. From IDR 800K/month. Flexible scheduling, eco-friendly options. WhatsApp: +62 822-3756-5997" />
        <meta name="keywords" content="pool cleaning Canggu, Canggu pool maintenance, villa pool service Canggu, pool cleaner Canggu Bali, Echo Beach pool cleaning, Berawa pool service, Batu Bolong pool maintenance" />
        <meta property="og:title" content="Pool Cleaning Canggu | Professional Bali Pool Service" />
        <meta property="og:description" content="Expert pool cleaning in Canggu. Serving Berawa, Echo Beach, Batu Bolong & all areas. From IDR 800K/month." />
        <link rel="canonical" href="https://poolservicebali.com/location-canggu" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bali Pool Service - Canggu",
            "description": "Professional pool cleaning and maintenance service in Canggu, Bali",
            "telephone": "+62-822-3756-5997",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Canggu",
              "addressRegion": "Bali",
              "addressCountry": "ID"
            },
            "areaServed": ["Canggu", "Berawa", "Echo Beach", "Batu Bolong", "Pererenan"],
            "priceRange": "IDR 800,000 - IDR 2,800,000/month"
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Canggu Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pool Cleaning Service in Canggu, Bali
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional <strong>pool cleaning</strong> for Canggu's <strong>villa rentals</strong>, <strong>digital nomad properties</strong>, and <strong>coworking spaces</strong>. Flexible scheduling, eco-friendly options, trusted by property owners in Berawa, Echo Beach, Batu Bolong, and all Canggu areas.
              </p>

              <TrustElements variant="compact" className="mb-8" />

              <WhatsAppCTA 
                variant="hero" 
                service="pool cleaning" 
                location="Canggu"
                buttonText="Get Free Canggu Quote"
              />
            </div>
          </div>
        </section>

        {/* Why Canggu Properties Need Professional Pool Maintenance */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Canggu Properties Need Professional Pool Maintenance
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Canggu's booming rental market and unique coastal environment require expert <strong>pool maintenance</strong> to keep properties competitive.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Wifi className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Digital Nomad Market</h3>
                  <p className="text-muted-foreground">
                    Canggu's digital nomad community expects <strong>Instagram-worthy pools</strong>. Clean, well-maintained pools boost your property's appeal and online reviews.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">High Rental Demand</h3>
                  <p className="text-muted-foreground">
                    <strong>Canggu villa rentals</strong> see constant bookings year-round. Professional pool service ensures your property is always guest-ready without downtime.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Droplets className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Coastal Climate</h3>
                  <p className="text-muted-foreground">
                    Rice paddies and coastal air create unique challenges. Our expertise in <strong>Canggu pool cleaning</strong> prevents algae and equipment issues.
                  </p>
                </CardContent>
              </Card>
            </div>

            <TrustElements variant="experience" location="Canggu" />
          </div>
        </section>

        {/* Services in Canggu */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Services in Canggu
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <Link key={index} href={service.link}>
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="bg-card border rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">30 Min</div>
                  <div className="text-xs text-muted-foreground">Average Response</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-xs text-muted-foreground">Canggu Clients</div>
                </div>
                <div>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24" id="pricing">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ServicePricing 
              serviceName="Pool Cleaning" 
              serviceSlug="location-canggu"
              location="Canggu"
            />
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Canggu Neighborhoods We Serve
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {neighborhoods.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-card rounded-lg border">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-xl font-bold mb-4">Nearby Service Areas</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {nearbyLocations.map((loc) => (
                  <Link key={loc.slug} href={loc.slug}>
                    <Card className="hover-elevate cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Pool Service {loc.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <WhatsAppCTA variant="section" service="pool cleaning" location="Canggu" />
          </div>
        </section>

        {/* Trust & Guarantees */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <TrustElements variant="guarantees" location="Canggu" className="mb-12" />
            <TrustElements variant="safety" location="Canggu" />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Cleaning Canggu - FAQs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <WhatsAppCTA variant="section" service="pool cleaning" location="Canggu" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <WhatsAppCTA variant="footer" service="pool cleaning service" location="Canggu" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
