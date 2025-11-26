import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";

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
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Weekly Pool Maintenance in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Consistent weekly maintenance keeps your pool safe, clear, and problem-free. Our professional team handles all the work so you can enjoy your pool without worry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button size="lg" className="min-w-48" asChild data-testid="button-whatsapp-quote">
                <a href="https://wa.me/6282237565997">Schedule Your Weekly Plan</a>
              </Button>
            </div>
            <p className="text-sm text-foreground">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What's Included in Weekly Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/80 mb-6">
                Weekly maintenance means we visit your pool once or twice per week (depending on your package) to perform these essential tasks:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong className="text-foreground">Professional Cleaning</strong> – Skimming, brushing, and vacuuming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong className="text-foreground">Water Chemistry Balance</strong> – Testing and adjusting pH levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong className="text-foreground">Chemical Treatment</strong> – Adding appropriate sanitizers and algaecides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong className="text-foreground">Equipment Inspection</strong> – Checking pump, filter, and circulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80"><strong className="text-foreground">Filter Backwashing</strong> – Maintaining filtration efficiency</span>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Weekly Maintenance Matters</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Bali's tropical climate with heavy rainfall and constant debris makes weekly maintenance essential. Without it:
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Perfect for These Property Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Rental Villas (Airbnb / Booking.com)</h3>
                <p className="text-sm text-foreground/80">
                  Weekly visits ensure your pool stays photo-ready for bookings and guest reviews. Clean pools boost booking rates and guest satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Private Residences</h3>
                <p className="text-sm text-foreground/80">
                  Homeowners appreciate the reliability. Weekly maintenance means your family always has a safe, clean pool without the hassle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Hotels & Guesthouses</h3>
                <p className="text-sm text-foreground/80">
                  Guest pools require consistent care. Our weekly visits fit around your operations and maintain the standards your guests expect.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Property Managers</h3>
                <p className="text-sm text-foreground/80">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Weekly Maintenance Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card data-testid="card-silver">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Silver Package</h3>
                <p className="text-sm text-foreground/80 mb-4">2 visits per week</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 2,900,000</div>
                <p className="text-sm text-foreground/80 mb-6">/month</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• 8 visits total per month</li>
                  <li>• Complete cleaning each visit</li>
                  <li>• Water testing & balancing</li>
                  <li>• Chemicals included</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://wa.me/6282237565997">Inquire on WhatsApp</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2" data-testid="card-gold">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Gold Package</h3>
                <p className="text-sm text-foreground/80 mb-4">3 visits per week</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 3,900,000</div>
                <p className="text-sm text-foreground/80 mb-6">/month</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• 12 visits total per month</li>
                  <li>• Everything in Silver</li>
                  <li>• Monthly deep filter clean</li>
                  <li>• Priority emergency support</li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="https://wa.me/6282237565997">Get Gold Details</a>
                </Button>
              </CardContent>
            </Card>

            <Card data-testid="card-platinum">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Platinum Package</h3>
                <p className="text-sm text-foreground/80 mb-4">Daily + 3 full services</p>
                <div className="text-3xl font-bold text-primary mb-4">IDR 5,500,000</div>
                <p className="text-sm text-foreground/80 mb-6">/month</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• Daily quick checks</li>
                  <li>• Everything in Gold</li>
                  <li>• Dedicated technician</li>
                  <li>• 2-hour emergency response</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://wa.me/6282237565997">Contact Specialist</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Benefits of Weekly Pool Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">Consistent Water Quality</strong> – No fluctuations or quality drops</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">Prevents Green Water</strong> – Regular treatment stops algae growth</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">Guest Satisfaction</strong> – Always clean, inviting pools</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">Lower Emergency Costs</strong> – Catch problems early</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">Predictable Costs</strong> – Fixed monthly pricing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><strong className="text-foreground">No Maintenance Stress</strong> – We handle everything</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bali Tropical Climate Challenges */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Weekly Maintenance Challenges in Bali's Tropical Climate
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's unique environment creates specific challenges that make consistent weekly maintenance essential. Understanding these challenges helps you see why regular professional care matters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Algae Prevention</h3>
                <p className="text-sm text-foreground/80">
                  Bali's warm temperatures (28-32°C year-round) accelerate algae growth dramatically. Weekly chemical treatments and brushing prevent algae from taking hold, avoiding costly green pool recovery services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Debris Management</h3>
                <p className="text-sm text-foreground/80">
                  Tropical gardens mean constant leaf drop from frangipani, palm fronds, and flowering plants. Weekly skimming and vacuuming prevents debris from decomposing and affecting water chemistry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Chemical Degradation</h3>
                <p className="text-sm text-foreground/80">
                  Intense equatorial UV rays break down chlorine rapidly. Weekly testing and adjustment ensures sanitizer levels stay effective, with stabilizer added as needed to protect chlorine from sunlight.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Filter Stress</h3>
                <p className="text-sm text-foreground/80">
                  High organic matter loads stress filtration systems. Weekly backwashing and filter inspections prevent clogs, maintain water clarity, and extend filter media lifespan significantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Water Level Fluctuations</h3>
                <p className="text-sm text-foreground/80">
                  Monsoon rains can raise water levels dramatically, while dry season evaporation drops levels quickly. Weekly monitoring ensures proper skimmer function and prevents pump damage from low water.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Equipment Wear</h3>
                <p className="text-sm text-foreground/80">
                  High humidity and salt air accelerate equipment corrosion. Weekly inspections catch early signs of pump seal wear, electrical issues, and connection corrosion before they cause failures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance Schedule */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Seasonal Weekly Maintenance Schedule
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali has two distinct seasons that affect how we approach your weekly maintenance. Understanding seasonal differences helps us customize your service for optimal results year-round.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Wet Season Weekly Care (November – March)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Heavy rainfall, increased humidity, and organic debris make this the most demanding time for weekly pool maintenance.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Extra debris removal</strong> – storms wash in leaves and dirt</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Chemical rebalancing</strong> – rain dilutes chlorine levels</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Frequent shock treatments</strong> – prevent algae blooms</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Drainage monitoring</strong> – prevent overflow issues</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Consider upgrade to 3 visits</strong> – Gold package recommended</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Dry Season Weekly Care (April – October)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Lower humidity but intense sun and peak tourism create different weekly maintenance priorities.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Stabilizer management</strong> – cyanuric acid protects chlorine from UV</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Water level top-ups</strong> – evaporation increases significantly</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Higher chemical demand</strong> – more guests using pools</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Dust and volcanic ash</strong> – requires surface skimming</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Equipment checks</strong> – pumps work harder in heat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Care Guide */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Weekly Maintenance Protects Your Pool Equipment
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Regular weekly service doesn't just keep water clean – it extends the life of expensive equipment. Here's how our weekly visits protect your investment.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Pump Protection</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Weekly monitoring of pump performance, motor temperature, and seal condition catches problems early. We check for unusual noises, vibration, and reduced flow that indicate developing issues.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Lifespan extension:</strong> 3-5 extra years with regular monitoring
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Filter System Care</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Weekly backwashing prevents sand channeling and media compaction. We monitor pressure gauges and clean baskets to maintain proper flow rates and filtration efficiency.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Benefit:</strong> Optimal water clarity and reduced chemical consumption
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Chlorinator Maintenance</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  For saltwater pools, we check cell condition and clean scaling weekly. For tablet feeders, we ensure proper flow and refill chemicals. Regular care prevents costly cell replacements.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Savings:</strong> Salt cells last 5-7 years vs 3-4 without proper care
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Skimmer & Drain Systems</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Weekly basket emptying and weir flap inspection prevents debris from reaching the pump. We check for cracks, proper water flow, and adjust water levels to optimize skimming.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Prevention:</strong> Avoids pump damage from debris blockages
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Electrical Components</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  We visually inspect timers, circuit breakers, and connections for corrosion or damage during each weekly visit. Bali's salt air accelerates electrical wear, making regular checks essential.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Safety:</strong> Early detection prevents electrical hazards
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Pool Lighting</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Weekly visual checks for flickering, discoloration, or water intrusion in light housings. We report issues before they become safety hazards or require expensive underwater repairs.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Note:</strong> Repairs require qualified electricians – we coordinate scheduling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DIY vs Professional Weekly Maintenance */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            DIY vs. Professional Weekly Maintenance
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Some pool owners consider handling weekly maintenance themselves. Here's an honest comparison to help you decide what works best for your situation in Bali.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">DIY Weekly Maintenance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Initial Investment</h4>
                    <p className="text-sm text-foreground/80">IDR 3-5 million for equipment (skimmer net, vacuum, brushes, test kits)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Weekly Chemical Costs</h4>
                    <p className="text-sm text-foreground/80">IDR 150,000-250,000/week when buying retail quantities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Time Required</h4>
                    <p className="text-sm text-foreground/80">3-4 hours per week minimum, plus emergency responses</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learning Curve</h4>
                    <p className="text-sm text-foreground/80">Understanding Bali's specific water chemistry challenges takes months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Owners who live on-site full-time and enjoy hands-on pool work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/50">
              <CardContent className="p-8">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Recommended for Bali
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Professional Weekly Service</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Monthly Cost</h4>
                    <p className="text-sm text-foreground/80">IDR 2,900,000-5,500,000/month (all-inclusive)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Chemicals Included</h4>
                    <p className="text-sm text-foreground/80">Premium 90% pure chemicals delivered and applied by professionals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Time Required</h4>
                    <p className="text-sm text-foreground/80">Zero – trained technicians handle everything on schedule</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expertise Included</h4>
                    <p className="text-sm text-foreground/80">Years of experience with Bali's tropical conditions and equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Rental properties, absent owners, busy professionals, resorts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-background rounded-lg border max-w-5xl">
            <p className="text-center text-foreground/80">
              Not sure which option is right for you? Chat with us on WhatsApp for honest advice: <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Mini Case Studies */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bali Properties Thriving with Weekly Maintenance
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            See how consistent weekly maintenance has transformed pool care for properties across Bali.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">5-Bedroom Rental Villa • Canggu</div>
                <h3 className="text-lg font-bold text-foreground mb-3">From Unreliable to 5-Star Reviews</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Previous maintenance was inconsistent – pool often cloudy for guest arrivals. After switching to our Gold package with 3x weekly visits, the villa achieved 100% positive pool reviews on Airbnb for 8 consecutive months.
                </p>
                <p className="text-xs text-foreground/60">
                  Package: Gold (3 visits/week) • ROI: Higher booking rates, zero complaints
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Private Residence • Ubud</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Remote Owner, Perfect Pool Year-Round</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Owner based in Singapore visits quarterly. Weekly maintenance with photo reports keeps them informed. In 18 months of service, zero emergency calls – pool is always guest-ready when family arrives.
                </p>
                <p className="text-xs text-foreground/60">
                  Package: Silver (2 visits/week) + Weekly photo reports via WhatsApp
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Boutique Hotel • Seminyak</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Seamless Operations, Happy Guests</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  15-room hotel with two pools struggled with previous provider's unreliable scheduling. Our coordinated weekly visits work around check-in/check-out times. Staff now focuses on hospitality, not pool issues.
                </p>
                <p className="text-xs text-foreground/60">
                  Package: Platinum (daily checks + 3 full services) • Result: Zero pool complaints
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Maintenance Tips */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tips for Pool Owners Between Weekly Visits
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Even with professional weekly service, these simple actions help keep your pool in optimal condition between our visits.
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
                    Takes 30 seconds and prevents debris from reaching the pump. Especially important after storms or windy days in Bali.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Check Water Level Midweek</h3>
                  <p className="text-sm text-foreground/80">
                    Water should be at mid-skimmer level. Too low damages the pump; too high reduces skimming effectiveness. Top up with hose as needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Listen for Pump Changes</h3>
                  <p className="text-sm text-foreground/80">
                    Unusual noises, vibration, or reduced water flow indicate developing problems. Report these to us via WhatsApp – early detection prevents major repairs.
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
                    Sunscreen, body oils, and lotions cloud water and consume chlorine. A quick rinse reduces chemical demand and keeps water clearer longer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Remove Large Debris Promptly</h3>
                  <p className="text-sm text-foreground/80">
                    Large leaves or palm fronds should be removed before they sink and stain. Keep a skimmer net nearby for quick debris removal after storms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Report Issues Immediately</h3>
                  <p className="text-sm text-foreground/80">
                    Notice cloudy water, green tinge, or equipment issues? WhatsApp us at <a href="https://wa.me/6282237565997" className="text-primary hover-elevate">+62 822-3756-5997</a> – early intervention prevents bigger problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Expanded */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions About Weekly Maintenance
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Is 2 visits per week enough in Bali?</h3>
                <p className="text-sm text-foreground/80">
                  For most residential villas, 2 visits per week (Silver) works well. During heavy rainy season or for rental properties, 3 visits per week (Gold) is recommended for optimal clarity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can I adjust my visit schedule seasonally?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! We can adjust to seasonal needs. Many owners do 2 visits in dry season and 3 visits during rainy season (November-March). Just let us know your preference.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What if I skip a week?</h3>
                <p className="text-sm text-foreground/80">
                  In Bali's climate, skipping even one week can cause issues. If you need a break, contact us first so we can add extra chemicals to prevent problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can you work around my schedule?</h3>
                <p className="text-sm text-foreground/80">
                  Absolutely. We coordinate visits with your availability. For rental properties, we can schedule after checkout or before check-in.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What chemicals do you use for weekly maintenance?</h3>
                <p className="text-sm text-foreground/80">
                  We use premium 90% pure chemicals including chlorine, pH adjusters, algaecides, and stabilizers. All chemicals are included in your package price. For more details, see our <Link href="/chemical-balancing-service-bali" className="text-primary hover-elevate underline">chemical balancing service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Does weekly maintenance include filter cleaning?</h3>
                <p className="text-sm text-foreground/80">
                  Weekly backwashing is included in all packages. Deep filter cleaning (cartridge removal and thorough cleaning) is included monthly in Gold and Platinum packages. For filter issues, see our <Link href="/pool-filter-cleaning-repair-bali" className="text-primary hover-elevate underline">filter cleaning and repair service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What happens if my pool turns green between visits?</h3>
                <p className="text-sm text-foreground/80">
                  This rarely happens with proper weekly maintenance. If it does occur, we provide emergency response within 24 hours (2 hours for Platinum). Our <Link href="/green-pool-cleaning-bali" className="text-primary hover-elevate underline">green pool recovery service</Link> can restore crystal-clear water quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Do you offer weekly maintenance for hotels?</h3>
                <p className="text-sm text-foreground/80">
                  Yes, we provide tailored weekly maintenance programs for hotels, resorts, and commercial properties with multiple pools. Our <Link href="/commercial-hotel-pool-service-bali" className="text-primary hover-elevate underline">commercial pool service</Link> includes flexible scheduling around guest operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How do I know my pool is being maintained properly?</h3>
                <p className="text-sm text-foreground/80">
                  We provide service reports after each visit via WhatsApp, including water test results, tasks completed, and any issues noted. Gold and Platinum packages include photo documentation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can weekly maintenance prevent equipment problems?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! Regular equipment inspections catch early warning signs before they become major repairs. We monitor pump performance, filter pressure, and connection integrity during every visit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What if I'm not satisfied with the service?</h3>
                <p className="text-sm text-foreground/80">
                  Your satisfaction is guaranteed. If you're not happy with any aspect of our weekly service, contact us immediately and we'll make it right. No questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Related Pool Services in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Weekly maintenance pairs perfectly with these additional services to keep your pool in peak condition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            <Link href="/pool-cleaning-service-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pool Cleaning Service</h3>
                  <p className="text-sm text-foreground/80">Complete cleaning packages for all property types</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/chemical-balancing-service-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Chemical Balancing</h3>
                  <p className="text-sm text-foreground/80">Expert water chemistry management</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-filter-cleaning-repair-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Filter Cleaning & Repair</h3>
                  <p className="text-sm text-foreground/80">Deep cleaning and filter maintenance</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/green-pool-cleaning-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Green Pool Recovery</h3>
                  <p className="text-sm text-foreground/80">Algae removal and water restoration</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-pump-repair-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pump Repair</h3>
                  <p className="text-sm text-foreground/80">Expert pump diagnosis and repair</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-equipment-installation-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Equipment Installation</h3>
                  <p className="text-sm text-foreground/80">New pumps, filters, and automation</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/villa-pool-service-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Villa Pool Service</h3>
                  <p className="text-sm text-foreground/80">Specialized care for luxury villas</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/commercial-hotel-pool-service-bali">
              <Card className="hover-elevate h-full cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Hotel & Resort Service</h3>
                  <p className="text-sm text-foreground/80">Commercial pool maintenance programs</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Weekly Pool Maintenance Service Areas
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            We provide weekly pool maintenance throughout Bali. Click on your area for location-specific information.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
            <Link href="/location-seminyak">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Seminyak</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-canggu">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Canggu</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-ubud">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Ubud</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-kuta">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Kuta</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-legian">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Legian</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-sanur">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Sanur</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-nusa-dua">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Nusa Dua</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-jimbaran">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Jimbaran</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-denpasar">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Denpasar</span>
                </CardContent>
              </Card>
            </Link>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Uluwatu</span>
              </CardContent>
            </Card>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Tabanan</span>
              </CardContent>
            </Card>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Gianyar</span>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-accent/5 rounded-lg max-w-5xl">
            <p className="text-center text-foreground/80">
              Don't see your area? We cover all of Bali. Contact us on WhatsApp: <a href="https://wa.me/6282237565997" className="text-primary hover-elevate font-medium">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Your Weekly Maintenance Plan
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let us handle the pool care. Contact us today to discuss which weekly plan works best for your property.
          </p>
          <Button size="lg" className="min-w-56" asChild data-testid="button-final-cta">
            <a href="https://wa.me/6282237565997">Schedule on WhatsApp</a>
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
