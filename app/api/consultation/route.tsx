import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, question } = await request.json()

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Enviar a tu propio email
      subject: `Nouvelle demande de consultation - Academy SON`,
      html: `
        <h2>Nouvelle demande de consultation</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Question:</strong></p>
        <p>${question}</p>
        <hr>
        <p><em>Demande de consultation depuis le site web Academy SON</em></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Demande de consultation envoyée avec succès!",
    })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de la demande" }, { status: 500 })
  }
}
