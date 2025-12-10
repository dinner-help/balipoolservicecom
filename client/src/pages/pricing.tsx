import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Sparkles, Users, Wrench, Hammer, Snowflake, AlertTriangle, Phone, Star, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bali Pool Service - Pool Maintenance & Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bali Pool Service",
      "telephone": "+6282237565997"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bali, Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Service Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Silver Package - Weekly Maintenance",
            "description": "2 visits per week, chemical balancing, surface cleaning, equipment check"
          },
          "price": "800000",
          "priceCurrency": "IDR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gold Package - Premium Maintenance",
            "description": "3 visits per week, full cleaning, chemical management, filter maintenance"
          },
          "price": "1500000",
          "priceCurrency": "IDR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Platinum Package - Daily Maintenance",
            "description": "Daily service, priority response, dedicated technician, all equipment maintenance"
          },
          "price": "2800000",
          "priceCurrency": "IDR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Green Pool Rescue",
            "description": "Emergency algae treatment and pool restoration"
          },
          "price": "1500000",
          "priceCurrency": "IDR"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool maintenance cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pool maintenance in Bali ranges from IDR 800,000 to IDR 2,800,000 per month depending on pool size, service frequency, and package level. All packages include chemicals and equipment checks."
        }
      },
      {
        "@type": "Question",
        "name": "Are pool chemicals included in the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our maintenance packages include premium 90% pure pool chemicals. We deliver and apply them during each service visit."
        }
      },
      {
        "@type": "Question",
        "name": "How much does green pool cleaning cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Green pool rescue starts from IDR 1,500,000 for light algae cases and IDR 2,500,000+ for severe cases. This includes shock treatment, deep cleaning, and chemical rebalancing."
        }
      }
    ]
  };

  const maintenancePackages = [
    {
      name: "Silver",
      subtitle: "Essential Maintenance",
      price: "800,000",
      period: "/month",
      description: "Perfect for small villa pools with light usage",
      icon: Clock,
      features: [
        "2 visits per week",
        "Surface skimming & debris removal",
        "Chemical testing & balancing",
        "Basic equipment check",
        "WhatsApp service reports",
        "All chemicals included"
      ],
      idealFor: "Small villas, private homes",
      popular: false
    },
    {
      name: "Gold",
      subtitle: "Premium Maintenance",
      price: "1,500,000",
      period: "/month",
      description: "Ideal for rental villas and medium pools",
      icon: Star,
      features: [
        "3 visits per week",
        "Full pool cleaning & vacuuming",
        "Chemical management & balancing",
        "Filter maintenance",
        "Equipment inspection",
        "Priority scheduling",
        "WhatsApp reports with photos",
        "All chemicals included"
      ],
      idealFor: "Rental villas, guest houses",
      popular: true
    },
    {
      name: "Platinum",
      subtitle: "Daily Service",
      price: "2,800,000",
      period: "/month",
      description: "For hotels, resorts, and high-traffic pools",
      icon: Users,
      features: [
        "Daily maintenance visits",
        "Comprehensive cleaning",
        "Chemical management",
        "Full filter service",
        "Equipment maintenance",
        "Dedicated technician",
        "24/7 emergency response",
        "Detailed digital reports",
        "All chemicals included"
      ],
      idealFor: "Hotels, resorts, commercial pools",
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: "Green Pool Rescue",
      description: "Emergency algae treatment and restoration",
      priceRange: "IDR 1,500,000 - 2,500,000",
      icon: Sparkles,
      details: "Price depends on severity. Includes shock treatment, deep vacuuming, filter cleaning.",
      link: "/green-pool-cleaning-bali"
    },
    {
      name: "Pump Repair",
      description: "Diagnosis and repair of pool pumps",
      priceRange: "From IDR 500,000",
      icon: Wrench,
      details: "Inspection fee IDR 200,000 (waived if repair booked). Parts additional.",
      link: "/pool-pump-repair-bali"
    },
    {
      name: "Filter Deep Clean",
      description: "Thorough filter maintenance and cleaning",
      priceRange: "From IDR 350,000",
      icon: Wrench,
      details: "Sand filter backwash, cartridge cleaning, or DE filter service.",
      link: "/pool-filter-cleaning-repair-bali"
    },
    {
      name: "Acid Wash",
      description: "Deep clean for stained pool surfaces",
      priceRange: "From IDR 2,000,000",
      icon: Sparkles,
      details: "Removes stubborn stains, scale, and mineral deposits. Price varies by pool size.",
      link: "/pool-acid-wash-service-bali"
    },
    {
      name: "Leak Detection",
      description: "Find and diagnose pool leaks",
      priceRange: "From IDR 750,000",
      icon: AlertTriangle,
      details: "Professional leak detection with repair recommendations.",
      link: "/pool-leak-repair-bali"
    },
    {
      name: "Equipment Installation",
      description: "New pumps, filters, lights, heaters",
      priceRange: "Custom quote",
      icon: Hammer,
      details: "Professional installation with warranty. Equipment cost additional.",
      link: "/pool-equipment-installation-bali"
    }
  ];

  const constructionServices = [
    {
      name: "Villa Pool",
      size: "3m x 6m",
      priceRange: "From IDR 70 million",
      timeline: "6-8 weeks",
      link: "/pool-construction-bali"
    },
    {
      name: "Medium Pool",
      size: "4m x 8m",
      priceRange: "From IDR 110 million",
      timeline: "8-10 weeks",
      link: "/pool-construction-bali"
    },
    {
      name: "Infinity Pool",
      size: "Custom",
      priceRange: "From IDR 150 million",
      timeline: "10-14 weeks",
      link: "/pool-construction-bali"
    },
    {
      name: "Cold Plunge",
      size: "1.5m x 2.5m",
      priceRange: "From IDR 45 million",
      timeline: "3-4 weeks",
      link: "/cold-plunge-bali"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pool Service Pricing Bali | Maintenance Packages from IDR 800K</title>
        <meta 
          name="description" 
          content="Transparent pool service pricing in Bali. Weekly maintenance from IDR 800,000/month. Green pool rescue from IDR 1.5M. All chemicals included. Get a free quote today." 
        />
        <link rel="canonical" href="https://poolservicebali.com/pricing" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pool Service Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Transparent, all-inclusive pricing. All packages include premium chemicals, 
              equipment checks, and WhatsApp reports.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              No hidden fees. Chemicals always included.
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-16 md:py-24 bg-white" id="maintenance">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly Maintenance Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your property and usage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maintenancePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${pkg.popular ? 'border-2 border-primary ring-2 ring-primary/20' : 'border'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <pkg.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <p className="text-sm text-gray-500">{pkg.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary">
                      IDR {pkg.price}
                      <span className="text-sm font-normal text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs text-gray-500 mb-4">
                    Ideal for: {pkg.idealFor}
                  </div>

                  <Button 
                    className={`w-full gap-2 ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-black hover:bg-gray-800'} text-white`}
                    onClick={() => window.open(`https://wa.me/6282237565997?text=Hi!%20I%27m%20interested%20in%20the%20${pkg.name}%20Package%20for%20pool%20maintenance.`, "_blank")}
                    data-testid={`button-pricing-${pkg.name.toLowerCase()}`}
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    Get {pkg.name} Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Prices for standard villa pools up to 50m&sup2;. Larger pools may have adjusted pricing.
              <br />Contact us for a custom quote based on your pool size and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Every Package
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Premium Chemicals</h3>
              <p className="text-sm text-gray-600">90% pure chlorine, pH balancers, algaecides - all included</p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Equipment Checks</h3>
              <p className="text-sm text-gray-600">Pump, filter, skimmer inspected every visit</p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp Reports</h3>
              <p className="text-sm text-gray-600">Photo updates and water test results after each visit</p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Issue Alerts</h3>
              <p className="text-sm text-gray-600">Immediate notification of any equipment problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-white" id="additional">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services & Repairs
            </h2>
            <p className="text-lg text-gray-600">
              One-time services available for all pool owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <div className="text-lg font-bold text-primary mb-2">{service.priceRange}</div>
                      <p className="text-xs text-gray-500 mb-3">{service.details}</p>
                      <Link href={service.link}>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Pricing */}
      <section className="py-16 md:py-24 bg-gray-50" id="construction">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pool Construction & Installation
            </h2>
            <p className="text-lg text-gray-600">
              Build your dream pool. From villa pools to infinity pools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {constructionServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.size}</p>
                  <div className="text-2xl font-bold text-primary mb-2">{service.priceRange}</div>
                  <p className="text-xs text-gray-500 mb-4">Timeline: {service.timeline}</p>
                  <Link href={service.link}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Construction prices vary by design, location, access, and materials.
              <br />Contact us for a detailed project quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="chemicals">
              <AccordionTrigger>Are chemicals really included in the price?</AccordionTrigger>
              <AccordionContent>
                Yes, all our maintenance packages include premium 90% pure pool chemicals: chlorine, 
                pH balancers, alkalinity adjusters, and algaecides. We bring and apply them during 
                each service visit. You never need to purchase chemicals separately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pool-size">
              <AccordionTrigger>What if my pool is larger than average?</AccordionTrigger>
              <AccordionContent>
                Our listed prices are for standard villa pools up to 50m&sup2;. For larger pools 
                (common in hotels and resorts), we provide custom pricing based on size, depth, 
                and usage level. Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contract">
              <AccordionTrigger>Do I need to sign a long-term contract?</AccordionTrigger>
              <AccordionContent>
                No long-term contracts required. We offer month-to-month service with 30-day 
                cancellation notice. However, clients who commit to 6 or 12-month agreements 
                receive discounted rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emergency">
              <AccordionTrigger>What about emergency service fees?</AccordionTrigger>
              <AccordionContent>
                Platinum package clients receive 24/7 emergency response included. For Silver 
                and Gold clients, emergency callouts outside scheduled visits are IDR 250,000 
                for the visit plus any required services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept bank transfer (BCA, Mandiri, BNI), cash, QRIS, GoPay, OVO, and Dana. 
                Monthly packages are billed at the start of each month. One-time services 
                are paid upon completion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free Custom Quote
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Every pool is different. Contact us for a personalized quote based on your 
            pool size, location, and service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 gap-2"
              onClick={() => window.open("https://wa.me/6282237565997?text=Hi!%20I%27d%20like%20a%20custom%20quote%20for%20pool%20service.", "_blank")}
              data-testid="button-pricing-cta-whatsapp"
            >
              <FaWhatsapp className="h-5 w-5" />
              Get Custom Quote on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+6282237565997">
                <Phone className="h-5 w-5 mr-2" />
                Call +62 822 3756 5997
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
