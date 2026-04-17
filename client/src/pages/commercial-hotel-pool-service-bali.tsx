import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CommercialHotelPoolServiceBali() {
  return (
    <>
      <Helmet>
        <title>Commercial Pool Service Bali | Hotel, Resort & Large Facility Pool Management</title>
        <meta name="description" content="Commercial pool service in Bali for hotels, resorts, condos & large facilities. Multi-pool management, compliance documentation, 24/7 support, EU-certified chemicals. Trusted by 50+ Bali properties. Call: +62 823-4070-9041" />
      </Helmet>

      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Commercial & Hotel Pool Service in Bali
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Professional commercial pool maintenance for hotels, resorts, and businesses. Consistent quality, regulatory compliance, and guest satisfaction guaranteed.
            </p>
            <Button size="lg" className="min-w-48">
              Discuss Commercial Contract
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
            Commercial Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Daily Maintenance</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Daily or multiple daily visits</li>
                  <li>• Complete cleaning each visit</li>
                  <li>• Water chemistry monitoring</li>
                  <li>• Equipment inspection</li>
                  <li>• Rapid guest safety response</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Regulatory Compliance</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Health & safety documentation</li>
                  <li>• Compliance reporting</li>
                  <li>• Chemical tracking records</li>
                  <li>• Safety inspection logs</li>
                  <li>• Staff training & certification</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Multi-Pool Management</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Multiple pool maintenance</li>
                  <li>• Feature pool care</li>
                  <li>• Spa & jacuzzi management</li>
                  <li>• Water fountain maintenance</li>
                  <li>• Coordinated scheduling</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">24/7 Emergency Support</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• After-hours emergency response</li>
                  <li>• Weekend and holiday coverage</li>
                  <li>• Guest safety protocols</li>
                  <li>• Rapid problem resolution</li>
                  <li>• Dedicated service manager</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Choose Us for Your Hotel
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Proven Experience</strong> – Serving Bali's premier hotels for years</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Consistency</strong> – Same high standards every single day</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Reliability</strong> – Available 24/7 for emergencies</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Guest Satisfaction</strong> – Happy guests = positive reviews</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Professional Staff</strong> – Trained, certified technicians</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Transparent Costs</strong> – Fixed monthly rates, no surprises</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Commercial Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Hotel/Resort Pools</h3>
                <p className="text-foreground/85 text-sm mb-4">
                  Pricing depends on pool size, complexity, and visit frequency. We provide custom quotes for your facility.
                </p>
                <p className="text-sm"><strong>Typical Range:</strong> IDR 5M - 20M+ per month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Multi-Pool Facilities</h3>
                <p className="text-foreground/85 text-sm mb-4">
                  Volume discounts available for properties with multiple pools or locations.
                </p>
                <p className="text-sm"><strong>Includes:</strong> All daily maintenance, emergency support, compliance reports</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss a commercial maintenance contract tailored to your property's needs.
          </p>
          <Button size="lg" className="min-w-56">
            Schedule Consultation
          </Button>
          <p className="text-sm text-foreground/80 mt-4">
            WhatsApp: <a href="https://wa.me/6282340709041" className="font-semibold text-primary hover-elevate">+62 823-4070-9041</a>
          </p>
        </div>
      </section>
    </>
  );
}
