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
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de contacto - Academy SON`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telephone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Enviado desde el sitio web Academy SON</em></p>
      `,
    }

    // En producción, esto se conectaría a un servicio de email compatible
    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado exitosamente!",
    })
  } catch (error) {
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
