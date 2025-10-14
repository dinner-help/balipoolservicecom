import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, CheckCircle2 } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "Villa Seminyak – Complete Pool Transformation",
      location: "Seminyak, Bali",
      savings: "IDR 125,000,000",
      savingsLabel: "Saved from Unnecessary Renovation",
      challenge: "Private villa owner contacted us with a severely neglected 12m × 5m pool. Water was dark green, equipment was failing, tiles were stained, and previous 'pool companies' had given up. The owner was considering draining and complete reconstruction costing IDR 150,000,000+.",
      solution: "Comprehensive three-phase recovery program: Emergency chemical recovery using accelerated treatment protocol, equipment repair replacing failed pump motor and filter media, and surface restoration with professional tile cleaning and acid washing.",
      results: [
        "Crystal clear water achieved in 5 days",
        "Pool fully restored for under IDR 25,000,000",
        "Avoided unnecessary IDR 150,000,000 renovation",
        "Ongoing maintenance prevents recurrence",
      ],
      testimonial: "Aquapure saved me from an unnecessary IDR 125 million renovation.",
      author: "Villa Owner, Seminyak",
    },
    {
      title: "Boutique Hotel Ubud – Operational Excellence",
      location: "Ubud, Bali",
      savings: "35%",
      savingsLabel: "Chemical Cost Reduction",
      challenge: "15-room boutique hotel with beautiful infinity pool overlooking rice terraces. Previous maintenance was irregular, guest complaints were increasing, management had no visibility into service delivery, and chemical costs seemed excessive.",
      solution: "Implemented weekly maintenance program with digital documentation, optimized chemical usage saving 35% monthly, installed real-time monitoring dashboard for management access, and trained hotel staff on basic daily checks.",
      results: [
        "Guest satisfaction scores increased from 3.8 to 4.7 stars",
        "Chemical costs reduced by 35%",
        "Zero maintenance-related guest complaints in 18 months",
        "Pool transformed from liability to showcase feature",
      ],
      testimonial: "The professionalism and reliability transformed our pool from a liability to a showcase feature.",
      author: "Hotel Manager, Ubud",
    },
    {
      title: "Resort Chain – Multi-Property Partnership",
      location: "Multiple Locations, Bali",
      savings: "25%",
      savingsLabel: "Maintenance Cost Reduction",
      challenge: "Resort chain operating six properties needed unified pool service across all locations. Inconsistent quality from multiple providers, no centralized reporting, and unreliable emergency response.",
      solution: "Implemented standardized service protocols across all properties, centralized digital dashboard for management oversight, dedicated account manager for coordination, and guaranteed 2-hour emergency response time.",
      results: [
        "40% increase in guest satisfaction scores",
        "25% reduction in total maintenance costs",
        "Eliminated service inconsistencies across properties",
        "Streamlined operations and reporting",
      ],
      testimonial: "Partnering with Pool Service Bali increased our guest satisfaction scores by 40% while reducing maintenance costs by 25%.",
      author: "Operations Director, Resort Chain",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Projects, Real Results
          </h2>
          <p className="text-xl text-muted-foreground">
            Success stories from property owners who transformed their pools with measurable ROI
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {cases.map((case_study, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardContent className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Title & Savings */}
                  <div className="lg:col-span-1">
                    <Badge className="mb-3" variant="outline">{case_study.location}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{case_study.title}</h3>
                    <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        {case_study.savings.includes('%') ? (
                          <TrendingDown className="h-6 w-6 text-primary" />
                        ) : (
                          <TrendingUp className="h-6 w-6 text-primary" />
                        )}
                        <span className="text-3xl font-bold text-primary">{case_study.savings}</span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{case_study.savingsLabel}</p>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-bold text-sm uppercase text-destructive mb-2">Challenge:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{case_study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-bold text-sm uppercase text-primary mb-2">Our Solution:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{case_study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-3">Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {case_study.results.map((result, rIndex) => (
                          <div key={rIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm italic mb-2">"{case_study.testimonial}"</p>
                      <p className="text-xs font-semibold text-muted-foreground">— {case_study.author}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-4">
            Ready to achieve similar results for your property?
          </p>
          <Button size="lg" asChild>
            <a href="#contact" data-testid="button-free-assessment-cases">Get Your Free Assessment</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
