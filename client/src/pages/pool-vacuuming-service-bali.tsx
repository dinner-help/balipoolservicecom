import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PoolVacuumingServiceBali() {
  return (
    <>
      <Helmet>
        <title>Pool Vacuuming Service in Bali | Professional Floor Cleaning</title>
        <meta name="description" content="Professional pool floor vacuuming in Bali. Remove debris and maintain clear water. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pool Vacuuming Service in Bali
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Keep your pool floor clean and debris-free. Professional vacuuming maintains water clarity and prevents algae growth on the pool bottom.
            </p>
            <Button size="lg" className="min-w-48">
              Schedule Vacuuming
            </Button>
            <p className="text-sm text-foreground/85 mt-4">
              WhatsApp: <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Vacuum Service Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div>
              <p className="text-foreground/85 mb-6">
                Our vacuuming service includes:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Manual floor vacuuming with professional equipment</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Removal of leaves, dirt, and organic debris</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Cleaning of pool steps and benches</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Maintenance of vacuum hose and equipment</span>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Included in All Packages</h3>
                <p className="text-sm text-foreground">
                  Pool vacuuming is included in our Silver, Gold, and Platinum maintenance packages at each visit. For properties without a maintenance plan, we offer standalone vacuum service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-white">
            Standalone Vacuuming Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Single Vacuum</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 250,000</p>
                <p className="text-sm text-foreground/85">One-time service</p>
              </CardContent>
            </Card>
            <Card className="border-primary border-2">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Weekly Vacuum</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 800,000</p>
                <p className="text-sm text-foreground/85">4 visits monthly</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Bi-Weekly Vacuum</h3>
                <p className="text-2xl font-bold text-primary mb-4">IDR 450,000</p>
                <p className="text-sm text-foreground/85">2 visits monthly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule Your Pool Vacuuming
          </h2>
          <Button size="lg" className="min-w-56">
            Book on WhatsApp
          </Button>
          <p className="text-sm text-foreground/85 mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
