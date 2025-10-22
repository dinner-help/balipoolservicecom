import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star } from "lucide-react";

export default function SeminyakPoolCleaning() {
  const services = [
    "Weekly pool cleaning and maintenance",
    "Water chemistry testing and balancing",
    "Filter cleaning and equipment inspection",
    "Algae treatment and prevention",
    "Pool equipment repair and replacement",
    "Emergency same-day service available"
  ];

  const neighborhoods = [
    "Petitenget", "Oberoi", "Kayu Aya", "Seminyak Square Area", 
    "Batu Belig", "Drupadi Street", "Dhyana Pura", "Sunset Road"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Seminyak | Professional Pool Maintenance Service Bali</title>
        <meta name="description" content="Expert pool cleaning & maintenance in Seminyak, Bali. Serving luxury villas, resorts & vacation rentals. Same-day service, EU-certified chemicals. Call +628113702343" />
        <meta name="keywords" content="pool cleaning seminyak, seminyak pool maintenance, villa pool service seminyak, luxury pool cleaning bali, professional pool cleaner seminyak" />
        <link rel="canonical" href="https://poolservicebali.com/pool-cleaning-seminyak" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Seminyak Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pool Cleaning & Maintenance in Seminyak, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert pool service for Seminyak's luxury villas, vacation rentals, and resort properties. Fast response time, premium chemicals, and trusted by hundreds of property owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-seminyak">
                  <a href="https://wa.me/628113702343?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Seminyak">
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

        {/* Why Seminyak Needs Professional Pool Maintenance */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Seminyak Properties Need Professional Pool Maintenance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-climate">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Tropical Coastal Climate</h3>
                  <p className="text-muted-foreground">
                    Seminyak's beachfront location means higher humidity (75-85%) and salt air that accelerates algae growth and equipment corrosion. Professional maintenance prevents costly damage.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-rental">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">High Rental Turnover</h3>
                  <p className="text-muted-foreground">
                    Seminyak villa rentals see constant guest turnover. Crystal-clear water is essential for 5-star reviews and repeat bookings. We ensure your pool is always photo-ready.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-standards">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">International Standards</h3>
                  <p className="text-muted-foreground">
                    Seminyak properties cater to international guests expecting EU/USA pool safety standards. We use NSF-certified chemicals and maintain professional documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services in Seminyak */}
        <section className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Pool Cleaning Services in Seminyak
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
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Seminyak Properties Serviced</div>
                </div>
                <div>
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas in Seminyak */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Seminyak Neighborhoods We Serve
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
              We provide fast pool cleaning and maintenance service throughout Seminyak with an average response time of 30 minutes for emergency calls.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Cleaning Pricing in Seminyak
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Small Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m² (6m x 4m)</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 350,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Complete cleaning & vacuuming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Water chemistry testing</span>
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
                    MOST POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-2">Medium Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m² (10m x 5m)</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 450,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Everything in Small package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Digital service reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Large Pool / Resort</h3>
                  <p className="text-sm text-muted-foreground mb-4">50m²+ or commercial</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Contact for quote</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Everything in Medium package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated technician</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>24/7 priority support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions - Seminyak Pool Service
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How often should I clean my pool in Seminyak?</h3>
                  <p className="text-muted-foreground">
                    Due to Seminyak's coastal humidity and high temperatures, we recommend weekly professional cleaning for residential pools and twice-weekly for vacation rental properties with frequent guest turnover.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you service Airbnb and vacation rental pools in Seminyak?</h3>
                  <p className="text-muted-foreground">
                    Yes! We specialize in vacation rental pool maintenance. We work around guest schedules, provide digital reports for remote property owners, and ensure your pool is always photo-ready for the next booking.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How quickly can you respond to pool emergencies in Seminyak?</h3>
                  <p className="text-muted-foreground">
                    Our average emergency response time in Seminyak is 30 minutes. We're based nearby and offer 24/7 emergency support for green water, equipment failures, or urgent cleaning needs before guest arrivals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What chemicals do you use for Seminyak pools?</h3>
                  <p className="text-muted-foreground">
                    We offer EU/USA NSF-certified chemicals (recommended for luxury properties and international guests) or Indonesian brand alternatives. All chemicals are included in our service pricing.
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
              Ready for Professional Pool Service in Seminyak?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied Seminyak villa owners, property managers, and resort operators who trust us for reliable, professional pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-seminyak">
              <a href="https://wa.me/628113702343?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Seminyak">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now - Seminyak Pool Service
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Call or WhatsApp: +62 811-370-2343
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
