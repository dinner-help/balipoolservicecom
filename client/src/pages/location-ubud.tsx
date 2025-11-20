import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Mountain } from "lucide-react";

export default function UbudPoolCleaning() {
  const services = [
    "Mountain pool water quality management",
    "Eco-friendly chemical options for resorts",
    "Weekly and bi-weekly maintenance",
    "Equipment inspection and repair",
    "Algae prevention in humid climate",
    "Luxury resort-grade service standards"
  ];

  const neighborhoods = [
    "Ubud Center", "Tegallalang", "Campuhan", "Penestanan",
    "Mas", "Peliatan", "Lodtunduh", "Sayan"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Ubud | Mountain Villa Pool Maintenance Bali</title>
        <meta name="description" content="Professional pool cleaning in Ubud for mountain villas & resorts. Eco-friendly options, highland water expertise. Luxury service standards. Call +6282237565997" />
        <meta name="keywords" content="pool cleaning ubud, ubud pool maintenance, mountain pool service bali, rice terrace villa pool cleaning, eco pool cleaning ubud" />
        <link rel="canonical" href="https://poolservicebali.com/pool-cleaning-ubud" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Mountain className="h-4 w-4" />
                <span className="text-sm font-semibold">Ubud Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mountain Villa Pool Cleaning & Maintenance in Ubud, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Specialized pool service for Ubud's mountain villas, luxury resorts, and eco-conscious properties. Expert solutions for highland water quality and sustainable pool care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-ubud">
                  <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Ubud">
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

        {/* Why Ubud is Different */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Unique Pool Challenges in Ubud's Highland Climate
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-mountain">
                <CardContent className="p-6">
                  <Mountain className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Mountain Water Quality</h3>
                  <p className="text-muted-foreground">
                    Ubud's highland elevation (300-600m) affects water chemistry differently than coastal areas. Our technicians understand mineral content from mountain water sources and adjust treatments accordingly.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-rainfall">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Higher Rainfall Management</h3>
                  <p className="text-muted-foreground">
                    Ubud receives more rainfall than coastal Bali (2,000+ mm annually). We proactively manage overflow, water dilution, and post-rain chemical rebalancing to keep pools crystal clear.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-eco">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Eco-Conscious Solutions</h3>
                  <p className="text-muted-foreground">
                    Ubud's wellness and sustainability culture demands environmentally responsible pool care. We offer mineral pool systems, plant-based options, and reduced-chemical programs without compromising water quality.
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
              Ubud Pool Maintenance Services
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
                  <div className="text-2xl font-bold mb-1">60 Min</div>
                  <div className="text-sm text-muted-foreground">Response Time to Ubud</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">80+</div>
                  <div className="text-sm text-muted-foreground">Ubud Villas & Resorts</div>
                </div>
                <div>
                  <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Mountain Water Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ubud Areas We Serve
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
              Complete pool cleaning coverage throughout Ubud's mountain communities, from Tegallalang's rice terraces to Sayan's riverside villas.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Service Pricing for Ubud
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 375,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Mountain water expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Rainfall management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Eco-friendly chemicals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                    RESORT STANDARD
                  </div>
                  <h3 className="text-xl font-bold mb-2">Luxury Villa/Resort</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 475,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Premium eco options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment maintenance</span>
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
                  <h3 className="text-xl font-bold mb-2">Commercial Resort</h3>
                  <p className="text-sm text-muted-foreground mb-4">50m²+</p>
                  <div className="text-3xl font-bold text-primary mb-4">Custom</div>
                  <p className="text-sm text-muted-foreground mb-4">Contact for quote</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated technician</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Multi-pool packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Compliance documentation</span>
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
              Ubud Pool Service Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How does mountain altitude affect pool maintenance in Ubud?</h3>
                  <p className="text-muted-foreground">
                    Ubud's elevation (300-600m) results in different water mineralization and cooler nighttime temperatures. We adjust chemical dosing and filtration schedules to account for these highland conditions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you use eco-friendly chemicals for Ubud wellness resorts?</h3>
                  <p className="text-muted-foreground">
                    Yes! We specialize in mineral pool systems, plant-based sanitizers, and reduced-chemical programs perfect for Ubud's eco-conscious wellness properties while maintaining pristine water quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How do you handle Ubud's heavy rainfall seasons?</h3>
                  <p className="text-muted-foreground">
                    We proactively monitor weather patterns and schedule post-rain service visits. Our team rebalances diluted chemicals, manages overflow, and prevents algae blooms that heavy rain can trigger.
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
              Professional Pool Care for Ubud's Mountain Villas
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted by Ubud's luxury resorts, wellness retreats, and private villas for eco-conscious, expert pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-ubud">
              <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Ubud">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Ubud Pool Service
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
