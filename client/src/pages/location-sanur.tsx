import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Waves } from "lucide-react";

export default function SanurPoolCleaning() {
  const services = [
    "Saltwater pool maintenance specialist",
    "Weekly pool cleaning and chemical balancing",
    "Beach villa pool care expertise",
    "Equipment repair and replacement",
    "Algae treatment and prevention",
    "Coastal corrosion protection"
  ];

  const neighborhoods = [
    "Sanur Beach", "Sindhu Beach", "Karang Beach", "Mertasari",
    "Semawang", "Batujimbar", "Bypass Ngurah Rai Area", "Serangan"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Sanur Bali | Saltwater & Beach Villa Pool Maintenance Specialists</title>
        <meta name="description" content="Professional pool cleaning in Sanur for beach villas, saltwater pools & family homes. Coastal property expertise, saltwater system specialists. From IDR 800K/month. Call: +62 822-3756-5997" />
        <meta name="keywords" content="pool cleaning sanur, sanur pool maintenance, saltwater pool service bali, beach villa pool cleaning, professional pool cleaner sanur" />
        <link rel="canonical" href="https://balipoolservice.com/location-sanur" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Waves className="h-4 w-4" />
                <span className="text-sm font-semibold">Sanur Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pool Cleaning & Maintenance in Sanur, Bali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert pool service for Sanur's beachfront villas and properties. Saltwater pool specialists with coastal expertise and reliable maintenance you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-sanur">
                  <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Sanur">
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

        {/* Why Sanur */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Sanur Pool Owners Choose Our Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-saltwater">
                <CardContent className="p-6">
                  <Waves className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Saltwater Pool Experts</h3>
                  <p className="text-muted-foreground">
                    Sanur's beachfront location makes saltwater pools popular. We specialize in salt chlorinator maintenance, cell cleaning, and optimal salinity levels for perfect water chemistry.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-coastal">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Coastal Corrosion Prevention</h3>
                  <p className="text-muted-foreground">
                    Salt air from Sanur Beach accelerates equipment corrosion. Our preventive maintenance programs protect pumps, filters, and heaters from coastal deterioration, extending equipment life.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-reliable">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Family-Friendly Standards</h3>
                  <p className="text-muted-foreground">
                    Sanur's family-oriented beach community demands safe, clean pools. We maintain EU/NSF safety standards perfect for children and provide detailed water quality documentation.
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
              Pool Maintenance Services in Sanur
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
                  <div className="text-2xl font-bold mb-1">40 Min</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">120+</div>
                  <div className="text-sm text-muted-foreground">Sanur Properties Serviced</div>
                </div>
                <div>
                  <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Saltwater Pool Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sanur Areas We Cover
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
              Complete pool cleaning coverage throughout Sanur's beachfront and residential areas with fast, reliable service.
            </p>
          </div>
        </section>

        {/* Common Pool Types in Sanur */}
        <section className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Types We Service in Sanur
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card data-testid="card-traditional-villa">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Traditional Balinese Villa Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Most common in Sanur - classic villa pools (20-40m²) with traditional architecture and mature tropical gardens. Established trees create heavy organic debris requiring frequent cleaning. Many older pools use <a href="/saltwater-pool-maintenance-bali" className="text-primary hover-elevate underline" data-testid="link-saltwater">saltwater chlorination systems</a> needing specialized care.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly cleaning with extra debris removal</li>
                    <li>• Saltwater system expertise and cell cleaning</li>
                    <li>• Equipment longevity focus for mature properties</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-beachfront">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Beachfront & Seaside Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Pools within 100-300m of Sanur Beach facing maximum salt air exposure and corrosion. Require proactive equipment protection and frequent <a href="/pool-pump-repair-bali" className="text-primary hover-elevate underline" data-testid="link-pump-repair">pump maintenance</a> to prevent costly failures. Coastal climate accelerates chemical consumption.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bi-weekly service recommended for salt air</li>
                    <li>• Corrosion prevention programs available</li>
                    <li>• Premium equipment protection treatments</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-family-rental">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Family Villa & Rental Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Sanur's family-friendly villas with pools (25-50m²) seeing moderate to high usage. Safety is paramount for families with children requiring pristine water quality and EU-certified chemicals. Quick response for any <a href="/emergency-pool-repair-bali" className="text-primary hover-elevate underline" data-testid="link-emergency">equipment emergencies</a> during guest stays.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly professional maintenance</li>
                    <li>• Child-safe EU/NSF certified chemicals</li>
                    <li>• Fast emergency response for rental properties</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-retirement-expat">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Retirement & Expat Residence Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Permanent residence pools in Sanur's established expat community. Long-term owners value reliable service, honest communication, and cost-effective maintenance. Older pools often benefit from efficiency upgrades and <a href="/pool-renovation-bali" className="text-primary hover-elevate underline" data-testid="link-renovation">modernization</a> to reduce operating costs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Consistent weekly or bi-weekly service</li>
                    <li>• Cost-effective maintenance programs</li>
                    <li>• Upgrade consultation for aging systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sanur Pool Cleaning Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 438,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Full cleaning & vacuuming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Saltwater system check</span>
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
                    BEACHFRONT SPECIAL
                  </div>
                  <h3 className="text-xl font-bold mb-2">Beach Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 563,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Coastal corrosion prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment protection</span>
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
                      <span>Dedicated technician</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>24/7 support</span>
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
              Sanur Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you specialize in saltwater pools in Sanur?</h3>
                  <p className="text-muted-foreground">
                    Yes! We're experts in saltwater pool systems. We maintain salt chlorinator cells, monitor salinity levels, and ensure optimal performance. All our technicians are trained in saltwater pool chemistry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How do you protect pool equipment from salt air corrosion?</h3>
                  <p className="text-muted-foreground">
                    We apply protective coatings, regularly inspect connections and fittings, and clean equipment housing. Our preventive program significantly extends the life of pumps, heaters, and electrical components in coastal environments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Is your pool service safe for children and families?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We use NSF/EU-certified chemicals and maintain strict pH and chlorine levels safe for children. We provide detailed water quality reports that meet international family safety standards.
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
              Trusted Pool Service in Sanur
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Beachfront expertise, saltwater specialists, and family-safe pool care for Sanur's finest properties.
            </p>
            <Button size="lg" asChild data-testid="button-contact-sanur">
              <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Sanur">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Sanur Pool Cleaning
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
