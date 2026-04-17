import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Award } from "lucide-react";

export default function JimbaranPoolCleaning() {
  const services = [
    "Luxury resort pool maintenance",
    "Beachfront property pool care",
    "Premium chemical packages",
    "Equipment maintenance and repair",
    "24/7 VIP support available",
    "Infinity pool specialists"
  ];

  const neighborhoods = [
    "Jimbaran Beach", "Four Seasons Area", "Intercontinental Area", "Balangan",
    "Jimbaran Bay", "Bukit Peninsula", "Kedonganan", "Uluwatu Road"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Jimbaran Bali | Luxury Resort & Beachfront Villa Pool Service</title>
        <meta name="description" content="Elite pool maintenance in Jimbaran for luxury resorts, beachfront villas & infinity pools. VIP service, discreet technicians, white-glove standards. Call: +62 823-4070-9041" />
        <meta name="keywords" content="pool cleaning jimbaran, jimbaran pool maintenance, luxury pool service bali, resort pool cleaning jimbaran, beachfront villa pool service" />
        <link rel="canonical" href="https://balipoolservice.com/location-jimbaran" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Award className="h-4 w-4" />
                <span className="text-sm font-semibold">Jimbaran Luxury Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Luxury Pool Cleaning & Maintenance in Jimbaran, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Premium pool service for Jimbaran's luxury resorts, beachfront villas, and high-end properties. VIP standards, infinity pool specialists, and white-glove service you expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-jimbaran">
                  <a href="https://wa.me/6282340709041?text=Hello!%20I%27m%20interested%20in%20luxury%20pool%20service%20in%20Jimbaran">
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

        {/* Why Jimbaran */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Premium Pool Service for Jimbaran's Finest Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-luxury">
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Luxury Resort Standards</h3>
                  <p className="text-muted-foreground">
                    Trained in 5-star resort protocols used by Four Seasons, Intercontinental, and Ritz-Carlton properties. We maintain the highest standards of pool perfection and aesthetic presentation.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-infinity">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Infinity Pool Specialists</h3>
                  <p className="text-muted-foreground">
                    Jimbaran's clifftop and beachfront infinity pools require specialized care. We're experts in overflow systems, edge maintenance, and keeping your stunning ocean views perfectly framed.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-vip">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">VIP Support Available</h3>
                  <p className="text-muted-foreground">
                    24/7 concierge-level support for luxury properties. Pre-event pool preparation, emergency response within 30 minutes, and discreet service that respects your privacy.
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
              Luxury Pool Services in Jimbaran
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
                  <div className="text-2xl font-bold mb-1">30 Min</div>
                  <div className="text-sm text-muted-foreground">VIP Emergency Response</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Luxury Properties</div>
                </div>
                <div>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">5-Star</div>
                  <div className="text-sm text-muted-foreground">Resort Standards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Jimbaran Areas We Serve
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
              Premium pool service throughout Jimbaran's luxury beachfront and clifftop properties with VIP-level care and attention.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Luxury Pool Service Pricing - Jimbaran
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 30m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 563,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Premium chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Discreet service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Photo documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                    INFINITY POOL
                  </div>
                  <h3 className="text-xl font-bold mb-2">Beachfront Infinity</h3>
                  <p className="text-sm text-muted-foreground mb-4">30-60m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 688,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Overflow edge care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>EU-certified chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Resort/VIP Service</h3>
                  <p className="text-sm text-muted-foreground mb-4">60m²+ or multiple pools</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">White-glove service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated technician</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>24/7 concierge support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Event preparation</span>
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
              Jimbaran Luxury Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you maintain pools for 5-star resorts in Jimbaran?</h3>
                  <p className="text-muted-foreground">
                    Yes! We're trusted by luxury resorts and maintain pools to international 5-star standards. Our technicians are trained in high-end hospitality pool protocols including aesthetic perfection and white-glove service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Are you infinity pool specialists?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in Jimbaran's stunning clifftop and beachfront infinity pools. We're experts in overflow systems, edge maintenance, water level precision, and keeping your pool photo-perfect.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What is your VIP support service?</h3>
                  <p className="text-muted-foreground">
                    Our VIP support includes 24/7 emergency response (30 min in Jimbaran), pre-event pool preparation, dedicated technician assignment, priority scheduling, and concierge-level communication for discerning property owners.
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
              Experience VIP Pool Service in Jimbaran
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by Jimbaran's luxury resorts, beachfront villas, and discerning property owners for premium pool care.
            </p>
            <Button size="lg" asChild data-testid="button-contact-jimbaran">
              <a href="https://wa.me/6282340709041?text=Hello!%20I%27m%20interested%20in%20luxury%20pool%20service%20in%20Jimbaran">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Jimbaran Luxury Pool Service
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
