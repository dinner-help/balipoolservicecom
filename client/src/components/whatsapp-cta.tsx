import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessageCircle } from "lucide-react";

interface WhatsAppCTAProps {
  variant?: "hero" | "section" | "pricing" | "inline" | "footer" | "compact";
  message?: string;
  buttonText?: string;
  className?: string;
  showPhone?: boolean;
  service?: string;
  location?: string;
}

const PHONE_NUMBER = "6282237565997";
const DISPLAY_PHONE = "+62 822-3756-5997";

export function WhatsAppCTA({
  variant = "section",
  message,
  buttonText,
  className = "",
  showPhone = true,
  service = "pool service",
  location = "Bali",
}: WhatsAppCTAProps) {
  const defaultMessage = message || `Hi! I'm interested in ${service} in ${location}. Can you send me pricing information?`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

  const getButtonText = () => {
    if (buttonText) return buttonText;
    switch (variant) {
      case "hero":
        return "Get Free Quote on WhatsApp";
      case "pricing":
        return "Book This Package";
      case "compact":
        return "WhatsApp Us";
      case "footer":
        return "Contact Us Now";
      default:
        return "Get Started on WhatsApp";
    }
  };

  if (variant === "hero") {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <Button
          size="lg"
          className="gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
          asChild
          data-testid="button-whatsapp-hero"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-6 w-6" />
            {getButtonText()}
          </a>
        </Button>
        {showPhone && (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Or call/text: <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-primary hover:underline">{DISPLAY_PHONE}</a>
          </p>
        )}
        <p className="text-xs text-muted-foreground">Fast response • Free quotes • No obligation</p>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6 md:p-8 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground">Contact us on WhatsApp for a free quote within 30 minutes</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="gap-2 bg-green-600 hover:bg-green-700 text-white"
              asChild
              data-testid="button-whatsapp-section"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5" />
                {getButtonText()}
              </a>
            </Button>
            {showPhone && (
              <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {DISPLAY_PHONE}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "pricing") {
    return (
      <Button
        className={`w-full gap-2 bg-green-600 hover:bg-green-700 text-white ${className}`}
        asChild
        data-testid="button-whatsapp-pricing"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-5 w-5" />
          {getButtonText()}
        </a>
      </Button>
    );
  }

  if (variant === "compact") {
    return (
      <Button
        size="sm"
        className={`gap-2 bg-green-600 hover:bg-green-700 text-white ${className}`}
        asChild
        data-testid="button-whatsapp-compact"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-4 w-4" />
          {getButtonText()}
        </a>
      </Button>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`bg-primary/5 border border-primary/20 rounded-xl p-8 text-center ${className}`}>
        <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">Questions? We're Here to Help</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Get personalized advice and a custom quote for your pool. Our team responds within 30 minutes during business hours.
        </p>
        <Button
          size="lg"
          className="gap-3 bg-green-600 hover:bg-green-700 text-white px-8"
          asChild
          data-testid="button-whatsapp-footer"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-5 w-5" />
            {getButtonText()}
          </a>
        </Button>
        {showPhone && (
          <p className="mt-4 text-sm text-muted-foreground">
            Direct line: <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-primary hover:underline">{DISPLAY_PHONE}</a>
          </p>
        )}
      </div>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium ${className}`}
      data-testid="link-whatsapp-inline"
    >
      <FaWhatsapp className="h-4 w-4" />
      {getButtonText()}
    </a>
  );
}

export default WhatsAppCTA;
