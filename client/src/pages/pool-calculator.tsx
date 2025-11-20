import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Droplets, DollarSign, TestTube2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function PoolCalculator() {
  // Volume Calculator State
  const [shape, setShape] = useState("rectangular");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [shallowDepth, setShallowDepth] = useState("");
  const [deepDepth, setDeepDepth] = useState("");
  const [diameter, setDiameter] = useState("");
  const [volume, setVolume] = useState<number | null>(null);

  // Chemical Calculator State
  const [poolVolume, setPoolVolume] = useState("");
  const [currentPH, setCurrentPH] = useState("");
  const [targetPH, setTargetPH] = useState("7.4");
  const [currentChlorine, setCurrentChlorine] = useState("");
  const [targetChlorine, setTargetChlorine] = useState("3");
  const [chemicalResults, setChemicalResults] = useState<any>(null);

  // Cost Calculator State
  const [costPoolSize, setCostPoolSize] = useState("medium");
  const [serviceFrequency, setServiceFrequency] = useState("weekly");
  const [serviceType, setServiceType] = useState("standard");
  const [costEstimate, setCostEstimate] = useState<any>(null);

  const calculateVolume = () => {
    let calculatedVolume = 0;
    
    if (shape === "rectangular") {
      const l = parseFloat(length);
      const w = parseFloat(width);
      const sd = parseFloat(shallowDepth);
      const dd = parseFloat(deepDepth);
      if (l && w && sd && dd) {
        const avgDepth = (sd + dd) / 2;
        calculatedVolume = l * w * avgDepth; // cubic meters
      }
    } else if (shape === "circular") {
      const d = parseFloat(diameter);
      const sd = parseFloat(shallowDepth);
      const dd = parseFloat(deepDepth);
      if (d && sd && dd) {
        const radius = d / 2;
        const avgDepth = (sd + dd) / 2;
        calculatedVolume = Math.PI * radius * radius * avgDepth;
      }
    }
    
    setVolume(calculatedVolume);
  };

  const calculateChemicals = () => {
    const vol = parseFloat(poolVolume);
    const curPH = parseFloat(currentPH);
    const tarPH = parseFloat(targetPH);
    const curCl = parseFloat(currentChlorine);
    const tarCl = parseFloat(targetChlorine);

    if (!vol) return;

    const results: any = {};

    // pH Adjustment (simplified calculation)
    if (curPH && tarPH) {
      const pHDiff = tarPH - curPH;
      if (pHDiff > 0) {
        // Need to raise pH (use soda ash)
        results.phAdjustment = {
          chemical: "Soda Ash (pH Increaser)",
          amount: Math.abs(pHDiff) * vol * 0.17, // kg
          direction: "increase"
        };
      } else if (pHDiff < 0) {
        // Need to lower pH (use muriatic acid)
        results.phAdjustment = {
          chemical: "Muriatic Acid (pH Decreaser)",
          amount: Math.abs(pHDiff) * vol * 0.15, // liters
          direction: "decrease"
        };
      } else {
        results.phAdjustment = {
          chemical: "None needed",
          amount: 0,
          direction: "balanced"
        };
      }
    }

    // Chlorine Adjustment
    if (curCl !== undefined && tarCl) {
      const clDiff = tarCl - curCl;
      if (clDiff > 0) {
        // Need to add chlorine
        results.chlorineAdjustment = {
          chemical: "Calcium Hypochlorite (65%)",
          amount: clDiff * vol * 0.0015, // kg
          direction: "increase"
        };
      } else if (clDiff < 0) {
        results.chlorineAdjustment = {
          chemical: "No addition needed - let sun dissipate",
          amount: 0,
          direction: "decrease"
        };
      } else {
        results.chlorineAdjustment = {
          chemical: "None needed",
          amount: 0,
          direction: "balanced"
        };
      }
    }

    // Weekly maintenance dosing (for balanced pool)
    results.weeklyMaintenance = {
      chlorine: vol * 0.003, // kg per week
      shock: vol * 0.01, // kg per week for shock treatment
      algaecide: vol * 0.001 // liters per week
    };

    setChemicalResults(results);
  };

  const calculateCost = () => {
    let basePrice = 0;
    
    // Base price by pool size
    const sizeMultiplier = {
      small: 1,
      medium: 1.3,
      large: 1.6,
      xlarge: 2
    }[costPoolSize] || 1;

    // Service type pricing
    const servicePrice = {
      basic: 400000,
      standard: 500000,
      premium: 650000
    }[serviceType] || 500000;

    // Frequency adjustment
    const frequencyMultiplier = {
      weekly: 1,
      biweekly: 1.9,
      triweekly: 2.6,
      daily: 5
    }[serviceFrequency] || 1;

    basePrice = servicePrice * sizeMultiplier;
    const monthlyPrice = basePrice * frequencyMultiplier;

    const estimate = {
      perVisit: basePrice,
      monthly: monthlyPrice,
      quarterly: monthlyPrice * 3 * 0.95, // 5% discount
      annually: monthlyPrice * 12 * 0.90, // 10% discount
      savings: {
        quarterly: monthlyPrice * 3 * 0.05,
        annually: monthlyPrice * 12 * 0.10
      }
    };

    setCostEstimate(estimate);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <Helmet>
        <title>Pool Calculator Bali | Volume, Chemical & Cost Calculator</title>
        <meta 
          name="description" 
          content="Free pool calculator for Bali. Calculate pool volume, chemical dosing (pH, chlorine, shock), and maintenance costs. Instant results for accurate pool care." 
        />
        <meta name="keywords" content="pool calculator, pool volume calculator, pool chemical calculator, pool cost calculator bali, pool maintenance cost" />
        
        <meta property="og:title" content="Free Pool Calculator | Volume, Chemicals & Costs" />
        <meta property="og:description" content="Calculate your pool volume, chemical requirements, and maintenance costs instantly. Free tool for Bali pool owners." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipool.services/pool-calculator" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Calculator className="h-4 w-4" />
              <span className="text-sm font-semibold">Free Pool Calculators</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pool Calculator Tools for Bali
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Calculate pool volume, chemical dosing, and maintenance costs instantly. Accurate calculations for pools in Bali's tropical climate.
            </p>
          </div>
        </section>

        {/* Calculator Tabs */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <Tabs defaultValue="volume" className="space-y-8">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2" data-testid="tabs-calculator">
                <TabsTrigger value="volume" className="gap-2" data-testid="tab-volume">
                  <Droplets className="h-4 w-4" />
                  Volume Calculator
                </TabsTrigger>
                <TabsTrigger value="chemical" className="gap-2" data-testid="tab-chemical">
                  <TestTube2 className="h-4 w-4" />
                  Chemical Calculator
                </TabsTrigger>
                <TabsTrigger value="cost" className="gap-2" data-testid="tab-cost">
                  <DollarSign className="h-4 w-4" />
                  Cost Calculator
                </TabsTrigger>
              </TabsList>

              {/* Volume Calculator */}
              <TabsContent value="volume">
                <Card data-testid="calculator-volume">
                  <CardHeader>
                    <CardTitle>Pool Volume Calculator</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Calculate your pool volume in cubic meters and liters. Essential for accurate chemical dosing.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="shape">Pool Shape</Label>
                      <Select value={shape} onValueChange={setShape}>
                        <SelectTrigger id="shape" data-testid="select-shape">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rectangular">Rectangular</SelectItem>
                          <SelectItem value="circular">Circular / Oval</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {shape === "rectangular" ? (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="length">Length (meters)</Label>
                            <Input
                              id="length"
                              type="number"
                              step="0.1"
                              value={length}
                              onChange={(e) => setLength(e.target.value)}
                              placeholder="e.g., 10"
                              data-testid="input-length"
                            />
                          </div>
                          <div>
                            <Label htmlFor="width">Width (meters)</Label>
                            <Input
                              id="width"
                              type="number"
                              step="0.1"
                              value={width}
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder="e.g., 5"
                              data-testid="input-width"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <Label htmlFor="diameter">Diameter (meters)</Label>
                        <Input
                          id="diameter"
                          type="number"
                          step="0.1"
                          value={diameter}
                          onChange={(e) => setDiameter(e.target.value)}
                          placeholder="e.g., 6"
                          data-testid="input-diameter"
                        />
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="shallow">Shallow End Depth (meters)</Label>
                        <Input
                          id="shallow"
                          type="number"
                          step="0.1"
                          value={shallowDepth}
                          onChange={(e) => setShallowDepth(e.target.value)}
                          placeholder="e.g., 1.2"
                          data-testid="input-shallow-depth"
                        />
                      </div>
                      <div>
                        <Label htmlFor="deep">Deep End Depth (meters)</Label>
                        <Input
                          id="deep"
                          type="number"
                          step="0.1"
                          value={deepDepth}
                          onChange={(e) => setDeepDepth(e.target.value)}
                          placeholder="e.g., 2.0"
                          data-testid="input-deep-depth"
                        />
                      </div>
                    </div>

                    <Button onClick={calculateVolume} className="w-full" data-testid="button-calculate-volume">
                      Calculate Volume
                    </Button>

                    {volume !== null && volume > 0 && (
                      <div className="mt-6 p-6 rounded-lg bg-primary/5 border-2 border-primary" data-testid="result-volume">
                        <h3 className="text-xl font-bold mb-4">Results:</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-lg">
                            <span className="text-muted-foreground">Volume (cubic meters):</span>
                            <span className="font-bold text-2xl text-primary">{volume.toFixed(2)} m³</span>
                          </div>
                          <div className="flex justify-between items-center text-lg">
                            <span className="text-muted-foreground">Volume (liters):</span>
                            <span className="font-bold text-2xl text-primary">{(volume * 1000).toFixed(0)} L</span>
                          </div>
                          <div className="flex justify-between items-center text-lg">
                            <span className="text-muted-foreground">Volume (gallons):</span>
                            <span className="font-bold text-2xl text-primary">{(volume * 264.172).toFixed(0)} gal</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Chemical Calculator */}
              <TabsContent value="chemical">
                <Card data-testid="calculator-chemical">
                  <CardHeader>
                    <CardTitle>Chemical Dosing Calculator</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Calculate how much chemicals to add based on your current and target water chemistry.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="poolVolume">Pool Volume (cubic meters)</Label>
                      <Input
                        id="poolVolume"
                        type="number"
                        step="0.1"
                        value={poolVolume}
                        onChange={(e) => setPoolVolume(e.target.value)}
                        placeholder="e.g., 50"
                        data-testid="input-pool-volume"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Use the Volume Calculator above if you don't know your pool volume
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">pH Adjustment</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="currentPH">Current pH</Label>
                          <Input
                            id="currentPH"
                            type="number"
                            step="0.1"
                            value={currentPH}
                            onChange={(e) => setCurrentPH(e.target.value)}
                            placeholder="e.g., 7.8"
                            data-testid="input-current-ph"
                          />
                        </div>
                        <div>
                          <Label htmlFor="targetPH">Target pH</Label>
                          <Input
                            id="targetPH"
                            type="number"
                            step="0.1"
                            value={targetPH}
                            onChange={(e) => setTargetPH(e.target.value)}
                            placeholder="Ideal: 7.4"
                            data-testid="input-target-ph"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Chlorine Adjustment</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="currentChlorine">Current Chlorine (ppm)</Label>
                          <Input
                            id="currentChlorine"
                            type="number"
                            step="0.1"
                            value={currentChlorine}
                            onChange={(e) => setCurrentChlorine(e.target.value)}
                            placeholder="e.g., 1.5"
                            data-testid="input-current-chlorine"
                          />
                        </div>
                        <div>
                          <Label htmlFor="targetChlorine">Target Chlorine (ppm)</Label>
                          <Input
                            id="targetChlorine"
                            type="number"
                            step="0.1"
                            value={targetChlorine}
                            onChange={(e) => setTargetChlorine(e.target.value)}
                            placeholder="Ideal: 3"
                            data-testid="input-target-chlorine"
                          />
                        </div>
                      </div>
                    </div>

                    <Button onClick={calculateChemicals} className="w-full" data-testid="button-calculate-chemicals">
                      Calculate Chemical Dosing
                    </Button>

                    {chemicalResults && (
                      <div className="mt-6 space-y-4" data-testid="result-chemicals">
                        {chemicalResults.phAdjustment && (
                          <div className="p-6 rounded-lg bg-primary/5 border-2 border-primary">
                            <h3 className="text-lg font-bold mb-3">pH Adjustment:</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Chemical:</span>
                                <span className="font-semibold">{chemicalResults.phAdjustment.chemical}</span>
                              </div>
                              {chemicalResults.phAdjustment.amount > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Amount:</span>
                                  <span className="font-bold text-primary">
                                    {chemicalResults.phAdjustment.amount.toFixed(2)} {chemicalResults.phAdjustment.direction === "increase" ? "kg" : "L"}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {chemicalResults.chlorineAdjustment && (
                          <div className="p-6 rounded-lg bg-primary/5 border-2 border-primary">
                            <h3 className="text-lg font-bold mb-3">Chlorine Adjustment:</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Chemical:</span>
                                <span className="font-semibold">{chemicalResults.chlorineAdjustment.chemical}</span>
                              </div>
                              {chemicalResults.chlorineAdjustment.amount > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Amount:</span>
                                  <span className="font-bold text-primary">{chemicalResults.chlorineAdjustment.amount.toFixed(2)} kg</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {chemicalResults.weeklyMaintenance && (
                          <div className="p-6 rounded-lg bg-accent/50 border">
                            <h3 className="text-lg font-bold mb-3">Weekly Maintenance (Balanced Pool):</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Regular Chlorine:</span>
                                <span className="font-semibold">{chemicalResults.weeklyMaintenance.chlorine.toFixed(2)} kg/week</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Shock Treatment:</span>
                                <span className="font-semibold">{chemicalResults.weeklyMaintenance.shock.toFixed(2)} kg/week</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Algaecide:</span>
                                <span className="font-semibold">{chemicalResults.weeklyMaintenance.algaecide.toFixed(2)} L/week</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cost Calculator */}
              <TabsContent value="cost">
                <Card data-testid="calculator-cost">
                  <CardHeader>
                    <CardTitle>Maintenance Cost Calculator</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Estimate your monthly and annual pool maintenance costs based on pool size and service frequency.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="poolSize">Pool Size</Label>
                      <Select value={costPoolSize} onValueChange={setCostPoolSize}>
                        <SelectTrigger id="poolSize" data-testid="select-pool-size">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (up to 30m³)</SelectItem>
                          <SelectItem value="medium">Medium (30-60m³)</SelectItem>
                          <SelectItem value="large">Large (60-100m³)</SelectItem>
                          <SelectItem value="xlarge">Extra Large (100m³+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="frequency">Service Frequency</Label>
                      <Select value={serviceFrequency} onValueChange={setServiceFrequency}>
                        <SelectTrigger id="frequency" data-testid="select-frequency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly (Recommended)</SelectItem>
                          <SelectItem value="biweekly">Twice Weekly</SelectItem>
                          <SelectItem value="triweekly">3x Weekly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Package</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger id="serviceType" data-testid="select-service-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (Cleaning only)</SelectItem>
                          <SelectItem value="standard">Standard (Cleaning + Chemicals)</SelectItem>
                          <SelectItem value="premium">Premium (Full service + Reports)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={calculateCost} className="w-full" data-testid="button-calculate-cost">
                      Calculate Cost
                    </Button>

                    {costEstimate && (
                      <div className="mt-6 space-y-4" data-testid="result-cost">
                        <div className="p-6 rounded-lg bg-primary/5 border-2 border-primary">
                          <h3 className="text-xl font-bold mb-4">Cost Estimate:</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center pb-3 border-b">
                              <span className="text-muted-foreground">Per Visit:</span>
                              <span className="font-bold text-xl">{formatCurrency(costEstimate.perVisit)}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b">
                              <span className="text-muted-foreground">Monthly:</span>
                              <span className="font-bold text-2xl text-primary">{formatCurrency(costEstimate.monthly)}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b">
                              <span className="text-muted-foreground">Quarterly (5% off):</span>
                              <div className="text-right">
                                <div className="font-bold text-xl">{formatCurrency(costEstimate.quarterly)}</div>
                                <div className="text-xs text-green-600">Save {formatCurrency(costEstimate.savings.quarterly)}</div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Annually (10% off):</span>
                              <div className="text-right">
                                <div className="font-bold text-xl">{formatCurrency(costEstimate.annually)}</div>
                                <div className="text-xs text-green-600">Save {formatCurrency(costEstimate.savings.annually)}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-accent/50 border">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> Estimates include routine maintenance only. Additional costs may apply for repairs, equipment replacement, or chemical subscriptions.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let Professionals Handle the Math
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert technicians handle all calculations, testing, and chemical balancing for you. Focus on enjoying your pool.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://wa.me/6282237565997?text=I'm interested in professional pool service", "_blank")}
                data-testid="button-whatsapp-cta"
              >
                <FaWhatsapp className="h-5 w-5" />
                Get Professional Service
              </Button>
              
              <Button size="lg" variant="outline" asChild data-testid="button-pricing">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-maintenance-guide">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Maintenance Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete guide to pool care in Bali's tropical climate
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/maintenance-guide">Read Guide</Link>
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

              <Card className="hover-elevate" data-testid="card-blog">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pool Care Blog</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert tips and advice for pool owners
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/blog">Browse Articles</Link>
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
