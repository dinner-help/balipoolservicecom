import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Smartphone, FileBarChart, Beaker, Radio, Shield, Droplets, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Technology() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();

  const technologies = [
    {
      icon: Microscope,
      title: "LaMotte WaterLink Spin Touch",
      description: "NSF/ANSI-50 Level 1 certified lab-grade photometer testing 10 parameters in 60 seconds with pre-filled reagent disks",
      specs: "pH, Free/Total Chlorine, Alkalinity, Hardness, CYA, Salt, Iron, Copper",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Beaker,
      title: "PoolWaterLAB Photometer",
      description: "IP68 waterproof digital testing system analyzing 27 water parameters with Bluetooth connectivity and cloud reporting",
      specs: "Level 1 accuracy, WiFi enabled, 24/7 support",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "WaterGuru SENSE S2",
      description: "Automated smart monitoring system with real-time alerts, used by Ritz Carlton, Marriott, and Hilton properties",
      specs: "Continuous pH, chlorine, alkalinity tracking with mobile app",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: FileBarChart,
      title: "Digital Reporting System",
      description: "Every service documented with water chemistry readings, chemical adjustments, and equipment status sent to your email",
      specs: "Photo documentation, trend analysis, compliance logs",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "NSF/ANSI-50 Certified",
      description: "All testing equipment meets highest accuracy standards (±10% tolerance, pH ±0.10) required for commercial facilities"
    },
    {
      icon: Radio,
      title: "Bluetooth & WiFi Connected",
      description: "Real-time data sync eliminates human error and provides instant client access to water quality metrics"
    },
    {
      icon: Droplets,
      title: "Premium Chemical Integration",
      description: "Precise testing enables optimal chemical dosing, reducing waste and ensuring crystal-clear, safe water"
    },
    {
      icon: Cpu,
      title: "Automated Monitoring",
      description: "24/7 smart sensors track water quality changes and alert technicians before issues become visible"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div 
          ref={ref1}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Microscope className="h-4 w-4" />
            <span className="text-sm font-semibold">Professional Equipment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            State-of-the-Art Pool Testing Technology
          </h2>
          <p className="text-xl text-muted-foreground">
            We invest in the same lab-grade equipment used by 5-star resorts and commercial facilities. No guesswork, just precision.
          </p>
        </div>

        {/* Main Technologies Grid */}
        <div 
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="group hover-elevate overflow-hidden border-2 transition-all duration-500"
              data-testid={`tech-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon with Gradient */}
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative h-16 w-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {tech.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Cpu className="h-3 w-3" />
                      {tech.specs}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div 
          ref={ref3}
          className={`transition-all duration-1000 delay-300 ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Why Professional Equipment Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl hover-elevate transition-all duration-300 border"
                data-testid={`cert-${index}`}
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">27</div>
            <div className="text-sm text-muted-foreground">Water Parameters Tested</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">60s</div>
            <div className="text-sm text-muted-foreground">Complete Analysis Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">±10%</div>
            <div className="text-sm text-muted-foreground">NSF Level 1 Accuracy</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Automated Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
