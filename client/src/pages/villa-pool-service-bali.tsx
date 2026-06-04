import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Calendar,
  Clock,
  Users,
  Star,
  Wrench,
  Droplets,
  Phone,
  CheckCircle2,
  TrendingUp,
  Home,
  Sparkles,
  AlertCircle,
  Award
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function VillaPoolServiceBali() {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Peace of Mind",
      description: "Focus on your guests while we ensure your pool is pristine, safe, and guest-ready 24/7. No more last-minute panics before check-ins."
    },
    {
      icon: TrendingUp,
      title: "Protect Your Asset Value",
      description: "Regular professional maintenance prevents costly repairs and extends your pool's lifespan. Protect your villa's investment value."
    },
    {
      icon: Calendar,
      title: "Flexible Service Plans",
      description: "Weekly, bi-weekly, or custom schedules that adapt to your rental calendar. More service during high season, scaled down when vacant."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Guests arriving in 3 hours and the pool is green? Pump failed before a weekend booking? We're on it. Same-day emergency service across Bali."
    },
    {
      icon: Star,
      title: "5-Star Guest Reviews",
      description: "Crystal-clear water, balanced chemistry, and spotless tiles create the wow factor that earns you glowing reviews and repeat bookings."
    },
    {
      icon: Sparkles,
      title: "Pre-Guest Deep Cleaning",
      description: "Coordinate with your property manager. We'll ensure your pool is photo-ready before every guest arrival."
    }
  ];

  const servicePackages = [
    {
      name: "Villa Essentials",
      ideal: "Perfect for small villas (3-4 bedrooms)",
      price: "From Rp 563,000/month",
      frequency: "Bi-weekly visits",
      features: [
        "Surface skimming & debris removal",
        "Vacuum pool floor & walls",
        "Brush tiles & waterline",
        "Test & balance water chemistry",
        "All chemicals included (chlorine, pH, algaecide)",
        "Filter backwash & cleaning",
        "Equipment inspection",
        "WhatsApp updates after each service",
        "24/7 emergency support"
      ],
      popular: false
    },
    {
      name: "Villa Premium",
      ideal: "Most popular for rental villas (4-6 bedrooms)",
      price: "From Rp 938,000/month",
      frequency: "Weekly visits",
      features: [
        "Everything in Essentials, plus:",
        "Weekly service visits",
        "Priority response time (<2 hours)",
        "Pre-guest arrival deep cleaning",
        "Photo reports after each service",
        "Digital service dashboard for owners",
        "Seasonal chemical optimization",
        "Minor repairs included (up to Rp 200k/month)",
        "Direct line to your dedicated technician",
        "Booking calendar integration"
      ],
      popular: true
    },
    {
      name: "Luxury Villa",
      ideal: "High-end villas & estate properties",
      price: "Custom pricing",
      frequency: "2-3x weekly visits",
      features: [
        "Everything in Premium, plus:",
        "Multiple weekly visits",
        "Dedicated technician assigned",
        "Same-day emergency service guarantee",
        "Comprehensive equipment maintenance",
        "Pool heating & automation servicing",
        "Waterfall & feature maintenance",
        "Monthly pool manager visit",
        "Quarterly equipment audit",
        "Priority parts sourcing",
        "Guest communication support (if requested)"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      property: "Villa Sungai, Canggu",
      rating: 5,
      text: "We have 4 villas and they maintain all of them flawlessly. The coordination with our booking system is seamless – pools are always sparkling before guests arrive. Their emergency response saved us twice when equipment failed. Absolute professionals.",
      issue: "Multi-property management"
    },
    {
      name: "James Thompson",
      property: "Tropical Haven Villa, Seminyak",
      rating: 5,
      text: "As a foreign owner who's only in Bali twice a year, I need someone I can trust completely. The photo reports and digital dashboard let me see exactly what's happening. Guests constantly mention the pool in their 5-star reviews.",
      issue: "Remote ownership"
    },
    {
      name: "Made Wirawan",
      property: "Bali Breeze Villas (6 properties), Ubud",
      rating: 5,
      text: "We switched from managing pool care in-house to using their service. Game changer. No more chemical storage, no more calling random techs for emergencies, and our costs actually went down. The dashboard shows all 6 properties at a glance.",
      issue: "Villa management company"
    },
    {
      name: "Claire Dubois",
      property: "Villa Harmoni, Uluwatu",
      rating: 5,
      text: "I had a full booking weekend and woke up to a green pool on Friday morning. I messaged them in a panic at 7 AM – they had someone there by 9 AM and the pool was crystal clear by guest check-in at 3 PM. Saved my booking and my reputation.",
      issue: "Emergency response"
    }
  ];

  const villaOwnerChallenges = [
    {
      challenge: "Unreliable Local Technicians",
      solution: "Dedicated professional team with backup technicians in every area. Never a missed appointment."
    },
    {
      challenge: "Last-Minute Guest Emergencies",
      solution: "24/7 emergency response with same-day service across Bali. We've saved countless bookings."
    },
    {
      challenge: "Coordinating with Property Managers",
      solution: "Direct integration with booking calendars. Automated pre-guest cleaning. Digital reports shared with managers."
    },
    {
      challenge: "Unpredictable Costs",
      solution: "All-inclusive fixed monthly pricing. Chemicals, labor, and minor repairs included. No surprise invoices."
    },
    {
      challenge: "Managing from Abroad",
      solution: "Digital dashboard with photo reports, real-time updates, and complete service history. Full transparency."
    },
    {
      challenge: "Maintaining Standards Year-Round",
      solution: "Consistent 5-star service whether your villa is booked solid or vacant for weeks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Villa Pool Service Bali | Expert Pool Cleaning for Rental Villas & Private Homes — From IDR 800K</title>
        <meta 
          name="description" 
          content="Trusted villa pool service in Bali. Keep guests happy with crystal-clear water every visit. Weekly maintenance from IDR 800K/month — all chemicals included, WhatsApp report delivered. Serving 500+ villas across Canggu, Seminyak & Ubud. Call: +62 823-2301-1656" 
        />
        <meta name="keywords" content="villa pool service Bali, villa pool maintenance Bali, rental villa pool cleaning Bali, Bali villa pool care, Seminyak villa pool service, Canggu villa pool maintenance, Ubud villa pool cleaning, pool cleaning rental villa Bali" />
        
        <meta property="og:title" content="Villa Bali Pool Service | Professional Care for Rental Properties" />
        <meta property="og:description" content="Trusted by 500+ villa owners. Weekly maintenance, emergency response, guest-ready service. All-inclusive pricing from Rp 450k/month." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipoolservice.com/villa-pool-service-bali" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-villa-service">
                <Home className="w-3 h-3 mr-1" />
                For Villa Owners & Property Managers
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-villa-hero">
                Professional Pool Service for Bali Villas
                <span className="block text-primary mt-2">Peace of Mind, Every Visit</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-villa-hero-subtitle">
                Trusted by 500+ villa owners across Bali. Weekly maintenance, 24/7 emergency response, and guest-ready service that protects your investment and earns 5-star reviews.
              </p>

              {/* Value Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="border-primary/20" data-testid="card-value-pricing">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">From Rp 450k/month</p>
                        <p className="text-sm text-muted-foreground">All chemicals included</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-emergency">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">24/7 Emergency Service</p>
                        <p className="text-sm text-muted-foreground">Same-day response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-dashboard">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Digital Dashboard</p>
                        <p className="text-sm text-muted-foreground">Photo reports, full history</p>
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
                    href="https://wa.me/6282323011656?text=Hi! I'm interested in villa pool service. Can you send me pricing and availability?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Get Custom Quote via WhatsApp
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
                    View Service Packages
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                <CheckCircle2 className="w-4 h-4 inline mr-1 text-primary" />
                Reply within 30 minutes · Free on-site assessment · No obligation quote
              </p>
            </div>
          </div>
        </section>

        {/* Villa Owner Challenges & Solutions */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-challenges">
                <AlertCircle className="w-3 h-3 mr-1" />
                Common Challenges
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-challenges">
                We Understand Villa Owner Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you manage one villa or twenty, these are the pool headaches we solve every day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villaOwnerChallenges.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-challenge-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{item.challenge}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-benefits">
                <Award className="w-3 h-3 mr-1" />
                Villa Benefits
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-benefits">
                Why Villa Owners Choose Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                More than pool cleaning – we're your partner in delivering exceptional guest experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
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

        {/* Service Packages */}
        <section id="packages" className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-packages">
                <Calendar className="w-3 h-3 mr-1" />
                Service Packages
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-packages">
                Choose Your Villa Service Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                All-inclusive packages designed for Bali villa owners. Scale up during high season, down when vacant.
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
                          href={`https://wa.me/6282323011656?text=Hi! I'm interested in the ${pkg.name} package for my villa. Can you send me more details?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp className="mr-2 h-4 w-4" />
                          Get This Package
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Need a custom plan for multiple properties or unique requirements?
              </p>
              <Button variant="outline" size="lg" asChild data-testid="button-custom-quote">
                <a 
                  href="https://wa.me/6282323011656?text=Hi! I need a custom pool service plan for my villa(s). Can we discuss?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Request Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-testimonials">
                <Users className="w-3 h-3 mr-1" />
                Villa Owner Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-testimonials">
                Trusted by Villa Owners Across Bali
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From single villas to multi-property portfolios – see how we help owners succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="w-fit mb-4">
                      {testimonial.issue}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
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
              Ready for Worry-Free Pool Care?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join 500+ villa owners who trust us to keep their pools pristine and guests delighted. Get a custom quote in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta-final"
              >
                <a 
                  href="https://wa.me/6282323011656?text=Hi! I'm a villa owner interested in your pool service. Can you send me pricing and availability?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Get Your Free Quote
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
                  Call Now: +62 823 2301 1656
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Free Assessment</p>
                  <p className="text-sm text-muted-foreground">On-site visit with no obligation</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Flexible Contracts</p>
                  <p className="text-sm text-muted-foreground">Monthly plans, cancel anytime</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Satisfaction Guarantee</p>
                  <p className="text-sm text-muted-foreground">Not happy? We'll make it right</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Helpful Resources for Villa Owners</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover-elevate" data-testid="card-resource-cost-guide">
                <CardContent className="p-6">
                  <Link href="/blog/pool-maintenance-cost-bali" className="group block" data-testid="link-cost-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Villa Pool Costs Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">Complete breakdown of monthly maintenance costs</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-calculator">
                <CardContent className="p-6">
                  <Link href="/pool-calculator" className="group block" data-testid="link-calculator">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Pool Calculator
                    </h4>
                    <p className="text-sm text-muted-foreground">Calculate volume, chemicals, and maintenance costs</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-emergency">
                <CardContent className="p-6">
                  <Link href="/blog/green-pool-cleaning-guide" className="group block" data-testid="link-green-pool-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Green Pool Emergency
                    </h4>
                    <p className="text-sm text-muted-foreground">What to do before guests arrive</p>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate" data-testid="card-resource-maintenance">
                <CardContent className="p-6">
                  <Link href="/maintenance-guide" className="group block" data-testid="link-maintenance-guide">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Maintenance Guide
                    </h4>
                    <p className="text-sm text-muted-foreground">Complete tropical pool care manual</p>
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
