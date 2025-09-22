"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "es" : "fr"
    setLanguage(newLanguage)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
    >
      <Globe className="w-4 h-4" />
      {language === "fr" ? "ES" : "FR"}
    </Button>
  )
}
