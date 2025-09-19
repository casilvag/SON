"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À Propos" },
    { href: "#services", label: "Services" },
    { href: "#equipe", label: "Équipe" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">SON</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:block">Inscription</Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
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
              <Button className="w-full mt-4">Inscription</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
