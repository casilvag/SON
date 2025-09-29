"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/#apropos", label: "À Propos" },
    { href: "/#services", label: "Services" },
    { href: "/cursos", label: t("nav.courses") },
    { href: "/#equipe", label: "Équipe" },
    { href: "/#galerie", label: "Galerie" },
    { href: "/horaires", label: t("nav.schedule") },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <div className="h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="SON Académie de Musique Logo"
                  width={180}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="/#inscription">{t("nav.inscription")}</a>
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              <a href="/#inscription">{t("nav.inscription")}</a>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
