import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Video,
  Clock,
  BookOpen,
  Wrench,
  Droplets,
  TestTube,
  AlertTriangle
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";

export default function VideoTutorials() {
  const videoCategories = [
    {
      category: "Getting Started",
      icon: BookOpen,
      videos: [
        {
          title: "Pool Maintenance Basics in Bali",
          duration: "8:45",
          level: "Beginner",
          description: "Essential pool care fundamentals for Bali's tropical climate. Learn weekly tasks, chemical basics, and equipment overview.",
          topics: ["Weekly tasks", "Equipment basics", "Chemical safety"]
        },
        {
          title: "Understanding Your Pool Equipment",
          duration: "12:30",
          level: "Beginner",
          description: "Complete guide to pool pumps, filters, and automation systems. Identify components and understand their functions.",
          topics: ["Pump operation", "Filter types", "Automation basics"]
        },
        {
          title: "Water Testing 101",
          duration: "6:15",
          level: "Beginner",
          description: "How to accurately test pool water chemistry using test strips, liquid kits, and digital testers.",
          topics: ["pH testing", "Chlorine testing", "Reading results"]
        }
      ]
    },
    {
      category: "Chemical Balancing",
      icon: TestTube,
      videos: [
        {
          title: "How to Balance pH Levels",
          duration: "9:20",
          level: "Intermediate",
          description: "Step-by-step guide to testing and adjusting pH using soda ash and muriatic acid. Includes safety precautions.",
          topics: ["pH testing", "Adding chemicals", "Safety tips"]
        },
        {
          title: "Chlorine Management in Tropical Climates",
          duration: "11:40",
          level: "Intermediate",
          description: "Maintain proper chlorine levels in Bali's heat. Covers tablets, liquid chlorine, and shock treatment.",
          topics: ["Chlorine types", "Dosing calculations", "Shock treatment"]
        },
        {
          title: "Complete Water Chemistry Guide",
          duration: "15:30",
          level: "Intermediate",
          description: "Master all water chemistry parameters: pH, chlorine, alkalinity, calcium hardness, and cyanuric acid.",
          topics: ["All parameters", "Balancing order", "Problem solving"]
        },
        {
          title: "Saltwater Pool Chemistry",
          duration: "10:15",
          level: "Advanced",
          description: "Specific chemistry requirements for saltwater pools. Salt cell maintenance and troubleshooting.",
          topics: ["Salt levels", "Cell cleaning", "Chemistry differences"]
        }
      ]
    },
    {
      category: "Cleaning & Maintenance",
      icon: Droplets,
      videos: [
        {
          title: "Proper Pool Vacuuming Technique",
          duration: "7:45",
          level: "Beginner",
          description: "Efficient vacuuming methods for manual and automatic pool cleaners. Save time and improve results.",
          topics: ["Manual vacuum", "Automatic cleaners", "Troubleshooting"]
        },
        {
          title: "Brushing Walls & Preventing Algae",
          duration: "5:30",
          level: "Beginner",
          description: "Correct brushing techniques for different pool surfaces. Prevent algae attachment and biofilm growth.",
          topics: ["Brush selection", "Proper technique", "Problem areas"]
        },
        {
          title: "Filter Backwashing Guide",
          duration: "8:10",
          level: "Intermediate",
          description: "How to properly backwash sand, DE, and cartridge filters. When to backwash and when to deep clean.",
          topics: ["Backwash timing", "Proper procedure", "Filter maintenance"]
        },
        {
          title: "Seasonal Pool Care in Bali",
          duration: "13:20",
          level: "Intermediate",
          description: "Adjust maintenance for dry season vs. monsoon season. Handle heavy rain and intense sun exposure.",
          topics: ["Dry season", "Monsoon prep", "Seasonal chemicals"]
        }
      ]
    },
    {
      category: "Equipment Maintenance",
      icon: Wrench,
      videos: [
        {
          title: "Pool Pump Maintenance & Troubleshooting",
          duration: "14:50",
          level: "Intermediate",
          description: "Maintain pumps for longevity. Diagnose common issues: air leaks, weak flow, and unusual noises.",
          topics: ["Regular maintenance", "Common problems", "Repair basics"]
        },
        {
          title: "Cleaning Salt Chlorine Generator Cells",
          duration: "6:40",
          level: "Intermediate",
          description: "Remove calcium buildup from salt cells using acid wash. Extend cell life and maintain efficiency.",
          topics: ["Cell inspection", "Acid cleaning", "Reassembly"]
        },
        {
          title: "Pool Light Replacement",
          duration: "9:15",
          level: "Advanced",
          description: "Safely replace pool lights and seals. LED vs. incandescent options and waterproofing techniques.",
          topics: ["Safety procedures", "Light removal", "Installation"]
        },
        {
          title: "Heater & Heat Pump Care",
          duration: "11:25",
          level: "Advanced",
          description: "Service pool heaters and heat pumps. Clean heat exchangers and diagnose heating issues.",
          topics: ["Maintenance schedule", "Cleaning procedures", "Troubleshooting"]
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: AlertTriangle,
      videos: [
        {
          title: "Clearing a Green Pool",
          duration: "16:45",
          level: "Intermediate",
          description: "Step-by-step process to restore severely algae-infested pools. From green to crystal clear.",
          topics: ["Shock treatment", "Algae removal", "Chemical balance"]
        },
        {
          title: "Fixing Cloudy Water",
          duration: "10:30",
          level: "Intermediate",
          description: "Diagnose and fix cloudy pool water. Filter issues, chemical imbalance, or algae bloom.",
          topics: ["Diagnosis", "Clarifier use", "Prevention"]
        },
        {
          title: "Finding and Fixing Leaks",
          duration: "12:55",
          level: "Advanced",
          description: "Locate pool leaks using bucket test and dye testing. Repair common leak sources.",
          topics: ["Leak detection", "Bucket test", "Common repairs"]
        },
        {
          title: "Pool Stain Removal",
          duration: "8:40",
          level: "Advanced",
          description: "Identify and remove metal stains, organic stains, and scale. Prevent stain recurrence.",
          topics: ["Stain types", "Removal methods", "Prevention"]
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pool Maintenance Video Tutorials Bali | Step-by-Step Pool Care Videos</title>
        <meta 
          name="description" 
          content="Free pool maintenance video tutorials for Bali. Learn pool cleaning, chemical balancing, equipment repair, and troubleshooting with step-by-step video guides." 
        />
        <meta name="keywords" content="pool maintenance videos, pool tutorial bali, pool cleaning video, pool repair tutorial, how to clean pool bali" />
        
        <meta property="og:title" content="Pool Video Tutorials | Free Pool Care Training" />
        <meta property="og:description" content="Learn pool maintenance with expert video tutorials. Chemical balancing, equipment care, cleaning, and troubleshooting guides." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipool.services/video-tutorials" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Video className="h-4 w-4" />
              <span className="text-sm font-semibold">Free Video Tutorials</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pool Maintenance Video Tutorials
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Learn professional pool care techniques with step-by-step video guides. From basic maintenance to advanced troubleshooting for Bali's tropical climate.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                <span className="font-semibold">25+ Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">4+ Hours Content</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold">All Skill Levels</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-12 border-y bg-accent/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FaYoutube className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Video Library Coming Soon</h2>
                <p className="text-muted-foreground mb-6">
                  We're currently producing professional video tutorials covering all aspects of pool maintenance for Bali's tropical climate. Subscribe to our YouTube channel or contact us on WhatsApp to be notified when videos are published.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    className="gap-2"
                    onClick={() => window.open("https://wa.me/6282237565997?text=Please notify me when video tutorials are available", "_blank")}
                    data-testid="button-notify-whatsapp"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    Notify Me on WhatsApp
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/maintenance-guide">Read Written Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Planned Video Library */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planned Video Tutorials
              </h2>
              <p className="text-xl text-muted-foreground">
                Preview of upcoming video content organized by skill level and topic
              </p>
            </div>

            <div className="space-y-12">
              {videoCategories.map((category, catIdx) => (
                <div key={catIdx}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{category.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.videos.map((video, vidIdx) => (
                      <Card key={vidIdx} className="hover-elevate" data-testid={`video-card-${catIdx}-${vidIdx}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                              <div className="flex items-center gap-3 text-sm">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  {video.duration}
                                </div>
                                <Badge variant={video.level === "Beginner" ? "default" : video.level === "Intermediate" ? "secondary" : "outline"}>
                                  {video.level}
                                </Badge>
                              </div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Play className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {video.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {video.topics.map((topic, topicIdx) => (
                              <Badge key={topicIdx} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative Resources */}
        <section className="py-16 bg-gradient-to-b from-background to-accent/5 border-t">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Learn Pool Care Now
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-maintenance-guide">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Maintenance Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive written guide covering all pool care topics for Bali
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/maintenance-guide">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-faq">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TestTube className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">FAQ</h3>
                  <p className="text-muted-foreground mb-4">
                    Quick answers to common pool maintenance questions
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/faq">Browse FAQ</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-calculator">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pool Calculator</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate pool volume, chemical dosing, and maintenance costs
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/pool-calculator">Use Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Skip the Learning Curve
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our professional technicians handle all pool maintenance while you enjoy crystal-clear water. Available across 50+ areas in Bali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://wa.me/6282237565997?text=I'm interested in professional pool service", "_blank")}
                data-testid="button-whatsapp-service"
              >
                <FaWhatsapp className="h-5 w-5" />
                Get Professional Service
              </Button>
              
              <Button size="lg" variant="outline" asChild data-testid="button-pricing">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
