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

    console.log("[v0] Datos de consulta validados:", { name, email, phone, course })

    return NextResponse.json({
      success: true,
      message: "¡Datos validados correctamente!",
      data: { name, email, phone, course, message },
    })
  } catch (error) {
    console.error("[v0] Consultation validation error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar los datos. Por favor, inténtalo de nuevo.",
        ...(process.env.NODE_ENV === "development" && {
          error: error instanceof Error ? error.message : "Error desconocido",
        }),
      },
      { status: 500 },
    )
  }
}
