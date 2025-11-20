import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Building2 } from "lucide-react";

export default function KutaPoolCleaning() {
  const services = [
    "Hotel & commercial pool maintenance",
    "High-volume pool service packages",
    "Weekly and twice-weekly cleaning",
    "Budget-friendly maintenance options",
    "Equipment repair and replacement",
    "24/7 emergency service"
  ];

  const neighborhoods = [
    "Kuta Beach", "Tuban", "Kartika Plaza", "Legian Border",
    "Dewi Sartika", "Raya Kuta", "Bypass Ngurah Rai", "Airport Area"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Kuta | Hotel Pool Maintenance Service Bali</title>
        <meta name="description" content="Professional pool cleaning in Kuta, Bali. Hotel & commercial pool specialists, high-volume service, budget-friendly packages. Call +6282237565997" />
        <meta name="keywords" content="pool cleaning kuta, kuta pool maintenance, hotel pool service bali, commercial pool cleaning kuta, affordable pool maintenance kuta" />
        <link rel="canonical" href="https://poolservicebali.com/pool-cleaning-kuta" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-semibold">Kuta Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pool Cleaning & Maintenance in Kuta, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Reliable pool service for Kuta's hotels, guesthouses, and villa properties. Budget-friendly packages, high-volume service capability, and professional maintenance you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-kuta">
                  <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Kuta">
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

        {/* Why Kuta */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Service Solutions for Kuta Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-commercial">
                <CardContent className="p-6">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Commercial Pool Experts</h3>
                  <p className="text-muted-foreground">
                    Specialized in hotel, guesthouse, and multi-unit property pool maintenance. We handle high-volume cleaning schedules and coordinate service around guest activities.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-budget">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Budget-Friendly Options</h3>
                  <p className="text-muted-foreground">
                    Competitive pricing for Kuta's value-oriented market without sacrificing quality. Volume discounts available for multiple properties or frequent service schedules.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-reliable">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">High Guest Turnover Ready</h3>
                  <p className="text-muted-foreground">
                    Kuta's busy tourism hub means constant pool usage. We provide frequent cleaning schedules, quick response times, and maintain crystal-clear water for daily guest satisfaction.
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
              Kuta Pool Maintenance Services
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
                  <div className="text-2xl font-bold mb-1">20 Min</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Kuta Properties Serviced</div>
                </div>
                <div>
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Hotels & Guesthouses</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Kuta Areas We Serve
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
              Complete pool cleaning coverage throughout Kuta and surrounding areas with fast response times and reliable service schedules.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Kuta Pool Service Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Small Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 325,000</div>
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
                      <span>Chemicals included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                    BEST VALUE
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guesthouse/Hotel</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 425,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>High-traffic pool care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Multi-Unit/Chain</h3>
                  <p className="text-sm text-muted-foreground mb-4">Multiple properties</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Volume discounts</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Bulk pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Coordinated service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated team</span>
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
              Kuta Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can you handle multiple properties in Kuta?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer volume discounts for property managers and hotel chains with multiple pools. We can coordinate service schedules efficiently across all your Kuta properties with a dedicated technician team.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you work around guest schedules for hotels?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We provide flexible scheduling to avoid peak guest hours. Our technicians work discreetly and efficiently, typically during early morning or late afternoon to minimize guest disruption.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What's your emergency response time in Kuta?</h3>
                  <p className="text-muted-foreground">
                    Our average emergency response time in Kuta is 20 minutes. We understand that pool problems in busy hotels need immediate attention, and we prioritize rapid response for commercial properties.
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
              Reliable Pool Service for Kuta Properties
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by hotels, guesthouses, and property managers throughout Kuta for professional, affordable pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-kuta">
              <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Kuta">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Kuta Pool Service
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
