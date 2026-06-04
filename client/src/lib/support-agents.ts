import madeWirawanImg from "@assets/generated_images/made_wirawan_support_agent.png";
import kadekPramanaImg from "@assets/generated_images/kadek_pramana_support_agent.png";
import wayanSantikaImg from "@assets/generated_images/wayan_santika_support_agent.png";

export interface SupportAgent {
  id: string;
  name: string;
  role: string;
  image: string;
  whatsapp: string;
}

export const WHATSAPP_NUMBER = "6282323011656";

export const supportAgents: SupportAgent[] = [
  {
    id: "made-wirawan",
    name: "Made Wirawan",
    role: "Customer Support & Service Coordinator",
    image: madeWirawanImg,
    whatsapp: WHATSAPP_NUMBER,
  },
  {
    id: "kadek-pramana",
    name: "Kadek Pramana",
    role: "Client Care Specialist",
    image: kadekPramanaImg,
    whatsapp: WHATSAPP_NUMBER,
  },
  {
    id: "wayan-santika",
    name: "Wayan Santika",
    role: "Guest Experience Manager",
    image: wayanSantikaImg,
    whatsapp: WHATSAPP_NUMBER,
  },
];

export function getRandomAgent(): SupportAgent {
  return supportAgents[Math.floor(Math.random() * supportAgents.length)];
}

export function getAgentById(id: string): SupportAgent | undefined {
  return supportAgents.find(agent => agent.id === id);
}
