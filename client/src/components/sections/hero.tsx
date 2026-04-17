import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowDown, Clock, Shield, CheckCircle } from "lucide-react";
import heroBackground from "@assets/stock_images/luxury_swimming_pool_5cf994db.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* White overlay to make background subtle */}
      <div className="absolute inset-0 bg-white/85" />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8" data-testid="badge-trust">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary" data-testid="text-24hr-response">24-Hour Emergency Response</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm font-semibold text-primary" data-testid="text-professional">Professional Service</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm font-semibold text-primary" data-testid="text-number-one">Bali's #1 Pool Care</span>
          </div>

          {/* Main Headline - SEO Optimized */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-hero">
            <span className="text-foreground">Professional Pool Cleaning & Maintenance Across Bali - </span>
            <span className="text-primary">Seminyak, Canggu, Ubud & All Areas</span>
          </h1>

          {/* Subheadline - SEO Enhanced with Location Keywords */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Expert pool cleaning and maintenance services serving Seminyak, Canggu, Ubud, Sanur, Kuta, Denpasar, Jimbaran, Nusa Dua, and Legian. Same-day service, EU-certified chemicals, and professional care for villas, resorts, and rental properties across Bali.
          </p>
          
          {/* Supporting line */}
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto italic">
            Because your pool should be your greatest asset, not your biggest headache.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
              className="gap-2 text-lg px-8 py-6 h-auto"
              data-testid="button-whatsapp-hero"
            >
              <FaWhatsapp className="h-6 w-6" />
              Get Free Quote via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToHowItWorks}
              className="gap-2 text-lg px-8 py-6 h-auto backdrop-blur-sm"
              data-testid="button-learn-more"
            >
              See How It Works
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground" data-testid="indicator-pricing">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>All-Inclusive Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground" data-testid="indicator-technicians">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Professional Technicians</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground" data-testid="indicator-same-day">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
