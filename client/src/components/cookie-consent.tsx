import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "wouter";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="max-w-5xl mx-auto p-6 md:p-8 bg-card border shadow-2xl">
        <button
          onClick={declineCookies}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
          data-testid="button-cookie-close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-shrink-0">
            <Cookie className="h-12 w-12 text-primary" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences anytime.{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline" data-testid="link-cookie-policy">
                Learn more in our Cookie Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="w-full sm:w-auto"
              data-testid="button-cookie-decline"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              data-testid="button-cookie-accept"
            >
              Accept All
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
