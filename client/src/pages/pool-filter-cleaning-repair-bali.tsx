import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PoolFilterCleaningRepairBali() {
  return (
    <>
      <Helmet>
        <title>Pool Filter Cleaning & Repair in Bali | Professional Care</title>
        <meta name="description" content="Pool filter cleaning and repair service in Bali. Keep your filter running efficiently. WhatsApp: +62 822-3756-5997" />
        <meta property="og:title" content="Pool Filter Cleaning & Repair in Bali" />
        <meta property="og:description" content="Professional pool filter cleaning, backwashing, and repair. Extend filter life, improve circulation." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Filter Cleaning & Repair in Bali
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A clogged filter is the leading cause of cloudy water and poor circulation. Our expert technicians clean, maintain, and repair all filter types to keep your pool crystal clear.
            </p>
            <Button size="lg" className="min-w-48">
              Get Filter Service Quote
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Filter Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div>
              <h3 className="text-xl font-bold mb-4">Regular Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Weekly Backwashing</strong>
                    <p className="text-sm text-muted-foreground">Reverse water flow to clear debris buildup</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Monthly Deep Cleaning</strong>
                    <p className="text-sm text-muted-foreground">Remove trapped dirt and extend filter life</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Pressure Monitoring</strong>
                    <p className="text-sm text-muted-foreground">Track gauge readings to catch problems early</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Emergency Repairs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Cartridge Replacement</strong>
                    <p className="text-sm text-muted-foreground">Replace worn-out cartridge elements</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Pressure Valve Repair</strong>
                    <p className="text-sm text-muted-foreground">Fix leaks and pressure valve issues</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Filter Tank Repair</strong>
                    <p className="text-sm text-muted-foreground">Patch cracks, replace broken components</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Filter Care Matters
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Your pool filter is the heart of your circulation system. When it clogs:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Water becomes cloudy and murky</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Algae grows faster (less circulation)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Pump works harder and overheats</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Chemicals don't distribute evenly</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Regular cleaning prevents emergencies</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Extends filter life 2-3 years</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Reduces energy costs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Keeps water crystal clear</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Filter Services & Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Weekly Backwashing</h3>
                <p className="text-2xl font-bold text-primary mb-4">Included in maintenance</p>
                <p className="text-sm text-muted-foreground">
                  We backwash your filter every visit to keep it clean and efficient. This is the most basic maintenance step.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Monthly Deep Clean</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 500,000</p>
                <p className="text-sm text-muted-foreground">
                  Professional deep cleaning to remove trapped contaminants and extend filter life. Recommended monthly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Filter Cartridge Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 800,000</p>
                <p className="text-sm text-muted-foreground">
                  Replace worn cartridges (typical life 2-3 years). Keeps filter like new.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Emergency Repair</h3>
                <p className="text-2xl font-bold text-primary mb-4">From IDR 1,200,000</p>
                <p className="text-sm text-muted-foreground">
                  Urgent repairs for broken valves, leaks, or tank issues. Fast response available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Types */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Filter Types We Service
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Cartridge Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Most common in residential Bali pools. We replace cartridges and clean housings regularly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Sand Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Found in larger pools and resorts. We backwash, clean, and replace sand when needed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">DE (Diatomaceous Earth) Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Premium filters requiring specialized care. We handle all maintenance and cleaning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Questions?
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How often should I clean my filter?</h3>
                <p className="text-sm text-muted-foreground">
                  Weekly backwashing is standard. Deep cleaning monthly or when pressure gauge reads 8-10 PSI above normal. More often during rainy season.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How long do filters last?</h3>
                <p className="text-sm text-muted-foreground">
                  With proper care, cartridges last 2-3 years. Sand filters last 5-7 years before sand replacement. Regular maintenance extends all lifespans significantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What if water pressure is high?</h3>
                <p className="text-sm text-muted-foreground">
                  High pressure (over 20 PSI) means the filter is clogged. Contact us immediately for cleaning or your pump could overheat and fail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Keep Your Filter Running Strong
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule professional filter cleaning and maintenance today.
          </p>
          <Button size="lg" className="min-w-56">
            Contact Us on WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
