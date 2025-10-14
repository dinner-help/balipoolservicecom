import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";

export default function Accessibility() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-muted-foreground">Our commitment to an inclusive, easy-to-use website</p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to make our website accessible to everyone and are working towards WCAG 2.1 AA compliance. We believe that all users, regardless of ability, should have access to our pool services and information.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Measures We Take</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Semantic HTML and ARIA:</strong> Proper structure and labels for screen readers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Keyboard Navigability:</strong> Full keyboard navigation and visible focus states</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Color Contrast:</strong> Sufficient contrast ratios and scalable text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Alt Text:</strong> Descriptive alternative text for all meaningful images</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are continually working to improve our website's accessibility. Some third-party content and legacy features may not yet meet all accessibility standards. We are actively addressing these issues.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you encounter any accessibility barriers on our website, please let us know. Include the page URL and describe the issue you're experiencing. We'll respond within 3 business days.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@balipoolservice.com</p>
                <p><strong>Phone/WhatsApp:</strong> +62123445566</p>
                <p><strong>Address:</strong> Jalan Nakula No. 9, Legian, Kuta, Badung, Bali 80361, Indonesia</p>
                <p><strong>Response Time:</strong> Within 3 business days</p>
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Alternative Formats</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you need information from this website in a different format (large print, audio, etc.), please contact us and we'll be happy to provide it.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
