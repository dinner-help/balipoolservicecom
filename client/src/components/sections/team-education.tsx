import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, BookOpen, Shield, Target, Briefcase, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TeamEducation() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();

  const training = [
    {
      icon: BookOpen,
      title: "NSF Certification Training",
      description: "All technicians complete NSF/ANSI-50 water chemistry certification covering 27 parameters, chemical safety, and testing protocols",
      duration: "40 hours"
    },
    {
      icon: Shield,
      title: "Equipment Safety Certification",
      description: "Comprehensive training on pool equipment operation, electrical safety, chemical handling, and emergency procedures",
      duration: "24 hours"
    },
    {
      icon: Target,
      title: "Advanced Water Chemistry",
      description: "Deep dive into pH balance, chlorine dynamics, calcium hardness, CYA levels, salt systems, and mineral sanitizers",
      duration: "32 hours"
    },
    {
      icon: Briefcase,
      title: "Customer Service Excellence",
      description: "Professional communication, client relationship management, reporting standards, and service documentation best practices",
      duration: "16 hours"
    }
  ];

  const achievements = [
    {
      icon: Award,
      stat: "100%",
      label: "NSF Certified Technicians",
      description: "Every team member holds professional water chemistry certification"
    },
    {
      icon: Users,
      stat: "8+ Years",
      label: "Average Experience",
      description: "Our senior technicians have been maintaining Bali pools since 2016"
    },
    {
      icon: Trophy,
      stat: "500+",
      label: "Pools Maintained",
      description: "Collective team experience across villas, hotels, and estates"
    },
    {
      icon: GraduationCap,
      stat: "Ongoing",
      label: "Continuous Education",
      description: "Quarterly training on new techniques, equipment, and industry standards"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-semibold">Professional Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educated, Trained, & Certified Pool Professionals
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just hire pool cleaners — we develop pool care specialists. Every technician completes 112+ hours of professional training before servicing their first client.
          </p>
        </div>

        {/* Training Programs Grid */}
        <div 
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {training.map((program, index) => (
            <Card 
              key={index} 
              className="group hover-elevate border-2 overflow-hidden transition-all duration-500"
              data-testid={`training-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Stats */}
        <div 
          ref={ref3}
          className={`transition-all duration-1000 delay-300 ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl border-2 hover-elevate transition-all duration-300"
                data-testid={`achievement-${index}`}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.stat}</div>
                <div className="font-semibold mb-2">{achievement.label}</div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">The Pool Service Bali Difference</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most pool services send untrained staff with a net and bucket. We send certified specialists with lab-grade equipment, professional knowledge, and years of experience. <span className="font-bold text-foreground">That's why our clients' pools stay crystal clear year-round.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
