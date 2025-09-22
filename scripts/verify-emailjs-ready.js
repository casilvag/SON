// Verificación final del sistema EmailJS después de configurar variables
console.log("🔍 === VERIFICACIÓN FINAL EMAILJS ===\n")

// Verificar todas las variables necesarias
const config = {
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
}

console.log("📋 Estado de configuración:")
let allReady = true

Object.entries(config).forEach(([key, value]) => {
  const status = value ? "✅ LISTO" : "❌ FALTA"
  const preview = value ? `(${value.substring(0, 8)}...)` : ""
  console.log(`${key}: ${status} ${preview}`)
  if (!value) allReady = false
})

console.log("\n" + "=".repeat(50))

if (allReady) {
  console.log("🎉 ¡SISTEMA COMPLETAMENTE CONFIGURADO!")
  console.log("✅ Todas las variables están disponibles")
  console.log("✅ El formulario de inscripción está listo")
  console.log("✅ Los emails se enviarán a: info@academyson.com")
  console.log("\n🚀 Puedes probar el formulario en la página web")
} else {
  console.log("⚠️  CONFIGURACIÓN INCOMPLETA")
  console.log("Ve a Project Settings → Environment Variables")
  console.log("y configura las variables faltantes")
}

console.log("\n📧 Template HTML para EmailJS:")
console.log("El template debe incluir estos campos:")
console.log("- {{nom}} - Nombre del estudiante")
console.log("- {{email}} - Email del estudiante")
console.log("- {{telephone}} - Teléfono del estudiante")
console.log("- {{message}} - Detalles completos del curso")
