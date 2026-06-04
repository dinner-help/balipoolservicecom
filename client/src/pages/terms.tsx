import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: October 14, 2025</p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our website and services, you agree to these Terms. If you do not agree, please do not use the services.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide pool maintenance, repair, construction, renovation, and related services as described on our website and in your booking confirmation. We may update, suspend, or discontinue features at any time.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">3. Accounts and Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for your account credentials and for providing accurate information.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">4. Bookings, Changes, and Cancellations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[140px]">Confirmation:</span>
                  <span>A booking is confirmed when you receive written confirmation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[140px]">Rescheduling:</span>
                  <span>You can reschedule via your account or by contacting us, subject to availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[140px]">Cancellations:</span>
                  <span>See Refund and Cancellation Policy.</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">5. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prices are shown before checkout. Taxes and fees may apply. Payment is due at booking unless otherwise stated.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">6. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                Do not misuse the services, interfere with operations, or attempt unauthorized access.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All site content is owned by us or our licensors. You may not copy, modify, or distribute content without permission.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Services are provided "as is" to the fullest extent permitted by law. We strive for professional quality but do not guarantee specific outcomes unless agreed in writing.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">9. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential losses. Our aggregate liability is capped at the amount paid for the applicable service.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">10. Indemnity</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify us for claims arising from your misuse of the services or violation of these Terms.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Indonesia. Disputes will be resolved in the courts of Denpasar, Indonesia, subject to any mandatory consumer protections.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to the Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms as needed. Continued use after changes indicates acceptance of the updated Terms.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@balipoolservice.com</p>
                <p><strong>Phone/WhatsApp:</strong> +6282323011656</p>
                <p><strong>Address:</strong> Jalan Nakula No. 9, Legian, Kuta, Badung, Bali 80361, Indonesia</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
