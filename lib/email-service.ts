import emailjs from "@emailjs/browser"

const validateEmailJSConfig = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (!publicKey) {
    throw new Error(
      "EmailJS public key no configurada. Verifica NEXT_PUBLIC_EMAILJS_PUBLIC_KEY en las variables de entorno.",
    )
  }
  return publicKey
}

const getEmailJSConfig = () => {
  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default_service",
    contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_contact",
    consultationTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONSULTATION_TEMPLATE_ID || "template_consultation",
    publicKey: validateEmailJSConfig(),
  }
}

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  try {
    const config = getEmailJSConfig()

    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Sin mensaje adicional",
      subject: "Nuevo mensaje de contacto - Academy SON",
    }

    console.log("[v0] Enviando email con EmailJS:", {
      service: config.serviceId,
      template: config.contactTemplateId,
      publicKey: "configurada ✓",
    })

    const result = await emailjs.send(config.serviceId, config.contactTemplateId, templateParams, config.publicKey)

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
    const config = getEmailJSConfig()

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
      service: config.serviceId,
      template: config.consultationTemplateId,
      publicKey: "configurada ✓",
    })

    const result = await emailjs.send(config.serviceId, config.consultationTemplateId, templateParams, config.publicKey)

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
