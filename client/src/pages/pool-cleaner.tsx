import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Droplets, 
  Shield, 
  Clock, 
  Award, 
  Smartphone, 
  CheckCircle2,
  FlaskConical,
  Waves,
  Brush,
  Filter,
  TestTube,
  Settings,
  FileText,
  Calendar,
  Sparkles
} from "lucide-react";
import poolCleaningHero from "@assets/stock_images/professional_pool_cl_e9f1a165.jpg";
import poolCleaning2 from "@assets/stock_images/professional_pool_cl_2cac1b80.jpg";
import poolCleaning3 from "@assets/stock_images/professional_pool_cl_b1f985cf.jpg";
import crystalClearPool from "@assets/stock_images/crystal_clear_blue_s_b1579e3a.jpg";
import crystalClearPool2 from "@assets/stock_images/crystal_clear_blue_s_316525ec.jpg";
import poolChemicals from "@assets/stock_images/pool_maintenance_equ_f6ef178d.jpg";
import poolEquipment from "@assets/stock_images/pool_maintenance_equ_d886bdcb.jpg";

export default function PoolCleaner() {
  const cleaningSteps = [
    {
      icon: Waves,
      title: "Surface Skimming & Debris Removal",
      description: "Professional-grade skimming nets remove leaves, flowers, organic matter, insects, and surface contaminants before they sink and stain your pool surfaces."
    },
    {
      icon: Brush,
      title: "Brushing Walls, Steps & Surfaces",
      description: "Specialized brushes for different pool surfaces remove algae spores, biofilm, calcium deposits, and grime—preventing the need for aggressive acid washing."
    },
    {
      icon: Droplets,
      title: "Vacuuming the Pool Floor",
      description: "Professional vacuums systematically clean the entire pool floor, corners, and hard-to-reach areas using manual or vacuum-to-waste methods."
    },
    {
      icon: Filter,
      title: "Filter Cleaning & Maintenance",
      description: "Sand filter backwashing, cartridge cleaning, or DE filter maintenance ensures optimal circulation and chemical effectiveness."
    },
    {
      icon: TestTube,
      title: "Water Testing & Chemical Balancing",
      description: "Digital testing equipment measures 7 critical parameters including pH, chlorine, alkalinity, and calcium hardness for perfect water chemistry."
    },
    {
      icon: Settings,
      title: "Equipment Inspection & Reporting",
      description: "Thorough pump, filtration, chlorination, and accessory checks with immediate issue reporting and repair recommendations."
    },
    {
      icon: FileText,
      title: "Detailed Service Reporting",
      description: "Comprehensive digital reports with chemistry readings, services performed, chemicals added, photos, and technician recommendations."
    }
  ];

  const servicePlans = [
    {
      icon: Sparkles,
      name: "Daily Pool Cleaning",
      frequency: "Daily service visits",
      ideal: "Hotels, resorts, high-traffic rental villas",
      features: [
        "Daily skimming, brushing, and vacuuming",
        "Water chemistry testing and adjustment",
        "Filter maintenance as needed",
        "Equipment monitoring",
        "Real-time issue reporting"
      ],
      result: "Consistently perfect pool conditions that impress every guest"
    },
    {
      icon: Calendar,
      name: "3x Weekly Pool Cleaning",
      frequency: "Monday, Wednesday, Friday",
      ideal: "Active rental villas, frequently used private pools",
      features: [
        "Full cleaning protocol each visit",
        "Chemistry balancing every visit",
        "Proactive issue detection",
        "Ideal for moderate to heavy use"
      ],
      result: "Reliable, crystal-clear water with minimal algae risk"
    },
    {
      icon: CheckCircle2,
      name: "Weekly Pool Cleaning",
      frequency: "Once per week",
      ideal: "Occasionally used private villas, seasonal properties",
      features: [
        "Complete service once per week",
        "Comprehensive cleaning and chemistry balancing",
        "Equipment inspection and reporting",
        "Suitable for light to moderate use"
      ],
      result: "Well-maintained pool without daily attention"
    },
    {
      icon: Clock,
      name: "Bi-Weekly Pool Cleaning",
      frequency: "Every two weeks",
      ideal: "Owner-occupied properties with active involvement",
      features: [
        "Service every two weeks",
        "Full cleaning and chemistry balancing",
        "Owner handles light maintenance between visits",
        "Equipment checks and professional adjustments"
      ],
      result: "Professional oversight with reduced service frequency"
    }
  ];

  const additionalServices = [
    {
      title: "Deep Pool Cleaning",
      description: "Quarterly or annual intensive cleaning including acid washing, tile and grout deep cleaning, calcium deposit removal, stain treatment, filter media replacement, and complete system flushing."
    },
    {
      title: "Green Pool Recovery",
      description: "Emergency treatment for algae-infested pools with rapid algae elimination, water chemistry restoration, filter cleaning, and equipment damage prevention. Typically resolved within 3-5 days."
    },
    {
      title: "Pool Equipment Repair",
      description: "Certified technician service for pump replacement and repair, filter system repairs, heater installation, salt chlorinator service, automation system setup, and leak detection."
    },
    {
      title: "Pool Opening & Closing",
      description: "Seasonal service for properties with periods of non-use including winterization, pre-season startup, complete system testing, and water replacement if needed."
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24-Hour Emergency Response",
      description: "Pool emergencies don't wait for business hours. Round-the-clock support for urgent situations—green pool before guest check-in, equipment failures, or pre-event crises."
    },
    {
      icon: Award,
      title: "Certified, Professional Technicians",
      description: "Our team receives continuous training in water chemistry, equipment repair, and customer service. Every technician is certified and insured for your protection."
    },
    {
      icon: Shield,
      title: "Same Technician, Every Visit",
      description: "You'll work with the same dedicated technician who learns your pool's unique characteristics and your preferences. No surprises, no strangers on your property."
    },
    {
      icon: Smartphone,
      title: "Proprietary Reporting App",
      description: "Real-time service documentation, water chemistry history, and equipment tracking—all accessible from your phone. Complete transparency whether you're in Bali or abroad."
    },
    {
      icon: FlaskConical,
      title: "EU-Standard Chemicals",
      description: "We use only professional-grade chemicals that meet international safety standards. No cheap alternatives that irritate skin or damage equipment."
    },
    {
      icon: CheckCircle2,
      title: "Transparent, Predictable Pricing",
      description: "Fixed monthly rates with all chemicals and supplies included. No hidden fees, no surprise charges—just straightforward, honest pricing."
    }
  ];

  const faqs = [
    {
      question: "How often does my pool need professional cleaning in Bali?",
      answer: "In Bali's tropical climate, we recommend minimum 2x weekly pool cleaning for pools with moderate use, and 3x weekly for rental properties or heavily used pools. Bali's warm temperatures, high humidity, and abundant vegetation create ideal conditions for algae growth and debris accumulation."
    },
    {
      question: "What causes my pool water to turn green?",
      answer: "Green pool water indicates algae growth, typically caused by insufficient chlorine levels, poor circulation or filtration, high phosphate levels, imbalanced pH preventing chlorine effectiveness, skipped pool cleaning services, or heavy rainfall diluting chemical levels. Professional pool cleaning prevents algae by maintaining proper chemistry and removing organic matter."
    },
    {
      question: "How do I know if my pool water is safe to swim in?",
      answer: "Safe swimming water requires free chlorine 1.0-3.0 ppm, pH 7.2-7.6, clear transparent water (can see drain at deepest point), no strong chlorine smell, no skin or eye irritation, and no visible algae or debris. Our pool cleaning service includes professional testing and documentation ensuring your pool meets all safety standards."
    },
    {
      question: "Why does my pool smell strongly of chlorine?",
      answer: "Surprisingly, a strong chlorine smell indicates insufficient free chlorine, not too much. The smell comes from chloramines—used chlorine bonded to contaminants like sweat, urine, and body oils. Proper pool cleaning and 'shocking' (super-chlorination) breaks apart chloramines, eliminating the smell and restoring sanitization effectiveness."
    },
    {
      question: "Can I clean my pool myself instead of hiring professionals?",
      answer: "While basic skimming and debris removal can be done by owners, professional pool cleaning offers significant advantages: expertise in water chemistry, professional testing equipment, time savings (45-90 minutes per session), consistency in maintaining stable chemistry, equipment protection and warranty compliance, and liability coverage with documentation for rental properties."
    },
    {
      question: "What's included in your pool cleaning service?",
      answer: "Every pool cleaning service includes surface skimming and debris removal, wall/floor/step brushing, vacuuming entire pool floor, filter cleaning, complete water chemistry testing (7 parameters), chemical balancing with professional-grade products, equipment inspection and reporting, skimmer and pump basket cleaning, and detailed service documentation with photo reports. All chemicals, equipment, and labor are included in your fixed monthly rate."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Pool Cleaning Services Bali | Expert Pool Maintenance & Care</title>
        <meta name="description" content="Professional pool cleaning services in Bali. Certified technicians, crystal-clear water, 24/7 emergency service. Serving Seminyak, Canggu, Uluwatu, Sanur, Nusa Dua. Expert pool maintenance for villas, hotels & homes." />
        <meta name="keywords" content="pool cleaning Bali, pool maintenance Bali, professional pool service, pool cleaner Seminyak, pool cleaning Canggu, Bali pool care, pool chemical balancing, swimming pool maintenance, pool technician Bali, pool cleaning service" />
        
        <meta property="og:title" content="Professional Pool Cleaning Services Bali | Expert Pool Maintenance" />
        <meta property="og:description" content="Crystal-clear water. Zero effort. Complete peace of mind. Professional pool cleaning and maintenance services for villas, hotels, and homes across Bali." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balipoolservice.com/pool-cleaner" />
        
        <link rel="canonical" href="https://balipoolservice.com/pool-cleaner" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={poolCleaningHero} 
                alt="Professional pool cleaning service in Bali"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional Pool Cleaning Services in Bali
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Crystal-clear water. Zero effort. Complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                  data-testid="button-hero-contact"
                >
                  <a href="#contact">Get Free Assessment</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                  data-testid="button-hero-whatsapp"
                >
                  <a href="https://wa.me/62123445566" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Professional Pool Cleaning Matters */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Professional Pool Cleaning Matters in Bali
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Bali's warm, humid climate creates unique challenges for pool maintenance. High temperatures accelerate algae growth, heavy rainfall dilutes water chemistry, and tropical debris from palm trees constantly falls into pools. Without proper pool cleaning and chemical management, a pristine pool can turn green within 48-72 hours.
                  </p>
                  
                  <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                    <p className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong>Did you know?</strong> A single day of missed pool maintenance in Bali's climate can trigger algae blooms that take 3-5 days to fully resolve, potentially costing you guest bookings and emergency treatment fees.
                      </span>
                    </p>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">The hidden costs of poor pool maintenance:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Health risks</strong> - Unbalanced water chemistry causes skin irritation, eye redness, and can harbor harmful bacteria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Equipment damage</strong> - Improper chemical levels corrode pumps, filters, and heating systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Property value loss</strong> - Stained tiles and damaged surfaces decrease property appeal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Guest complaints</strong> - Pool issues directly impact reviews and booking rates</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <img 
                    src={crystalClearPool} 
                    alt="Crystal clear pool water with proper maintenance"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Pool Cleaning Process */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Pool Cleaning Process: Step-by-Step
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We follow a rigorous pool cleaning methodology developed specifically for Bali's tropical environment. Every service visit follows the same professional standards, ensuring consistent results you can depend on.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cleaningSteps.map((step, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <step.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Water Chemistry Table */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Professional Water Chemistry Management
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our technicians use digital testing equipment to measure seven critical water parameters
                </p>
              </div>

              <Card className="p-6 md:p-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold">Parameter</th>
                      <th className="text-left py-4 px-4 font-semibold">Ideal Range</th>
                      <th className="text-left py-4 px-4 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">pH Level</td>
                      <td className="py-4 px-4 text-primary font-medium">7.2 - 7.6</td>
                      <td className="py-4 px-4 text-muted-foreground">Controls chemical effectiveness and swimmer comfort</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Free Chlorine</td>
                      <td className="py-4 px-4 text-primary font-medium">1.0 - 3.0 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Sanitizes water and kills bacteria</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Total Alkalinity</td>
                      <td className="py-4 px-4 text-primary font-medium">80 - 120 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Buffers pH changes, prevents fluctuation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Calcium Hardness</td>
                      <td className="py-4 px-4 text-primary font-medium">200 - 400 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Prevents surface etching and scaling</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Cyanuric Acid</td>
                      <td className="py-4 px-4 text-primary font-medium">30 - 50 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Protects chlorine from UV degradation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Total Dissolved Solids</td>
                      <td className="py-4 px-4 text-primary font-medium">&lt; 1500 ppm</td>
                      <td className="py-4 px-4 text-muted-foreground">Indicates overall water quality</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Phosphates</td>
                      <td className="py-4 px-4 text-primary font-medium">&lt; 100 ppb</td>
                      <td className="py-4 px-4 text-muted-foreground">Prevents algae growth</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <img 
                  src={poolChemicals} 
                  alt="Pool water chemistry testing equipment"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src={poolEquipment} 
                  alt="Professional pool maintenance equipment"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Service Plans */}
          <section className="py-16 md:py-24" id="service-plans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pool Cleaning Service Plans
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Flexible pool cleaning service plans designed for Bali's climate and your property's specific needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {servicePlans.map((plan, index) => (
                  <Card key={index} className="p-6 md:p-8 hover-elevate">
                    <div className="flex items-center gap-3 mb-4">
                      <plan.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Frequency:</strong> {plan.frequency}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Ideal for:</strong> {plan.ideal}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t">
                      <p className="text-sm">
                        <strong>Result:</strong> {plan.result}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <img 
                  src={poolCleaning2} 
                  alt="Professional pool cleaning in progress"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src={poolCleaning3} 
                  alt="Pool technician maintaining water quality"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src={crystalClearPool2} 
                  alt="Beautifully maintained crystal clear pool"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Additional Pool Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Beyond routine pool cleaning, we offer comprehensive pool care services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Pool Service Bali
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Professional, reliable pool cleaning service that Bali's international property owners depend on
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Common Pool Cleaning Questions
                </h2>
              </div>

              <div className="grid gap-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Special Offer & CTA */}
          <section className="py-16 md:py-24 bg-primary/5" id="contact">
            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Hassle-Free Pool Cleaning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop worrying about your pool and start enjoying it. Whether you're a villa owner, property manager, or hotel operator, Pool Service Bali delivers the professional, reliable pool cleaning service that Bali's international property owners depend on.
              </p>

              <Card className="p-8 bg-primary/10 border-primary/30 mb-8">
                <h3 className="text-2xl font-bold mb-4">Special Offer for New Clients</h3>
                <p className="text-lg mb-6">
                  First month of pool cleaning service at <strong>20% off</strong> when you sign up for a 6-month contract. Plus, receive a free comprehensive pool equipment inspection and water chemistry report ($75 value).
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Mention this offer when you contact us. Valid for new residential and commercial clients.
                </p>
              </Card>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <FaWhatsapp className="h-6 w-6 text-primary" />
                  <a href="https://wa.me/62123445566" className="text-primary hover:underline" data-testid="link-whatsapp">
                    +62123445566
                  </a>
                </div>
                <p className="text-muted-foreground">Available 24 hours for emergencies</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  asChild
                  data-testid="button-get-assessment"
                >
                  <a href="https://wa.me/62123445566">Get Your Free Pool Assessment</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  data-testid="button-view-pricing"
                >
                  <a href="/#pricing">View Pricing Plans</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
              <p className="text-muted-foreground italic">
                Serving Seminyak, Canggu, Uluwatu, Sanur, Nusa Dua, Ubud, Jimbaran, and all of Bali with certified pool cleaning and maintenance services.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
