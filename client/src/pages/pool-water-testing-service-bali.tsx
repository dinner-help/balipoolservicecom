import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PoolWaterTestingServiceBali() {
  return (
    <>
      <Helmet>
        <title>Pool Water Testing Service Bali | Professional Chemical Analysis & Safety Reports</title>
        <meta name="description" content="Professional pool water testing in Bali. Full chemical analysis — pH, chlorine, alkalinity, calcium hardness, TDS. Detailed written report. Available for villas, hotels & homes. Call: +62 822-3756-5997" />
        <meta property="og:title" content="Pool Water Testing Service in Bali" />
        <meta property="og:description" content="Expert water chemistry testing for safe, clear pools. pH, chlorine, alkalinity, and more analyzed by professionals." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pool Water Testing Service in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Regular water testing ensures your pool is safe, balanced, and clear. Our technicians test all key parameters and provide detailed reports with recommendations.
            </p>
            <Button size="lg" className="min-w-48">
              Schedule Water Testing
            </Button>
            <p className="text-sm text-foreground/80 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What We Test
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free Chlorine (1–3 ppm)", desc: "Active sanitizer killing bacteria and algae" },
              { name: "Total Chlorine", desc: "Includes combined chlorine (chloramines)" },
              { name: "pH Level (7.2–7.6)", desc: "Affects comfort, chemical effectiveness, equipment" },
              { name: "Total Alkalinity (80–120 ppm)", desc: "Stabilizes pH and prevents fluctuations" },
              { name: "Calcium Hardness (200–400 ppm)", desc: "Prevents corrosion and scaling" },
              { name: "Cyanuric Acid (30–100 ppm)", desc: "Protects chlorine from UV breakdown" }
            ].map((test, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{test.name}</h3>
                  <p className="text-sm text-foreground/80">{test.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Testing */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Professional Testing Matters
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-foreground/85 mb-6">
                  Many pool owners don't realize their water has chemistry problems until it's too late. Professional testing catches issues early:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4 text-red-600">Without Regular Testing</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Eye and skin irritation for swimmers</li>
                      <li>• Algae grows unchecked</li>
                      <li>• Equipment corrodes silently</li>
                      <li>• Bacteria can grow without detection</li>
                      <li>• Water turns green or cloudy</li>
                      <li>• Expensive emergency repairs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-green-600">With Professional Testing</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• Safe, comfortable swimming</li>
                      <li>• Algae prevented proactively</li>
                      <li>• Equipment protected</li>
                      <li>• Bacteria eliminated immediately</li>
                      <li>• Water stays crystal clear</li>
                      <li>• Avoid costly repairs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Testing Service Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">One-Time Test</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 400,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Complete water analysis</li>
                  <li>• Digital report with recommendations</li>
                  <li>• One-time service</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary border-2">
              <CardContent className="p-6">
                <div className="bg-primary text-white px-2 py-1 rounded text-xs font-bold inline-block mb-3">
                  Popular
                </div>
                <h3 className="font-bold text-lg mb-2">Weekly Testing</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 1,600,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 4 tests per month</li>
                  <li>• Complete analysis each time</li>
                  <li>• Digital reports</li>
                  <li>• Best value</li>
                </ul>
                <Button className="w-full">
                  Subscribe Weekly
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Bi-Weekly Testing</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 900,000</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 2 tests per month</li>
                  <li>• Full water analysis</li>
                  <li>• Monthly reports</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Testing Process
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { num: "1", title: "Sample Collection", desc: "We collect water samples from your pool using sterile methods" },
              { num: "2", title: "Lab Testing", desc: "Each sample is analyzed with professional-grade test kits" },
              { num: "3", title: "Analysis", desc: "We analyze all results against ideal ranges for your pool type" },
              { num: "4", title: "Recommendations", desc: "We identify any imbalances and recommend corrective actions" },
              { num: "5", title: "Report Delivery", desc: "You receive a detailed digital report via WhatsApp" }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Frequency */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How Often Should You Test?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Residential Pools</h3>
                <p className="text-sm text-foreground">
                  Weekly testing recommended. During rainy season, consider bi-weekly. Low-usage pools can do monthly if well-maintained.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Rental Properties</h3>
                <p className="text-sm text-foreground">
                  2 tests per week minimum. High turnover and guest usage means chemistry changes rapidly. Weekly is ideal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Commercial Pools</h3>
                <p className="text-sm text-foreground">
                  Daily or multiple tests daily required. Hotels and resorts have safety regulations requiring frequent monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Can I test my pool myself?</h3>
                <p className="text-sm text-foreground">
                  Yes, but home test kits are less accurate. Professional testing uses advanced equipment and catches subtle imbalances that home tests miss.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How long does testing take?</h3>
                <p className="text-sm text-foreground">
                  Usually 15-20 minutes per test including sample collection, analysis, and reporting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What if results are bad?</h3>
                <p className="text-sm text-foreground">
                  We provide detailed recommendations. For serious imbalances, we can send a technician to adjust chemicals immediately via WhatsApp consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Professional Water Testing Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Know your pool's chemistry with expert analysis.
          </p>
          <Button size="lg" className="min-w-56">
            Schedule Testing on WhatsApp
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
