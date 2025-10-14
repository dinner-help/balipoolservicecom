import { Clock, Shield, DollarSign, Users } from "lucide-react";
import valuesBg from "@assets/stock_images/luxury_villa_swimmin_006aab3c.jpg";

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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${valuesBg})` }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 group animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`value-${index}`}
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <value.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
