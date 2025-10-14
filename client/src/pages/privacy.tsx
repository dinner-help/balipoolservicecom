import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">How we handle your data under Indonesia's UU PDP to deliver reliable, transparent service</p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect only what's needed to deliver and improve our services:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Contact information (name, email, phone)</li>
                <li>• Property and pool service details</li>
                <li>• Communications and support requests</li>
                <li>• Technical data (IP address, browser, device)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Payment Security:</strong> Payments are processed by our payment provider. We do not store credit card details.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights Under UU PDP No. 27/2022</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under Indonesia's Personal Data Protection Law, you can:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Request access to your personal data</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Withdraw consent where applicable</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For requests, contact: <a href="mailto:hello@balipoolservice.com" className="text-primary hover:underline">hello@balipoolservice.com</a>
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Purposes</h3>
                  <p>Deliver services, process payments, provide support, make improvements, and send optional marketing with consent.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sharing</h3>
                  <p>Service providers for hosting, analytics, email, and payments; advisors; and authorities where required by law.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Retention</h3>
                  <p>We keep data only as long as needed for operations, tax compliance, and legal requirements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security</h3>
                  <p>Encryption in transit, access controls, and ongoing safeguards to protect your information.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">International Transfers</h3>
                  <p>If data leaves Indonesia, we use appropriate safeguards. EU/UK GDPR applies only to EU/UK users where relevant.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about how we handle your data or want to exercise your rights:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@balipoolservice.com</p>
                <p><strong>Phone/WhatsApp:</strong> +62123445566</p>
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
