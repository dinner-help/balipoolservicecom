import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Search, HelpCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function FAQ() {
  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What areas in Bali do you service?",
          a: "We provide professional pool service across 50+ areas in Bali, including all major tourist and residential areas: Seminyak, Canggu, Ubud, Sanur, Kuta, Nusa Dua, Uluwatu, Jimbaran, Denpasar, and many more. We serve South Bali, Central Bali, East Bali, North Bali, West Bali, and the islands. Each area has a dedicated local manager for personalized service."
        },
        {
          q: "How quickly can you respond to service requests?",
          a: "For routine maintenance, we typically schedule within 24-48 hours. For emergency repairs (equipment failure, severe leaks, green pool), we offer same-day service in most areas. Contact us via WhatsApp at +62 822 3756 5997 for urgent requests."
        },
        {
          q: "Do you service both residential and commercial pools?",
          a: "Yes! We service all types of pools: private villas, hotels, resorts, vacation rentals, apartments, water parks, and public pools. We offer specialized packages for villa management companies and hospitality properties with multiple pools."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash (IDR), bank transfer to Indonesian accounts, and international transfers. Monthly subscription clients receive invoices via email with flexible payment terms."
        }
      ]
    },
    {
      category: "Service & Pricing",
      icon: Search,
      questions: [
        {
          q: "How much does pool maintenance cost in Bali?",
          a: "Weekly maintenance starts at 500K IDR per visit for standard residential pools. Monthly packages range from 1.8M IDR (weekly service) to 6.5M IDR (premium daily service). Pricing depends on pool size, service frequency, and location. Commercial properties and multi-pool portfolios receive custom quotes."
        },
        {
          q: "What's included in a standard maintenance visit?",
          a: "Each visit includes: surface skimming, vacuuming, brushing walls and steps, emptying skimmer and pump baskets, backwashing filter, water testing (pH, chlorine, alkalinity), chemical balancing, equipment inspection, and a written service report. Premium packages include algae treatment, shock treatment, and tile cleaning."
        },
        {
          q: "Do I need to be home during service?",
          a: "No. Most clients provide gate access or a key lockbox. Our insured technicians work independently and send photo reports after each visit via WhatsApp. You can track everything remotely."
        },
        {
          q: "Can I pause service when traveling?",
          a: "Yes. Monthly subscribers can pause service with 7 days notice. However, we recommend reduced frequency rather than complete pausing, as Bali's climate can turn a pool green in just 7-10 days without maintenance."
        },
        {
          q: "What if I'm not satisfied with the service?",
          a: "We guarantee your satisfaction. If you're not happy with any service visit, contact us within 24 hours and we'll return to address issues at no charge. Monthly subscribers can cancel anytime with 30 days notice."
        }
      ]
    },
    {
      category: "Pool Maintenance",
      icon: MessageCircle,
      questions: [
        {
          q: "How often should I service my pool in Bali?",
          a: "Bali's tropical climate requires more frequent maintenance than temperate climates. We recommend: Weekly service for residential pools with regular use, Twice weekly for high-traffic pools (rentals, hotels), Daily service for commercial properties. Pools can turn green in 7-10 days without service due to heat, humidity, and monsoon rains."
        },
        {
          q: "Why does my pool turn green so quickly in Bali?",
          a: "Bali's year-round heat (28-32°C), high humidity, intense sun, and seasonal monsoon rains create perfect conditions for algae growth. Warm water reduces chlorine effectiveness, requiring more frequent testing and balancing than pools in cooler climates."
        },
        {
          q: "What chemicals do I need for my pool?",
          a: "Essential chemicals: Chlorine (tablets or liquid), pH increaser/decreaser, Alkalinity increaser, Calcium hardness increaser, Algaecide, and Shock treatment. We offer chemical subscription packages with automatic delivery and 15% savings on products."
        },
        {
          q: "Should I use a saltwater or chlorine pool in Bali?",
          a: "Both work well in Bali. Saltwater pools are gentler on skin and have lower operating costs, but higher upfront equipment costs and require more maintenance in humid climates. Chlorine pools are simpler and cheaper initially but have ongoing chemical costs. Read our detailed comparison guide for more information."
        },
        {
          q: "How do I know if my pool water is balanced?",
          a: "Ideal ranges: pH 7.2-7.6, Free chlorine 1-3 ppm, Total alkalinity 80-120 ppm, Calcium hardness 200-400 ppm. Our technicians test all parameters during each visit. You can also use our free online pool calculator to check your levels."
        }
      ]
    },
    {
      category: "Repairs & Equipment",
      icon: Phone,
      questions: [
        {
          q: "What are signs my pool pump needs repair?",
          a: "Warning signs: Unusual noises (grinding, squealing), Weak water flow, Pump runs but doesn't circulate water, Leaks around pump housing, Pump won't start or trips breaker. Most issues are repairable, but pumps over 7-8 years old often need replacement."
        },
        {
          q: "How long do pool filters last in Bali?",
          a: "Sand filters: 5-7 years before sand replacement, Cartridge filters: 2-3 years, DE filters: 3-5 years. Bali's climate and water conditions can shorten lifespan. Regular backwashing and cleaning extend filter life."
        },
        {
          q: "Do you repair pool leaks?",
          a: "Yes. We locate and repair leaks in pool shells, plumbing, equipment, and fittings. Common leak sources: Cracked tiles or plaster, Deteriorated pipe joints, Faulty pump seals, Light fixtures. We use pressure testing and dye testing to pinpoint leak locations."
        },
        {
          q: "Can you automate my pool?",
          a: "Yes. We install automated systems for chlorine dosing, pH control, pool covers, lighting, and heating. Automation reduces chemical use, improves water quality, and saves time. Ideal for rental properties and busy homeowners."
        },
        {
          q: "What brands of equipment do you work with?",
          a: "We service all major pool equipment brands: Pentair, Hayward, Jandy, Astral, Emaux, and Kripsol. We stock genuine parts and can source specialty items from Jakarta or Singapore within 3-5 days."
        }
      ]
    },
    {
      category: "For Property Managers",
      icon: MessageCircle,
      questions: [
        {
          q: "Do you offer services for multiple properties?",
          a: "Yes. We specialize in villa management companies, hotel chains, and property agencies managing multiple pools. Benefits: Single monthly invoice for all properties, Digital dashboard to track all pools, Priority emergency service, Volume discounts (10% for 5+ pools, 15% for 10+ pools), Dedicated account manager."
        },
        {
          q: "Can guests book service directly?",
          a: "For vacation rentals, we can coordinate with your property managers or guests. Many clients add our service as an included amenity or optional add-on for longer stays."
        },
        {
          q: "What reports do you provide?",
          a: "Each service includes: Photo documentation (before/after), Water chemistry readings, Chemical usage, Equipment status, Issues requiring attention. Property managers receive monthly summary reports for all properties via email or dashboard."
        },
        {
          q: "How do you handle emergency repairs for rental properties?",
          a: "We offer 24/7 emergency support for property managers. Our area managers can respond within 2-4 hours for urgent issues. We contact property managers before performing repairs over 2M IDR unless pre-authorized."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pool Service FAQ Bali | Common Questions About Pool Maintenance & Repair</title>
        <meta 
          name="description" 
          content="Answers to common questions about pool service in Bali: pricing, service areas, maintenance frequency, repairs, chemicals, and more. Expert advice from Bali's leading pool service company." 
        />
        <meta name="keywords" content="pool service faq, pool maintenance questions bali, pool cleaning cost bali, pool repair questions, bali pool service" />
        
        <meta property="og:title" content="Pool Service FAQ Bali | Common Questions & Answers" />
        <meta property="og:description" content="Get answers to common questions about pool maintenance, repair, and service in Bali. Pricing, service areas, chemicals, equipment, and more." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipool.services/faq" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-semibold">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pool Service Questions Answered
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about pool maintenance, repair, and service in Bali. Can't find your answer? Contact us on WhatsApp.
            </p>

            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://wa.me/6282237565997?text=I have a question about pool service", "_blank")}
              data-testid="button-contact-whatsapp"
            >
              <FaWhatsapp className="h-5 w-5" />
              Ask a Question
            </Button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 border-y">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIdx) => (
                      <AccordionItem 
                        key={qIdx} 
                        value={`${idx}-${qIdx}`}
                        className="border rounded-lg px-6 hover-elevate"
                        data-testid={`faq-item-${idx}-${qIdx}`}
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <span className="font-semibold text-lg pr-4">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is available 24/7 to answer your pool service questions and provide expert advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://wa.me/6282237565997", "_blank")}
                data-testid="button-whatsapp-cta"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-pricing"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-maintenance-guide">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Maintenance Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete guide to pool maintenance in Bali's tropical climate
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/maintenance-guide">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-calculator">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pool Calculator</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate chemical dosing and pool volume instantly
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/pool-calculator">Use Calculator</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-blog">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pool Care Blog</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert tips, guides, and advice for pool owners
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/blog">Browse Articles</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
