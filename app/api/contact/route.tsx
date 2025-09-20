import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, email, telephone, instrument, niveau, message } = body

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: "sonacademiemusique@gmail.com",
        pass: "Lamusica10!",
      },
    })

    const mailOptions = {
      from: "sonacademiemusique@gmail.com",
      to: "sonacademiemusique@gmail.com",
      subject: `Nouvelle inscription - ${nom}`,
      html: `
        <h2>Nouvelle demande d'inscription</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Instrument:</strong> ${instrument}</p>
        <p><strong>Niveau:</strong> ${niveau}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><em>Envoyé depuis le site web de l'Académie SON</em></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email" }, { status: 500 })
  }
}
