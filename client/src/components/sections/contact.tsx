import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBg from "@assets/stock_images/professional_pool_cl_080f5e4c.jpg";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      serviceArea: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    // Create WhatsApp message with all form data
    const message = `*New Pool Service Inquiry*

📝 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🏠 *Property Type:* ${data.propertyType}
📍 *Service Area:* ${data.serviceArea}${data.message ? `\n💬 *Message:* ${data.message}` : ''}

_Sent from Pool Service Bali website_`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/6282237565997?text=${encodedMessage}`, '_blank');
    
    // Show success message and reset form
    setIsSubmitted(true);
    form.reset();
    toast({
      title: "Opening WhatsApp...",
      description: "Your inquiry is being sent via WhatsApp with all your details.",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const propertyTypes = [
    "Private Villa",
    "Rental Villa",
    "Boutique Hotel",
    "Resort",
    "Property Management Company",
    "Other",
  ];

  const serviceAreas = [
    "Seminyak",
    "Canggu",
    "Uluwatu",
    "Sanur",
    "Nusa Dua",
    "Jimbaran",
    "Ubud",
    "Denpasar",
    "Other Area",
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Pool Assessment
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact us today for a free, no-obligation assessment and custom quote. We respond within hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <FaWhatsapp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your request and will contact you shortly via WhatsApp or email.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} data-testid="button-submit-another">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="+62 812 3456 7890" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="propertyType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-property-type">
                                  <SelectValue placeholder="Select property type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {propertyTypes.map((type) => (
                                  <SelectItem 
                                    key={type} 
                                    value={type}
                                    data-testid={`option-property-${type.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="serviceArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Area</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service-area">
                                <SelectValue placeholder="Select your area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceAreas.map((area) => (
                                <SelectItem 
                                  key={area} 
                                  value={area}
                                  data-testid={`option-area-${area.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  {area}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your pool and service needs..."
                              className="resize-none h-32"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2" 
                      data-testid="button-submit-contact"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">Quick Contact via WhatsApp</h3>
              <p className="mb-6 opacity-90">
                Get an instant response and free quote through WhatsApp
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.open("https://wa.me/6282237565997", "_blank")}
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="h-6 w-6" />
                Chat on WhatsApp
              </Button>
            </Card>

            {/* Contact Details */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4" data-testid="info-phone">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone / WhatsApp</div>
                    <a href="tel:+6282237565997" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
                      +62 822 3756 5997
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="info-email">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@balipoolservice.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                      info@balipoolservice.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="info-address">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Office Location</div>
                    <p className="text-muted-foreground">
                      Jl. Sunset Road No. 88<br />
                      Seminyak, Bali 80361
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="info-hours">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Service Hours</div>
                    <p className="text-muted-foreground">
                      24/7 Emergency Support<br />
                      Office: Mon-Sat 8AM-6PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
