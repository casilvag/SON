import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Contact form submission received:", {
      name: body.name,
      email: body.email,
      instrument: body.instrument,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you would:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notification
    // 4. Integrate with CRM

    // For now, we'll simulate a successful response
    return NextResponse.json(
      {
        message: "Formulaire reçu avec succès",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json(
      {
        message: "Erreur lors du traitement du formulaire",
        success: false,
      },
      { status: 500 },
    )
  }
}
