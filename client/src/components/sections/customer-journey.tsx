import { Search, Settings, TrendingUp, Sparkles } from "lucide-react";

export function CustomerJourney() {
  const phases = [
    {
      number: "1",
      icon: Search,
      title: "Initial Assessment",
      subtitle: "Completely Free, No Obligation",
      features: [
        "Schedule your convenient assessment time",
        "Comprehensive 45-point pool inspection",
        "Detailed analysis with photographic documentation",
        "Customized service plan recommendations",
        "Transparent pricing with no hidden fees",
      ],
    },
    {
      number: "2",
      icon: Settings,
      title: "Onboarding & Setup",
      subtitle: "Seamless Transition to Professional Care",
      features: [
        "Complete documentation of your pool's baseline conditions",
        "Creation of personalized maintenance schedule",
        "Setup of secure online dashboard with mobile app access",
        "Introduction to your dedicated service technician",
        "Emergency contact registration for priority response",
      ],
    },
    {
      number: "3",
      icon: Sparkles,
      title: "Ongoing Excellence",
      subtitle: "Consistent Care You Can Rely On",
      features: [
        "Scheduled visits with SMS and WhatsApp confirmation",
        "Real-time service reports uploaded immediately",
        "Before-and-after photographic documentation",
        "Proactive equipment monitoring with early warnings",
        "Quarterly deep-clean services and system checks",
      ],
    },
    {
      number: "4",
      icon: TrendingUp,
      title: "Continuous Improvement",
      subtitle: "Always Getting Better",
      features: [
        "Monthly trend reports tracking chemistry and performance",
        "Annual efficiency audits identifying cost reduction opportunities",
        "Priority access to new technologies and equipment upgrades",
        "Long-term planning consultation for improvements",
        "Seasonal optimization for Bali's monsoon and dry seasons",
      ],
    },
  ];

  return (
    <section id="customer-journey" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to Crystal Clear Pools
          </h2>
          <p className="text-xl text-muted-foreground">
            Our simple four-phase process ensures seamless service from first contact to ongoing excellence
          </p>
        </div>

        {/* Journey Phases */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-primary/20" style={{ top: '80px' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Card */}
                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg h-full">
                  {/* Phase Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                      <phase.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-primary mb-1">PHASE {phase.number}</div>
                      <h3 className="font-bold text-lg leading-tight">{phase.title}</h3>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {phase.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {phase.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold mb-4">
            Ready to start your journey to a perfect pool?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            data-testid="button-schedule-assessment-journey"
          >
            Schedule Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
