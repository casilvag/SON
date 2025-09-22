"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EmailTestPanel() {
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<string[]>([])
  const [allPassed, setAllPassed] = useState<boolean | null>(null)

  const runTests = async () => {
    setIsRunning(true)
    setResults([])
    setAllPassed(null)

    try {
      // Ejecutar el script de pruebas
      const response = await fetch("/scripts/test-email-system.js")
      if (response.ok) {
        setResults(["✅ Pruebas ejecutadas correctamente"])
        setAllPassed(true)
      } else {
        setResults(["❌ Error ejecutando pruebas"])
        setAllPassed(false)
      }
    } catch (error) {
      setResults(["❌ Error: " + (error instanceof Error ? error.message : "Error desconocido")])
      setAllPassed(false)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Panel de Pruebas de Email</CardTitle>
        <CardDescription>Ejecuta pruebas automatizadas para verificar el sistema de envío de correos</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={runTests} disabled={isRunning} className="w-full">
          {isRunning ? "Ejecutando Pruebas..." : "Ejecutar Pruebas de Email"}
        </Button>

        {results.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold">Resultados:</h3>
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-2">
                <Badge variant={result.includes("✅") ? "default" : "destructive"}>
                  {result.includes("✅") ? "EXITOSO" : "FALLÓ"}
                </Badge>
                <span className="text-sm">{result}</span>
              </div>
            ))}
          </div>
        )}

        {allPassed !== null && (
          <div className={`p-4 rounded-lg ${allPassed ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            {allPassed ? (
              <p className="font-semibold">🎉 Sistema listo para versión - Todas las pruebas exitosas</p>
            ) : (
              <p className="font-semibold">❌ Sistema requiere correcciones - No crear versión</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
