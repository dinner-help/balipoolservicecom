import { MapPin, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ServiceAreas() {
  const primaryAreas = [
    {
      name: "Seminyak",
      description: "High concentration of luxury villas and boutique hotels",
    },
    {
      name: "Canggu",
      description: "Rapidly growing villa market with modern properties",
    },
    {
      name: "Uluwatu",
      description: "Luxury clifftop villas with spectacular views",
    },
    {
      name: "Sanur",
      description: "Established expat community and family properties",
    },
    {
      name: "Nusa Dua",
      description: "Resort concentration and premium properties",
    },
  ];

  const secondaryAreas = [
    "Jimbaran",
    "Ubud",
    "Denpasar",
    "Tabanan",
    "Amed",
    "Bukit Peninsula",
  ];

  return (
    <section id="service-areas" className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service Coverage Across Bali
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional pool maintenance serving all major areas in Bali. Same-day service available in primary zones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Primary Service Areas */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              Primary Service Areas
            </h3>
            <div className="space-y-4">
              {primaryAreas.map((area, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`area-primary-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{area.name}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Secondary Areas & Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Additional Coverage Areas
            </h3>
            <Card className="p-8 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {secondaryAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    data-testid={`area-secondary-${index}`}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground border-t pt-6">
                Don't see your area? Contact us for availability and pricing in other Bali locations.
              </p>
            </Card>

            {/* Service Highlights */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Coverage Highlights</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Same-Day Service</p>
                    <p className="text-sm text-muted-foreground">Available in primary service areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">24-Hour Emergency</p>
                    <p className="text-sm text-muted-foreground">Response across all service zones</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">No Travel Fees</p>
                    <p className="text-sm text-muted-foreground">Within standard service areas</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
