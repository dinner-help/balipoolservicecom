import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, Sparkles, TrendingUp, Shield, Leaf, Beaker, 
  CheckCircle2, Award, Droplets, Clock, Gift, Star
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ChemicalSubscription() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();

  const chemicalBenefits = [
    {
      icon: Sparkles,
      title: "90% Pure Active Ingredients",
      description: "Commercial-grade chemicals with minimal fillers — you use 50% less product for the same crystal-clear results",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Formula",
      description: "Biodegradable compounds safe for Bali's environment, skin-friendly pH balanced, no harsh chemical smell",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "NSF/ANSI-60 Certified",
      description: "International drinking water safety standards — safe enough to drink the water (though we don't recommend it!)",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Long-Term",
      description: "Premium quality means less product needed. Save 30-40% annually compared to hardware store pool chemicals",
      color: "from-orange-500 to-red-500"
    }
  ];

  const subscriptionFeatures = [
    {
      icon: Package,
      title: "Monthly Auto-Delivery",
      description: "Perfect amount calculated for your pool size delivered before you run out. Cancel or pause anytime.",
      badge: "No commitment"
    },
    {
      icon: Gift,
      title: "FREE Trial Sample",
      description: "Get a complimentary 1-week chemical supply to test the quality difference yourself. No purchase required.",
      badge: "Limited offer"
    },
    {
      icon: Award,
      title: "Expert Consultation Included",
      description: "Free chemical presentation at your property: why it's the best, how it works, optimal dosing for your specific pool.",
      badge: "Personalized"
    },
    {
      icon: Clock,
      title: "Never Run Out Again",
      description: "Smart delivery scheduling based on your pool usage. Get reminders 5 days before delivery with option to adjust.",
      badge: "Automatic"
    }
  ];

  const chemicalProducts = [
    {
      name: "Premium Chlorine Tablets",
      specs: "90% available chlorine, slow-dissolving, UV stabilized",
      usage: "1 tablet per 10,000L weekly",
      price: "IDR 1,063,000/month"
    },
    {
      name: "Liquid Shock Treatment",
      specs: "12% sodium hypochlorite, hospital-grade purity",
      usage: "500ml per 20,000L bi-weekly",
      price: "IDR 750,000/month"
    },
    {
      name: "pH Balance System",
      specs: "pH Plus (sodium carbonate) + pH Minus (sodium bisulfate)",
      usage: "50g adjusts 10,000L by 0.2 pH",
      price: "IDR 563,000/month"
    },
    {
      name: "Algae Prevention Formula",
      specs: "Quaternary ammonium compound, non-foaming, works in all conditions",
      usage: "100ml per 10,000L monthly",
      price: "IDR 688,000/month"
    },
    {
      name: "Clarifier & Flocculant",
      specs: "Polymer-based, works with all filter types, clears cloudiness in 24 hours",
      usage: "As needed basis",
      price: "IDR 500,000/month"
    },
    {
      name: "Complete Care Package",
      specs: "All chemicals above + test strips + measuring tools",
      usage: "Everything you need",
      price: "IDR 3,500,000/month (Save 15%)"
    }
  ];

  const whyBest = [
    "Higher purity = less chemical waste entering Bali's water system",
    "Pre-measured packaging prevents overdosing and equipment damage",
    "Compatible with saltwater, mineral, and traditional chlorine systems",
    "Manufactured in ISO 9001 certified facilities with batch testing",
    "No harmful byproducts (trihalomethanes, chloramines kept minimal)",
    "Longer shelf life (3 years vs. 1 year for hardware store brands)"
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div 
          ref={ref1}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Beaker className="h-4 w-4" />
            <span className="text-sm font-semibold">Premium Pool Chemicals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Highest Quality Pool Chemicals — Delivered Monthly
          </h2>
          <p className="text-xl text-muted-foreground">
            90% pure active ingredients. Eco-friendly. NSF-certified. Free trial sample. Automatic monthly delivery. The same commercial-grade chemicals used by 5-star resorts.
          </p>
        </div>

        {/* Chemical Benefits Grid */}
        <div 
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {chemicalBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover-elevate border-2 overflow-hidden transition-all duration-500"
              data-testid={`chemical-benefit-${index}`}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className={`relative h-14 w-14 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {subscriptionFeatures.map((feature, index) => (
            <Card key={index} className="hover-elevate border-2" data-testid={`subscription-feature-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Presentation CTA */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-semibold">Free Chemical Consultation</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              See Why Our Chemicals Are the Best in Bali
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Book a <span className="font-bold text-foreground">FREE on-site chemical presentation</span>. We'll show you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">How 90% purity saves you money (use 50% less)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Why eco-friendly chemicals protect your equipment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Live water testing demo with professional equipment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Free 1-week chemical trial (no purchase required)</span>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
              className="gap-2 text-lg px-8"
              data-testid="button-free-chemical-demo"
            >
              <FaWhatsapp className="h-5 w-5" />
              Book Free Chemical Presentation
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              30-minute presentation • Free water testing • No obligation • Trial sample included
            </p>
          </div>
        </div>

        {/* Products & Pricing */}
        <div 
          ref={ref3}
          className={`transition-all duration-1000 delay-300 ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Monthly Chemical Subscription Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {chemicalProducts.map((product, index) => (
              <Card 
                key={index} 
                className={`border-2 hover-elevate ${index === 5 ? 'lg:col-span-3 md:col-span-2' : ''}`}
                data-testid={`chemical-product-${index}`}
              >
                <CardContent className="p-6">
                  {index === 5 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className={`${index === 5 ? 'max-w-4xl mx-auto' : ''}`}>
                    <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.specs}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Droplets className="h-4 w-4" />
                      <span>{product.usage}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{product.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Our Chemicals Are Best */}
          <div className="bg-accent/10 rounded-2xl p-8 border-2">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Our Pool Chemicals Are Simply Better</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {whyBest.map((reason, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-bold text-foreground">Join 200+ Bali property owners</span> who switched to our premium chemical subscription and never looked back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
              className="gap-2"
              data-testid="button-start-subscription"
            >
              <Package className="h-5 w-5" />
              Start Chemical Subscription
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
              data-testid="button-request-trial"
            >
              <Gift className="h-5 w-5" />
              Request Free Trial Sample
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
