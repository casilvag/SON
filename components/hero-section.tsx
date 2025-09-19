"use client"

import { Button } from "@/components/ui/button"
import { Play, Music } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images: string[] = []

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [images.length])

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {images.length > 0 && (
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      )}

      {images.length === 0 && <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />}

      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <Music className="w-16 h-16 text-white mx-auto mb-6" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance text-white">
              <span className="text-primary">SON</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-8 text-balance">
              Apprenez la Musique à Votre Rythme, avec Passion et Créativité
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Commencer Maintenant
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la Démo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
