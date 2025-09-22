// Script para debuggear exactamente qué datos envía el formulario
console.log("=== DEBUG: Datos del formulario ===")

// Simular los datos que debería enviar el formulario
const testFormData = {
  nom: "Juan Pérez",
  email: "juan@example.com",
  telephone: "+33123456789",
  message: `INSCRIPCIÓN - Nueva solicitud de inscripción:

Edad: 34
Nivel: debutant
Curso deseado: bajo-electrico
Duración deseada: 30min
Horario preferido: matin
Disponibilidad: lundi

Mensaje adicional: gggsdfsadfsdf`,
}

console.log("Datos que debería enviar el formulario:")
console.log(JSON.stringify(testFormData, null, 2))

console.log("\n=== Verificación de campos ===")
console.log("nom:", testFormData.nom ? "✅ PRESENTE" : "❌ FALTANTE")
console.log("email:", testFormData.email ? "✅ PRESENTE" : "❌ FALTANTE")
console.log("telephone:", testFormData.telephone ? "✅ PRESENTE" : "❌ FALTANTE")
console.log("message:", testFormData.message ? "✅ PRESENTE" : "❌ FALTANTE")

console.log("\n=== Template HTML correcto ===")
console.log("Usa exactamente estos nombres de campos en tu template de EmailJS:")
console.log("- {{nom}} para el nombre")
console.log("- {{email}} para el correo")
console.log("- {{telephone}} para el teléfono")
console.log("- {{message}} para todos los detalles")

console.log("\n=== Próximo paso ===")
console.log("1. Verifica que tu template en EmailJS use exactamente {{nom}}, {{email}}, {{telephone}}, {{message}}")
console.log("2. Si sigues recibiendo campos vacíos, hay un problema en el envío del formulario")
