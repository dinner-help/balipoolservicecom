import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, CheckCircle2, Droplets, Sparkles, Shield, Leaf, DollarSign, Heart } from 'lucide-react';

export default function SaltwaterPoolMaintenanceBali() {
  const whatsappNumber = '+6282237565997';
  const whatsappMessage = encodeURIComponent('Hi, I want to learn about saltwater pool maintenance in Bali. Can you help?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    {
      icon: Heart,
      benefit: 'Softer on Skin',
      description: 'Gentle on eyes and skin, no harsh chlorine smell or irritation',
      perfect: 'Families, sensitive skin'
    },
    {
      icon: DollarSign,
      benefit: 'Lower Chemical Costs',
      description: 'Generates own chlorine from salt, reduces chemical purchases by 60-80%',
      perfect: 'Long-term savings'
    },
    {
      icon: Leaf,
      benefit: 'Eco-Friendly',
      description: 'Fewer chemicals transported and disposed, better for Bali environment',
      perfect: 'Sustainability-focused'
    },
    {
      icon: Sparkles,
      benefit: 'Crystal Clear Water',
      description: 'Consistent sanitation, naturally soft, sparkling water',
      perfect: 'Premium feel'
    }
  ];

  const maintenanceNeeds = [
    'Monitor salt levels (2,700-3,400 ppm optimal)',
    'Test pH weekly (target 7.2-7.6)',
    'Clean salt cell every 3 months (Bali climate)',
    'Check chlorinator output and adjust seasonally',
    'Balance alkalinity and calcium hardness',
    'Inspect cell for calcium buildup or damage',
    'Regular pool cleaning (debris, brushing, vacuuming)',
    'Monitor stabilizer levels (cyanuric acid)'
  ];

  const commonMistakes = [
    {
      mistake: 'Wrong Salt Type',
      problem: 'Using iodized table salt damages chlorinator',
      solution: 'Only use pure pool-grade salt (99.8% NaCl minimum)'
    },
    {
      mistake: 'Neglecting Cell Cleaning',
      problem: 'Calcium buildup reduces chlorine production',
      solution: 'Acid wash cell every 3 months in Bali climate'
    },
    {
      mistake: 'Ignoring pH',
      problem: 'Saltwater systems raise pH, causing scaling',
      solution: 'Test and adjust pH weekly with muriatic acid'
    },
    {
      mistake: 'Over-Salting',
      problem: 'Too much salt corrodes equipment and surfaces',
      solution: 'Maintain 2,700-3,400 ppm, test regularly'
    }
  ];

  const conversionProcess = [
    'Pool assessment - compatible equipment and surfaces',
    'Water chemistry testing and balancing',
    'Install salt chlorinator system (pump, cell, controller)',
    'Add correct amount of pool-grade salt',
    'Program chlorinator for pool size and climate',
    'Test and calibrate chlorine production',
    'Train owner on maintenance requirements',
    'Schedule 30-day follow-up inspection'
  ];

  const caseStudies = [
    {
      title: 'Villa Seminyak - Chlorine to Saltwater Conversion',
      situation: '4 rental villas, guest complaints about chlorine smell and skin irritation',
      action: 'Converted all 4 pools to saltwater systems',
      result: 'Guest reviews improved 40%, chemical costs down 70%, increased bookings',
      roi: 'Paid for itself in 14 months through better reviews and lower costs'
    },
    {
      title: 'Family Home Canggu - Sensitive Skin Solution',
      situation: 'Children with eczema, traditional chlorine caused flare-ups',
      action: 'Installed premium salt system, custom maintenance plan',
      result: 'Kids swimming daily without irritation, parents thrilled',
      savings: '65,000 IDR/month chemical savings + priceless comfort'
    },
    {
      title: 'Eco-Resort Ubud - Sustainability Initiative',
      situation: '3 pools, wanted to reduce chemical use for environmental certification',
      action: 'Saltwater conversion + solar heating integration',
      result: 'Achieved Green certification, featured in eco-travel guides',
      impact: '80% reduction in chemical transport/disposal'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a saltwater pool cheaper to maintain in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, after initial investment. Saltwater pools reduce chemical costs by 60-80% (saving 500,000-800,000 IDR annually for average villa pool). However, salt cells need replacement every 3-5 years (3,500,000-6,500,000 IDR). Overall, most owners see net savings of 300,000-500,000 IDR per year."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert my existing pool to saltwater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most pools can be converted. Key requirements: functional pump and filter, compatible surface material (concrete, fiberglass, vinyl - some natural stone can be damaged by salt), adequate space for chlorinator installation. Conversion typically costs 12,000,000-25,000,000 IDR depending on pool size."
        }
      },
      {
        "@type": "Question",
        "name": "How often does a saltwater pool need maintenance in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weekly: test pH and adjust if needed, check salt level monthly. Every 3 months: clean salt cell (Bali's climate causes faster calcium buildup). Quarterly: balance alkalinity and calcium hardness. Regular cleaning (skimming, brushing, vacuuming) still required just like traditional pools."
        }
      },
      {
        "@type": "Question",
        "name": "Will saltwater damage my pool equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When properly maintained (correct salt levels, balanced chemistry), modern equipment handles saltwater fine. Use salt-compatible fixtures, handrails, and lights. Avoid: cheap galvanized parts, natural stone coping (some types), certain decorative metals. We recommend compatible equipment during conversion."
        }
      },
      {
        "@type": "Question",
        "name": "Does saltwater pool feel like ocean water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Pool salt levels (3,000 ppm) are much lower than ocean (35,000 ppm). You'll barely taste the salt - it's softer and silkier than traditional chlorine pools, but nowhere near as salty as the sea. Most people describe it as 'silky smooth' water."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Saltwater Pool Maintenance & Conversion",
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
        <title>Saltwater Pool Maintenance Bali | Conversion & Care Services</title>
        <meta name="description" content="Expert saltwater pool maintenance in Bali. Conversion services, cell cleaning, chemistry balancing. Softer water, lower chemical costs. Seminyak, Canggu, Ubud." />
        <meta name="keywords" content="saltwater pool Bali, salt pool maintenance, chlorine to saltwater conversion, salt cell cleaning, saltwater pool benefits, eco pool Bali" />
        <link rel="canonical" href="https://balipool.services/saltwater-pool-maintenance-bali" />
        
        <meta property="og:title" content="Saltwater Pool Maintenance Bali | Conversion & Care Services" />
        <meta property="og:description" content="Expert saltwater pool maintenance in Bali. Conversion services, cell cleaning, chemistry balancing. Softer water, lower chemical costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipool.services/saltwater-pool-maintenance-bali" />
        
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
        <section className="relative bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-sky-700" data-testid="badge-service">
                <Sparkles className="w-3 h-3 mr-1" />
                Softer, Cleaner, Eco-Friendly
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Saltwater Pool Maintenance Bali - Gentle on Skin, Easy on Budget
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Enjoy crystal clear, silky-soft water without harsh chemicals. Expert saltwater pool maintenance 
                and conversion services across Bali. Reduce chemical costs, eliminate chlorine smell, perfect for families.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Saltwater Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                  data-testid="button-pricing"
                >
                  <Link href="/pricing">Conversion Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Saltwater in Bali?</h2>
              <p className="text-lg text-muted-foreground">The perfect pool solution for tropical living</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                      </div>
                      <CardTitle className="text-lg">{item.benefit}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <Badge variant="secondary">{item.perfect}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Maintenance Requirements */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Saltwater Pool Maintenance Checklist</h2>
              <p className="text-center text-muted-foreground mb-8">
                Less work than traditional chlorine pools, but still needs proper care
              </p>
              <div className="space-y-4">
                {maintenanceNeeds.map((task, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`maintenance-task-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-lg pt-1">{task}</p>
                  </div>
                ))}
              </div>
              
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Our Saltwater Maintenance Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle everything: weekly chemistry testing, monthly salt level checks, quarterly cell cleaning, 
                    and pH balancing. You just enjoy your silky-soft pool. Plans start at 1,200,000 IDR/month.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Avoid These Saltwater Pool Mistakes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonMistakes.map((item, index) => (
                <Card key={index} data-testid={`card-mistake-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-destructive">{item.mistake}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-1">The Problem:</p>
                      <p className="text-sm text-muted-foreground">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">The Solution:</p>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Process */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Chlorine to Saltwater Conversion Process</h2>
              <div className="space-y-4">
                {conversionProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`conversion-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white flex-shrink-0 font-bold">
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
              <h2 className="text-3xl font-bold mb-4">Saltwater Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real results from Bali pool owners</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} data-testid={`card-case-study-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Situation:</p>
                      <p className="text-sm text-muted-foreground">{study.situation}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Action:</p>
                      <p className="text-sm text-muted-foreground">{study.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Result:</p>
                      <p className="text-sm text-muted-foreground">{study.result}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {study.roi || study.savings || study.impact}
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
            <h2 className="text-3xl font-bold mb-8 text-center">Saltwater Pool FAQs</h2>
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
        <section className="py-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Switch to Saltwater?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and conversion quote. Experience the difference of silky-soft water.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open(whatsappLink, '_blank')}
              data-testid="button-final-cta"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Saltwater Consultation
            </Button>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Heart className="w-8 h-8 mb-2" />
                <p className="font-semibold">Softer Water</p>
                <p className="text-sm text-white/80">Gentle on skin & eyes</p>
              </div>
              <div className="flex flex-col items-center">
                <DollarSign className="w-8 h-8 mb-2" />
                <p className="font-semibold">Lower Costs</p>
                <p className="text-sm text-white/80">60-80% chemical savings</p>
              </div>
              <div className="flex flex-col items-center">
                <Leaf className="w-8 h-8 mb-2" />
                <p className="font-semibold">Eco-Friendly</p>
                <p className="text-sm text-white/80">Reduce chemical use</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
