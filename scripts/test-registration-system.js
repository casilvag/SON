async function testRegistrationSystem() {
  console.log("[v0] Iniciando prueba del sistema de inscripción...")

  const testData = {
    nom: "Test Usuario",
    email: "test@example.com",
    telephone: "+1234567890",
    message: "Solicitud de inscripción de prueba automatizada.",
  }

  let allTestsPassed = true
  const results = []

  try {
    // Prueba 1: Formulario de inscripción
    console.log("[v0] Probando formulario de inscripción...")
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()
    console.log("[v0] Resultado inscripción:", result)

    if (result.success) {
      results.push("✅ Formulario de inscripción: EXITOSO")
    } else {
      results.push("❌ Formulario de inscripción: FALLÓ - " + result.message)
      allTestsPassed = false
    }

    // Prueba 2: Validación de campos obligatorios
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

    // Prueba 3: Validación de email
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
    console.log("[v0] 🎉 TODAS LAS PRUEBAS EXITOSAS - Sistema listo para inscripciones")
    return true
  } else {
    console.log("[v0] ❌ ALGUNAS PRUEBAS FALLARON - Revisar configuración")
    return false
  }
}

// Ejecutar pruebas
testRegistrationSystem()
  .then((success) => {
    if (success) {
      console.log("[v0] Sistema de inscripción verificado y funcionando correctamente")
    } else {
      console.log("[v0] Sistema de inscripción requiere correcciones")
    }
  })
  .catch((error) => {
    console.error("[v0] Error ejecutando pruebas:", error)
  })
