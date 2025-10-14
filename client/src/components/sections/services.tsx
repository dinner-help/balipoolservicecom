import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wrench, Hammer, CheckCircle } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Pool Cleaning & Maintenance",
      description: "Complete pool care from water chemistry to equipment inspection. Keep your pool crystal clear year-round.",
      features: [
        "Water testing & pH balancing",
        "Premium 90% pure chemicals",
        "Skimming, vacuuming & brushing",
        "Filter backwashing",
        "Equipment inspection",
        "Debris removal",
      ],
    },
    {
      icon: Wrench,
      title: "Pool Repair & Equipment Service",
      description: "Expert diagnostics and repair for all pool systems. From minor fixes to major equipment replacement.",
      features: [
        "Pump & filter repair/replacement",
        "Leak detection & repair",
        "Pool heater servicing",
        "Electrical system repair",
        "Surface patching",
        "Pipe repair/replacement",
      ],
    },
    {
      icon: Hammer,
      title: "New Pool Construction",
      description: "Custom pool design and installation for your Bali property. Infinity pools, traditional designs, and more.",
      features: [
        "Custom pool design",
        "Infinity pool construction",
        "Professional installation",
        "Premium materials",
        "6-month warranty included",
        "Villa & hotel projects",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-services">
            Complete Pool Care Solutions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-services-subtitle">
            From routine maintenance to major repairs and new construction, we handle every aspect of pool care with professional expertise.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
