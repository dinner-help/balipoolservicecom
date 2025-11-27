import { Droplets } from "lucide-react";

export function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative">
        <Droplets className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 animate-ping opacity-20">
          <Droplets className="h-6 w-6 text-primary" />
        </div>
      </div>
      <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Bali Pool Service
      </span>
    </div>
  );
}
