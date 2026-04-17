import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2, Send, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceArea: string;
  message: string;
}

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceArea: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const propertyTypes = [
    { value: "villa", label: "Private Villa" },
    { value: "hotel", label: "Hotel / Resort" },
    { value: "guesthouse", label: "Guest House / B&B" },
    { value: "apartment", label: "Apartment Complex" },
    { value: "private-home", label: "Private Home" },
    { value: "commercial", label: "Commercial Property" },
    { value: "other", label: "Other" },
  ];

  const serviceAreas = [
    { value: "canggu", label: "Canggu" },
    { value: "seminyak", label: "Seminyak" },
    { value: "ubud", label: "Ubud" },
    { value: "sanur", label: "Sanur" },
    { value: "nusa-dua", label: "Nusa Dua" },
    { value: "uluwatu", label: "Uluwatu" },
    { value: "jimbaran", label: "Jimbaran" },
    { value: "kuta", label: "Kuta" },
    { value: "legian", label: "Legian" },
    { value: "denpasar", label: "Denpasar" },
    { value: "kerobokan", label: "Kerobokan" },
    { value: "pererenan", label: "Pererenan" },
    { value: "other", label: "Other Area" },
  ];

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your enquiry and will contact you within 24 hours.
          </p>
          <Button
            onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
            className="gap-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <FaWhatsapp className="h-4 w-4" />
            Or Chat Now on WhatsApp
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a Free Quote</CardTitle>
        <CardDescription>
          Fill out this form and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                data-testid="input-contact-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+62 xxx xxx xxx"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                data-testid="input-contact-phone"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              data-testid="input-contact-email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => handleChange("propertyType", value)}
              >
                <SelectTrigger data-testid="select-property-type">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceArea">Service Area *</Label>
              <Select
                value={formData.serviceArea}
                onValueChange={(value) => handleChange("serviceArea", value)}
              >
                <SelectTrigger data-testid="select-service-area">
                  <SelectValue placeholder="Select your area" />
                </SelectTrigger>
                <SelectContent>
                  {serviceAreas.map((area) => (
                    <SelectItem key={area.value} value={area.value}>
                      {area.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your pool and what services you need..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="min-h-[100px]"
              data-testid="textarea-contact-message"
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <p>
              By submitting this form, you agree to our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . We will only use your information to respond to your enquiry.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-black hover:bg-gray-800 text-white"
            disabled={mutation.isPending || !formData.name || !formData.email || !formData.phone || !formData.propertyType || !formData.serviceArea}
            data-testid="button-contact-submit"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Enquiry
              </>
            )}
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Or contact us directly</p>
            <Button
              type="button"
              variant="outline"
              className="gap-2"
              onClick={() => window.open("https://wa.me/6282340709041", "_blank")}
              data-testid="button-contact-whatsapp"
            >
              <FaWhatsapp className="h-4 w-4 text-green-600" />
              Chat on WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
