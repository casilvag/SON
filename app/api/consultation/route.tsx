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
      to: process.env.GMAIL_USER,
      subject: `Nueva solicitud de consulta - Academy SON`,
      html: `
        <h2>Nueva solicitud de consulta</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Curso de interés:</strong> ${course || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Solicitud de consulta desde el sitio web Academy SON</em></p>
      `,
    }

    return NextResponse.json({
      success: true,
      message: "¡Solicitud de consulta enviada exitosamente!",
    })
  } catch (error) {
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
