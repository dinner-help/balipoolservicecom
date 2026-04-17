import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, CheckCircle2, AlertTriangle, Droplets, Sun, Leaf, Sparkles } from 'lucide-react';

export default function GreenPoolCleaningBali() {
  const whatsappNumber = '+6282340709041';
  const whatsappMessage = encodeURIComponent('Hi, I need help with green pool cleaning in Bali. Can you help?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const greenPoolCauses = [
    {
      icon: Leaf,
      cause: 'Algae Bloom',
      description: 'Most common - green, cloudy water from algae growth',
      timeframe: '24-48 hours'
    },
    {
      icon: Sun,
      cause: 'High Temperature',
      description: "Bali's tropical heat accelerates algae growth",
      timeframe: '36-72 hours'
    },
    {
      icon: Droplets,
      cause: 'Chemical Imbalance',
      description: 'Low chlorine or pH issues allow algae to thrive',
      timeframe: '24-48 hours'
    },
    {
      icon: AlertTriangle,
      cause: 'Equipment Failure',
      description: 'Pump or filter stopped working, water stagnant',
      timeframe: '48-96 hours'
    }
  ];

  const recoveryProcess = [
    'Test water chemistry and assess algae severity',
    'Remove debris and brush all surfaces thoroughly',
    'Shock chlorination (3-5x normal dose)',
    'Add algaecide and water clarifier',
    'Run filter continuously for 24-48 hours',
    'Vacuum settled debris and backwash filter',
    'Rebalance pH, alkalinity, and stabilizer',
    'Continue filtration until crystal clear'
  ];

  const severityLevels = [
    {
      level: 'Light Green',
      description: 'Slightly cloudy, can see bottom',
      recovery: '12-24 hours',
      cost: 'Starting 750,000 IDR'
    },
    {
      level: 'Medium Green',
      description: 'Murky water, cannot see bottom clearly',
      recovery: '24-48 hours',
      cost: 'Starting 1,200,000 IDR'
    },
    {
      level: 'Dark Green/Black',
      description: 'Cannot see 6 inches below surface',
      recovery: '48-96 hours',
      cost: 'Starting 1,800,000 IDR'
    }
  ];

  const caseStudies = [
    {
      title: 'Villa Seminyak - Guest Arrival Emergency',
      before: 'Dark green pool, guests arriving in 36 hours',
      action: 'Triple shock treatment, continuous filtration, pressure washing',
      after: 'Crystal clear in 32 hours, guests impressed',
      testimonial: 'Saved our 5-star rating and repeat booking'
    },
    {
      title: 'Resort Canggu - Post-Rainy Season Recovery',
      before: '8 villas with green pools after heavy rain',
      action: 'Coordinated cleaning, shock treatment, algae prevention',
      after: 'All pools cleared within 48 hours',
      testimonial: 'Efficient, professional, great communication'
    },
    {
      title: 'Homeowner Ubud - Long-Term Neglect',
      before: 'Black water, 6 months without maintenance',
      action: 'Drain & acid wash, equipment service, refill & balance',
      after: 'Like-new pool in 5 days',
      testimonial: 'Thought we needed to resurface, they proved us wrong'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you clear a green pool in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recovery time depends on severity: light green pools can be cleared in 12-24 hours, medium green in 24-48 hours, and dark green or black pools may take 48-96 hours. For urgent situations before guest arrival, we can often expedite the process with intensive treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Why do pools turn green so quickly in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bali's tropical climate is perfect for algae growth. High temperatures (28-32°C), intense sun exposure, frequent rain, and high humidity all contribute. Without proper chemical maintenance and filtration, pools can turn green in just 2-3 days."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix my green pool before guests arrive tomorrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your pool is light to medium green, yes - we can typically achieve swimmable clarity within 24 hours with emergency shock treatment and continuous filtration. For severely green pools, we'll be honest about realistic timeframes and work as quickly as possible."
        }
      },
      {
        "@type": "Question",
        "name": "What causes green pool water in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Green pools are caused by algae growth, which happens when chlorine levels drop too low, pH becomes imbalanced, filtration stops working, or the pool isn't cleaned regularly. In Bali's climate, these problems develop faster than in temperate regions."
        }
      },
      {
        "@type": "Question",
        "name": "How much does green pool cleaning cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from 750,000 IDR for light green pools to 1,800,000+ IDR for severely green or black pools. Price includes shock treatment, algaecide, filtration monitoring, and rebalancing. Drain and acid wash services for extreme cases start at 3,500,000 IDR."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Green Pool Cleaning & Algae Removal",
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
        <title>Green Pool Cleaning Bali | Algae Removal & Pool Recovery in 24–48 Hours</title>
        <meta name="description" content="Pool turned green in Bali? We remove algae and restore crystal-clear water in 24–48 hours. Emergency same-day service for villas & resorts. Green pool recovery from IDR 1,875,000. Call now: +62 823-4070-9041" />
        <meta name="keywords" content="green pool cleaning Bali, algae removal Bali, cloudy pool fix Bali, pool turned green Bali, algae treatment Seminyak, green pool Canggu" />
        <link rel="canonical" href="https://balipoolservice.com/green-pool-cleaning-bali" />
        
        <meta property="og:title" content="Green Pool Cleaning Bali | Fix Algae Problems in 24-48 Hours" />
        <meta property="og:description" content="Expert green pool cleaning in Bali. Remove algae and restore crystal clear water in 24-48 hours. Emergency service available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/green-pool-cleaning-bali" />
        
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
        <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-emerald-700" data-testid="badge-service">
                <Sparkles className="w-3 h-3 mr-1" />
                Green to Crystal Clear
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Green Pool Cleaning Bali - Crystal Clear in 24-48 Hours
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Pool turned green before guests arrive? Don't panic. Our expert algae removal service 
                can restore your pool to sparkling condition quickly. Same-day service available across Bali.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Emergency Green Pool Service
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                  data-testid="button-pricing"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Causes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Pools Turn Green in Bali</h2>
              <p className="text-lg text-muted-foreground">Understanding the tropical climate challenges</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {greenPoolCauses.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-cause-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-lg">{item.cause}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <Badge variant="secondary" data-testid={`badge-timeframe-${index}`}>
                        <Clock className="w-3 h-3 mr-1" />
                        Recovery: {item.timeframe}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Severity Levels */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Green Pool Severity & Recovery Time</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {severityLevels.map((level, index) => (
                <Card key={index} data-testid={`card-severity-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{level.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{level.recovery}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{level.cost}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Green Pool Recovery Process</h2>
              <div className="space-y-4">
                {recoveryProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white flex-shrink-0 font-bold">
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
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Green Pool Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real results from Bali properties</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} data-testid={`card-case-study-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-destructive mb-1">Before:</p>
                      <p className="text-sm text-muted-foreground">{study.before}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Action Taken:</p>
                      <p className="text-sm text-muted-foreground">{study.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">After:</p>
                      <p className="text-sm text-muted-foreground">{study.after}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm italic">"{study.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Green Pool Cleaning FAQs</h2>
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
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Let a Green Pool Ruin Your Plans</h2>
            <p className="text-xl mb-8 text-white/90">
              Fast, effective algae removal service across all of Bali. Contact us today for same-day service.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(whatsappLink, '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Green Pool Cleaned Now
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 mb-2" />
                <p className="font-semibold">Crystal Clear Results</p>
                <p className="text-sm text-white/80">24-48 hours typical</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 mb-2" />
                <p className="font-semibold">Algae Prevention</p>
                <p className="text-sm text-white/80">Keep it clear long-term</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <p className="font-semibold">Emergency Service</p>
                <p className="text-sm text-white/80">Same-day available</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
