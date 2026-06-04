import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

interface ServicePricingProps {
  serviceName: string;
  serviceSlug?: string;
  location?: string;
  showPackages?: boolean;
  showOneTime?: boolean;
  showQuoteExample?: boolean;
  variant?: "full" | "compact" | "inline";
  className?: string;
  oneTimePrices?: {
    name: string;
    price: string;
    description: string;
    features?: string[];
  }[];
}

const PHONE_NUMBER = "6282323011656";

const defaultPackages = [
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
    ],
  },
];

const defaultOneTimePrices: { name: string; price: string; description: string; features?: string[] }[] = [
  { name: "Deep Cleaning", price: "IDR 1,125,000", description: "Full deep cleaning for neglected pools" },
  { name: "Green Pool Recovery (Light)", price: "IDR 1,875,000", description: "Algae removal for cloudy pools" },
  { name: "Green Pool Recovery (Heavy)", price: "IDR 3,750,000", description: "Complete restoration for severely green pools" },
  { name: "Emergency Call-Out", price: "IDR 625,000", description: "Same-day urgent service response" },
  { name: "Pool Assessment", price: "FREE", description: "On-site inspection and customized quote" },
];

export function ServicePricing({
  serviceName,
  serviceSlug,
  location = "Bali",
  showPackages = true,
  showOneTime = true,
  showQuoteExample = true,
  variant = "full",
  className = "",
  oneTimePrices,
}: ServicePricingProps) {
  const prices = oneTimePrices || defaultOneTimePrices;
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in ${serviceName} in ${location}. Can you send me a quote?`);
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  if (variant === "compact") {
    return (
      <div className={`bg-accent/5 rounded-xl p-6 ${className}`}>
        <h3 className="text-xl font-bold mb-4">{serviceName} Pricing</h3>
        <div className="space-y-3 mb-6">
          {prices.slice(0, 3).map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <span className="font-medium">{item.name}</span>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <span className="font-bold text-primary whitespace-nowrap ml-4">{item.price}</span>
            </div>
          ))}
        </div>
        <Button
          className="w-full gap-2 bg-green-600 hover:bg-green-700"
          asChild
          data-testid="button-pricing-whatsapp"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-5 w-5" />
            Get Custom Quote
          </a>
        </Button>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`border rounded-lg p-4 ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-semibold">{serviceName}:</span>
            <span className="ml-2 text-primary font-bold">Starting from IDR 800,000/month</span>
          </div>
          <Button
            size="sm"
            className="gap-2 bg-green-600 hover:bg-green-700"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-4 w-4" />
              Get Quote
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-12 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceName} Pricing in {location}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparent, all-inclusive pricing with no hidden fees. Choose a package or request a custom quote.
        </p>
      </div>

      {showPackages && (
        <div className="grid md:grid-cols-3 gap-6">
          {defaultPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.popular ? "border-primary border-2 shadow-lg" : ""}`}
              data-testid={`card-package-${index}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4" fill="currentColor" />
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">From {pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full gap-2 ${pkg.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                  data-testid={`button-package-${index}`}
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5" />
                    {pkg.popular ? "Get Started" : "Learn More"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {showOneTime && (
        <div className="bg-accent/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">One-Time Services & Add-Ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border">
                <h4 className="font-bold mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-primary mb-2">{item.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                {item.features && (
                  <ul className="space-y-1 mb-4">
                    {item.features.map((f: string, i: number) => (
                      <li key={i} className="text-xs flex items-center gap-1">
                        <Check className="h-3 w-3 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showQuoteExample && (
        <Card className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Example Quote: {serviceName} for a Typical Villa</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Property:</strong> 3-bedroom villa with 8m x 4m pool (32m³)<br />
                  <strong>Location:</strong> {location}<br />
                  <strong>Package:</strong> Gold (2 visits/week)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gold Package Monthly</span>
                    <span className="font-bold">IDR 1,500,000</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>First Month Welcome Discount (10%)</span>
                    <span className="font-bold">-IDR 150,000</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>First Month Total</span>
                    <span className="text-primary">IDR 1,350,000</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm text-muted-foreground mb-4">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Get your custom quote within 30 minutes
                </p>
                <Button
                  size="lg"
                  className="gap-2 bg-green-600 hover:bg-green-700"
                  asChild
                  data-testid="button-example-quote"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5" />
                    Get My Custom Quote
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  No obligation • Cancel anytime
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Need a custom solution? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Chat with us on WhatsApp</a>
        </p>
        {serviceSlug && (
          <p className="text-sm">
            <Link href="/#pricing" className="text-primary hover:underline">View all pricing packages</Link> |{" "}
            <Link href="/pool-cleaning-service-bali" className="text-primary hover:underline">Pool Cleaning</Link> |{" "}
            <Link href="/weekly-pool-maintenance-bali" className="text-primary hover:underline">Weekly Maintenance</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export function PriceRange({ 
  service, 
  min, 
  max, 
  unit = "/month",
  className = "" 
}: { 
  service: string; 
  min: string; 
  max: string; 
  unit?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="text-muted-foreground">{service}:</span>
      <span className="font-bold text-primary">IDR {min} - {max}</span>
      <span className="text-muted-foreground text-sm">{unit}</span>
    </div>
  );
}

export default ServicePricing;
