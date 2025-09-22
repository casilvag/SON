import emailjs from "@emailjs/browser"

const EMAIL_CONFIG = {
  serviceId: "default_service",
  contactTemplateId: "template_contact",
  consultationTemplateId: "template_consultation",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
}

const validateEmailJSConfig = () => {
  if (!EMAIL_CONFIG.publicKey) {
    throw new Error(
      "EmailJS public key no configurada. Verifica NEXT_PUBLIC_EMAILJS_PUBLIC_KEY en las variables de entorno.",
    )
  }
  return EMAIL_CONFIG.publicKey
}

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  try {
    validateEmailJSConfig()

    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Sin mensaje adicional",
      subject: "Nuevo mensaje de contacto - Academy SON",
    }

    console.log("[v0] Enviando email con EmailJS:", {
      service: EMAIL_CONFIG.serviceId,
      template: EMAIL_CONFIG.contactTemplateId,
      publicKey: "configurada ✓",
    })

    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.contactTemplateId,
      templateParams,
      EMAIL_CONFIG.publicKey,
    )

    console.log("[v0] EmailJS resultado exitoso:", result)
    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS error completo:", error)

    let errorMessage = "Error desconocido en EmailJS"
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

export const sendConsultationEmail = async (data: {
  name: string
  email: string
  phone?: string
  course?: string
  message: string
}) => {
  try {
    validateEmailJSConfig()

    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "No proporcionado",
      course: data.course || "No especificado",
      message: data.message,
      subject: "Nueva solicitud de consulta - Academy SON",
    }

    console.log("[v0] Enviando consulta con EmailJS:", {
      service: EMAIL_CONFIG.serviceId,
      template: EMAIL_CONFIG.consultationTemplateId,
      publicKey: "configurada ✓",
    })

    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.consultationTemplateId,
      templateParams,
      EMAIL_CONFIG.publicKey,
    )

    console.log("[v0] Consulta enviada exitosamente:", result)
    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS consultation error:", error)

    let errorMessage = "Error desconocido"
    if (error && typeof error === "object") {
      if ("text" in error) {
        errorMessage = `EmailJS Error: ${error.text}`
      } else if ("message" in error) {
        errorMessage = error.message as string
      }
    }

    return { success: false, error: errorMessage }
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
