import emailjs from "@emailjs/browser"

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  try {
    const templateParams = {
      to_email: "info@academyson.com",
      from_name: data.nom,
      from_email: data.email,
      phone: data.telephone,
      message: data.message || "Sin mensaje adicional",
      subject: "Nuevo mensaje de contacto - Academy SON",
    }

    const result = await emailjs.send(
      "default_service",
      "template_contact",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )

    return { success: true, result }
  } catch (error) {
    console.error("[v0] EmailJS error:", error)
    return { success: false, error }
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
    return { success: false, error }
  }
}
