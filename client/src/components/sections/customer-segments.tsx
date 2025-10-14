import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Hotel, Building } from "lucide-react";

export function CustomerSegments() {
  const segments = [
    {
      icon: Home,
      title: "Private Villa Owners",
      subtitle: "Expats & International Investors",
      description: "Perfect for absentee landlords who need reliable, professional pool care without being on-site.",
      painPoints: [
        "No shows or unreliable technicians",
        "Lack of professional reporting",
        "Communication barriers",
        "Green pool emergencies before guests arrive",
      ],
      solution: "24/7 support, detailed digital reports, English-speaking technicians, and emergency response guarantee.",
    },
    {
      icon: Building2,
      title: "Property Management Companies",
      subtitle: "Managing 5-50+ Properties",
      description: "Scalable, consistent service across your entire portfolio with professional documentation.",
      painPoints: [
        "Inconsistent service quality across properties",
        "No standardized reporting",
        "Guest complaints about pool quality",
        "Vendor management headaches",
      ],
      solution: "Same-day service, standardized reporting, dedicated account manager, and volume discounts.",
    },
    {
      icon: Hotel,
      title: "Boutique Hotels & Resorts",
      subtitle: "5-30 Room Properties",
      description: "Guest-facing pool excellence with health compliance and professional standards.",
      painPoints: [
        "Health regulation compliance concerns",
        "Guest satisfaction requirements",
        "Equipment damage from improper care",
        "No emergency support availability",
      ],
      solution: "Certified technicians, compliance documentation, 2-hour emergency response, and premium chemicals.",
    },
    {
      icon: Building,
      title: "Luxury Resort Groups",
      subtitle: "Large-Scale Operations",
      description: "International hospitality standards with comprehensive service agreements.",
      painPoints: [
        "Need for certified, insured providers",
        "Multiple pools requiring coordination",
        "Strict brand standards to maintain",
        "Complex procurement requirements",
      ],
      solution: "Full insurance coverage, certifications, dedicated service teams, and custom SLA agreements.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground">
            Specialized pool maintenance solutions tailored to your specific property type and business needs.
          </p>
        </div>

        {/* Segment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`segment-card-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <segment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">{segment.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{segment.subtitle}</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {segment.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    Common Challenges
                  </h4>
                  <ul className="space-y-2">
                    {segment.painPoints.map((point, pIndex) => (
                      <li key={pIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wide">
                    Our Solution
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">{segment.solution}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
