import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, User, CheckCircle, Home } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const individualCourses = [
    {
      title: "Basse Électrique",
      description: "Apprenez les techniques de base et avancées de la basse électrique avec un instructeur dédié.",
      benefits: ["Attention personnalisée", "Progression à votre rythme", "Répertoire adapté à vos goûts"],
      duration: "30-60 min",
      image: "/electric-bass-guitar-lesson.jpg",
    },
    {
      title: "Batterie",
      description:
        "Maîtrisez les rythmes et techniques de batterie dans un environnement d'apprentissage personnalisé.",
      benefits: ["Technique personnalisée", "Styles variés", "Équipement professionnel"],
      duration: "30-60 min",
      image: "/drum-kit-lesson.jpg",
    },
    {
      title: "DJ",
      description: "Découvrez l'art du mixage et de la production musicale avec des équipements professionnels.",
      benefits: ["Équipement professionnel", "Techniques de mixage", "Production musicale"],
      duration: "45-90 min",
      image: "/dj-mixing-turntables.jpg",
    },
    {
      title: "Guitare",
      description: "Cours de guitare personnalisés pour tous niveaux, du débutant au musicien confirmé.",
      benefits: ["Méthode adaptée", "Styles multiples", "Théorie et pratique"],
      duration: "30-60 min",
      image: "/acoustic-guitar-lesson.jpg",
    },
    {
      title: "Piano Moderne",
      description: "Explorez le piano moderne avec des techniques contemporaines et un répertoire actuel.",
      benefits: ["Répertoire moderne", "Techniques contemporaines", "Improvisation"],
      duration: "30-60 min",
      image: "/modern-piano-keyboard.jpg",
    },
    {
      title: "Production Musicale",
      description: "Apprenez à créer, enregistrer et produire votre propre musique avec des logiciels professionnels.",
      benefits: ["Logiciels professionnels", "Enregistrement", "Composition"],
      duration: "60-90 min",
      image: "/music-production-studio.png",
    },
    {
      title: "Xylophone",
      description: "Découvrez la beauté mélodique du xylophone avec des techniques classiques et modernes.",
      benefits: ["Technique de frappe", "Lecture musicale", "Répertoire varié"],
      duration: "30-45 min",
      image: "/xylophone-percussion-instrument.jpg",
    },
  ]

  const groupCourses = [
    {
      title: "Ensemble de Groupe - Rock",
      description: "Formez un groupe et jouez ensemble des classiques du rock dans une ambiance collaborative.",
      benefits: ["Jeu en groupe", "Répertoire rock", "Performance live"],
      duration: "90 min",
      maxStudents: "4-6 étudiants",
      image: "/rock-band-ensemble.jpg",
    },
    {
      title: "Atelier de Production Collective",
      description: "Créez de la musique ensemble en utilisant des techniques de production moderne.",
      benefits: ["Création collaborative", "Techniques modernes", "Projet commun"],
      duration: "120 min",
      maxStudents: "3-4 étudiants",
      image: "/group-music-production-workshop.jpg",
    },
    {
      title: "Folklor y Ritmos Latinos",
      description:
        "Explorez la richesse musicale de l'Amérique latine à travers ses rythmes traditionnels et ses instruments authentiques comme les congas, bongos, maracas et guitares.",
      benefits: ["Rythmes traditionnels", "Instruments authentiques", "Culture latino-américaine"],
      duration: "90 min",
      maxStudents: "6-8 étudiants",
      image: "/latin-folklore-instruments.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Nos Cours</h1>
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Découvrez nos Cours de Musique
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Choisissez entre nos cours individuels personnalisés ou nos cours de groupe dynamiques pour développer vos
            talents musicaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#inscription">S'inscrire Maintenant</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Individual Courses Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cours Individuels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Bénéficiez d'une attention personnalisée avec nos cours individuels adaptés à votre niveau et vos
              objectifs musicaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {individualCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      1:1
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Avantages:</h4>
                      <ul className="space-y-1">
                        {course.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/#inscription">S'inscrire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Group Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cours de Groupe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Rejoignez nos cours de groupe pour une expérience musicale collaborative et enrichissante avec d'autres
              passionnés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {groupCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Groupe
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {course.maxStudents}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Avantages:</h4>
                      <ul className="space-y-1">
                        {course.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/#inscription">S'inscrire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quel Type de Cours Vous Convient?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Cours Individuels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Attention personnalisée 100%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Progression à votre rythme</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Horaires flexibles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Répertoire personnalisé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground">Cours de Groupe</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Expérience collaborative</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Motivation de groupe</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Performances en groupe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à Commencer Votre Parcours Musical?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Rejoignez notre académie de musique et découvrez le plaisir d'apprendre avec des professeurs passionnés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#inscription">S'inscrire Maintenant</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Poser une Question</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
