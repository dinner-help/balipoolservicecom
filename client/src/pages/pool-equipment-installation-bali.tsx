import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PoolEquipmentInstallationBali() {
  return (
    <>
      <Helmet>
        <title>Pool Equipment Installation in Bali | Professional Setup</title>
        <meta name="description" content="Pool equipment installation service in Bali. Pumps, filters, heaters, automation. WhatsApp: +62 822-3756-5997" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pool Equipment Installation in Bali
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Upgrading or installing new pool equipment? We handle professional installation of pumps, filters, heaters, and automation systems.
            </p>
            <Button size="lg" className="min-w-48">
              Get Installation Quote
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
            Equipment We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Circulation Systems</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pool pumps (variable & single-speed)</li>
                  <li>• Cartridge and sand filters</li>
                  <li>• Plumbing and connections</li>
                  <li>• Backwash valves</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Water Treatment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chlorinators (automated)</li>
                  <li>• Salt chlorination systems</li>
                  <li>• pH and ORP monitoring</li>
                  <li>• Chemical feeders</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Features & Amenities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pool heaters</li>
                  <li>• Lighting systems</li>
                  <li>• Water features & fountains</li>
                  <li>• Spillovers & decorative elements</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Smart Automation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated control systems</li>
                  <li>• Remote monitoring & alerts</li>
                  <li>• Energy-efficient scheduling</li>
                  <li>• Mobile app integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Installation Process
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">1. Assessment & Quote</h3>
                <p className="text-sm text-muted-foreground">
                  We evaluate your pool and provide a detailed installation plan with pricing
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">2. Equipment Procurement</h3>
                <p className="text-sm text-muted-foreground">
                  We source quality equipment from trusted suppliers or use your preferred brands
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">3. Professional Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Skilled technicians install and test all equipment to ensure proper functioning
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">4. Training & Support</h3>
                <p className="text-sm text-muted-foreground">
                  We train you on system operation and provide ongoing maintenance support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Pool?
          </h2>
          <Button size="lg" className="min-w-56">
            Discuss Your Project
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <a href="https://wa.me/6282237565997" className="font-semibold text-primary hover-elevate">+62 822-3756-5997</a>
          </p>
        </div>
      </section>
    </>
  );
}
