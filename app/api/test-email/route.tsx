import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const testData = {
      contact: {
        nom: "Test Usuario",
        email: "test@example.com",
        telephone: "+1234567890",
        message: "Mensaje de prueba automatizada",
      },
      consultation: {
        name: "Test Consulta",
        email: "test@example.com",
        phone: "+1234567890",
        course: "Curso de Prueba",
        message: "Consulta de prueba automatizada",
      },
    }

    const results = []
    let allTestsPassed = true

    // Prueba formulario de contacto
    try {
      const contactResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testData.contact),
        },
      )

      const contactResult = await contactResponse.json()

      if (contactResult.success) {
        results.push("✅ Formulario de contacto: EXITOSO")
      } else {
        results.push(`❌ Formulario de contacto: FALLÓ - ${contactResult.message}`)
        allTestsPassed = false
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      results.push(`❌ Error en contacto: ${errorMessage}`)
      allTestsPassed = false
    }

    // Prueba formulario de consulta
    try {
      const consultationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/consultation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testData.consultation),
        },
      )

      const consultationResult = await consultationResponse.json()

      if (consultationResult.success) {
        results.push("✅ Formulario de consulta: EXITOSO")
      } else {
        results.push(`❌ Formulario de consulta: FALLÓ - ${consultationResult.message}`)
        allTestsPassed = false
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      results.push(`❌ Error en consulta: ${errorMessage}`)
      allTestsPassed = false
    }

    return NextResponse.json({
      success: allTestsPassed,
      results,
      message: allTestsPassed ? "Todas las pruebas exitosas" : "Algunas pruebas fallaron",
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido"
    return NextResponse.json(
      {
        success: false,
        results: [`❌ Error crítico: ${errorMessage}`],
        message: "Error en sistema de pruebas",
      },
      { status: 500 },
    )
  }
}
