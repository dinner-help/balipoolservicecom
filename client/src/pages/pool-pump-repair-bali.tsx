import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, CheckCircle2, Zap, Settings, AlertCircle, Wrench, Volume2 } from 'lucide-react';

export default function PoolPumpRepairBali() {
  const whatsappNumber = '+6282237565997';
  const whatsappMessage = encodeURIComponent('Hi, I need pool pump repair service in Bali. Can you help?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const commonIssues = [
    {
      icon: Volume2,
      issue: 'Loud Noises',
      symptoms: 'Grinding, squealing, or rattling sounds',
      likely: 'Worn bearings, debris in impeller',
      repair: '2-4 hours'
    },
    {
      icon: Zap,
      issue: 'Won\'t Start',
      symptoms: 'No power, motor hums but doesn\'t turn',
      likely: 'Capacitor failure, motor burnout',
      repair: '1-3 hours'
    },
    {
      icon: AlertCircle,
      issue: 'Low Pressure',
      symptoms: 'Weak water flow, poor circulation',
      likely: 'Clogged impeller, air leak',
      repair: '1-2 hours'
    },
    {
      icon: Settings,
      issue: 'Overheating',
      symptoms: 'Pump shuts off, hot to touch',
      likely: 'Blocked ventilation, motor issue',
      repair: '2-4 hours'
    }
  ];

  const diagnosticSteps = [
    'Visual inspection for leaks and damage',
    'Test electrical connections and voltage',
    'Check motor capacitor and bearings',
    'Inspect impeller for clogs or damage',
    'Test pressure and flow rate',
    'Identify specific component failure',
    'Provide repair quote and timeframe',
    'Replace parts or recommend motor replacement'
  ];

  const pumpBrands = [
    'Pentair', 'Hayward', 'Sta-Rite', 'Grundfos', 'Emaux', 'Aquapro', 
    'Kripsol', 'Davey', 'Waterco', 'Speck', 'Zodiac'
  ];

  const caseStudies = [
    {
      title: 'Villa Seminyak - Pump Motor Failure',
      problem: 'Complete motor burnout, pool turning green',
      solution: 'Same-day motor replacement with upgraded energy-efficient model',
      outcome: '3-hour repair, pool circulating perfectly, 30% lower energy costs',
      savings: 'Avoided full pump replacement (saved 8,000,000 IDR)'
    },
    {
      title: 'Resort Canggu - Noisy Pump Issue',
      problem: 'Loud grinding noise disturbing guests, pump still working',
      solution: 'Replaced worn bearings and impeller',
      outcome: 'Silent operation restored, extended pump life by 3+ years',
      savings: 'Avoided premature replacement (saved 12,000,000 IDR)'
    },
    {
      title: 'Homeowner Denpasar - Low Pressure Problem',
      problem: 'Weak water flow, ineffective filtration',
      solution: 'Cleared blocked impeller, replaced seal, fixed air leak',
      outcome: 'Full pressure restored, crystal clear water in 24 hours',
      savings: 'Repair cost only 750,000 IDR vs new pump 6,500,000 IDR'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool pump repair cost in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic repairs (capacitor, seal replacement) start at 500,000 IDR. Motor replacement ranges from 2,500,000 to 5,000,000 IDR depending on size and brand. Complete diagnostic service is 300,000 IDR, waived if you proceed with repairs."
        }
      },
      {
        "@type": "Question",
        "name": "Should I repair or replace my pool pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your pump is under 5 years old and the motor still works, repair is usually cost-effective. For pumps over 8 years old with major motor failure, replacement with a modern energy-efficient model often makes more financial sense. We'll provide honest recommendations based on your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does pool pump repair take in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple repairs (capacitor, impeller cleaning) take 1-2 hours. Motor replacement typically requires 3-4 hours. We stock common parts for same-day service on most brands. Complex repairs may require ordering specialized parts (1-3 days)."
        }
      },
      {
        "@type": "Question",
        "name": "Why did my pool pump stop working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common causes include capacitor failure (most common), motor burnout from overheating, electrical issues, clogged impeller, seal leaks, or bearing wear. Bali's high humidity and frequent power fluctuations can accelerate component failure. Regular maintenance can prevent most issues."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair all pool pump brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we service all major brands including Pentair, Hayward, Sta-Rite, Grundfos, Emaux, Aquapro, Kripsol, Davey, Waterco, Speck, and Zodiac. We maintain relationships with suppliers across Bali for quick parts access."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pool Pump Repair & Replacement",
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
        <title>Pool Pump Repair Bali | Expert Motor, Impeller & Pressure Fault Service — Same Day</title>
        <meta name="description" content="Professional pool pump repair in Bali. Fix noisy pumps, motor failures, low pressure & flow issues. All brands serviced. Same-day repairs available across Seminyak, Canggu, Ubud & all Bali. Call: +62 822-3756-5997" />
        <meta name="keywords" content="pool pump repair Bali, pump motor replacement Bali, noisy pool pump, pump won't start Bali, low water pressure pool, Pentair repair Bali" />
        <link rel="canonical" href="https://balipoolservice.com/pool-pump-repair-bali" />
        
        <meta property="og:title" content="Pool Pump Repair Bali | Expert Motor & Impeller Service" />
        <meta property="og:description" content="Professional pool pump repair in Bali. Fix noisy pumps, motor failures, low pressure. All brands serviced. Same-day repairs available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-pump-repair-bali" />
        
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
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-blue-700" data-testid="badge-service">
                <Wrench className="w-3 h-3 mr-1" />
                All Brands Serviced
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Pool Pump Repair Bali - Same-Day Service Available
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Pump making noise? Not turning on? Low water pressure? Our expert technicians repair 
                all major brands with quick turnaround. Most repairs completed same day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Pump Diagnosis & Quote
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

        {/* Common Issues */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Pool Pump Problems We Fix</h2>
              <p className="text-lg text-muted-foreground">Expert diagnosis and repair for all issues</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonIssues.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-issue-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">{item.issue}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">SYMPTOMS:</p>
                        <p className="text-sm">{item.symptoms}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">LIKELY CAUSE:</p>
                        <p className="text-sm">{item.likely}</p>
                      </div>
                      <Badge variant="secondary" data-testid={`badge-repair-time-${index}`}>
                        <Clock className="w-3 h-3 mr-1" />
                        Repair: {item.repair}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diagnostic Process */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Diagnostic & Repair Process</h2>
              <div className="space-y-4">
                {diagnosticSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Brands We Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {pumpBrands.map((brand, index) => (
                      <Badge key={index} variant="secondary">{brand}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Plus many more. If you don't see your brand listed, contact us - we likely service it!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pump Repair Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real repairs, real savings</p>
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
                      <p className="text-sm font-semibold text-primary mb-1">Our Solution:</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Outcome:</p>
                      <p className="text-sm text-muted-foreground">{study.outcome}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {study.savings}
                      </p>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Pool Pump Repair FAQs</h2>
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
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Pool Pump Fixed Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Expert diagnosis, honest quotes, fast repairs. Contact us now for same-day service.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(whatsappLink, '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Pump Repair
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 mb-2" />
                <p className="font-semibold">All Brands</p>
                <p className="text-sm text-white/80">Pentair, Hayward, Emaux & more</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <p className="font-semibold">Fast Service</p>
                <p className="text-sm text-white/80">Same-day repairs available</p>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="w-8 h-8 mb-2" />
                <p className="font-semibold">Parts In Stock</p>
                <p className="text-sm text-white/80">Quick turnaround</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
