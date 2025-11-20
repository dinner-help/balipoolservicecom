import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Your choices for analytics and marketing cookies</p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that help websites function, measure performance, and personalize experiences. They are stored on your device when you visit our website.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Strictly Necessary</h3>
                  <p>Core features such as security and access to essential website functionality.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance and Analytics</h3>
                  <p>Understand site usage and improve quality through tools like Google Analytics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Functional</h3>
                  <p>Remember your preferences, such as language and region settings.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Marketing</h3>
                  <p>Deliver relevant promotions and advertising if you have enabled them.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Consent and Management</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• We set essential cookies to operate the site</li>
                <li>• Analytics and marketing cookies are used with consent where required</li>
                <li>• You can change preferences any time in Cookie Settings or your browser</li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Example Cookies</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">_ga, _gid</p>
                  <p className="text-sm text-muted-foreground">Google Analytics — Analytics — 13 months</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">stripe_mid, stripe_sid</p>
                  <p className="text-sm text-muted-foreground">Stripe — Payment security — Per Stripe policy</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questions about our cookie use? Contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@balipoolservice.com</p>
                <p><strong>Phone/WhatsApp:</strong> +6282237565997</p>
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
