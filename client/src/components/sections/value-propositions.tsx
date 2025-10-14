import { Clock, Shield, DollarSign, Users } from "lucide-react";

export function ValuePropositions() {
  const values = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Emergency pool service available around the clock. We're here when you need us most.",
    },
    {
      icon: Shield,
      title: "Zero Effort Required",
      description: "Complete hands-off maintenance. We handle everything from chemicals to equipment checks.",
    },
    {
      icon: DollarSign,
      title: "All-Inclusive Pricing",
      description: "Transparent monthly rates with no hidden costs. All chemicals, supplies, and labor included.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional, certified technicians with 10+ years experience. English-speaking service.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
              data-testid={`value-${index}`}
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
