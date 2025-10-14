import { Building2, Home, Briefcase, Factory, TrendingUp, Shield, BarChart3, Users, Clock, DollarSign, CheckCircle2, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CustomerBenefits() {
  const customerTypes = [
    {
      icon: Building2,
      title: "Luxury Resorts & Hotels",
      subtitle: "Protect Your 5-Star Reputation",
      benefits: [
        {
          icon: Shield,
          title: "Protect Your Reputation",
          description: "Consistently pristine pool conditions that exceed guest expectations",
        },
        {
          icon: DollarSign,
          title: "Reduce Operating Costs 25-30%",
          description: "Through optimized chemical usage and preventive equipment maintenance",
        },
        {
          icon: BarChart3,
          title: "Simplify Operations",
          description: "Centralized digital reporting accessible to your entire management team",
        },
        {
          icon: FileText,
          title: "Ensure Health Compliance",
          description: "Comprehensive documentation meeting international hospitality standards",
        },
      ],
      cta: "Get Resort Solutions",
    },
    {
      icon: Home,
      title: "Private Villa Owners",
      subtitle: "Complete Peace of Mind",
      benefits: [
        {
          icon: Shield,
          title: "Complete Peace of Mind",
          description: "Your investment protected by certified professionals",
        },
        {
          icon: Clock,
          title: "Manage from Anywhere",
          description: "Real-time dashboard access and photo updates from anywhere in the world",
        },
        {
          icon: TrendingUp,
          title: "Preserve Property Value",
          description: "Maintenance that keeps your pool looking and functioning like new",
        },
        {
          icon: DollarSign,
          title: "Save Money Long-Term",
          description: "Proper equipment care extends lifespan by years",
        },
      ],
      cta: "Protect Your Villa",
    },
    {
      icon: Briefcase,
      title: "Property Managers",
      subtitle: "Scale Your Portfolio with Confidence",
      benefits: [
        {
          icon: BarChart3,
          title: "Streamline Operations",
          description: "Manage all portfolio pools through one centralized dashboard",
        },
        {
          icon: FileText,
          title: "Build Owner Trust",
          description: "Professional documentation that demonstrates value",
        },
        {
          icon: CheckCircle2,
          title: "Reduce Emergency Calls",
          description: "Consistent, high-quality maintenance prevents guest complaints",
        },
        {
          icon: Users,
          title: "Scale Confidently",
          description: "Your pool service partner can handle portfolio growth",
        },
      ],
      cta: "Grow Your Portfolio",
    },
    {
      icon: Factory,
      title: "Commercial Properties",
      subtitle: "Compliance & Efficiency",
      benefits: [
        {
          icon: FileText,
          title: "Ensure Compliance",
          description: "Comprehensive documentation and certified chemical traceability",
        },
        {
          icon: Clock,
          title: "Minimize Downtime",
          description: "Rapid response times and extensive parts inventory",
        },
        {
          icon: Shield,
          title: "Reduce Liability",
          description: "Proper safety system maintenance and documentation",
        },
        {
          icon: DollarSign,
          title: "Optimize Budgets",
          description: "Energy-efficient equipment recommendations",
        },
      ],
      cta: "Commercial Solutions",
    },
  ];

  const universalBenefits = [
    "Premium chemicals at wholesale pricing",
    "Extended equipment lifespan",
    "Reduced water consumption",
    "Lower energy costs",
    "Expert upgrade guidance",
    "24/7 emergency support",
  ];

  return (
    <section id="customer-benefits" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-World Benefits for Every Property Type
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored solutions that deliver measurable value for your specific needs
          </p>
        </div>

        {/* Customer Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {customerTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{type.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{type.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  {type.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#contact" data-testid={`button-${type.cta.toLowerCase().replace(/\s+/g, '-')}`}>{type.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Universal Benefits */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Universal Benefits for All Clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {universalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/50 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
