import { CheckCircle, XCircle } from "lucide-react"
import type { EmailFormStatus } from "@/hooks/use-email-form"

interface FormStatusAlertProps {
  status: EmailFormStatus
  message: string
}

export function FormStatusAlert({ status, message }: FormStatusAlertProps) {
  if (status === "idle") return null

  return (
    <div
      className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${
        status === "success"
          ? "bg-green-900/50 border-green-500 text-green-100"
          : "bg-red-900/50 border-red-500 text-red-100"
      }`}
    >
      {status === "success" ? (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
      ) : (
        <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
      )}
      <p className="font-medium">{message}</p>
    </div>
  )
}
