import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function SwimmingPoolRepairBali() {
  return (
    <>
      <Helmet>
        <title>Swimming Pool Repair Bali | Cracks, Leaks, Shell & Equipment Repairs — Same Day Service</title>
        <meta name="description" content="Professional swimming pool repair in Bali. Cracked shells, leaks, surface damage, equipment failure — all fixed same day. Serving villas, hotels & homes across Canggu, Seminyak & all Bali. Call: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Swimming Pool Repair in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              From small leaks to major structural issues, we diagnose and repair all swimming pool problems quickly and professionally.
            </p>
            <Button size="lg" className="min-w-48">
              Get Repair Assessment
            </Button>
            <p className="text-sm text-foreground/80 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Repair Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Common Pool Repairs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Leak detection and patching</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Crack repair in concrete</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Pump and motor repair</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Filter housing repairs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Plumbing repairs and sealing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Emergency Repairs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>24/7 emergency response available</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Rapid water loss containment</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Equipment failure troubleshooting</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Temporary solutions while repairs proceed</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Safety restoration for guests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Repair Pricing Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Minor Repairs</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Small leak patches: IDR 300,000</li>
                  <li>• Skimmer repair: IDR 400,000</li>
                  <li>• Valve replacement: IDR 500,000</li>
                  <li>• Tile patching: IDR 400,000</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Major Repairs</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Major leak repair: IDR 1,500,000+</li>
                  <li>• Concrete crack patching: IDR 2,000,000+</li>
                  <li>• Pump replacement: IDR 3,000,000+</li>
                  <li>• Plumbing replacement: IDR 4,000,000+</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need a Pool Repair?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us immediately for emergency repairs or schedule a repair assessment.
          </p>
          <Button size="lg" className="min-w-56">
            Contact for Repair
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
