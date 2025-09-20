import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-20 text-blue-400 text-2xl opacity-30">♪</div>
        <div className="absolute top-40 right-16 text-yellow-400 text-xl opacity-25">♫</div>
        <div className="absolute top-56 left-1/4 text-red-400 text-lg opacity-30">♬</div>
        <div className="absolute top-72 right-1/3 text-blue-400 text-xl opacity-25">♪</div>
        <div className="absolute top-88 left-16 text-yellow-400 text-2xl opacity-30">♫</div>
        <div className="absolute bottom-36 right-24 text-red-400 text-xl opacity-25">♪</div>
        <div className="absolute bottom-52 left-1/3 text-blue-400 text-lg opacity-30">♬</div>
        <div className="absolute bottom-68 right-1/4 text-yellow-400 text-2xl opacity-25">♫</div>
        <div className="absolute top-28 right-1/2 text-red-400 text-xl opacity-30">♪</div>
        <div className="absolute bottom-28 left-1/2 text-blue-400 text-2xl opacity-25">♬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Notre <span className="text-primary">Équipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Des professeurs expérimentés et passionnés, reconnus dans d'autres écoles de musique du Québec
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* César Silva */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/cesar-silva.jpeg"
                    alt="César Silva - Fondateur et Instructeur Principal"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">César Silva</h3>
                <p className="text-primary font-semibold">Fondateur et Instructeur Principal</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Spécialités</h4>
                  <p className="text-sm text-muted-foreground">
                    Production musicale, composition, batterie, guitare, basse, percussions latines, piano
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Formation Académique
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Berklee College of Music (USA), Universidad Nacional de Colombia, Université Laval (Canada)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Expérience
                  </h4>
                  <p className="text-sm text-muted-foreground">Plus de 10 ans d'enseignement, dont 2 ans au Québec</p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2">Approche</h4>
                  <p className="text-sm text-muted-foreground">
                    Combine la maîtrise technique avec la créativité et la sensibilité musicale
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sebastián Rey */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Sebastián Rey</h3>
                <p className="text-accent font-semibold">Instructeur</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Spécialités</h4>
                  <p className="text-sm text-muted-foreground">Piano, batterie, percussions, guitare, basse</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Expérience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Reconnu pour sa polyvalence et son soutien aux étudiants de tous niveaux dans leur parcours musical
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "La musique est un voyage personnel unique pour chaque étudiant. Mon rôle est de les guider avec
                    patience et passion."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-primary">Reconnaissance Professionnelle</h3>
            <p className="text-muted-foreground">
              Faculté reconnue dans d'autres écoles de musique du Québec, notamment Long & McQuade, Cercle de musique de
              Cap Rouge, Sam Gagnon, et plus encore.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
