import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Droplets,
  Wrench,
  Building2,
  CheckCircle2,
  Phone,
  Beaker,
  Zap,
  AlertCircle
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BahasaServices() {
  const services = [
    {
      icon: Sparkles,
      title: "Pembersihan Kolam Renang",
      description: "Layanan pembersihan rutin untuk menjaga kolam Anda tetap bersih dan aman",
      features: [
        "Skimming permukaan kolam (buang daun, kotoran, serangga)",
        "Vakum dasar kolam dan dinding",
        "Sikat keramik dan waterline untuk buang lumut",
        "Bersihkan skimmer basket & pump basket",
        "Buang kotoran dari filter",
        "Photo report setelah setiap kunjungan"
      ],
      price: "Mulai Rp 450rb/bulan",
      cta: "Pesan Pembersihan"
    },
    {
      icon: Droplets,
      title: "Perawatan & Kimia Kolam",
      description: "Balancing kimia air untuk kesehatan dan kenyamanan berenang",
      features: [
        "Test pH, klorin, alkalinitas setiap kunjungan",
        "Balancing kimia air sesuai standar",
        "Tambah klorin, pH up/down, algaecide",
        "Shock treatment bila perlu",
        "Semua bahan kimia premium termasuk",
        "Pencatatan riwayat kimia digital"
      ],
      price: "Termasuk dalam paket",
      cta: "Info Kimia Kolam"
    },
    {
      icon: Wrench,
      title: "Perbaikan & Servis",
      description: "Perbaikan dan maintenance peralatan kolam renang",
      features: [
        "Servis pompa kolam (semua merk)",
        "Perbaikan & ganti sand filter / cartridge filter",
        "Perbaikan sistem sirkulasi air",
        "Ganti lampu kolam LED underwater",
        "Perbaikan bocor pada pipa & sambungan",
        "Teknisi berpengalaman 5+ tahun"
      ],
      price: "Harga berdasarkan jenis perbaikan",
      cta: "Hubungi untuk Perbaikan"
    },
    {
      icon: Building2,
      title: "Pembangunan Kolam Baru",
      description: "Desain dan konstruksi kolam renang untuk villa, hotel, rumah",
      features: [
        "Konsultasi gratis dengan arsitek kolam",
        "Desain 3D sesuai budget & lokasi",
        "Konstruksi dengan material berkualitas",
        "Instalasi sistem filter & pompa",
        "Finishing keramik, waterline, coping",
        "Garansi konstruksi 2 tahun"
      ],
      price: "Survey & quote gratis",
      cta: "Konsultasi Kolam Baru"
    }
  ];

  const emergencyServices = [
    {
      icon: AlertCircle,
      title: "Kolam Hijau / Keruh",
      description: "Kolam berubah hijau atau keruh mendadak? Kami bisa perbaiki dalam 1-2 hari.",
      response: "Respon 2-4 jam"
    },
    {
      icon: Wrench,
      title: "Pompa / Filter Rusak",
      description: "Pompa mati, filter bocor, atau masalah sirkulasi? Teknisi datang hari yang sama.",
      response: "Same day service"
    },
    {
      icon: Zap,
      title: "Kebocoran Kolam",
      description: "Air kolam terus berkurang? Kami cek dan perbaiki kebocoran dengan cepat.",
      response: "Survey dalam 24 jam"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Layanan Jasa Kolam Renang Bali | Pembersihan, Perbaikan, Kimia & Pembangunan</title>
        <meta 
          name="description" 
          content="Jasa lengkap kolam renang: pembersihan rutin, perawatan kimia, perbaikan pompa/filter, pembangunan kolam baru. Layanan darurat 24/7 di seluruh Bali. Teknisi bersertifikat." 
        />
        <meta name="keywords" content="jasa pembersihan kolam renang bali, perawatan kolam renang, perbaikan kolam renang, service pompa kolam, kimia kolam renang, pembangunan kolam renang bali" />
        
        <meta property="og:title" content="Layanan Lengkap Kolam Renang di Bali" />
        <meta property="og:description" content="Pembersihan, perawatan, perbaikan, dan pembangunan kolam. Teknisi profesional, harga transparan, layanan darurat 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipool.services/id/layanan" />
        <link rel="alternate" hreflang="en" href="https://balipool.services/services" />
        <link rel="alternate" hreflang="id" href="https://balipool.services/id/layanan" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" data-testid="badge-services-hero">
                <Wrench className="w-3 h-3 mr-1" />
                Layanan Profesional
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-services-hero">
                Solusi Lengkap untuk Kolam Renang Anda
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Dari pembersihan rutin hingga pembangunan kolam baru. Tim profesional dengan pengalaman 5+ tahun melayani seluruh Bali.
              </p>

              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-hero"
              >
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya ingin tanya tentang layanan kolam renang. Bisa kirim info lengkap?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" data-testid={`service-section-${index}`}>
                  <div>
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`heading-service-${index}`}>
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <Badge variant="secondary" className="text-base">
                        {service.price}
                      </Badge>
                    </div>
                    <Button 
                      size="lg"
                      asChild
                      data-testid={`button-service-${index}`}
                    >
                      <a 
                        href={`https://wa.me/6282237565997?text=Halo! Saya tertarik dengan ${service.title}. Bisa kirim info detail?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2 h-4 w-4" />
                        {service.cta}
                      </a>
                    </Button>
                  </div>

                  <Card className="hover-elevate" data-testid={`card-service-${index}`}>
                    <CardHeader>
                      <CardTitle>Yang Termasuk:</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4" data-testid="badge-emergency">
                <AlertCircle className="w-3 h-3 mr-1" />
                Layanan Darurat 24/7
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="heading-emergency">
                Butuh Bantuan Cepat?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Masalah kolam tidak bisa menunggu. Tim darurat kami siap membantu kapan saja.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {emergencyServices.map((emergency, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-emergency-${index}`}>
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                      <emergency.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">{emergency.title}</CardTitle>
                    <Badge variant="destructive" className="w-fit mt-2">
                      {emergency.response}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {emergency.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="destructive"
                className="text-lg px-8"
                asChild
                data-testid="button-emergency-call"
              >
                <a 
                  href="https://wa.me/6282237565997?text=DARURAT! Saya butuh bantuan segera untuk kolam renang!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Sekarang: +62 822 3756 5997
                </a>
              </Button>
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
              Konsultasi gratis, survey lokasi, dan penawaran harga tanpa komitmen. Hubungi kami hari ini.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta"
              >
                <a 
                  href="https://wa.me/6282237565997?text=Halo! Saya ingin konsultasi tentang layanan kolam renang. Bisa kirim info paket?"
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
                  Telepon Sekarang
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
