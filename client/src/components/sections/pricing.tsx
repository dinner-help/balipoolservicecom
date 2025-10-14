import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Pricing() {
  const packages = [
    {
      name: "Silver Package",
      price: "IDR 2,900,000",
      priceUSD: "$177",
      period: "/month",
      description: "Perfect for private villas & residential pools",
      popular: false,
      features: [
        "2 visits per week (8 visits/month)",
        "Complete pool cleaning (skimming, vacuuming, brushing)",
        "Premium 90% pure chemical treatment",
        "Water testing & pH balancing",
        "Filter backwashing",
        "Equipment inspection",
        "Debris removal",
        "WhatsApp support during business hours",
      ],
    },
    {
      name: "Gold Package",
      price: "IDR 3,900,000",
      priceUSD: "$238",
      period: "/month",
      description: "Perfect for luxury villas & rental properties",
      popular: true,
      features: [
        "3 visits per week (12 visits/month)",
        "Everything in Silver package",
        "Monthly deep filter cleaning",
        "Chemical delivery to your property",
        "Priority scheduling",
        "Monthly water quality report (digital)",
        "Equipment performance monitoring",
        "Priority emergency response (4-hour)",
        "24/7 WhatsApp support",
      ],
    },
    {
      name: "Platinum Package",
      price: "IDR 5,500,000",
      priceUSD: "$336",
      period: "/month",
      description: "Perfect for high-end estates & boutique hotels",
      popular: false,
      features: [
        "Daily quick checks + 3 full services/week",
        "Everything in Gold package",
        "Premium imported chemicals only",
        "Quarterly professional equipment servicing",
        "Pool lighting & water feature maintenance",
        "Automatic chlorination system monitoring",
        "Weekly detailed water chemistry report",
        "24/7 emergency response (2-hour guarantee)",
        "Dedicated service technician",
        "Complimentary seasonal pool upgrades",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent, Predictable Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            All-inclusive monthly packages with no hidden costs. All chemicals, supplies, and labor included in your price.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative hover-elevate transition-all duration-300 ${
                pkg.popular ? "border-primary shadow-xl" : ""
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4" fill="currentColor" />
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">({pkg.priceUSD})</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full gap-2"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => window.open("https://wa.me/62123445566", "_blank")}
                  data-testid={`button-package-${index}`}
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Options & Guarantees */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span><strong>Pay Monthly</strong> - Standard pricing above</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span><strong>Pay Quarterly</strong> - Save 5% (3 months prepaid)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span><strong>Pay Annually</strong> - Save 10% (12 months prepaid)</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-semibold mb-3">We Accept:</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span><strong>QR Payment</strong> - QRIS, GoPay, OVO, Dana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span><strong>Cash Payment</strong> - Accepted on-site</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span><strong>Online Payment</strong> - Bank Transfer (BCA, Mandiri, BNI), Credit/Debit Card</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-semibold mb-4">What's Included</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>All chemicals and supplies</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>All labor and technician visits</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>Detailed service reports</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>No hidden costs or surprise charges</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-primary mt-6">
              100% Satisfaction Guarantee - Crystal-clear water or your money back
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
