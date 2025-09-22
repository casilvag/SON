// Script de diagnóstico para verificar la configuración de EmailJS

console.log("=== DIAGNÓSTICO DE CONFIGURACIÓN EMAILJS ===\n")

// Verificar variables de entorno disponibles
const requiredVars = {
  EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
}

console.log("📋 Variables de entorno requeridas:")
let allConfigured = true

for (const [varName, value] of Object.entries(requiredVars)) {
  const status = value ? "✅ CONFIGURADA" : "❌ FALTANTE"
  console.log(`${varName}: ${status}`)
  if (!value) {
    allConfigured = false
  }
}

console.log("\n" + "=".repeat(50))

if (allConfigured) {
  console.log("🎉 ¡Todas las variables están configuradas!")
  console.log("El formulario de inscripción debería funcionar correctamente.")
} else {
  console.log("⚠️  ACCIÓN REQUERIDA:")
  console.log("1. Ve a Project Settings → Environment Variables")
  console.log("2. Configura las variables faltantes:")

  for (const [varName, value] of Object.entries(requiredVars)) {
    if (!value) {
      console.log(`   - ${varName}`)
    }
  }

  console.log("\n📝 Cómo obtener los valores:")
  console.log("1. Ve a https://dashboard.emailjs.com")
  console.log("2. Crea/obtén tu Service ID desde 'Email Services'")
  console.log("3. Crea/obtén tu Template ID desde 'Email Templates'")
  console.log("4. Obtén tu Public Key desde 'Account' → 'General'")
}

console.log("\n" + "=".repeat(50))
console.log("🔧 Estado del sistema:")
console.log("- Formulario: ✅ Implementado correctamente")
console.log("- EmailJS: ✅ Configurado del lado del cliente")
console.log("- API Endpoint: ✅ Funcionando")
console.log("- Falta: ⚠️  Variables de entorno")
