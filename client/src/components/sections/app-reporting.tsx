import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Bell, Camera, TrendingUp, Clock, MapPin, CheckCircle2, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AppReporting() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  const features = [
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Before & after photos of every visit with timestamp and GPS location automatically uploaded to your account",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Digital Service Reports",
      description: "Detailed reports sent via email after each service: water chemistry readings, chemicals added, equipment checked, issues found",
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: TrendingUp,
      title: "Water Chemistry Trends",
      description: "Track pH, chlorine, alkalinity trends over weeks and months with interactive charts and historical data analysis",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Bell,
      title: "Smart Alerts & Notifications",
      description: "Instant WhatsApp/email alerts for urgent issues: equipment failures, water quality problems, or missed services",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Clock,
      title: "Service Schedule Tracking",
      description: "See upcoming visits, reschedule online, and get reminders 24 hours before each scheduled maintenance",
      color: "from-rose-500 to-red-500"
    },
    {
      icon: MapPin,
      title: "Technician GPS Tracking",
      description: "Real-time location updates when technician is en route. Know exactly when they'll arrive at your property",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    "Complete transparency — see exactly what work was done and when",
    "Peace of mind — catch problems early before they become expensive repairs",
    "Compliance ready — perfect for property managers needing service documentation",
    "Owner portal access — check your pool's status anytime from anywhere in the world"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
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
            <Smartphone className="h-4 w-4" />
            <span className="text-sm font-semibold">Digital Reporting System</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Track Every Detail with Our App & Reporting Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            While you're traveling or managing multiple properties, our digital system keeps you informed with real-time updates, photo documentation, and complete service transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-elevate border-2 overflow-hidden transition-all duration-500"
              data-testid={`app-feature-${index}`}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className={`relative h-14 w-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Property Owners Love Digital Reporting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="font-bold text-foreground">No extra fees. </span>
            Digital reporting is included in all service packages at no additional cost.
          </p>
        </div>
      </div>
    </section>
  );
}
