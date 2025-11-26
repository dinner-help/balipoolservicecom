import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, CheckCircle2, Star, Leaf, ThumbsUp, Lock, FileCheck, Phone, Sparkles } from "lucide-react";

interface TrustElementsProps {
  variant?: "badges" | "guarantees" | "safety" | "experience" | "full" | "compact";
  className?: string;
  location?: string;
}

export function TrustElements({ variant = "badges", className = "", location = "Bali" }: TrustElementsProps) {
  const badges = [
    { icon: Shield, label: "100% Satisfaction Guarantee", sublabel: "Crystal-clear water or money back" },
    { icon: Award, label: "10+ Years Experience", sublabel: `Serving ${location} since 2014` },
    { icon: Clock, label: "24/7 Emergency Support", sublabel: "Response within 2-4 hours" },
    { icon: Users, label: "500+ Happy Clients", sublabel: "Villas, hotels & resorts" },
  ];

  const guarantees = [
    { icon: CheckCircle2, title: "Crystal Clear Water Guarantee", description: "If your pool isn't sparkling clean after our service, we'll return and fix it for free within 24 hours." },
    { icon: Shield, title: "No Hidden Fees Promise", description: "The price we quote is the price you pay. All chemicals, supplies, and labor included." },
    { icon: Lock, title: "Property Safety Guarantee", description: "Our technicians are fully trained, insured, and background-checked for your peace of mind." },
    { icon: ThumbsUp, title: "Satisfaction or Refund", description: "Not happy with your first month? Get a full refund, no questions asked." },
  ];

  const safetyPractices = [
    { icon: Leaf, title: "Premium Chemical Safety", description: "We use 90% pure, NSF-certified chemicals that are safer for skin, eyes, and the environment." },
    { icon: FileCheck, title: "Trained & Certified Team", description: "All technicians complete rigorous pool chemistry and equipment safety training." },
    { icon: Shield, title: "Fully Insured Operations", description: "Comprehensive liability insurance protects your property during every service visit." },
    { icon: Lock, title: "Secure Property Access", description: "Strict key management and property access protocols for complete security." },
  ];

  const experienceStats = [
    { number: "10+", label: "Years Experience", sublabel: "Established 2014" },
    { number: "500+", label: "Active Clients", sublabel: "Across Bali" },
    { number: "15,000+", label: "Service Visits", sublabel: "Completed annually" },
    { number: "98%", label: "Satisfaction Rate", sublabel: "Based on client surveys" },
  ];

  if (variant === "badges") {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-accent/5 rounded-lg">
            <badge.icon className="h-8 w-8 text-primary mb-2" />
            <span className="font-semibold text-sm">{badge.label}</span>
            <span className="text-xs text-muted-foreground">{badge.sublabel}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "guarantees") {
    return (
      <div className={`space-y-6 ${className}`}>
        <h3 className="text-2xl font-bold text-center mb-8">Our Guarantees to You</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {guarantees.map((item, index) => (
            <Card key={index} className="bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <item.icon className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "safety") {
    return (
      <div className={`space-y-6 ${className}`}>
        <h3 className="text-2xl font-bold text-center mb-8">Safety & Quality Standards</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {safetyPractices.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg">
              <item.icon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "experience") {
    return (
      <div className={`bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 ${className}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Trusted by {location}'s Best Properties</h3>
          <p className="text-muted-foreground">Our track record speaks for itself</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {experienceStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="font-semibold text-sm">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-6 py-4 ${className}`}>
        <div className="flex items-center gap-2 text-sm">
          <Shield className="h-5 w-5 text-green-600" />
          <span className="font-medium">100% Satisfaction Guarantee</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Award className="h-5 w-5 text-primary" />
          <span className="font-medium">10+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-5 w-5 text-primary" />
          <span className="font-medium">24/7 Support</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">500+ Happy Clients</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-12 ${className}`}>
      <TrustElements variant="badges" location={location} />
      <TrustElements variant="guarantees" location={location} />
      <TrustElements variant="safety" location={location} />
      <TrustElements variant="experience" location={location} />
    </div>
  );
}

export function TrustBadge({ type, className = "" }: { type: "guarantee" | "experience" | "support" | "clients"; className?: string }) {
  const configs = {
    guarantee: { icon: Shield, label: "100% Satisfaction Guarantee", color: "text-green-600" },
    experience: { icon: Award, label: "10+ Years Experience", color: "text-primary" },
    support: { icon: Clock, label: "24/7 Emergency Support", color: "text-blue-600" },
    clients: { icon: Users, label: "500+ Happy Clients", color: "text-primary" },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-sm ${className}`}>
      <Icon className={`h-4 w-4 ${config.color}`} />
      <span className="font-medium">{config.label}</span>
    </div>
  );
}

export default TrustElements;
