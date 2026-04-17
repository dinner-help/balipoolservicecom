import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Users, Award, Clock, MapPin, Phone, Briefcase, GraduationCap, Star, Droplets } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import madeWirawanImg from "@assets/generated_images/made_wirawan_support_agent.png";
import kadekPramanaImg from "@assets/generated_images/kadek_pramana_support_agent.png";
import wayanSantikaImg from "@assets/generated_images/wayan_santika_support_agent.png";
import poolConstructionWorker from "@assets/generated_images/pool_construction_worker_bali.png";
import teamWorkingImg from "@assets/stock_images/indonesian_team_work_50ef183a.jpg";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bali Pool Service",
    "description": "Professional pool cleaning, maintenance, and construction services across Bali. Family-owned business with 10+ years of experience serving villas, hotels, and private homes.",
    "url": "https://balipoolservice.com/about",
    "telephone": "+6282340709041",
    "email": "info@poolservicebali.com",
    "priceRange": "IDR 800,000 - IDR 2,800,000",
    "foundingDate": "2014",
    "founder": {
      "@type": "Person",
      "name": "I Wayan Sudira",
      "jobTitle": "Founder & Head Technician"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denpasar",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "areaServed": [
      { "@type": "City", "name": "Canggu" },
      { "@type": "City", "name": "Seminyak" },
      { "@type": "City", "name": "Ubud" },
      { "@type": "City", "name": "Sanur" },
      { "@type": "City", "name": "Kuta" },
      { "@type": "City", "name": "Denpasar" },
      { "@type": "City", "name": "Jimbaran" },
      { "@type": "City", "name": "Nusa Dua" },
      { "@type": "City", "name": "Uluwatu" }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 15,
      "maxValue": 20
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "200"
    },
    "openingHours": "Mo-Su 00:00-23:59"
  };

  const teamMembers = [
    {
      name: "I Wayan Sudira",
      role: "Founder & Head Technician",
      image: poolConstructionWorker,
      bio: "With over 15 years in pool maintenance across Bali, Wayan founded Bali Pool Service in 2014. He holds certifications in pool water chemistry and equipment maintenance from the Indonesia Pool & Spa Association.",
      certifications: ["Certified Pool Operator (CPO)", "Water Chemistry Specialist", "Equipment Installation Expert"]
    },
    {
      name: "Made Wirawan",
      role: "Customer Support & Service Coordinator",
      image: madeWirawanImg,
      bio: "Made ensures every client receives prompt, professional service. He coordinates our team of technicians and manages scheduling across all service areas in Bali.",
      certifications: ["Customer Service Excellence", "Service Coordination"]
    },
    {
      name: "Kadek Pramana",
      role: "Senior Pool Technician",
      image: kadekPramanaImg,
      bio: "Kadek specializes in pool equipment repair and installation. With 8 years of experience, he leads our team handling complex repairs and new pool construction projects.",
      certifications: ["Equipment Repair Specialist", "Pool Construction Certified"]
    },
    {
      name: "Wayan Santika",
      role: "Villa & Resort Account Manager",
      image: wayanSantikaImg,
      bio: "Wayan manages our hospitality accounts, ensuring hotels and villas receive premium service standards. She works closely with property managers across Bali.",
      certifications: ["Hospitality Service Management", "Property Care Coordination"]
    }
  ];

  const milestones = [
    { year: "2014", event: "Founded in Canggu by I Wayan Sudira, starting with 5 villa clients" },
    { year: "2016", event: "Expanded to Seminyak and Ubud, grew team to 8 technicians" },
    { year: "2018", event: "First hotel contracts with boutique properties in Nusa Dua" },
    { year: "2020", event: "Launched emergency 24/7 response service during challenging times" },
    { year: "2022", event: "Added pool construction and cold plunge installation services" },
    { year: "2024", event: "Serving 500+ clients across all Bali regions with 18 team members" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Bali Pool Service | Bali's Trusted Pool Cleaning Team — 10+ Years, 500+ Clients</title>
        <meta 
          name="description" 
          content="Meet the team behind Bali's most trusted pool service. Family-owned since 2014, certified pool technicians, serving 500+ villas, hotels & homes across Canggu, Seminyak, Ubud & all of Bali. We live and breathe pool care in Bali's tropical climate." 
        />
        <link rel="canonical" href="https://balipoolservice.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Bali Pool Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Family-owned pool care company serving Bali since 2014. We combine local expertise 
              with professional standards to keep your pool crystal clear.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">All Bali Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bali Pool Service began in 2014 when founder I Wayan Sudira noticed a gap in professional 
                  pool care across Bali's growing villa rental market. Starting with just 5 clients in Canggu, 
                  Wayan built a reputation for reliable, thorough service that property owners could trust.
                </p>
                <p>
                  As expat villa owners and boutique hotels discovered the difference professional pool 
                  maintenance makes, word spread quickly. By 2018, we had expanded to serve all major 
                  areas of Bali, from Uluwatu to Ubud.
                </p>
                <p>
                  Today, our team of 18 certified technicians maintains over 500 pools across Bali. 
                  We've added pool construction, equipment repair, and cold plunge installation to 
                  become your complete pool care partner.
                </p>
                <p className="font-medium text-gray-900">
                  Every pool we care for receives the same attention we'd give our own. That's the 
                  Bali Pool Service promise.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamWorkingImg} 
                alt="Bali Pool Service team maintaining a villa pool" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Pools Maintained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              A decade of growth serving Bali's pool care needs
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-20">
                    <div className="bg-primary text-white font-bold py-2 px-3 rounded-lg text-center">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certified professionals dedicated to keeping your pool pristine. 
              Every team member undergoes rigorous training in pool chemistry, equipment, and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at Bali Pool Service`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Standards & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest professional standards in pool care, 
              backed by industry certifications and ongoing training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Pool Operators</h3>
                <p className="text-sm text-gray-600">
                  Our lead technicians hold Certified Pool Operator (CPO) credentials, 
                  the industry standard for professional pool maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Water Chemistry Experts</h3>
                <p className="text-sm text-gray-600">
                  Every technician is trained in water chemistry balance, ensuring safe 
                  pH levels, chlorine management, and algae prevention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safety Compliant</h3>
                <p className="text-sm text-gray-600">
                  We follow Indonesian health and safety regulations for pool maintenance, 
                  chemical handling, and equipment operation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">18</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-gray-600">Bali Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Bali
            </h2>
            <p className="text-lg text-gray-600">
              Our technicians are strategically located across Bali for fast response times
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Canggu", href: "/location-canggu" },
              { name: "Seminyak", href: "/location-seminyak" },
              { name: "Ubud", href: "/location-ubud" },
              { name: "Sanur", href: "/location-sanur" },
              { name: "Nusa Dua", href: "/location-nusa-dua" },
              { name: "Uluwatu", href: "/location-uluwatu" },
              { name: "Jimbaran", href: "/location-jimbaran" },
              { name: "Kuta", href: "/location-kuta" },
              { name: "Legian", href: "/location-legian" },
              { name: "Denpasar", href: "/location-denpasar" },
              { name: "Kerobokan", href: "/location-kerobokan" },
              { name: "Pererenan", href: "/location-pererenan" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{area.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Professional Pool Care?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ property owners who trust Bali Pool Service for crystal clear pools. 
            Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 gap-2"
              onClick={() => window.open("https://wa.me/6282340709041?text=Hi!%20I%27d%20like%20a%20quote%20for%20pool%20service.", "_blank")}
              data-testid="button-about-whatsapp"
            >
              <FaWhatsapp className="h-5 w-5" />
              Get Free Quote on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 gap-2"
              asChild
            >
              <Link href="/pricing">
                View Our Pricing
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <Phone className="h-4 w-4" />
            <span>Call us: +62 823 4070 9041</span>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Page last updated: December 2024
        </p>
      </section>

      <Footer />
    </div>
  );
}
