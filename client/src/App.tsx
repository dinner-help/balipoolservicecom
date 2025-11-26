import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { CookieConsent } from "@/components/cookie-consent";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import Home from "@/pages/home";
import PoolConstruction from "@/pages/pool-construction";
import PoolCleaner from "@/pages/pool-cleaner";
import PoolRepair from "@/pages/pool-repair";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import RefundPolicy from "@/pages/refund-policy";
import CookiePolicy from "@/pages/cookie-policy";
import Accessibility from "@/pages/accessibility";
import SeminyakPoolCleaning from "@/pages/location-seminyak";
import CangguPoolCleaning from "@/pages/location-canggu";
import UbudPoolCleaning from "@/pages/location-ubud";
import SanurPoolCleaning from "@/pages/location-sanur";
import KutaPoolCleaning from "@/pages/location-kuta";
import DenpasarPoolMaintenance from "@/pages/location-denpasar";
import JimbaranPoolCleaning from "@/pages/location-jimbaran";
import NusaDuaPoolCleaning from "@/pages/location-nusa-dua";
import LegianPoolCleaning from "@/pages/location-legian";
import UluwatuPoolCleaning from "@/pages/location-uluwatu";
import KerobokanPoolCleaning from "@/pages/location-kerobokan";
import PererenanPoolCleaning from "@/pages/location-pererenan";
import FAQ from "@/pages/faq";
import MaintenanceGuide from "@/pages/maintenance-guide";
import PoolCalculator from "@/pages/pool-calculator";
import VideoTutorials from "@/pages/video-tutorials";
import Blog from "@/pages/blog";
import BlogPoolMaintenanceCostBali from "@/pages/blog-pool-maintenance-cost-bali";
import BlogPoolCleaningFrequencyBaliClimate from "@/pages/blog-pool-cleaning-frequency-bali-climate";
import BlogGreenPoolCleaningGuide from "@/pages/blog-green-pool-cleaning-guide";
import VillaPoolServiceBali from "@/pages/villa-pool-service-bali";
import HotelResortPoolServiceBali from "@/pages/hotel-resort-pool-service-bali";
import PropertyManagerPoolServiceBali from "@/pages/property-manager-pool-service-bali";
import EmergencyPoolRepairBali from "@/pages/emergency-pool-repair-bali";
import GreenPoolCleaningBali from "@/pages/green-pool-cleaning-bali";
import PoolPumpRepairBali from "@/pages/pool-pump-repair-bali";
import PoolLeakRepairBali from "@/pages/pool-leak-repair-bali";
import SaltwaterPoolMaintenanceBali from "@/pages/saltwater-pool-maintenance-bali";
import PoolRenovationBali from "@/pages/pool-renovation-bali";
import PoolCleaningServiceBali from "@/pages/pool-cleaning-service-bali";
import WeeklyPoolMaintenanceBali from "@/pages/weekly-pool-maintenance-bali";
import ChemicalBalancingServiceBali from "@/pages/chemical-balancing-service-bali";
import PoolFilterCleaningRepairBali from "@/pages/pool-filter-cleaning-repair-bali";
import PoolWaterTestingServiceBali from "@/pages/pool-water-testing-service-bali";
import PoolTileCleaningBali from "@/pages/pool-tile-cleaning-bali";
import PoolVacuumingServiceBali from "@/pages/pool-vacuuming-service-bali";
import FilterCartridgeReplacementBali from "@/pages/filter-cartridge-replacement-bali";
import SkimmerBoxRepairBali from "@/pages/skimmer-box-repair-bali";
import PoolLightingRepairBali from "@/pages/pool-lighting-repair-bali";
import PoolAcidWashServiceBali from "@/pages/pool-acid-wash-service-bali";
import PoolEquipmentInstallationBali from "@/pages/pool-equipment-installation-bali";
import SwimmingPoolRepairBali from "@/pages/swimming-pool-repair-bali";
import CommercialHotelPoolServiceBali from "@/pages/commercial-hotel-pool-service-bali";
import BahasaHome from "@/pages/id/index";
import BahasaServices from "@/pages/id/layanan";
import BahasaPricing from "@/pages/id/harga";
import BahasaDenpasar from "@/pages/id/denpasar";
import BahasaSeminyak from "@/pages/id/seminyak";
import BahasaCanggu from "@/pages/id/canggu";
import BahasaFAQ from "@/pages/id/faq";
import BahasaGlossary from "@/pages/id/glosarium";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pool-construction" component={PoolConstruction} />
      <Route path="/pool-cleaner" component={PoolCleaner} />
      <Route path="/pool-repair" component={PoolRepair} />
      <Route path="/pool-cleaning-seminyak" component={SeminyakPoolCleaning} />
      <Route path="/pool-cleaning-canggu" component={CangguPoolCleaning} />
      <Route path="/pool-cleaning-ubud" component={UbudPoolCleaning} />
      <Route path="/pool-cleaning-sanur" component={SanurPoolCleaning} />
      <Route path="/pool-cleaning-kuta" component={KutaPoolCleaning} />
      <Route path="/pool-maintenance-denpasar" component={DenpasarPoolMaintenance} />
      <Route path="/pool-cleaning-jimbaran" component={JimbaranPoolCleaning} />
      <Route path="/pool-cleaning-nusa-dua" component={NusaDuaPoolCleaning} />
      <Route path="/pool-cleaning-legian" component={LegianPoolCleaning} />
      <Route path="/location-canggu" component={CangguPoolCleaning} />
      <Route path="/location-seminyak" component={SeminyakPoolCleaning} />
      <Route path="/location-ubud" component={UbudPoolCleaning} />
      <Route path="/location-sanur" component={SanurPoolCleaning} />
      <Route path="/location-kuta" component={KutaPoolCleaning} />
      <Route path="/location-denpasar" component={DenpasarPoolMaintenance} />
      <Route path="/location-jimbaran" component={JimbaranPoolCleaning} />
      <Route path="/location-nusa-dua" component={NusaDuaPoolCleaning} />
      <Route path="/location-legian" component={LegianPoolCleaning} />
      <Route path="/location-uluwatu" component={UluwatuPoolCleaning} />
      <Route path="/location-kerobokan" component={KerobokanPoolCleaning} />
      <Route path="/location-pererenan" component={PererenanPoolCleaning} />
      <Route path="/faq" component={FAQ} />
      <Route path="/maintenance-guide" component={MaintenanceGuide} />
      <Route path="/pool-calculator" component={PoolCalculator} />
      <Route path="/video-tutorials" component={VideoTutorials} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/pool-maintenance-cost-bali" component={BlogPoolMaintenanceCostBali} />
      <Route path="/blog/pool-cleaning-frequency-bali-climate" component={BlogPoolCleaningFrequencyBaliClimate} />
      <Route path="/blog/green-pool-cleaning-guide" component={BlogGreenPoolCleaningGuide} />
      <Route path="/villa-pool-service-bali" component={VillaPoolServiceBali} />
      <Route path="/hotel-resort-pool-service-bali" component={HotelResortPoolServiceBali} />
      <Route path="/property-manager-pool-service-bali" component={PropertyManagerPoolServiceBali} />
      <Route path="/emergency-pool-repair-bali" component={EmergencyPoolRepairBali} />
      <Route path="/green-pool-cleaning-bali" component={GreenPoolCleaningBali} />
      <Route path="/pool-pump-repair-bali" component={PoolPumpRepairBali} />
      <Route path="/pool-leak-repair-bali" component={PoolLeakRepairBali} />
      <Route path="/saltwater-pool-maintenance-bali" component={SaltwaterPoolMaintenanceBali} />
      <Route path="/pool-renovation-bali" component={PoolRenovationBali} />
      <Route path="/pool-cleaning-service-bali" component={PoolCleaningServiceBali} />
      <Route path="/weekly-pool-maintenance-bali" component={WeeklyPoolMaintenanceBali} />
      <Route path="/chemical-balancing-service-bali" component={ChemicalBalancingServiceBali} />
      <Route path="/pool-filter-cleaning-repair-bali" component={PoolFilterCleaningRepairBali} />
      <Route path="/pool-water-testing-service-bali" component={PoolWaterTestingServiceBali} />
      <Route path="/pool-tile-cleaning-bali" component={PoolTileCleaningBali} />
      <Route path="/pool-vacuuming-service-bali" component={PoolVacuumingServiceBali} />
      <Route path="/filter-cartridge-replacement-bali" component={FilterCartridgeReplacementBali} />
      <Route path="/skimmer-box-repair-bali" component={SkimmerBoxRepairBali} />
      <Route path="/pool-lighting-repair-bali" component={PoolLightingRepairBali} />
      <Route path="/pool-acid-wash-service-bali" component={PoolAcidWashServiceBali} />
      <Route path="/pool-equipment-installation-bali" component={PoolEquipmentInstallationBali} />
      <Route path="/swimming-pool-repair-bali" component={SwimmingPoolRepairBali} />
      <Route path="/commercial-hotel-pool-service-bali" component={CommercialHotelPoolServiceBali} />
      <Route path="/id" component={BahasaHome} />
      <Route path="/id/layanan" component={BahasaServices} />
      <Route path="/id/harga" component={BahasaPricing} />
      <Route path="/id/denpasar" component={BahasaDenpasar} />
      <Route path="/id/seminyak" component={BahasaSeminyak} />
      <Route path="/id/canggu" component={BahasaCanggu} />
      <Route path="/id/faq" component={BahasaFAQ} />
      <Route path="/id/glosarium" component={BahasaGlossary} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/accessibility" component={Accessibility} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <WhatsAppFloat />
            <CookieConsent />
          </TooltipProvider>
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
