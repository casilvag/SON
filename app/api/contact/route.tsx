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

    // Solo validamos los datos en el servidor
    console.log("[v0] Datos de contacto validados:", { nom, email, telephone })

    return NextResponse.json({
      success: true,
      message: "¡Datos validados correctamente!",
      data: { nom, email, telephone, message },
    })
  } catch (error) {
    console.error("[v0] Contact validation error:", error)
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
