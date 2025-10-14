import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Clock, Award, BarChart3 } from "lucide-react";

export function KeyDifferentiators() {
  const differentiators = [
    {
      icon: Smartphone,
      title: "Proprietary Log App",
      description: "Real-time tracking and detailed reporting after every service visit",
      features: [
        "Digital service reports with photos",
        "Water chemistry history tracking",
        "Equipment performance logs",
        "Proactive maintenance alerts",
        "Access from anywhere in the world",
      ],
      highlight: "Complete transparency for absentee owners",
    },
    {
      icon: Clock,
      title: "24-Hour Emergency Response",
      description: "Round-the-clock support when you need it most",
      features: [
        "2-4 hour response time guarantee",
        "Green pool recovery service",
        "Equipment breakdown assistance",
        "Pre-event emergency service",
        "Holiday coverage included",
      ],
      highlight: "Never worry about pool emergencies again",
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "International-quality service with local expertise",
      features: [
        "Certified pool technicians",
        "English-speaking service team",
        "Premium 90% pure chemicals",
        "Full insurance coverage",
        "10+ years industry experience",
      ],
      highlight: "Trust the professionals with your investment",
    },
    {
      icon: BarChart3,
      title: "All-Inclusive Service Model",
      description: "Complete pool care with zero hidden costs",
      features: [
        "Chemicals included in price",
        "All equipment and supplies provided",
        "Predictable monthly expenses",
        "Same technician consistency",
        "Flexible contract terms",
      ],
      highlight: "One price, complete peace of mind",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional pool maintenance backed by technology, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`differentiator-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <diff.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{diff.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {diff.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2.5">
                  {diff.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-primary">{diff.highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-testid="stat-pools">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Pools Maintained</div>
          </div>
          <div className="text-center" data-testid="stat-response">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Support</div>
          </div>
          <div className="text-center" data-testid="stat-experience">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center" data-testid="stat-satisfaction">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Goal</div>
          </div>
        </div>
      </div>
    </section>
  );
}
