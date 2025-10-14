import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme-toggle";

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
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
            data-testid="link-logo"
          >
            Pool Service Bali
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => window.open("https://wa.me/62123445566", "_blank")}
              className="gap-2"
              data-testid="button-whatsapp-nav"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button
                onClick={() => window.open("https://wa.me/62123445566", "_blank")}
                className="gap-2 w-full"
                data-testid="button-whatsapp-mobile"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
