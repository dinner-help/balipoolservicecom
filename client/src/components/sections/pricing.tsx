import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import pricingBg from "@assets/stock_images/luxury_villa_swimmin_b0f103d6.jpg";

export function Pricing() {
  const packages = [
    {
      name: "Silver Package",
      price: "IDR 800,000",
      period: "/month",
      description: "For private villas & homes — small pools",
      popular: false,
      features: [
        "1 visit per week (4/month)",
        "Complete cleaning & vacuuming",
        "Water testing & pH balancing",
        "Premium chemicals included",
        "Filter backwashing",
        "Equipment inspection",
        "Debris removal",
        "WhatsApp support",
      ],
    },
    {
      name: "Gold Package",
      price: "IDR 1,500,000",
      period: "/month",
      description: "For rental villas & luxury homes — medium pools",
      popular: true,
      features: [
        "2 visits per week (8/month)",
        "Everything in Silver",
        "Monthly deep filter cleaning",
        "Priority emergency response",
        "Chemical delivery included",
        "Monthly water quality report",
        "Equipment performance monitoring",
        "24/7 WhatsApp support",
      ],
    },
    {
      name: "Platinum Package",
      price: "IDR 2,800,000",
      period: "/month",
      description: "For estates & boutique hotels — large pools",
      popular: false,
      features: [
        "2 visits per week",
        "Everything in Gold",
        "Dedicated technician assigned",
        "2-hour emergency response",
        "Quarterly equipment servicing",
        "Weekly chemistry reports",
        "Water feature maintenance",
        "Pool lighting maintenance",
      ],
    },
  ];

  const chemicalPackages = [
    {
      name: "Small Pool Chemical Top-Up",
      size: "Up to 30m³",
      price: "IDR 750,000",
      period: "/month",
      features: [
        "Monthly chemical delivery",
        "90% pure premium chemicals",
        "International brands only",
        "Chlorine, pH balance, algaecide",
        "Reduces chemical use by 50%",
      ],
    },
    {
      name: "Medium Pool Chemical Top-Up",
      size: "30-50m³",
      price: "IDR 1,125,000",
      period: "/month",
      features: [
        "Monthly chemical delivery",
        "90% pure premium chemicals",
        "International brands only",
        "Chlorine, pH balance, algaecide",
        "Reduces chemical use by 50%",
      ],
    },
    {
      name: "Large Pool Chemical Top-Up",
      size: "50m³+",
      price: "IDR 1,500,000",
      period: "/month",
      features: [
        "Monthly chemical delivery",
        "90% pure premium chemicals",
        "International brands only",
        "Chlorine, pH balance, algaecide",
        "Reduces chemical use by 50%",
      ],
    },
  ];

  const addOnServices = [
    { name: "Extra weekly visit", price: "IDR 500,000/month" },
    { name: "Pool chemical delivery", price: "IDR 188,000 per delivery" },
    { name: "Water feature maintenance", price: "IDR 625,000/month" },
    { name: "Pool automation system monitoring", price: "IDR 750,000/month" },
    { name: "Saltwater system maintenance", price: "IDR 500,000/month" },
    { name: "Spa/Jacuzzi maintenance", price: "IDR 1,000,000/month" },
    { name: "Monthly photo/video report", price: "IDR 375,000/month" },
  ];

  const oneTimeServices = [
    { name: "Deep cleaning", price: "IDR 1,125,000" },
    { name: "Green pool recovery (light)", price: "IDR 1,875,000" },
    { name: "Green pool recovery (heavy)", price: "IDR 3,750,000" },
    { name: "Drain & acid wash", price: "IDR 5,625,000" },
    { name: "Emergency call-out", price: "IDR 625,000" },
    { name: "Pre-guest service", price: "IDR 440,000" },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pricingBg})` }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/88" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
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
              className={`relative hover-elevate transition-all duration-300 hover:scale-105 animate-in fade-in zoom-in-95 ${
                pkg.popular ? "border-primary shadow-xl" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`pricing-card-${index}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-bounce">
                  <Star className="h-4 w-4" fill="currentColor" />
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="mb-3">
                  <div className="text-2xl font-bold">From {pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.period}</div>
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
                  asChild
                  data-testid={`button-package-${index}`}
                >
                  <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5" />
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* One-Time Services */}
        <div className="mt-20 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">One-Time Services</h3>
            <p className="text-lg text-muted-foreground">
              Professional cleaning and recovery services for pools that need extra attention
            </p>
          </div>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {oneTimeServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent/5 hover-elevate transition-all">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Chemical Packages */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Premium Chemical Packages</h3>
            <p className="text-lg text-muted-foreground">
              90% pure premium chemicals - uses 50% less product, eco-friendly, NSF-certified
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {chemicalPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.size}</CardDescription>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-On Services */}
        <div className="mt-16 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h3>
            <p className="text-lg text-muted-foreground">
              Customize your package with premium add-ons
            </p>
          </div>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOnServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent/5 hover-elevate transition-all">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </Card>
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
