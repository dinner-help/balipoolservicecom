import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Clock, CheckCircle2, AlertTriangle, Wrench, Droplets, Zap, Shield } from 'lucide-react';

export default function EmergencyPoolRepairBali() {
  const whatsappNumber = '+6282237565997';
  const whatsappMessage = encodeURIComponent('Hi, I need emergency pool repair service in Bali. Please help!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emergencyProblems = [
    {
      icon: Droplets,
      problem: 'Major Leak',
      description: 'Losing 5+ cm of water daily, structural damage risk',
      response: '30 mins'
    },
    {
      icon: Zap,
      problem: 'Pump Failure',
      description: 'Complete circulation loss, water turning green',
      response: '1 hour'
    },
    {
      icon: AlertTriangle,
      problem: 'Green Pool Before Guests',
      description: 'Villa guests arriving in 24-48 hours',
      response: 'Same day'
    },
    {
      icon: Wrench,
      problem: 'Equipment Breakdown',
      description: 'Filter, heater, or chlorinator failure',
      response: '2 hours'
    }
  ];

  const diagnosticProcess = [
    'Immediate phone assessment within 5 minutes',
    'Emergency dispatch - technician en route in 30 minutes',
    'On-site diagnosis with thermal imaging and leak detection',
    'Same-day repair with parts from local inventory',
    'Water chemistry correction and equipment testing',
    'Follow-up inspection within 24 hours'
  ];

  const caseStudies = [
    {
      title: 'Villa Seminyak - Major Leak Before Guest Arrival',
      problem: 'Pool losing 10cm/day, guests arriving in 18 hours',
      solution: 'Located underground pipe crack, emergency repair, refilled and balanced chemistry',
      result: 'Pool ready in 14 hours, guests never knew there was an issue',
      testimonial: 'They saved our booking and our reputation',
      property: 'Luxury 4-bedroom villa'
    },
    {
      title: 'Resort Canggu - Complete Pump Failure',
      problem: 'Main circulation pump failed during peak season',
      solution: 'Replaced pump motor, upgraded controller, shock treatment',
      result: 'Pool operational in 4 hours, crystal clear by morning',
      testimonial: 'Incredibly fast response, professional service',
      property: '12-villa resort'
    },
    {
      title: 'Homeowner Denpasar - Green Pool Emergency',
      problem: 'Pool turned green overnight, family event in 2 days',
      solution: 'Algae treatment, pressure wash, continuous filtration, chemical rebalance',
      result: 'Pool sparkling in 36 hours, event went perfectly',
      testimonial: 'Thought it was impossible, but they delivered',
      property: 'Private residence'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you respond to pool emergencies in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee a technician on-site within 30 minutes for major emergencies like leaks or equipment failure in Seminyak, Canggu, and Denpasar. For other areas across Bali, response time is typically 1-2 hours. We operate 24/7 including weekends and holidays."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifies as a pool emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major water leaks (5+ cm daily), complete pump or filter failure, severely green or black water before guest arrival, chemical balance emergencies (pH extremes), and equipment safety issues all qualify for emergency service."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix a green pool before my guests arrive tomorrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in most cases. Our emergency green pool recovery involves shock chlorination, algae treatment, continuous filtration, and chemical rebalancing. Most pools can be cleared within 24-48 hours depending on severity. We've successfully recovered pools in as little as 12 hours for urgent situations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you carry spare parts for emergency repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our service vehicles stock common emergency parts including pump motors, filter valves, O-rings, pressure gauges, and chemical supplies. For specialized equipment, we have relationships with suppliers across Bali for same-day delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What's the cost of emergency pool repair in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emergency callout fee is 500,000 IDR for same-day service, which includes diagnosis and first hour of labor. Additional repairs are charged based on parts and time required. We provide upfront quotes before starting any work."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emergency Pool Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bali Pool Service",
      "image": "https://balipool.services/logo.png",
      "telephone": whatsappNumber,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bali",
        "addressCountry": "ID"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Seminyak"
      },
      {
        "@type": "City",
        "name": "Canggu"
      },
      {
        "@type": "City",
        "name": "Denpasar"
      },
      {
        "@type": "City",
        "name": "Ubud"
      },
      {
        "@type": "City",
        "name": "Sanur"
      }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://wa.me/" + whatsappNumber,
      "availableLanguage": ["English", "Bahasa Indonesia"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Emergency Pool Repair Bali - 30 Min Response | 24/7 Service</title>
        <meta name="description" content="Emergency pool repair in Bali with 30-minute response time. Major leaks, pump failures, green pool before guests. Available 24/7 across Seminyak, Canggu, Denpasar. Call now!" />
        <meta name="keywords" content="emergency pool repair Bali, urgent pool fix Bali, pool leak emergency, pump failure Bali, green pool emergency, 24/7 pool repair Bali" />
        <link rel="canonical" href="https://balipool.services/emergency-pool-repair-bali" />
        
        <meta property="og:title" content="Emergency Pool Repair Bali - 30 Min Response | 24/7 Service" />
        <meta property="og:description" content="Emergency pool repair in Bali with 30-minute response time. Major leaks, pump failures, green pool before guests. Available 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipool.services/emergency-pool-repair-bali" />
        
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
        <section className="relative bg-gradient-to-br from-destructive to-destructive/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-destructive" data-testid="badge-emergency">
                <Clock className="w-3 h-3 mr-1" />
                24/7 Emergency Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Emergency Pool Repair Bali - 30 Minute Response
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Major leak? Pump failure? Green pool before guests arrive? We're on our way. 
                Expert technicians available 24/7 across Seminyak, Canggu, Denpasar, and all of Bali.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  data-testid="button-emergency-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Call Now - Emergency Repair Within 30 Minutes
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                  data-testid="button-view-pricing"
                >
                  <Link href="/pricing">View Emergency Rates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Problems */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Pool Emergencies We Handle</h2>
              <p className="text-lg text-muted-foreground">Immediate response for these critical situations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyProblems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-emergency-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <CardTitle className="text-lg">{item.problem}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <Badge variant="secondary" data-testid={`badge-response-${index}`}>
                        <Clock className="w-3 h-3 mr-1" />
                        Response: {item.response}
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
              <h2 className="text-3xl font-bold mb-8 text-center">Our Emergency Response Process</h2>
              <div className="space-y-4">
                {diagnosticProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`process-step-${index}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-destructive" />
                  Emergency Service Guarantee
                </h3>
                <p className="text-muted-foreground">
                  If we can't get a technician to you within 30 minutes in Seminyak/Canggu/Denpasar for major emergencies, 
                  your callout fee is waived. We're that confident in our response time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Emergency Success Stories</h2>
              <p className="text-lg text-muted-foreground">How we've helped property owners in crisis situations</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} data-testid={`card-case-study-${index}`}>
                  <CardHeader>
                    <Badge className="mb-2 w-fit" variant="outline">{study.property}</Badge>
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
                      <p className="text-sm font-semibold mb-1">The Result:</p>
                      <p className="text-sm text-muted-foreground">{study.result}</p>
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
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Emergency Pool Repair FAQs</h2>
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
        <section className="py-16 bg-gradient-to-br from-destructive to-destructive/80 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Wait - Every Minute Counts</h2>
            <p className="text-xl mb-8 text-white/90">
              Pool emergencies get worse with time. Contact us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open(whatsappLink, '_blank')}
                data-testid="button-final-cta"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Emergency Line
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
                data-testid="button-all-services"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <p className="font-semibold">30 Min Response</p>
                <p className="text-sm text-white/80">Guaranteed in key areas</p>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="w-8 h-8 mb-2" />
                <p className="font-semibold">Expert Technicians</p>
                <p className="text-sm text-white/80">10+ years experience</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 mb-2" />
                <p className="font-semibold">Parts In Stock</p>
                <p className="text-sm text-white/80">Same-day repairs</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
