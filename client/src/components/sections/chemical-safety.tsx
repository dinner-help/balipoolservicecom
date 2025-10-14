import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Baby, Heart, CheckCircle2, Leaf, TestTube2, Award, AlertTriangle } from "lucide-react";

export function ChemicalSafety() {
  const certifications = [
    {
      icon: Shield,
      name: "EU Safety Certified",
      description: "All chemicals certified under strict European Union safety standards (REACH regulation)",
    },
    {
      icon: Baby,
      name: "Child-Safe Approved",
      description: "Tested and approved safe for children's skin contact and accidental ingestion",
    },
    {
      icon: Heart,
      name: "Pregnancy Safe",
      description: "Clinically tested safe for pregnant women - no harmful fumes or skin reactions",
    },
    {
      icon: Leaf,
      name: "Eco-Certified",
      description: "Biodegradable formulas that don't harm Bali's environment or water sources",
    },
    {
      icon: TestTube2,
      name: "Lab Tested",
      description: "Independent laboratory testing confirms zero toxic residues or harmful byproducts",
    },
    {
      icon: Award,
      name: "NSF/ANSI Approved",
      description: "Meets international NSF/ANSI 50 & 60 standards for pool and drinking water additives",
    },
  ];

  const safetyTests = [
    "Dermatologically tested - no skin irritation",
    "Ophthalmologically tested - safe if splashed in eyes",
    "Toxicology screened - no carcinogenic compounds",
    "Respiratory safety - no harmful vapors or fumes",
    "Pregnancy safety - no teratogenic effects",
    "Pediatric approved - safe for infant skin contact",
    "Allergy tested - hypoallergenic formulations",
    "Environmental impact - biodegradable within 28 days",
  ];

  const localChemicalDangers = [
    {
      problem: "Unknown Chemical Sources",
      danger: "Local pool shops often sell industrial-grade chemicals not approved for residential use - can cause severe skin burns and respiratory issues.",
    },
    {
      problem: "Counterfeit Products",
      danger: "Fake 'branded' chemicals with dangerous additives. We've seen cases of chemical burns on children from counterfeit chlorine.",
    },
    {
      problem: "No Safety Data",
      danger: "Zero documentation on ingredients, safe handling, or emergency procedures. You're swimming in unknown substances.",
    },
    {
      problem: "Over-Concentrated Formulas",
      danger: "Unmarked industrial chemicals that can corrode pool equipment and cause serious health issues when incorrectly dosed.",
    },
  ];

  return (
    <section id="chemical-safety" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3">EUROPE'S HIGHEST SAFETY STANDARDS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium EU-Certified Chemicals: Safe for Your Entire Family
          </h2>
          <p className="text-xl text-muted-foreground">
            We exclusively use chemicals certified under European Union safety regulations - the world's strictest standards. Tested safe for children, pregnant women, and pets. Zero harmful effects. Zero compromises.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-3"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why EU Standards Matter */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">The EU Difference</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why European Chemical Standards Are the World's Safest
              </h3>
              <p className="text-muted-foreground mb-4">
                The European Union has the most rigorous chemical safety regulations in the world. Before any pool chemical can be sold in Europe, it must undergo:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>10+ years of testing</strong> - Long-term health impact studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>REACH compliance</strong> - Complete disclosure of all chemical ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Independent verification</strong> - Third-party labs confirm safety claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Continuous monitoring</strong> - Ongoing safety surveillance and reporting</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                <strong>Result:</strong> The chemicals we use have been proven safe through decades of research and real-world use across millions of European households.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2">
              <h4 className="font-bold text-lg mb-4">Comprehensive Safety Testing:</h4>
              <div className="space-y-2">
                {safetyTests.map((test, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{test}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold text-primary">
                  ✓ Zero harmful effects documented in 20+ years of European use
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Danger of Local Chemicals */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              The Hidden Dangers of Cheap Local Pool Chemicals
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many pool owners in Bali unknowingly expose their families to dangerous chemicals bought from local shops. Here's what you need to know:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {localChemicalDangers.map((item, index) => (
              <Card key={index} className="border-2 border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-destructive mb-2">{item.problem}</h4>
                      <p className="text-sm text-muted-foreground">{item.danger}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white border-2 border-primary rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Our Chemical Safety Guarantee</h4>
                <p className="text-muted-foreground mb-4">
                  Every chemical we use comes with complete safety documentation, ingredient disclosure, and emergency response information. We can trace every bottle back to its European manufacturing facility. You'll never wonder what's going into your pool.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">100% EU Sourced</Badge>
                  <Badge variant="outline">Full Ingredient Disclosure</Badge>
                  <Badge variant="outline">Safety Data Sheets Provided</Badge>
                  <Badge variant="outline">Batch Tracked & Traceable</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Family Testimonial */}
        <Card className="border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Baby className="h-6 w-6 text-primary" />
                  <Badge>Mother of 3 Children</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  "Finally, I can let my kids swim without worry"
                </h3>
                <p className="text-muted-foreground mb-4">
                  "I'm a mother of three young children (ages 3, 6, and 8) and I was always concerned about the chemicals in our pool. Our previous service used cheap local chemicals that made my youngest's skin red and irritated."
                </p>
                <p className="text-muted-foreground mb-4">
                  "Since switching to Pool Service Bali, the difference is incredible. They showed me all the EU safety certificates, explained exactly what goes into the water, and my kids have had zero skin reactions. My 3-year-old spends hours in the pool now without any issues."
                </p>
                <p className="text-muted-foreground font-semibold">
                  "As a mother, knowing these chemicals are tested safe for children gives me complete peace of mind. It's worth every rupiah."
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">LK</span>
                  </div>
                  <div>
                    <div className="font-semibold">Lisa Kurniawan</div>
                    <div className="text-sm text-muted-foreground">Expat Family, Canggu</div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="font-bold mb-4">Safe for:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Baby className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Babies & Toddlers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Pregnant Women</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Sensitive Skin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Pets & Animals</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs text-muted-foreground">
                    All chemicals certified by European Chemicals Agency (ECHA)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold mb-4">
            Your family deserves the safest pool chemicals available
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't compromise on safety. Get European-certified, family-safe chemicals included in every service package.
          </p>
        </div>
      </div>
    </section>
  );
}
