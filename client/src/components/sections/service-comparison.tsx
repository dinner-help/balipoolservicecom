import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ServiceComparison() {
  const features = [
    { name: "Professional EU-Certified Chemicals", us: true, poolBoy: false, diy: false },
    { name: "Digital Service Reports with Photos", us: true, poolBoy: false, diy: false },
    { name: "Real-Time Online Dashboard", us: true, poolBoy: false, diy: false },
    { name: "24/7 Emergency Support", us: true, poolBoy: "maybe", diy: false },
    { name: "Certified Equipment Repairs", us: true, poolBoy: "limited", diy: false },
    { name: "Chemical Traceability & Safety Docs", us: true, poolBoy: false, diy: false },
    { name: "Proactive Equipment Monitoring", us: true, poolBoy: false, diy: false },
    { name: "Guaranteed Service Quality", us: true, poolBoy: false, diy: false },
    { name: "Insurance & Liability Coverage", us: true, poolBoy: false, diy: false },
    { name: "Long-Term Cost Optimization", us: true, poolBoy: false, diy: "trial-error" },
    { name: "Seasonal Weather Adjustments", us: true, poolBoy: "basic", diy: "learning" },
    { name: "Warranty on Repair Work", us: true, poolBoy: false, diy: false },
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />;
    } else if (value === false) {
      return <XCircle className="h-5 w-5 text-destructive/40 mx-auto" />;
    } else if (value === "maybe" || value === "limited" || value === "basic") {
      return <HelpCircle className="h-5 w-5 text-yellow-500 mx-auto" />;
    } else {
      return <span className="text-xs text-muted-foreground text-center block">{value}</span>;
    }
  };

  return (
    <section id="service-comparison" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Bali Pool Service Stands Above the Rest
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our professional service compares to typical pool maintenance options in Bali
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-4 md:p-6 font-bold bg-muted/30 min-w-[200px]">
                    Service Features
                  </th>
                  <th className="p-4 md:p-6 text-center bg-primary/10 min-w-[140px]">
                    <div className="font-bold text-primary mb-1">Bali Pool Service</div>
                    <div className="text-xs text-muted-foreground">Professional</div>
                  </th>
                  <th className="p-4 md:p-6 text-center bg-muted/30 min-w-[140px]">
                    <div className="font-bold mb-1">Local Pool Boys</div>
                    <div className="text-xs text-muted-foreground">Typical</div>
                  </th>
                  <th className="p-4 md:p-6 text-center bg-muted/30 min-w-[140px]">
                    <div className="font-bold mb-1">DIY Maintenance</div>
                    <div className="text-xs text-muted-foreground">Self-Service</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 md:p-6 text-sm font-medium">{feature.name}</td>
                    <td className="p-4 md:p-6 bg-primary/5">{renderIcon(feature.us)}</td>
                    <td className="p-4 md:p-6">{renderIcon(feature.poolBoy)}</td>
                    <td className="p-4 md:p-6">{renderIcon(feature.diy)}</td>
                  </tr>
                ))}
                {/* Investment Row */}
                <tr className="bg-muted/30 font-semibold">
                  <td className="p-4 md:p-6 text-sm">Monthly Investment</td>
                  <td className="p-4 md:p-6 text-center text-sm bg-primary/10">
                    From IDR 1.2M
                  </td>
                  <td className="p-4 md:p-6 text-center text-sm">
                    IDR 800K-1.2M
                  </td>
                  <td className="p-4 md:p-6 text-center text-sm">
                    Variable Costs
                  </td>
                </tr>
                {/* Value Row */}
                <tr className="bg-primary/5">
                  <td className="p-4 md:p-6 text-sm font-bold">True Value & Peace of Mind</td>
                  <td className="p-4 md:p-6 text-center text-sm font-bold text-primary">
                    Priceless
                  </td>
                  <td className="p-4 md:p-6 text-center text-sm text-destructive">
                    Frequent Issues
                  </td>
                  <td className="p-4 md:p-6 text-center text-sm text-destructive">
                    Stressful & Time-Consuming
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Problem Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Pool Boy Problem */}
          <Card className="p-6 border-2 border-destructive/20 bg-destructive/5">
            <h3 className="font-bold text-lg mb-3 text-destructive">The "Pool Boy" Problem</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Unreliable schedules and no-shows</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Unknown chemical sources and quality</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>No accountability or documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Disappear when serious problems arise</span>
              </li>
            </ul>
          </Card>

          {/* DIY Challenge */}
          <Card className="p-6 border-2 border-destructive/20 bg-destructive/5">
            <h3 className="font-bold text-lg mb-3 text-destructive">The DIY Challenge</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Steep learning curve and mistakes</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Time-consuming and physically demanding</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Lack of proper testing equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>Risk of costly equipment damage</span>
              </li>
            </ul>
          </Card>

          {/* Our Advantage */}
          <Card className="p-6 border-2 border-primary/20 bg-primary/5">
            <h3 className="font-bold text-lg mb-3 text-primary">The Bali Pool Service Advantage</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Professional peace of mind</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Transparent, documented service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Long-term cost savings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Guaranteed water quality & safety</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
