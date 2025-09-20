"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/#apropos", label: "À Propos" },
    { href: "/#services", label: "Services" },
    { href: "/#equipe", label: "Équipe" },
    { href: "/#galerie", label: "Galerie" },
    { href: "/horarios", label: "Horarios" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <defs>
                  <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff0000" />
                    <stop offset="16.66%" stopColor="#ff8c00" />
                    <stop offset="33.33%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#00ff00" />
                    <stop offset="66.66%" stopColor="#0080ff" />
                    <stop offset="83.33%" stopColor="#8000ff" />
                    <stop offset="100%" stopColor="#ff00ff" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9ZM6 9C6 10.1 5.1 11 4 11C2.9 11 2 10.1 2 9C2 7.9 2.9 7 4 7C5.1 7 6 7.9 6 9ZM12 7C12.6 7 13 7.4 13 8V16C13 16.6 12.6 17 12 17C11.4 17 11 16.6 11 16V8C11 7.4 11.4 7 12 7ZM17 12C17 13.1 16.1 14 15 14C13.9 14 13 13.1 13 12C13 10.9 13.9 10 15 10C16.1 10 17 10.9 17 12ZM11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12ZM19 15C19 16.1 18.1 17 17 17C15.9 17 15 16.1 15 15C15 13.9 15.9 13 17 13C18.1 13 19 13.9 19 15ZM9 15C9 16.1 8.1 17 7 17C5.9 17 5 16.1 5 15C5 13.9 5.9 13 7 13C8.1 13 9 13.9 9 15ZM15 18C15 19.1 14.1 20 13 20C11.9 20 11 19.1 11 18C11 16.9 11.9 16 13 16C14.1 16 15 16.9 15 18ZM9 18C9 19.1 8.1 20 7 20C5.9 20 5 19.1 5 18C5 16.9 5.9 16 7 16C8.1 16 9 16.9 9 18Z"
                  fill="url(#rainbow)"
                  stroke="url(#rainbow)"
                  strokeWidth="0.5"
                />
              </svg>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-primary">SON</div>
                <div className="text-xs text-muted-foreground font-medium">Académie de Musique</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild className="hidden md:block">
            <a href="/#contact">Inscription</a>
          </Button>

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
              <Button asChild className="w-full mt-4">
                <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Inscription
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
