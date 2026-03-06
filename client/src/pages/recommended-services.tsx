import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap, ChefHat, Droplets, Code, Heart } from "lucide-react";

const recommendedServices = [
  {
    name: "In-Villa Massage Ubud",
    url: "https://homemassageubud.com/",
    icon: Heart,
    description: "After a long day of enjoying your pristine pool, unwind with professional in-villa massage services in Ubud. Their certified therapists bring relaxation directly to your home, perfect for complete villa wellness.",
    cta: "In-Villa Massage in Ubud"
  },
  {
    name: "Home Massage Kuta",
    url: "https://www.homemassagekuta.com/",
    icon: Sparkles,
    description: "For villa owners in the Kuta area, enjoy premium mobile massage services that complement your pool lifestyle. Professional therapists deliver spa-quality treatments in the comfort of your villa.",
    cta: "In-Villa Massage in Kuta"
  },
  {
    name: "Private Tutoring Bali",
    url: "https://privatetutoringbali.com/",
    icon: GraduationCap,
    description: "Families with school-age children can benefit from professional private tutoring and homeschooling support. Keep your children educated while enjoying the Bali villa lifestyle.",
    cta: "Private Tutoring in Bali"
  },
  {
    name: "MyChef Private Chef Services",
    url: "https://mychef.id/",
    icon: ChefHat,
    description: "Complete your villa experience with professional private chef services. Enjoy gourmet meals poolside while our team keeps your pool crystal clear. The perfect combination for entertaining guests.",
    cta: "Private Chef Services in Bali"
  },
  {
    name: "Bali Tech Education",
    url: "https://bali-tech-education.com/",
    icon: Code,
    description: "For families and professionals seeking tech education and coding classes in Bali. Complement your relaxed villa lifestyle with valuable digital skills training for you or your children.",
    cta: "Tech Education in Bali"
  },
  {
    name: "Aqua Pure Bali",
    url: "https://aquapurebali.com/",
    icon: Droplets,
    description: "Just as we ensure your pool water is pristine, Aqua Pure Bali delivers professional water purification and filtration for your drinking water. Complete water quality solutions for your entire villa.",
    cta: "Water Purification Services in Bali"
  }
];

export default function RecommendedServices() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Recommended Services for Your Bali Villa Lifestyle",
    "description": "Trusted complementary services for wellness, education, dining, and villa maintenance in Bali.",
    "url": "https://balipoolservice.com/recommended-services",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Recommended Bali Villa Services",
      "itemListElement": recommendedServices.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.name,
        "url": service.url
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recommended Services for Your Bali Villa Lifestyle | Bali Pool Service</title>
        <meta 
          name="description" 
          content="Discover trusted complementary services for your Bali villa: in-villa massage, private chefs, tutoring, tech education, and water purification. Complete your villa lifestyle." 
        />
        <link rel="canonical" href="https://balipoolservice.com/recommended-services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recommended Services for Your Bali Villa Lifestyle
            </h1>
            <p className="text-lg text-gray-600">
              To help you create the perfect Bali living experience, we recommend these trusted 
              complementary services for wellness, education, dining, and villa maintenance. 
              Each has been selected for their professionalism and commitment to quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.name} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <CardDescription className="text-base mb-6 flex-1">
                      {service.description}
                    </CardDescription>
                    <a 
                      href={service.url}
                      className="inline-block"
                      data-testid={`link-recommended-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Button className="w-full">
                        {service.cta}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Complete Villa Care Partner
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  At Bali Pool Service, we're committed to helping you enjoy the complete Bali villa 
                  lifestyle. While we take care of your pool, these trusted partners ensure every 
                  other aspect of your home is equally well-maintained. Together, we create the 
                  perfect living experience in Bali.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
