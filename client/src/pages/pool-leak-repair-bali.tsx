import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, CheckCircle2, Droplets, Search, MapPin, Wrench } from 'lucide-react';

export default function PoolLeakRepairBali() {
  const whatsappNumber = '+6282340709041';
  const whatsappMessage = encodeURIComponent('Hi, I need pool leak detection and repair in Bali. Can you help?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const leakSigns = [
    {
      sign: 'Water Loss',
      description: 'Losing more than 6mm per day (evaporation is 3-6mm in Bali)',
      severity: 'High'
    },
    {
      sign: 'Wet Spots',
      description: 'Soggy areas around pool, constantly wet paving',
      severity: 'High'
    },
    {
      sign: 'Chemical Imbalance',
      description: 'Constantly adding chemicals, levels won\'t stabilize',
      severity: 'Medium'
    },
    {
      sign: 'Cracks',
      description: 'Visible cracks in pool shell, tile grout gaps',
      severity: 'High'
    },
    {
      sign: 'Equipment Issues',
      description: 'Pump running dry, filter pressure dropping',
      severity: 'High'
    },
    {
      sign: 'Structural Problems',
      description: 'Deck settling, foundation movement near pool',
      severity: 'Very High'
    }
  ];

  const detectionMethods = [
    'Bucket test (evaporation vs. leak comparison)',
    'Dye testing around fittings, lights, and returns',
    'Pressure testing of plumbing lines',
    'Electronic leak detection equipment',
    'Structural inspection for shell cracks',
    'Equipment area examination for pump/filter leaks'
  ];

  const leakLocations = [
    { location: 'Underground Plumbing', percentage: '35%', repair: '1-3 days' },
    { location: 'Pool Shell/Liner', percentage: '25%', repair: '2-5 days' },
    { location: 'Skimmer/Return Fittings', percentage: '20%', repair: '1-2 days' },
    { location: 'Pool Light Housing', percentage: '10%', repair: '4-8 hours' },
    { location: 'Equipment Pad', percentage: '10%', repair: '2-6 hours' }
  ];

  const caseStudies = [
    {
      title: 'Villa Canggu - Mystery Underground Leak',
      problem: 'Losing 3cm daily, no visible wet spots, 90,000 liters/month water bill spike',
      detection: 'Pressure testing revealed cracked underground return line',
      solution: 'Excavated and replaced 6m of PVC pipe, re-landscaped',
      result: 'Zero water loss, savings of 2,500,000 IDR/month on water',
      cost: 'Repair: 4,500,000 IDR (paid for itself in < 2 months)'
    },
    {
      title: 'Resort Seminyak - Main Drain Leak',
      problem: 'Multiple pools losing water, wet areas near pool house',
      detection: 'Dye test identified main drain seal failure',
      solution: 'Underwater epoxy injection repair (no drain required)',
      result: 'All pools sealed, operational within 24 hours',
      cost: 'Repair: 3,200,000 IDR vs drain & resurface (18,000,000 IDR)'
    },
    {
      title: 'Homeowner Ubud - Skimmer Leak',
      problem: 'Constant refilling, water level drops overnight',
      detection: 'Found cracked skimmer throat and loose mounting',
      solution: 'Replaced skimmer unit and re-sealed properly',
      result: 'Leak stopped completely, normal water levels',
      cost: 'Repair: 1,800,000 IDR (same-day service)'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I tell if my pool is leaking or just evaporating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Bali's climate, normal evaporation is 3-6mm per day. If you're losing more than 6mm daily, you likely have a leak. Do the bucket test: fill a bucket with pool water, mark both the pool and bucket water levels, wait 24 hours. If the pool drops more than the bucket, it's leaking."
        }
      },
      {
        "@type": "Question",
        "name": "How much does pool leak detection cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional leak detection service costs 750,000 to 1,500,000 IDR depending on pool size and complexity. This includes bucket test, dye testing, pressure testing, and electronic detection. The fee is often waived or credited if you proceed with our repair service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does pool leak repair take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple repairs (equipment leaks, light housing) take 2-8 hours. Underground plumbing repairs require 1-3 days including excavation. Shell repairs need 2-5 days for proper curing. We provide accurate timeframes after diagnosis."
        }
      },
      {
        "@type": "Question",
        "name": "Can pool leaks be repaired without draining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many leaks can be repaired without draining, including underground plumbing (accessed from equipment side), skimmer repairs, and some shell cracks using underwater epoxy. However, major shell damage or liner replacement requires draining the pool."
        }
      },
      {
        "@type": "Question",
        "name": "How much does pool leak repair cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary: equipment leaks (500,000-1,500,000 IDR), skimmer/fitting repairs (1,500,000-3,000,000 IDR), underground plumbing (3,000,000-8,000,000 IDR), shell repairs (2,500,000-12,000,000+ IDR). Early detection saves money - small leaks become expensive structural damage if ignored."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pool Leak Detection & Repair",
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
        <title>Pool Leak Repair Bali | Professional Detection & Fix Service</title>
        <meta name="description" content="Expert pool leak detection and repair in Bali. Underground pipes, shell cracks, equipment leaks. Save water and money. Seminyak, Canggu, Denpasar. Call now!" />
        <meta name="keywords" content="pool leak repair Bali, leak detection Bali, pool losing water Bali, underground pipe leak, pool shell repair, skimmer leak Bali" />
        <link rel="canonical" href="https://balipoolservice.com/pool-leak-repair-bali" />
        
        <meta property="og:title" content="Pool Leak Repair Bali | Professional Detection & Fix Service" />
        <meta property="og:description" content="Expert pool leak detection and repair in Bali. Underground pipes, shell cracks, equipment leaks. Save water and money." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-leak-repair-bali" />
        
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
        <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-cyan-700" data-testid="badge-service">
                <Search className="w-3 h-3 mr-1" />
                Advanced Detection Technology
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Pool Leak Repair Bali - Find & Fix Any Leak
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Losing water and money? Our expert leak detection service finds hidden leaks in underground 
                pipes, pool shells, and equipment. Stop wasting water - get professional repair today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule Leak Detection
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                  data-testid="button-emergency"
                >
                  <Link href="/emergency-pool-repair-bali">Emergency Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leak Signs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Signs Your Pool Has a Leak</h2>
              <p className="text-lg text-muted-foreground">Don't ignore these warning signs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leakSigns.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-sign-${index}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{item.sign}</CardTitle>
                      <Badge 
                        variant={item.severity === 'Very High' || item.severity === 'High' ? 'destructive' : 'secondary'}
                        data-testid={`badge-severity-${index}`}
                      >
                        {item.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-12 bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-destructive" />
                  Don't Wait - Leaks Get Expensive
                </h3>
                <p className="text-muted-foreground">
                  A small leak losing 1cm/day wastes 30,000+ liters per month (water bill spike of 500,000+ IDR). 
                  Worse, underground leaks cause foundation damage, erosion, and structural issues costing millions to repair. 
                  Early detection saves money!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detection Methods */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Leak Detection Process</h2>
              <div className="space-y-4">
                {detectionMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Leak Locations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Where Pool Leaks Typically Occur</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {leakLocations.map((item, index) => (
                <Card key={index} data-testid={`card-location-${index}`}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle className="text-base">{item.location}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{item.percentage}</div>
                    <p className="text-xs text-muted-foreground">of all leaks</p>
                    <Badge variant="secondary" className="w-full justify-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.repair}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leak Detection Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real leaks found and fixed</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} data-testid={`card-case-study-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-destructive mb-1">The Problem:</p>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">Detection:</p>
                      <p className="text-sm text-muted-foreground">{study.detection}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Result:</p>
                      <p className="text-sm text-muted-foreground">{study.result}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {study.cost}
                      </p>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Pool Leak Detection FAQs</h2>
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
        <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Wasting Water & Money</h2>
            <p className="text-xl mb-8 text-white/90">
              Professional leak detection finds the problem. Expert repair fixes it permanently.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(whatsappLink, '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Find My Pool Leak
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Search className="w-8 h-8 mb-2" />
                <p className="font-semibold">Advanced Detection</p>
                <p className="text-sm text-white/80">Find any leak, anywhere</p>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="w-8 h-8 mb-2" />
                <p className="font-semibold">Expert Repair</p>
                <p className="text-sm text-white/80">Permanent solutions</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 mb-2" />
                <p className="font-semibold">Save Money</p>
                <p className="text-sm text-white/80">Reduce water bills</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
