import { ExternalLink } from "lucide-react";

export function BrandPartnerships() {
  const brands = [
    {
      name: "Pentair",
      description: "Pool Equipment & Filtration Systems",
      url: "https://www.pentair.com",
      logo: "PENTAIR",
    },
    {
      name: "Hayward",
      description: "Pumps, Filters & Pool Automation",
      url: "https://www.hayward.com",
      logo: "HAYWARD",
    },
    {
      name: "Jandy",
      description: "Pool & Spa Equipment",
      url: "https://www.jandy.com",
      logo: "JANDY",
    },
  ];

  const certifications = [
    {
      name: "EU Certified",
      description: "European Quality Standards",
    },
    {
      name: "USA EPA",
      description: "Environmental Protection",
    },
    {
      name: "NSF International",
      description: "Public Health & Safety",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Trusted Partners Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">TRUSTED BY 500+ PROPERTIES ACROSS BALI</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Official Partners with World-Leading Pool Equipment Brands
          </h2>
        </div>

        {/* Brand Partnerships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-8 rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
              data-testid={`link-brand-${brand.name.toLowerCase()}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">
                    {brand.logo}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{brand.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Visit Website</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t pt-12">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
            CERTIFIED & COMPLIANT WITH INTERNATIONAL STANDARDS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            We exclusively use <span className="font-semibold text-foreground">EU and USA-approved pool chemicals</span> and{" "}
            <span className="font-semibold text-foreground">genuine manufacturer parts</span> for all repairs and installations
          </p>
        </div>
      </div>
    </section>
  );
}
