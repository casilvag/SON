import { Card } from "@/components/ui/card"
import { Play, Camera, Music2, Mic2 } from "lucide-react"

export function GallerySection() {
  const galleryItems = [
    {
      type: "video",
      title: "Cours de Groupe",
      description: "Sessions d'apprentissage collaboratif",
      icon: Play,
      color: "bg-primary/20 text-primary",
    },
    {
      type: "photo",
      title: "Performances Étudiantes",
      description: "Récitals et spectacles",
      icon: Music2,
      color: "bg-accent/20 text-accent",
    },
    {
      type: "video",
      title: "Studio d'Enregistrement",
      description: "Coulisses des sessions",
      icon: Mic2,
      color: "bg-primary/20 text-primary",
    },
    {
      type: "photo",
      title: "Événements Live",
      description: "Ateliers et performances",
      icon: Camera,
      color: "bg-accent/20 text-accent",
    },
  ]

  return (
    <section id="galerie" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-24 text-yellow-400 text-xl opacity-40">♪</div>
        <div className="absolute top-32 right-20 text-red-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-48 left-1/4 text-blue-400 text-lg opacity-40">♬</div>
        <div className="absolute top-64 right-1/3 text-yellow-400 text-xl opacity-50">♪</div>
        <div className="absolute top-80 left-20 text-red-400 text-2xl opacity-40">♫</div>
        <div className="absolute bottom-32 right-16 text-blue-400 text-xl opacity-50">♪</div>
        <div className="absolute bottom-48 left-1/3 text-yellow-400 text-lg opacity-40">♬</div>
        <div className="absolute bottom-64 right-1/4 text-red-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-20 right-1/2 text-blue-400 text-xl opacity-40">♪</div>
        <div className="absolute bottom-20 left-1/2 text-yellow-400 text-lg opacity-50">♬</div>
        <div className="absolute top-36 left-1/5 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute top-52 right-1/5 text-blue-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-68 left-2/3 text-yellow-400 text-xl opacity-50">♬</div>
        <div className="absolute bottom-36 right-2/3 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-52 left-1/6 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute top-24 left-3/4 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-24 right-1/6 text-red-400 text-2xl opacity-50">♬</div>
        <div className="absolute top-8 left-1/2 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute bottom-8 right-1/2 text-yellow-400 text-lg opacity-45">♪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Galerie</span> & Médias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Découvrez l'atmosphère unique de notre académie à travers nos photos et vidéos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <div
                  className={`w-full h-full ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <item.icon className="w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Performances Live</h3>
            <p className="text-muted-foreground mb-4">
              Nos étudiants ont l'opportunité de se produire sur scène lors de nos événements réguliers et récitals.
            </p>
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-muted-foreground" />
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Studio d'Enregistrement</h3>
            <p className="text-muted-foreground mb-4">
              Équipement professionnel pour enregistrer vos créations, des reprises simples aux projets originaux
              complets.
            </p>
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <Mic2 className="w-16 h-16 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
