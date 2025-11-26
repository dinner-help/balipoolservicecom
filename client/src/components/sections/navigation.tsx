import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatedLogo } from "@/components/animated-logo";
import { useLocation, Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

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
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setIsMobileMenuOpen(false);
  };

  const servicePages = [
    { name: "Pool Cleaning", path: "/pool-cleaning-service-bali" },
    { name: "Weekly Maintenance", path: "/weekly-pool-maintenance-bali" },
    { name: "Green Pool Recovery", path: "/green-pool-cleaning-bali" },
    { name: "Chemical Balancing", path: "/chemical-balancing-service-bali" },
    { name: "Pool Repair", path: "/swimming-pool-repair-bali" },
    { name: "Pump Repair", path: "/pool-pump-repair-bali" },
    { name: "Filter Cleaning", path: "/pool-filter-cleaning-repair-bali" },
    { name: "Emergency Service", path: "/emergency-pool-repair-bali" },
  ];

  const contractPages = [
    { name: "Villa Pool Service", path: "/villa-pool-service-bali" },
    { name: "Hotel & Resort", path: "/hotel-resort-pool-service-bali" },
    { name: "Property Managers", path: "/property-manager-pool-service-bali" },
    { name: "Commercial Pools", path: "/commercial-hotel-pool-service-bali" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
      style={{ backgroundColor: '#FFFFFF' }}
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

          {/* Desktop Navigation - Ultra Clean */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {/* Home */}
            <Link href="/">
              <button
                className="text-sm text-gray-900 hover:text-primary transition-colors font-medium px-3 py-2"
                data-testid="link-home"
              >
                Home
              </button>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-sm text-gray-900 hover:text-primary transition-colors font-medium px-3 py-2 flex items-center gap-1"
                  data-testid="button-services-dropdown"
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Pool Services</DropdownMenuLabel>
                {servicePages.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link href={service.path} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground">Service Contracts</DropdownMenuLabel>
                {contractPages.map((contract) => (
                  <DropdownMenuItem key={contract.path} asChild>
                    <Link href={contract.path} className="cursor-pointer">
                      {contract.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pricing */}
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-gray-900 hover:text-primary transition-colors font-medium px-3 py-2"
              data-testid="link-pricing"
            >
              Pricing
            </button>

            {/* WhatsApp CTA Button */}
            <Button
              onClick={() => window.open("https://wa.me/6282237565997", "_blank")}
              className="gap-2 bg-black hover:bg-gray-800 text-white ml-2"
              size="sm"
              data-testid="button-whatsapp-nav"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>Contact Us</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              onClick={() => window.open("https://wa.me/6282237565997", "_blank")}
              size="sm"
              className="gap-1.5 bg-black hover:bg-gray-800 text-white h-9 px-3"
              data-testid="button-whatsapp-mobile-header"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span className="text-xs">Contact</span>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-900" />
              ) : (
                <Menu className="h-5 w-5 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4 px-2">
            <div className="space-y-1">
              <Link href="/">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                  data-testid="mobile-link-home"
                >
                  Home
                </button>
              </Link>
              
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services</div>
                <div className="grid grid-cols-2 gap-1">
                  {servicePages.map((service) => (
                    <Link key={service.path} href={service.path}>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        {service.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Contracts</div>
                <div className="grid grid-cols-2 gap-1">
                  {contractPages.map((contract) => (
                    <Link key={contract.path} href={contract.path}>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        {contract.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  scrollToSection("pricing");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                data-testid="mobile-link-pricing"
              >
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
