import { AlertTriangle, DollarSign, MessageCircleX, Clock, ThumbsDown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PoolChallenge() {
  const problems = [
    {
      icon: Clock,
      title: "Unreliable Service",
      description: "Weekly visits promised, but technicians disappear for weeks. You're left scrambling before important guest arrivals.",
    },
    {
      icon: DollarSign,
      title: "Poor Quality Chemicals",
      description: "Premium prices for substandard products that damage expensive equipment and create endless water balance problems.",
    },
    {
      icon: ThumbsDown,
      title: "Undertrained Technicians",
      description: "Band-aid fixes instead of solving root causes, leading to recurring emergencies and mounting costs.",
    },
    {
      icon: MessageCircleX,
      title: "Communication Breakdown",
      description: "Language barriers make simple requests frustrating. No documentation about what was actually done during service visits.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Nightmares",
      description: "Equipment fails before a fully-booked weekend. Your 'pool company' doesn't answer or quotes ransom-level prices.",
    },
    {
      icon: Star,
      title: "Property Manager Struggles",
      description: "How do you report to owners with no documentation? How do you budget when prices change without notice?",
    },
  ];

  const realCosts = [
    "Green water embarrassments that damage your reputation",
    "Equipment failing years before it should",
    "Thousands wasted on unnecessary repairs",
    "Constant stress wondering if your pool will be ready",
    "Property values suffering from neglected appearance",
    "Negative guest reviews mentioning poor pool conditions",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-pool-challenge">
            The Pool Ownership Challenge in Bali
          </h2>
          <p className="text-xl text-muted-foreground">
            Frustration, Wasted Money, and Constant Stress
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-in fade-in slide-in-from-bottom-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="h-6 w-6 text-destructive animate-pulse" />
                </div>
                <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real Cost Section */}
        <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            The Real Cost of Inadequate Pool Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {realCosts.map((cost, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 animate-in slide-in-from-left-2 fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5 animate-pulse">
                  <span className="text-destructive text-xs">✕</span>
                </div>
                <p className="text-sm text-muted-foreground">{cost}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold text-destructive">
            This isn't just inconvenient – it's a threat to your investment, reputation, and peace of mind.
          </p>
        </div>

        {/* Solution Teaser */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-primary mb-3">THERE'S A BETTER WAY</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Professional Pool Solutions That Actually Work
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bali's finest properties deserve pool service that matches international hospitality standards. 
            Reliability, transparency, expertise, and genuine care for your investment.
          </p>
        </div>
      </div>
    </section>
  );
}
