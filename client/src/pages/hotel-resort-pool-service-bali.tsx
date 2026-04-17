import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Shield,
  Clock,
  Users,
  Star,
  FileText,
  Droplets,
  Phone,
  CheckCircle2,
  Award,
  Clipboard,
  BarChart3,
  Zap,
  Settings,
  HeartHandshake,
  TrendingUp
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function HotelResortPoolServiceBali() {
  const hotelBenefits = [
    {
      icon: Building2,
      title: "Multi-Pool Management Expertise",
      description: "Coordinate service across multiple pools, water features, and jacuzzis. One point of contact, consistent standards across your entire property."
    },
    {
      icon: Shield,
      title: "International Compliance Standards",
      description: "ISO 9001-aligned quality management. EU/EPA certified chemicals. Full documentation for health audits and international hotel chain requirements."
    },
    {
      icon: Users,
      title: "High Guest Turnover Ready",
      description: "Daily service options for properties with constant occupancy. Flexible scheduling around pool hours. Minimal disruption to guest experience."
    },
    {
      icon: Zap,
      title: "Dedicated Service Technicians",
      description: "Assigned team learns your property inside-out. Direct communication channels. Backup technicians trained on your systems."
    },
    {
      icon: Star,
      title: "5-Star Property Standards",
      description: "White-glove service that matches your hospitality standards. Uniformed technicians, discreet service, attention to luxury details."
    },
    {
      icon: FileText,
      title: "Digital Reports for Management",
      description: "Real-time service dashboards for F&B managers. Photo documentation. Chemical logs. Equipment maintenance history. Export to your PMS."
    }
  ];

  const complianceFeatures = [
    {
      title: "Health & Safety Compliance",
      items: [
        "Daily water quality testing & logging",
        "Chemical safety data sheets (MSDS)",
        "Staff training certifications",
        "Incident reporting protocols",
        "Pool safety equipment inspections",
        "Government health audit support"
      ]
    },
    {
      title: "International Standards",
      items: [
        "EU chemical regulations compliance",
        "WHO water quality guidelines",
        "US EPA pool standards",
        "ISO 9001 quality management",
        "Brand standard documentation (Marriott, Hilton, Accor, etc.)",
        "Third-party certification support"
      ]
    },
    {
      title: "Operational Documentation",
      items: [
        "Daily service logs with timestamps",
        "Chemical usage tracking & inventory",
        "Equipment maintenance records",
        "Before/after photo reports",
        "Monthly performance summaries",
        "Annual pool audits & recommendations"
      ]
    }
  ];

  const servicePackages = [
    {
      name: "Boutique Hotel",
      ideal: "1-2 pools, up to 50 rooms",
      price: "From Rp 1,500,000/month",
      frequency: "Daily visits",
      features: [
        "Daily water testing & chemical balancing",
        "Surface cleaning & debris removal",
        "Weekly deep cleaning & brushing",
        "Filter maintenance & backwashing",
        "All chemicals included (premium grade)",
        "Digital service logs & photo reports",
        "Priority emergency response (<2 hours)",
        "Monthly management meeting",
        "Equipment health monitoring",
        "Direct technician contact line"
      ],
      popular: false
    },
    {
      name: "Full-Service Resort",
      ideal: "3-5 pools, 50-150 rooms",
      price: "From Rp 4,500,000/month",
      frequency: "Multiple daily visits",
      features: [
        "Everything in Boutique Hotel, plus:",
        "2-3x daily service visits",
        "Dedicated technician team (2-3 staff)",
        "Real-time dashboard for management",
        "Jacuzzi & water feature maintenance",
        "Pool heating system servicing",
        "Infinity edge & overflow management",
        "Weekly pool manager site visits",
        "Quarterly equipment audits",
        "Integration with property management system",
        "Guest communication support (if needed)",
        "24/7 on-call emergency technician"
      ],
      popular: true
    },
    {
      name: "Luxury Estate Resort",
      ideal: "6+ pools, 150+ rooms, water parks",
      price: "Custom pricing",
      frequency: "Round-the-clock service",
      features: [
        "Everything in Full-Service Resort, plus:",
        "Full-time on-site technician",
        "Multiple daily visits across properties",
        "Water park & attraction maintenance",
        "Advanced automation system management",
        "Comprehensive equipment servicing",
        "Preventive maintenance program",
        "Dedicated account manager",
        "Monthly strategy & optimization meetings",
        "Staff training for your team",
        "Priority parts inventory",
        "Custom SLA agreements",
        "Annual pool renovation planning"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Anderson",
      position: "General Manager",
      property: "The Lagoon Resort & Spa, Nusa Dua",
      rating: 5,
      text: "We have 4 pools including a 25-meter lap pool and a kids' water play area. Their team handles it all flawlessly. The digital reports integrate directly into our property management system, and health inspections have never been smoother. Worth every rupiah."
    },
    {
      name: "Dewi Kusuma",
      position: "Operations Director",
      property: "Tropical Breeze Boutique Hotel, Seminyak",
      rating: 5,
      text: "Switching to professional pool service was one of our best operational decisions. Our previous in-house team was costing more and delivering inconsistent results. Now our pool is pristine daily, guests love it, and our costs are actually lower."
    },
    {
      name: "Robert Chen",
      position: "F&B Manager",
      property: "Ocean View Resort, Jimbaran",
      rating: 5,
      text: "The compliance documentation alone is worth the service. When our brand conducted a surprise audit, we had 18 months of complete service records, chemical logs, and equipment maintenance history ready to go. Audit passed with flying colors."
    }
  ];

  const whyHotelsChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted by 50+ hotels and resorts across Bali, from boutique properties to international chain hotels."
    },
    {
      icon: Clipboard,
      title: "Complete Compliance",
      description: "All documentation needed for health audits, brand standards, and international certifications. We speak the language of hospitality compliance."
    },
    {
      icon: BarChart3,
      title: "Operational Transparency",
      description: "Real-time dashboards show exactly what's happening with your pools. No more wondering if the pool tech actually showed up."
    },
    {
      icon: HeartHandshake,
      title: "Hospitality-First Mindset",
      description: "We understand guest experience is everything. Discreet service, professional appearance, zero disruption to your operations."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Fixed monthly pricing with chemicals included. No surprise invoices, no emergency call-out fees, no chemical price fluctuations."
    },
    {
      icon: Settings,
      title: "Technical Excellence",
      description: "Advanced equipment knowledge, automation expertise, energy efficiency optimization. We handle complex resort pool systems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hotel & Resort Pool Service Bali | Compliance-Ready Multi-Pool Management for 5-Star Properties</title>
        <meta 
          name="description" 
          content="Professional hotel pool service in Bali. Multi-pool management, EU-certified chemicals, health audit documentation & digital service reports. Trusted by 50+ hotels and resorts. Platinum package from IDR 2,800,000/month. Call: +62 823-4070-9041" 
        />
        <meta name="keywords" content="hotel pool service Bali, resort pool maintenance Bali, hotel pool management Bali, resort pool cleaning Bali, Seminyak hotel pool service, Nusa Dua resort pool maintenance, 5-star pool service Bali, pool compliance Bali" />
        
        <meta property="og:title" content="Hotel & Resort Bali Pool Service | 5-Star Standards" />
        <meta property="og:description" content="Trusted by 50+ hotels. Multi-pool management, compliance documentation, digital reports. Daily service, 24/7 support." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipoolservice.com/hotel-resort-pool-service-bali" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-hotel-service">
                <Building2 className="w-3 h-3 mr-1" />
                For Hotels, Resorts & Hospitality Properties
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-hotel-hero">
                Professional Pool Service for Bali Hotels & Resorts
                <span className="block text-primary mt-2">5-Star Standards, Zero Compromise</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hotel-hero-subtitle">
                Trusted by 50+ hotels and resorts across Bali. Multi-pool management, international compliance, digital reporting, and dedicated technicians who understand hospitality excellence.
              </p>

              {/* Value Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="border-primary/20" data-testid="card-value-compliance">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Full Compliance</p>
                        <p className="text-sm text-muted-foreground">International standards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-service">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Daily Service</p>
                        <p className="text-sm text-muted-foreground">Multiple visits available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-reports">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Digital Reports</p>
                        <p className="text-sm text-muted-foreground">Real-time dashboards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  asChild
                  data-testid="button-whatsapp-cta-hero"
                >
                  <a 
                    href="https://wa.me/6282340709041?text=Hi! I'm inquiring about hotel/resort pool service. Can you send me information for our property?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Request Property Assessment
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                  data-testid="button-view-packages"
                >
                  <a href="#packages">
                    View Service Plans
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                <CheckCircle2 className="w-4 h-4 inline mr-1 text-primary" />
                Free property assessment · Custom service plans · Compliance documentation included
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Benefits */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-benefits">
                <Star className="w-3 h-3 mr-1" />
                Hospitality-Grade Service
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-benefits">
                Built for Hotel & Resort Operations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                More than maintenance – we're your partner in maintaining 5-star guest experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelBenefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-compliance">
                <Shield className="w-3 h-3 mr-1" />
                Compliance & Documentation
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-compliance">
                International Standards & Full Documentation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pass health audits, brand inspections, and international certifications with complete confidence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {complianceFeatures.map((section, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-compliance-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Audit-Ready Documentation</h3>
                  <p className="text-muted-foreground mb-6">
                    18+ months of complete service history, chemical logs, and equipment records. Export to PDF for brand audits, health inspections, or insurance claims. Real-time access via secure dashboard.
                  </p>
                  <Button variant="outline" asChild data-testid="button-demo-dashboard">
                    <a 
                      href="https://wa.me/6282340709041?text=Hi! Can I see a demo of the digital dashboard and reporting system?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Dashboard Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section id="packages" className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-packages">
                <Building2 className="w-3 h-3 mr-1" />
                Service Plans
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-packages">
                Choose Your Service Level
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive packages designed for hospitality properties. All plans include chemicals, compliance documentation, and 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicePackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative hover-elevate ${pkg.popular ? 'border-primary border-2' : ''}`}
                  data-testid={`card-package-${index}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground" data-testid="badge-most-popular">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.ideal}</p>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground mt-1">{pkg.frequency}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    <div className="pt-6">
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                        data-testid={`button-get-package-${index}`}
                      >
                        <a 
                          href={`https://wa.me/6282340709041?text=Hi! I'm interested in the ${pkg.name} plan for our hotel/resort. Can we schedule an assessment?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp className="mr-2 h-4 w-4" />
                          Get This Plan
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have a unique property layout or special requirements?
              </p>
              <Button variant="outline" size="lg" asChild data-testid="button-custom-plan">
                <a 
                  href="https://wa.me/6282340709041?text=Hi! I need a custom service plan for our hotel/resort. Can we discuss our specific requirements?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Request Custom Plan
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Hotels Choose Us */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-why-us">
                <Award className="w-3 h-3 mr-1" />
                Why Hotels Choose Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-why-us">
                Trusted by Bali's Top Properties
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {whyHotelsChooseUs.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-why-us-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-testimonials">
                <Users className="w-3 h-3 mr-1" />
                Client Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-testimonials">
                What Hotel Managers Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-final-cta">
              Ready to Elevate Your Pool Service?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join 50+ hotels and resorts who trust us with their pool operations. Schedule a free property assessment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta-final"
              >
                <a 
                  href="https://wa.me/6282340709041?text=Hi! I'm interested in professional pool service for our hotel/resort. Can we schedule a property assessment?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Schedule Assessment
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
                data-testid="button-call-now"
              >
                <a href="tel:+6282340709041">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +62 823 4070 9041
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Free Property Assessment</p>
                  <p className="text-sm text-muted-foreground">Complete pool system evaluation</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Flexible Contracts</p>
                  <p className="text-sm text-muted-foreground">Monthly, quarterly, or annual plans</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Service Guarantee</p>
                  <p className="text-sm text-muted-foreground">100% satisfaction or we make it right</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Resources for Hotel Managers</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover-elevate" data-testid="card-resource-frequency">
                <CardContent className="p-6">
                  <Link href="/blog/pool-cleaning-frequency-bali-climate" className="group block" data-testid="link-frequency-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Service Frequency Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">How often hotels should service pools in Bali</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-calculator">
                <CardContent className="p-6">
                  <Link href="/pool-calculator" className="group block" data-testid="link-calculator">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Pool Calculator
                    </h4>
                    <p className="text-sm text-muted-foreground">Calculate costs for your property</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-cost">
                <CardContent className="p-6">
                  <Link href="/blog/pool-maintenance-cost-bali" className="group block" data-testid="link-cost-analysis">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Hotel Pool Cost Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">In-house vs professional service comparison</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-guide">
                <CardContent className="p-6">
                  <Link href="/maintenance-guide" className="group block" data-testid="link-pool-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Tropical Pool Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">Complete maintenance manual</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
