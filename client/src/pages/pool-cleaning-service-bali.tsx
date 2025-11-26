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
            <p className="text-lg text-foreground/80 mb-8">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Service Packages & Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-silver">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Silver Package</h3>
                <p className="text-sm text-foreground mb-4">Perfect for private villas & residential pools</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 2,900,000</div>
                <p className="text-sm text-foreground/80 mb-6">/month</p>
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
                <p className="text-sm text-foreground/80 mb-6">/month</p>
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
                <p className="text-sm text-foreground/80 mb-6">/month</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Additional Add-Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Extra Weekly Visit</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 400,000/month</p>
                <p className="text-sm text-foreground/80">Add extra cleaning for high-usage pools</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Chemical Delivery Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 150,000/delivery</p>
                <p className="text-sm text-foreground/80">Premium chemicals delivered to your property</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Water Feature Maintenance</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 500,000/month</p>
                <p className="text-sm text-foreground/80">Fountains, jets, and water features care</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Pool Automation Monitoring</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 600,000/month</p>
                <p className="text-sm text-foreground/80">Advanced system and automation care</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
                  <li className="text-sm text-foreground/80">Accepted on-site during service visits</li>
                </ul>
                <p className="text-sm text-foreground">
                  We'll confirm your preferred payment method once you contact us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bali Tropical Climate Challenges */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Cleaning Challenges in Bali's Tropical Climate
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's unique tropical environment creates specific challenges that require specialized pool care knowledge. Understanding these challenges helps you appreciate why professional cleaning is essential.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Rapid Algae Growth</h3>
                <p className="text-sm text-foreground/80">
                  Bali's warm temperatures (28-32°C year-round) and high humidity create ideal conditions for algae. Without consistent chemical treatment and brushing, pools can turn green within 48-72 hours during peak growth periods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Monsoon Season Debris</h3>
                <p className="text-sm text-foreground/80">
                  During wet season (November-March), heavy tropical rainfall washes leaves, dirt, and organic matter into pools. This requires more frequent skimming and can quickly overwhelm filters if not addressed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">High Mineral Content</h3>
                <p className="text-sm text-foreground/80">
                  Bali's well water often contains high calcium and mineral levels that can cause scaling on tiles, clog filters, and affect water balance. Regular testing and treatment prevents costly buildup.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Frangipani & Tropical Plants</h3>
                <p className="text-sm text-foreground/80">
                  Beautiful Balinese gardens mean constant flower and leaf drop. Frangipani flowers, palm fronds, and tropical foliage require daily skimming to prevent staining and clogged drains.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Insect Populations</h3>
                <p className="text-sm text-foreground/80">
                  Tropical insects are attracted to pool water. Mosquito prevention, removing dead insects, and maintaining proper chlorine levels are essential for hygiene and guest comfort.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">UV Chlorine Degradation</h3>
                <p className="text-sm text-foreground/80">
                  Intense equatorial sunlight breaks down chlorine rapidly. Pools in direct sun may need chlorine adjustment multiple times per week, plus cyanuric acid stabilizer to maintain effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Pool Care Guide */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Seasonal Pool Care Guide for Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali has two distinct seasons that affect pool maintenance differently. Understanding seasonal care requirements helps keep your pool in perfect condition year-round.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Wet Season (November – March)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Heavy rainfall, increased humidity, and organic debris make this the most challenging time for pool maintenance.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Increase service frequency</strong> to 3-4 visits per week</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Monitor water levels</strong> – heavy rain can dilute chemicals</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Extra debris removal</strong> after storms</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Shock treatment</strong> more frequently to prevent algae</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Check drainage</strong> to prevent overflow and erosion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Dry Season (April – October)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Lower humidity but intense sun and peak tourism create different maintenance priorities.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Stabilizer essential</strong> – cyanuric acid protects chlorine from UV</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>More frequent water top-up</strong> due to evaporation</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Higher guest usage</strong> means more chemical demand</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Dust and ash</strong> from dry conditions require skimming</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Equipment checks</strong> – pumps work harder in heat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Explained */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Equipment Explained
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Understanding your pool equipment helps you recognize issues early and communicate effectively with your pool service technician. Here's what every Bali pool owner should know.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Pool Pump</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  The heart of your pool system. Circulates water through the filter and back into the pool. Should run 8-12 hours daily in Bali's climate.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Warning signs:</strong> Unusual noise, reduced water flow, motor overheating, visible leaks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Sand Filter</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Most common filter in Bali. Uses special sand to trap particles. Requires backwashing when pressure gauge rises 8-10 PSI above normal.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Maintenance:</strong> Weekly backwashing, sand replacement every 5-7 years
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Cartridge Filter</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Popular in smaller villa pools. Removable cartridge captures debris. Easy to clean but requires replacement every 1-2 years.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Maintenance:</strong> Monthly deep cleaning, regular pressure monitoring
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Skimmer Box</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Built into the pool wall, draws surface water to remove floating debris before it sinks. Basket should be emptied weekly or more in wet season.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Warning signs:</strong> Cracked lid, broken weir flap, clogged basket
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Chlorinator (Salt or Chemical)</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Automatically dispenses chlorine to maintain sanitizer levels. Saltwater chlorinators generate chlorine from dissolved salt; tablet feeders release chlorine tablets.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Maintenance:</strong> Regular cell cleaning for salt systems, tablet refills for feeders
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Pool Lights</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Underwater LED or halogen lights for evening ambiance. Common in Bali villas. Should only be serviced when pool water is lowered or by qualified electricians.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Warning signs:</strong> Flickering, water in lens housing, discoloration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DIY vs Professional Comparison */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            DIY Pool Cleaning vs. Professional Service in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Many pool owners consider maintaining their own pool. Here's an honest comparison to help you decide what's right for your situation.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">DIY Pool Cleaning</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Initial Investment</h4>
                    <p className="text-sm text-foreground/80">IDR 3-5 million for quality equipment (skimmer net, vacuum, brushes, test kits)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ongoing Costs</h4>
                    <p className="text-sm text-foreground/80">IDR 500,000-800,000/month for chemicals (if buying retail)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Time Required</h4>
                    <p className="text-sm text-foreground/80">2-3 hours per week minimum, plus emergency responses</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Knowledge Needed</h4>
                    <p className="text-sm text-foreground/80">Understanding water chemistry, equipment operation, troubleshooting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Owners who live on-site, enjoy hands-on work, and have flexible schedules</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/50">
              <CardContent className="p-8">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Recommended for Bali
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Professional Service</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Monthly Cost</h4>
                    <p className="text-sm text-foreground/80">IDR 2,900,000-5,500,000/month (all-inclusive)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Chemicals Included</h4>
                    <p className="text-sm text-foreground/80">Premium 90% pure chemicals delivered and applied</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Time Required</h4>
                    <p className="text-sm text-foreground/80">Zero – technicians handle everything on schedule</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expertise Included</h4>
                    <p className="text-sm text-foreground/80">Trained technicians who understand Bali's tropical conditions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Rental properties, absent owners, busy professionals, resorts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini Case Studies */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results from Bali Pool Owners
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            See how our professional cleaning service has helped properties across Bali maintain pristine pools and happy guests.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Luxury Villa • Canggu</div>
                <h3 className="text-lg font-bold text-foreground mb-3">From Green to Pristine in 48 Hours</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  A 4-bedroom villa rental had been vacant for 3 weeks. Pool turned completely green. Our emergency team restored crystal-clear water before guests arrived, saving the booking.
                </p>
                <p className="text-xs text-foreground/60">
                  Now on Gold Package with 3x weekly service
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Boutique Hotel • Seminyak</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Consistent 5-Star Reviews</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  12-room boutique hotel struggled with inconsistent pool quality before hiring us. After 6 months on Platinum service, pool-related complaints dropped to zero.
                </p>
                <p className="text-xs text-foreground/60">
                  Daily checks, 3x weekly full service
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Private Residence • Ubud</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Remote Owner, Zero Worries</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Owner lives in Australia, visits Bali quarterly. Our team manages the pool year-round, sending weekly reports and handling any issues proactively.
                </p>
                <p className="text-xs text-foreground/60">
                  Silver Package with quarterly deep cleaning add-on
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Maintenance Tips for Bali Owners
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Even with professional service, these tips help keep your pool in the best possible condition between visits.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Empty Skimmer Baskets Daily</h3>
                  <p className="text-sm text-foreground/80">
                    Takes 30 seconds and prevents debris from clogging the pump. Especially important after storms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Check Water Level Weekly</h3>
                  <p className="text-sm text-foreground/80">
                    Water should be mid-skimmer. Too low damages the pump; too high reduces skimming efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Run Pump During Daylight</h3>
                  <p className="text-sm text-foreground/80">
                    Chlorine is most needed when UV rays are strongest. Running the pump 8-12 hours during the day maximizes effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Rinse Off Before Swimming</h3>
                  <p className="text-sm text-foreground/80">
                    Sunscreen, body oils, and lotions cloud water and consume chlorine. A quick rinse reduces chemical demand.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Report Issues Immediately</h3>
                  <p className="text-sm text-foreground/80">
                    Notice cloudy water, strange noises, or equipment issues? WhatsApp us immediately – early intervention prevents bigger problems.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Trim Overhanging Plants</h3>
                  <p className="text-sm text-foreground/80">
                    Keep landscaping trimmed back to reduce leaf drop and debris. Especially important for frangipani trees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions About Pool Cleaning in Bali
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How often should I schedule pool cleaning in Bali?</h3>
                <p className="text-sm text-foreground/80">
                  In Bali's tropical climate, we recommend 2-3 times per week for residential pools and 3-4 times per week for rental properties or high-usage pools. Heavy rains can increase debris, so flexible scheduling helps.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can you maintain my pool while I'm overseas?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! We offer full management for properties with absent owners. We send weekly digital reports, handle all chemicals, and respond to any emergencies immediately via WhatsApp.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Do you supply all pool chemicals?</h3>
                <p className="text-sm text-foreground/80">
                  Yes, all our packages include premium 90% pure chemicals. We deliver chemicals to your property as part of the service, saving you from store runs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What happens if my pool turns green?</h3>
                <p className="text-sm text-foreground/80">
                  That's algae growth – common in Bali during rainy season. Contact us immediately on WhatsApp and we can often restore it within 2-3 professional visits. See our <Link href="/green-pool-cleaning-bali" className="text-primary hover-elevate underline">green pool cleaning service</Link> for details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can I upgrade from Silver to Gold or Platinum later?</h3>
                <p className="text-sm text-foreground/80">
                  Absolutely! Upgrade anytime with no penalties. Simply contact us on WhatsApp and we'll adjust your service level and pricing immediately.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How much does pool cleaning cost in Bali?</h3>
                <p className="text-sm text-foreground/80">
                  Our packages range from IDR 2,900,000/month (Silver) to IDR 5,500,000/month (Platinum). Pricing depends on pool size, service frequency, and additional features like automation monitoring. All chemicals are included.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What's the difference between saltwater and chlorine pool care?</h3>
                <p className="text-sm text-foreground/80">
                  Saltwater pools use a chlorine generator that converts salt to chlorine, requiring less manual chemical addition. Both need regular cleaning, water testing, and equipment maintenance. We service both types. See our <Link href="/saltwater-pool-maintenance-bali" className="text-primary hover-elevate underline">saltwater pool maintenance</Link> page.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Do you service commercial pools and hotels?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! We provide daily service for hotels, resorts, and commercial properties with high bather loads. Our <Link href="/commercial-hotel-pool-service-bali" className="text-primary hover-elevate underline">commercial pool service</Link> includes dedicated technicians and priority response.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What areas in Bali do you cover?</h3>
                <p className="text-sm text-foreground/80">
                  We service all major areas including Canggu, Seminyak, Kuta, Ubud, Sanur, Nusa Dua, Jimbaran, Denpasar, and surrounding regions. If your property is in Bali, WhatsApp us your location and we'll confirm availability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How quickly can you start service?</h3>
                <p className="text-sm text-foreground/80">
                  We can typically begin within 24-48 hours of agreement. For emergency situations like green pools or equipment failures, we offer same-day response through our <Link href="/emergency-pool-repair-bali" className="text-primary hover-elevate underline">emergency service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What qualifications do your technicians have?</h3>
                <p className="text-sm text-foreground/80">
                  All our technicians are trained in pool chemistry, equipment operation, and Bali's specific tropical conditions. Senior technicians have 5+ years experience and undergo regular training on new equipment and techniques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can you repair my pool equipment too?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! We offer <Link href="/swimming-pool-repair-bali" className="text-primary hover-elevate underline">pool repair services</Link> including pump repair, filter replacement, light repairs, and leak detection. Equipment issues identified during cleaning are reported and can be fixed on-site or scheduled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Related Pool Services in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Beyond regular cleaning, we offer a complete range of pool services to keep your Bali pool in perfect condition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            <Link href="/weekly-pool-maintenance-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Weekly Pool Maintenance</h3>
                  <p className="text-xs text-foreground/70">Comprehensive weekly care packages</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/chemical-balancing-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Chemical Balancing</h3>
                  <p className="text-xs text-foreground/70">pH, chlorine, and alkalinity management</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-filter-cleaning-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Filter Cleaning & Repair</h3>
                  <p className="text-xs text-foreground/70">Sand and cartridge filter service</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-water-testing-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Water Testing</h3>
                  <p className="text-xs text-foreground/70">Professional water analysis</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-tile-cleaning-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Tile Cleaning</h3>
                  <p className="text-xs text-foreground/70">Remove calcium and scale buildup</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-vacuuming-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Pool Vacuuming</h3>
                  <p className="text-xs text-foreground/70">Deep floor and wall cleaning</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/green-pool-cleaning-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Green Pool Recovery</h3>
                  <p className="text-xs text-foreground/70">Algae treatment and restoration</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-pump-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Pump Repair</h3>
                  <p className="text-xs text-foreground/70">Pump diagnosis and repair</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas with Links */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Cleaning Service Areas Across Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            We provide professional pool cleaning services throughout Bali's most popular areas. Click on your location to learn about area-specific pool challenges and solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <Link href="/location-canggu">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Canggu</span>
              </div>
            </Link>
            <Link href="/location-seminyak">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Seminyak</span>
              </div>
            </Link>
            <Link href="/location-kuta">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Kuta</span>
              </div>
            </Link>
            <Link href="/location-ubud">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Ubud</span>
              </div>
            </Link>
            <Link href="/location-sanur">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Sanur</span>
              </div>
            </Link>
            <Link href="/location-nusa-dua">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Nusa Dua</span>
              </div>
            </Link>
            <Link href="/location-jimbaran">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Jimbaran</span>
              </div>
            </Link>
            <Link href="/location-denpasar">
              <div className="flex items-center gap-2 p-3 bg-background rounded-lg hover-elevate cursor-pointer">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm text-foreground">Pool Cleaning Denpasar</span>
              </div>
            </Link>
            <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-sm text-foreground">Uluwatu</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-sm text-foreground">Kerobokan</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-sm text-foreground">Pererenan</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-sm text-foreground">Berawa</span>
            </div>
          </div>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto">
            Don't see your area listed? We cover all of Bali! Send us your location on WhatsApp and we'll confirm service availability: <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready for Crystal Clear Water?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free consultation. Contact us today via WhatsApp and let's discuss the perfect cleaning package for your pool.
          </p>
          <Button size="lg" className="min-w-56" data-testid="button-final-cta">
            Get Your Free Quote on WhatsApp
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
