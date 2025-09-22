import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, course, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Los campos nombre, email y mensaje son obligatorios" },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Formato de email inválido" }, { status: 400 })
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Configuración de email faltante. Por favor contacta al administrador.",
        },
        { status: 500 },
      )
    }

    const emailData = {
      service_id: "gmail",
      template_id: "consultation_form",
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: process.env.GMAIL_USER,
        from_name: name,
        from_email: email,
        phone: phone || "No proporcionado",
        course: course || "No especificado",
        message: message,
        subject: `Nueva solicitud de consulta - Academy SON`,
      },
    }

    // Envío real usando EmailJS API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status}`)
    }

    return NextResponse.json({
      success: true,
      message: "¡Solicitud de consulta enviada exitosamente!",
    })
  } catch (error) {
    console.error("[v0] Consultation email sending error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al enviar la solicitud. Por favor, inténtalo de nuevo.",
        ...(process.env.NODE_ENV === "development" && {
          error: error instanceof Error ? error.message : "Error desconocido",
        }),
      },
      { status: 500 },
    )
  }
}
