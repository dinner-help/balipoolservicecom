import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Users, Heart, Shield, DollarSign, Clock } from "lucide-react";

export function SmallHomes() {
  const homeOwnerBenefits = [
    {
      icon: DollarSign,
      title: "Affordable for Private Homes",
      description: "Starting from just IDR 750K/month - professional pool care that fits your family budget. No job is too small for us.",
    },
    {
      icon: Home,
      title: "Perfect for Small Pools",
      description: "Whether you have a compact 6m pool or a modest backyard oasis, we provide the same expert care as our luxury villa clients.",
    },
    {
      icon: Heart,
      title: "Family-Safe Service",
      description: "EU-certified chemicals safe for kids and pregnant women. Your family's health is our priority.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work around your family schedule. Morning, afternoon, or weekend visits - we adapt to your lifestyle.",
    },
    {
      icon: Users,
      title: "Friendly, Respectful Team",
      description: "Our technicians treat your home with respect. English-speaking staff who understand expat and local families.",
    },
    {
      icon: Shield,
      title: "No Long-Term Contracts",
      description: "Monthly service with no lock-in periods. Try us risk-free - cancel anytime if you're not completely satisfied.",
    },
  ];

  return (
    <section id="small-homes" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">FOR PRIVATE HOMEOWNERS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Pool Care for Your Private Home
          </h2>
          <p className="text-xl text-muted-foreground">
            You don't need a luxury villa or hotel to enjoy professional pool service. We proudly serve private homeowners, expat families, and small residences across Bali with the same expertise and care.
          </p>
        </div>

        {/* Real Homeowner Story */}
        <Card className="mb-16 border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Real Homeowner Story
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  "I thought professional pool service was only for big villas..."
                </h3>
                <p className="text-muted-foreground mb-4">
                  "We live in a modest 3-bedroom home in Sanur with a small 20m² pool. For years, I struggled to maintain it myself - buying chemicals from random shops, spending my weekends cleaning, and constantly dealing with algae problems."
                </p>
                <p className="text-muted-foreground mb-4">
                  "I thought professional pool companies only worked with hotels and luxury villas. Then I found Pool Service Bali. They treated our small pool with the same care and professionalism as any high-end property."
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>"Now my pool is crystal clear every day, my kids swim safely with EU-certified chemicals, and I get my weekends back. Best decision we made for our home."</strong>
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">Private Homeowner, Sanur</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">What Sarah Gets Every Month:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">8 professional cleaning visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Family-safe EU chemicals included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">WhatsApp support whenever needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">Equipment checks and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm">No weekends wasted on pool cleaning</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-2xl font-bold text-primary">IDR 750K/month</div>
                  <div className="text-sm text-muted-foreground">Less than IDR 100K per day</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {homeOwnerBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Concerns */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-10 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Common Questions from Private Homeowners</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-primary">❓ "Is my pool too small for professional service?"</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely not! We service pools from 15m² to 200m². Small pools deserve professional care too - they're often harder to maintain properly because the water chemistry is more sensitive.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-primary">❓ "Can I afford professional pool service?"</h4>
              <p className="text-sm text-muted-foreground">
                Starting at IDR 750K/month, it's more affordable than you think - especially when you factor in the cost of DIY chemicals, equipment repairs from improper maintenance, and your valuable weekend time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-primary">❓ "Will you work around my family schedule?"</h4>
              <p className="text-sm text-muted-foreground">
                Yes! We understand families have routines. We'll schedule service when it's convenient for you - whether that's while kids are at school, on weekends, or any time that works best.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-primary">❓ "Are the chemicals safe for my kids?"</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! We use only EU-certified chemicals that are tested and approved for use around children, pregnant women, and pets. Safety is non-negotiable for family pools.
              </p>
            </div>
          </div>
        </div>

        {/* We Serve Everyone */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">We Serve Every Type of Pool Owner</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            From small private homes to luxury estates, from expat families to local residents, from rental villas to international hotel chains - if you have a pool in Bali, we're here to serve you with the same professionalism and care.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Private Homes
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Expat Families
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Rental Villas
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Luxury Estates
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Boutique Hotels
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Resort Chains
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Retirement Communities
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Apartment Complexes
            </div>
          </div>
          <Button size="lg" asChild>
            <a href="#contact" data-testid="button-homeowner-contact">
              Get Started - Free Pool Assessment
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
