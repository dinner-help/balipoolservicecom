import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Droplets, Sparkles, Shield, Clock, Award, Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { TrustElements } from "@/components/trust-elements";
import { ServicePricing } from "@/components/service-pricing";

export default function PoolCleaningServiceBali() {
  const serviceKeywords = {
    primary: "pool cleaning service Bali",
    secondary: ["pool cleaner Bali", "swimming pool cleaning Bali", "villa pool cleaning Bali", "professional pool cleaning Bali"],
    longTail: ["best pool cleaning service in Bali", "affordable pool cleaning Bali", "pool cleaning service near me Bali", "weekly pool cleaning service Bali", "hotel pool cleaning Bali"],
    semantic: ["pool maintenance", "water treatment", "algae removal", "pool vacuuming", "pool skimming", "filter cleaning", "chemical balancing"],
  };

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
      question: "How often should I have my pool cleaned in Bali?",
      answer: "In Bali's tropical climate, we recommend professional pool cleaning 1-4 times per week. The high humidity, frequent rain, and warm temperatures accelerate algae growth. Our Silver Package (1x weekly) suits basic homes, Gold Package (2x weekly) for rental properties, and Platinum Package (4x weekly) is ideal for hotels and resorts."
    },
    {
      question: "What is included in your pool cleaning service?",
      answer: "Our comprehensive pool cleaning service includes surface skimming, pool vacuuming, wall and tile brushing, water chemistry testing and balancing, filter backwashing, skimmer basket cleaning, and equipment inspection. We use premium 90% pure chemicals for safer, more effective treatment."
    },
    {
      question: "How much does pool cleaning cost in Bali?",
      answer: "Pool cleaning in Bali ranges from IDR 800,000 to IDR 2,800,000 per month depending on service frequency. Our Silver Package starts at IDR 800,000/month (1 visit/week), Gold Package at IDR 1,500,000/month (2 visits/week), and Platinum Package at IDR 2,800,000/month (4 visits/week). All packages include chemicals and supplies."
    },
    {
      question: "Do you offer one-time pool cleaning for green pools?",
      answer: "Yes! We offer one-time deep cleaning services for green, neglected, or algae-covered pools starting from IDR 1,125,000. This includes shock treatment, algae removal, complete vacuuming, filter cleaning, and full water chemistry rebalancing. Most green pools are swim-ready within 24-48 hours."
    },
    {
      question: "Can you clean my pool while I'm away from my villa?",
      answer: "Absolutely! Many of our clients are overseas property owners or property managers. We offer secure key management, photo/video service reports via WhatsApp, and complete pool care while you're away. Your pool will always be guest-ready."
    },
    {
      question: "What areas in Bali do you service for pool cleaning?",
      answer: "We provide pool cleaning services across all of Bali including Seminyak, Canggu, Ubud, Kuta, Sanur, Nusa Dua, Jimbaran, Uluwatu, Denpasar, Kerobokan, Legian, and Pererenan. We serve private villas, rental properties, hotels, resorts, and commercial pools island-wide."
    },
    {
      question: "What chemicals do you use for pool cleaning?",
      answer: "We use premium 90% pure, NSF-certified chemicals that are safer for skin and eyes, and more environmentally friendly. Our international-grade chemicals are more concentrated, requiring 50% less product while delivering superior results. We offer both chlorine and saltwater pool treatment options."
    },
    {
      question: "How quickly can you start pool cleaning service?",
      answer: "We can typically begin service within 24-48 hours of your inquiry. For urgent or emergency pool cleaning needs, we offer same-day response. Simply WhatsApp us at +62 823-2301-1656 with your location and pool photos for a quick quote."
    },
  ];

  const relatedServices = [
    { name: "Weekly Pool Maintenance", slug: "/weekly-pool-maintenance-bali", description: "Scheduled maintenance plans" },
    { name: "Chemical Balancing", slug: "/chemical-balancing-service-bali", description: "Water chemistry expertise" },
    { name: "Green Pool Cleaning", slug: "/green-pool-cleaning-bali", description: "Algae removal specialists" },
    { name: "Pool Filter Cleaning", slug: "/pool-filter-cleaning-repair-bali", description: "Filter maintenance" },
    { name: "Pool Vacuuming", slug: "/pool-vacuuming-service-bali", description: "Deep floor cleaning" },
    { name: "Pool Water Testing", slug: "/pool-water-testing-service-bali", description: "Chemistry analysis" },
  ];

  return (
    <>
      <Helmet>
        <title>Pool Cleaning Service Bali | Expert Villa & Hotel Pool Cleaners — From IDR 800K/Month</title>
        <meta name="description" content="Top-rated pool cleaning service in Bali for villas, hotels & private homes. All chemicals included, WhatsApp report after every visit. Weekly cleaning from IDR 800K/month. 500+ clients, 10+ years experience. Call: +62 823-2301-1656" />
        <meta name="keywords" content={[serviceKeywords.primary, ...serviceKeywords.secondary, ...serviceKeywords.longTail].join(", ")} />
        <meta property="og:title" content="Pool Cleaning Service Bali | Professional Pool Cleaners" />
        <meta property="og:description" content="Expert pool cleaning for Bali villas, hotels & resorts. Crystal-clear pools guaranteed. From IDR 800K/month. Fast response, transparent pricing." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://balipoolservice.com/pool-cleaning-service-bali" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pool Cleaning Service Bali",
            "description": "Professional pool cleaning service for villas, hotels, and private pools in Bali, Indonesia",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bali Pool Service",
              "telephone": "+62-823-2301-1656",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bali",
                "addressCountry": "ID"
              }
            },
            "areaServed": serviceAreas.map(a => a.name).join(", "),
            "priceRange": "IDR 800,000 - IDR 2,800,000/month"
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section with Primary Keywords */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-4">
              <Droplets className="h-5 w-5" />
              <span>Professional Pool Cleaning Service in Bali</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Professional Pool Cleaning Service in Bali
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bali's most trusted <strong>pool cleaning service</strong> for <strong>villas</strong>, <strong>hotels</strong>, and <strong>private homes</strong>. All chemicals included, WhatsApp report after every visit. Trusted by 500+ property owners across Seminyak, Canggu, Ubud, and all of Bali.
            </p>

            <TrustElements variant="compact" className="mb-8" />

            <WhatsAppCTA 
              variant="hero" 
              service="pool cleaning service" 
              location="Bali" 
              buttonText="Get Free Pool Cleaning Quote"
            />
          </div>
        </div>
      </section>

      {/* What Pool Cleaning Service Covers */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Pool Cleaning Service in Bali Includes
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Our comprehensive <strong>pool cleaning service</strong> covers every aspect of pool maintenance to keep your <strong>swimming pool</strong> sparkling clean and safe for swimming in Bali's tropical climate.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card data-testid="card-skimming">
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Surface Skimming & Debris Removal</h3>
                <p className="text-muted-foreground mb-4">
                  Complete removal of leaves, insects, and floating debris from your pool surface. Essential in Bali where tropical vegetation constantly drops into pools.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Net skimming of entire surface</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Skimmer basket cleaning</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Removal of organic matter</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-vacuuming">
              <CardContent className="p-6">
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Pool Vacuuming & Brushing</h3>
                <p className="text-muted-foreground mb-4">
                  Thorough vacuuming of pool floor and walls to remove settled debris, algae spores, and sediment that makes pools look dirty.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Complete floor vacuuming</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Wall and tile brushing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Step and ledge cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-chemistry">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Water Chemistry & Balancing</h3>
                <p className="text-muted-foreground mb-4">
                  Professional water testing and <strong>chemical balancing</strong> to maintain safe pH, chlorine, and alkalinity levels for swimmer comfort and health.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> pH level testing & adjustment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Chlorine/sanitizer balancing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Alkalinity optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-filter">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Filter Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Regular <strong>filter backwashing</strong> and cleaning to maintain optimal water circulation and clarity. Essential for Bali pools with heavy use.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Filter backwashing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Pressure monitoring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Deep filter cleaning (monthly)</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-equipment">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Equipment Inspection</h3>
                <p className="text-muted-foreground mb-4">
                  Regular inspection of <strong>pool pump</strong>, filter system, and plumbing to catch problems early and prevent costly repairs.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Pump performance check</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Plumbing leak inspection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Equipment condition report</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-reports">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Service Reports & Support</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed service reports via WhatsApp with photos, water chemistry readings, and recommendations for your pool.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Photo/video documentation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Chemistry test results</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> WhatsApp support 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <WhatsAppCTA 
            variant="section" 
            service="pool cleaning service" 
            location="Bali"
          />
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who Uses Our Pool Cleaning Service in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Our professional <strong>pool cleaning service</strong> is trusted by property owners throughout Bali. Whether you own a private villa, manage rental properties, or operate a hotel, we keep your pools pristine.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-elevate" data-testid="card-villa-owners">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Villa & Homeowners</h3>
                <p className="text-muted-foreground mb-6">
                  Own a <strong>Bali villa with a pool</strong>? Our weekly cleaning service keeps your pool ready for family use and entertaining guests. Perfect for expats, retirees, and local homeowners who want hassle-free pool care.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Consistent weekly service schedule</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>All chemicals and supplies included</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Dedicated technician for your property</span></li>
                </ul>
                <Link href="/villa-pool-service-bali" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  Learn more about villa pool service <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-rental-managers">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Rental Property Managers</h3>
                <p className="text-muted-foreground mb-6">
                  Keep your <strong>Airbnb, Booking.com, or rental villa pools</strong> photo-worthy and guest-ready. Clean pools boost reviews and attract more bookings. We work around your guest schedule.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Flexible scheduling around guests</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Before-checkout pool refresh service</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Multi-property discounts available</span></li>
                </ul>
                <Link href="/property-manager-pool-service-bali" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  See property manager solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-hotels">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Hotels, Resorts & Guesthouses</h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Hotel and resort pools</strong> require daily attention to health and safety standards. We provide commercial-grade pool cleaning with full compliance documentation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Daily service available</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Health & safety compliance</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Early morning scheduling</span></li>
                </ul>
                <Link href="/hotel-resort-pool-service-bali" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  Hotel pool service details <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-developers">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Developers & Property Companies</h3>
                <p className="text-muted-foreground mb-6">
                  Managing multiple properties? We offer bulk service contracts and can coordinate <strong>pool cleaning schedules</strong> across your entire portfolio in Bali.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Volume pricing discounts</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Centralized billing</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <span>Portfolio management dashboard</span></li>
                </ul>
                <WhatsAppCTA variant="compact" service="bulk pool cleaning" location="Bali" buttonText="Discuss Portfolio Pricing" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServicePricing 
            serviceName="Pool Cleaning Service" 
            serviceSlug="pool-cleaning-service-bali"
            location="Bali"
            showPackages={true}
            showOneTime={true}
            showQuoteExample={true}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Our Pool Cleaning Service in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            With 10+ years serving Bali's pool owners, we understand the unique challenges of maintaining pools in this tropical paradise.
          </p>

          <TrustElements variant="experience" location="Bali" className="mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Tropical Climate Expertise</h3>
                <p className="text-sm text-muted-foreground">We understand Bali's rainfall patterns, algae challenges, and humidity effects on pools. Our methods are optimized for tropical conditions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Premium 90% Pure Chemicals</h3>
                <p className="text-sm text-muted-foreground">We use NSF-certified, international-grade chemicals that are safer for skin and eyes, and more effective with 50% less product needed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Reliable & Punctual</h3>
                <p className="text-sm text-muted-foreground">Our technicians arrive on time, every time. We respect your schedule and work quietly around your guests.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Bilingual Team</h3>
                <p className="text-sm text-muted-foreground">English and Indonesian speaking technicians make communication easy for international villa owners.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">WhatsApp Support 24/7</h3>
                <p className="text-sm text-muted-foreground">Direct communication with your technician and our support team via WhatsApp for any questions or emergencies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees, no surprise charges. The price we quote is the price you pay, with all chemicals and supplies included.</p>
              </div>
            </div>
          </div>

          <TrustElements variant="guarantees" location="Bali" />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Cleaning Service Areas in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            We provide professional <strong>pool cleaning service</strong> across all major areas in Bali. Click your location for local pricing and service details.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={area.slug}>
                <Card className="hover-elevate cursor-pointer" data-testid={`card-area-${area.name.toLowerCase()}`}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">Pool Cleaning {area.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <WhatsAppCTA 
            variant="section" 
            service="pool cleaning" 
            location="Bali"
            message="Hi! I need pool cleaning service in [YOUR AREA]. Can you provide a quote?"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Our Pool Cleaning Service Works
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Getting started with our <strong>pool cleaning service in Bali</strong> is easy. Here's how to get your pool sparkling clean.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Contact Us on WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Send your property location and pool photos to +62 823-2301-1656</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Get Your Custom Quote</h3>
              <p className="text-sm text-muted-foreground">We assess your pool and recommend the right package with transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">First Service Visit</h3>
              <p className="text-sm text-muted-foreground">Our team performs a deep clean, tests water chemistry, and inspects equipment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Ongoing Care</h3>
              <p className="text-sm text-muted-foreground">Regular scheduled visits keep your pool perfect with WhatsApp updates</p>
            </div>
          </div>

          <WhatsAppCTA 
            variant="hero" 
            service="pool cleaning" 
            location="Bali"
            buttonText="Start Pool Cleaning Service"
          />
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <TrustElements variant="safety" location="Bali" />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Cleaning Service Bali - Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Common questions about our <strong>pool cleaning service</strong> in Bali. Can't find your answer? WhatsApp us at +62 823-2301-1656.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} data-testid={`faq-${index}`}>
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
            location="Bali"
            message="Hi! I have a question about pool cleaning service in Bali."
          />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Related Pool Services in Bali
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Explore our other professional pool services to keep your Bali pool in perfect condition.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.slug}>
                <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-service-${index}`}>
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
          <WhatsAppCTA 
            variant="footer" 
            service="pool cleaning service" 
            location="Bali"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
