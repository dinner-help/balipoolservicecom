import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, CheckCircle2, Star, ArrowRight, Droplets, Shield, Award, Mountain, Leaf } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function UbudPoolCleaning() {
  const services = [
    { name: "Mountain Pool Care", description: "Specialized highland water treatment", link: "/pool-cleaning-service-bali" },
    { name: "Eco-Friendly Options", description: "Sustainable chemical alternatives", link: "/chemical-balancing-service-bali" },
    { name: "Weekly Maintenance", description: "Regular scheduled service visits", link: "/weekly-pool-maintenance-bali" },
    { name: "Resort-Grade Service", description: "Luxury property standards", link: "/hotel-resort-pool-service-bali" },
    { name: "Green Pool Recovery", description: "Algae and water restoration", link: "/green-pool-cleaning-bali" },
    { name: "Equipment Maintenance", description: "Pump and filter servicing", link: "/pool-pump-repair-bali" },
  ];

  const neighborhoods = [
    "Ubud Center", "Tegallalang", "Campuhan", "Penestanan",
    "Mas", "Peliatan", "Lodtunduh", "Sayan"
  ];

  const nearbyLocations = [
    { name: "Gianyar", slug: "/location-gianyar" },
    { name: "Denpasar", slug: "/location-denpasar" },
    { name: "Sanur", slug: "/location-sanur" },
    { name: "Candidasa", slug: "/location-candidasa" },
  ];

  const faqs = [
    {
      question: "How much does pool cleaning cost in Ubud?",
      answer: "Pool cleaning in Ubud starts from IDR 800,000/month for our Silver Package (1 visit/week). Our Gold Package is IDR 1,500,000/month for 2 visits/week, and Platinum is IDR 2,800,000/month for 4 visits/week. All chemicals and supplies included."
    },
    {
      question: "What's different about pool maintenance in Ubud?",
      answer: "Ubud's highland location means different water chemistry challenges, higher organic debris from rice terraces, and unique mineral content. Our technicians are trained in mountain pool care."
    },
    {
      question: "Do you service all areas of Ubud?",
      answer: "Yes! We cover all Ubud areas including Ubud Center, Tegallalang, Campuhan, Penestanan, Mas, Peliatan, Lodtunduh, and Sayan. We travel to even remote jungle villas."
    },
    {
      question: "Can you handle eco-resort pool requirements?",
      answer: "Absolutely! Many Ubud eco-resorts trust us for sustainable pool care. We offer eco-friendly chemical options and work within your environmental guidelines."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Ubud Bali | Mountain Villa & Eco-Resort Pool Service — From IDR 800K/Month</title>
        <meta name="description" content="Professional pool cleaning in Ubud for highland villas, eco-resorts & jungle retreats. Organic-friendly chemicals, jungle debris specialists. From IDR 800K/month. WhatsApp: +62 823-4070-9041" />
        <meta name="keywords" content="pool cleaning Ubud, Ubud pool maintenance, mountain pool service Bali, rice terrace villa pool cleaning, eco pool cleaning Ubud, Tegallalang pool service, Penestanan pool maintenance" />
        <meta property="og:title" content="Pool Cleaning Ubud | Mountain Villa Bali Pool Service" />
        <meta property="og:description" content="Expert pool cleaning in Ubud. Serving Tegallalang, Campuhan, Sayan & all areas. From IDR 800K/month." />
        <link rel="canonical" href="https://balipoolservice.com/location-ubud" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bali Pool Service - Ubud",
            "description": "Professional pool cleaning for mountain villas and resorts in Ubud, Bali",
            "telephone": "+62-823-4070-9041",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ubud",
              "addressRegion": "Bali",
              "addressCountry": "ID"
            },
            "areaServed": ["Ubud", "Tegallalang", "Campuhan", "Penestanan", "Sayan"],
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
                <Mountain className="h-4 w-4" />
                <span className="text-sm font-semibold">Ubud Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pool Cleaning in Ubud, Bali — Mountain Villa & Eco-Resort Specialists
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Specialized <strong>pool cleaning</strong> for Ubud's <strong>mountain villas</strong>, <strong>eco-resorts</strong>, and <strong>jungle retreats</strong>. Organic-friendly chemicals, jungle debris management, highland water quality experts. Serving Tegallalang, Campuhan, Sayan, and all Ubud areas.
              </p>

              <TrustElements variant="compact" className="mb-8" />

              <WhatsAppCTA 
                variant="hero" 
                service="pool cleaning" 
                location="Ubud"
                buttonText="Get Free Ubud Quote"
              />
            </div>
          </div>
        </section>

        {/* Why Ubud Properties Need Specialized Pool Maintenance */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Ubud Pools Need Specialized Maintenance
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Ubud's unique highland environment creates specific challenges for <strong>pool maintenance</strong> that require specialized expertise.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Mountain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Highland Water Chemistry</h3>
                  <p className="text-muted-foreground">
                    Ubud's mountain water sources have different mineral content and pH levels. Our <strong>Ubud pool cleaning</strong> experts understand these unique characteristics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Leaf className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Jungle Environment</h3>
                  <p className="text-muted-foreground">
                    Rice terraces and tropical vegetation mean more organic debris. We handle the extra maintenance needs of <strong>jungle pool care</strong> effectively.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Droplets className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Eco-Resort Standards</h3>
                  <p className="text-muted-foreground">
                    Many Ubud properties prioritize sustainability. We offer eco-friendly <strong>pool maintenance</strong> options that align with environmental values.
                  </p>
                </CardContent>
              </Card>
            </div>

            <TrustElements variant="experience" location="Ubud" />
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Services in Ubud
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
                  <div className="text-2xl font-bold mb-1">45 Min</div>
                  <div className="text-xs text-muted-foreground">Average Response</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">80+</div>
                  <div className="text-xs text-muted-foreground">Ubud Clients</div>
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
              serviceSlug="location-ubud"
              location="Ubud"
            />
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Ubud Areas We Serve
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

            <WhatsAppCTA variant="section" service="pool cleaning" location="Ubud" />
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <TrustElements variant="guarantees" location="Ubud" className="mb-12" />
            <TrustElements variant="safety" location="Ubud" />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Cleaning Ubud - FAQs
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

            <WhatsAppCTA variant="section" service="pool cleaning" location="Ubud" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <WhatsAppCTA variant="footer" service="pool cleaning service" location="Ubud" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
