import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MapPin, User, Building2, Home } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Testimonials() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah & Michael Thompson",
      location: "Seminyak",
      type: "Private Villa Owner",
      avatar: "ST",
      rating: 5,
      review: "We've been using Pool Service Bali for 18 months and they're simply the best. Every visit is documented with photos sent to our email—we can monitor our pool from Australia! The technician arrives exactly on schedule, tests the water with professional equipment, and sends a detailed report within hours. Never had green water once. Absolute professionals.",
      highlight: "18 months, zero issues"
    },
    {
      name: "David Chen",
      location: "Canggu",
      type: "Investment Property Owner",
      avatar: "DC",
      rating: 5,
      review: "I manage 3 rental villas and Pool Service Bali handles all of them. What impresses me most is their consistency—same technician, same quality, always on time. Guests constantly compliment the crystal-clear water. The monthly reports are perfect for my property management records. Best decision I made was switching to them.",
      highlight: "Managing 3 properties flawlessly"
    },
    {
      name: "Anneke van der Berg",
      location: "Uluwatu",
      type: "Luxury Villa Owner",
      avatar: "AV",
      rating: 5,
      review: "After trying 4 different pool services, I finally found professionals. The difference is night and day—they use actual laboratory testing equipment, not cheap test strips. Every chemical is measured and logged. I receive WhatsApp updates before each visit and detailed reports after. My pool has never looked better, and I spend zero time worrying about it.",
      highlight: "Finally found true professionals"
    },
    {
      name: "James & Rebecca Patterson",
      location: "Sanur",
      type: "Retired Expats",
      avatar: "JP",
      rating: 5,
      review: "We're not tech-savvy, but Pool Service Bali makes everything simple. They send photos and reports we can actually understand. The technician explains everything in plain English, shows us the test results, and even taught us how to read the equipment. Professional, patient, and always punctual. Highly recommended for anyone who values reliability.",
      highlight: "Patient and professional service"
    },
    {
      name: "Komang Ngurah",
      location: "Nusa Dua",
      type: "Hotel Property Manager",
      avatar: "KN",
      rating: 5,
      review: "Managing a 12-room boutique hotel requires impeccable pool maintenance. Pool Service Bali delivers every time—early morning service before guests wake up, digital reports for our records, emergency response when needed. They fixed a pump failure within 3 hours on a Sunday. This level of professionalism is rare in Bali. Worth every rupiah.",
      highlight: "Hotel-grade reliability"
    },
    {
      name: "Sophie Laurent",
      location: "Jimbaran",
      type: "Private Villa Owner",
      avatar: "SL",
      rating: 5,
      review: "I travel 6 months a year and my villa pool is always perfect when I return. The automated reporting system is genius—I get photos and water chemistry data on WhatsApp after every service. When I had an equipment issue while in France, they diagnosed it via video call and fixed it the same day. This is what professional service looks like.",
      highlight: "Perfect even when I'm abroad"
    },
    {
      name: "Robert & Linda Martinez",
      location: "Seminyak",
      type: "Vacation Home Owners",
      avatar: "RM",
      rating: 5,
      review: "We only use our Bali villa 8 weeks per year, but Pool Service Bali maintains it like it's their own. The monthly reports show they're actually doing the work—test results, chemical additions, equipment checks, all documented with timestamps and GPS location. Our property manager loves them too because everything is so organized and professional.",
      highlight: "Trustworthy when we're away"
    },
    {
      name: "Ketut Widjaya",
      location: "Canggu",
      type: "Villa Complex Owner",
      avatar: "KW",
      rating: 5,
      review: "I own 5 villas and Pool Service Bali manages all the pools with incredible efficiency. Same day service, professional equipment, detailed digital reports for each property. They even coordinate with my rental managers to avoid disturbing guests. The chemical subscription saves me time and money. Best pool service company in Bali, hands down.",
      highlight: "5 pools, zero headaches"
    },
    {
      name: "Emma & Tom Wilson",
      location: "Uluwatu",
      type: "Full-Time Residents",
      avatar: "EW",
      rating: 5,
      review: "After 3 years with Pool Service Bali, I can say they're the most professional service we use. Always exactly on time (7 AM Tuesdays like clockwork), same friendly technician who knows our pool inside out, and comprehensive reports every visit. They caught a small leak before it became a major problem. Proactive, professional, reliable—everything you want.",
      highlight: "3 years of perfection"
    },
    {
      name: "Marcus Schmidt",
      location: "Sanur",
      type: "Private Estate Owner",
      avatar: "MS",
      rating: 5,
      review: "German precision meets Balinese service—that's Pool Service Bali. I'm particular about details, and they exceed my standards every time. Laboratory-grade water testing, photo documentation, detailed chemical logs, equipment performance tracking. When they say 'professional,' they mean it. My pool sparkles year-round and I have complete peace of mind.",
      highlight: "Exceeds high standards"
    },
    {
      name: "Priya & Raj Sharma",
      location: "Nusa Dua",
      type: "Investment Villa Owners",
      avatar: "PS",
      rating: 5,
      review: "We manage our rental villa from Singapore and Pool Service Bali makes it effortless. Real-time WhatsApp notifications, photo reports, online payment, everything digital and organized. Guest reviews always mention the pristine pool. They even coordinated a pump replacement while we were traveling—communicated everything, got our approval, fixed it same day. Outstanding service.",
      highlight: "Seamless remote management"
    },
    {
      name: "William & Catherine Jones",
      location: "Jimbaran",
      type: "Luxury Home Owners",
      avatar: "WJ",
      rating: 5,
      review: "We've tried expensive pool services before, but none match Pool Service Bali's professionalism. The technician uses the same equipment I see at luxury hotels—digital testing, professional chemicals, detailed documentation. Reports arrive within 2 hours of service. It's reassuring to have such a reliable, professional team caring for our pool. Highly recommend.",
      highlight: "Luxury hotel-level service"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: User },
    { number: "98%", label: "Client Retention", icon: Star },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "15,000+", label: "Services Completed", icon: Building2 }
  ];

  const locations = [
    { area: "Seminyak", count: 120, icon: MapPin },
    { area: "Canggu", count: 95, icon: MapPin },
    { area: "Uluwatu", count: 78, icon: MapPin },
    { area: "Sanur", count: 82, icon: MapPin },
    { area: "Nusa Dua", count: 65, icon: MapPin },
    { area: "Jimbaran", count: 60, icon: MapPin }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div 
          ref={ref1}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say About Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from villa owners, property managers, and expats across Bali who trust us with their pools.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover-elevate transition-all"
              data-testid={`stat-${index}`}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover-elevate border-2 overflow-hidden transition-all duration-500"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.review}"
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <Star className="h-3 w-3 fill-current" />
                  {testimonial.highlight}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.type}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas with Client Count */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted Across Bali</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center" data-testid={`location-${index}`}>
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <location.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-semibold mb-1">{location.area}</p>
                <p className="text-2xl font-bold text-primary">{location.count}+</p>
                <p className="text-xs text-muted-foreground">Active Clients</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="font-bold text-foreground">Join 500+ satisfied property owners</span> who chose professionalism, reliability, and complete peace of mind. Every service documented. Every promise kept. Every pool perfect.
          </p>
        </div>
      </div>
    </section>
  );
}
