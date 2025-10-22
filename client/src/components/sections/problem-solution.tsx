import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import problemBg from "@assets/stock_images/professional_pool_cl_9cdaa35b.jpg";

export function ProblemSolution() {
  const problemSolutions = [
    {
      problem: "Unreliable Technicians",
      painPoints: ["Frequent no-shows", "Disappearing after payment", "No emergency support"],
      solution: "Scheduled, consistent service with same dedicated technician. 24/7 emergency response guarantee. Professional accountability.",
    },
    {
      problem: "Poor Quality & Expertise",
      painPoints: ["Improper chemicals", "Equipment damage", "Water chemistry issues"],
      solution: "Certified technicians with 10+ years experience. Premium 90% pure chemicals. Proper equipment diagnosis and care.",
    },
    {
      problem: "Communication Breakdown",
      painPoints: ["No service reports", "Language barriers", "No visibility when absent"],
      solution: "Detailed digital reports after every visit. English-speaking team. Proprietary log app for remote monitoring.",
    },
    {
      problem: "Compliance & Safety",
      painPoints: ["Unknown chemical quality", "No documentation", "No insurance coverage"],
      solution: "International-standard chemicals. Professional documentation for property managers. Full insurance and certifications.",
    },
    {
      problem: "Financial Unpredictability",
      painPoints: ["Hidden costs", "Surprise charges", "Inconsistent pricing"],
      solution: "Transparent all-inclusive pricing. Predictable monthly costs. No hidden fees or surprises.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${problemBg})` }}
      />
      {/* White overlay - increased opacity for better text readability */}
      <div className="absolute inset-0 bg-white/98 dark:bg-black/95" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Problems We Solve
          </h2>
          <p className="text-xl text-muted-foreground">
            We understand the frustrations of unreliable pool service in Bali. Here's how we're different.
          </p>
        </div>

        {/* Problem-Solution Cards */}
        <div className="space-y-8">
          {problemSolutions.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`problem-solution-${index}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Problem Side */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold">Problem: {item.problem}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.painPoints.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-destructive mt-1">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Side */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Our Solution</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied villa owners, property managers, and hotels who trust Pool Service Bali for professional pool care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover-elevate active-elevate-2 transition-all"
              data-testid="button-get-quote"
            >
              Get Your Free Quote
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-md hover-elevate active-elevate-2 transition-all"
              data-testid="button-view-pricing"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
