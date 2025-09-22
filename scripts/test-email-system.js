// Prueba automatizada para verificar el envío real de correos
async function testEmailSystem() {
  console.log("[v0] Iniciando prueba automatizada del sistema de email...")

  const testData = {
    // Datos de prueba para formulario de contacto
    contact: {
      nom: "Test Usuario",
      email: "test@example.com",
      telephone: "+1234567890",
      message: "Este es un mensaje de prueba automatizada del sistema de email.",
    },
    // Datos de prueba para formulario de consulta
    consultation: {
      name: "Test Consulta",
      email: "test@example.com",
      phone: "+1234567890",
      course: "Curso de Prueba",
      message: "Esta es una consulta de prueba automatizada del sistema de email.",
    },
  }

  let allTestsPassed = true
  const results = []

  try {
    // Prueba 1: Formulario de contacto
    console.log("[v0] Probando formulario de contacto...")
    const contactResponse = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.contact),
    })

    const contactResult = await contactResponse.json()
    console.log("[v0] Resultado contacto:", contactResult)

    if (contactResult.success) {
      results.push("✅ Formulario de contacto: EXITOSO")
    } else {
      results.push("❌ Formulario de contacto: FALLÓ - " + contactResult.message)
      allTestsPassed = false
    }

    // Prueba 2: Formulario de consulta
    console.log("[v0] Probando formulario de consulta...")
    const consultationResponse = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.consultation),
    })

    const consultationResult = await consultationResponse.json()
    console.log("[v0] Resultado consulta:", consultationResult)

    if (consultationResult.success) {
      results.push("✅ Formulario de consulta: EXITOSO")
    } else {
      results.push("❌ Formulario de consulta: FALLÓ - " + consultationResult.message)
      allTestsPassed = false
    }

    // Prueba 3: Validación de campos obligatorios
    console.log("[v0] Probando validación de campos...")
    const invalidResponse = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom: "", email: "", telephone: "" }),
    })

    const invalidResult = await invalidResponse.json()

    if (!invalidResult.success && invalidResponse.status === 400) {
      results.push("✅ Validación de campos: EXITOSO")
    } else {
      results.push("❌ Validación de campos: FALLÓ - No detectó campos vacíos")
      allTestsPassed = false
    }

    // Prueba 4: Validación de email
    console.log("[v0] Probando validación de email...")
    const invalidEmailResponse = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: "Test",
        email: "email-invalido",
        telephone: "123",
        message: "test",
      }),
    })

    const invalidEmailResult = await invalidEmailResponse.json()

    if (!invalidEmailResult.success && invalidEmailResponse.status === 400) {
      results.push("✅ Validación de email: EXITOSO")
    } else {
      results.push("❌ Validación de email: FALLÓ - No detectó email inválido")
      allTestsPassed = false
    }
  } catch (error) {
    console.error("[v0] Error en prueba automatizada:", error)
    results.push("❌ Error crítico en pruebas: " + error.message)
    allTestsPassed = false
  }

  // Mostrar resultados
  console.log("\n[v0] ========== RESULTADOS DE PRUEBAS ==========")
  results.forEach((result) => console.log("[v0]", result))
  console.log("[v0] ==========================================")

  if (allTestsPassed) {
    console.log("[v0] 🎉 TODAS LAS PRUEBAS EXITOSAS - Sistema listo para versión")
    return true
  } else {
    console.log("[v0] ❌ ALGUNAS PRUEBAS FALLARON - No crear versión hasta corregir")
    return false
  }
}

// Ejecutar pruebas
testEmailSystem()
  .then((success) => {
    if (success) {
      console.log("[v0] Sistema de email verificado y funcionando correctamente")
    } else {
      console.log("[v0] Sistema de email requiere correcciones antes de versión")
    }
  })
  .catch((error) => {
    console.error("[v0] Error ejecutando pruebas:", error)
  })
