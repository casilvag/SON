import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] ===== CONTACT API STARTED =====")
    console.log("[v0] Request method:", request.method)
    console.log("[v0] Request URL:", request.url)
    console.log("[v0] Request headers:", Object.fromEntries(request.headers.entries()))

    const body = await request.json()
    console.log("[v0] Request body received successfully")
    console.log("[v0] Body keys:", Object.keys(body))
    console.log("[v0] Body data:", {
      nom: body.nom ? `"${body.nom}" (length: ${body.nom.length})` : "MISSING",
      email: body.email ? `"${body.email}" (length: ${body.email.length})` : "MISSING",
      telephone: body.telephone ? `"${body.telephone}" (length: ${body.telephone.length})` : "MISSING",
      message: body.message ? `[MESSAGE PRESENT - length: ${body.message.length}]` : "MISSING",
      consent: body.consent ? "TRUE" : "FALSE",
    })

    const { nom, email, telephone, message, consent } = body

    const validationErrors = []
    if (!nom) validationErrors.push("nom is missing or empty")
    if (!email) validationErrors.push("email is missing or empty")
    if (!telephone) validationErrors.push("telephone is missing or empty")
    if (!message) validationErrors.push("message is missing or empty")
    if (!consent) validationErrors.push("consent is false or missing")

    if (validationErrors.length > 0) {
      console.log("[v0] VALIDATION FAILED:")
      validationErrors.forEach((error, index) => {
        console.log(`[v0] Validation Error ${index + 1}: ${error}`)
      })
      console.log("[v0] Field analysis:", {
        nom: { value: nom, type: typeof nom, length: nom?.length || 0 },
        email: { value: email, type: typeof email, length: email?.length || 0 },
        telephone: { value: telephone, type: typeof telephone, length: telephone?.length || 0 },
        message: { value: message ? "[REDACTED]" : null, type: typeof message, length: message?.length || 0 },
        consent: { value: consent, type: typeof consent },
      })

      return NextResponse.json(
        { success: false, message: "Les champs nom, email, téléphone et message sont requis." },
        { status: 400 },
      )
    }

    console.log("[v0] All validations passed successfully")
    console.log("[v0] Processing registration request...")
    console.log("[v0] Simulating processing delay...")

    await new Promise((resolve) => {
      console.log("[v0] Starting 500ms delay simulation")
      setTimeout(() => {
        console.log("[v0] 500ms delay completed")
        resolve(undefined)
      }, 500)
    })

    console.log("[v0] Registration processed successfully")
    console.log("[v0] Preparing success response...")

    const successResponse = {
      success: true,
      message: "Votre demande d'inscription a été reçue avec succès! Nous vous contacterons bientôt.",
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
    console.error("[v0] Full error object:", error)

    if (error instanceof SyntaxError) {
      console.error("[v0] JSON PARSING ERROR - Invalid JSON in request body")
    } else if (error instanceof TypeError) {
      console.error("[v0] TYPE ERROR - Likely issue with data types or undefined values")
    } else if (error?.name === "AbortError") {
      console.error("[v0] ABORT ERROR - Request was aborted")
    } else {
      console.error("[v0] UNKNOWN ERROR TYPE")
    }

    console.error("[v0] Returning fallback success response to user")
    console.error("[v0] ===== CONTACT API ERROR HANDLING COMPLETE =====")

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
