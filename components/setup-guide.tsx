"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Circle, ExternalLink, Play } from "lucide-react"

export function SetupGuide() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [emailjsKey, setEmailjsKey] = useState("")
  const [testResults, setTestResults] = useState<string[]>([])
  const [isTestingEmail, setIsTestingEmail] = useState(false)

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber) ? prev.filter((s) => s !== stepNumber) : [...prev, stepNumber],
    )
  }

  const runEmailTest = async () => {
    setIsTestingEmail(true)
    setTestResults([])

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ test: true }),
      })

      const result = await response.json()
      setTestResults(result.results || ["Prueba completada"])
    } catch (error) {
      setTestResults([`❌ Error: ${error.message}`])
    } finally {
      setIsTestingEmail(false)
    }
  }

  const steps = [
    {
      id: 1,
      title: "Crear cuenta en EmailJS",
      description: "Regístrate en EmailJS para obtener las credenciales",
      action: (
        <Button variant="outline" size="sm" asChild>
          <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">
            Ir a EmailJS <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      ),
    },
    {
      id: 2,
      title: "Configurar servicio de email",
      description: "Conecta tu cuenta de Gmail en EmailJS",
      details: [
        "1. Ve a 'Email Services' en tu dashboard de EmailJS",
        "2. Haz clic en 'Add New Service'",
        "3. Selecciona 'Gmail'",
        "4. Autoriza tu cuenta de Gmail",
        "5. Copia el Service ID generado",
      ],
    },
    {
      id: 3,
      title: "Crear plantillas de email",
      description: "Configura las plantillas para contacto y consulta",
      details: [
        "1. Ve a 'Email Templates'",
        "2. Crea template 'contact_form' con variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}",
        "3. Crea template 'consultation_form' con variables: {{from_name}}, {{from_email}}, {{phone}}, {{course}}, {{message}}",
        "4. Copia los Template IDs",
      ],
    },
    {
      id: 4,
      title: "Obtener Public Key",
      description: "Copia tu clave pública de EmailJS",
      details: ["1. Ve a 'Account' > 'General'", "2. Copia tu 'Public Key'", "3. Pégala en el campo de abajo"],
      action: (
        <div className="space-y-2">
          <Label htmlFor="emailjs-key">EmailJS Public Key</Label>
          <Input
            id="emailjs-key"
            value={emailjsKey}
            onChange={(e) => setEmailjsKey(e.target.value)}
            placeholder="Pega tu Public Key aquí"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "Probar sistema de email",
      description: "Ejecuta las pruebas automatizadas",
      action: (
        <div className="space-y-4">
          <Button onClick={runEmailTest} disabled={isTestingEmail || !emailjsKey} className="w-full">
            <Play className="mr-2 h-4 w-4" />
            {isTestingEmail ? "Probando..." : "Ejecutar Pruebas"}
          </Button>
          {testResults.length > 0 && (
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="font-medium mb-2">Resultados de Prueba:</h4>
              {testResults.map((result, index) => (
                <div key={index} className="text-sm font-mono">
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Configuración del Sistema de Email</CardTitle>
          <CardDescription>Sigue estos pasos para configurar el envío real de correos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <button onClick={() => toggleStep(step.id)} className="mt-1 text-green-600">
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>

                  {step.details && (
                    <ul className="mt-2 text-sm space-y-1">
                      {step.details.map((detail, index) => (
                        <li key={index} className="text-gray-700">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.action && <div className="mt-3">{step.action}</div>}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900">Progreso: {completedSteps.length}/5 pasos completados</h4>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedSteps.length / 5) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
