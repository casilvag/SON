import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-yellow-400 text-2xl opacity-30">♪</div>
        <div className="absolute top-32 right-20 text-blue-400 text-xl opacity-25">♫</div>
        <div className="absolute top-48 left-1/4 text-red-400 text-lg opacity-30">♪</div>
        <div className="absolute top-64 right-1/3 text-yellow-400 text-xl opacity-25">♬</div>
        <div className="absolute top-80 left-16 text-blue-400 text-2xl opacity-30">♫</div>
        <div className="absolute bottom-32 right-16 text-red-400 text-xl opacity-25">♪</div>
        <div className="absolute bottom-48 left-1/3 text-yellow-400 text-lg opacity-30">♬</div>
        <div className="absolute bottom-64 right-1/4 text-blue-400 text-2xl opacity-25">♫</div>
        <div className="absolute top-20 right-1/2 text-red-400 text-xl opacity-30">♪</div>
        <div className="absolute bottom-20 left-1/2 text-yellow-400 text-2xl opacity-25">♬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            À Propos de <span className="text-primary">Son</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Chez Son, nous visons à attirer des étudiants de tous âges et niveaux en cultivant la sensibilité musicale
            comme fondement clé.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Objectif</h3>
              <p className="text-muted-foreground">
                Chaque étudiant vit la musique comme un langage vivant, plein d'émotion, de créativité et d'expression
                personnelle.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Fournir une éducation musicale complète et flexible, permettant à chaque étudiant de progresser à son
                rythme et d'explorer librement plusieurs instruments et styles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 text-center">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                Être une académie de musique leader au Québec et au-delà, reconnue pour notre approche innovante
                permettant aux étudiants de passer d'un instrument à l'autre sans limitations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
