import { NextResponse } from "next/server"

export async function GET() {
  try {
    const config = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }

    // Verificar que todas las configuraciones existen
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      console.error("[v0] Missing EmailJS configuration:", {
        serviceId: !!config.serviceId,
        templateId: !!config.templateId,
        publicKey: !!config.publicKey,
      })
      return NextResponse.json({ error: "EmailJS configuration incomplete" }, { status: 500 })
    }

    return NextResponse.json(config)
  } catch (error) {
    console.error("[v0] Error getting EmailJS config:", error)
    return NextResponse.json({ error: "Failed to get EmailJS configuration" }, { status: 500 })
  }
}
