import { Phone, Calendar, ClipboardCheck, Sparkles, Star, ArrowRight, Droplet } from "lucide-react";
import { Card } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Get in Touch",
      description: "WhatsApp, call, or fill our form. We respond within 2 hours on business days.",
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      number: "02",
      icon: Calendar,
      title: "Free Assessment",
      description: "Expert visit to inspect your pool, equipment, and water quality. Zero cost, zero commitment.",
      color: "from-cyan-500 to-teal-500",
      lightColor: "from-cyan-500/10 to-teal-500/10"
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Custom Plan",
      description: "Tailored package with transparent pricing. Choose your service level, chemicals included.",
      color: "from-teal-500 to-emerald-500",
      lightColor: "from-teal-500/10 to-emerald-500/10"
    },
    {
      number: "04",
      icon: Sparkles,
      title: "First Service",
      description: "Professional team arrives on schedule with all equipment and premium chemicals ready.",
      color: "from-emerald-500 to-green-500",
      lightColor: "from-emerald-500/10 to-green-500/10"
    },
    {
      number: "05",
      icon: Star,
      title: "Ongoing Care",
      description: "Regular visits, digital reports, same technician. Relax while we keep it crystal clear.",
      color: "from-green-500 to-lime-500",
      lightColor: "from-green-500/10 to-lime-500/10"
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Droplet className="h-4 w-4" />
            <span className="text-sm font-semibold">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Bali Pool Service Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From first contact to pristine pool water — our proven 5-step process makes professional pool care effortless
          </p>
        </div>

        {/* Steps - Modern Timeline Design */}
        <div className="relative">
          {/* Desktop Flowing Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-30 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                data-testid={`step-${index}`}
              >
                <Card className="relative overflow-hidden hover-elevate transition-all duration-500 border-2 h-full">
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col items-center text-center h-full">
                    {/* Icon Circle with Gradient */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold text-primary">{step.number}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Arrow Connector (Desktop Only) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-20 text-primary/30 group-hover:text-primary group-hover:scale-125 transition-all duration-500">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Icon */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              <span className="font-bold text-foreground block mb-2">Your only job? Make the first call.</span>
              We handle the rest — from chemicals to cleaning, testing to troubleshooting. Sit back and enjoy crystal-clear water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
