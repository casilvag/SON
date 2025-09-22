import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, question } = await request.json()

    if (!nom || !email || !question) {
      return NextResponse.json(
        { success: false, message: "Les champs nom, email et question sont obligatoires" },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Format d'email invalide" }, { status: 400 })
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Configuration email manquante. Veuillez contacter l'administrateur.",
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouvelle demande de consultation - Academy SON`,
      html: `
        <h2>Nouvelle demande de consultation</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || "Non fourni"}</p>
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
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi de la demande. Veuillez réessayer.",
      },
      { status: 500 },
    )
  }
}
