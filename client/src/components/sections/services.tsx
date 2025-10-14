import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wrench, Hammer, CheckCircle } from "lucide-react";
import cleaningImage from "@assets/stock_images/professional_pool_cl_5ed80d5f.jpg";
import equipmentImage from "@assets/stock_images/pool_equipment_filte_47e1a358.jpg";
import constructionImage from "@assets/stock_images/crystal_clear_blue_s_edf02c5d.jpg";

export function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Pool Cleaning & Maintenance",
      description: "Complete pool care from water chemistry to equipment inspection. Keep your pool crystal clear year-round.",
      image: cleaningImage,
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
      image: equipmentImage,
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
      image: constructionImage,
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
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
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
