import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Droplets, 
  TestTube, 
  Thermometer, 
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Waves,
  Sun,
  CloudRain,
  Wrench
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function MaintenanceGuide() {
  return (
    <>
      <Helmet>
        <title>Pool Maintenance Guide Bali | Complete Tropical Pool Care Manual</title>
        <meta 
          name="description" 
          content="Complete guide to pool maintenance in Bali's tropical climate. Learn weekly tasks, chemical balancing, seasonal care, equipment maintenance, and troubleshooting for pristine pools year-round." 
        />
        <meta name="keywords" content="pool maintenance guide bali, tropical pool care, bali pool maintenance, pool cleaning guide, pool chemical guide bali" />
        
        <meta property="og:title" content="Pool Maintenance Guide Bali | Tropical Climate Care" />
        <meta property="og:description" content="Expert guide to maintaining your pool in Bali's tropical climate. Weekly tasks, chemical balancing, seasonal care, and troubleshooting." />
        <meta property="og:type" content="article" />
        
        <link rel="canonical" href="https://balipoolservice.com/maintenance-guide" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Droplets className="h-4 w-4" />
              <span className="text-sm font-semibold">Complete Pool Care Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pool Maintenance Guide for Bali's Tropical Climate
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Master pool care in Bali's year-round heat and humidity. This comprehensive guide covers everything from weekly tasks to seasonal maintenance and troubleshooting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://wa.me/6282323011656?text=I need help with pool maintenance", "_blank")}
                data-testid="button-contact-whatsapp"
              >
                <FaWhatsapp className="h-5 w-5" />
                Get Professional Help
              </Button>
              
              <Button size="lg" variant="outline" asChild data-testid="button-calculator">
                <Link href="/pool-calculator">Use Pool Calculator</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Bali is Different */}
        <section className="py-16 border-b">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Bali Pools Need Special Care
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-heat">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Year-Round Heat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bali's constant 28-32°C temperatures create ideal conditions for algae growth. Warm water reduces chlorine effectiveness, requiring more frequent testing and higher chemical levels than temperate climates.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-humidity">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>High Humidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    80-95% humidity accelerates chemical degradation and promotes bacteria growth. Pool chemicals lose potency faster in storage, and water evaporates more slowly, concentrating dissolved solids.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-monsoon">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CloudRain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Monsoon Season</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    November-March brings heavy rains that dilute chemicals, overflow pools, and introduce debris. Post-rain shock treatment and chemical rebalancing are essential to prevent algae blooms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Guide Tabs */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <Tabs defaultValue="weekly" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2" data-testid="tabs-maintenance">
                <TabsTrigger value="weekly" data-testid="tab-weekly">Weekly Tasks</TabsTrigger>
                <TabsTrigger value="chemicals" data-testid="tab-chemicals">Chemical Balance</TabsTrigger>
                <TabsTrigger value="equipment" data-testid="tab-equipment">Equipment Care</TabsTrigger>
                <TabsTrigger value="seasonal" data-testid="tab-seasonal">Seasonal Tips</TabsTrigger>
                <TabsTrigger value="troubleshooting" data-testid="tab-troubleshooting">Troubleshooting</TabsTrigger>
              </TabsList>

              {/* Weekly Tasks */}
              <TabsContent value="weekly" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Weekly Maintenance Checklist</h2>
                  <p className="text-muted-foreground mb-8">
                    Consistent weekly maintenance is essential in Bali's climate. Missing even one week can lead to algae growth and water quality issues.
                  </p>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary" data-testid="task-surface">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">1. Surface Skimming (Daily if possible)</h3>
                            <p className="text-muted-foreground">
                              Remove leaves, insects, flowers, and debris from water surface using a leaf skimmer. Bali's vegetation and wind deposit significant debris. Skim before vacuuming to prevent debris from sinking.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-vacuum">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">2. Vacuuming</h3>
                            <p className="text-muted-foreground">
                              Vacuum pool floor and steps to remove settled dirt, sand, and algae. Use automatic pool vacuum or manual vacuum head. Pay special attention to corners, steps, and around fittings where debris accumulates.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-brush">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">3. Brushing Walls & Steps</h3>
                            <p className="text-muted-foreground">
                              Brush all pool surfaces including walls, steps, corners, and behind ladders. This prevents algae attachment and removes biofilm. Use nylon brushes for vinyl/fiberglass, steel brushes for concrete/plaster.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-baskets">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">4. Empty Skimmer & Pump Baskets</h3>
                            <p className="text-muted-foreground">
                              Remove and clean skimmer baskets and pump strainer basket. Clogged baskets reduce circulation, strain pump motors, and harbor bacteria. Check weekly minimum, daily during monsoon season.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-backwash">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">5. Backwash Filter</h3>
                            <p className="text-muted-foreground">
                              Backwash sand or DE filters when pressure gauge reads 8-10 PSI above normal. Typical frequency: weekly in Bali's climate. Clean cartridge filters monthly or when flow decreases noticeably.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-test">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">6. Water Testing & Chemical Balancing</h3>
                            <p className="text-muted-foreground mb-3">
                              Test and adjust water chemistry 2-3 times per week in Bali. Test more frequently during heavy use, rain, or if water appears cloudy.
                            </p>
                            <div className="bg-accent/50 rounded-lg p-4 space-y-2">
                              <div className="flex justify-between">
                                <span className="font-semibold">pH:</span>
                                <span>7.2 - 7.6 (ideal: 7.4)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">Free Chlorine:</span>
                                <span>1 - 3 ppm (3-5 ppm for saltwater)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">Total Alkalinity:</span>
                                <span>80 - 120 ppm</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">Calcium Hardness:</span>
                                <span>200 - 400 ppm</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-semibold">Cyanuric Acid:</span>
                                <span>30 - 50 ppm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary" data-testid="task-inspect">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold mb-2">7. Equipment Inspection</h3>
                            <p className="text-muted-foreground">
                              Check pump for unusual noises, leaks, or vibrations. Inspect pool lights, tiles, and coping for damage. Look for leaks around equipment and plumbing. Address small issues before they become expensive repairs.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Chemical Balance */}
              <TabsContent value="chemicals" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Water Chemistry Guide</h2>
                  <p className="text-muted-foreground mb-8">
                    Proper chemical balance is crucial in Bali's warm water. Unbalanced water causes equipment damage, skin irritation, and algae growth.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="hover-elevate" data-testid="card-ph">
                      <CardHeader>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <TestTube className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>pH (7.2 - 7.6)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <strong>Why it matters:</strong> Controls chlorine effectiveness, water comfort, and equipment protection.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too high (above 7.6):</strong> Cloudy water, scale formation, reduced chlorine effectiveness. Add pH decreaser (muriatic acid or dry acid).
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too low (below 7.2):</strong> Corrosion, eye irritation, rapid chlorine loss. Add pH increaser (soda ash).
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="card-chlorine">
                      <CardHeader>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Droplets className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Free Chlorine (1-3 ppm)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <strong>Why it matters:</strong> Kills bacteria, algae, and contaminants. Most important chemical.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too high (above 5 ppm):</strong> Bleached swimwear, skin/eye irritation. Stop adding chlorine, allow sun to dissipate.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too low (below 1 ppm):</strong> Algae growth, bacteria, cloudy water. Shock treatment recommended for levels below 1 ppm.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="card-alkalinity">
                      <CardHeader>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Waves className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Total Alkalinity (80-120 ppm)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <strong>Why it matters:</strong> Buffers pH changes, prevents pH bounce.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too high (above 120 ppm):</strong> Cloudy water, scaling, pH difficult to adjust. Add muriatic acid slowly.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too low (below 80 ppm):</strong> pH becomes unstable, corrosion. Add alkalinity increaser (sodium bicarbonate).
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="card-hardness">
                      <CardHeader>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Wrench className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Calcium Hardness (200-400 ppm)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <strong>Why it matters:</strong> Protects plaster/equipment from corrosion or scaling.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too high (above 400 ppm):</strong> Scale on tiles, cloudy water, filter clogs. Partial water replacement needed.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Too low (below 200 ppm):</strong> Concrete erosion, metal corrosion. Add calcium chloride.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-primary/5 border-primary" data-testid="card-shock">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Shock Treatment</h3>
                      <p className="text-muted-foreground mb-4">
                        Weekly shock treatment is essential in Bali to eliminate chloramines, bacteria, and organic contaminants.
                      </p>
                      <div className="space-y-3">
                        <p className="text-sm">
                          <strong>When to shock:</strong> Weekly (Bali climate), after heavy rain, after heavy pool use, when water appears dull/cloudy, when chlorine smell is strong (chloramines), when algae appears.
                        </p>
                        <p className="text-sm">
                          <strong>How to shock:</strong> Shock in evening (sun degrades chlorine). Raise chlorine to 10-30 ppm using calcium hypochlorite or liquid chlorine. Run pump 24 hours. Test before swimming (chlorine below 5 ppm).
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Equipment Care */}
              <TabsContent value="equipment" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Equipment Maintenance</h2>
                  <p className="text-muted-foreground mb-8">
                    Proper equipment care extends lifespan and prevents expensive breakdowns. Bali's humidity and heat accelerate wear.
                  </p>

                  <div className="space-y-6">
                    <Card className="hover-elevate" data-testid="equipment-pump">
                      <CardHeader>
                        <CardTitle>Pool Pump</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Weekly:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Clean strainer basket</li>
                            <li>Check for leaks around pump and connections</li>
                            <li>Listen for unusual noises (grinding, squealing)</li>
                            <li>Verify strong water flow from returns</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Monthly:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Lubricate o-rings with silicone lubricant</li>
                            <li>Check motor ventilation (remove debris/leaves)</li>
                            <li>Verify timer operation (if applicable)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Annually:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Professional pump inspection and servicing</li>
                            <li>Replace worn seals and gaskets</li>
                            <li>Check motor bearings and capacitor</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="equipment-filter">
                      <CardHeader>
                        <CardTitle>Filter System</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Sand Filters:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Backwash weekly or when pressure rises 8-10 PSI</li>
                            <li>Replace sand every 5-7 years (sooner in Bali's climate)</li>
                            <li>Deep clean with filter cleaner twice yearly</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Cartridge Filters:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Rinse cartridge weekly with garden hose</li>
                            <li>Deep clean monthly with filter cleaner solution</li>
                            <li>Replace cartridge every 2-3 years or when damaged</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">DE Filters:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Backwash weekly and recharge with DE powder</li>
                            <li>Tear down and clean grids twice yearly</li>
                            <li>Replace DE grids every 3-5 years</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="equipment-automation">
                      <CardHeader>
                        <CardTitle>Automation & Salt Systems</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Salt Chlorine Generators:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Inspect cell for calcium buildup monthly</li>
                            <li>Clean cell with muriatic acid solution quarterly</li>
                            <li>Check salt levels monthly (2700-3400 ppm target)</li>
                            <li>Replace cell every 3-7 years depending on use</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Automated Controllers:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Calibrate pH and ORP probes monthly</li>
                            <li>Clean probes weekly to prevent buildup</li>
                            <li>Replace probes annually or when readings unstable</li>
                            <li>Verify chemical feeders working correctly</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Seasonal Tips */}
              <TabsContent value="seasonal" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Seasonal Pool Care in Bali</h2>
                  <p className="text-muted-foreground mb-8">
                    Bali has two main seasons that affect pool maintenance differently.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover-elevate" data-testid="season-dry">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Sun className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Dry Season (April - October)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Hot, sunny weather with minimal rain. Main challenges: increased evaporation, algae growth from intense sun, and higher chemical consumption.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Tasks:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Add water weekly to compensate for evaporation</li>
                            <li>Increase chlorine levels slightly (sun degrades chlorine faster)</li>
                            <li>Use stabilizer (cyanuric acid) to protect chlorine from UV</li>
                            <li>Consider pool cover to reduce evaporation and chemical use</li>
                            <li>Run pump longer hours (8-12 hours daily) in peak heat</li>
                            <li>Monitor calcium hardness (increases as water evaporates)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-elevate" data-testid="season-wet">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <CloudRain className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Monsoon Season (November - March)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Heavy rain, wind, and debris. Main challenges: water dilution, overflow, and contamination from rain runoff.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Tasks:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Skim and empty baskets daily (heavy debris)</li>
                            <li>Test chemicals after every heavy rain (dilution)</li>
                            <li>Shock treatment after significant rainfall</li>
                            <li>Lower water level before storms (prevent overflow)</li>
                            <li>Clean surrounding deck/landscaping (reduces debris)</li>
                            <li>Increase pump run time during heavy rain periods</li>
                            <li>Use algaecide preventatively (rain promotes algae)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Troubleshooting */}
              <TabsContent value="troubleshooting" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Common Pool Problems & Solutions</h2>
                  <p className="text-muted-foreground mb-8">
                    Quick guide to diagnosing and fixing common pool issues in Bali.
                  </p>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-destructive" data-testid="problem-green">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Green or Cloudy Water</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Causes:</strong> Algae growth from low chlorine, poor circulation, or insufficient filtration.
                            </p>
                            <p className="text-sm font-semibold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Brush all surfaces vigorously</li>
                              <li>Vacuum pool on "waste" setting (don't recirculate)</li>
                              <li>Shock treatment (triple dose: 30 ppm chlorine)</li>
                              <li>Add algaecide</li>
                              <li>Run pump 24 hours continuously</li>
                              <li>Backwash filter frequently</li>
                              <li>Re-test and balance chemicals after 24 hours</li>
                              <li>Consider professional service for severe cases</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-destructive" data-testid="problem-algae">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Persistent Algae Growth</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Causes:</strong> Insufficient sanitizer, poor circulation, or filter not working properly.
                            </p>
                            <p className="text-sm font-semibold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Test and balance pH first (algae thrives in high pH)</li>
                              <li>Brush pool thoroughly before shocking</li>
                              <li>Super-chlorinate (3x normal shock dose)</li>
                              <li>Add quality algaecide (not cheap alternatives)</li>
                              <li>Clean filter completely</li>
                              <li>Run pump 24/7 until clear</li>
                              <li>Vacuum after algae dies (settles to bottom)</li>
                              <li>If algae returns, check for phosphates (algae food source)</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-destructive" data-testid="problem-pump">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Pump Not Working / Weak Flow</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Causes:</strong> Clogged baskets, air leak, failed motor, or blocked impeller.
                            </p>
                            <p className="text-sm font-semibold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Check power: verify breaker hasn't tripped</li>
                              <li>Clean skimmer and pump baskets completely</li>
                              <li>Check for air leaks in suction line (bubbles in pump basket)</li>
                              <li>Ensure water level adequate (above skimmer opening)</li>
                              <li>Backwash or clean filter if pressure high</li>
                              <li>Prime pump if it lost prime (fill pump basket with water)</li>
                              <li>Listen for motor hum (capacitor failure) or grinding (bearing failure)</li>
                              <li>Call professional if mechanical failure suspected</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-destructive" data-testid="problem-chlorine">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Can't Maintain Chlorine Levels</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Causes:</strong> High cyanuric acid (CYA), high bather load, or phosphates.
                            </p>
                            <p className="text-sm font-semibold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Test CYA levels (should be 30-50 ppm)</li>
                              <li>If CYA over 80 ppm, partially drain and refill pool</li>
                              <li>Test for phosphates (fertilizer runoff, organic matter)</li>
                              <li>Add phosphate remover if levels high</li>
                              <li>Shock pool to break chlorine lock</li>
                              <li>Ensure pH balanced (high pH reduces chlorine effectiveness)</li>
                              <li>Consider switching to liquid chlorine temporarily (no CYA)</li>
                              <li>Check if chlorine tablets/liquid stored properly (cool, dry place)</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-destructive" data-testid="problem-stains">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Pool Stains (Brown, Green, or Black)</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Causes:</strong> Metal corrosion (copper, iron, manganese) or organic matter.
                            </p>
                            <p className="text-sm font-semibold mb-2">Solution:</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Identify stain type: vitamin C test for metals, organic for leaves/debris</li>
                              <li>Metal stains: use metal sequestrant or stain remover</li>
                              <li>Organic stains: shock treatment and enzyme cleaner</li>
                              <li>Brush stained areas with appropriate brush</li>
                              <li>Balance calcium hardness (low causes metal corrosion)</li>
                              <li>Consider acid washing for severe concrete stains</li>
                              <li>Use pre-filter if well water source (removes metals)</li>
                              <li>Professional help for persistent staining</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-primary/5 border-primary mt-8" data-testid="help-cta">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
                      <p className="text-muted-foreground mb-6">
                        Can't solve your pool problem? Our expert technicians provide same-day emergency service across Bali.
                      </p>
                      <Button
                        size="lg"
                        className="gap-2"
                        onClick={() => window.open("https://wa.me/6282323011656?text=I need help with a pool problem", "_blank")}
                        data-testid="button-emergency-help"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                        Get Emergency Help
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-gradient-to-b from-background to-accent/5 border-t">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Helpful Tools & Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-calculator">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pool Calculator</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate pool volume, chemical dosing, and cost estimates
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/pool-calculator">Use Calculator</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-faq">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">FAQ</h3>
                  <p className="text-muted-foreground mb-4">
                    Answers to common pool service questions
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/faq">Browse FAQ</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-service">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Professional Service</h3>
                  <p className="text-muted-foreground mb-4">
                    Let experts handle your pool maintenance
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/pricing">View Packages</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
