import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, message } = await request.json()

    if (!nom || !email || !telephone) {
      return NextResponse.json(
        { success: false, message: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Format d'email invalide" }, { status: 400 })
    }

    console.log("[v0] Checking environment variables...")
    console.log("[v0] GMAIL_USER exists:", !!process.env.GMAIL_USER)
    console.log("[v0] GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD)

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log("[v0] Missing environment variables")
      return NextResponse.json(
        {
          success: false,
          message: "Configuration email manquante. Veuillez contacter l'administrateur.",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Creating nodemailer transporter...")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log("[v0] Testing transporter connection...")
    await transporter.verify()
    console.log("[v0] Transporter verified successfully")

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de contact - Academy SON`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Envoyé depuis le site web Academy SON</em></p>
      `,
    }

    console.log("[v0] Sending email...")
    await transporter.sendMail(mailOptions)
    console.log("[v0] Email sent successfully")

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès!",
    })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi du message. Veuillez réessayer.",
        ...(process.env.NODE_ENV === "development" && {
          error: error instanceof Error ? error.message : "Unknown error",
        }),
      },
      { status: 500 },
    )
  }
}
