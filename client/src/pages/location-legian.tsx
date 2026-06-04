import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Waves } from "lucide-react";

export default function LegianPoolCleaning() {
  const services = [
    "Weekly pool cleaning and maintenance",
    "Tourist accommodation pool service",
    "Beach villa pool care",
    "Equipment repair and replacement",
    "Water chemistry testing and balancing",
    "Fast emergency response"
  ];

  const neighborhoods = [
    "Legian Beach", "Double Six", "Blue Ocean", "Padma Beach",
    "Legian Kelod", "Legian Kaja", "Poppies Lane Area", "Melasti"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Legian Bali | Beach Villa & Tourist Accommodation Pool Service</title>
        <meta name="description" content="Expert pool cleaning in Legian for beach villas, tourist accommodation & surf lodges. Guest-ready pools, reliable weekly service, fast response. From IDR 800K/month. Call: +62 823-2301-1656" />
        <meta name="keywords" content="pool cleaning legian, legian pool maintenance, beach villa pool service bali, tourist pool cleaning legian, professional pool service legian" />
        <link rel="canonical" href="https://balipoolservice.com/location-legian" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Waves className="h-4 w-4" />
                <span className="text-sm font-semibold">Legian Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pool Cleaning & Maintenance in Legian, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Reliable pool service for Legian's beach villas, hotels, and tourist accommodations. Professional maintenance, competitive pricing, and service you can depend on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-legian">
                  <a href="https://wa.me/6282323011656?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Legian">
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

        {/* Why Legian */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Legian Pool Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-beach">
                <CardContent className="p-6">
                  <Waves className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Beach Area Expertise</h3>
                  <p className="text-muted-foreground">
                    Legian's beachfront location means salt air, higher humidity, and unique pool care needs. We understand coastal pool maintenance and protect your equipment from ocean air corrosion.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-tourist">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Tourist Accommodation Ready</h3>
                  <p className="text-muted-foreground">
                    Legian's busy tourism industry demands crystal-clear pools. We provide frequent service schedules, fast turnaround cleaning, and maintain guest-ready standards every time.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-reliable">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Dependable Service</h3>
                  <p className="text-muted-foreground">
                    Consistent, professional pool maintenance you can count on. No missed appointments, transparent pricing, and technicians who show up on time every week.
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
              Legian Pool Maintenance Services
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
                  <div className="text-2xl font-bold mb-1">25 Min</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">90+</div>
                  <div className="text-sm text-muted-foreground">Legian Properties</div>
                </div>
                <div>
                  <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Beach Area Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Legian Areas We Serve
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
              Complete pool cleaning coverage throughout Legian's beachfront and surrounding areas with fast, reliable service.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Legian Pool Service Pricing
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
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-2">Villa/Hotel Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 425,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Tourist-ready standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Digital reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Large/Commercial</h3>
                  <p className="text-sm text-muted-foreground mb-4">50m²+</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Contact for quote</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Volume discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Flexible scheduling</span>
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
              Legian Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How often should pools be cleaned in Legian's beach climate?</h3>
                  <p className="text-muted-foreground">
                    Due to Legian's beachfront humidity and salt air, we recommend weekly professional cleaning for residential pools and twice-weekly for high-traffic tourist accommodations to maintain crystal-clear water.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you service tourist accommodation pools in Legian?</h3>
                  <p className="text-muted-foreground">
                    Yes! We specialize in hotels, guesthouses, and vacation rentals. We understand high guest turnover demands and provide frequent cleaning schedules with fast turnaround to keep pools guest-ready.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What's your response time for emergencies in Legian?</h3>
                  <p className="text-muted-foreground">
                    Our average emergency response time in Legian is 25 minutes. We're based nearby and can quickly respond to green water, equipment failures, or urgent cleaning needs before guest check-ins.
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
              Reliable Pool Service in Legian
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by Legian's beach villas, hotels, and tourist accommodations for professional pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-legian">
              <a href="https://wa.me/6282323011656?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Legian">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Legian Pool Service
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
