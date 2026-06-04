import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  FileText,
  Clock,
  Users,
  Star,
  DollarSign,
  Smartphone,
  Phone,
  CheckCircle2,
  Award,
  Building,
  TrendingUp,
  Shield,
  Zap,
  Camera,
  Receipt
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function PropertyManagerPoolServiceBali() {
  const managerBenefits = [
    {
      icon: LayoutDashboard,
      title: "Portfolio Dashboard",
      description: "See all your properties at a glance. Real-time status for every pool. Filter by area, service date, or property status. Export reports for clients."
    },
    {
      icon: FileText,
      title: "Digital Service Logs & Reports",
      description: "Photo before/after documentation for every property. Complete service history. Chemical usage tracking. Share directly with property owners."
    },
    {
      icon: DollarSign,
      title: "Centralized Billing",
      description: "One invoice for all properties. Group discounts automatically applied. Flexible payment terms. Pass-through billing options for client accounts."
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Timestamped photos after every service. Show owners their pools are being maintained. Evidence for insurance claims or disputes."
    },
    {
      icon: Clock,
      title: "Booking Calendar Integration",
      description: "Sync with your property management system. Automatic pre-guest cleaning scheduling. Adjust service frequency based on occupancy."
    },
    {
      icon: Shield,
      title: "Group Discounts & Priority Service",
      description: "Volume discounts for multiple properties. Priority emergency response for your entire portfolio. Dedicated account manager."
    }
  ];

  const dashboardFeatures = [
    {
      feature: "Portfolio Overview",
      details: "View all properties on one screen. Filter by area, status, or upcoming service dates. See which pools need attention at a glance."
    },
    {
      feature: "Service History",
      details: "Complete timeline for every property. Chemical logs, equipment maintenance, repairs. Export for owner reports or accounting."
    },
    {
      feature: "Photo Reports",
      details: "Before/after photos for every visit. Timestamped and GPS-tagged. Share links directly with owners via email or WhatsApp."
    },
    {
      feature: "Emergency Tracking",
      details: "See emergency call history and response times. Track resolution status. Document issues for owner communication."
    },
    {
      feature: "Billing Management",
      details: "View invoices for all properties. Download grouped statements. Track payments and outstanding balances by property."
    },
    {
      feature: "Owner Portal Links",
      details: "Generate secure links for property owners to view their pool's service history. Read-only access, no passwords needed."
    }
  ];

  const servicePackages = [
    {
      name: "Agency Starter",
      ideal: "5-15 properties",
      discount: "10% group discount",
      price: "From Rp 400k per property/month",
      features: [
        "Weekly or bi-weekly service per property",
        "Portfolio dashboard access",
        "Photo reports after each service",
        "Consolidated monthly invoicing",
        "All chemicals included",
        "Priority scheduling",
        "Email & WhatsApp updates",
        "24/7 emergency response",
        "Quarterly account review meeting"
      ],
      popular: false
    },
    {
      name: "Agency Pro",
      ideal: "16-40 properties",
      discount: "15% group discount",
      price: "From Rp 350k per property/month",
      features: [
        "Everything in Agency Starter, plus:",
        "Dedicated account manager",
        "Custom service schedules per property",
        "Owner portal link generation",
        "Booking calendar integration",
        "Monthly property audits",
        "Priority emergency response (<90 min)",
        "Flexible pass-through billing options",
        "Custom reporting for owners",
        "Quarterly portfolio optimization review"
      ],
      popular: true
    },
    {
      name: "Agency Enterprise",
      ideal: "40+ properties",
      discount: "20% group discount",
      price: "Custom volume pricing",
      features: [
        "Everything in Agency Pro, plus:",
        "Dedicated technician teams by area",
        "Real-time service tracking",
        "Full API access for PMS integration",
        "White-label reporting options",
        "Custom SLA agreements",
        "Monthly strategy meetings",
        "Priority parts sourcing",
        "Training for your staff",
        "Custom billing structures",
        "Annual portfolio health audits"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Bali Villa Management Co.",
      portfolio: "32 villas across Canggu & Seminyak",
      rating: 5,
      text: "Managing pool service for 32 villas was a nightmare before we found them. Now everything is in one dashboard, one invoice, and we get photo reports for every property. Our owners love the transparency. The 15% discount doesn't hurt either."
    },
    {
      name: "Tropical Property Partners",
      portfolio: "18 properties, Sanur & Ubud",
      rating: 5,
      text: "The booking calendar integration is brilliant. Service automatically ramps up when villas are booked and scales down during vacant periods. Saves us money and ensures pools are always guest-ready. Best operational decision we've made."
    },
    {
      name: "Elite Bali Rentals",
      portfolio: "45+ villas islandwide",
      rating: 5,
      text: "We switched our entire 45-property portfolio to their service last year. The centralized billing alone saves our accounting team 10+ hours per month. Emergency response has been flawless - they saved two bookings during major pump failures."
    }
  ];

  const whyAgenciesChooseUs = [
    {
      icon: LayoutDashboard,
      title: "Purpose-Built for Agencies",
      description: "Our platform was designed specifically for property managers handling multiple properties. Not an afterthought - it's our core focus."
    },
    {
      icon: TrendingUp,
      title: "Scalable & Flexible",
      description: "Start with 5 properties, scale to 100+. Add or remove properties anytime. Adjust service levels based on bookings and seasons."
    },
    {
      icon: Receipt,
      title: "Simplified Accounting",
      description: "One invoice or separate invoices per owner - your choice. Pass-through billing options. Export reports for QuickBooks, Xero, or your accounting system."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Dashboard",
      description: "Check pool status while showing properties. Share photo links with owners instantly. Emergency notifications via WhatsApp."
    },
    {
      icon: Building,
      title: "Area-Based Service",
      description: "Dedicated technicians assigned by area learn your properties intimately. Reduce travel time and costs with intelligent routing."
    },
    {
      icon: Award,
      title: "Owner Communication Support",
      description: "Generate professional reports to share with property owners. Show them exactly what you're doing to maintain their investment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Property Management Bali Pool Service | Portfolio Dashboard, Group Discounts & Centralized Billing</title>
        <meta 
          name="description" 
          content="Professional pool service for Bali property management companies & villa agencies. Portfolio dashboard, digital reports, centralized billing, up to 20% group discounts. Manage 5-100+ properties effortlessly." 
        />
        <meta name="keywords" content="property management pool service bali, villa agency pool maintenance, portfolio pool service bali, property manager pool cleaning, villa management pool service" />
        
        <meta property="og:title" content="Pool Service for Property Managers & Agencies in Bali" />
        <meta property="og:description" content="Portfolio dashboard, group discounts up to 20%, centralized billing. Built for agencies managing multiple properties." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipoolservice.com/property-manager-pool-service-bali" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-manager-service">
                <Building className="w-3 h-3 mr-1" />
                For Property Management Companies & Villa Agencies
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-manager-hero">
                Pool Service Built for Property Managers
                <span className="block text-primary mt-2">Manage 100+ Properties from One Dashboard</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-manager-hero-subtitle">
                Portfolio dashboard, digital photo reports, centralized billing, and group discounts up to 20%. The professional pool solution for Bali's top property management companies.
              </p>

              {/* Value Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="border-primary/20" data-testid="card-value-dashboard">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <LayoutDashboard className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Portfolio Dashboard</p>
                        <p className="text-sm text-muted-foreground">All properties, one view</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-discount">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Up to 20% Discount</p>
                        <p className="text-sm text-muted-foreground">Volume pricing for agencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-billing">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Receipt className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Centralized Billing</p>
                        <p className="text-sm text-muted-foreground">One invoice, all properties</p>
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
                    href="https://wa.me/6282323011656?text=Hi! I'm a property manager interested in your agency pool service. Can you send me information about portfolio management and group pricing?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Get Agency Pricing & Demo
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
                    View Agency Plans
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                <CheckCircle2 className="w-4 h-4 inline mr-1 text-primary" />
                Free dashboard demo · Volume discounts · Flexible contracts · No setup fees
              </p>
            </div>
          </div>
        </section>

        {/* Manager Benefits */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-benefits">
                <Zap className="w-3 h-3 mr-1" />
                Built for Agencies
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-benefits">
                Everything Property Managers Need
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From 5 villas to 100+ properties – manage pool service with zero headaches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managerBenefits.map((benefit, index) => (
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

        {/* Dashboard Features */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-dashboard">
                <LayoutDashboard className="w-3 h-3 mr-1" />
                Portfolio Dashboard
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-dashboard">
                Your Command Center for Pool Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-time visibility into every property. Share updates with owners instantly. Make data-driven decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dashboardFeatures.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-dashboard-feature-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{item.feature}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">See the Dashboard in Action</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a 15-minute demo to see how the portfolio dashboard works with your properties. We'll show you real examples and answer all your questions.
                  </p>
                  <Button variant="outline" asChild data-testid="button-schedule-demo">
                    <a 
                      href="https://wa.me/6282323011656?text=Hi! I'd like to schedule a demo of the portfolio dashboard for property managers."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Dashboard Demo
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
                <Building className="w-3 h-3 mr-1" />
                Agency Plans
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-packages">
                Scalable Plans for Growing Agencies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start small, scale effortlessly. Bigger discounts as your portfolio grows.
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
                    <p className="text-sm text-muted-foreground mb-2">{pkg.ideal}</p>
                    <Badge variant="secondary" className="mb-4">
                      {pkg.discount}
                    </Badge>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-primary">{pkg.price}</p>
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
                          href={`https://wa.me/6282323011656?text=Hi! I'm interested in the ${pkg.name} plan for my property management company. Can we discuss?`}
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
                Have a unique portfolio or special requirements?
              </p>
              <Button variant="outline" size="lg" asChild data-testid="button-custom-plan">
                <a 
                  href="https://wa.me/6282323011656?text=Hi! I need a custom plan for my property management company. Can we discuss our specific needs?"
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

        {/* Why Agencies Choose Us */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-why-us">
                <Award className="w-3 h-3 mr-1" />
                Why Agencies Choose Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-why-us">
                Trusted by Bali's Top Property Managers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyAgenciesChooseUs.map((item, index) => (
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
                Agency Success Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-testimonials">
                What Property Managers Say
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
                      <p className="text-sm text-muted-foreground">{testimonial.portfolio}</p>
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
              Ready to Simplify Your Pool Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join property management companies managing 5-100+ properties with our platform. Get group pricing and see the dashboard today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta-final"
              >
                <a 
                  href="https://wa.me/6282323011656?text=Hi! I'm a property manager interested in your agency service. Can we discuss portfolio management and group pricing?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Get Agency Pricing Now
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
                data-testid="button-call-now"
              >
                <a href="tel:+6282323011656">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +62 823 2301 1656
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Free Dashboard Demo</p>
                  <p className="text-sm text-muted-foreground">15-minute walkthrough</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">No Setup Fees</p>
                  <p className="text-sm text-muted-foreground">Start immediately</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Flexible Contracts</p>
                  <p className="text-sm text-muted-foreground">Monthly or annual terms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Resources for Property Managers</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover-elevate" data-testid="card-resource-portfolio-cost">
                <CardContent className="p-6">
                  <Link href="/blog/pool-maintenance-cost-bali" className="group block" data-testid="link-portfolio-cost">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Portfolio Cost Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">Calculate savings with group pricing</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-calculator">
                <CardContent className="p-6">
                  <Link href="/pool-calculator" className="group block" data-testid="link-calculator">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Multi-Property Calculator
                    </h4>
                    <p className="text-sm text-muted-foreground">Estimate costs for your portfolio</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-emergency">
                <CardContent className="p-6">
                  <Link href="/blog/green-pool-cleaning-guide" className="group block" data-testid="link-emergency-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Emergency Response Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">Handle tenant/guest emergencies</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-communication">
                <CardContent className="p-6">
                  <Link href="/maintenance-guide" className="group block" data-testid="link-communication-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Owner Communication Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">What to tell property owners</p>
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
