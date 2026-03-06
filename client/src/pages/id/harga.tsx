import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Building,
  Building2,
  Star,
  CheckCircle2,
  Phone,
  Clock,
  Shield
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BahasaPricing() {
  const packages = [
    {
      name: "Paket Rumah",
      icon: Home,
      ideal: "Untuk rumah pribadi & villa kecil",
      price: "Rp 750.000",
      period: "/bulan",
      visits: "1x per minggu (weekly)",
      popular: false,
      features: [
        "Pembersihan permukaan & vakum",
        "Sikat keramik & waterline",
        "Test & balancing kimia air",
        "Semua bahan kimia termasuk",
        "Bersihkan filter",
        "Cek peralatan kolam",
        "Photo report setiap kunjungan",
        "WhatsApp support"
      ]
    },
    {
      name: "Paket Villa Premium",
      icon: Building,
      ideal: "Untuk villa rental & homestay",
      price: "Rp 1.500.000",
      period: "/bulan",
      visits: "2x per minggu (8x/bulan)",
      popular: true,
      features: [
        "Semua layanan Paket Rumah",
        "Kunjungan mingguan (4x/bulan)",
        "Pre-guest deep cleaning",
        "Koordinasi dengan property manager",
        "Layanan darurat prioritas",
        "Digital dashboard access",
        "Riwayat perawatan lengkap",
        "Respon dalam 2 jam"
      ]
    },
    {
      name: "Paket Hotel & Resort",
      icon: Building2,
      ideal: "Untuk hotel, resort, multi-pool",
      price: "Rp 3.750.000",
      period: "/bulan per kolam",
      visits: "3x per minggu / harian",
      popular: false,
      features: [
        "Kunjungan harian (Senin-Sabtu)",
        "Multi-pool management",
        "Dokumentasi compliance lengkap",
        "Dedicated technician team",
        "Layanan darurat 24/7",
        "Advanced water chemistry",
        "Equipment optimization",
        "Monthly audit reports"
      ]
    }
  ];

  const addOns = [
    {
      title: "Perbaikan Pompa/Filter",
      price: "Mulai Rp 500rb",
      description: "Servis, perbaikan, atau ganti pompa dan filter kolam"
    },
    {
      title: "Ganti Lampu LED",
      price: "Rp 800rb - 2jt",
      description: "Lampu LED underwater dengan garansi 1 tahun"
    },
    {
      title: "Treatment Kolam Hijau",
      price: "Rp 1.875jt - 3.75jt",
      description: "Shock treatment & pembersihan intensif untuk kolam hijau/keruh"
    },
    {
      title: "Acid Wash Keramik",
      price: "Rp 2jt - 5jt",
      description: "Pembersihan keramik dengan acid untuk buang noda membandel"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Harga Jasa Perawatan Kolam Renang Bali | Biaya Service Kolam Murah & Transparan</title>
        <meta 
          name="description" 
          content="Daftar harga jasa perawatan kolam renang di Bali. Paket mulai Rp 750rb/bulan, semua kimia termasuk. Harga transparan, tidak ada biaya tersembunyi. Rumah, villa, hotel." 
        />
        <meta name="keywords" content="biaya perawatan kolam renang, harga jasa kolam renang bali, biaya service kolam renang, harga pembersihan kolam, biaya maintenance kolam renang per bulan" />
        
        <meta property="og:title" content="Harga Jasa Kolam Renang Bali - Paket Mulai 750rb/bulan" />
        <meta property="og:description" content="Paket lengkap perawatan kolam: Rumah (750rb), Villa (1.5jt), Hotel (3.75jt). Semua kimia termasuk, harga transparan, garansi puas." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipoolservice.com/id/harga" />
        <link rel="alternate" hreflang="en" href="https://balipoolservice.com/pricing" />
        <link rel="alternate" hreflang="id" href="https://balipoolservice.com/id/harga" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" data-testid="badge-pricing-hero">
                <Shield className="w-3 h-3 mr-1" />
                Harga Transparan
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-pricing-hero">
                Paket & Harga Jasa Kolam Renang
                <span className="block text-primary mt-2">Tidak Ada Biaya Tersembunyi</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Pilih paket sesuai kebutuhan Anda. Semua bahan kimia sudah termasuk. Harga tetap setiap bulan.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm">Semua kimia termasuk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm">Garansi kepuasan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm">Kontrak fleksibel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative hover-elevate ${pkg.popular ? 'border-primary border-2' : ''}`}
                  data-testid={`card-package-${index}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground" data-testid="badge-popular">
                        <Star className="w-3 h-3 mr-1" />
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.ideal}</p>
                    <div className="mb-4">
                      <p className="text-4xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground mt-1">{pkg.period}</p>
                      <Badge variant="secondary" className="mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {pkg.visits}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    <div className="pt-6">
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                        data-testid={`button-package-${index}`}
                      >
                        <a 
                          href={`https://wa.me/6282237565997?text=Halo! Saya tertarik dengan ${pkg.name}. Bisa kirim info detail?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp className="mr-2 h-4 w-4" />
                          Pilih Paket Ini
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Butuh paket khusus atau punya banyak kolam? Kami sedia paket custom.
              </p>
              <Button variant="outline" size="lg" asChild data-testid="button-custom">
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya butuh paket custom untuk kolam renang. Bisa diskusi?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Minta Paket Custom
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-addons">
                <Star className="w-3 h-3 mr-1" />
                Layanan Tambahan
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-addons">
                Perbaikan & Service Khusus
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Layanan one-time untuk perbaikan atau pembersihan khusus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOns.map((addon, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-addon-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{addon.title}</CardTitle>
                        <p className="text-2xl font-bold text-primary">{addon.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{addon.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                      data-testid={`button-addon-${index}`}
                    >
                      <a 
                        href={`https://wa.me/6282237565997?text=Halo! Saya butuh ${addon.title}. Bisa kasih info detail?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2 h-4 w-4" />
                        Tanya Detail
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-faq">
                Pertanyaan Seputar Harga
              </h2>
            </div>

            <div className="space-y-6">
              <Card data-testid="card-faq-0">
                <CardHeader>
                  <CardTitle className="text-lg">Apa saja yang termasuk dalam harga paket?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Semua bahan kimia (klorin, pH up/down, algaecide), tenaga kerja, peralatan pembersih, photo report, dan WhatsApp support sudah termasuk. Tidak ada biaya tambahan untuk kimia.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-faq-1">
                <CardHeader>
                  <CardTitle className="text-lg">Apakah ada biaya pendaftaran atau kontrak minimum?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tidak ada biaya pendaftaran. Kontrak bulanan yang bisa dihentikan kapan saja dengan pemberitahuan 1 minggu sebelumnya.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-faq-2">
                <CardHeader>
                  <CardTitle className="text-lg">Bagaimana cara pembayaran?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bayar di awal bulan via transfer bank. Kami kirim invoice digital setiap bulan. Bisa juga cash kepada teknisi saat kunjungan pertama.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-faq-3">
                <CardHeader>
                  <CardTitle className="text-lg">Kalau kolam saya besar/kecil, harganya sama?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Harga di atas untuk ukuran kolam standar (3x6m s/d 5x10m). Untuk kolam yang lebih besar atau Olympic size, ada penyesuaian harga. Hubungi kami untuk survey gratis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
              Siap Mulai Perawatan Kolam Profesional?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Survey gratis, konsultasi tanpa komitmen, dan penawaran terbaik untuk Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta"
              >
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya mau tanya paket perawatan kolam renang. Bisa kirim detail harga?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Chat via WhatsApp
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
                  Telepon: +62 822 3756 5997
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
