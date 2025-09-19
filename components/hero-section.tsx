import { Button } from "@/components/ui/button"
import { Play, Music } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Music className="w-16 h-16 text-primary mx-auto mb-6" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="text-primary">SON</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Apprenez la Musique à Votre Rythme, avec Passion et Créativité
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Commencer Maintenant
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="w-5 h-5 mr-2" />
              Voir la Démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
