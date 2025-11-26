import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";

export default function WeeklyPoolMaintenanceBali() {
  return (
    <>
      <Helmet>
        <title>Weekly Pool Maintenance in Bali | Professional Care</title>
        <meta name="description" content="Weekly pool maintenance service in Bali. Keep your villa or hotel pool perfectly maintained with scheduled weekly visits. WhatsApp: +62 822-3756-5997" />
        <meta property="og:title" content="Weekly Pool Maintenance in Bali" />
        <meta property="og:description" content="Professional weekly pool maintenance for villas & hotels. Consistent care, clear water, reliable service." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Weekly Pool Maintenance in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Consistent weekly maintenance keeps your pool safe, clear, and problem-free. Our professional team handles all the work so you can enjoy your pool without worry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button size="lg" className="min-w-48" data-testid="button-whatsapp-quote">
                Schedule Your Weekly Plan
              </Button>
            </div>
            <p className="text-sm text-foreground/85">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What's Included in Weekly Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/85 mb-6">
                Weekly maintenance means we visit your pool once or twice per week (depending on your package) to perform these essential tasks:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Professional Cleaning</strong> – Skimming, brushing, and vacuuming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Water Chemistry Balance</strong> – Testing and adjusting pH levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Chemical Treatment</strong> – Adding appropriate sanitizers and algaecides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Equipment Inspection</strong> – Checking pump, filter, and circulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Filter Backwashing</strong> – Maintaining filtration efficiency</span>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Weekly Maintenance Matters</h3>
                <p className="text-sm text-foreground/85 mb-4">
                  Bali's tropical climate with heavy rainfall and constant debris makes weekly maintenance essential. Without it:
                </p>
                <ul className="space-y-2 text-sm text-foreground/85">
                  <li>• Algae grows rapidly, turning pools green</li>
                  <li>• Chemical imbalance develops, affecting guest safety</li>
                  <li>• Filters clog, reducing circulation</li>
                  <li>• Equipment stress leads to expensive repairs</li>
                  <li>• Water quality deteriorates between visits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Perfect for These Property Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Rental Villas (Airbnb / Booking.com)</h3>
                <p className="text-sm text-foreground/85">
                  Weekly visits ensure your pool stays photo-ready for bookings and guest reviews. Clean pools boost booking rates and guest satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Private Residences</h3>
                <p className="text-sm text-foreground/85">
                  Homeowners appreciate the reliability. Weekly maintenance means your family always has a safe, clean pool without the hassle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Hotels & Guesthouses</h3>
                <p className="text-sm text-foreground/85">
                  Guest pools require consistent care. Our weekly visits fit around your operations and maintain the standards your guests expect.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Property Managers</h3>
                <p className="text-sm text-foreground/85">
                  Managing multiple properties? We offer coordinated weekly schedules across your entire portfolio with consolidated invoicing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Weekly Maintenance Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-silver">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Silver Package</h3>
                <p className="text-sm text-foreground/85 mb-4">2 visits per week</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 2,900,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 8 visits total per month</li>
                  <li>• Complete cleaning each visit</li>
                  <li>• Water testing & balancing</li>
                  <li>• Chemicals included</li>
                </ul>
                <Button className="w-full" variant="outline">
                  Inquire on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2" data-testid="card-gold">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Gold Package</h3>
                <p className="text-sm text-foreground/85 mb-4">3 visits per week</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 3,900,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 12 visits total per month</li>
                  <li>• Everything in Silver</li>
                  <li>• Monthly deep filter clean</li>
                  <li>• Priority emergency support</li>
                </ul>
                <Button className="w-full">
                  Get Gold Details
                </Button>
              </CardContent>
            </Card>

            <Card data-testid="card-platinum">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Platinum Package</h3>
                <p className="text-sm text-foreground/85 mb-4">Daily + 3 full services</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 5,500,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Daily quick checks</li>
                  <li>• Everything in Gold</li>
                  <li>• Dedicated technician</li>
                  <li>• 2-hour emergency response</li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Specialist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Benefits of Weekly Pool Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Consistent Water Quality</strong> – No fluctuations or quality drops</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Prevents Green Water</strong> – Regular treatment stops algae growth</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Guest Satisfaction</strong> – Always clean, inviting pools</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Lower Emergency Costs</strong> – Catch problems early</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Predictable Costs</strong> – Fixed monthly pricing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>No Maintenance Stress</strong> – We handle everything</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Is 2 visits per week enough in Bali?</h3>
                <p className="text-sm text-foreground/85">
                  For most residential villas, 2 visits per week (Silver) works well. During heavy rainy season or for rental properties, 3 visits per week (Gold) is recommended for optimal clarity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Can I adjust my visit schedule?</h3>
                <p className="text-sm text-foreground/85">
                  Yes! We can adjust to seasonal needs. Many owners do 2 visits in dry season and 3 visits during rainy season (November-March).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What if I skip a week?</h3>
                <p className="text-sm text-foreground/85">
                  In Bali's climate, skipping even one week can cause issues. If you need a break, contact us first so we can add extra chemicals to prevent problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Can you work around my schedule?</h3>
                <p className="text-sm text-foreground/85">
                  Absolutely. We coordinate visits with your availability. For rental properties, we can schedule after checkout or before check-in.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Weekly Maintenance Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us handle the pool care. Contact us today to discuss which weekly plan works best for your property.
          </p>
          <Button size="lg" className="min-w-56" data-testid="button-final-cta">
            Schedule on WhatsApp
          </Button>
          <p className="text-sm text-foreground/85 mt-4">
            WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
