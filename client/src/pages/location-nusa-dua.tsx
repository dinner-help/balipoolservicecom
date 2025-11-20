import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Building2 } from "lucide-react";

export default function NusaDuaPoolCleaning() {
  const services = [
    "Premium resort pool maintenance",
    "Corporate contract pool service",
    "Multi-pool property management",
    "International compliance standards",
    "Equipment maintenance and repair",
    "24/7 priority support"
  ];

  const neighborhoods = [
    "BTDC Nusa Dua", "Tanjung Benoa", "Sawangan", "Benoa Harbor Area",
    "Peninsula Island", "Geger Beach Area", "Mengiat Beach", "Pratama Street"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Nusa Dua | Premium Resort Pool Service Bali</title>
        <meta name="description" content="Professional pool cleaning in Nusa Dua, Bali. Resort specialists, corporate contracts, international standards. Multi-pool expertise. Call +6282237565997" />
        <meta name="keywords" content="pool cleaning nusa dua, nusa dua pool maintenance, resort pool service bali, commercial pool nusa dua, corporate pool contracts" />
        <link rel="canonical" href="https://poolservicebali.com/pool-cleaning-nusa-dua" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-semibold">Nusa Dua Resort Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Pool Cleaning & Maintenance in Nusa Dua, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional pool service for Nusa Dua's world-class resorts and corporate properties. International standards, multi-pool expertise, and reliable service trusted by major hotel chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-nusa-dua">
                  <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20service%20in%20Nusa%20Dua">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +62 822-375-65997
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-pricing">
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Nusa Dua */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Resort-Grade Pool Service for Nusa Dua
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-resort">
                <CardContent className="p-6">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">International Resort Standards</h3>
                  <p className="text-muted-foreground">
                    Nusa Dua's BTDC area hosts world-renowned hotel chains. We maintain pools to Marriott, Hilton, and Hyatt international standards with comprehensive documentation and compliance support.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-corporate">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Corporate Contracts</h3>
                  <p className="text-muted-foreground">
                    Specialized in multi-year service agreements for resort groups and property management companies. Volume pricing, dedicated teams, and consistent quality across all your Nusa Dua properties.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-multi">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Multi-Pool Specialists</h3>
                  <p className="text-muted-foreground">
                    Expert in managing properties with multiple pools, lagoons, and water features. Coordinated service schedules, centralized reporting, and efficient resource management for resort complexes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nusa Dua Pool Maintenance Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
            <div className="bg-card border rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">45 Min</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Resort Properties</div>
                </div>
                <div>
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Individual Pools Managed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nusa Dua & Benoa Areas We Cover
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {neighborhoods.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-accent/5 rounded-lg" data-testid={`area-${index}`}>
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Complete resort pool service throughout Nusa Dua's BTDC area and Tanjung Benoa with professional, reliable maintenance.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nusa Dua Pool Service Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 30m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 400,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Premium chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Professional service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Digital reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                    RESORT CHOICE
                  </div>
                  <h3 className="text-xl font-bold mb-2">Resort/Hotel Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">30-60m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 525,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>International standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Compliance documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Priority scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Corporate Contract</h3>
                  <p className="text-sm text-muted-foreground mb-4">Multi-pool/Multi-year</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Volume pricing</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>SLA guarantees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Account manager</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nusa Dua Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you service major resort chains in Nusa Dua?</h3>
                  <p className="text-muted-foreground">
                    Yes! We work with international resort brands and maintain pools to Marriott, Hilton, and Hyatt standards. We provide complete compliance documentation, health & safety reports, and professional service records.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can you manage multiple pools across one resort property?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in resort complexes with multiple pools, water features, and lagoons. We provide coordinated service schedules, centralized reporting, and efficient team management for multi-pool properties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What corporate contract options do you offer?</h3>
                  <p className="text-muted-foreground">
                    We offer multi-year service agreements for resort groups and property management companies with volume discounts, dedicated technician teams, SLA guarantees, and assigned account managers for seamless communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Pool Service for Nusa Dua Resorts
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by international resort brands and corporate properties for reliable, professional pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-nusa-dua">
              <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20service%20in%20Nusa%20Dua">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Nusa Dua Pool Service
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: +62 822-375-65997
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
