import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function PoolFilterCleaningRepairBali() {
  return (
    <>
      <Helmet>
        <title>Pool Filter Cleaning & Repair Bali | Sand, Cartridge & DE Filter Specialists</title>
        <meta name="description" content="Professional pool filter cleaning and repair in Bali. Sand filters, cartridge filters & DE systems serviced. Restore water flow, prevent equipment failure, extend filter life. Call: +62 823-2301-1656" />
        <meta property="og:title" content="Pool Filter Cleaning & Repair in Bali" />
        <meta property="og:description" content="Professional pool filter cleaning, backwashing, and repair. Extend filter life, improve circulation." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pool Filter Cleaning & Repair in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              A clogged filter is the leading cause of cloudy water and poor circulation. Our expert technicians clean, maintain, and repair all filter types to keep your pool crystal clear.
            </p>
            <Button size="lg" className="min-w-48" asChild>
              <a href="https://wa.me/6282323011656" data-testid="button-hero-whatsapp">
                Get Filter Service Quote
              </a>
            </Button>
            <p className="text-sm text-foreground/80 mt-4">
              WhatsApp: <a href="https://wa.me/6282323011656" className="font-semibold text-primary hover-elevate">+62 823-2301-1656</a>
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Filter Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Regular Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Weekly Backwashing</strong>
                    <p className="text-sm text-foreground/80">Reverse water flow to clear debris buildup</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Monthly Deep Cleaning</strong>
                    <p className="text-sm text-foreground/80">Remove trapped dirt and extend filter life</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Pressure Monitoring</strong>
                    <p className="text-sm text-foreground/80">Track gauge readings to catch problems early</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Emergency Repairs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Cartridge Replacement</strong>
                    <p className="text-sm text-foreground/80">Replace worn-out cartridge elements</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Pressure Valve Repair</strong>
                    <p className="text-sm text-foreground/80">Fix leaks and pressure valve issues</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Filter Tank Repair</strong>
                    <p className="text-sm text-foreground/80">Patch cracks, replace broken components</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Filter Care Matters
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-foreground/80 mb-6">
                Your pool filter is the heart of your circulation system. When it clogs:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-foreground/80">Water becomes cloudy and murky</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-foreground/80">Algae grows faster (less circulation)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-foreground/80">Pump works harder and overheats</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-foreground/80">Chemicals don't distribute evenly</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Regular cleaning prevents emergencies</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Extends filter life 2-3 years</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Reduces energy costs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Keeps water crystal clear</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Filter Services & Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Weekly Backwashing</h3>
                <p className="text-2xl font-bold text-primary mb-4">Included in maintenance</p>
                <p className="text-sm text-foreground/80">
                  We backwash your filter every visit to keep it clean and efficient. This is the most basic maintenance step.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Monthly Deep Clean</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 500,000</p>
                <p className="text-sm text-foreground/80">
                  Professional deep cleaning to remove trapped contaminants and extend filter life. Recommended monthly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Filter Cartridge Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 800,000</p>
                <p className="text-sm text-foreground/80">
                  Replace worn cartridges (typical life 2-3 years). Keeps filter like new.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">Emergency Repair</h3>
                <p className="text-2xl font-bold text-primary mb-4">From IDR 1,200,000</p>
                <p className="text-sm text-foreground/80">
                  Urgent repairs for broken valves, leaks, or tank issues. Fast response available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bali Filter Challenges */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Filter Challenges Unique to Bali's Tropical Climate
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's tropical environment puts extreme demands on pool filters. Understanding these challenges helps you appreciate why regular professional filter maintenance is essential for crystal-clear water.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Heavy Tropical Debris Loads</h3>
                <p className="text-sm text-foreground/80">
                  Bali's lush tropical gardens produce constant debris. Frangipani flowers, palm fronds, and organic matter fall into pools daily, overwhelming filters faster than in temperate climates. Filters clog 3-4x faster here.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Sand Filter Clogging</h3>
                <p className="text-sm text-foreground/80">
                  Fine tropical dust and organic particles compact sand filter media over time. Without regular backwashing and annual deep cleaning, sand becomes channelled, allowing dirty water to bypass filtration entirely.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Cartridge Degradation</h3>
                <p className="text-sm text-foreground/80">
                  Bali's intense UV rays and high chemical demands degrade cartridge filter elements faster. Cartridges that last 2-3 years elsewhere may need replacement every 12-18 months in Bali's conditions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Monsoon Sediment Overload</h3>
                <p className="text-sm text-foreground/80">
                  During wet season (November-March), heavy rainfall washes soil, leaves, and sediment into pools. This sudden debris surge can overwhelm filters within hours, requiring emergency cleaning after storms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Volcanic Ash Infiltration</h3>
                <p className="text-sm text-foreground/80">
                  When Mount Agung or nearby volcanoes are active, fine volcanic ash settles across Bali. This ultra-fine particulate bypasses standard filtration and requires specialized chemical treatment and filter cleaning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Hard Water Scaling</h3>
                <p className="text-sm text-foreground/80">
                  Bali's groundwater contains high calcium and mineral content. This causes scale buildup inside filter tanks, clogs filter media, and reduces efficiency. Regular acid washing and descaling is essential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Filter Care */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Seasonal Filter Care Guide for Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Bali's two distinct seasons require different filter maintenance approaches. Adjusting your filter care schedule seasonally prevents problems and extends equipment life.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Wet Season (November – March)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Heavy rainfall and increased organic debris make this the most demanding time for filter systems.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Backwash 2-3x weekly</strong> instead of once per week</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Check pressure gauge daily</strong> – sudden spikes indicate clogging</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Clean skimmer baskets frequently</strong> to reduce filter load</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Schedule deep cleaning after storms</strong> when debris spikes</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Monitor for algae</strong> – diluted chemicals stress filters more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Dry Season (April – October)</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Lower humidity but intense sun and peak tourism create different filter maintenance priorities.
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Standard weekly backwashing</strong> usually sufficient</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Dust and ash accumulation</strong> requires regular cleaning</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Higher guest usage</strong> increases body oils and sunscreen in filters</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Perfect time for deep cleaning</strong> and cartridge replacement</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Check for scale buildup</strong> from evaporation concentration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Types Explained */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pool Filter Types Explained
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Understanding your filter type helps you recognize issues early and communicate effectively with your pool service technician. Here's what every Bali pool owner should know about filter systems.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Sand Filters</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  The most common filter in Bali resorts and larger pools. Uses special #20 silica sand to trap particles down to 20-40 microns. Low maintenance but requires regular backwashing and sand replacement every 5-7 years.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Large pools, hotels, high-debris environments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Cartridge Filters</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Popular in smaller villa pools. Removable pleated cartridge captures debris down to 10-15 microns. Easy to clean but requires replacement every 1-2 years in Bali conditions.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Private villas, smaller pools, areas with limited water
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">DE (Diatomaceous Earth) Filters</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Premium filters using fossilized diatom powder to achieve the finest filtration (2-5 microns). Produces the clearest water but requires specialized maintenance and DE powder replenishment after each cleaning.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Luxury properties demanding the clearest water
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Multiport Valves</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  The control center of sand and DE filters. Settings include Filter, Backwash, Rinse, Waste, Recirculate, and Closed. Valve o-rings and gaskets wear over time and can cause leaks or improper flow.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Warning signs:</strong> Leaking from valve, difficulty turning handle
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Pressure Gauges</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Critical indicator of filter health. Normal operating pressure varies by system (typically 10-15 PSI). When pressure rises 8-10 PSI above normal, it's time to backwash or clean.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Tip:</strong> Note your clean filter pressure as a baseline reference
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signs Your Filter Needs Attention */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Signs Your Pool Filter Needs Attention
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Recognizing early warning signs prevents costly repairs and keeps your pool water crystal clear. Contact us immediately if you notice any of these issues.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Warning Signs to Watch
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Pressure gauge reading high</strong> – 8-10 PSI above normal indicates clogging</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Cloudy or hazy water</strong> – filter not removing fine particles</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Reduced water flow</strong> from return jets indicates blockage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Sand or DE in pool</strong> – internal damage or broken laterals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Short filter cycles</strong> – needing frequent backwashing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Call a Professional Immediately
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Water leaking from filter tank</strong> – cracked housing needs repair</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Pressure gauge stuck at zero</strong> – gauge or internal issue</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Pump running but no circulation</strong> – major blockage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Backwash not working</strong> – multiport valve failure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-foreground/80"><strong className="text-foreground">Unusual pump noises</strong> – filter problems stressing pump</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-foreground/80">
                    Emergency filter repair: <a href="https://wa.me/6282323011656" className="text-primary font-medium hover-elevate">+62 823-2301-1656</a>
                  </p>
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
            Filter Problems We've Solved in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Real examples of filter issues we've diagnosed and repaired for properties across Bali. See how professional filter care prevents emergencies and saves money.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Platinum Package • Seminyak</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Sand Filter Channelling Crisis</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Resort pool water stayed cloudy despite chemical treatment. Investigation revealed sand filter media had channelled after 8 years without replacement. We replaced the filter sand and repaired eroded laterals. Water clarity restored within 24 hours.
                </p>
                <p className="text-xs text-foreground/60">
                  Now on quarterly deep cleaning schedule to prevent recurrence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Private Villa • Canggu</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Multiport Valve Leak Repair</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Owner noticed water constantly draining from backwash line even in filter mode. Worn spider gasket in multiport valve allowed water bypass. We replaced the gasket and o-rings, stopping the leak and restoring proper flow.
                </p>
                <p className="text-xs text-foreground/60">
                  Saved IDR 8 million vs full valve replacement
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary font-bold text-sm mb-3">Luxury Villa • Uluwatu</div>
                <h3 className="text-lg font-bold text-foreground mb-3">DE Filter Restoration</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Premium DE filter hadn't been properly maintained for 2 years. Grids were damaged and clogged with scale. We replaced all 8 filter grids, cleaned the tank, and trained staff on proper DE recharging after each cleaning.
                </p>
                <p className="text-xs text-foreground/60">
                  Water clarity now exceeds 5-star hotel standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Maintenance Tips */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tips for Prolonging Your Pool Filter Life
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Even with professional service, these tips help keep your filter in peak condition and extend its lifespan significantly.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Monitor Pressure Gauge Weekly</h3>
                  <p className="text-sm text-foreground/80">
                    Note your filter's clean operating pressure. When pressure rises 8-10 PSI above this baseline, it's time for cleaning. Ignoring high pressure strains pumps and damages equipment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Empty Skimmer Baskets Daily</h3>
                  <p className="text-sm text-foreground/80">
                    Removing debris before it reaches the filter reduces strain and extends cleaning intervals. Takes 30 seconds and prevents major clogs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Run Pump Long Enough</h3>
                  <p className="text-sm text-foreground/80">
                    In Bali's climate, run your pump 10-12 hours daily. Insufficient circulation means filters work harder when running, leading to faster clogging and uneven wear.
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
                  <h3 className="font-bold text-foreground mb-2">Maintain Proper Water Chemistry</h3>
                  <p className="text-sm text-foreground/80">
                    Unbalanced pH (below 7.2 or above 7.8) damages filter components. High calcium causes scaling inside filters. Regular water testing protects your equipment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Never Bypass Backwashing</h3>
                  <p className="text-sm text-foreground/80">
                    Some owners skip backwashing to save water. This compacts debris, creates channels, and permanently damages filter media. Regular backwashing is essential.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Schedule Annual Deep Cleaning</h3>
                  <p className="text-sm text-foreground/80">
                    Once yearly, have your filter professionally disassembled, acid-washed, and inspected. This catches developing problems and extends filter life by years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQ */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions About Pool Filters
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How often should I clean my filter?</h3>
                <p className="text-sm text-foreground/80">
                  Weekly backwashing is standard. Deep cleaning monthly or when pressure gauge reads 8-10 PSI above normal. More often during rainy season. For comprehensive maintenance that includes filter care, see our <Link href="/weekly-pool-maintenance-bali" className="text-primary hover-elevate">weekly pool maintenance service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How long do filters last?</h3>
                <p className="text-sm text-foreground/80">
                  With proper care, cartridges last 2-3 years in Bali conditions. Sand filters last 5-7 years before sand replacement. DE filter grids last 5-10 years. Regular maintenance extends all lifespans significantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What if water pressure is high?</h3>
                <p className="text-sm text-foreground/80">
                  High pressure (over 20 PSI or 8-10 PSI above your normal reading) means the filter is clogged. Contact us immediately for cleaning or your pump could overheat and fail. This is why our <Link href="/pool-pump-repair-bali" className="text-primary hover-elevate">pump repair service</Link> often addresses filter issues first.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">When should I replace my filter cartridge?</h3>
                <p className="text-sm text-foreground/80">
                  Replace cartridges when they no longer clean properly even after chemical soaking, show visible tears or damage, or have been in use for 2+ years. Learn more about our <Link href="/filter-cartridge-replacement-bali" className="text-primary hover-elevate">filter cartridge replacement service</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Why is sand appearing in my pool?</h3>
                <p className="text-sm text-foreground/80">
                  Sand in your pool indicates broken laterals (the internal collection fingers) or a cracked standpipe inside the sand filter. This requires immediate professional repair to prevent pump damage and restore proper filtration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can a dirty filter cause algae?</h3>
                <p className="text-sm text-foreground/80">
                  Absolutely. A clogged filter reduces circulation, creates dead zones where algae thrives, and prevents chemicals from distributing evenly. Filter maintenance is your first line of defense against algae. See our <Link href="/pool-cleaning-service-bali" className="text-primary hover-elevate">pool cleaning service</Link> for comprehensive algae prevention.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What's the difference between backwashing and deep cleaning?</h3>
                <p className="text-sm text-foreground/80">
                  Backwashing reverses water flow to flush loose debris – a quick 3-5 minute process done weekly. Deep cleaning involves disassembling the filter, chemical soaking elements, and thorough inspection – done monthly or quarterly for optimal performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Do you service all filter brands?</h3>
                <p className="text-sm text-foreground/80">
                  Yes, we service all major filter brands including Pentair, Hayward, Waterco, Emaux, Astral, and local Indonesian manufacturers. We stock common replacement parts and can source specialty components quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Is filter service included in maintenance packages?</h3>
                <p className="text-sm text-foreground/80">
                  Basic backwashing is included in all our <Link href="/weekly-pool-maintenance-bali" className="text-primary hover-elevate">weekly maintenance packages</Link>. Deep filter cleaning and repairs are available as add-ons or one-time services. Gold and Platinum packages include monthly deep filter cleaning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">How quickly can you respond to filter emergencies?</h3>
                <p className="text-sm text-foreground/80">
                  We offer same-day emergency response for filter failures in most Bali areas. For complete filter system breakdowns affecting water circulation, we prioritize repairs to prevent pump damage and algae growth.
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
            Related Pool Services
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Your pool filter works together with other systems. Explore our related services to keep your entire pool system running perfectly.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            <Link href="/filter-cartridge-replacement-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Filter Cartridge Replacement</h3>
                  <p className="text-sm text-foreground/80">New cartridges for optimal filtration</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-pump-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pool Pump Repair</h3>
                  <p className="text-sm text-foreground/80">Pumps and filters work together</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-cleaning-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Pool Cleaning Service</h3>
                  <p className="text-sm text-foreground/80">Complete cleaning with filter care</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/weekly-pool-maintenance-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Weekly Maintenance</h3>
                  <p className="text-sm text-foreground/80">Regular filter backwashing included</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/chemical-balancing-service-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Chemical Balancing</h3>
                  <p className="text-sm text-foreground/80">Proper chemistry protects filters</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/pool-equipment-installation-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Equipment Installation</h3>
                  <p className="text-sm text-foreground/80">New filter system upgrades</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/emergency-pool-repair-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Emergency Repair</h3>
                  <p className="text-sm text-foreground/80">24-hour filter emergency response</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/green-pool-cleaning-bali">
              <Card className="hover-elevate cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">Green Pool Recovery</h3>
                  <p className="text-sm text-foreground/80">Filter deep clean included</p>
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
            Pool Filter Service Areas in Bali
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            We provide professional pool filter cleaning and repair services across Bali. Find your area below or contact us if your location isn't listed.
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
          <p className="text-sm text-foreground/80 mt-8 text-center">
            Don't see your area? Contact us on WhatsApp: <a href="https://wa.me/6282323011656" className="text-primary font-medium hover-elevate">+62 823-2301-1656</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Keep Your Filter Running Strong
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Schedule professional filter cleaning and maintenance today. Crystal-clear water starts with a clean filter.
          </p>
          <Button size="lg" className="min-w-56" asChild>
            <a href="https://wa.me/6282323011656" data-testid="button-cta-whatsapp">
              Contact Us on WhatsApp
            </a>
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            <a href="https://wa.me/6282323011656" className="font-semibold text-primary hover-elevate">+62 823-2301-1656</a>
          </p>
        </div>
      </section>
    </>
  );
}
