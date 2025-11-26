import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Droplets, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "All Services", href: "/#services" },
    { label: "Pool Cleaning", href: "/pool-cleaning-service-bali" },
    { label: "Pool Maintenance", href: "/weekly-pool-maintenance-bali" },
    { label: "Green Pool Cleaning", href: "/green-pool-cleaning-bali" },
    { label: "Pool Repairs", href: "/swimming-pool-repair-bali" },
    { label: "Chemical Management", href: "/chemical-balancing-service-bali" },
    { label: "Hotel & Resort Contracts", href: "/hotel-resort-pool-service-bali" },
    { label: "Emergency Pool Repair", href: "/emergency-pool-repair-bali" },
    { label: "Pump Repair", href: "/pool-pump-repair-bali" },
    { label: "Filter Cleaning", href: "/pool-filter-cleaning-repair-bali" },
    { label: "Pool Construction", href: "/pool-construction-bali" },
    { label: "Cold Plunge Installation", href: "/cold-plunge-bali" },
  ];

  const serviceAreas = [
    { name: "Canggu", href: "/location-canggu" },
    { name: "Seminyak", href: "/location-seminyak" },
    { name: "Uluwatu", href: "/location-uluwatu" },
    { name: "Jimbaran", href: "/location-jimbaran" },
    { name: "Sanur", href: "/location-sanur" },
    { name: "Ubud", href: "/location-ubud" },
    { name: "Denpasar", href: "/location-denpasar" },
    { name: "Nusa Dua", href: "/location-nusa-dua" },
    { name: "Kuta", href: "/location-kuta" },
    { name: "Legian", href: "/location-legian" },
    { name: "Kerobokan", href: "/location-kerobokan" },
    { name: "Pererenan", href: "/location-pererenan" },
  ];

  const companyInfo = [
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "WhatsApp", href: "https://wa.me/6282237565997", external: true },
    { label: "Opening Hours", href: "/#contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Accessibility", href: "/accessibility" },
  ];

  const helpInfo = [
    { label: "FAQ", href: "/faq" },
    { label: "Maintenance Checklist", href: "/maintenance-guide" },
    { label: "Pool Troubleshooting", href: "/pool-repair" },
    { label: "Green Pool Guide", href: "/blog-green-pool-cleaning-guide" },
    { label: "Pool Calculator", href: "/pool-calculator" },
    { label: "Video Tutorials", href: "/video-tutorials" },
    { label: "Chemical Safety", href: "/#chemical-safety" },
    { label: "Water Testing Standards", href: "/pool-water-testing-service-bali" },
    { label: "Pool Care Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content - 4 Column Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Main Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">Main Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Service Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-footer-${area.name.toLowerCase()}`}
                  >
                    Pool Service {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {companyInfo.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Help & Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">Help & Info</h3>
            <ul className="space-y-3">
              {helpInfo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Company Logo & Info */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-bold text-white">Pool Service Bali</span>
                <p className="text-xs text-gray-400">Professional Pool Care</p>
              </div>
            </div>
            
            {/* Phone */}
            <a href="tel:+6282237565997" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+62 822 3756 5997</span>
            </a>
            
            {/* Email */}
            <a href="mailto:info@poolservicebali.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="text-sm">info@poolservicebali.com</span>
            </a>
            
            {/* Hours */}
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="h-5 w-5" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6282237565997"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Serving all of Bali, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© {currentYear} Pool Service Bali. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
