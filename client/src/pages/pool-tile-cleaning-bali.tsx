import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PoolTileCleaningBali() {
  return (
    <>
      <Helmet>
        <title>Pool Tile Cleaning in Bali | Professional Service</title>
        <meta name="description" content="Professional pool tile cleaning in Bali. Remove algae stains and calcium buildup. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Tile Cleaning in Bali
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Calcium buildup, algae stains, and waterline discoloration are common in Bali's climate. Professional tile cleaning restores your pool's beauty and prevents tile damage.
            </p>
            <Button size="lg" className="min-w-48">
              Schedule Tile Cleaning
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
            Why Professional Tile Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Calcium & Mineral Buildup</h3>
                <p className="text-sm text-muted-foreground">
                  Bali's water contains minerals that crystallize on tiles. DIY cleaning often scratches or damages the surface. We use safe, effective methods that protect your tiles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Algae Stains</h3>
                <p className="text-sm text-muted-foreground">
                  Green and black algae permanently stain tile if not removed quickly and correctly. Professional cleaning eliminates stains and prevents regrowth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Waterline Discoloration</h3>
                <p className="text-sm text-muted-foreground">
                  The waterline accumulates dirt, sunscreen, and debris. Regular cleaning keeps this line bright and prevents permanent staining.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Enhanced Property Value</h3>
                <p className="text-sm text-muted-foreground">
                  Clean tiles make pools look pristine. Rental properties get better reviews and higher booking rates with spotless pool appearance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Tile Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Waterline Cleaning</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 300,000</p>
                <p className="text-sm text-muted-foreground">
                  Deep clean waterline to remove dirt and stains. One-time service or monthly add-on.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Full Tile Deep Clean</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 750,000</p>
                <p className="text-sm text-muted-foreground">
                  Complete tile and grout cleaning using safe, acid-free solutions. Restores original appearance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Keep Your Tiles Pristine
          </h2>
          <Button size="lg" className="min-w-56">
            Book Tile Cleaning
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
