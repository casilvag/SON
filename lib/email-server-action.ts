"use server"

import emailjs from "@emailjs/browser"

const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
}

export async function sendRegistrationEmail(data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) {
  try {
    // Validar configuración
    if (!EMAIL_CONFIG.publicKey || !EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.contactTemplateId) {
      throw new Error("Configuración de EmailJS incompleta")
    }

    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Solicitud de inscripción",
      subject: "Nueva inscripción - Academy SON",
    }

    console.log("[v0] Enviando email de inscripción con server action")

    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.contactTemplateId,
      templateParams,
      EMAIL_CONFIG.publicKey,
    )

    console.log("[v0] EmailJS resultado exitoso:", result)
    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS error:", error)

    let errorMessage = "Error al enviar email"
    if (error && typeof error === "object") {
      if ("text" in error) {
        errorMessage = `EmailJS Error: ${error.text}`
      } else if ("message" in error) {
        errorMessage = error.message as string
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}
