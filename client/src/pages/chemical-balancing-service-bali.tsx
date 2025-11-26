import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function ChemicalBalancingServiceBali() {
  return (
    <>
      <Helmet>
        <title>Chemical Balancing Service in Bali | Water Chemistry Experts</title>
        <meta name="description" content="Professional pool chemical balancing service in Bali. Safe, clear water chemistry. WhatsApp: +62 822-3756-5997" />
        <meta property="og:title" content="Chemical Balancing Service in Bali" />
        <meta property="og:description" content="Expert pool water testing and chemical balancing for villas & hotels. Safe chlorine levels, pH balance, alkalinity." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chemical Balancing Service in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Proper water chemistry keeps your pool safe, clear, and comfortable for swimming. Our technicians test and balance your pool's chemistry to perfection.
            </p>
            <Button size="lg" className="min-w-48" data-testid="button-whatsapp">
              <a href="https://wa.me/6282237565997">Get Chemical Testing Quote</a>
            </Button>
            <p className="text-sm text-foreground/80 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What We Test & Balance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/80 mb-6">
                Pool chemistry involves multiple parameters that all need to work together. We test and adjust:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">pH Level (7.2–7.6)</strong>
                    <p className="text-sm text-foreground/80">Affects comfort and chemical effectiveness</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Free Chlorine (1–3 ppm)</strong>
                    <p className="text-sm text-foreground/80">Kills bacteria and algae</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Total Alkalinity (80–120 ppm)</strong>
                    <p className="text-sm text-foreground/80">Stabilizes pH levels</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Calcium Hardness (200–400 ppm)</strong>
                    <p className="text-sm text-foreground/80">Prevents corrosion and scaling</p>
                  </div>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Chemistry Matters</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Unbalanced water chemistry causes:
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Eye and skin irritation for swimmers</li>
                  <li>• Algae growth and green water</li>
                  <li>• Cloudy water blocking visibility</li>
                  <li>• Equipment corrosion and damage</li>
                  <li>• Bacterial growth and health risks</li>
                  <li>• Expensive emergency repairs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Chemical Balancing Process
          </h2>
          <div className="space-y-6 max-w-3xl">
            {[
              { num: "1", title: "Water Testing", desc: "We collect water samples and test all key parameters using professional-grade test kits" },
              { num: "2", title: "Analysis", desc: "We analyze results and identify exactly what needs to be adjusted" },
              { num: "3", title: "Adjustment", desc: "We add precise amounts of chemicals to balance pH, chlorine, alkalinity, and hardness" },
              { num: "4", title: "Retest", desc: "We retest to confirm all parameters are now in the safe range" },
              { num: "5", title: "Report", desc: "You receive a digital report showing all test results and what was adjusted" }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Chemical Balancing Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">One-Time Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 450,000</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• Complete water testing</li>
                  <li>• Full chemical balancing</li>
                  <li>• Digital report</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/6282237565997">Get Quote</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary border-2">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-2 py-1 rounded text-xs font-bold inline-block mb-3">
                  Best Value
                </div>
                <h3 className="font-bold text-foreground mb-2">Monthly Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 1,200,000</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• 4 testing sessions/month</li>
                  <li>• Chemical balancing each visit</li>
                  <li>• Monthly reports</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="https://wa.me/6282237565997">Start Monthly Service</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Quarterly Package</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 3,200,000</p>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li>• 12 sessions over 3 months</li>
                  <li>• Full chemical management</li>
                  <li>• Seasonal adjustments</li>
                  <li>• Save 5%</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/6282237565997">Contact Us</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bali Water Chemistry Challenges */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Water Chemistry Challenges in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's tropical environment and local water conditions create unique chemical balancing challenges that require specialized expertise. Understanding these factors helps explain why professional chemistry management is essential.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">High Calcium Well Water</h3>
                <p className="text-sm text-foreground/80">
                  Most Bali pools are filled with well water containing high calcium and mineral levels. This causes scaling on tiles, cloudy water, and filter clogging. Regular testing and proper sequestrant treatment prevents costly buildup.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Rapid Chlorine Degradation</h3>
                <p className="text-sm text-foreground/80">
                  Intense equatorial UV rays break down chlorine within hours. Without stabilizer (cyanuric acid) and frequent testing, pools lose sanitizing power quickly, creating unsafe swimming conditions and algae growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Monsoon pH Fluctuations</h3>
                <p className="text-sm text-foreground/80">
                  Heavy tropical rainfall is naturally acidic and dilutes pool chemicals. During wet season, pH and alkalinity can swing dramatically within hours, requiring more frequent testing and adjustment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Tropical Algae Prevention</h3>
                <p className="text-sm text-foreground/80">
                  Warm temperatures (28-32°C year-round) combined with high humidity create perfect conditions for aggressive algae strains. Proactive algaecide treatment and proper chlorine levels are essential to prevent green water.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Salt vs Chlorine Systems</h3>
                <p className="text-sm text-foreground/80">
                  Both saltwater chlorinators and traditional chlorine pools are common in Bali. Each requires different management approaches, cell cleaning schedules, and salt level monitoring for optimal performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Mineral Buildup Issues</h3>
                <p className="text-sm text-foreground/80">
                  Iron, manganese, and copper in local water sources cause staining on pool surfaces and equipment. Proper metal sequestrant treatment and balanced chemistry prevents permanent discoloration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Chemical Needs */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Seasonal Chemical Requirements in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's two distinct seasons require different chemical management strategies. Our technicians adjust treatment protocols seasonally to maintain optimal water chemistry year-round.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Wet Season (November – March)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Heavy rainfall, high humidity, and organic debris create the most demanding chemical management period.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">More frequent testing</strong> – pH and chlorine checked 2-3x weekly</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Alkalinity buffers</strong> – prevent acid rain from crashing pH</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Shock treatments</strong> – more frequent to combat dilution</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Algaecide boost</strong> – preventive treatment after storms</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Clarifier use</strong> – helps filter remove fine particles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Dry Season (April – October)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Intense sun, high evaporation, and peak tourism create different chemical demands.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Stabilizer essential</strong> – cyanuric acid protects chlorine from UV</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Higher chlorine demand</strong> – more swimmers consume more sanitizer</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Calcium monitoring</strong> – evaporation concentrates minerals</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">pH rises faster</strong> – sun and heat drive pH upward</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Water top-ups</strong> – dilution affects overall chemistry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chemical Types Explained */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Chemicals Explained
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Understanding what each chemical does helps you appreciate proper water chemistry management. Here's what we use and why each matters for your Bali pool.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Chlorine (Sanitizer)</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  The primary sanitizer that kills bacteria, viruses, and algae. Available as tablets, granules, or liquid. Saltwater pools generate chlorine from dissolved salt.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Ideal range:</strong> 1-3 ppm free chlorine
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">pH Adjusters</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Sodium bisulfate (pH Down) lowers pH; sodium carbonate (pH Up) raises it. Proper pH ensures chlorine effectiveness and swimmer comfort.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Ideal range:</strong> 7.2-7.6 pH
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Alkalinity Increaser</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Sodium bicarbonate buffers pH against sudden swings. Acts as a "shock absorber" for water chemistry, especially important during Bali's rainy season.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Ideal range:</strong> 80-120 ppm total alkalinity
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Stabilizer (Cyanuric Acid)</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Protects chlorine from UV degradation. Essential in Bali's intense sunlight. Without stabilizer, chlorine can be destroyed within hours of application.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Ideal range:</strong> 30-50 ppm
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Algaecide</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Preventive treatment that inhibits algae growth. Particularly important in tropical climates where warm temperatures promote rapid algae bloom.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Application:</strong> Weekly or after heavy rain
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Clarifier</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Helps filter capture microscopic particles that cause cloudy water. Coagulates tiny debris into larger clumps that filters can remove effectively.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Application:</strong> As needed for cloudy water
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional vs DIY Chemical Testing */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional vs DIY Chemical Testing
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Many pool owners consider testing their own water chemistry. Here's an honest comparison to help you decide what's right for your Bali pool.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">DIY Chemical Testing</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Test Kit Cost</h4>
                    <p className="text-sm text-foreground/80">IDR 200,000-500,000 for basic strips or liquid test kit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accuracy</h4>
                    <p className="text-sm text-foreground/80">Test strips can be 20-30% inaccurate; liquid kits better but require technique</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parameters Tested</h4>
                    <p className="text-sm text-foreground/80">Basic kits: pH, chlorine only. Advanced kits add alkalinity, hardness</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Chemical Dosing</h4>
                    <p className="text-sm text-foreground/80">Must calculate correct amounts based on pool size and current readings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Quick daily checks between professional service visits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/50">
              <CardContent className="p-8">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  Recommended for Bali
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Professional Testing Service</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Testing Equipment</h4>
                    <p className="text-sm text-foreground/80">Professional-grade photometers and reagent kits (IDR 5+ million equipment)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accuracy</h4>
                    <p className="text-sm text-foreground/80">Laboratory-grade precision with calibrated equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parameters Tested</h4>
                    <p className="text-sm text-foreground/80">Full panel: pH, chlorine, alkalinity, hardness, stabilizer, TDS, metals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Chemical Dosing</h4>
                    <p className="text-sm text-foreground/80">Precise calculations and immediate application by trained technicians</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                    <p className="text-sm text-foreground/80">Rental properties, hotels, pools with chemistry issues, absent owners</p>
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
            Chemical Balance Problems We've Solved
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            See how our professional chemical balancing service has helped Bali pool owners resolve challenging water chemistry issues.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Villa Rental • Seminyak</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Chronic Algae Despite Regular Chlorine</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Owner added chlorine daily but pool kept turning green. Our testing revealed zero stabilizer – chlorine was being destroyed by sunlight within hours. Added cyanuric acid and established proper maintenance schedule.
                </p>
                <p className="text-xs text-foreground/60">
                  Result: Algae-free for 8+ months on monthly service
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Boutique Hotel • Ubud</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Guest Complaints About Eye Irritation</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Guests reported burning eyes and skin irritation. Water looked clear. Testing showed pH at 8.2 (too high) and combined chlorine buildup. Adjusted pH, performed shock treatment, and implemented proper testing schedule.
                </p>
                <p className="text-xs text-foreground/60">
                  Result: Zero guest complaints, improved reviews
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Private Residence • Canggu</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Scale Buildup Damaging Equipment</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  White scale deposits on tiles, cloudy water, and pump straining. Testing revealed calcium hardness at 650 ppm from local well water. Implemented partial drain, sequestrant treatment, and ongoing hardness monitoring.
                </p>
                <p className="text-xs text-foreground/60">
                  Result: Clear water, equipment protected, scaling controlled
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chemical Safety Tips */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Chemical Safety Tips
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Pool chemicals are powerful and require proper handling. Follow these safety guidelines whether storing chemicals on your property or handling them between professional visits.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Store in Cool, Dry Location</h3>
                  <p className="text-sm text-foreground/80">
                    Keep chemicals in a shaded, ventilated area away from direct sunlight. Bali's heat can degrade chemicals and create pressure in containers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Never Mix Different Chemicals</h3>
                  <p className="text-sm text-foreground/80">
                    Mixing chlorine with acids creates toxic chlorine gas. Never combine products or use the same measuring equipment for different chemicals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Keep Away from Children & Pets</h3>
                  <p className="text-sm text-foreground/80">
                    Store chemicals in locked cabinets or areas inaccessible to children and pets. Even small amounts can cause serious injury if ingested.
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
                  <h3 className="font-bold text-foreground mb-2">Add Chemicals to Water, Not Reverse</h3>
                  <p className="text-sm text-foreground/80">
                    Always add chemicals to pool water, never pour water into chemical containers. This prevents dangerous splashing and concentrated reactions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Wear Protective Equipment</h3>
                  <p className="text-sm text-foreground/80">
                    Use gloves and eye protection when handling concentrated chemicals. Wash hands thoroughly after any chemical contact.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Wait Before Swimming</h3>
                  <p className="text-sm text-foreground/80">
                    After chemical treatment, wait until chlorine levels return to 1-3 ppm before swimming. This typically takes 30 minutes to several hours depending on treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQs */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How often should I test my pool chemistry?</h3>
                <p className="text-sm text-foreground/80">
                  At least once per week. In Bali's climate with heavy rains, we recommend 2 tests per week or include it in your weekly maintenance package. For comprehensive testing services, see our <Link href="/pool-water-testing-service-bali" className="text-primary hover:underline">pool water testing service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What if my pool chemicals are already balanced?</h3>
                <p className="text-sm text-foreground/80">
                  We'll verify all readings are correct and make any minor adjustments needed. In tropical climates, small changes happen constantly due to rain and evaporation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Is testing really necessary if my pool looks clear?</h3>
                <p className="text-sm text-foreground/80">
                  Yes! Chemical imbalance can exist with clear-looking water. pH imbalance causes skin irritation, and low chlorine doesn't kill harmful bacteria. Regular testing prevents hidden problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Is saltwater pool chemistry different from chlorine pools?</h3>
                <p className="text-sm text-foreground/80">
                  Yes, saltwater pools require monitoring salt levels, chlorinator cell condition, and slightly different pH management. Learn more about our <Link href="/saltwater-pool-maintenance-bali" className="text-primary hover:underline">saltwater pool maintenance service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What causes a pool to turn green and how do you fix it?</h3>
                <p className="text-sm text-foreground/80">
                  Green water is caused by algae growth, usually from low chlorine, poor circulation, or chemical imbalance. Treatment involves shock treatment, algaecide, and chemistry correction. See our <Link href="/green-pool-cleaning-bali" className="text-primary hover:underline">green pool cleaning service</Link> for severe cases.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Why does my pool's pH keep rising?</h3>
                <p className="text-sm text-foreground/80">
                  Common causes include high alkalinity, fresh plaster or grout, aeration from fountains or spillovers, and intense sunlight. Regular pH testing and adjustment prevents the upward drift.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How do chemicals affect pool equipment lifespan?</h3>
                <p className="text-sm text-foreground/80">
                  Imbalanced chemistry accelerates equipment wear. Low pH corrodes metal components; high calcium causes scaling in pipes and heaters. Proper balance extends equipment life significantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can chemical balancing be part of regular pool cleaning?</h3>
                <p className="text-sm text-foreground/80">
                  Absolutely! Our <Link href="/pool-cleaning-service-bali" className="text-primary hover:underline">pool cleaning service</Link> packages include water testing and chemical balancing as part of every visit, ensuring your pool stays safe and clear.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What's the difference between free chlorine and combined chlorine?</h3>
                <p className="text-sm text-foreground/80">
                  Free chlorine is active and sanitizing. Combined chlorine (chloramines) has reacted with contaminants and causes that "chlorine smell" and eye irritation. High combined chlorine requires shock treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How long after chemical treatment can we swim?</h3>
                <p className="text-sm text-foreground/80">
                  For routine adjustments, wait 30 minutes with pump running. After shock treatment, wait until chlorine drops below 3 ppm (usually 8-24 hours). We always advise safe re-entry times after treatment.
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
            Chemical balancing works best as part of comprehensive pool care. Explore our other professional services to keep your Bali pool in perfect condition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            <Link href="/pool-water-testing-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Water Testing Service</h3>
                  <p className="text-sm text-foreground/80">Comprehensive water analysis and chemistry reports</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-cleaning-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pool Cleaning Service</h3>
                  <p className="text-sm text-foreground/80">Complete cleaning with chemistry included</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/saltwater-pool-maintenance-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Saltwater Pool Maintenance</h3>
                  <p className="text-sm text-foreground/80">Specialized care for saltwater systems</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/green-pool-cleaning-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Green Pool Recovery</h3>
                  <p className="text-sm text-foreground/80">Emergency algae treatment and restoration</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/weekly-pool-maintenance-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Weekly Maintenance</h3>
                  <p className="text-sm text-foreground/80">Scheduled maintenance packages</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-filter-cleaning-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Filter Cleaning & Repair</h3>
                  <p className="text-sm text-foreground/80">Filter maintenance and replacement</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-pump-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pump Repair Service</h3>
                  <p className="text-sm text-foreground/80">Pump diagnostics and repairs</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/villa-pool-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Villa Pool Service</h3>
                  <p className="text-sm text-foreground/80">Complete villa pool management</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Chemical Balancing Service Areas in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            We provide professional pool chemical balancing across all major areas in Bali. Our technicians service villas, hotels, and residential pools throughout the island.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
            <Link href="/location-seminyak">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Seminyak</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-canggu">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Canggu</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-ubud">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Ubud</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-kuta">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Kuta</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-legian">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Legian</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-sanur">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Sanur</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-nusa-dua">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Nusa Dua</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-jimbaran">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Jimbaran</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/location-denpasar">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Denpasar</span>
                </CardContent>
              </Card>
            </Link>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Uluwatu</span>
              </CardContent>
            </Card>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Tabanan</span>
              </CardContent>
            </Card>
            <Card className="hover-elevate cursor-pointer">
              <CardContent className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Gianyar</span>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-foreground/80 mt-8 max-w-3xl">
            Don't see your area listed? Contact us on WhatsApp – we likely service your location or can arrange coverage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ensure Safe Swimming Chemistry
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Get your water chemistry tested and balanced by Bali's pool chemistry experts.
          </p>
          <Button size="lg" className="min-w-48" asChild>
            <a href="https://wa.me/6282237565997" data-testid="button-cta-whatsapp">Request Service on WhatsApp</a>
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
