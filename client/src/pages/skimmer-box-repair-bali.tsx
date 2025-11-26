import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SkimmerBoxRepairBali() {
  return (
    <>
      <Helmet>
        <title>Skimmer Box Repair in Bali | Professional Pool Repairs</title>
        <meta name="description" content="Skimmer box repair and maintenance in Bali. Fix clogged or broken skimmers. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skimmer Box Repair in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              A functioning skimmer is essential for surface debris removal. We repair broken skimmers and clean clogged baskets to maintain proper circulation.
            </p>
            <Button size="lg" className="min-w-48">
              Get Repair Quote
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
            Common Skimmer Issues & Repairs
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Clogged Skimmer Basket</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 200,000</p>
                <p className="text-sm text-muted-foreground">
                  Clean or replace debris basket to restore suction
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Broken Weir Door</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 400,000</p>
                <p className="text-sm text-muted-foreground">
                  Replace damaged floating weir that controls debris flow
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Skimmer Plate Leak</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 600,000</p>
                <p className="text-sm text-muted-foreground">
                  Repair cracked faceplate or seal leaks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Full Skimmer Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 1,200,000</p>
                <p className="text-sm text-muted-foreground">
                  Replace entire non-functional skimmer unit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restore Your Skimmer Function
          </h2>
          <Button size="lg" className="min-w-56">
            Schedule Repair
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
