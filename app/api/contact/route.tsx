import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, message } = await request.json()

    if (!nom || !email || !telephone) {
      return NextResponse.json(
        { success: false, message: "Todos los campos obligatorios deben estar completos" },
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
      template_id: "contact_form",
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: process.env.GMAIL_USER,
        from_name: nom,
        from_email: email,
        phone: telephone,
        message: message,
        subject: `Nuevo mensaje de contacto - Academy SON`,
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
      message: "¡Mensaje enviado exitosamente!",
    })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        ...(process.env.NODE_ENV === "development" && {
          error: error instanceof Error ? error.message : "Error desconocido",
        }),
      },
      { status: 500 },
    )
  }
}
