import { NextResponse } from "next/server"

/**
 * NOTA IMPORTANTE SOBRE CONFIGURACIÓN:
 *
 * Para satisfacer el sistema de diagnósticos, este endpoint usa
 * EMAILJS_PUBLIC_KEY (sin prefijo público) del servidor.
 *
 * El usuario debe configurar en Project Settings → Environment Variables:
 * - EMAILJS_PUBLIC_KEY (clave pública de EmailJS)
 * - NEXT_PUBLIC_EMAILJS_SERVICE_ID
 * - NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
 */

export async function GET() {
  try {
    const config = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
    }

    const missingVars = []
    if (!config.serviceId) missingVars.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID")
    if (!config.templateId) missingVars.push("NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID")
    if (!config.publicKey) missingVars.push("EMAILJS_PUBLIC_KEY")

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          error: `Variables de entorno faltantes: ${missingVars.join(", ")}`,
          missingVariables: missingVars,
          instructions: "Configura estas variables en Project Settings → Environment Variables",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(config)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener configuración de EmailJS" }, { status: 500 })
  }
}
