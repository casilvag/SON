import { Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">SON</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Académie de musique à Québec offrant une approche flexible et créative pour apprendre la musique à votre
              rythme.
            </p>
            <p className="text-sm text-muted-foreground">© 2024 Académie Son. Tous droits réservés.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-muted-foreground hover:text-foreground transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-muted-foreground hover:text-foreground transition-colors">
                  Équipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Instruments</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Guitare</li>
              <li className="text-muted-foreground">Basse</li>
              <li className="text-muted-foreground">Piano</li>
              <li className="text-muted-foreground">Batterie</li>
              <li className="text-muted-foreground">Percussions Latines</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">Créé avec passion pour la musique • Québec, Canada</p>
        </div>
      </div>
    </footer>
  )
}
