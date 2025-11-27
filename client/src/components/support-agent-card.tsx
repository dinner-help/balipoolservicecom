import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaWhatsapp } from "react-icons/fa";
import { type SupportAgent } from "@/lib/support-agents";

interface SupportAgentCardProps {
  agent: SupportAgent;
  variant?: "default" | "compact" | "minimal";
  className?: string;
}

export function SupportAgentCard({ agent, variant = "default", className = "" }: SupportAgentCardProps) {
  const whatsappUrl = `https://wa.me/${agent.whatsapp}?text=Hi%20${encodeURIComponent(agent.name)}!%20I%27d%20like%20to%20ask%20about%20pool%20services.`;

  if (variant === "minimal") {
    return (
      <div className={`flex items-center gap-3 ${className}`} data-testid={`agent-card-${agent.id}`}>
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarImage src={agent.image} alt={agent.name} />
          <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{agent.name}</p>
          <p className="text-xs text-gray-500 truncate">{agent.role}</p>
        </div>
        <Button
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white gap-1"
          onClick={() => window.open(whatsappUrl, "_blank")}
          data-testid={`button-whatsapp-${agent.id}`}
        >
          <FaWhatsapp className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-4 p-4 bg-white rounded-xl border ${className}`} data-testid={`agent-card-${agent.id}`}>
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarImage src={agent.image} alt={agent.name} />
          <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{agent.name}</p>
          <p className="text-sm text-gray-500">{agent.role}</p>
        </div>
        <Button
          className="bg-green-600 hover:bg-green-700 text-white gap-2"
          onClick={() => window.open(whatsappUrl, "_blank")}
          data-testid={`button-whatsapp-${agent.id}`}
        >
          <FaWhatsapp className="h-4 w-4" />
          Chat
        </Button>
      </div>
    );
  }

  return (
    <Card className={`hover-elevate text-center ${className}`} data-testid={`agent-card-${agent.id}`}>
      <CardContent className="p-6">
        <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
          <AvatarImage src={agent.image} alt={agent.name} />
          <AvatarFallback className="text-2xl">{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-gray-900 text-lg mb-1">{agent.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{agent.role}</p>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
          onClick={() => window.open(whatsappUrl, "_blank")}
          data-testid={`button-whatsapp-${agent.id}`}
        >
          <FaWhatsapp className="h-5 w-5" />
          Chat on WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
}

interface SupportAgentsGridProps {
  agents: SupportAgent[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function SupportAgentsGrid({ agents, title, subtitle, className = "" }: SupportAgentsGridProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <SupportAgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
