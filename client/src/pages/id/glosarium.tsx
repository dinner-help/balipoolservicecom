import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BahasaGlossary() {
  const glossary = [
    {
      letter: "A-C",
      terms: [
        {
          term: "Algae (Lumut)",
          definition: "Organisme hijau yang tumbuh di kolam ketika kimia air tidak balance. Bisa bikin kolam jadi hijau dan licin."
        },
        {
          term: "Algaecide",
          definition: "Bahan kimia untuk bunuh dan cegah pertumbuhan lumut di kolam. Biasanya ditambahkan setiap minggu sebagai pencegahan."
        },
        {
          term: "Alkalinity (Alkalinitas)",
          definition: "Ukuran kemampuan air untuk melawan perubahan pH. Level ideal: 80-120 ppm. Alkalinitas yang stabil bikin pH lebih stabil."
        },
        {
          term: "Backwash",
          definition: "Proses membersihkan filter sand dengan membalik aliran air untuk buang kotoran yang tertangkap di pasir filter."
        },
        {
          term: "Cartridge Filter",
          definition: "Jenis filter yang pakai cartridge (seperti filter AC) untuk saring kotoran. Lebih mudah dibersihkan tapi harus diganti berkala."
        },
        {
          term: "Chlorine (Klorin)",
          definition: "Bahan kimia utama untuk bunuh bakteri dan bikin air kolam aman untuk berenang. Level ideal: 1-3 ppm."
        }
      ]
    },
    {
      letter: "D-F",
      terms: [
        {
          term: "Cyanuric Acid (Stabilizer)",
          definition: "Bahan kimia untuk lindungi klorin dari sinar matahari. Tanpa ini, klorin akan cepat menguap di bawah terik matahari Bali."
        },
        {
          term: "Filter",
          definition: "Alat untuk saring kotoran dari air kolam. Ada 3 jenis: sand filter (pasir), cartridge filter, dan DE filter."
        },
        {
          term: "Free Chlorine",
          definition: "Klorin aktif yang masih bisa bunuh bakteri. Ini yang diukur saat test air dan harus dijaga 1-3 ppm."
        }
      ]
    },
    {
      letter: "G-P",
      terms: [
        {
          term: "Green Pool (Kolam Hijau)",
          definition: "Kondisi ketika kolam berubah warna hijau karena pertumbuhan algae. Biasanya karena klorin habis atau filter tidak jalan."
        },
        {
          term: "Multiport Valve",
          definition: "Valve (keran putar) di filter sand yang punya beberapa setting: Filter, Backwash, Rinse, Waste, Recirculate, Closed."
        },
        {
          term: "pH",
          definition: "Ukuran keasaman air. Level ideal: 7.2-7.6. pH terlalu rendah bikin mata pedih, terlalu tinggi bikin klorin tidak efektif."
        },
        {
          term: "pH Down (Asam)",
          definition: "Bahan kimia untuk turunkan pH air yang terlalu tinggi (basa). Biasanya pakai asam hydrochloric atau asam sulfuric."
        },
        {
          term: "pH Up (Basa)",
          definition: "Bahan kimia untuk naikkan pH air yang terlalu rendah (asam). Biasanya pakai sodium carbonate (soda ash)."
        },
        {
          term: "Pump (Pompa)",
          definition: "Mesin yang dorong air kolam melalui filter dan kembali ke kolam. Jantungnya sistem sirkulasi kolam."
        }
      ]
    },
    {
      letter: "S-Z",
      terms: [
        {
          term: "Salt Chlorinator (Salt Pool)",
          definition: "Sistem yang buat klorin sendiri dari garam yang dilarutkan di air kolam. Lebih mahal tapi air lebih lembut di kulit."
        },
        {
          term: "Sand Filter",
          definition: "Jenis filter yang pakai pasir khusus untuk saring kotoran. Paling umum dipakai di Indonesia, tahan lama tapi butuh backwash rutin."
        },
        {
          term: "Shock Treatment",
          definition: "Proses tambah klorin dosis tinggi untuk bunuh bakteri dan algae secara cepat. Biasanya dilakukan saat kolam hijau atau setelah hujan deras."
        },
        {
          term: "Skimmer",
          definition: "Kotak di sisi kolam yang sedot air permukaan dan tangkap daun/kotoran sebelum masuk ke pompa."
        },
        {
          term: "Skimming",
          definition: "Proses buang daun, kotoran, dan serangga dari permukaan kolam pakai jaring (leaf net)."
        },
        {
          term: "Test Kit",
          definition: "Alat untuk test kimia air kolam: pH, klorin, alkalinitas, dll. Ada yang pakai drops (tetes) atau test strips."
        },
        {
          term: "Total Chlorine",
          definition: "Total semua klorin di air (free chlorine + combined chlorine). Selisih dengan free chlorine menunjukkan chloramine (klorin sudah terpakai)."
        },
        {
          term: "Vacuum (Vakum)",
          definition: "Alat untuk sedot kotoran dari dasar dan dinding kolam. Bisa manual (pakai pole) atau otomatis (robot cleaner)."
        },
        {
          term: "Waterline",
          definition: "Garis di sisi kolam dimana permukaan air bersentuhan dengan keramik. Sering kotor karena minyak dan kotoran menempel."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Glosarium Istilah Kolam Renang | Penjelasan Bahasa Indonesia</title>
        <meta 
          name="description" 
          content="Kamus istilah kolam renang dalam bahasa Indonesia. Penjelasan sederhana tentang pH, klorin, filter, pompa, dan istilah teknis kolam renang lainnya." 
        />
        <meta name="keywords" content="istilah kolam renang, kamus kolam renang, penjelasan pH kolam, apa itu klorin, glosarium kolam renang" />
        
        <meta property="og:title" content="Glosarium Istilah Kolam Renang - Bali Pool Services" />
        <meta property="og:description" content="Pahami istilah-istilah penting dalam perawatan kolam renang dengan penjelasan sederhana dalam bahasa Indonesia." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipoolservice.com/id/glosarium" />
        <link rel="alternate" hreflang="id" href="https://balipoolservice.com/id/glosarium" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" data-testid="badge-glossary-hero">
                <BookOpen className="w-3 h-3 mr-1" />
                Edukasi & Pengetahuan
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-glossary-hero">
                Glosarium Istilah Kolam Renang
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Pahami istilah-istilah penting dalam perawatan kolam renang dengan penjelasan sederhana
              </p>
            </div>
          </div>
        </section>

        {/* Glossary Sections */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="space-y-16">
              {glossary.map((section, sectionIndex) => (
                <div key={sectionIndex} data-testid={`glossary-section-${sectionIndex}`}>
                  <div className="mb-8">
                    <Badge className="mb-3" data-testid={`badge-letter-${sectionIndex}`}>
                      {section.letter}
                    </Badge>
                    <h2 className="text-3xl font-bold" data-testid={`heading-letter-${sectionIndex}`}>
                      Istilah {section.letter}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.terms.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover-elevate" data-testid={`card-term-${sectionIndex}-${itemIndex}`}>
                        <CardHeader>
                          <CardTitle className="text-lg text-primary">
                            {item.term}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.definition}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Butuh Penjelasan Lebih Detail?</h3>
                  <p className="text-muted-foreground mb-6">
                    Tim kami siap menjelaskan istilah-istilah ini dan membantu Anda memahami perawatan kolam dengan lebih baik. Konsultasi gratis!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    asChild
                    data-testid="button-whatsapp-info"
                  >
                    <a 
                      href="https://wa.me/6282237565997?text=Halo! Saya mau tanya tentang perawatan kolam renang."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Konsultasi Gratis
                    </a>
                  </Button>

                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    data-testid="button-call-info"
                  >
                    <a href="tel:+6282237565997">
                      <Phone className="mr-2 h-4 w-4" />
                      Telepon Sekarang
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Box */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tips Menggunakan Glosarium Ini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Simpan Halaman Ini</p>
                    <p className="text-sm text-muted-foreground">
                      Bookmark halaman ini untuk referensi cepat saat teknisi kami menjelaskan perawatan kolam Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Pahami Laporan Anda</p>
                    <p className="text-sm text-muted-foreground">
                      Kami kirim photo report dan test result setiap kunjungan. Gunakan glosarium ini untuk pahami apa yang kami kerjakan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Jangan Ragu Bertanya</p>
                    <p className="text-sm text-muted-foreground">
                      Kalau ada istilah yang belum jelas atau tidak ada di sini, langsung tanya via WhatsApp. Kami senang membantu!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
