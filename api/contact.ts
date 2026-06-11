import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  serviceArea: z.string().min(1, "Please select a service area"),
  message: z.string().optional(),
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = contactSchema.parse(req.body);
    console.log("New contact submission:", data);

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      id: Math.random().toString(36).substring(2, 11),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }
    console.error("Contact form error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
