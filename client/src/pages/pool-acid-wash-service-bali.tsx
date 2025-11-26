import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PoolAcidWashServiceBali() {
  return (
    <>
      <Helmet>
        <title>Pool Acid Wash Service in Bali | Professional Cleaning</title>
        <meta name="description" content="Professional pool acid wash service in Bali. Remove severe stains and algae. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Acid Wash Service in Bali
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              For severe stains, calcium buildup, and stubborn algae that regular cleaning can't remove, acid washing is the solution. We safely restore your pool surface.
            </p>
            <Button size="lg" className="min-w-48">
              Get Acid Wash Quote
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Acid Washing Removes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Stubborn Stains</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rust stains from metal fixtures</li>
                  <li>• Permanent green algae stains</li>
                  <li>• Black spot algae buildup</li>
                  <li>• Calcium and mineral deposits</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Best Timing for Acid Wash</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Acid washing should be done:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• During major renovations</li>
                  <li>• Every 3-5 years for heavy-use pools</li>
                  <li>• When regular cleaning fails</li>
                  <li>• Before replastering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Acid Wash Pricing
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-medium">Small Pool (up to 20m²)</span>
                  <span className="text-2xl font-bold text-primary">IDR 2,500,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-medium">Medium Pool (20-40m²)</span>
                  <span className="text-2xl font-bold text-primary">IDR 3,500,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Large Pool (40m²+)</span>
                  <span className="text-2xl font-bold text-primary">IDR 4,500,000</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Price includes complete acid wash, rinse, and pool refill. Takes 1-2 days total.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restore Your Pool Surface
          </h2>
          <Button size="lg" className="min-w-56">
            Request Service
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
