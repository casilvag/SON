"use server"

import emailjs from "@emailjs/browser"

export async function sendRegistrationEmail(formData: {
  nom: string
  email: string
  telephone: string
  age: string
  niveau: string
  cours: string
  duree: string
  horaire: string
  disponibilite: string[]
  message: string
}) {
  try {
    const emailData = {
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone,
      age: formData.age || "Non spécifié",
      niveau: formData.niveau || "Non spécifié",
      cours: formData.cours || "Non spécifié",
      duree: formData.duree || "Non spécifiée",
      horaire: formData.horaire || "Non spécifié",
      disponibilite: formData.disponibilite.length > 0 ? formData.disponibilite.join(", ") : "Non spécifiée",
      message: formData.message || "Aucun message spécifique",
    }

    // Use your actual EmailJS credentials from environment variables
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    )

    return { success: true, result }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return { success: false, error: error.message }
  }
}
