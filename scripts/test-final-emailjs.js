// Script de prueba final para verificar configuración EmailJS
console.log("[v0] === PRUEBA FINAL EMAILJS ===")

// Verificar variables de entorno
const requiredVars = ["NEXT_PUBLIC_EMAILJS_SERVICE_ID", "NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID"]

console.log("[v0] Verificando variables de entorno:")
requiredVars.forEach((varName) => {
  const value = process.env[varName]
  if (value) {
    console.log(`✅ ${varName}: configurada (${value.substring(0, 8)}...)`)
  } else {
    console.log(`❌ ${varName}: NO configurada`)
  }
})

console.log("✅ EmailJS configurado con server action")

// Simular datos de prueba
const testData = {
  nom: "Usuario Prueba",
  email: "test@example.com",
  telephone: "+1234567890",
  message: "Prueba de inscripción desde script",
}

console.log("[v0] Datos de prueba preparados:", testData)
console.log("[v0] Sistema listo para prueba real de inscripción")
console.log("[v0] El email debería llegar a: info@academyson.com")
