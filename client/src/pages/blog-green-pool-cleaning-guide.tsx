import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  AlertCircle, 
  Droplets,
  Beaker,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowLeft,
  Calendar
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function BlogGreenPoolCleaningGuide() {
  return (
    <>
      <Helmet>
        <title>Green Pool Cleaning Guide Bali | How to Fix Algae & Restore Crystal-Clear Water</title>
        <meta 
          name="description" 
          content="Step-by-step guide to fixing a green pool in Bali. Covers algae severity levels, shock treatment, chemical dosing, DIY vs professional recovery, and how to prevent your pool going green again in Bali's tropical climate." 
        />
        <meta name="keywords" content="green pool cleaning bali, algae removal bali, pool algae treatment, green pool shock treatment, pool turned green bali, cloudy pool water" />
        
        <meta property="og:title" content="Green Pool Emergency | Complete Algae Removal Guide Bali" />
        <meta property="og:description" content="Professional guide to clearing severe algae blooms and restoring crystal-clear pool water in Bali's tropical climate." />
        <meta property="og:type" content="article" />
        
        <link rel="canonical" href="https://balipoolservice.com/blog/green-pool-cleaning-guide" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Article Header */}
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge className="mb-4">Problem Solving</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Green Pool Emergency: Complete Guide to Algae Removal in Bali
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  November 18, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  15 min read
                </div>
                <div>By Bali Pool Service Team</div>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center mb-12">
              <Droplets className="h-24 w-24 text-green-600/50" />
            </div>

            {/* Emergency Alert Box */}
            <Card className="mb-12 border-2 border-destructive">
              <CardHeader className="bg-destructive/5">
                <CardTitle className="flex items-center gap-3 text-destructive">
                  <AlertCircle className="h-6 w-6" />
                  Pool Turned Green Overnight? Here's What to Do Now
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="font-semibold">Immediate Actions (First 2 Hours):</p>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Stop anyone from swimming - algae water can harbor harmful bacteria</li>
                    <li>Turn on your filter/pump if it's not already running</li>
                    <li>Remove large debris with pool net (leaves, branches)</li>
                    <li>Test water chemistry - you'll likely need shock treatment</li>
                    <li>Contact professional service if algae is severe (dark green/black) or pool is larger than 50m³</li>
                  </ol>
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="destructive" 
                      className="gap-2"
                      onClick={() => window.open("https://wa.me/6282340709041?text=URGENT: I need emergency green pool cleaning service", "_blank")}
                      data-testid="button-emergency-whatsapp"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                      Emergency Service (30-min response)
                    </Button>
                    <Button variant="outline" asChild data-testid="button-diy-guide">
                      <a href="#diy-cleanup">DIY Cleanup Guide Below</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discovering your pool has turned green is alarming, but it's a common problem in Bali's tropical climate—especially during monsoon season or after periods of neglected maintenance. Green pool water indicates a severe algae bloom that has overwhelmed your pool's sanitation system. This comprehensive guide explains what causes green pools in Bali, how to clear algae blooms safely and effectively, and how to prevent recurrence.
                </p>
              </div>

              {/* Section 1: Understanding Green Pool Water */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Beaker className="h-8 w-8 text-primary" />
                  What Causes Pool Water to Turn Green?
                </h2>
                
                <p className="mb-6">
                  Green pool water is caused by algae—microscopic plant organisms that multiply rapidly when conditions are favorable. In Bali's warm, humid climate, algae can transform a crystal-clear pool into a green swamp in just 48-72 hours under the right conditions.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive" />
                        Primary Causes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Low/Zero Chlorine:</strong> Insufficient sanitizer allows algae to thrive unchecked</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Poor Circulation:</strong> Dead spots in pool allow algae to colonize undisturbed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Imbalanced pH:</strong> High pH (above 7.8) reduces chlorine effectiveness dramatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Heavy Rainfall:</strong> Monsoon rains dilute chemicals and introduce contaminants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Neglected Maintenance:</strong> Skipping weekly service allows gradual algae buildup</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Bali-Specific Factors
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Year-Round Heat:</strong> 28-32°C water temperature is ideal for algae reproduction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Intense UV Radiation:</strong> Destroys chlorine 50% faster than temperate climates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Monsoon Season:</strong> November-March brings heavy rains and chemical dilution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Airborne Spores:</strong> High humidity carries algae spores from tropical vegetation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span><strong>Organic Debris:</strong> Falling leaves, flowers, and pollen feed algae growth</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="font-bold mb-2">Speed of Algae Growth in Bali</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bali's tropical climate accelerates algae proliferation dramatically:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>24-48 hours:</strong> Pool water begins to appear slightly cloudy or hazy</li>
                    <li>• <strong>48-72 hours:</strong> Visible green tint appears, walls become slippery</li>
                    <li>• <strong>5-7 days:</strong> Dark green water, heavy algae coating on all surfaces</li>
                    <li>• <strong>10-14 days:</strong> Black/swamp-like water, potential mosquito breeding ground</li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Algae Severity Levels */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Algae Severity Levels & Treatment Approach</h2>
                
                <p className="mb-6">
                  Treatment complexity and cost depend on algae severity. Identify your pool's current state to determine the best approach:
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="bg-yellow-50 dark:bg-yellow-950">
                      <div className="flex items-center justify-between">
                        <CardTitle>Level 1: Light Green (Early Stage)</CardTitle>
                        <Badge variant="outline" className="bg-yellow-100 dark:bg-yellow-900">Mild</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Visual Indicators:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Slight green tint to water</li>
                            <li>• Can still see pool floor</li>
                            <li>• Beginning of wall slipperiness</li>
                            <li>• Water clarity reduced by 30-50%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Treatment:</h4>
                          <p className="text-sm mb-2"><strong>DIY Difficulty:</strong> Easy</p>
                          <p className="text-sm mb-2"><strong>Time Required:</strong> 24-48 hours</p>
                          <p className="text-sm mb-2"><strong>Professional Cost:</strong> 500K - 800K IDR</p>
                          <p className="text-sm text-muted-foreground mt-3">
                            Single shock treatment + algaecide usually sufficient. Filter runs 24 hours.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="bg-orange-50 dark:bg-orange-950">
                      <div className="flex items-center justify-between">
                        <CardTitle>Level 2: Medium Green (Established Bloom)</CardTitle>
                        <Badge variant="outline" className="bg-orange-100 dark:bg-orange-900">Moderate</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Visual Indicators:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Distinctly green water</li>
                            <li>• Pool floor barely visible</li>
                            <li>• Thick slime on walls/steps</li>
                            <li>• Water clarity reduced by 60-80%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Treatment:</h4>
                          <p className="text-sm mb-2"><strong>DIY Difficulty:</strong> Moderate</p>
                          <p className="text-sm mb-2"><strong>Time Required:</strong> 3-5 days</p>
                          <p className="text-sm mb-2"><strong>Professional Cost:</strong> 1.2M - 2.0M IDR</p>
                          <p className="text-sm text-muted-foreground mt-3">
                            Double shock treatment, heavy brushing, possible filter cleaning. Professional service recommended.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="bg-red-50 dark:bg-red-950">
                      <div className="flex items-center justify-between">
                        <CardTitle>Level 3: Dark Green/Black (Severe Algae)</CardTitle>
                        <Badge variant="outline" className="bg-red-100 dark:bg-red-900">Severe</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Visual Indicators:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Dark green or black water</li>
                            <li>• Cannot see pool floor at all</li>
                            <li>• Thick algae mat on surfaces</li>
                            <li>• Possible foul odor</li>
                            <li>• Potential mosquito larvae</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Treatment:</h4>
                          <p className="text-sm mb-2"><strong>DIY Difficulty:</strong> Very Hard / Not Recommended</p>
                          <p className="text-sm mb-2"><strong>Time Required:</strong> 5-10 days</p>
                          <p className="text-sm mb-2"><strong>Professional Cost:</strong> 2.5M - 4.5M IDR</p>
                          <p className="text-sm text-muted-foreground mt-3">
                            Triple shock treatment, acid washing, possible filter replacement. Professional service strongly recommended.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2 text-destructive">When to Call Professionals Immediately</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pool is dark green or black (Level 3 severity)</li>
                        <li>• Pool size is larger than 50m³ (DIY chemical quantities become expensive/difficult)</li>
                        <li>• You have a commercial pool or vacation rental (guests expected soon)</li>
                        <li>• Equipment is malfunctioning (pump, filter not working properly)</li>
                        <li>• Previous DIY attempts have failed to clear algae</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: DIY Cleanup Process */}
              <section id="diy-cleanup" className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Step-by-Step DIY Green Pool Cleanup</h2>
                
                <p className="mb-6">
                  For Level 1-2 green pools (light to medium algae), homeowners can attempt cleanup themselves. This process requires 3-5 days and diligent monitoring. <strong>For Level 3 pools, professional service is strongly recommended.</strong>
                </p>

                <div className="space-y-6 mb-8">
                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          1
                        </div>
                        Test & Balance Water Chemistry
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Before adding chemicals, establish baseline water chemistry. Testing is crucial because algae blooms often cause severe pH imbalance.
                      </p>
                      <div className="bg-accent/30 border border-accent p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Required Test Kit Parameters:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Free Chlorine (will likely be 0 ppm)</li>
                          <li>• pH (target: 7.2-7.4 before shocking)</li>
                          <li>• Total Alkalinity (80-120 ppm)</li>
                          <li>• Calcium Hardness (200-400 ppm)</li>
                        </ul>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><strong>Action:</strong> Adjust pH to 7.2-7.4 using muriatic acid if needed. Shock treatment is ineffective at high pH.</p>
                        <p><strong>Why:</strong> At pH 8.0+, chlorine is only 20% effective. Lower pH ensures shock treatment works properly.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          2
                        </div>
                        Remove Large Debris
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Manually remove all visible leaves, branches, and debris. This prevents organic matter from consuming chlorine during shock treatment.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tools Needed:</strong> Leaf rake/skimmer, pool net</p>
                        <p><strong>Time:</strong> 30-60 minutes depending on debris load</p>
                        <p><strong>Tip:</strong> Don't attempt to vacuum yet—algae will clog your filter. Wait until water begins to clear.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          3
                        </div>
                        Brush All Pool Surfaces Vigorously
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Scrub walls, steps, ladders, and corners to break up algae colonies. This allows shock chemicals to penetrate and kill algae more effectively.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tools:</strong> Stiff-bristled pool brush (nylon for vinyl/fiberglass, metal for concrete/plaster)</p>
                        <p><strong>Focus Areas:</strong> Corners, steps, behind ladders, waterline—where algae colonizes first</p>
                        <p><strong>Duration:</strong> Brush for 20-30 minutes, covering all surfaces</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          4
                        </div>
                        Shock Treatment (Triple Dose for Green Pools)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        "Shocking" means adding a massive dose of chlorine to kill algae quickly. Green pools require 3x normal shock dose minimum.
                      </p>
                      
                      <Table className="mb-4">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Pool Volume</TableHead>
                            <TableHead>Algae Severity</TableHead>
                            <TableHead>Shock Required</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>30m³ (small)</TableCell>
                            <TableCell>Light Green</TableCell>
                            <TableCell>3-4 kg calcium hypochlorite (65%)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>50m³ (medium)</TableCell>
                            <TableCell>Light Green</TableCell>
                            <TableCell>5-6 kg calcium hypochlorite</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>50m³ (medium)</TableCell>
                            <TableCell>Medium Green</TableCell>
                            <TableCell>8-10 kg calcium hypochlorite</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>80m³ (large)</TableCell>
                            <TableCell>Medium Green</TableCell>
                            <TableCell>12-15 kg calcium hypochlorite</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="space-y-3 text-sm">
                        <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-600 p-4 rounded-r-lg">
                          <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠ Safety Warnings:</p>
                          <ul className="space-y-1 text-amber-700 dark:text-amber-200 text-xs">
                            <li>• Add shock in evening/at dusk - UV destroys chlorine rapidly during day</li>
                            <li>• Dissolve shock in bucket of water first, never add dry granules directly to pool</li>
                            <li>• Wear gloves and eye protection when handling chemicals</li>
                            <li>• Never mix different types of chlorine/chemicals together</li>
                            <li>• Keep pool filter running continuously during treatment</li>
                          </ul>
                        </div>
                        
                        <p><strong>Application Method:</strong></p>
                        <ol className="space-y-1 list-decimal list-inside">
                          <li>Fill large bucket with pool water (not the other way around)</li>
                          <li>Slowly add shock granules to water while stirring</li>
                          <li>Pour dissolved mixture around pool perimeter (not in one spot)</li>
                          <li>Brush pool again after adding shock</li>
                          <li>Run filter continuously for 24-48 hours minimum</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          5
                        </div>
                        Add Algaecide for Extra Killing Power
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        While shock kills most algae, algaecide ensures complete eradication and prevents rapid regrowth.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Dosage:</strong> 2-3 liters for 50m³ pool (follow product instructions)</p>
                        <p><strong>Timing:</strong> Add algaecide 12-24 hours after shock treatment, never simultaneously</p>
                        <p><strong>Type:</strong> Use copper-based or polyquat algaecide (not quaternary ammonium for severe blooms)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          6
                        </div>
                        Run Filter Continuously & Monitor
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Your filter must run 24/7 during treatment to remove dead algae. This is the most critical step many DIYers skip.
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="bg-accent/30 border border-accent p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Daily Monitoring Checklist:</h4>
                          <ul className="space-y-1">
                            <li>• <strong>Day 1 (0-24hrs):</strong> Water should lighten from dark green to lighter green. Brush walls again.</li>
                            <li>• <strong>Day 2 (24-48hrs):</strong> Water turning blue-green or cloudy white. Backwash/clean filter.</li>
                            <li>• <strong>Day 3 (48-72hrs):</strong> Can see pool floor. Begin vacuuming dead algae on "waste" setting.</li>
                            <li>• <strong>Day 4-5:</strong> Water should be clear. Test and rebalance chemistry.</li>
                          </ul>
                        </div>

                        <p><strong>Filter Maintenance:</strong> Backwash sand filter or clean cartridge filter every 12-24 hours during treatment. Dead algae clogs filters quickly.</p>
                        <p><strong>Electricity Cost:</strong> Running pump 24/7 for 5 days costs approximately 150K-250K IDR in Bali (depending on pump size).</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          7
                        </div>
                        Vacuum Dead Algae & Final Balancing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Once water is clear enough to see the floor, vacuum all settled debris. Then perform final chemistry balancing.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Vacuuming Method:</strong> Use manual vacuum, set filter valve to "waste/drain" position (bypasses filter). Refill pool as you vacuum to maintain water level.</p>
                        <p><strong>Final Chemistry Targets:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Chlorine: 1-3 ppm</li>
                          <li>pH: 7.4-7.6</li>
                          <li>Alkalinity: 80-120 ppm</li>
                          <li>Calcium Hardness: 200-400 ppm</li>
                        </ul>
                        <p className="mt-3"><strong>Resume Normal Maintenance:</strong> Once clear, return to weekly maintenance schedule to prevent recurrence.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-accent/30 border border-accent p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Total DIY Costs for Green Pool Cleanup</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>50m³ Pool (Light Green)</TableHead>
                        <TableHead>50m³ Pool (Medium Green)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Shock Treatment (Ca Hypochlorite)</TableCell>
                        <TableCell>400K - 600K IDR</TableCell>
                        <TableCell>700K - 1.0M IDR</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Algaecide (Copper-based)</TableCell>
                        <TableCell>250K - 400K IDR</TableCell>
                        <TableCell>400K - 600K IDR</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>pH Adjuster (Acid)</TableCell>
                        <TableCell>80K - 120K IDR</TableCell>
                        <TableCell>120K - 180K IDR</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Filter Cleaning/Backwashing</TableCell>
                        <TableCell>Included (DIY)</TableCell>
                        <TableCell>Included (DIY)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Electricity (5 days @ 24/7)</TableCell>
                        <TableCell>150K - 250K IDR</TableCell>
                        <TableCell>150K - 250K IDR</TableCell>
                      </TableRow>
                      <TableRow className="font-bold">
                        <TableCell>Total DIY Cost</TableCell>
                        <TableCell>880K - 1.37M IDR</TableCell>
                        <TableCell>1.37M - 2.03M IDR</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary/10">
                        <TableCell>Professional Service (same job)</TableCell>
                        <TableCell>1.2M - 1.5M IDR</TableCell>
                        <TableCell>2.0M - 2.8M IDR</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Note:</strong> Professional service includes labor, expertise, and guaranteed results. DIY requires 5-10 hours of your time over 5 days.
                  </p>
                </div>
              </section>

              {/* Section 4: Prevention */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Preventing Green Pool: Best Practices for Bali</h2>
                
                <p className="mb-6">
                  Prevention is always easier and cheaper than treatment. Follow these strategies to keep your pool crystal-clear year-round:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Maintain Consistent Chlorine Levels</h3>
                          <p className="text-sm text-muted-foreground">
                            Keep free chlorine at 2-3 ppm minimum. In Bali, never let chlorine drop below 1 ppm even for a day. Test 2-3x weekly.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Weekly Professional Service</h3>
                          <p className="text-sm text-muted-foreground">
                            Professional service every 7 days prevents algae establishment. Increase to twice weekly during monsoon season (Nov-Mar).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Run Pump 8-12 Hours Daily</h3>
                          <p className="text-sm text-muted-foreground">
                            Proper circulation prevents dead spots where algae colonizes. Run pump during hottest part of day (10am-6pm minimum).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Weekly Shock Treatment</h3>
                          <p className="text-sm text-muted-foreground">
                            Even with good chlorine levels, shock pool weekly to oxidize organic contaminants and prevent algae spore establishment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Balance pH Before It's Too High</h3>
                          <p className="text-sm text-muted-foreground">
                            Bali water tends alkaline. Test pH 2x weekly, adjust immediately if above 7.6. High pH = ineffective chlorine = algae growth.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">Remove Debris Daily</h3>
                          <p className="text-sm text-muted-foreground">
                            Skim leaves/debris daily. Organic matter consumes chlorine and feeds algae. Takes 5 minutes, prevents hours of cleanup.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Green Pool Recovery: DIY vs Professional Service</h2>
                <p className="mb-4">
                  Light green pools (Level 1) can be successfully treated by motivated homeowners willing to invest 5-10 hours over 5 days. The DIY chemical cost approaches professional service pricing, but you save the labor fee.
                </p>
                <p className="mb-4">
                  Medium to dark green pools (Level 2-3) are best left to professionals. The chemical quantities required, technical knowledge needed, and risk of equipment damage make professional service the better value. Professionals also guarantee results—if the pool doesn't clear, they return at no additional charge.
                </p>
                <p>
                  Most importantly: preventing green pools through consistent weekly maintenance costs far less than any cleanup scenario. A neglected pool requiring monthly emergency treatment costs 3-4x more annually than a pool receiving consistent weekly professional service.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className="my-16 p-8 rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Pool Turned Green? We Can Fix It Fast</h3>
                <p className="text-muted-foreground">
                  Our emergency response team clears green pools in 24-48 hours with guaranteed results. Same-day service available across Bali.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="destructive"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/6282340709041?text=URGENT: I need green pool cleaning service", "_blank")}
                  data-testid="button-emergency-service"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Emergency Service (30-min response)
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-pricing">
                  <Link href="/pricing">View Service Packages</Link>
                </Button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <Badge className="mb-3">Cost Guides</Badge>
                    <h4 className="font-bold mb-2 hover:text-primary transition-colors">
                      <Link href="/blog/pool-maintenance-cost-bali">
                        Pool Maintenance Costs in Bali
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete pricing breakdown including emergency cleanup costs
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/blog/pool-maintenance-cost-bali">Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <Badge className="mb-3">Maintenance Tips</Badge>
                    <h4 className="font-bold mb-2 hover:text-primary transition-colors">
                      <Link href="/blog/pool-cleaning-frequency-bali-climate">
                        How Often to Clean Your Pool in Bali
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Prevent green pools with the right cleaning frequency
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/blog/pool-cleaning-frequency-bali-climate">Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
