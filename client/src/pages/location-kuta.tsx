import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, CheckCircle2, Star, ArrowRight, Building2, Shield, Award, Users } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function KutaPoolCleaning() {
  const services = [
    { name: "Hotel Pool Service", description: "Commercial-grade maintenance", link: "/hotel-resort-pool-service-bali" },
    { name: "Weekly Maintenance", description: "Regular scheduled cleaning", link: "/weekly-pool-maintenance-bali" },
    { name: "Pool Equipment Repair", description: "Pump, filter, and equipment fixes", link: "/pool-pump-repair-bali" },
    { name: "Emergency Service", description: "24/7 urgent pool repairs", link: "/emergency-pool-repair-bali" },
    { name: "Green Pool Recovery", description: "Algae removal specialists", link: "/green-pool-cleaning-bali" },
    { name: "Water Chemistry", description: "Professional testing & balancing", link: "/chemical-balancing-service-bali" },
  ];

  const neighborhoods = [
    "Kuta Beach", "Tuban", "Kartika Plaza", "Legian Border",
    "Dewi Sartika", "Raya Kuta", "Bypass Ngurah Rai", "Airport Area"
  ];

  const nearbyLocations = [
    { name: "Legian", slug: "/location-legian" },
    { name: "Seminyak", slug: "/location-seminyak" },
    { name: "Jimbaran", slug: "/location-jimbaran" },
    { name: "Denpasar", slug: "/location-denpasar" },
  ];

  const faqs = [
    {
      question: "How much does pool cleaning cost in Kuta?",
      answer: "Pool cleaning in Kuta starts from IDR 2,900,000/month for residential pools. Hotels and commercial properties receive custom quotes based on pool size and service frequency."
    },
    {
      question: "Do you service hotels and guesthouses in Kuta?",
      answer: "Yes! We specialize in Kuta hotel and guesthouse pools. We offer daily service options, early morning scheduling, and compliance documentation for commercial properties."
    },
    {
      question: "Can you handle high-volume commercial pools?",
      answer: "Absolutely! Our team has experience with high-traffic hotel pools. We provide daily maintenance, rapid chemical adjustment, and equipment monitoring for busy properties."
    },
    {
      question: "What about budget-friendly options?",
      answer: "We offer competitive pricing for Kuta properties at all budget levels. Our Silver package provides reliable weekly maintenance starting at IDR 2,900,000/month."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Kuta | Hotel & Commercial Pool Service Bali</title>
        <meta name="description" content="Professional pool cleaning in Kuta for hotels, guesthouses & villas. From IDR 2.9M/month. High-volume service, 24/7 support. WhatsApp: +62 822-3756-5997" />
        <meta name="keywords" content="pool cleaning Kuta, Kuta pool maintenance, hotel pool service Bali, commercial pool cleaning Kuta, guesthouse pool maintenance, Tuban pool service, Kartika Plaza pool cleaning" />
        <meta property="og:title" content="Pool Cleaning Kuta | Hotel Pool Service Bali" />
        <meta property="og:description" content="Expert pool cleaning in Kuta. Hotels, guesthouses & villas. From IDR 2.9M/month." />
        <link rel="canonical" href="https://poolservicebali.com/location-kuta" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pool Service Bali - Kuta",
            "description": "Professional pool cleaning for hotels, guesthouses, and villas in Kuta, Bali",
            "telephone": "+62-822-3756-5997",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kuta",
              "addressRegion": "Bali",
              "addressCountry": "ID"
            },
            "areaServed": ["Kuta", "Tuban", "Kartika Plaza", "Legian"],
            "priceRange": "IDR 2,900,000 - IDR 5,500,000/month"
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
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-semibold">Kuta Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pool Cleaning Service in Kuta, Bali
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional <strong>pool cleaning</strong> for Kuta's <strong>hotels</strong>, <strong>guesthouses</strong>, and <strong>villa properties</strong>. High-volume service capability, budget-friendly packages, and reliable maintenance in Tuban, Kartika Plaza, and all Kuta areas.
              </p>

              <TrustElements variant="compact" className="mb-8" />

              <WhatsAppCTA 
                variant="hero" 
                service="pool cleaning" 
                location="Kuta"
                buttonText="Get Free Kuta Quote"
              />
            </div>
          </div>
        </section>

        {/* Why Kuta Properties Choose Us */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Kuta Properties Choose Professional Pool Service
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Kuta's busy tourism hub requires reliable <strong>pool maintenance</strong> that keeps up with high guest turnover.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Commercial Expertise</h3>
                  <p className="text-muted-foreground">
                    Kuta's hotels and guesthouses need reliable <strong>commercial pool service</strong>. We understand high-volume pool demands and health compliance requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">High Guest Turnover</h3>
                  <p className="text-muted-foreground">
                    <strong>Kuta hotel pools</strong> see constant use. Daily service options and rapid response ensure pools stay clean regardless of occupancy levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Budget Flexibility</h3>
                  <p className="text-muted-foreground">
                    From budget guesthouses to luxury hotels, we offer <strong>pool cleaning packages</strong> that fit every property's needs and budget.
                  </p>
                </CardContent>
              </Card>
            </div>

            <TrustElements variant="experience" location="Kuta" />
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Services in Kuta
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
                  <div className="text-2xl font-bold mb-1">20 Min</div>
                  <div className="text-xs text-muted-foreground">Average Response</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">Kuta Clients</div>
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

        {/* Pricing */}
        <section className="py-16 md:py-24" id="pricing">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ServicePricing 
              serviceName="Pool Cleaning" 
              serviceSlug="location-kuta"
              location="Kuta"
            />
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Kuta Areas We Serve
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

            <WhatsAppCTA variant="section" service="pool cleaning" location="Kuta" />
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <TrustElements variant="guarantees" location="Kuta" className="mb-12" />
            <TrustElements variant="safety" location="Kuta" />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Cleaning Kuta - FAQs
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

            <WhatsAppCTA variant="section" service="pool cleaning" location="Kuta" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <WhatsAppCTA variant="footer" service="pool cleaning service" location="Kuta" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
