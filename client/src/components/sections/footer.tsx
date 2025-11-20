import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Droplets, Mail, Phone, MapPin, ArrowRight, CheckCircle2, Shield, Award, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: "Pool Cleaning & Maintenance", href: "/pool-cleaner" },
    { label: "Pool Repair & Renovation", href: "/pool-repair" },
    { label: "New Pool Construction", href: "/pool-construction" },
    { label: "Equipment Installation", href: "#services" },
    { label: "Emergency Service 24/7", href: "#contact" },
    { label: "Chemical Delivery", href: "#services" },
  ];

  const company = [
    { label: "About Us", href: "#hero" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "Pricing Plans", href: "#pricing" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const resources = [
    { label: "Pool Care Blog", href: "#" },
    { label: "Maintenance Guide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Video Tutorials", href: "#" },
    { label: "Pool Calculator", href: "#" },
    { label: "Customer Portal", href: "#" },
  ];

  const serviceAreas = [
    { name: "Seminyak", href: "#service-areas" },
    { name: "Canggu", href: "#service-areas" },
    { name: "Uluwatu", href: "#service-areas" },
    { name: "Sanur", href: "#service-areas" },
    { name: "Nusa Dua", href: "#service-areas" },
    { name: "Jimbaran", href: "#service-areas" },
    { name: "Ubud", href: "#service-areas" },
    { name: "Pererenan", href: "#service-areas" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t">
      {/* Newsletter & CTA Section */}
      <div className="border-b bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Get Pool Care Tips & Exclusive Offers
              </h3>
              <p className="text-muted-foreground mb-6">
                Join 500+ pool owners receiving weekly maintenance tips and special discounts.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" className="group" data-testid="button-newsletter-subscribe">
                  {isSubscribed ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
              <h4 className="text-xl font-bold mb-3">Need Immediate Pool Service?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is ready to help. Get a free quote in 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" className="flex-1 group" asChild>
                  <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href="tel:+6282237565997">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - 5 Column Mega Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-bold">Pool Service Bali</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Bali's trusted pool maintenance experts since 2010. Professional service for villas, hotels, and homes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+6282237565997" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+62 822 3756 5997</span>
              </a>
              <a href="mailto:info@balipoolservice.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>info@balipoolservice.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Raya Seminyak No. 108<br />Badung, Bali 80361</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/6282237565997"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
                data-testid="link-footer-youtube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={scrollToTop}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Service Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <a
                    href={area.href}
                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#service-areas"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-sm text-primary hover:underline mt-3 inline-block font-medium cursor-pointer"
            >
              View All Areas →
            </a>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="py-8 mb-8 border-y">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">Licensed & Insured</p>
              <p className="text-xs text-muted-foreground">Fully Certified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">15+ Years</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">500+ Pools</p>
              <p className="text-xs text-muted-foreground">Serviced Monthly</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">24/7 Emergency</p>
              <p className="text-xs text-muted-foreground">Response</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Legal & Copyright */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="text-center sm:text-left">
                © {currentYear} Pool Service Bali. All rights reserved.
              </p>
              <span className="hidden sm:inline">•</span>
              <p className="text-center sm:text-left">Proudly Serving Bali Since 2010</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/terms" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </Link>
              <Link href="/privacy" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-refund">
                Refund Policy
              </Link>
              <Link href="/cookie-policy" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cookies">
                Cookie Policy
              </Link>
              <Link href="/accessibility" onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-accessibility">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
