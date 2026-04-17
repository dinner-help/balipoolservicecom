import { Helmet } from "react-helmet-async";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BahasaFAQ() {
  const faqs = [
    {
      category: "Layanan & Paket",
      questions: [
        {
          q: "Apa saja yang termasuk dalam layanan pembersihan kolam?",
          a: "Layanan standar kami meliputi: skimming permukaan, vakum dasar & dinding kolam, sikat keramik, test & balancing kimia air (pH, klorin, alkalinitas), bersihkan filter, cek peralatan, dan photo report. Semua bahan kimia sudah termasuk dalam harga paket."
        },
        {
          q: "Berapa kali kunjungan per bulan?",
          a: "Paket Rumah: 2x per bulan (bi-weekly), Paket Villa: 4x per bulan (weekly), Paket Hotel: daily service atau sesuai kebutuhan. Anda bisa pilih paket yang sesuai dengan kebutuhan kolam Anda."
        },
        {
          q: "Apakah saya harus sediakan bahan kimia sendiri?",
          a: "Tidak perlu! Semua bahan kimia (klorin, pH up/down, algaecide, dll) sudah termasuk dalam harga paket bulanan kami. Anda tidak perlu beli atau sediakan apa-apa."
        },
        {
          q: "Bagaimana kalau kolam saya sangat besar?",
          a: "Harga di website adalah untuk kolam ukuran standar (3x6m s/d 5x10m). Untuk kolam yang lebih besar, kami akan survey dulu dan kasih harga khusus yang sesuai. Survey gratis dan tanpa komitmen."
        }
      ]
    },
    {
      category: "Harga & Pembayaran",
      questions: [
        {
          q: "Berapa biaya untuk mulai menggunakan jasa Anda?",
          a: "Tidak ada biaya pendaftaran atau setup fee. Anda cukup bayar biaya paket bulanan saja. Untuk paket Rumah mulai Rp 750rb/bulan, Villa Rp 1.5jt/bulan, Hotel Rp 3.75jt/bulan per kolam."
        },
        {
          q: "Apakah ada kontrak minimum?",
          a: "Tidak ada kontrak tahunan. Kami pakai sistem kontrak bulanan yang bisa dihentikan kapan saja dengan pemberitahuan 1 minggu sebelumnya. Sangat fleksibel."
        },
        {
          q: "Bagaimana cara pembayarannya?",
          a: "Bayar di awal bulan via transfer bank ke rekening kami. Kami akan kirim invoice digital setiap bulan. Bisa juga cash kepada teknisi saat kunjungan pertama bulan itu."
        },
        {
          q: "Apakah harga sudah termasuk PPN?",
          a: "Ya, harga yang kami cantumkan sudah termasuk PPN dan semua biaya. Tidak ada biaya tersembunyi atau tambahan."
        }
      ]
    },
    {
      category: "Teknis & Peralatan",
      questions: [
        {
          q: "Apa yang harus saya lakukan sebelum kunjungan pertama?",
          a: "Tidak ada yang khusus. Pastikan saja gerbang/pintu bisa dibuka dan ada akses ke kolam. Tim kami bawa semua peralatan dan bahan kimia yang dibutuhkan."
        },
        {
          q: "Apakah saya harus ada di rumah saat teknisi datang?",
          a: "Tidak harus. Banyak klien kami yang bekerja atau sedang tidak di rumah. Tim kami profesional dan bisa bekerja sendiri. Setelah selesai kami kirim photo report via WhatsApp."
        },
        {
          q: "Bagaimana kalau pompa atau filter kolam saya rusak?",
          a: "Kami juga layani perbaikan peralatan kolam. Teknisi kami berpengalaman dengan semua merk pompa dan filter. Hubungi kami untuk diagnosis dan estimasi biaya perbaikan."
        },
        {
          q: "Kolam saya pakai sistem garam (salt chlorinator), bisa dihandle?",
          a: "Bisa! Tim kami berpengalaman dengan semua jenis sistem kolam, termasuk salt chlorinator, ozone, UV, dan sistem konvensional. Tidak masalah."
        }
      ]
    },
    {
      category: "Masalah Kolam",
      questions: [
        {
          q: "Kolam saya berubah hijau, apa yang harus dilakukan?",
          a: "Hubungi kami segera untuk layanan darurat. Kami bisa lakukan shock treatment dan pembersihan intensif untuk kembalikan kolam Anda jernih dalam 1-2 hari. Biaya treatment mulai Rp 1.5jt tergantung kondisi."
        },
        {
          q: "Kenapa air kolam saya selalu keruh meski sudah pakai klorin?",
          a: "Bisa karena berbagai hal: filter kotor/rusak, pH tidak balance, sirkulasi kurang, atau algae. Tim kami akan cek semua aspek dan kasih solusi yang tepat. Konsultasi gratis!"
        },
        {
          q: "Apakah Anda layani kolam yang sudah lama tidak terawat?",
          a: "Ya, kami sering handle kolam yang sudah bertahun-tahun tidak dirawat. Kami akan lakukan deep cleaning dan treatment khusus untuk kembalikan kondisi kolam seperti baru. Hubungi kami untuk survey."
        },
        {
          q: "Air kolam saya terus berkurang, apakah itu normal?",
          a: "Sedikit penurunan karena evaporasi itu normal (1-2cm per minggu di Bali). Tapi kalau turun drastis, kemungkinan ada kebocoran. Kami bisa cek dan perbaiki kebocoran untuk Anda."
        }
      ]
    },
    {
      category: "Area & Jadwal",
      questions: [
        {
          q: "Area mana saja yang Anda layani?",
          a: "Kami melayani seluruh Bali: Seminyak, Canggu, Ubud, Denpasar, Sanur, Kuta, Nusa Dua, Jimbaran, Uluwatu, Pererenan, Berawa, dan area lainnya. Hubungi kami untuk konfirmasi area Anda."
        },
        {
          q: "Apakah jadwal kunjungan bisa disesuaikan?",
          a: "Ya, sangat fleksibel. Kami bisa sesuaikan jadwal kunjungan dengan kebutuhan Anda. Untuk villa rental, kami juga bisa koordinasi dengan booking calendar Anda."
        },
        {
          q: "Bagaimana kalau saya perlu service dadakan sebelum tamu datang?",
          a: "Tidak masalah! Hubungi kami via WhatsApp dan kami akan usahakan kirim teknisi secepatnya (biasanya hari yang sama). Untuk klien regular, service dadakan ini gratis."
        },
        {
          q: "Apakah Anda buka di hari Minggu dan hari libur?",
          a: "Untuk layanan rutin, kami bekerja Senin-Sabtu. Tapi untuk darurat (kolam hijau, pompa rusak, dll), kami siap 24/7 termasuk Minggu dan hari libur."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ Jasa Kolam Renang Bali | Pertanyaan Seputar Perawatan & Service Kolam</title>
        <meta 
          name="description" 
          content="Pertanyaan yang sering ditanyakan seputar jasa perawatan kolam renang di Bali: harga, layanan, area, jadwal, pembayaran, dan troubleshooting masalah kolam." 
        />
        <meta name="keywords" content="faq jasa kolam renang, pertanyaan perawatan kolam, tanya jawab service kolam, cara perawatan kolam renang" />
        
        <meta property="og:title" content="FAQ Jasa Kolam Renang Bali" />
        <meta property="og:description" content="Temukan jawaban untuk pertanyaan Anda tentang layanan perawatan kolam renang kami." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        <link rel="canonical" href="https://balipoolservice.com/id/faq" />
        <link rel="alternate" hreflang="id" href="https://balipoolservice.com/id/faq" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6" data-testid="badge-faq-hero">
                <HelpCircle className="w-3 h-3 mr-1" />
                Bantuan & Informasi
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="heading-faq-hero">
                Pertanyaan yang Sering Ditanyakan
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Temukan jawaban untuk pertanyaan Anda seputar layanan perawatan kolam renang kami
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="space-y-16">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} data-testid={`faq-section-${sectionIndex}`}>
                  <div className="mb-8">
                    <Badge className="mb-3" data-testid={`badge-category-${sectionIndex}`}>
                      {section.category}
                    </Badge>
                    <h2 className="text-3xl font-bold" data-testid={`heading-category-${sectionIndex}`}>
                      {section.category}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="hover-elevate" data-testid={`card-faq-${sectionIndex}-${faqIndex}`}>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <span>{faq.q}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed pl-8">
                            {faq.a}
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

        {/* CTA */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-cta">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Jangan ragu untuk menghubungi kami. Tim kami siap menjawab semua pertanyaan Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
                data-testid="button-whatsapp-cta"
              >
                <a 
                  href="https://wa.me/6282340709041?text=Halo! Saya punya pertanyaan tentang jasa kolam renang."
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
                <a href="tel:+6282340709041">
                  <Phone className="mr-2 h-5 w-5" />
                  Telepon: +62 823 4070 9041
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
