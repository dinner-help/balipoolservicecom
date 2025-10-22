import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Building } from "lucide-react";

export default function DenpasarPoolMaintenance() {
  const services = [
    "Commercial pool maintenance",
    "Office building pool service",
    "Residential complex pool care",
    "Equipment repair and replacement",
    "Compliance documentation",
    "Weekly and bi-weekly packages"
  ];

  const neighborhoods = [
    "Renon", "Sanglah", "Sesetan", "Panjer",
    "Pemogan", "Sidakarya", "Gatsu Area", "Teuku Umar"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Maintenance Denpasar | Commercial Pool Service Bali</title>
        <meta name="description" content="Professional pool maintenance in Denpasar, Bali. Commercial pools, office buildings, residential complexes. Compliance documentation. Call +628113702343" />
        <meta name="keywords" content="pool maintenance denpasar, denpasar pool service, commercial pool cleaning bali, office pool maintenance denpasar, residential complex pool service" />
        <link rel="canonical" href="https://poolservicebali.com/pool-maintenance-denpasar" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Building className="h-4 w-4" />
                <span className="text-sm font-semibold">Denpasar Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pool Maintenance Services in Denpasar, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert pool service for Denpasar's commercial buildings, office complexes, residential communities, and private properties. Professional documentation and compliance support included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-denpasar">
                  <a href="https://wa.me/628113702343?text=Hello!%20I%27m%20interested%20in%20pool%20maintenance%20service%20in%20Denpasar">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +62 811-370-2343
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-pricing">
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Denpasar */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Service for Denpasar's Business District
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-commercial">
                <CardContent className="p-6">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Commercial Pool Experts</h3>
                  <p className="text-muted-foreground">
                    Specialized in office buildings, business centers, and residential complexes. We understand commercial pool requirements and provide professional service that meets corporate standards.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-compliance">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Compliance Documentation</h3>
                  <p className="text-muted-foreground">
                    Complete service records, water quality reports, and maintenance logs for property managers and building administrators. Essential for health inspections and tenant satisfaction.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-reliable">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Business Hours Service</h3>
                  <p className="text-muted-foreground">
                    Flexible scheduling around business operations. We work during off-peak hours to minimize disruption to office workers and residents while maintaining pristine pool conditions.
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
              Denpasar Pool Maintenance Services
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
                  <div className="text-sm text-muted-foreground">Response Time in Denpasar</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">60+</div>
                  <div className="text-sm text-muted-foreground">Commercial Clients</div>
                </div>
                <div>
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Documentation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Denpasar Areas We Cover
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
              Comprehensive pool maintenance throughout Denpasar's business and residential districts with professional service standards.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Denpasar Pool Service Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Residential Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 350,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Complete cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Water chemistry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Service reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                    COMMERCIAL
                  </div>
                  <h3 className="text-xl font-bold mb-2">Office/Complex Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 475,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Commercial standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Compliance docs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Off-hours scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Large Commercial</h3>
                  <p className="text-sm text-muted-foreground mb-4">50m²+</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Contact for quote</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Multi-pool contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Priority support</span>
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
              Denpasar Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you provide documentation for building management?</h3>
                  <p className="text-muted-foreground">
                    Yes! We provide complete service records, water quality test results, chemical usage logs, and maintenance reports. Essential for property managers, condo boards, and health department compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can you service pools during business hours in Denpasar?</h3>
                  <p className="text-muted-foreground">
                    We offer flexible scheduling including early morning, late afternoon, and weekend appointments to work around office hours and minimize disruption to building tenants and workers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you handle residential complex pools?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in residential complex, condominium, and apartment building pools. We coordinate with management and provide transparent reporting for homeowner associations.
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
              Professional Pool Maintenance in Denpasar
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by commercial buildings, residential complexes, and property managers throughout Denpasar.
            </p>
            <Button size="lg" asChild data-testid="button-contact-denpasar">
              <a href="https://wa.me/628113702343?text=Hello!%20I%27m%20interested%20in%20pool%20maintenance%20service%20in%20Denpasar">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Denpasar Pool Service
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: +62 811-370-2343
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
