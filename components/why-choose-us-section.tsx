import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, Clock, Heart, Star } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Globe,
      title: "Instructeurs Trilingues",
      description: "Enseignement en français, anglais et espagnol pour une expérience d'apprentissage inclusive",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Approche Personnalisée",
      description: "Chaque étudiant bénéficie d'un programme adapté à son niveau et ses objectifs musicaux",
      color: "text-accent",
    },
    {
      icon: Award,
      title: "Instructeurs Expérimentés",
      description: "Notre équipe de professionnels passionnés vous guide vers l'excellence musicale",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Horaires Flexibles",
      description: "Cours disponibles en semaine et weekend pour s'adapter à votre emploi du temps",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Environnement Bienveillant",
      description: "Une atmosphère chaleureuse et encourageante pour développer votre passion musicale",
      color: "text-primary",
    },
    {
      icon: Star,
      title: "Performances Live",
      description: "Opportunités régulières de se produire en concert et d'enregistrer vos créations",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Pourquoi Choisir <span className="text-primary">SON Académie</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Découvrez ce qui fait de notre académie un lieu unique pour votre parcours musical
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8 text-center">
                <feature.icon
                  className={`w-12 h-12 ${feature.color} mb-4 mx-auto group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Notre Mission</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Faire de la musique accessible à tous, dans un environnement professionnel et bienveillant
            </p>
            <p className="text-muted-foreground">
              Que vous soyez débutant ou musicien confirmé, notre équipe vous accompagne dans votre évolution artistique
              avec passion et expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
