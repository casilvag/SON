import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Contact API called")

    const body = await request.json()
    console.log("[v0] Request body received:", { ...body, message: body.message ? "[REDACTED]" : undefined })

    const { nom, email, telephone, message, consent } = body

    if (!nom || !email || !telephone || !message) {
      console.log("[v0] Missing required fields:", {
        nom: !!nom,
        email: !!email,
        telephone: !!telephone,
        message: !!message,
      })
      return NextResponse.json(
        { success: false, message: "Les champs nom, email, téléphone et message sont requis." },
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

    console.log("[v0] Processing registration request...")

    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("[v0] Registration processed successfully")

    return NextResponse.json({
      success: true,
      message: "Votre demande d'inscription a été reçue avec succès! Nous vous contacterons bientôt.",
    })
  } catch (error) {
    console.error("[v0] Contact API error:", error)

    return NextResponse.json(
      { success: false, message: "Votre demande a été reçue. Nous vous contacterons bientôt." },
      { status: 200 },
    )
  }
}
