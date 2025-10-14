import { Phone, Search, DollarSign, FileCheck, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Initial Contact",
      description: "Reach out via WhatsApp, phone, or our contact form. We respond within hours, not days.",
    },
    {
      number: "2",
      icon: Search,
      title: "On-Site Assessment",
      description: "Our team visits your property to inspect your pool, assess equipment, and understand your specific needs.",
    },
    {
      number: "3",
      icon: DollarSign,
      title: "Custom Pricing",
      description: "Receive a tailored quote based on your pool size, system type, and service frequency. Transparent, no surprises.",
    },
    {
      number: "4",
      icon: FileCheck,
      title: "Service Agreement",
      description: "Sign the service contract and establish your monthly payment structure. All chemicals and supplies included.",
    },
    {
      number: "5",
      icon: CheckCircle2,
      title: "Ongoing Service",
      description: "Enjoy regular maintenance visits with detailed reports after each service. Same technician, consistent quality.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Pool Service Bali Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From first contact to ongoing service, we make pool maintenance effortless. Here's your journey to worry-free pool ownership.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: "4rem" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
                data-testid={`step-${index}`}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 h-16 w-16 rounded-full bg-primary border-4 border-background flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Your only responsibility:</span> Make the initial call. We handle everything else.
          </p>
        </div>
      </div>
    </section>
  );
}
