import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, CheckCircle2, Star, Wifi } from "lucide-react";

export default function CangguPoolCleaning() {
  const services = [
    "Flexible scheduling for digital nomad properties",
    "Weekly and bi-weekly maintenance packages",
    "Water chemistry testing with lab-grade equipment",
    "Eco-friendly chemical options available",
    "Filter cleaning and equipment maintenance",
    "Multi-property service coordination"
  ];

  const neighborhoods = [
    "Batu Bolong", "Berawa", "Echo Beach", "Pererenan",
    "Nelayan", "Padonan", "Cemagi", "Old Man's"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Canggu | Villa & Rental Pool Maintenance Bali</title>
        <meta name="description" content="Expert pool cleaning in Canggu for villas, rentals & coworking spaces. Flexible scheduling for digital nomads. Eco-friendly options. Call +6282237565997" />
        <meta name="keywords" content="pool cleaning canggu, canggu pool maintenance, villa pool service canggu, digital nomad pool cleaning, professional pool cleaner canggu" />
        <link rel="canonical" href="https://poolservicebali.com/pool-cleaning-canggu" />
      </Helmet>

             <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Canggu Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Pool Cleaning & Maintenance for Canggu Villas & Rentals
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional pool service tailored for Canggu's villa rentals, digital nomad properties, and coworking spaces. Flexible scheduling, eco-friendly options, and reliable service you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-call-canggu">
                  <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Canggu">
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

        {/* Why Canggu */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Canggu Properties Need Professional Pool Maintenance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="card-climate">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Coastal Tropical Climate</h3>
                  <p className="text-muted-foreground">
                    Canggu's beachfront location means high humidity (75-85%), salt air corrosion, and rapid algae growth in pools. Rice paddies nearby add organic debris requiring more frequent filter cleaning and professional maintenance to prevent green pools.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-rental">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">High Rental Turnover</h3>
                  <p className="text-muted-foreground">
                    Canggu's thriving short-term rental market means constant guest turnover. Photo-ready pools are essential for 5-star reviews and repeat bookings. We provide quick turnaround cleaning, digital reports for remote owners, and guest-ready standards every time.
                  </p>
                </CardContent>
              </Card>
              <Card data-testid="card-flexible">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Digital Nomad Community</h3>
                  <p className="text-muted-foreground">
                    Flexible scheduling for remote workers and location-independent villa owners. Weekend service available, digital reporting system, and eco-friendly options for Canggu's environmentally-conscious community including mineral-based systems.
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
              Pool Maintenance Services in Canggu
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
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Canggu Villas Serviced</div>
                </div>
                <div>
                  <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Digital Service Reports</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Canggu Areas We Cover
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
              Comprehensive pool cleaning coverage throughout all Canggu neighborhoods from Berawa to Cemagi with reliable, consistent service.
            </p>
          </div>
        </section>

        {/* Common Pool Types in Canggu */}
        <section className="py-20 md:py-32 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pool Types We Service in Canggu
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card data-testid="card-rental-villa">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Short-Term Rental Villa Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Most common in Canggu - villa pools with weekly guest turnover requiring quick turnaround cleaning. Photo-ready standards essential for Airbnb/Booking reviews. Often need <a href="/green-pool-cleaning-bali" className="text-primary hover-elevate underline" data-testid="link-green-pool">emergency green pool recovery</a> after guest parties or neglect.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly or bi-weekly maintenance required</li>
                    <li>• Digital photo reports for remote owners</li>
                    <li>• Same-day emergency service available</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-surf-villa">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Surf Villa & Boutique Hotel Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Popular in Berawa and Batu Bolong - small to medium pools (20-40m²) serving surfer guests. High usage, salt air from beach proximity, and organic debris from rice paddies require professional <a href="/pool-pump-repair-bali" className="text-primary hover-elevate underline" data-testid="link-pump-repair">pump and filter maintenance</a>.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bi-weekly cleaning recommended</li>
                    <li>• Frequent filter cleaning due to debris</li>
                    <li>• Guest safety and satisfaction priority</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-coworking">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Coworking Villa & Coliving Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    Growing segment in Canggu - shared pools for digital nomads and remote workers. Moderate daily usage requiring consistent maintenance. Community-focused properties appreciate eco-friendly <a href="/saltwater-pool-maintenance-bali" className="text-primary hover-elevate underline" data-testid="link-saltwater">saltwater pool options</a>.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly professional maintenance</li>
                    <li>• Eco-friendly chemical options available</li>
                    <li>• Flexible scheduling for community events</li>
                  </ul>
                </CardContent>
              </Card>
              <Card data-testid="card-private-estate">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Private Estate & Luxury Pools</h3>
                  <p className="text-muted-foreground mb-4">
                    High-end properties in Pererenan and Echo Beach with larger pools (40-80m²), often featuring infinity edges, lighting, and automation. Premium service with EU-certified chemicals and potential for <a href="/pool-renovation-bali" className="text-primary hover-elevate underline" data-testid="link-renovation">pool upgrades</a> and modernization.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly premium service standards</li>
                    <li>• Advanced equipment and automation care</li>
                    <li>• Aesthetic focus for property value</li>
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
              Canggu Pool Cleaning Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Small Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">Up to 25m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 350,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Full cleaning & vacuuming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Water testing & balancing</span>
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
                    POPULAR IN CANGGU
                  </div>
                  <h3 className="text-xl font-bold mb-2">Medium Villa Pool</h3>
                  <p className="text-sm text-muted-foreground mb-4">25-50m²</p>
                  <div className="text-3xl font-bold text-primary mb-4">Rp 450,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Per weekly service</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Everything in Small</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Equipment inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Digital reports with photos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Multi-Property</h3>
                  <p className="text-sm text-muted-foreground mb-4">2+ properties</p>
                  <div className="text-3xl font-bold text-primary mb-4">Discounted</div>
                  <p className="text-sm text-muted-foreground mb-4">Contact for pricing</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Volume discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Coordinated scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dedicated technician</span>
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
              Canggu Pool Service FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can you service multiple rental properties in Canggu?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Many Canggu property managers have multiple villas. We offer discounted rates for multi-property accounts and can coordinate service schedules efficiently across all your properties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do you offer weekend pool cleaning in Canggu?</h3>
                  <p className="text-muted-foreground">
                    Yes! We understand many Canggu property owners work during the week or prefer weekend service. Saturday and Sunday appointments are available with advance booking.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What eco-friendly pool options do you offer?</h3>
                  <p className="text-muted-foreground">
                    We offer mineral pool systems, reduced-chemical maintenance programs, and plant-based cleaning solutions. These options align with Canggu's sustainability-conscious community while maintaining crystal-clear water.
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
              Ready for Reliable Pool Service in Canggu?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Canggu's growing community of villa owners and property managers who trust us for professional pool maintenance.
            </p>
            <Button size="lg" asChild data-testid="button-contact-canggu">
              <a href="https://wa.me/6282237565997?text=Hello!%20I%27m%20interested%20in%20pool%20cleaning%20service%20in%20Canggu">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us - Canggu Pool Cleaning
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
