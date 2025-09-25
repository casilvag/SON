"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

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
      <GlobeIcon />
      {language === "fr" ? "ES" : "FR"}
    </Button>
  )
}
