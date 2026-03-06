import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Calendar,
  Clock,
  Search,
  TrendingUp,
  Droplets,
  DollarSign,
  Wrench,
  AlertCircle
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogArticles = [
    {
      title: "Complete Guide to Pool Maintenance Costs in Bali (2025)",
      slug: "/blog/pool-maintenance-cost-bali",
      excerpt: "Detailed breakdown of pool maintenance costs in Bali including service packages, chemical expenses, equipment repairs, and cost-saving tips. Compare DIY vs professional pricing.",
      category: "Cost Guides",
      readTime: "12 min read",
      date: "November 20, 2024",
      featured: true,
      icon: DollarSign,
      keywords: ["pool maintenance cost", "bali pool service pricing", "pool cleaning cost"]
    },
    {
      title: "How Often Should You Clean Your Pool in Bali's Tropical Climate?",
      slug: "/blog/pool-cleaning-frequency-bali-climate",
      excerpt: "Expert guide to optimal pool cleaning frequency in Bali's year-round heat and humidity. Learn how monsoon season, temperature, and pool usage affect maintenance schedules.",
      category: "Maintenance Tips",
      readTime: "10 min read",
      date: "November 19, 2024",
      featured: true,
      icon: Calendar,
      keywords: ["pool cleaning frequency bali", "how often clean pool", "tropical pool maintenance"]
    },
    {
      title: "Green Pool Emergency: Complete Guide to Algae Removal in Bali",
      slug: "/blog/green-pool-cleaning-guide",
      excerpt: "Step-by-step guide to clearing severe algae blooms and green pool water. Includes shock treatment procedures, chemical dosing, and prevention strategies for Bali's climate.",
      category: "Problem Solving",
      readTime: "15 min read",
      date: "November 18, 2024",
      featured: true,
      icon: AlertCircle,
      keywords: ["green pool cleaning", "algae removal bali", "pool algae treatment"]
    }
  ];

  const categories = [
    { name: "All Articles", count: blogArticles.length },
    { name: "Cost Guides", count: blogArticles.filter(a => a.category === "Cost Guides").length },
    { name: "Maintenance Tips", count: blogArticles.filter(a => a.category === "Maintenance Tips").length },
    { name: "Problem Solving", count: blogArticles.filter(a => a.category === "Problem Solving").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "All Articles" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = blogArticles.filter(a => a.featured);

  return (
    <>
      <Helmet>
        <title>Pool Care Blog Bali | Expert Pool Maintenance Tips & Guides</title>
        <meta 
          name="description" 
          content="Expert pool maintenance guides for Bali. Learn about pool cleaning costs, maintenance frequency, algae removal, saltwater vs chlorine, DIY vs professional service, and tropical pool care." 
        />
        <meta name="keywords" content="pool care blog bali, pool maintenance tips, pool cleaning guide bali, tropical pool care, pool service articles" />
        
        <meta property="og:title" content="Pool Care Blog | Expert Pool Maintenance Guides" />
        <meta property="og:description" content="Expert guides on pool maintenance costs, cleaning frequency, algae removal, and pool care in Bali's tropical climate." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://balipoolservice.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-semibold">Pool Care Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Pool Care Guides for Bali
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Professional advice on pool maintenance, costs, troubleshooting, and care in Bali's tropical climate. Written by certified pool technicians with 15+ years experience.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles... (e.g., 'cost', 'green pool', 'cleaning frequency')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
                data-testid="input-blog-search"
              />
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 border-y">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{blogArticles.length}+</div>
                <div className="text-sm text-muted-foreground">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Pool Types Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Bali-Specific</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 bg-accent/20">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {featuredArticles.map((article, idx) => (
                  <Card key={idx} className="hover-elevate border-2 border-primary/20" data-testid={`featured-article-${idx}`}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <article.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="w-fit mb-3">{article.category}</Badge>
                      <CardTitle className="text-xl leading-tight">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </div>
                      </div>
                      <Button variant="outline" asChild className="w-full" data-testid={`button-read-featured-${idx}`}>
                        <Link href={article.slug}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <Button
                  key={idx}
                  variant={selectedCategory === cat.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.name)}
                  className="gap-2"
                  data-testid={`button-category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat.name}
                  <Badge variant="secondary" className="ml-1">{cat.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {selectedCategory === "All Articles" ? "All Articles" : selectedCategory}
            </h2>
            
            {filteredArticles.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground">No articles found matching your search.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Articles");
                  }}
                >
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, idx) => (
                  <Card key={idx} className="hover-elevate" data-testid={`article-card-${idx}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                        <Link href={article.slug}>{article.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </div>
                        <Button variant="ghost" size="sm" asChild data-testid={`button-read-${idx}`}>
                          <Link href={article.slug}>Read More →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5 border-t">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Pool Maintenance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert technicians are available 24/7 to answer your questions and provide professional pool service across Bali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                data-testid="button-contact-cta"
              >
                <Link href="/faq">Browse FAQ</Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild data-testid="button-service-cta">
                <Link href="/pricing">View Service Packages</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
