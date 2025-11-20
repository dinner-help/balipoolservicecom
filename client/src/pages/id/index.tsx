import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Calendar,
  Clock,
  Wrench,
  Droplets,
  Phone,
  CheckCircle2,
  Star,
  Award,
  Users,
  Sparkles,
  Home,
  Building2,
  TrendingUp
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function BahasaHome() {
  const services = [
    {
      icon: Sparkles,
      title: "Pembersihan Kolam Renang",
      description: "Pembersihan rutin permukaan, vakum dasar & dinding kolam, sikat keramik. Kolam bersih kristal setiap minggu."
    },
    {
      icon: Droplets,
      title: "Perawatan & Kimia",
      description: "Tes & balancing pH, klorin, alkalinitas. Semua bahan kimia premium termasuk dalam paket layanan."
    },
    {
      icon: Wrench,
      title: "Perbaikan & Servis",
      description: "Perbaikan pompa, filter, sistem sirkulasi. Teknisi berpengalaman untuk segala jenis peralatan kolam."
    },
    {
      icon: Building2,
      title: "Pembangunan Kolam Baru",
      description: "Desain & konstruksi kolam renang baru untuk villa, hotel, dan rumah. Konsultasi gratis dari arsitek kolam."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Garansi Kepuasan 100%",
      description: "Tidak puas? Kami perbaiki gratis atau uang kembali. Komitmen kami untuk kualitas terbaik."
    },
    {
      icon: Clock,
      title: "Layanan Darurat 24/7",
      description: "Kolam hijau mendadak? Pompa rusak? Tim kami siap membantu kapan saja di seluruh Bali."
    },
    {
      icon: Award,
      title: "500+ Properti Dipercaya",
      description: "Melayani villa, hotel, resort, dan rumah pribadi di Seminyak, Canggu, Ubud, Denpasar, dan seluruh Bali."
    },
    {
      icon: Star,
      title: "Teknisi Bersertifikat",
      description: "Tim profesional terlatih dengan standar internasional. Berpengalaman 5+ tahun menangani semua jenis kolam."
    },
    {
      icon: TrendingUp,
      title: "Harga Transparan",
      description: "Tidak ada biaya tersembunyi. Paket all-inclusive dengan harga tetap per bulan, termasuk semua bahan kimia."
    },
    {
      icon: Users,
      title: "Laporan Digital",
      description: "Photo report setelah setiap kunjungan. Dashboard online untuk tracking riwayat perawatan kolam Anda."
    }
  ];

  const serviceAreas = [
    "Seminyak", "Canggu", "Ubud", "Denpasar", "Sanur", "Kuta",
    "Nusa Dua", "Jimbaran", "Uluwatu", "Pererenan", "Berawa", "Echo Beach"
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      property: "Pemilik Villa - Seminyak",
      rating: 5,
      text: "Sudah 2 tahun pakai jasa mereka untuk 3 villa saya. Kolam selalu bersih, tamu-tamu senang. Pelayanan profesional dan harga sangat wajar."
    },
    {
      name: "Made Surya",
      property: "Hotel Manager - Ubud",
      rating: 5,
      text: "Untuk hotel kami dengan 2 kolam renang, mereka sangat reliable. Datang tepat waktu, laporan lengkap, dan tim yang sopan. Recommended!"
    },
    {
      name: "Sarah Chen",
      property: "Property Manager - Canggu",
      rating: 5,
      text: "Mengelola 15 villa, butuh layanan yang konsisten. Sistem dashboard mereka memudahkan saya monitor semua properti. Sangat membantu!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Jasa Perawatan Kolam Renang Bali | Pembersihan & Service Kolam Profesional</title>
        <meta 
          name="description" 
          content="Jasa perawatan kolam renang terpercaya di Bali. Pembersihan rutin, perbaikan, kimia kolam, layanan darurat 24/7. Melayani Seminyak, Canggu, Ubud, Denpasar. Harga mulai Rp 450rb/bulan." 
        />
        <meta name="keywords" content="jasa perawatan kolam renang bali, jasa pembersihan kolam renang, service kolam renang bali, perawatan kolam renang seminyak, pembersihan kolam canggu, jasa kolam renang denpasar, biaya perawatan kolam renang" />
        
        <meta property="og:title" content="Jasa Perawatan Kolam Renang Profesional di Bali" />
        <meta property="og:description" content="Layanan pembersihan & perawatan kolam renang terpercaya. 500+ properti, harga transparan, teknisi bersertifikat. Hubungi via WhatsApp!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipool.services/id" />
        <link rel="alternate" hreflang="en" href="https://balipool.services/" />
        <link rel="alternate" hreflang="id" href="https://balipool.services/id" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl">
              <Badge className="mb-6" data-testid="badge-bahasa-hero">
                <Home className="w-3 h-3 mr-1" />
                Layanan Profesional di Seluruh Bali
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-bahasa-hero">
                Jasa Perawatan Kolam Renang Terpercaya di Bali
                <span className="block text-primary mt-2">Kolam Bersih, Hati Tenang</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-bahasa-hero-subtitle">
                Pembersihan rutin, perbaikan, kimia kolam, dan layanan darurat 24/7. Dipercaya oleh 500+ villa, hotel, dan rumah di seluruh Bali.
              </p>

              {/* Value Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="border-primary/20" data-testid="card-value-price">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Mulai Rp 450rb/bulan</p>
                        <p className="text-sm text-muted-foreground">Semua kimia termasuk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-emergency">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Layanan Darurat 24/7</p>
                        <p className="text-sm text-muted-foreground">Respon cepat di hari sama</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-value-trusted">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">500+ Properti</p>
                        <p className="text-sm text-muted-foreground">Terpercaya sejak 2018</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  asChild
                  data-testid="button-whatsapp-cta-hero"
                >
                  <a 
                    href="https://wa.me/6282237565997?text=Halo! Saya ingin tanya tentang jasa perawatan kolam renang. Bisa kirim info harga dan paket?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    Hubungi via WhatsApp
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                  data-testid="button-view-pricing"
                >
                  <Link href="/id/harga">
                    Lihat Paket & Harga
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                <CheckCircle2 className="w-4 h-4 inline mr-1 text-primary" />
                Konsultasi gratis · Harga transparan · Garansi kepuasan
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-services">
                <Wrench className="w-3 h-3 mr-1" />
                Layanan Kami
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-services">
                Solusi Lengkap untuk Kolam Renang Anda
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dari pembersihan rutin hingga pembangunan kolam baru, kami siap membantu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild data-testid="button-all-services">
                <Link href="/id/layanan">
                  Lihat Semua Layanan
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-benefits">
                <Star className="w-3 h-3 mr-1" />
                Kenapa Pilih Kami
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-benefits">
                Layanan Berkualitas dengan Harga Terjangkau
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-coverage">
                <Home className="w-3 h-3 mr-1" />
                Area Layanan
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-coverage">
                Melayani Seluruh Bali
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Teknisi tersebar di berbagai area untuk respon cepat dan layanan terbaik
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceAreas.map((area, index) => (
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

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Area Anda tidak terdaftar? Hubungi kami untuk konfirmasi cakupan layanan
              </p>
              <Button variant="outline" asChild data-testid="button-contact-area">
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Apakah melayani area saya?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Tanya Area Layanan
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-testimonials">
                <Users className="w-3 h-3 mr-1" />
                Testimoni Pelanggan
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-testimonials">
                Apa Kata Mereka
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-final-cta">
              Siap untuk Kolam yang Selalu Bersih?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Bergabung dengan 500+ pemilik properti yang percaya pada layanan kami. Dapatkan penawaran khusus hari ini.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta-final"
              >
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya tertarik dengan jasa perawatan kolam renang. Bisa kirim detail paket dan harga?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Minta Penawaran Gratis
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
                data-testid="button-call-now"
              >
                <a href="tel:+6282237565997">
                  <Phone className="mr-2 h-5 w-5" />
                  Telepon: +62 822 3756 5997
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card data-testid="card-guarantee-visit">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Kunjungan Gratis</p>
                  <p className="text-sm text-muted-foreground">Survey & konsultasi tanpa biaya</p>
                </CardContent>
              </Card>
              <Card data-testid="card-guarantee-contract">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Kontrak Fleksibel</p>
                  <p className="text-sm text-muted-foreground">Bulanan, bisa berhenti kapan saja</p>
                </CardContent>
              </Card>
              <Card data-testid="card-guarantee-satisfaction">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <p className="font-semibold mb-1">Garansi Puas</p>
                  <p className="text-sm text-muted-foreground">Tidak puas? Kami perbaiki!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
