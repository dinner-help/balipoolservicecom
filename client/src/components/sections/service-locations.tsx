import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ServiceLocations() {
  const locations = [
    // South Bali - Badung Regency (Most Popular)
    {
      area: "Seminyak",
      region: "South Bali",
      description: "Premium pool service Seminyak for luxury villas and boutique hotels. Expert pool maintenance Seminyak covering Petitenget, Oberoi, and beachfront properties. Professional pool cleaning Seminyak with same-day emergency response, chemical delivery, and digital reporting for expat villa owners.",
      keywords: "pool service seminyak, pool cleaning seminyak, pool maintenance seminyak",
      manager: "Wayan - Seminyak Area Manager"
    },
    {
      area: "Canggu",
      region: "South Bali",
      description: "Professional pool service Canggu for surf villas and rental properties. Specialized pool maintenance Canggu in Berawa, Batu Bolong, Echo Beach, and Pererenan. Expert pool cleaning Canggu with weekly service, water testing, and villa rental turnover cleaning for property managers.",
      keywords: "pool service canggu, pool cleaning canggu, pool maintenance canggu",
      manager: "Made - Canggu Area Manager"
    },
    {
      area: "Uluwatu",
      region: "South Bali",
      description: "Luxury pool service Uluwatu for cliff-top villas and ocean-view estates. Premium pool maintenance Uluwatu covering Pecatu, Ungasan, and Bingin Beach. Professional pool cleaning Uluwatu with salt-water system expertise, infinity pool care, and automated chemical monitoring for high-end properties.",
      keywords: "pool service uluwatu, pool cleaning uluwatu, pool maintenance uluwatu",
      manager: "Ketut - Uluwatu Area Manager"
    },
    {
      area: "Sanur",
      region: "East Denpasar",
      description: "Reliable pool service Sanur for family villas and beachside homes. Trusted pool maintenance Sanur in Sindhu, Mertasari, and Bypass areas. Expert pool cleaning Sanur with senior technicians, consistent scheduling, and transparent pricing for long-term residents and expats.",
      keywords: "pool service sanur, pool cleaning sanur, pool maintenance sanur",
      manager: "Komang - Sanur Area Manager"
    },
    {
      area: "Nusa Dua",
      region: "South Bali",
      description: "5-star pool service Nusa Dua for resort-style estates and gated communities. Premium pool maintenance Nusa Dua covering BTDC area, Sawangan, and Tanjung Benoa. Professional pool cleaning Nusa Dua with hotel-grade equipment, NSF-certified chemicals, and compliance documentation for property managers.",
      keywords: "pool service nusa dua, pool cleaning nusa dua, pool maintenance nusa dua",
      manager: "Nyoman - Nusa Dua Area Manager"
    },
    {
      area: "Jimbaran",
      region: "South Bali",
      description: "Professional pool service Jimbaran for hillside villas and bay-view properties. Expert pool maintenance Jimbaran in Bukit Peninsula, New Kuta Golf, and airport area. Reliable pool cleaning Jimbaran with 24/7 emergency response, equipment repair, and monthly water chemistry reports.",
      keywords: "pool service jimbaran, pool cleaning jimbaran, pool maintenance jimbaran",
      manager: "Putu - Jimbaran Area Manager"
    },
    {
      area: "Kuta",
      region: "South Bali",
      description: "Fast pool service Kuta for hotels, guesthouses, and rental villas. Efficient pool maintenance Kuta covering Tuban, Legian, and Kuta Beach areas. Professional pool cleaning Kuta with quick response times, commercial pool expertise, and multi-property management for hospitality businesses.",
      keywords: "pool service kuta, pool cleaning kuta, pool maintenance kuta",
      manager: "Gede - Kuta Area Manager"
    },
    {
      area: "Legian",
      region: "South Bali",
      description: "Dependable pool service Legian for beachside accommodations and family villas. Professional pool maintenance Legian between Kuta and Seminyak. Expert pool cleaning Legian with regular scheduling, photo documentation, and competitive pricing for property rental businesses.",
      keywords: "pool service legian, pool cleaning legian, pool maintenance legian",
      manager: "Wayan - Legian Area Manager"
    },
    {
      area: "Kerobokan",
      region: "South Bali",
      description: "Premium pool service Kerobokan for private estates and villa complexes. Specialized pool maintenance Kerobokan in Umalas, Canggu shortcuts, and residential zones. Professional pool cleaning Kerobokan with advanced leak detection, pump repairs, and automated chlorination system service.",
      keywords: "pool service kerobokan, pool cleaning kerobokan, pool maintenance kerobokan",
      manager: "Made - Kerobokan Area Manager"
    },
    {
      area: "Pererenan",
      region: "South Bali",
      description: "Modern pool service Pererenan for new developments and surf villas. Expert pool maintenance Pererenan covering rice field villas and beachfront properties. Reliable pool cleaning Pererenan with eco-friendly chemicals, solar heating maintenance, and WhatsApp service updates.",
      keywords: "pool service pererenan, pool cleaning pererenan, pool maintenance pererenan",
      manager: "Ketut - Pererenan Area Manager"
    },
    {
      area: "Umalas",
      region: "South Bali",
      description: "Professional pool service Umalas for residential villas and family homes. Trusted pool maintenance Umalas in quiet neighborhoods and villa estates. Expert pool cleaning Umalas with consistent technicians, detailed reporting, and long-term service contracts for homeowners.",
      keywords: "pool service umalas, pool cleaning umalas, pool maintenance umalas",
      manager: "Komang - Umalas Area Manager"
    },
    {
      area: "Pecatu",
      region: "South Bali",
      description: "Specialized pool service Pecatu for cliff villas and Dreamland estates. Premium pool maintenance Pecatu covering New Kuta, Padang Padang, and Bingin areas. Professional pool cleaning Pecatu with infinity pool expertise, ocean-view property care, and emergency repair services.",
      keywords: "pool service pecatu, pool cleaning pecatu, pool maintenance pecatu",
      manager: "Nyoman - Pecatu Area Manager"
    },
    {
      area: "Ungasan",
      region: "South Bali",
      description: "Luxury pool service Ungasan for high-end villas and resort estates. Expert pool maintenance Ungasan in Bukit Peninsula and clifftop properties. Premium pool cleaning Ungasan with saltwater pool specialists, equipment upgrades, and concierge-level service for luxury homeowners.",
      keywords: "pool service ungasan, pool cleaning ungasan, pool maintenance ungasan",
      manager: "Putu - Ungasan Area Manager"
    },
    {
      area: "Kedonganan",
      region: "South Bali",
      description: "Reliable pool service Kedonganan for fishing village villas and beachside properties. Professional pool maintenance Kedonganan near airport and Jimbaran Bay. Efficient pool cleaning Kedonganan with flexible scheduling, equipment sales, and renovation consultation services.",
      keywords: "pool service kedonganan, pool cleaning kedonganan, pool maintenance kedonganan",
      manager: "Gede - Kedonganan Area Manager"
    },
    {
      area: "Tuban",
      region: "South Bali",
      description: "Commercial pool service Tuban for hotels and guesthouses near airport. Professional pool maintenance Tuban in hospitality district with high guest turnover. Expert pool cleaning Tuban with daily service options, health compliance documentation, and bulk chemical supply.",
      keywords: "pool service tuban, pool cleaning tuban, pool maintenance tuban",
      manager: "Wayan - Tuban Area Manager"
    },

    // Central Bali - Gianyar & Ubud
    {
      area: "Ubud",
      region: "Central Bali",
      description: "Eco-friendly pool service Ubud for jungle villas and wellness resorts. Sustainable pool maintenance Ubud in Tegallalang, Payangan, and rice terrace areas. Natural pool cleaning Ubud with mineral systems, eco-chemicals, and spring-fed pool expertise for environmentally conscious properties.",
      keywords: "pool service ubud, pool cleaning ubud, pool maintenance ubud",
      manager: "Made - Ubud Area Manager"
    },
    {
      area: "Tegallalang",
      region: "Central Bali",
      description: "Specialized pool service Tegallalang for rice terrace villas and boutique resorts. Professional pool maintenance Tegallalang covering hillside properties and Instagram-famous locations. Expert pool cleaning Tegallalang with natural water treatment, infinity pool care, and scenic property maintenance.",
      keywords: "pool service tegallalang, pool cleaning tegallalang, pool maintenance tegallalang",
      manager: "Ketut - Tegallalang Area Manager"
    },
    {
      area: "Gianyar",
      region: "Central Bali",
      description: "Comprehensive pool service Gianyar for town villas and countryside estates. Reliable pool maintenance Gianyar in cultural heartland and traditional neighborhoods. Professional pool cleaning Gianyar with local expertise, affordable pricing, and family-business service values.",
      keywords: "pool service gianyar, pool cleaning gianyar, pool maintenance gianyar",
      manager: "Komang - Gianyar Area Manager"
    },
    {
      area: "Sukawati",
      region: "Central Bali",
      description: "Local pool service Sukawati for residential properties and art village homes. Trusted pool maintenance Sukawati in market town and surrounding villages. Affordable pool cleaning Sukawati with regular service, basic repairs, and community-focused customer care.",
      keywords: "pool service sukawati, pool cleaning sukawati, pool maintenance sukawati",
      manager: "Nyoman - Sukawati Area Manager"
    },
    {
      area: "Mas",
      region: "Central Bali",
      description: "Traditional pool service Mas for artisan compound villas and family estates. Professional pool maintenance Mas in woodcarving village and cultural properties. Expert pool cleaning Mas with respect for traditional architecture and modern pool technology integration.",
      keywords: "pool service mas, pool cleaning mas, pool maintenance mas",
      manager: "Putu - Mas Area Manager"
    },
    {
      area: "Tampaksiring",
      region: "Central Bali",
      description: "Mountain pool service Tampaksiring for hillside retreats and spring-fed pools. Specialized pool maintenance Tampaksiring near Tirta Empul and presidential palace area. Professional pool cleaning Tampaksiring with natural water source management and cool-climate pool expertise.",
      keywords: "pool service tampaksiring, pool cleaning tampaksiring, pool maintenance tampaksiring",
      manager: "Gede - Tampaksiring Area Manager"
    },
    {
      area: "Payangan",
      region: "Central Bali",
      description: "Jungle pool service Payangan for eco-resorts and riverside villas. Sustainable pool maintenance Payangan in Ayung River valley and rainforest properties. Natural pool cleaning Payangan with bio-filtration systems, mineral pools, and eco-lodge expertise.",
      keywords: "pool service payangan, pool cleaning payangan, pool maintenance payangan",
      manager: "Wayan - Payangan Area Manager"
    },

    // Tabanan Regency
    {
      area: "Tabanan",
      region: "West Bali",
      description: "Regional pool service Tabanan for town properties and rural villas. Reliable pool maintenance Tabanan in regency capital and surrounding rice terraces. Professional pool cleaning Tabanan with agricultural area expertise, well water treatment, and local service networks.",
      keywords: "pool service tabanan, pool cleaning tabanan, pool maintenance tabanan",
      manager: "Made - Tabanan Area Manager"
    },
    {
      area: "Tanah Lot",
      region: "West Bali",
      description: "Tourist area pool service Tanah Lot for temple-view villas and coastal properties. Premium pool maintenance Tanah Lot near iconic sea temple. Professional pool cleaning Tanah Lot with salt-air corrosion prevention, ocean-breeze pool care, and tourist property expertise.",
      keywords: "pool service tanah lot, pool cleaning tanah lot, pool maintenance tanah lot",
      manager: "Ketut - Tanah Lot Area Manager"
    },
    {
      area: "Canggu (North)",
      region: "Tabanan Border",
      description: "Extended pool service North Canggu into Seseh and Cemagi areas. Professional pool maintenance North Canggu for emerging villa developments. Expert pool cleaning North Canggu with new construction support, startup service packages, and developer partnerships.",
      keywords: "pool service north canggu, pool cleaning seseh, pool maintenance cemagi",
      manager: "Komang - North Canggu Manager"
    },

    // East Bali - Karangasem
    {
      area: "Candidasa",
      region: "East Bali",
      description: "Coastal pool service Candidasa for diving resorts and beachfront villas. Professional pool maintenance Candidasa in quiet east coast and snorkeling areas. Reliable pool cleaning Candidasa with salt-water pool expertise, reef-safe chemicals, and tourism property care.",
      keywords: "pool service candidasa, pool cleaning candidasa, pool maintenance candidasa",
      manager: "Nyoman - Candidasa Area Manager"
    },
    {
      area: "Amed",
      region: "East Bali",
      description: "Diving area pool service Amed for beachside bungalows and dive resorts. Specialized pool maintenance Amed along volcanic black sand coast. Professional pool cleaning Amed with small pool expertise, budget-friendly service, and backpacker accommodation support.",
      keywords: "pool service amed, pool cleaning amed, pool maintenance amed",
      manager: "Putu - Amed Area Manager"
    },
    {
      area: "Tulamben",
      region: "East Bali",
      description: "Dive resort pool service Tulamben for USAT Liberty wreck area properties. Efficient pool maintenance Tulamben for small hotels and guesthouses. Affordable pool cleaning Tulamben with basic service packages and diving community trusted partnerships.",
      keywords: "pool service tulamben, pool cleaning tulamben, pool maintenance tulamben",
      manager: "Gede - Tulamben Area Manager"
    },
    {
      area: "Sidemen",
      region: "East Bali",
      description: "Valley pool service Sidemen for rice terrace retreats and mountain villas. Scenic pool maintenance Sidemen in Agung volcano foothills. Professional pool cleaning Sidemen with cool-climate expertise, spring water pools, and eco-retreat service specialization.",
      keywords: "pool service sidemen, pool cleaning sidemen, pool maintenance sidemen",
      manager: "Wayan - Sidemen Area Manager"
    },
    {
      area: "Amlapura",
      region: "East Bali",
      description: "Regional pool service Amlapura for Karangasem regency capital. Comprehensive pool maintenance Amlapura in administrative center and traditional palaces area. Reliable pool cleaning Amlapura with heritage property care and local government facility service.",
      keywords: "pool service amlapura, pool cleaning amlapura, pool maintenance amlapura",
      manager: "Made - Amlapura Area Manager"
    },
    {
      area: "Padang Bai",
      region: "East Bali",
      description: "Port town pool service Padang Bai for ferry terminal area properties. Professional pool maintenance Padang Bai for guesthouses and small hotels. Efficient pool cleaning Padang Bai with quick service, competitive pricing, and traveler accommodation expertise.",
      keywords: "pool service padang bai, pool cleaning padang bai, pool maintenance padang bai",
      manager: "Ketut - Padang Bai Manager"
    },

    // North Bali - Buleleng
    {
      area: "Lovina",
      region: "North Bali",
      description: "North coast pool service Lovina for dolphin beach resorts and quiet villas. Professional pool maintenance Lovina in Kalibukbuk, Anturan, and Temukus. Reliable pool cleaning Lovina with calm-water pool expertise, senior resident service, and peaceful area specialists.",
      keywords: "pool service lovina, pool cleaning lovina, pool maintenance lovina",
      manager: "Komang - Lovina Area Manager"
    },
    {
      area: "Singaraja",
      region: "North Bali",
      description: "City pool service Singaraja for Bali's second-largest urban center. Comprehensive pool maintenance Singaraja in historical Dutch colonial areas. Professional pool cleaning Singaraja with commercial expertise, institutional pools, and government facility service.",
      keywords: "pool service singaraja, pool cleaning singaraja, pool maintenance singaraja",
      manager: "Nyoman - Singaraja Area Manager"
    },
    {
      area: "Pemuteran",
      region: "Northwest Bali",
      description: "Marine area pool service Pemuteran for reef conservation zone resorts. Eco-friendly pool maintenance Pemuteran with reef-safe chemicals only. Sustainable pool cleaning Pemuteran with marine biology awareness and environmental protection standards.",
      keywords: "pool service pemuteran, pool cleaning pemuteran, pool maintenance pemuteran",
      manager: "Putu - Pemuteran Area Manager"
    },

    // Denpasar City
    {
      area: "Denpasar",
      region: "Capital City",
      description: "Capital city pool service Denpasar for residential compounds and urban villas. Professional pool maintenance Denpasar in Renon, Sesetan, and government districts. Comprehensive pool cleaning Denpasar with commercial pools, hotel service, and high-density area expertise.",
      keywords: "pool service denpasar, pool cleaning denpasar, pool maintenance denpasar",
      manager: "Gede - Denpasar Area Manager"
    },
    {
      area: "Renon",
      region: "Denpasar",
      description: "Government area pool service Renon for official residences and hotels. Premium pool maintenance Renon in administrative and business district. Professional pool cleaning Renon with executive property care and government facility standards.",
      keywords: "pool service renon, pool cleaning renon, pool maintenance renon",
      manager: "Wayan - Renon Area Manager"
    },
    {
      area: "Sesetan",
      region: "Denpasar",
      description: "Residential pool service Sesetan for family homes and local compounds. Trusted pool maintenance Sesetan in traditional Denpasar neighborhoods. Reliable pool cleaning Sesetan with community-focused service and Indonesian family property expertise.",
      keywords: "pool service sesetan, pool cleaning sesetan, pool maintenance sesetan",
      manager: "Made - Sesetan Area Manager"
    },

    // Islands - Klungkung
    {
      area: "Nusa Penida",
      region: "Islands",
      description: "Island pool service Nusa Penida for clifftop villas and ocean-view resorts. Specialized pool maintenance Nusa Penida with boat transport logistics. Premium pool cleaning Nusa Penida with saltwater pool expertise, wind-exposure care, and remote island service coordination.",
      keywords: "pool service nusa penida, pool cleaning nusa penida, pool maintenance nusa penida",
      manager: "Ketut - Nusa Penida Manager"
    },
    {
      area: "Nusa Lembongan",
      region: "Islands",
      description: "Beach island pool service Nusa Lembongan for boutique resorts and surf villas. Professional pool maintenance Nusa Lembongan with island logistics. Expert pool cleaning Nusa Lembongan with saltwater pools, beach property care, and island community service.",
      keywords: "pool service nusa lembongan, pool cleaning nusa lembongan, pool maintenance nusa lembongan",
      manager: "Komang - Nusa Lembongan Manager"
    },
    {
      area: "Nusa Ceningan",
      region: "Islands",
      description: "Small island pool service Nusa Ceningan for exclusive villas and cliff properties. Boutique pool maintenance Nusa Ceningan bridge area. Premium pool cleaning Nusa Ceningan with personalized service and island paradise property expertise.",
      keywords: "pool service nusa ceningan, pool cleaning nusa ceningan, pool maintenance nusa ceningan",
      manager: "Nyoman - Nusa Ceningan Manager"
    },

    // West Bali - Jembrana
    {
      area: "Medewi",
      region: "West Bali",
      description: "Surf area pool service Medewi for longboard wave rider villas. Professional pool maintenance Medewi in remote west coast surfing area. Reliable pool cleaning Medewi with surf lodge expertise and laid-back community service approach.",
      keywords: "pool service medewi, pool cleaning medewi, pool maintenance medewi",
      manager: "Putu - Medewi Area Manager"
    },
    {
      area: "Negara",
      region: "West Bali",
      description: "West capital pool service Negara for Jembrana regency administrative center. Comprehensive pool maintenance Negara town and surrounding areas. Professional pool cleaning Negara with regional service hub and west Bali coordination center.",
      keywords: "pool service negara, pool cleaning negara, pool maintenance negara",
      manager: "Gede - Negara Area Manager"
    },

    // Additional South & Central Areas
    {
      area: "Mengwi",
      region: "Central Badung",
      description: "Traditional area pool service Mengwi for Taman Ayun temple region. Professional pool maintenance Mengwi in cultural heritage and rice field villas. Reliable pool cleaning Mengwi with traditional compound pools and modern villa integration expertise.",
      keywords: "pool service mengwi, pool cleaning mengwi, pool maintenance mengwi",
      manager: "Wayan - Mengwi Area Manager"
    },
    {
      area: "Abiansemal",
      region: "North Badung",
      description: "Rural pool service Abiansemal for countryside villas and retreat centers. Professional pool maintenance Abiansemal in quiet agricultural areas. Natural pool cleaning Abiansemal with organic methods and sustainable practice for wellness properties.",
      keywords: "pool service abiansemal, pool cleaning abiansemal, pool maintenance abiansemal",
      manager: "Made - Abiansemal Manager"
    },
    {
      area: "Petang",
      region: "Mountain Badung",
      description: "Highland pool service Petang for cool-climate mountain retreats. Specialized pool maintenance Petang in high-altitude properties. Professional pool cleaning Petang with temperature-controlled pool expertise and mountain spring water treatment.",
      keywords: "pool service petang, pool cleaning petang, pool maintenance petang",
      manager: "Ketut - Petang Area Manager"
    },
    {
      area: "Bedugul",
      region: "Mountain Tabanan",
      description: "Lake area pool service Bedugul for Bratan lakeside resorts. Mountain pool maintenance Bedugul in botanical gardens region. Professional pool cleaning Bedugul with cold-water pool expertise and high-altitude service specialization.",
      keywords: "pool service bedugul, pool cleaning bedugul, pool maintenance bedugul",
      manager: "Komang - Bedugul Area Manager"
    },

    // Bangli Regency
    {
      area: "Kintamani",
      region: "Central Mountains",
      description: "Volcano area pool service Kintamani for Mount Batur lakeside villas. Specialized pool maintenance Kintamani in volcanic caldera region. Professional pool cleaning Kintamani with geothermal water expertise and mountain resort service.",
      keywords: "pool service kintamani, pool cleaning kintamani, pool maintenance kintamani",
      manager: "Nyoman - Kintamani Manager"
    },
    {
      area: "Bangli",
      region: "Central Bali",
      description: "Regency capital pool service Bangli for administrative center properties. Comprehensive pool maintenance Bangli town and surrounding villages. Reliable pool cleaning Bangli with local community service and traditional area expertise.",
      keywords: "pool service bangli, pool cleaning bangli, pool maintenance bangli",
      manager: "Putu - Bangli Area Manager"
    },

    // Additional Areas
    {
      area: "Celuk",
      region: "Gianyar",
      description: "Silversmith village pool service Celuk for artisan family compounds. Professional pool maintenance Celuk in jewelry-making cultural area. Traditional pool cleaning Celuk with heritage property respect and modern service standards.",
      keywords: "pool service celuk, pool cleaning celuk, pool maintenance celuk",
      manager: "Gede - Celuk Area Manager"
    },
    {
      area: "Batuan",
      region: "Gianyar",
      description: "Art village pool service Batuan for painter compound villas. Cultural pool maintenance Batuan in traditional Balinese art center. Professional pool cleaning Batuan with artistic property care and gallery-standard service.",
      keywords: "pool service batuan, pool cleaning batuan, pool maintenance batuan",
      manager: "Wayan - Batuan Area Manager"
    },
    {
      area: "Batubulan",
      region: "Gianyar",
      description: "Stone carving area pool service Batubulan for artisan estates. Professional pool maintenance Batubulan near airport access road. Efficient pool cleaning Batubulan with sculpture garden pools and workshop property expertise.",
      keywords: "pool service batubulan, pool cleaning batubulan, pool maintenance batubulan",
      manager: "Made - Batubulan Manager"
    },
    {
      area: "Kerambitan",
      region: "Tabanan",
      description: "Palace area pool service Kerambitan for royal heritage region. Traditional pool maintenance Kerambitan with cultural sensitivity. Professional pool cleaning Kerambitan near Puri Anyar palace and traditional neighborhoods.",
      keywords: "pool service kerambitan, pool cleaning kerambitan, pool maintenance kerambitan",
      manager: "Ketut - Kerambitan Manager"
    }
  ];

  const regions = [
    { name: "South Bali", count: locations.filter(l => l.region === "South Bali").length },
    { name: "Central Bali", count: locations.filter(l => l.region === "Central Bali").length },
    { name: "East Bali", count: locations.filter(l => l.region === "East Bali").length },
    { name: "North Bali", count: locations.filter(l => l.region === "North Bali" || l.region === "Northwest Bali").length },
    { name: "West Bali", count: locations.filter(l => l.region === "West Bali").length },
    { name: "Islands", count: locations.filter(l => l.region === "Islands").length },
  ];

  return (
    <section id="service-locations" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold">Complete Service Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Pool Service Across All Bali Regions
          </h2>
          <p className="text-xl text-muted-foreground">
            From Seminyak to Amed, Uluwatu to Lovina — we serve 50+ areas across Bali with dedicated area managers, local expertise, and consistent professional service. Contact your nearest pool service specialist today.
          </p>
        </div>

        {/* Region Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-primary/5 border hover-elevate transition-all">
              <p className="font-semibold mb-1">{region.name}</p>
              <p className="text-2xl font-bold text-primary">{region.count}</p>
              <p className="text-xs text-muted-foreground">Service Areas</p>
            </div>
          ))}
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="hover-elevate border-2 transition-all duration-300" data-testid={`location-${index}`}>
              <CardContent className="p-6">
                {/* Region Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <MapPin className="h-3 w-3" />
                  {location.region}
                </div>

                {/* Area Name */}
                <h3 className="text-2xl font-bold mb-3">{location.area}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {location.description}
                </p>

                {/* Keywords */}
                <div className="text-xs text-muted-foreground italic mb-4 pb-4 border-b">
                  {location.keywords}
                </div>

                {/* Area Manager */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{location.manager}</p>
                    <p className="text-xs text-muted-foreground">Direct Contact Available</p>
                  </div>
                </div>

                {/* Contact Button */}
                <Button
                  className="w-full gap-2"
                  onClick={() => window.open(`https://wa.me/6282340709041?text=Hello, I need pool service in ${location.area}`, "_blank")}
                  data-testid={`button-contact-${location.area.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Contact {location.area} Manager
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Bottom Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Complete Bali Pool Service Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  South Bali Pool Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Expert pool cleaning and maintenance in Seminyak, Canggu, Uluwatu, Sanur, Nusa Dua, Jimbaran, Kuta, Legian, Kerobokan, Pererenan, Umalas, Pecatu, Ungasan, Kedonganan, and Tuban. Premium service for luxury villas, rental properties, and resort estates.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Central Bali Pool Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Professional pool maintenance in Ubud, Tegallalang, Gianyar, Sukawati, Mas, Tampaksiring, Payangan, and Kintamani. Eco-friendly service for jungle villas, rice terrace properties, and mountain retreats with natural pool expertise.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  East Bali Pool Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Reliable pool cleaning in Candidasa, Amed, Tulamben, Sidemen, Amlapura, and Padang Bai. Specialized service for diving resorts, beachside properties, and valley retreats with saltwater pool and reef-safe chemical expertise.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  North & West Bali Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive pool maintenance in Lovina, Singaraja, Pemuteran, Tabanan, Tanah Lot, Medewi, and Negara. Professional service for north coast properties, temple-view villas, and remote west Bali surf locations.
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-bold text-foreground">Every area. Every property type. One professional standard.</span> Contact your local pool service manager for same-day quotes and immediate service scheduling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
