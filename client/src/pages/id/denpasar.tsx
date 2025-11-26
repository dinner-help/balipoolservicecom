import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Phone,
  Users,
  Shield
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BahasaDenpasar() {
  const coverage = [
    "Renon", "Sanur", "Sesetan", "Sidakarya", "Teuku Umar",
    "Gatot Subroto", "Bypass Ngurah Rai", "Panjer", "Kesiman", "Sumerta"
  ];

  const testimonials = [
    {
      name: "Pak Wayan",
      area: "Sanur",
      rating: 5,
      text: "Sudah 1 tahun pakai jasa mereka. Kolam rumah saya selalu bersih. Tim datang tepat waktu, kerja cepat dan rapi."
    },
    {
      name: "Ibu Linda",
      area: "Renon",
      rating: 5,
      text: "Pelayanan sangat profesional. Harga wajar, hasil memuaskan. Recommended untuk yang cari jasa kolam di Denpasar!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Jasa Perawatan Kolam Renang Denpasar | Service Kolam Sanur, Renon, Sesetan</title>
        <meta 
          name="description" 
          content="Jasa pembersihan & perawatan kolam renang profesional di Denpasar. Melayani Sanur, Renon, Sesetan, Sidakarya, dan sekitarnya. Teknisi lokal, respon cepat. Harga mulai 750rb/bulan." 
        />
        <meta name="keywords" content="jasa pembersihan kolam renang di denpasar, jasa kolam renang sanur, perawatan kolam renang denpasar, service kolam renang renon, jasa kolam sesetan" />
        
        <meta property="og:title" content="Jasa Kolam Renang Denpasar - Teknisi Profesional di Area Anda" />
        <meta property="og:description" content="Layanan pembersihan kolam di Denpasar: Sanur, Renon, Sesetan. Teknisi lokal berpengalaman, harga transparan, respon cepat." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipool.services/id/denpasar" />
        <link rel="alternate" hreflang="id" href="https://balipool.services/id/denpasar" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-location">
                <MapPin className="w-3 h-3 mr-1" />
                Area Denpasar
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-hero">
                Jasa Perawatan Kolam Renang di Denpasar
                <span className="block text-primary mt-2">Teknisi Lokal, Respon Cepat</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Melayani Sanur, Renon, Sesetan, Sidakarya, dan seluruh area Denpasar. Tim profesional siap bantu kolam Anda tetap bersih dan sehat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="border-primary/20" data-testid="card-value-local">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Teknisi Lokal</p>
                        <p className="text-sm text-muted-foreground">Area Denpasar & sekitar</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-response">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Respon 1-2 Jam</p>
                        <p className="text-sm text-muted-foreground">Same day service</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-trusted">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">100+ Klien</p>
                        <p className="text-sm text-muted-foreground">Di Denpasar</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  asChild
                  data-testid="button-whatsapp-hero"
                >
                  <a 
                    href="https://wa.me/6282237565997?text=Halo! Saya di Denpasar, mau tanya jasa perawatan kolam renang. Bisa kirim info?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Chat WhatsApp
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                  data-testid="button-call-hero"
                >
                  <a href="tel:+6282237565997">
                    <Phone className="mr-2 h-5 w-5" />
                    Telepon Sekarang
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-coverage">
                <MapPin className="w-3 h-3 mr-1" />
                Area yang Kami Layani
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-coverage">
                Cakupan Layanan di Denpasar
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {coverage.map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-base px-4 py-2"
                  data-testid={`badge-area-${index}`}
                >
                  {area}
                </Badge>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Tidak Menemukan Area Anda?</h3>
                <p className="text-muted-foreground mb-6">
                  Kami juga melayani area lain di sekitar Denpasar. Hubungi kami untuk konfirmasi cakupan layanan.
                </p>
                <Button asChild data-testid="button-check-area">
                  <a 
                    href="https://wa.me/6282237565997?text=Halo! Apakah melayani area [sebutkan area Anda] di Denpasar?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Cek Area Anda
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-services">
                Layanan Kami di Denpasar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-elevate" data-testid="card-service-0">
                <CardHeader>
                  <CardTitle className="text-xl">Pembersihan Rutin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Kunjungan mingguan atau bi-weekly untuk kolam rumah dan villa. Semua bahan kimia termasuk.
                  </p>
                  <p className="text-2xl font-bold text-primary mb-2">Mulai Rp 750rb/bulan</p>
                  <Button variant="outline" className="w-full" asChild data-testid="button-service-0">
                    <a 
                      href="https://wa.me/6282237565997?text=Halo! Saya di Denpasar, mau tanya paket pembersihan rutin."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanya Paket
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-service-1">
                <CardHeader>
                  <CardTitle className="text-xl">Perbaikan & Servis Darurat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pompa rusak? Kolam hijau mendadak? Tim kami bisa datang hari yang sama di area Denpasar.
                  </p>
                  <p className="text-lg font-semibold text-primary mb-2">Respon 1-2 jam</p>
                  <Button variant="outline" className="w-full" asChild data-testid="button-service-1">
                    <a 
                      href="https://wa.me/6282237565997?text=DARURAT! Saya di Denpasar, butuh bantuan kolam sekarang!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hubungi Darurat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-testimonials">
                <Users className="w-3 h-3 mr-1" />
                Testimoni
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-testimonials">
                Apa Kata Klien di Denpasar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.area}, Denpasar</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
              Butuh Jasa Kolam di Denpasar?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Hubungi kami sekarang. Survey gratis, harga transparan, teknisi profesional siap membantu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta"
              >
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya di Denpasar, mau konsultasi tentang jasa kolam renang."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Chat WhatsApp
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
                data-testid="button-call-cta"
              >
                <a href="tel:+6282237565997">
                  <Phone className="mr-2 h-5 w-5" />
                  +62 822 3756 5997
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
