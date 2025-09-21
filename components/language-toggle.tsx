"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  onLanguageChange?: (language: "fr" | "es") => void
}

export function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  const [currentLanguage, setCurrentLanguage] = useState<"fr" | "es">("fr")

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "es" : "fr"
    setCurrentLanguage(newLanguage)
    onLanguageChange?.(newLanguage)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
    >
      <Globe className="w-4 h-4" />
      {currentLanguage === "fr" ? "ES" : "FR"}
    </Button>
  )
}
