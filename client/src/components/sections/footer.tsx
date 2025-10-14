import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Droplets } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Pool Cleaning", href: "/pool-cleaner", external: true },
    { label: "Pool Repair", href: "#services", external: false },
    { label: "New Pool Construction", href: "/pool-construction", external: true },
    { label: "Emergency Service", href: "#contact", external: false },
  ];

  const company = [
    { label: "About Us", href: "#hero" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "Pricing", href: "#pricing" },
  ];

  const serviceAreas = [
    "Seminyak",
    "Canggu",
    "Uluwatu",
    "Sanur",
    "Nusa Dua",
    "Jimbaran",
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Pool Service Bali</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional pool maintenance, repair, and construction services for villas, hotels, and homes across Bali.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/62123445566"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <FaWhatsapp className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <FaFacebook className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Pool Service Bali. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy
              </Link>
              <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-refund">
                Refunds
              </Link>
              <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cookies">
                Cookies
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-accessibility">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
