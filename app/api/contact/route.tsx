import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create transporter using Gmail (you can change this to your preferred email service)
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "casilvag10@gmail.com", // Your email where you want to receive the form submissions
      subject: `Nouvelle inscription - ${formData.name}`,
      html: `
        <h2>Nouvelle inscription à l'Académie de Musique SON</h2>
        
        <h3>Informations personnelles:</h3>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone || "Non fourni"}</p>
        <p><strong>Code postal:</strong> ${formData.postalCode || "Non fourni"}</p>
        
        <h3>Détails du cours:</h3>
        <p><strong>Instrument:</strong> ${formData.instrument}</p>
        <p><strong>Style musical:</strong> ${formData.musicStyle || "Non spécifié"}</p>
        <p><strong>Type de cours:</strong> ${formData.lessonType || "Non spécifié"}</p>
        <p><strong>Niveau:</strong> ${formData.level || "Non spécifié"}</p>
        <p><strong>Groupe d'âge:</strong> ${formData.ageGroup || "Non spécifié"}</p>
        <p><strong>Horaire préféré:</strong> ${formData.schedule || "Non spécifié"}</p>
        <p><strong>Méthode de contact préférée:</strong> ${formData.contactMethod || "Non spécifiée"}</p>
        
        <h3>Message:</h3>
        <p>${formData.message || "Aucun message"}</p>
        
        <hr>
        <p><em>Formulaire soumis le ${new Date().toLocaleString("fr-CA")}</em></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email" }, { status: 500 })
  }
}
