import { Card, CardContent } from "@/components/ui/card"
import { Guitar, Piano, Drum, Mic, Music, Headphones } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Guitar,
      title: "Instruments à Cordes",
      description: "Cours de guitare et basse pour tous niveaux",
      color: "text-primary",
    },
    {
      icon: Piano,
      title: "Piano Moderne",
      description: "Cours de piano moderne pour tous niveaux et styles contemporains",
      color: "text-accent",
    },
    {
      icon: Drum,
      title: "Percussions",
      description: "Batterie, congas, djembé et percussions latines",
      color: "text-primary",
    },
    {
      icon: Headphones,
      title: "Cours de DJ",
      description: "Mixage, techniques de DJ et production électronique",
      color: "text-accent",
    },
    {
      icon: Music,
      title: "Production Musicale",
      description: "Formation spécialisée en production, composition et arrangements",
      color: "text-primary",
    },
    {
      icon: Mic,
      title: "Enregistrement Professionnel",
      description: "Services d'enregistrement de reprises simples aux projets originaux complets",
      color: "text-accent",
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-red-400 text-xl opacity-25">♪</div>
        <div className="absolute top-36 right-24 text-yellow-400 text-2xl opacity-30">♫</div>
        <div className="absolute top-52 left-1/3 text-blue-400 text-lg opacity-25">♬</div>
        <div className="absolute top-68 right-1/4 text-red-400 text-xl opacity-30">♪</div>
        <div className="absolute top-84 left-20 text-yellow-400 text-2xl opacity-25">♫</div>
        <div className="absolute bottom-40 right-20 text-blue-400 text-xl opacity-30">♪</div>
        <div className="absolute bottom-56 left-1/4 text-red-400 text-lg opacity-25">♬</div>
        <div className="absolute bottom-72 right-1/3 text-yellow-400 text-2xl opacity-30">♫</div>
        <div className="absolute top-24 right-1/2 text-blue-400 text-xl opacity-25">♪</div>
        <div className="absolute bottom-24 left-1/2 text-red-400 text-2xl opacity-30">♬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Une gamme complète de services musicaux adaptés à tous les niveaux et tous les âges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-8">
                <service.icon
                  className={`w-12 h-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Approche Flexible</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Cours flexibles : passez facilement d'un instrument à l'autre
            </p>
            <p className="text-muted-foreground">
              Formation personnalisée et mentorat • Opportunités de performances live et d'enregistrement de projets
              originaux
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
