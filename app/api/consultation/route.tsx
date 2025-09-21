import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Consultation form submission received:", {
      name: body.name,
      email: body.email,
      course: body.course,
      timestamp: new Date().toISOString(),
    })

    try {
      await resend.emails.send({
        from: "Academy SON <noreply@academyson.com>",
        to: ["contact@academyson.com"], // Replace with your actual email
        subject: "Nouvelle demande de consultation - Academy SON",
        html: `
          <h2>Nouvelle demande de consultation</h2>
          <p><strong>Nom:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Cours d'intérêt:</strong> ${body.course}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString("fr-FR")}</p>
        `,
      })

      // Send confirmation email to the user
      await resend.emails.send({
        from: "Academy SON <noreply@academyson.com>",
        to: [body.email],
        subject: "Confirmation de votre demande de consultation - Academy SON",
        html: `
          <h2>Merci ${body.name}!</h2>
          <p>Nous avons bien reçu votre demande de consultation pour ${body.course}.</p>
          <p>Un de nos instructeurs vous contactera sous peu pour planifier votre consultation gratuite.</p>
          <br>
          <p>À bientôt,<br>L'équipe Academy SON</p>
        `,
      })
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      // Continue with success response even if email fails
    }

    return NextResponse.json(
      {
        message: "Demande de consultation reçue avec succès",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing consultation form:", error)
    return NextResponse.json(
      {
        message: "Erreur lors du traitement de la demande",
        success: false,
      },
      { status: 500 },
    )
  }
}
