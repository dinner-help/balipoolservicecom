import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function PoolCleaningServiceBali() {
  return (
    <>
      <Helmet>
        <title>Pool Cleaning Service in Bali | Professional & Affordable</title>
        <meta name="description" content="Professional pool cleaning service in Bali for villas, hotels, and private homes. Fast service, fair prices, expert technicians. WhatsApp: +62 822-3756-5997" />
        <meta property="og:title" content="Pool Cleaning Service in Bali" />
        <meta property="og:description" content="Professional pool cleaning for villas & hotels in Bali. Fast response, transparent pricing." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pool Cleaning Service in Bali
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Keep your villa, rental property, or hotel pool crystal clear with professional, reliable cleaning service. We handle all the hard work while you enjoy a pristine swimming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button size="lg" className="min-w-48" data-testid="button-whatsapp-quote">
                Get a Fast WhatsApp Quote
              </Button>
            </div>
            <p className="text-sm text-foreground">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate" data-testid="link-whatsapp">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* What This Service Covers */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            What Pool Cleaning Service Covers
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <p className="text-foreground/85 mb-6">
                Professional pool cleaning keeps your water safe, clear, and inviting. Our service includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Skimming & Debris Removal</strong> – Remove leaves, insects, and surface debris</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Vacuuming & Brushing</strong> – Clean pool floor and walls thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Water Testing & Balancing</strong> – Check pH, chlorine, and alkalinity levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Filter Backwashing</strong> – Maintain filtration efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Equipment Inspection</strong> – Check pump, filter, and plumbing</span>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Typical Problems Solved</h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li>• Green or cloudy water from algae and debris</li>
                  <li>• Unbalanced pH affecting guest comfort and safety</li>
                  <li>• Clogged filters reducing water circulation</li>
                  <li>• Debris accumulation making pools look neglected</li>
                  <li>• Chemical imbalance causing skin irritation</li>
                  <li>• Pump or equipment stress from lack of maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Villa & Residential Pool Owners</h3>
                <p className="text-sm text-foreground mb-4">
                  Own a villa with a pool but don't have time to maintain it? Weekly cleaning ensures your pool stays ready for family use and impresses guests.
                </p>
                <p className="text-sm text-primary font-medium">
                  Send us your villa name and location on WhatsApp: <a href="https://wa.me/6282237565997" className="underline hover-elevate">+62 822-3756-5997</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Rental Property Managers</h3>
                <p className="text-sm text-foreground mb-4">
                  Keep rental properties guest-ready with regular cleaning. Photo-worthy pools attract bookings and boost guest reviews on Airbnb and Booking.com.
                </p>
                <p className="text-sm text-primary font-medium">
                  Send us your property details on WhatsApp: <a href="https://wa.me/6282237565997" className="underline hover-elevate">+62 822-3756-5997</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Hotels, Resorts & Guesthouses</h3>
                <p className="text-sm text-foreground mb-4">
                  Guest pools require daily attention. We offer flexible scheduling to keep your pool pristine for guests without disrupting operations.
                </p>
                <p className="text-sm text-primary font-medium">
                  Tell us your facility size and schedule on WhatsApp: <a href="https://wa.me/6282237565997" className="underline hover-elevate">+62 822-3756-5997</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Developers & Property Management Companies</h3>
                <p className="text-sm text-foreground mb-4">
                  Managing multiple properties? We offer bulk service contracts and can coordinate cleaning schedules across your entire portfolio.
                </p>
                <p className="text-sm text-primary font-medium">
                  Discuss bulk packages on WhatsApp: <a href="https://wa.me/6282237565997" className="underline hover-elevate">+62 822-3756-5997</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Why Choose Our Pool Cleaning Service
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Experienced Bali Technicians</strong> – Over a decade serving Bali's pool owners</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Tropical Climate Expertise</strong> – We understand Bali's rainfall and algae challenges</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Reliable Scheduling</strong> – Always on time, consistent service every week</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>WhatsApp Support</strong> – Direct communication with your dedicated technician</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Transparent Pricing</strong> – No hidden fees, clear monthly costs</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Bilingual Team</strong> – English & Indonesian speakers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Service Works */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            How Our Pool Cleaning Service Works
          </h2>
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Contact Us on WhatsApp</h3>
                <p className="text-foreground/85">
                  Send your villa/property name, location, and pool photos to <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quick Assessment</h3>
                <p className="text-foreground/85">
                  We ask about pool size, current condition, and your preferred service frequency
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Receive Clear Quote</h3>
                <p className="text-foreground/85">
                  We recommend a package (Silver, Gold, or Platinum) with transparent pricing
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">First Service Visit</h3>
                <p className="text-foreground/85">
                  Our team arrives, performs deep cleaning, tests water chemistry, and inspects equipment
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Support</h3>
                <p className="text-foreground/85">
                  Regular scheduled visits, WhatsApp updates, and emergency support whenever needed
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-background rounded-lg border">
            <p className="text-center text-muted-foreground">
              Ready to get started? Tap the WhatsApp button below – it only takes a few minutes to get your first quote.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Service Packages & Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-silver">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Silver Package</h3>
                <p className="text-sm text-foreground mb-4">Perfect for private villas & residential pools</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 2,900,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>2 visits per week (8/month)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete cleaning & vacuuming</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Water testing & pH balancing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Premium chemicals included</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" data-testid="button-silver-whatsapp">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2" data-testid="card-gold">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Gold Package</h3>
                <p className="text-sm text-foreground mb-4">Perfect for luxury villas & rental properties</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 3,900,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 visits per week (12/month)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Everything in Silver</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Monthly deep filter cleaning</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority emergency response</span>
                  </li>
                </ul>
                <Button className="w-full" data-testid="button-gold-whatsapp">
                  Get Gold Details
                </Button>
              </CardContent>
            </Card>

            <Card data-testid="card-platinum">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Platinum Package</h3>
                <p className="text-sm text-foreground mb-4">Perfect for estates & boutique hotels</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 5,500,000</div>
                <p className="text-sm text-foreground/85 mb-6">/month</p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Daily checks + 3 full services</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Everything in Gold</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated technician</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>2-hour emergency response</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" data-testid="button-platinum-whatsapp">
                  Talk to Specialist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Additional Add-Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Extra Weekly Visit</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 400,000/month</p>
                <p className="text-sm text-foreground/85">Add extra cleaning for high-usage pools</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Chemical Delivery Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 150,000/delivery</p>
                <p className="text-sm text-foreground/85">Premium chemicals delivered to your property</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Water Feature Maintenance</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 500,000/month</p>
                <p className="text-sm text-foreground/85">Fountains, jets, and water features care</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Pool Automation Monitoring</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 600,000/month</p>
                <p className="text-sm text-foreground/85">Advanced system and automation care</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-background rounded-lg border max-w-4xl">
            <p className="text-center text-muted-foreground">
              Tell us which add-ons you need on WhatsApp and we'll combine them into one simple monthly plan: <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Payment Options
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Pricing Discounts</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between">
                    <span className="text-foreground/85">Monthly Payment</span>
                    <span className="font-bold">Standard price</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/85">Quarterly (3 months prepaid)</span>
                    <span className="font-bold text-green-600">Save 5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/85">Annual (12 months prepaid)</span>
                    <span className="font-bold text-green-600">Save 10%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Accepted Payment Methods</h3>
                <ul className="space-y-2 mb-6">
                  <li className="font-medium">QR Payment (Fastest)</li>
                  <li className="text-sm text-foreground mb-4">QRIS • GoPay • OVO • Dana</li>
                  
                  <li className="font-medium">Online Transfer</li>
                  <li className="text-sm text-foreground mb-4">BCA • Mandiri • BNI</li>
                  
                  <li className="font-medium">Cash Payment</li>
                  <li className="text-sm text-foreground/85">Accepted on-site during service visits</li>
                </ul>
                <p className="text-sm text-foreground">
                  We'll confirm your preferred payment method once you contact us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Benefits of Regular Pool Cleaning
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Always Clear Blue Water</strong> – No more green pools or cloudy water</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Safe Swimming</strong> – Balanced chemicals protect family and guests</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Equipment Protection</strong> – Regular maintenance extends pump and filter life</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Lower Emergency Costs</strong> – Prevent expensive repairs with preventive care</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Better Rental Reviews</strong> – Guest satisfaction from pristine pools</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Predictable Monthly Costs</strong> – No surprise emergency repair bills</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Service Areas Across Bali
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {['Canggu', 'Seminyak', 'Kuta', 'Uluwatu', 'Sanur', 'Denpasar', 'Ubud', 'Jimbaran', 'Kerobokan', 'Pererenan', 'Berawa', 'Nusa Dua'].map((area) => (
              <div key={area} className="flex items-center gap-2 p-3 bg-accent/5 rounded-lg">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            If your property is anywhere in Bali, send us your location on WhatsApp and we'll confirm service availability: <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How often should I schedule pool cleaning in Bali?</h3>
                <p className="text-sm text-foreground">
                  In Bali's tropical climate, we recommend 2-3 times per week for residential pools and 3-4 times per week for rental properties or high-usage pools. Heavy rains can increase debris, so flexible scheduling helps.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Can you maintain my pool while I'm overseas?</h3>
                <p className="text-sm text-foreground">
                  Yes! We offer full management for properties with absent owners. We send weekly digital reports, handle all chemicals, and respond to any emergencies immediately via WhatsApp.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Do you supply all pool chemicals?</h3>
                <p className="text-sm text-foreground">
                  Yes, all our packages include premium 90% pure chemicals. We deliver chemicals to your property as part of the service, saving you from store runs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What happens if my pool turns green?</h3>
                <p className="text-sm text-foreground">
                  That's algae growth – common in Bali during rainy season. Contact us immediately on WhatsApp and we can often restore it within 2-3 professional visits. See our <Link href="/green-pool-cleaning-bali" className="text-primary hover-elevate underline">green pool cleaning service</Link> for details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Can I upgrade from Silver to Gold or Platinum later?</h3>
                <p className="text-sm text-foreground">
                  Absolutely! Upgrade anytime with no penalties. Simply contact us on WhatsApp and we'll adjust your service level and pricing immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Crystal Clear Water?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free consultation. Contact us today via WhatsApp and let's discuss the perfect cleaning package for your pool.
          </p>
          <Button size="lg" className="min-w-56" data-testid="button-final-cta">
            Get Your Free Quote on WhatsApp
          </Button>
          <p className="text-sm text-foreground/85 mt-4">
            WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
