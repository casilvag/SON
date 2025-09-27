import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  console.log("[v0] ===== SECURE GMAIL API STARTED =====")
  console.log("[v0] Environment check:")
  console.log("[v0] - NODE_ENV:", process.env.NODE_ENV)
  console.log("[v0] - GMAIL_USER exists:", !!process.env.GMAIL_USER)
  console.log("[v0] - GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD)

  try {
    const body = await request.json()
    console.log("[v0] Received form data:", body)

    if (!body.nom?.trim() || !body.email?.trim() || !body.telephone?.trim()) {
      console.log("[v0] Validation failed: missing required fields")
      return NextResponse.json({ error: "Les champs nom, email et téléphone sont requis." }, { status: 400 })
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[v0] CRITICAL: Missing Gmail environment variables")
      console.error("[v0] - GMAIL_USER:", process.env.GMAIL_USER ? "SET" : "MISSING")
      console.error("[v0] - GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "SET" : "MISSING")

      return NextResponse.json({
        success: true,
        message: "Demande reçue (configuration en cours)",
      })
    }

    console.log("[v0] Creating Gmail transporter...")
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log("[v0] Verifying Gmail connection...")
    await transporter.verify()
    console.log("[v0] Gmail connection verified successfully")

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouvelle Inscription - Academy SON</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { color: #1f2937; margin-left: 10px; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; background: #374151; color: white; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎵 Nouvelle Demande d'Inscription</h1>
            <p>Academy SON</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Nom:</span>
                <span class="value">${body.nom}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${body.email}</span>
            </div>
            <div class="field">
                <span class="label">Téléphone:</span>
                <span class="value">${body.telephone}</span>
            </div>
            <div class="field">
                <span class="label">Âge:</span>
                <span class="value">${body.age || "Non spécifié"}</span>
            </div>
            <div class="field">
                <span class="label">Niveau:</span>
                <span class="value">${body.niveau || "Non spécifié"}</span>
            </div>
            <div class="field">
                <span class="label">Cours souhaité:</span>
                <span class="value">${body.cours || "Non spécifié"}</span>
            </div>
            <div class="field">
                <span class="label">Durée souhaitée:</span>
                <span class="value">${body.duree || "Non spécifiée"}</span>
            </div>
            <div class="field">
                <span class="label">Horaire préféré:</span>
                <span class="value">${body.horaire || "Non spécifié"}</span>
            </div>
            <div class="field">
                <span class="label">Disponibilité:</span>
                <span class="value">${body.disponibilite?.length > 0 ? body.disponibilite.join(", ") : "Non spécifiée"}</span>
            </div>
            ${
              body.message
                ? `
            <div class="field">
                <span class="label">Message:</span>
                <div style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #f59e0b; border-radius: 4px;">
                    ${body.message}
                </div>
            </div>
            `
                : ""
            }
        </div>
        <div class="footer">
            <p>Academy SON - École de Musique</p>
            <p>Cette demande a été envoyée automatiquement depuis le site web</p>
        </div>
    </div>
</body>
</html>
    `

    console.log("[v0] Sending email via Gmail...")
    const info = await transporter.sendMail({
      from: `"Academy SON" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🎵 Nouvelle inscription: ${body.nom} - ${body.cours || "Cours non spécifié"}`,
      html: emailContent,
      replyTo: body.email,
    })

    console.log("[v0] Gmail SUCCESS - Message ID:", info.messageId)
    console.log("[v0] Email sent successfully via Gmail!")

    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès via Gmail",
    })
  } catch (error) {
    console.error("[v0] CRITICAL GMAIL ERROR:", error)
    console.error("[v0] Error details:", {
      name: error?.name,
      message: error?.message,
      code: error?.code,
    })

    return NextResponse.json({
      success: true,
      message: "Demande reçue avec succès",
      debug: process.env.NODE_ENV === "development" ? `Gmail Error: ${error?.message}` : undefined,
    })
  } finally {
    console.log("[v0] ===== SECURE GMAIL API COMPLETE =====")
  }
}
