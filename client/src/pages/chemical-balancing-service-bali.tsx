import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

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
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chemical Balancing Service in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Proper water chemistry keeps your pool safe, clear, and comfortable for swimming. Our technicians test and balance your pool's chemistry to perfection.
            </p>
            <Button size="lg" className="min-w-48" data-testid="button-whatsapp">
              Get Chemical Testing Quote
            </Button>
            <p className="text-sm text-foreground/85 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What We Test & Balance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/85 mb-6">
                Pool chemistry involves multiple parameters that all need to work together. We test and adjust:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>pH Level (7.2–7.6)</strong>
                    <p className="text-sm text-foreground/85">Affects comfort and chemical effectiveness</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Free Chlorine (1–3 ppm)</strong>
                    <p className="text-sm text-foreground/85">Kills bacteria and algae</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Total Alkalinity (80–120 ppm)</strong>
                    <p className="text-sm text-foreground/85">Stabilizes pH levels</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Calcium Hardness (200–400 ppm)</strong>
                    <p className="text-sm text-foreground/85">Prevents corrosion and scaling</p>
                  </div>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Chemistry Matters</h3>
                <p className="text-sm text-foreground/85 mb-4">
                  Unbalanced water chemistry causes:
                </p>
                <ul className="space-y-2 text-sm text-foreground/85">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/85">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Chemical Balancing Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">One-Time Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 450,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Complete water testing</li>
                  <li>• Full chemical balancing</li>
                  <li>• Digital report</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary border-2">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-2 py-1 rounded text-xs font-bold inline-block mb-3">
                  Best Value
                </div>
                <h3 className="font-bold mb-2">Monthly Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 1,200,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 4 testing sessions/month</li>
                  <li>• Chemical balancing each visit</li>
                  <li>• Monthly reports</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full">
                  Start Monthly Service
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Quarterly Package</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 3,200,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 12 sessions over 3 months</li>
                  <li>• Full chemical management</li>
                  <li>• Seasonal adjustments</li>
                  <li>• Save 5%</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How often should I test my pool chemistry?</h3>
                <p className="text-sm text-foreground/85">
                  At least once per week. In Bali's climate with heavy rains, we recommend 2 tests per week or include it in your weekly maintenance package.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What if my pool chemicals are already balanced?</h3>
                <p className="text-sm text-foreground/85">
                  We'll verify all readings are correct and make any minor adjustments needed. In tropical climates, small changes happen constantly due to rain and evaporation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Is testing really necessary if my pool looks clear?</h3>
                <p className="text-sm text-foreground/85">
                  Yes! Chemical imbalance can exist with clear-looking water. pH imbalance causes skin irritation, and low chlorine doesn't kill harmful bacteria. Regular testing prevents hidden problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ensure Safe Swimming Chemistry
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get your water chemistry tested and balanced today.
          </p>
          <Button size="lg" className="min-w-48">
            Request Service on WhatsApp
          </Button>
          <p className="text-sm text-foreground/85 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
