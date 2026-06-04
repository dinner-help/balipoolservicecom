import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, CheckCircle2, Star, ArrowRight, Droplets, Shield, Award, Users } from "lucide-react";
import { Link } from "wouter";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function SeminyakPoolCleaning() {
  const services = [
    { name: "Weekly Pool Cleaning", description: "Regular maintenance to keep your pool pristine", link: "/weekly-pool-maintenance-bali" },
    { name: "Water Chemistry Balancing", description: "Professional testing and chemical adjustment", link: "/chemical-balancing-service-bali" },
    { name: "Pool Filter Cleaning", description: "Deep filter maintenance and backwashing", link: "/pool-filter-cleaning-repair-bali" },
    { name: "Green Pool Recovery", description: "Algae removal and pool restoration", link: "/green-pool-cleaning-bali" },
    { name: "Pool Equipment Repair", description: "Pump, filter, and equipment fixes", link: "/pool-pump-repair-bali" },
    { name: "Emergency Service", description: "Same-day urgent pool repairs", link: "/emergency-pool-repair-bali" },
  ];

  const neighborhoods = [
    "Petitenget", "Oberoi", "Kayu Aya", "Seminyak Square", 
    "Batu Belig", "Drupadi Street", "Dhyana Pura", "Sunset Road"
  ];

  const nearbyLocations = [
    { name: "Kerobokan", slug: "/location-kerobokan" },
    { name: "Legian", slug: "/location-legian" },
    { name: "Canggu", slug: "/location-canggu" },
    { name: "Kuta", slug: "/location-kuta" },
  ];

  const faqs = [
    {
      question: "How much does pool cleaning cost in Seminyak?",
      answer: "Pool cleaning in Seminyak starts from IDR 800,000/month for our Silver Package (1 visit/week). Our Gold Package includes 2 visits/week at IDR 1,500,000/month. Platinum Package with 2 visits/week is IDR 2,800,000/month. All prices include chemicals and supplies."
    },
    {
      question: "Do you service all areas of Seminyak?",
      answer: "Yes! We cover all Seminyak neighborhoods including Petitenget, Oberoi, Kayu Aya, Batu Belig, Drupadi Street, Dhyana Pura, and Sunset Road. We also serve nearby areas like Kerobokan and Legian."
    },
    {
      question: "How quickly can you start service in Seminyak?",
      answer: "We can typically begin service within 24-48 hours. For emergencies, we offer same-day response in Seminyak. WhatsApp us at +62 823-2301-1656 for immediate assistance."
    },
    {
      question: "Do you work with Seminyak villa rental managers?",
      answer: "Absolutely! Many Seminyak property managers trust us for their villa portfolios. We offer flexible scheduling around guest check-ins, multi-property discounts, and WhatsApp service reports."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Seminyak Bali | Luxury Villa & Resort Pool Service — From IDR 800K/Month</title>
        <meta name="description" content="Expert pool cleaning in Seminyak for luxury villas, boutique resorts & vacation rentals. Weekly maintenance from IDR 800K/month — all chemicals included. Same-day service available. WhatsApp: +62 823-2301-1656" />
        <meta name="keywords" content="pool cleaning Seminyak, Seminyak pool maintenance, villa pool service Seminyak, pool cleaner Seminyak Bali, swimming pool cleaning Seminyak, pool service Petitenget, pool cleaning Oberoi, Batu Belig pool maintenance" />
        <meta property="og:title" content="Pool Cleaning Seminyak | Professional Bali Pool Service" />
        <meta property="og:description" content="Expert pool cleaning in Seminyak. Serving Petitenget, Oberoi, Batu Belig & all areas. From IDR 800K/month." />
        <link rel="canonical" href="https://balipoolservice.com/location-seminyak" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bali Pool Service - Seminyak",
            "description": "Professional pool cleaning and maintenance service in Seminyak, Bali",
            "telephone": "+62-823-2301-1656",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Seminyak",
              "addressRegion": "Bali",
              "addressCountry": "ID"
            },
            "areaServed": ["Seminyak", "Petitenget", "Oberoi", "Batu Belig", "Kayu Aya"],
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
                <span className="text-sm font-semibold">Seminyak Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pool Cleaning in Seminyak, Bali — Luxury Villa & Resort Specialists
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional <strong>pool cleaning</strong> and <strong>maintenance</strong> for Seminyak's <strong>luxury villas</strong>, <strong>vacation rentals</strong>, and <strong>boutique resorts</strong>. All chemicals included, WhatsApp report after every visit. Trusted by 200+ property owners in Petitenget, Oberoi, Batu Belig, and all Seminyak areas.
              </p>

              <TrustElements variant="compact" className="mb-8" />

              <WhatsAppCTA 
                variant="hero" 
                service="pool cleaning" 
                location="Seminyak"
                buttonText="Get Free Seminyak Quote"
              />
            </div>
          </div>
        </section>

        {/* Why Seminyak Needs Professional Pool Maintenance */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Seminyak Properties Need Professional Pool Maintenance
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Seminyak's coastal environment and high-end tourism market demand expert <strong>pool maintenance</strong> to protect your property investment.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Droplets className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Coastal Climate Challenges</h3>
                  <p className="text-muted-foreground">
                    Seminyak's beachfront location means higher humidity (75-85%) and salt air that accelerates algae growth and equipment corrosion. Professional <strong>pool cleaning in Seminyak</strong> prevents costly damage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">High Rental Turnover</h3>
                  <p className="text-muted-foreground">
                    <strong>Seminyak villa rentals</strong> see constant guest turnover. Crystal-clear water is essential for 5-star reviews and repeat bookings. We ensure your pool is always photo-ready.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">International Standards</h3>
                  <p className="text-muted-foreground">
                    Seminyak properties cater to international guests expecting EU/USA pool safety standards. We use NSF-certified chemicals and maintain professional documentation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <TrustElements variant="experience" location="Seminyak" />
          </div>
        </section>

        {/* Services in Seminyak */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Services in Seminyak
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Complete <strong>pool care solutions</strong> for Seminyak villas, hotels, and private homes.
            </p>
            
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
                  <div className="text-2xl font-bold mb-1">200+</div>
                  <div className="text-xs text-muted-foreground">Seminyak Clients</div>
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
              serviceSlug="location-seminyak"
              location="Seminyak"
            />
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Seminyak Neighborhoods We Serve
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our technicians are familiar with every street and villa complex in Seminyak. We provide <strong>pool cleaning services</strong> throughout these areas:
            </p>
            
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

            <WhatsAppCTA 
              variant="section" 
              service="pool cleaning" 
              location="Seminyak"
            />
          </div>
        </section>

        {/* Trust & Guarantees */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <TrustElements variant="guarantees" location="Seminyak" className="mb-12" />
            <TrustElements variant="safety" location="Seminyak" />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Pool Cleaning Seminyak - FAQs
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

            <WhatsAppCTA 
              variant="section" 
              service="pool cleaning" 
              location="Seminyak"
              message="Hi! I have a question about pool service in Seminyak."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <WhatsAppCTA 
              variant="footer" 
              service="pool cleaning service" 
              location="Seminyak"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
