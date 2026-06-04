import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, CheckCircle2, Palette, Sparkles, Zap, Droplets, TrendingUp } from 'lucide-react';

export default function PoolRenovationBali() {
  const whatsappNumber = '+6282323011656';
  const whatsappMessage = encodeURIComponent('Hi, I want to discuss pool renovation options in Bali. Can you help?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const renovationOptions = [
    {
      icon: Palette,
      upgrade: 'Surface Refinishing',
      description: 'New plaster, pebble, or tile finish - transforms appearance',
      timeline: '5-10 days',
      investment: '35M-85M IDR'
    },
    {
      icon: Zap,
      upgrade: 'Equipment Upgrade',
      description: 'Energy-efficient pumps, LED lights, automation systems',
      timeline: '2-4 days',
      investment: '15M-45M IDR'
    },
    {
      icon: Droplets,
      upgrade: 'Saltwater Conversion',
      description: 'Switch from chlorine to gentler saltwater system',
      timeline: '1-2 days',
      investment: '12M-25M IDR'
    },
    {
      icon: Sparkles,
      upgrade: 'Aesthetic Enhancements',
      description: 'Water features, LED lighting, tile accents, coping upgrade',
      timeline: '3-7 days',
      investment: '10M-50M IDR'
    }
  ];

  const signsRenovationNeeded = [
    'Surface is rough, stained, or discolored',
    'Frequent leaks or structural cracks',
    'Outdated equipment with high energy costs',
    'Pool doesn\'t match updated landscaping',
    'Tiles cracking or falling off',
    'Rental reviews mention pool condition'
  ];

  const renovationProcess = [
    'Initial consultation and pool assessment',
    'Design consultation - materials, features, colors',
    'Detailed quote with timeline and payment schedule',
    'Pre-renovation pool drainage and prep work',
    'Surface removal or equipment installation',
    'New finish application or feature integration',
    'Curing period (for plaster/pebble finishes)',
    'Pool filling, chemistry balancing, and startup',
    'Final inspection and owner walkthrough'
  ];

  const popularUpgrades = [
    {
      category: 'Energy Efficiency',
      upgrades: [
        'Variable-speed pump (saves 50-70% energy)',
        'LED pool lights (90% less energy than incandescent)',
        'Solar heating system',
        'Automated timer controls'
      ],
      roi: 'Pays for itself in 2-4 years through savings'
    },
    {
      category: 'Aesthetics',
      upgrades: [
        'Glass mosaic tile waterline',
        'Pebble or aggregate finish',
        'Waterfall or sheer descent feature',
        'Color-changing LED lights',
        'Natural stone coping'
      ],
      roi: 'Increases property value 15-25%'
    },
    {
      category: 'Functionality',
      upgrades: [
        'Saltwater chlorinator system',
        'Smartphone app pool control',
        'Automatic pool cleaner',
        'Heat pump for year-round comfort',
        'Advanced filtration (UV or ozone)'
      ],
      roi: 'Reduces maintenance time 60-80%'
    }
  ];

  const caseStudies = [
    {
      title: 'Villa Seminyak - Complete Renovation for Rental',
      before: '15-year-old pool, rough plaster, basic equipment, 3.5⭐ reviews',
      work: 'New pebble finish, LED lights, saltwater system, waterfall feature, energy-efficient pump',
      after: '4.9⭐ reviews, 30% higher nightly rate, booked 95% of time',
      investment: '68,000,000 IDR - recovered in 11 months through higher rates',
      timeline: '12 days total'
    },
    {
      title: 'Private Home Canggu - Modernization',
      before: 'Dated 1990s pool, green-tinted plaster, halogen lights, noisy pump',
      work: 'Brilliant white plaster, color-changing LEDs, variable-speed pump, automation',
      after: 'Stunning modern pool, 65% lower energy costs, quiet operation',
      investment: '42,000,000 IDR - saving 750,000 IDR/month on electricity',
      timeline: '8 days'
    },
    {
      title: 'Resort Ubud - Eco Upgrade',
      before: '3 pools with high chemical and energy costs, environmental concern',
      work: 'Saltwater systems, solar heating, LED lights, natural filtration',
      after: 'Green certification achieved, 70% chemical reduction, 55% energy savings',
      investment: '125,000,000 IDR - qualifies for eco-tourism premium rates',
      timeline: '3 weeks (all pools)'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool renovation cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary widely: surface refinishing (35-85 million IDR), equipment upgrades (15-45 million IDR), aesthetic enhancements (10-50 million IDR). Complete renovations range from 50-150 million IDR depending on pool size and scope. Most renovations pay for themselves through energy savings, reduced maintenance, or increased rental income within 2-4 years."
        }
      },
      {
        "@type": "Question",
        "name": "How long does pool renovation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Equipment upgrades: 2-4 days. Surface refinishing (plaster): 7-10 days including curing. Pebble finish: 8-12 days. Adding features (lights, waterfall): 3-7 days. Most renovations complete within 1-2 weeks, with minimal disruption to your schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best pool finish for Bali climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pebble or aggregate finishes are ideal for Bali - they're extremely durable (15-20 years), resist algae better than plaster, stay cooler in tropical heat, and provide natural slip resistance. Glass bead finishes offer similar benefits with more color options. Traditional plaster works but needs replacing every 7-10 years in Bali's climate."
        }
      },
      {
        "@type": "Question",
        "name": "Will pool renovation increase my property value?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A professionally renovated pool typically increases property value by 15-25%. For rental properties, expect 20-40% higher nightly rates and improved occupancy. The combination of aesthetic improvements and modern, efficient equipment makes properties significantly more competitive."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my pool during renovation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the pool must be drained for surface work and most renovations. Plan for 7-14 days without pool access. We coordinate timing with your rental schedule or personal plans. Equipment-only upgrades may allow partial use but we recommend completing everything at once to minimize downtime."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pool Renovation & Upgrade",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bali Pool Service",
      "telephone": whatsappNumber
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bali, Indonesia"
    }
  };

  return (
    <>
      <Helmet>
        <title>Pool Renovation Bali | Surface Refinishing, Equipment Upgrades & Saltwater Conversion</title>
        <meta name="description" content="Professional pool renovation in Bali. Surface refinishing, LED lighting upgrades, saltwater conversion, equipment modernization. Transform your pool and increase property value. Free quote: +62 823-2301-1656" />
        <meta name="keywords" content="pool renovation Bali, pool refinishing Bali, pool upgrade, pebble finish Bali, pool modernization, pool resurfacing Seminyak" />
        <link rel="canonical" href="https://balipoolservice.com/pool-renovation-bali" />
        
        <meta property="og:title" content="Pool Renovation Bali | Refinishing, Upgrades & Modernization" />
        <meta property="og:description" content="Professional pool renovation in Bali. Surface refinishing, equipment upgrades, LED lights, saltwater conversion. Transform your pool, increase property value." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-renovation-bali" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-600 to-violet-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-violet-700" data-testid="badge-service">
                <Sparkles className="w-3 h-3 mr-1" />
                Transform Your Pool
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Pool Renovation Bali - Modernize, Upgrade, Increase Value
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Transform your tired pool into a stunning centerpiece. From surface refinishing to complete 
                modernization - we deliver beautiful, energy-efficient results that increase property value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Renovation Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                  data-testid="button-services"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Pool Renovation Options</h2>
              <p className="text-lg text-muted-foreground">Transform your pool your way</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {renovationOptions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-option-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <CardTitle className="text-lg">{item.upgrade}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="space-y-2">
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeline}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{item.investment}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Signs You Need Renovation */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Is It Time to Renovate Your Pool?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signsRenovationNeeded.map((sign, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`sign-${index}`}>
                    <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-base">{sign}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Upgrades */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Most Popular Upgrade Packages</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {popularUpgrades.map((pkg, index) => (
                <Card key={index} data-testid={`card-package-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.upgrades.map((upgrade, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{upgrade}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {pkg.roi}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Renovation Process */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Renovation Process</h2>
              <div className="space-y-4">
                {renovationProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600 text-white flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Renovation Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real transformations, real ROI</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} data-testid={`card-case-study-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Before:</p>
                      <p className="text-sm text-muted-foreground">{study.before}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Work Completed:</p>
                      <p className="text-sm text-muted-foreground">{study.work}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">After:</p>
                      <p className="text-sm text-muted-foreground">{study.after}</p>
                    </div>
                    <div className="pt-4 border-t space-y-2">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {study.investment}
                      </p>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {study.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Pool Renovation FAQs</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <Card key={index} data-testid={`card-faq-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-violet-600 to-violet-800 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Pool?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and detailed renovation quote. Let's create the pool of your dreams.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(whatsappLink, '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 mb-2" />
                <p className="font-semibold">Increase Value</p>
                <p className="text-sm text-white/80">15-25% property value boost</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 mb-2" />
                <p className="font-semibold">Save Energy</p>
                <p className="text-sm text-white/80">50-70% lower costs</p>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 mb-2" />
                <p className="font-semibold">Beautiful Results</p>
                <p className="text-sm text-white/80">Professional quality</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
