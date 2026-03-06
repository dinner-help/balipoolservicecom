import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, Droplets, Shield, Clock, Award, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function WeeklyPoolMaintenanceBali() {
  const serviceAreas = [
    { name: "Seminyak", slug: "/location-seminyak" },
    { name: "Canggu", slug: "/location-canggu" },
    { name: "Ubud", slug: "/location-ubud" },
    { name: "Kuta", slug: "/location-kuta" },
    { name: "Sanur", slug: "/location-sanur" },
    { name: "Nusa Dua", slug: "/location-nusa-dua" },
    { name: "Jimbaran", slug: "/location-jimbaran" },
    { name: "Uluwatu", slug: "/location-uluwatu" },
    { name: "Denpasar", slug: "/location-denpasar" },
    { name: "Kerobokan", slug: "/location-kerobokan" },
    { name: "Legian", slug: "/location-legian" },
    { name: "Pererenan", slug: "/location-pererenan" },
  ];

  const faqs = [
    {
      question: "What is included in weekly pool maintenance in Bali?",
      answer: "Our weekly pool maintenance includes surface skimming, vacuuming, wall brushing, water testing, chemical balancing, filter backwashing, skimmer cleaning, and equipment inspection. All chemicals and supplies are included in your monthly rate."
    },
    {
      question: "How many times per week should my Bali pool be maintained?",
      answer: "For most residential pools in Bali, 1-4 visits per week is optimal. Our Silver Package offers 1 visit/week (IDR 800K/month), Gold Package provides 2 visits/week (IDR 1.5M/month). High-use commercial pools benefit from our Platinum Package with 4 visits/week (IDR 2.8M/month)."
    },
    {
      question: "What does weekly pool maintenance cost in Bali?",
      answer: "Weekly pool maintenance in Bali starts from IDR 800,000/month for 1 visit/week (Silver Package), IDR 1,500,000/month for 2 visits/week (Gold Package), or IDR 2,800,000/month for 4 visits/week (Platinum Package). All packages include chemicals, supplies, and WhatsApp support."
    },
    {
      question: "Can I schedule pool maintenance around my rental guests?",
      answer: "Absolutely! We specialize in working with rental properties and can schedule visits during checkout periods or early mornings. We coordinate with property managers to ensure pools are guest-ready without disruption."
    },
    {
      question: "What happens if I need service outside my regular schedule?",
      answer: "All packages include WhatsApp support. Gold and Platinum packages include priority emergency response (4-hour and 2-hour respectively). Additional visits can be added for IDR 500,000/month."
    },
    {
      question: "Do you provide service reports for weekly maintenance?",
      answer: "Yes! You receive WhatsApp updates after each visit with photos and water chemistry readings. Gold and Platinum packages include detailed monthly water quality reports documenting all service activities and pool conditions."
    },
  ];

  const relatedServices = [
    { name: "Pool Cleaning Service", slug: "/pool-cleaning-service-bali", description: "One-time deep cleaning" },
    { name: "Chemical Balancing", slug: "/chemical-balancing-service-bali", description: "Water chemistry expertise" },
    { name: "Pool Filter Cleaning", slug: "/pool-filter-cleaning-repair-bali", description: "Filter maintenance" },
    { name: "Pool Water Testing", slug: "/pool-water-testing-service-bali", description: "Chemistry analysis" },
    { name: "Green Pool Recovery", slug: "/green-pool-cleaning-bali", description: "Algae removal" },
    { name: "Villa Pool Service", slug: "/villa-pool-service-bali", description: "Residential solutions" },
  ];

  return (
    <>
      <Helmet>
        <title>Weekly Pool Maintenance Bali | Scheduled Pool Care from IDR 800K/Month — Chemicals Included</title>
        <meta name="description" content="Professional weekly pool maintenance in Bali for villas, hotels & homes. 4–16 visits/month, all chemicals included, WhatsApp report after every visit. Crystal-clear pools year-round. Call: +62 822-3756-5997" />
        <meta name="keywords" content="weekly pool maintenance Bali, pool maintenance service Bali, scheduled pool care Bali, regular pool cleaning Bali, pool service contract Bali, villa pool maintenance Bali" />
        <meta property="og:title" content="Weekly Pool Maintenance Bali | Professional Pool Care" />
        <meta property="og:description" content="Regular scheduled pool maintenance for Bali villas & hotels. From IDR 800K/month. Chemicals included. 24/7 WhatsApp support." />
        <link rel="canonical" href="https://balipoolservice.com/weekly-pool-maintenance-bali" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Weekly Pool Maintenance Bali",
            "description": "Professional weekly pool maintenance service for villas, hotels, and private pools in Bali",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bali Pool Service",
              "telephone": "+62-822-3756-5997"
            },
            "areaServed": "Bali, Indonesia",
            "priceRange": "IDR 800,000 - IDR 2,800,000/month"
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-4">
              <Calendar className="h-5 w-5" />
              <span>Scheduled Pool Care in Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Weekly Pool Maintenance in Bali — Chemicals Included
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Keep your <strong>Bali pool</strong> crystal clear year-round with professional <strong>weekly pool maintenance</strong>. 4–16 visits per month, all chemicals included, WhatsApp report after every visit. Serving <strong>villas</strong>, <strong>hotels</strong>, and <strong>private pools</strong> across all of Bali.
            </p>

            <TrustElements variant="compact" className="mb-8" />

            <WhatsAppCTA 
              variant="hero" 
              service="weekly pool maintenance" 
              location="Bali"
              buttonText="Get Maintenance Quote"
            />
          </div>
        </div>
      </section>

      {/* What Weekly Maintenance Includes */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Weekly Pool Maintenance in Bali Includes
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Our <strong>weekly pool maintenance</strong> covers every aspect of pool care to keep your Bali pool safe, clean, and inviting throughout the year.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Pool Cleaning</h3>
                <p className="text-muted-foreground mb-4">
                  Every visit includes surface skimming, pool floor vacuuming, wall brushing, and tile line cleaning to keep your pool sparkling.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Net skimming of debris</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Complete floor vacuuming</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Wall and tile brushing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Chemistry Management</h3>
                <p className="text-muted-foreground mb-4">
                  Professional <strong>water testing</strong> and <strong>chemical balancing</strong> at every visit to maintain safe, comfortable swimming conditions.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> pH level testing & adjustment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Chlorine/sanitizer balance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Alkalinity optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Equipment Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Regular inspection and maintenance of <strong>pool pump</strong>, filter system, and all equipment to prevent costly repairs.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Filter backwashing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Pump performance checks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Skimmer basket cleaning</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <WhatsAppCTA variant="section" service="weekly pool maintenance" location="Bali" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefits of Weekly Pool Maintenance in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Regular <strong>scheduled maintenance</strong> is essential in Bali's tropical climate where pools face unique challenges from heat, humidity, and rain.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Prevent Algae Growth</h3>
                  <p className="text-muted-foreground">Bali's warm temperatures promote rapid algae growth. Weekly maintenance catches problems before your pool turns green.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Extend Equipment Life</h3>
                  <p className="text-muted-foreground">Regular inspection and maintenance of pumps, filters, and plumbing prevents expensive emergency repairs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Always Guest-Ready</h3>
                  <p className="text-muted-foreground">For rental villas and hotels, scheduled maintenance ensures your pool is always photo-worthy for guests.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Consistent Water Quality</h3>
                  <p className="text-muted-foreground">Regular chemical balancing maintains safe, comfortable water that's gentle on skin and eyes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Predictable Costs</h3>
                  <p className="text-muted-foreground">Fixed monthly pricing with all chemicals included means no surprise bills or fluctuating costs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Peace of Mind</h3>
                  <p className="text-muted-foreground">Whether you're in Bali or overseas, know your pool is being professionally maintained.</p>
                </div>
              </div>
            </div>
          </div>

          <TrustElements variant="experience" location="Bali" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServicePricing 
            serviceName="Weekly Pool Maintenance" 
            serviceSlug="weekly-pool-maintenance-bali"
            location="Bali"
          />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weekly Pool Maintenance Service Areas in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            We provide scheduled <strong>weekly pool maintenance</strong> across all major areas in Bali.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={area.slug}>
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">{area.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <WhatsAppCTA variant="section" service="weekly maintenance" location="Bali" />
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <TrustElements variant="guarantees" location="Bali" className="mb-12" />
          <TrustElements variant="safety" location="Bali" />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weekly Pool Maintenance FAQs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <WhatsAppCTA variant="section" service="weekly pool maintenance" location="Bali" />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Related Pool Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.slug}>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <WhatsAppCTA variant="footer" service="weekly pool maintenance" location="Bali" />
        </div>
      </section>

      <Footer />
    </>
  );
}
