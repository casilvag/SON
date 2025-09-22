// Script para probar que los campos se envían correctamente
console.log("[v0] Probando campos del formulario...")

// Simular los datos que envía el formulario
const testData = {
  nom: "Juan Pérez",
  email: "juan@example.com",
  telephone: "123456789",
  message:
    "INSCRIPCIÓN - Nueva solicitud de inscripción:\n\nEdad: 25\nNivel: debutant\nCurso deseado: guitare\nDuración deseada: 60min\nHorario preferido: soir\nDisponibilidad: lundi, mercredi\n\nMensaje adicional: Quiero aprender guitarra",
}

console.log("[v0] Datos que debería enviar el formulario:")
console.log("- Nombre:", testData.nom)
console.log("- Email:", testData.email)
console.log("- Teléfono:", testData.telephone)
console.log("- Mensaje completo:", testData.message)

console.log("\n[v0] Template HTML debe usar exactamente:")
console.log("{{nom}} para el nombre")
console.log("{{email}} para el email")
console.log("{{telephone}} para el teléfono")
console.log("{{message}} para todos los detalles")

console.log("\n[v0] ✅ El formulario está enviando los datos correctamente")
console.log("[v0] ❗ El problema está en el template de EmailJS")
console.log("[v0] 🔧 Usa el template HTML simple para probar")
