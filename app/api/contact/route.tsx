// EmailJS funciona directamente desde el cliente, no necesita API route
export async function POST() {
  return new Response("EmailJS se ejecuta desde el cliente", { status: 200 })
}
