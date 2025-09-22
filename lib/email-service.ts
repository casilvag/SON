import emailjs from "@emailjs/browser"

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  try {
    // Verificar que EmailJS esté disponible
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      throw new Error("EmailJS public key no configurada")
    }

    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Sin mensaje adicional",
      subject: "Nuevo mensaje de contacto - Academy SON",
    }

    console.log("[v0] Enviando email con EmailJS:", {
      service: "default_service",
      template: "template_contact",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? "configurada" : "no configurada",
    })

    const result = await emailjs.send(
      "default_service",
      "template_contact",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )

    console.log("[v0] EmailJS resultado exitoso:", result)
    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS error completo:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido en EmailJS",
    }
  }
}

export const sendConsultationEmail = async (data: {
  name: string
  email: string
  phone?: string
  course?: string
  message: string
}) => {
  try {
    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "No proporcionado",
      course: data.course || "No especificado",
      message: data.message,
      subject: "Nueva solicitud de consulta - Academy SON",
    }

    const result = await emailjs.send(
      "default_service",
      "template_consultation",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )

    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS consultation error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Error desconocido" }
  }
}

export const sendEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message: string
}) => {
  return await sendContactEmail(data)
}
