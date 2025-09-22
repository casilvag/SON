import emailjs from "@emailjs/browser"

let emailjsConfig: {
  serviceId: string
  templateId: string
  publicKey: string
} | null = null

const getEmailJSConfig = async () => {
  if (emailjsConfig) {
    return emailjsConfig
  }

  try {
    const response = await fetch("/api/emailjs-config")
    if (!response.ok) {
      throw new Error("Error al obtener configuración de EmailJS")
    }
    emailjsConfig = await response.json()
    return emailjsConfig
  } catch (error) {
    throw new Error("No se pudo obtener la configuración de EmailJS")
  }
}

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  try {
    console.log("[v0] Enviando email con EmailJS del lado del cliente")

    const config = await getEmailJSConfig()

    if (!config) {
      throw new Error("No se pudo obtener la configuración de EmailJS")
    }

    const templateParams = {
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Solicitud de inscripción",
    }

    const result = await emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey)

    console.log("[v0] Email enviado exitosamente:", result)
    return { success: true, result }
  } catch (error) {
    console.log("[v0] Error al enviar email:", error)
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
