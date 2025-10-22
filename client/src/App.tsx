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
