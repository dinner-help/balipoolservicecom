import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Droplets, Clock, Shield, Users, Wrench, Sparkles, Phone, MapPin, Star, ArrowRight, Zap, Leaf, AlertTriangle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pool Service Bali",
    "description": "Professional pool cleaning and maintenance services across Bali",
    "url": "https://poolservicebali.com",
    "telephone": "+6282237565997",
    "priceRange": "IDR 2,900,000 - IDR 5,500,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bali",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.6705",
      "longitude": "115.2126"
    },
    "areaServed": [
      { "@type": "City", "name": "Canggu" },
      { "@type": "City", "name": "Seminyak" },
      { "@type": "City", "name": "Ubud" },
      { "@type": "City", "name": "Sanur" },
      { "@type": "City", "name": "Kuta" },
      { "@type": "City", "name": "Denpasar" },
      { "@type": "City", "name": "Jimbaran" },
      { "@type": "City", "name": "Nusa Dua" },
      { "@type": "City", "name": "Uluwatu" }
    ],
    "serviceType": [
      "Pool Cleaning",
      "Pool Maintenance", 
      "Pool Repair",
      "Green Pool Recovery",
      "Chemical Treatment"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "200"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": "Cash, Bank Transfer, QRIS, GoPay, OVO, Dana"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does my pool turn green in rainy season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bali's monsoon season brings heavy rainfall that dilutes pool chemicals, adds organic debris, and creates perfect conditions for algae growth. Without proper treatment, pools can turn green within 48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "How much is weekly pool maintenance in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weekly pool maintenance in Bali ranges from IDR 2,900,000 to IDR 5,500,000 per month depending on pool size and service frequency. All packages include chemicals and equipment checks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include chemicals in your pool service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our maintenance packages include premium 90% pure pool chemicals. We deliver and apply them during each service visit, saving you the hassle of purchasing separately."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pool Cleaning Bali | Professional Pool Maintenance in Canggu, Seminyak, Ubud</title>
        <meta 
          name="description" 
          content="Bali's trusted pool cleaning & maintenance experts. Serving Canggu, Seminyak, Ubud, Sanur, Nusa Dua & all areas. Weekly maintenance from IDR 2.9M. WhatsApp: +62 822-3756-5997" 
        />
        <meta 
          name="keywords" 
          content="pool cleaning bali, pool maintenance bali, pool service canggu, pool cleaning seminyak, green pool bali, villa pool service bali, hotel pool maintenance bali" 
        />
        <link rel="canonical" href="https://poolservicebali.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crystal Clear Pools <br className="hidden md:block" />
              <span className="text-primary">Across All of Bali</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional pool cleaning & maintenance for villas, hotels, and homes. 
              Keep your pool pristine with Bali's most trusted pool service team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white gap-2 text-lg px-8 py-6"
                onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27d%20like%20a%20quote%20for%20pool%20cleaning%20in%20Bali.", "_blank")}
                data-testid="button-hero-whatsapp"
              >
                <FaWhatsapp className="h-5 w-5" />
                Get Free Quote on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 text-lg px-8 py-6"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-pricing"
              >
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION - Why Bali Pools Need Pro Care */}
      <section className="py-20 md:py-28 bg-gray-50" id="problems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Bali Pools Need Professional Care
            </h2>
            <p className="text-lg text-gray-600">
              Bali's tropical climate creates unique challenges that can turn a crystal-clear pool into a green nightmare within 48 hours. Here's what you're up against.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tropical Algae Explosion</h3>
                <p className="text-sm text-gray-600">
                  Bali's warm temperatures (28-32°C year-round) create perfect conditions for algae. Without treatment, your pool can turn green in just 2 days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monsoon Season Chaos</h3>
                <p className="text-sm text-gray-600">
                  Heavy tropical rains dilute chemicals, wash in debris, and throw off pH balance. Pools require extra attention November through March.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Equipment Failures</h3>
                <p className="text-sm text-gray-600">
                  Humidity and salt air corrode pumps and filters faster. Regular maintenance prevents costly emergency repairs and extends equipment life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UV Chlorine Degradation</h3>
                <p className="text-sm text-gray-600">
                  Intense equatorial sun breaks down chlorine rapidly. Pools need proper stabilizer and more frequent chemical adjustment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Guest Complaints</h3>
                <p className="text-sm text-gray-600">
                  For rental villas and hotels, a neglected pool means bad reviews. One green pool photo on TripAdvisor can cost you thousands in bookings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Debris Overload</h3>
                <p className="text-sm text-gray-600">
                  Frangipani flowers, palm fronds, and tropical plants mean constant debris. Without daily skimming, drains clog and staining occurs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white gap-2"
              onClick={() => window.open("https://wa.me/6282237565997", "_blank")}
            >
              <FaWhatsapp className="h-5 w-5" />
              Get Professional Help Now
            </Button>
          </div>
        </div>
      </section>

      {/* 3. SERVICE PACKAGES SECTION */}
      <section className="py-20 md:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pool Service Packages for Every Need
            </h2>
            <p className="text-lg text-gray-600">
              From weekly maintenance to emergency green pool rescue. Choose the package that fits your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Weekly Maintenance */}
            <Card className="hover-elevate border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Maintenance</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Regular cleaning, chemical balancing, and equipment checks to keep your pool crystal clear.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>2-3 visits per week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>All chemicals included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>WhatsApp reports</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4">
                  From IDR 2,900,000<span className="text-sm font-normal text-gray-500">/month</span>
                </div>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20Weekly%20Pool%20Maintenance.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            {/* Green Pool Rescue */}
            <Card className="hover-elevate border-2 border-green-500 hover:border-green-400 transition-all">
              <CardContent className="p-6">
                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Emergency Service
                </div>
                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Green Pool Rescue</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pool turned green? We restore crystal-clear water in 2-3 days with professional algae treatment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Same-day response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Shock treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Filter deep clean</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-green-600 mb-4">
                  From IDR 1,500,000<span className="text-sm font-normal text-gray-500">/treatment</span>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=URGENT!%20My%20pool%20has%20turned%20green.%20Need%20rescue%20service.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Emergency Help
                </Button>
              </CardContent>
            </Card>

            {/* Hotel & Resort */}
            <Card className="hover-elevate border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hotel & Resort</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Daily service contracts for hospitality properties with high guest standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Daily maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Dedicated technician</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Priority response</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4">
                  Custom Pricing<span className="text-sm font-normal text-gray-500">/contract</span>
                </div>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20Hotel%20Pool%20Service%20contract.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Discuss Contract
                </Button>
              </CardContent>
            </Card>

            {/* Equipment Repairs */}
            <Card className="hover-elevate border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Repairs</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pump repairs, filter replacement, light fixes, and all pool equipment services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Pump & filter repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Parts replacement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Leak detection</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-primary mb-4">
                  From IDR 500,000<span className="text-sm font-normal text-gray-500">/service</span>
                </div>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%20need%20pool%20equipment%20repair.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Request Repair
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-gray-50" id="why-us">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Bali Pool Owners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Over a decade of keeping Bali's pools crystal clear. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Experienced Bali Team</h3>
                <p className="text-sm text-gray-600">10+ years serving villa owners, hotels, and resorts across all of Bali.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Chemicals Included</h3>
                <p className="text-sm text-gray-600">Premium 90% pure chemicals delivered and applied. No extra costs or store runs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp Reports</h3>
                <p className="text-sm text-gray-600">Receive photos and updates after every visit. Know your pool is always cared for.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">All Property Types</h3>
                <p className="text-sm text-gray-600">Villas, rentals, hotels, resorts, and private homes. We service them all.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Response Time</h3>
                <p className="text-sm text-gray-600">Same-day emergency service. Regular maintenance always on schedule.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Guaranteed Clarity</h3>
                <p className="text-sm text-gray-600">If your pool isn't crystal clear, we'll fix it free. 100% satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE/AFTER RESULTS SECTION */}
      <section className="py-20 md:py-28 bg-white" id="results">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from Bali Pool Owners
            </h2>
            <p className="text-lg text-gray-600">
              See how we've transformed pools across Bali from neglected to pristine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">Before</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600">After</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Villa Rental in Canggu</h3>
                <p className="text-sm text-gray-600 mb-4">
                  "Pool was completely green after 3 weeks vacant. Pool Service Bali restored it in 48 hours before our guests arrived. Saved our 5-star review!"
                </p>
                <p className="text-xs text-gray-500">— Villa Manager, Berawa</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">Before</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600">After</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Boutique Hotel in Seminyak</h3>
                <p className="text-sm text-gray-600 mb-4">
                  "We switched to Pool Service Bali after constant complaints. Six months later, zero pool issues and our TripAdvisor rating improved."
                </p>
                <p className="text-xs text-gray-500">— Hotel Manager, Seminyak</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">Before</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600">After</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Private Residence in Ubud</h3>
                <p className="text-sm text-gray-600 mb-4">
                  "I live in Australia but own a villa in Ubud. Their weekly reports give me peace of mind. The pool is always ready when I visit."
                </p>
                <p className="text-xs text-gray-500">— Property Owner, Ubud</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS SECTION */}
      <section className="py-20 md:py-28 bg-gray-50" id="service-areas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pool Cleaning Service Areas Across Bali
            </h2>
            <p className="text-lg text-gray-600">
              We provide professional pool maintenance throughout all of Bali's most popular areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Canggu", desc: "Villa rentals & expat homes" },
              { name: "Seminyak", desc: "Tourist villas & boutiques" },
              { name: "Sanur", desc: "Family homes & resorts" },
              { name: "Ubud", desc: "Jungle villas & retreats" },
              { name: "Denpasar", desc: "Residential & commercial" },
              { name: "Uluwatu", desc: "Clifftop villas" },
              { name: "Jimbaran", desc: "Beach resorts" },
              { name: "Nusa Dua", desc: "Luxury hotels & resorts" },
            ].map((area) => (
              <Link key={area.name} href={`/location-${area.name.toLowerCase().replace(' ', '-')}`}>
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">{area.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{area.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Don't see your area? We cover all of Bali! <a href="https://wa.me/6282237565997" className="text-primary hover:underline">WhatsApp us</a> your location.
          </p>
        </div>
      </section>

      {/* 7. HOW IT WORKS SECTION */}
      <section className="py-20 md:py-28 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with professional pool care is simple. Three steps to crystal clear water.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Us</h3>
              <p className="text-gray-600">
                Send your location and pool photos to <span className="font-semibold">+62 822-3756-5997</span>. We'll respond within hours.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Quote</h3>
              <p className="text-gray-600">
                We assess your pool and send a clear price. No hidden fees, no surprises. Just honest pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enjoy Clear Water</h3>
              <p className="text-gray-600">
                Our technicians arrive on schedule. You get WhatsApp updates after every visit. Relax and enjoy.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white gap-2"
              onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27d%20like%20to%20get%20a%20pool%20service%20quote.%20Here%20are%20my%20pool%20details:", "_blank")}
            >
              <FaWhatsapp className="h-5 w-5" />
              Start Now on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what pool owners across Bali have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Sarah M.", location: "Villa Owner – Canggu", text: "Best pool service in Bali. They've been taking care of my rental villa for 2 years. Never had a guest complaint about the pool.", rating: 5 },
              { name: "John T.", location: "Hotel Manager – Seminyak", text: "Professional, reliable, and always on time. Our pool has never looked better. Worth every rupiah.", rating: 5 },
              { name: "Michael R.", location: "Property Manager – Ubud", text: "I manage 8 villas and they handle all the pools. Their WhatsApp reports make my job so much easier.", rating: 5 },
              { name: "Lisa K.", location: "Resort Owner – Nusa Dua", text: "Emergency response is incredible. They saved us when our main pool turned green before a wedding event.", rating: 5 },
              { name: "David P.", location: "Expat – Sanur", text: "Finally found a reliable pool service after trying three others. They actually show up when they say they will.", rating: 5 },
              { name: "Anna S.", location: "Villa Owner – Jimbaran", text: "Living abroad but my Bali pool is always perfect thanks to their team. Weekly reports give me total peace of mind.", rating: 5 },
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about pool maintenance in Bali.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Why does my pool turn green in rainy season?</h3>
                <p className="text-gray-600">
                  Bali's monsoon season brings heavy rainfall that dilutes pool chemicals, adds organic debris, and creates perfect conditions for algae growth. Without proper treatment, pools can turn green within 48 hours. Regular maintenance with proper chemical adjustments prevents this.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">How much is weekly pool maintenance in Bali?</h3>
                <p className="text-gray-600">
                  Weekly pool maintenance in Bali ranges from IDR 2,900,000 to IDR 5,500,000 per month depending on pool size, service frequency, and package level. All our packages include premium chemicals, equipment checks, and WhatsApp reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you include chemicals in your pool service?</h3>
                <p className="text-gray-600">
                  Yes, all our maintenance packages include premium 90% pure pool chemicals. We deliver and apply them during each service visit, saving you the hassle of purchasing separately. This includes chlorine, pH adjusters, algaecide, and stabilizers as needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you work with villa managers?</h3>
                <p className="text-gray-600">
                  Absolutely! Many of our clients are villa managers handling multiple properties. We offer flexible scheduling, consolidated reporting, and volume discounts for property management companies. Contact us on WhatsApp to discuss your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you offer contracts for hotels and resorts?</h3>
                <p className="text-gray-600">
                  Yes, we provide daily maintenance contracts for hotels, resorts, and hospitality properties. These include dedicated technicians, priority emergency response, and custom scheduling to avoid disrupting guests. Contact us for custom commercial pricing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="gap-2">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-white" id="contact">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Crystal Clear Water?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Send us your location and pool photos — get a free quote today. Our team responds within hours.
          </p>
          
          <Button 
            size="lg"
            className="bg-black hover:bg-gray-800 text-white gap-2 text-lg px-8 py-6"
            onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27d%20like%20a%20quote%20for%20pool%20service.%20Here%20are%20my%20pool%20details:", "_blank")}
            data-testid="button-final-cta"
          >
            <FaWhatsapp className="h-5 w-5" />
            Get Your Free Quote on WhatsApp
          </Button>
          
          <p className="text-sm text-white/70 mt-6">
            WhatsApp: +62 822-3756-5997 • Available 24/7 for emergencies
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 md:py-28 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Clear, honest pricing with no hidden fees. All packages include premium chemicals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Silver Package</h3>
                <p className="text-sm text-gray-500 mb-6">For private villas & homes</p>
                <div className="text-4xl font-bold text-primary mb-2">IDR 2,900,000</div>
                <p className="text-sm text-gray-500 mb-6">/month</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>2 visits per week (8/month)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Complete cleaning & vacuuming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Water testing & pH balancing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Premium chemicals included</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20the%20Silver%20Package.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Get Silver Package
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gold Package</h3>
                <p className="text-sm text-gray-500 mb-6">For rental villas & luxury homes</p>
                <div className="text-4xl font-bold text-primary mb-2">IDR 3,900,000</div>
                <p className="text-sm text-gray-500 mb-6">/month</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>3 visits per week (12/month)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Everything in Silver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Monthly deep filter cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Priority emergency response</span>
                  </li>
                </ul>
                <Button 
                  className="w-full gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20the%20Gold%20Package.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Get Gold Package
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Platinum Package</h3>
                <p className="text-sm text-gray-500 mb-6">For estates & boutique hotels</p>
                <div className="text-4xl font-bold text-primary mb-2">IDR 5,500,000</div>
                <p className="text-sm text-gray-500 mb-6">/month</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Daily checks + 3 full services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Everything in Gold</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Dedicated technician</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>2-hour emergency response</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white gap-2"
                  onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20the%20Platinum%20Package.", "_blank")}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Get Platinum Package
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 text-gray-500">
            <p>All prices in Indonesian Rupiah. Prepay quarterly for 5% discount, annually for 10% discount.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
