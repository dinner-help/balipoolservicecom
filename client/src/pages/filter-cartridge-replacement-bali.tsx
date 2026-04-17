import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function FilterCartridgeReplacementBali() {
  return (
    <>
      <Helmet>
        <title>Filter Cartridge Replacement Bali | Pool Filter Supply & Replacement Service</title>
        <meta name="description" content="Filter cartridge replacement service in Bali. We supply & install the right cartridge for your pool system. Extend filter life, maintain crystal-clear water. For villas, hotels & homes. Call: +62 823-4070-9041" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Filter Cartridge Replacement in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              When your filter cartridge wears out, water quality declines and pump stress increases. We replace worn cartridges to restore filter efficiency.
            </p>
            <Button size="lg" className="min-w-48">
              Order Replacement
            </Button>
            <p className="text-sm text-foreground/80 mt-4">
              WhatsApp: <a href="https://wa.me/6282340709041" className="font-semibold text-primary hover-elevate">+62 823-4070-9041</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            When to Replace Your Cartridge
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Signs Your Cartridge Needs Replacement</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Water stays cloudy even after cleaning</li>
                  <li>• Filter pressure stays high (over 20 PSI)</li>
                  <li>• Pool has been running 2-3 years</li>
                  <li>• Filter no longer responds to backwashing</li>
                  <li>• Water quality declining visibly</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Filter Cartridge Lifespan</h3>
                <p className="text-sm text-foreground mb-4">
                  With regular care and backwashing:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Standard cartridges: 2-3 years</li>
                  <li>• Heavy-use pools: 1-2 years</li>
                  <li>• Well-maintained pools: up to 4 years</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Replacement Services & Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Cartridge Diagnosis</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 200,000</p>
                <p className="text-sm text-foreground mb-4">
                  We inspect your cartridge to determine if replacement is needed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Replacement Service</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 800,000</p>
                <p className="text-sm text-foreground mb-4">
                  Professional replacement plus housing cleaning and testing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Replace Your Cartridge?
          </h2>
          <Button size="lg" className="min-w-56">
            Schedule on WhatsApp
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            <a href="https://wa.me/6282340709041" className="font-semibold text-primary hover-elevate">+62 823-4070-9041</a>
          </p>
        </div>
      </section>
    </>
  );
}
