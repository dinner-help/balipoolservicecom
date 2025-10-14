import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/animated-logo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
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
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all"
            data-testid="link-logo"
          >
            <AnimatedLogo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground hover:text-primary transition-colors font-medium px-2"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-4 w-px bg-border mx-1" />
            <ThemeToggle />
            <Button
              onClick={() => window.open("https://wa.me/62123445566", "_blank")}
              className="gap-2"
              size="sm"
              data-testid="button-whatsapp-nav"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://wa.me/62123445566", "_blank")}
                className="gap-2 mt-2"
                size="sm"
                data-testid="button-whatsapp-mobile"
              >
                <FaWhatsapp className="h-4 w-4" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
