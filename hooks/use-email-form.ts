"use client"

import { useState } from "react"

export type EmailFormStatus = "idle" | "success" | "error"

export interface UseEmailFormOptions {
  onSuccess?: (message: string) => void
  onError?: (error: string) => void
  resetDelay?: number
}

export function useEmailForm(options: UseEmailFormOptions = {}) {
  const { onSuccess, onError, resetDelay = 5000 } = options

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<EmailFormStatus>("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async <T extends Record<string, any>>(
    formData: T,
    submitFunction: (data: T) => Promise<{ success: boolean; error?: string; result?: any }>,
    validationRules?: (data: T) => string | null,
  ) => {
    setIsSubmitting(true)
    setStatus("idle")
    setMessage("")

    try {
      if (validationRules) {
        const validationError = validationRules(formData)
        if (validationError) {
          throw new Error(validationError)
        }
      }

      console.log("[v0] Enviando formulario con datos validados")

      const result = await submitFunction(formData)

      if (result.success) {
        const successMessage = "¡Tu solicitud ha sido enviada exitosamente! Te contactaremos pronto."
        setStatus("success")
        setMessage(successMessage)
        onSuccess?.(successMessage)

        setTimeout(() => {
          setStatus("idle")
          setMessage("")
        }, resetDelay)
      } else {
        const errorMessage = result.error || "Error al enviar la solicitud. Por favor, inténtalo de nuevo."
        setStatus("error")
        setMessage(errorMessage)
        onError?.(errorMessage)
      }
    } catch (error) {
      console.error("[v0] Error en formulario:", error)
      const errorMessage =
        error instanceof Error ? error.message : "Error de conexión. Verifica tu internet e inténtalo de nuevo."
      setStatus("error")
      setMessage(errorMessage)
      onError?.(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setIsSubmitting(false)
    setStatus("idle")
    setMessage("")
  }

  return {
    isSubmitting,
    status,
    message,
    handleSubmit,
    reset,
  }
}

export const emailValidations = {
  required: (fields: Record<string, any>, requiredFields: string[]) => {
    for (const field of requiredFields) {
      if (!fields[field]?.toString().trim()) {
        return `El campo ${field} es obligatorio`
      }
    }
    return null
  },

  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Formato de email inválido"
    }
    return null
  },

  phone: (phone: string) => {
    const phoneRegex = /^[\d\s\-+$$$$]{10,}$/
    if (phone && !phoneRegex.test(phone.replace(/\s/g, ""))) {
      return "Formato de teléfono inválido"
    }
    return null
  },
}
