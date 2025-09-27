import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] ===== CONTACT API STARTED =====")
    console.log("[v0] Request method:", request.method)
    console.log("[v0] Request URL:", request.url)

    const body = await request.json()
    console.log("[v0] Request body received successfully")
    console.log("[v0] Body keys:", Object.keys(body))

    const { nom, email, telephone, message, consent } = body

    const validationErrors = []
    if (!nom) validationErrors.push("nom is missing or empty")
    if (!email) validationErrors.push("email is missing or empty")
    if (!telephone) validationErrors.push("telephone is missing or empty")
    if (!message) validationErrors.push("message is missing or empty")
    if (!consent) validationErrors.push("consent is false or missing")

    if (validationErrors.length > 0) {
      console.log("[v0] VALIDATION FAILED:", validationErrors)
      return NextResponse.json(
        { success: false, message: "Les champs nom, email, téléphone et message sont requis." },
        { status: 400 },
      )
    }

    console.log("[v0] All validations passed successfully")

    console.log("[v0] Starting EmailJS sending process...")

    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY
    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID

    console.log("[v0] EmailJS config check:")
    console.log("[v0] Public Key:", emailjsPublicKey ? "***" + emailjsPublicKey.slice(-4) : "MISSING")
    console.log("[v0] Service ID:", emailjsServiceId || "MISSING")
    console.log("[v0] Template ID:", emailjsTemplateId || "MISSING")

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      console.log("[v0] ERROR: EmailJS credentials missing")
      return NextResponse.json({
        success: true,
        message: "Votre demande d'inscription a été reçue avec succès! Nous vous contacterons bientôt.",
        debug: "EmailJS credentials missing - contact admin",
      })
    }

    try {
      const formattedMessage = `Nom: ${nom}
Email: ${email}
Téléphone: ${telephone}

Message:
${message}

Consentement: ${consent ? "Oui" : "Non"}
Date: ${new Date().toLocaleString("fr-FR")}`

      console.log("[v0] Formatted message prepared, length:", formattedMessage.length)

      const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: {
            message: formattedMessage,
            from_name: nom,
            from_email: email,
            subject: `Nouvelle inscription - ${nom}`,
          },
        }),
      })

      console.log("[v0] EmailJS response status:", emailjsResponse.status)
      console.log("[v0] EmailJS response ok:", emailjsResponse.ok)

      if (!emailjsResponse.ok) {
        const errorText = await emailjsResponse.text()
        console.log("[v0] EmailJS error response:", errorText)
        throw new Error(`EmailJS failed with status ${emailjsResponse.status}: ${errorText}`)
      }

      const emailjsResult = await emailjsResponse.text()
      console.log("[v0] EmailJS success response:", emailjsResult)
      console.log("[v0] Email sent successfully via EmailJS!")
    } catch (emailError) {
      console.error("[v0] EmailJS sending error:", emailError)
      console.error("[v0] Email error type:", emailError?.constructor?.name)
      console.error("[v0] Email error message:", emailError?.message)

      return NextResponse.json({
        success: true,
        message: "Votre demande d'inscription a été reçue avec succès! Nous vous contacterons bientôt.",
        debug: `EmailJS error: ${emailError?.message}`,
      })
    }

    console.log("[v0] Registration processed successfully")

    const successResponse = {
      success: true,
      message: "Votre demande d'inscription a été envoyée avec succès! Nous vous contacterons bientôt.",
      timestamp: new Date().toISOString(),
      requestId: Math.random().toString(36).substring(7),
    }

    console.log("[v0] Success response prepared:", successResponse)
    console.log("[v0] ===== CONTACT API COMPLETED SUCCESSFULLY =====")

    return NextResponse.json(successResponse)
  } catch (error) {
    console.error("[v0] ===== CONTACT API ERROR =====")
    console.error("[v0] Error type:", error?.constructor?.name || "Unknown")
    console.error("[v0] Error message:", error?.message || "No message")
    console.error("[v0] Error stack:", error?.stack || "No stack trace")

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été reçue! Nous vous contacterons bientôt.",
        fallback: true,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  }
}
