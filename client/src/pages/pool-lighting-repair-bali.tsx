import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PoolLightingRepairBali() {
  return (
    <>
      <Helmet>
        <title>Pool Lighting Repair in Bali | Professional Service</title>
        <meta name="description" content="Pool lighting repair and installation in Bali. Fix broken lights, upgrade to LED. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pool Lighting Repair in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Broken pool lights ruin the evening ambiance and reduce safety. We repair existing lights and upgrade to energy-efficient LED options.
            </p>
            <Button size="lg" className="min-w-48">
              Get Lighting Service
            </Button>
            <p className="text-sm text-foreground/85 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Lighting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Light Bulb Replacement</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 300,000</p>
                <p className="text-sm text-foreground/85">
                  Replace burned-out pool light bulbs with standard or LED options
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Light Fixture Repair</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 600,000</p>
                <p className="text-sm text-foreground/85">
                  Repair broken niches, gaskets, or electrical connections
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">LED Upgrade</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 900,000</p>
                <p className="text-sm text-foreground/85">
                  Convert to energy-efficient colored LED lighting
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">New Light Installation</h3>
                <p className="text-2xl font-bold text-primary mb-2">IDR 1,500,000</p>
                <p className="text-sm text-foreground/85">
                  Add new pool lighting to dark pools
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Illuminate Your Pool
          </h2>
          <Button size="lg" className="min-w-56">
            Schedule Service
          </Button>
          <p className="text-sm text-foreground/85 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
