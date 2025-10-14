import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund and Cancellation Policy</h1>
            <p className="text-muted-foreground">Straightforward timelines and fees designed for villas and hospitality operations</p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Customer Cancellations</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[160px]">Free Cancellation:</span>
                  <span>Up to 24 hours before the scheduled appointment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[160px]">Within 24 Hours:</span>
                  <span>Cancellations within 24 hours may incur a 50% fee</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[160px]">No-Shows:</span>
                  <span>No-shows are charged the full service amount</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Cancellations or Delays</h2>
              <p className="text-muted-foreground leading-relaxed">
                If we cancel or significantly delay your service, you may choose a rescheduled time or receive a full refund.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Partial Refunds and Quality Concerns</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are dissatisfied with our service, please contact us within 48 hours. We will assess the situation and may offer a partial refund or re-service at our discretion. Your satisfaction is our priority.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">How Refunds Are Processed</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds are returned to the original payment method within 5–10 business days, subject to your payment provider's processing times.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Contact us to discuss cancellations or refund requests:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@balipoolservice.com</p>
                <p><strong>Phone/WhatsApp:</strong> +628113702343</p>
                <p><strong>Address:</strong> Jalan Nakula No. 9, Legian, Kuta, Badung, Bali 80361, Indonesia</p>
                <p><strong>Hours:</strong> 24/7 availability</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
