import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle2, Star, Leaf, Waves, Sunrise } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function PererenanPoolCleaning() {
  const services = [
    "Beachfront villa pool maintenance",
    "Rice paddy view property service",
    "Eco-friendly pool treatment options",
    "Organic debris management",
    "Saltwater pool systems",
    "Surf retreat pool contracts"
  ];

  const neighborhoods = [
    "Pererenan Beach", "Seseh", "Cemagi", "Munggu",
    "Tanah Lot area", "Tabanan border", "North Canggu", "Echo Beach north"
  ];

  const localChallenges = [
    {
      title: "Rural Coastal Location",
      description: "Pererenan's quieter, more rural setting between rice paddies and ocean brings unique challenges. Organic debris from paddies and salt spray from the coast require specialized maintenance approaches.",
      icon: Leaf
    },
    {
      title: "Surf Retreat Properties",
      description: "Many Pererenan properties cater to surfers with high-turnover guests who use pools frequently. We ensure pools are always crystal clear and safe for your active guests.",
      icon: Waves
    },
    {
      title: "Eco-Conscious Community",
      description: "Pererenan attracts environmentally-conscious travelers. We offer mineral-based and low-chlorine alternatives that are gentler on both swimmers and the surrounding ecosystem.",
      icon: Sunrise
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pool Cleaning Pererenan Bali | Beachfront Villa & Surf Retreat Pool Service</title>
        <meta name="description" content="Expert pool cleaning in Pererenan for beachfront villas, surf retreats & eco-properties. Organic debris management, eco-friendly chemical options. From IDR 800K/month. Call: +62 823-2301-1656" />
        <meta name="keywords" content="pool cleaning pererenan, pererenan pool maintenance, seseh pool service, surf retreat pool cleaning, eco pool maintenance bali, cemagi pool cleaner" />
        <link rel="canonical" href="https://balipoolservice.com/location-pererenan" />
      </Helmet>

      <Navigation />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Pererenan Pool Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Eco-Friendly Pool Care for Pererenan Beachfront Villas
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Specialized pool maintenance for Pererenan's beautiful beachfront and rice paddy properties. Eco-conscious options, reliable service, and expertise in managing coastal pool challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white gap-2" asChild>
                  <a href="https://wa.me/6282323011656?text=Hello!%20I%20need%20pool%20service%20in%20Pererenan">
                    <FaWhatsapp className="h-5 w-5" />
                    WhatsApp: +62 823-2301-1656
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Challenges */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Pererenan Pools Need Special Care
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {localChallenges.map((challenge, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
                    <p className="text-foreground/70">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pool Services in Pererenan & Seseh
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Areas We Service Near Pererenan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {neighborhoods.map((area, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-card rounded-lg border text-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28 bg-accent/5" id="pricing">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pererenan Pool Maintenance Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Silver</h3>
                  <div className="text-3xl font-bold text-primary mb-6">IDR 800,000<span className="text-sm font-normal text-foreground/60">/mo</span></div>
                  <ul className="space-y-3 text-sm text-foreground/80 mb-6 text-left">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />1x weekly service</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Chemicals included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />WhatsApp reports</li>
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white gap-2" asChild>
                    <a href="https://wa.me/6282323011656?text=Hi!%20I%20want%20the%20Silver%20package%20for%20Pererenan">
                      <FaWhatsapp className="h-4 w-4" />Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">Popular</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Gold</h3>
                  <div className="text-3xl font-bold text-primary mb-6">IDR 1,500,000<span className="text-sm font-normal text-foreground/60">/mo</span></div>
                  <ul className="space-y-3 text-sm text-foreground/80 mb-6 text-left">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />2x weekly service</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />All chemicals included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Monthly deep filter cleaning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Priority response</li>
                  </ul>
                  <Button className="w-full gap-2" asChild>
                    <a href="https://wa.me/6282323011656?text=Hi!%20I%20want%20the%20Gold%20package%20for%20Pererenan">
                      <FaWhatsapp className="h-4 w-4" />Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Platinum</h3>
                  <div className="text-3xl font-bold text-primary mb-6">IDR 2,800,000<span className="text-sm font-normal text-foreground/60">/mo</span></div>
                  <ul className="space-y-3 text-sm text-foreground/80 mb-6 text-left">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />4x weekly service</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Dedicated technician</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />2-hour emergency</li>
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white gap-2" asChild>
                    <a href="https://wa.me/6282323011656?text=Hi!%20I%20want%20the%20Platinum%20package%20for%20Pererenan">
                      <FaWhatsapp className="h-4 w-4" />Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pool Service in Other Bali Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Canggu", path: "/location-canggu" },
                { name: "Seminyak", path: "/location-seminyak" },
                { name: "Sanur", path: "/location-sanur" },
                { name: "Ubud", path: "/location-ubud" },
                { name: "Uluwatu", path: "/location-uluwatu" },
                { name: "Jimbaran", path: "/location-jimbaran" },
                { name: "Nusa Dua", path: "/location-nusa-dua" },
                { name: "Kerobokan", path: "/location-kerobokan" },
              ].map((loc) => (
                <Link key={loc.name} href={loc.path}>
                  <Card className="hover-elevate cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                      <span className="text-foreground font-medium">{loc.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Crystal Clear Water in Pererenan?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Send us your pool photos and get a free quote today.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white gap-2" asChild>
              <a href="https://wa.me/6282323011656?text=Hi!%20I%20need%20pool%20service%20in%20Pererenan.">
                <FaWhatsapp className="h-5 w-5" />
                Get Free Quote on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
