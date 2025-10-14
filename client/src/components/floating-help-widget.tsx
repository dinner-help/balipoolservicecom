import { useState, useEffect } from "react";
import { X, MessageCircle, Phone, Calendar, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const messages = [
  {
    icon: MessageCircle,
    title: "Need Help With Your Pool?",
    subtitle: "Chat with our pool experts now",
    cta: "Talk With Us",
    link: "#contact",
  },
  {
    icon: Calculator,
    title: "What Does Pool Service Cost?",
    subtitle: "Get instant pricing for your property",
    cta: "See Pricing",
    link: "#pricing",
  },
  {
    icon: Calendar,
    title: "Ready to Get Started?",
    subtitle: "Order professional pool service today",
    cta: "Schedule Service",
    link: "#contact",
  },
  {
    icon: Phone,
    title: "Questions About Your Pool?",
    subtitle: "Our experts are standing by",
    cta: "Contact Us Now",
    link: "#contact",
  },
];

export function FloatingHelpWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Don't show if user has interacted
    if (hasInteracted) return;

    // Show widget every 25 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      // Rotate to next message
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 25000);

    // Show first message after 5 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  const currentMessage = messages[currentMessageIndex];
  const Icon = currentMessage.icon;

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-500"
      data-testid="floating-help-widget"
    >
      <Card className="w-80 shadow-2xl border-2 border-primary/20 bg-card overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 h-6 w-6 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          data-testid="button-close-widget"
          aria-label="Close help widget"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Icon with pulse animation */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="relative bg-primary/10 p-4 rounded-full border-2 border-primary/30">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Text */}
          <h3 className="text-lg font-bold text-center mb-2">
            {currentMessage.title}
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            {currentMessage.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            className="w-full animate-pulse hover:animate-none"
            size="lg"
            asChild
          >
            <a
              href={currentMessage.link}
              onClick={handleCTAClick}
              data-testid={`button-widget-${currentMessage.cta.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {currentMessage.cta}
            </a>
          </Button>
        </div>

        {/* Bottom gradient accent */}
        <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-cyan-500" />
      </Card>
    </div>
  );
}
