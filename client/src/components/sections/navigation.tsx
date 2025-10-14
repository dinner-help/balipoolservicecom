import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatedLogo } from "@/components/animated-logo";
import { useLocation } from "wouter";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    // If we're on the home page, scroll to section
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If we're on another page, navigate to home page with hash
      window.location.href = `/#${id}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      // Already on home page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // On another page, navigate to home
      window.location.href = "/";
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
    { label: "Coverage", id: "service-areas" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="hover-elevate active-elevate-2 px-1 sm:px-2 py-1 rounded-md transition-all block"
            data-testid="link-logo"
          >
            <AnimatedLogo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs lg:text-sm text-foreground hover:text-primary transition-colors font-medium px-2 lg:px-3"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-4 w-px bg-border mx-1" />
            <Button
              onClick={() => alert("Customer portal coming soon! For now, please contact us via WhatsApp for service reports and account access.")}
              variant="outline"
              size="sm"
              className="gap-1 text-xs h-8 px-3"
              data-testid="button-customer-login"
            >
              <span>Login</span>
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/62123445566", "_blank")}
              className="gap-1 text-xs h-8 px-3"
              size="sm"
              data-testid="button-whatsapp-nav"
            >
              <FaWhatsapp className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              onClick={() => window.open("https://wa.me/62123445566", "_blank")}
              size="sm"
              className="gap-1 text-xs h-8 px-2"
              data-testid="button-whatsapp-mobile-header"
            >
              <FaWhatsapp className="h-3.5 w-3.5" />
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 border-t">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors font-medium"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  alert("Customer portal coming soon! For now, please contact us via WhatsApp for service reports and account access.");
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                size="sm"
                className="mt-2 text-xs h-8"
                data-testid="button-customer-login-mobile"
              >
                Customer Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
