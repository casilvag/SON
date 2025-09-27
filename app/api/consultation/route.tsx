import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Consultation API called")

    const body = await request.json()
    console.log("[v0] Request body received:", { ...body, question: body.question ? "[REDACTED]" : undefined })

    const { nom, email, telephone, question, consent } = body

    if (!nom || !email || !question) {
      console.log("[v0] Missing required fields:", { nom: !!nom, email: !!email, question: !!question })
      return NextResponse.json(
        { success: false, message: "Les champs nom, email et question sont requis." },
        { status: 400 },
      )
    }

    if (!consent) {
      console.log("[v0] Consent not provided")
      return NextResponse.json(
        { success: false, message: "Vous devez accepter le traitement de vos données personnelles." },
        { status: 400 },
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[v0] Missing email configuration:", {
        GMAIL_USER: !!process.env.GMAIL_USER,
        GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
      })
      return NextResponse.json(
        { success: false, message: "Configuration email manquante. Contactez l'administrateur." },
        { status: 500 },
      )
    }

    console.log("[v0] Creating nodemailer transporter")
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    try {
      await transporter.verify()
      console.log("[v0] SMTP connection verified")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed:", verifyError)
      return NextResponse.json(
        { success: false, message: "Erreur de configuration email. Contactez l'administrateur." },
        { status: 500 },
      )
    }

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
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${question.replace(/\n/g, "<br>")}
        </div>
        <p><strong>Consentement:</strong> Accepté le ${new Date().toLocaleString("fr-FR")}</p>
        <hr>
        <p><em>Demande de consultation depuis le site web Academy SON le ${new Date().toLocaleString("fr-FR")}</em></p>
      `,
    }

    console.log("[v0] Sending email...")
    await transporter.sendMail(mailOptions)
    console.log("[v0] Email sent successfully")

    return NextResponse.json({
      success: true,
      message: "Demande de consultation envoyée avec succès!",
    })
  } catch (error) {
    console.error("[v0] Consultation API error:", error)
    console.error("[v0] Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    })

    let errorMessage = "Erreur lors de l'envoi de la demande. Veuillez réessayer plus tard."

    if (error.code === "EAUTH") {
      errorMessage = "Erreur d'authentification email. Contactez l'administrateur."
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Erreur de connexion. Vérifiez votre connexion internet."
    } else if (error.code === "ETIMEDOUT") {
      errorMessage = "Délai d'attente dépassé. Veuillez réessayer."
    }

    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 })
  }
}
