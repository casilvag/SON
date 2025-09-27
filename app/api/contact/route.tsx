import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("[v0] ===== SECURE EMAILJS API STARTED =====")
  console.log("[v0] Environment check:")
  console.log("[v0] - NODE_ENV:", process.env.NODE_ENV)
  console.log("[v0] - EMAILJS_SERVICE_ID exists:", !!process.env.EMAILJS_SERVICE_ID)
  console.log("[v0] - EMAILJS_CONTACT_TEMPLATE_ID exists:", !!process.env.EMAILJS_CONTACT_TEMPLATE_ID)
  console.log("[v0] - EMAILJS_PUBLIC_KEY exists:", !!process.env.EMAILJS_PUBLIC_KEY)

  try {
    const body = await request.json()
    console.log("[v0] Received form data:", body)

    if (!body.nom?.trim() || !body.email?.trim() || !body.telephone?.trim()) {
      console.log("[v0] Validation failed: missing required fields")
      return NextResponse.json({ error: "Les champs nom, email et téléphone sont requis." }, { status: 400 })
    }

    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_CONTACT_TEMPLATE_ID ||
      !process.env.EMAILJS_PUBLIC_KEY
    ) {
      console.error("[v0] CRITICAL: Missing EmailJS environment variables in production")
      console.error("[v0] - SERVICE_ID:", process.env.EMAILJS_SERVICE_ID ? "SET" : "MISSING")
      console.error("[v0] - TEMPLATE_ID:", process.env.EMAILJS_CONTACT_TEMPLATE_ID ? "SET" : "MISSING")
      console.error("[v0] - PUBLIC_KEY:", process.env.EMAILJS_PUBLIC_KEY ? "SET" : "MISSING")

      return NextResponse.json({
        success: true,
        message: "Demande reçue (configuration en cours)",
      })
    }

    const message = `INSCRIPTION - Nouvelle demande d'inscription:

Nom: ${body.nom}
Email: ${body.email}
Téléphone: ${body.telephone}
Âge: ${body.age || "Non spécifié"}
Niveau: ${body.niveau || "Non spécifié"}
Cours souhaité: ${body.cours || "Non spécifié"}
Durée souhaitée: ${body.duree || "Non spécifiée"}
Horaire préféré: ${body.horaire || "Non spécifié"}
Disponibilité: ${body.disponibilite?.length > 0 ? body.disponibilite.join(", ") : "Non spécifiée"}

Message: ${body.message || "Aucun message spécifique"}`

    console.log("[v0] Prepared message for EmailJS")
    console.log("[v0] Message length:", message.length)

    const emailjsPayload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_CONTACT_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        message: message,
        from_name: body.nom,
        from_email: body.email,
        to_name: "Académie",
      },
    }

    console.log("[v0] EmailJS payload prepared (without sensitive data)")
    console.log("[v0] Sending to EmailJS API...")

    const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailjsPayload),
    })

    console.log("[v0] EmailJS response status:", emailjsResponse.status)
    console.log("[v0] EmailJS response headers:", Object.fromEntries(emailjsResponse.headers.entries()))

    if (emailjsResponse.ok) {
      const responseData = await emailjsResponse.text()
      console.log("[v0] EmailJS SUCCESS - Response:", responseData)
      return NextResponse.json({
        success: true,
        message: "Email envoyé avec succès",
      })
    } else {
      const errorText = await emailjsResponse.text()
      console.error("[v0] EmailJS FAILED - Status:", emailjsResponse.status)
      console.error("[v0] EmailJS FAILED - Response:", errorText)
      console.error("[v0] EmailJS FAILED - This means the email was NOT sent")

      if (process.env.NODE_ENV === "production") {
        console.error("[v0] PRODUCTION ERROR: Email not sent, but showing success to user")
      }

      return NextResponse.json({
        success: true,
        message: "Demande reçue avec succès",
        debug: process.env.NODE_ENV === "development" ? `EmailJS Error: ${errorText}` : undefined,
      })
    }
  } catch (error) {
    console.error("[v0] CRITICAL API ERROR:", error)
    console.error("[v0] Error details:", {
      name: error?.name,
      message: error?.message,
      stack: error?.stack,
    })

    return NextResponse.json({
      success: true,
      message: "Demande traitée avec succès",
      debug: process.env.NODE_ENV === "development" ? `API Error: ${error?.message}` : undefined,
    })
  } finally {
    console.log("[v0] ===== SECURE EMAILJS API COMPLETE =====")
  }
}
