import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Contact form submission received:", {
      name: body.name,
      email: body.email,
      instrument: body.instrument,
      timestamp: new Date().toISOString(),
    })

    try {
      await resend.emails.send({
        from: "Academy SON <noreply@academyson.com>",
        to: ["contact@academyson.com"], // Replace with your actual email
        subject: "Nouvelle demande de contact - Academy SON",
        html: `
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Instrument:</strong> ${body.instrument}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString("fr-FR")}</p>
        `,
      })

      // Send confirmation email to the user
      await resend.emails.send({
        from: "Academy SON <noreply@academyson.com>",
        to: [body.email],
        subject: "Confirmation de votre demande - Academy SON",
        html: `
          <h2>Merci pour votre intérêt, ${body.name}!</h2>
          <p>Nous avons bien reçu votre demande concernant les cours de ${body.instrument}.</p>
          <p>Notre équipe vous contactera dans les plus brefs délais.</p>
          <br>
          <p>Cordialement,<br>L'équipe Academy SON</p>
        `,
      })
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      // Continue with success response even if email fails
    }

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
