"use client"

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

      {/* Featured Plan Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/children-music-class-laughing.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-4 border-amber-400 shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              {/* Golden frame effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-20"></div>

              {/* Star badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-amber-500 text-white font-bold px-3 py-1 text-sm shadow-lg">
                  ⭐ PRODUIT VEDETTE
                </Badge>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      Plan Sensibilización Musical
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Un plan d'apprentissage musical personnalisé vers la découverte musicale de l'étudiant, où nous
                      facilitons la possibilité de changer entre tous nos cours individuels ou bien les mélanger dans
                      chaque classe.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Caractéristiques Uniques:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Flexibilité totale:</strong> Changez d'instrument à chaque cours selon vos envies
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Guidance professionnelle:</strong> Décisions toujours guidées par nos professeurs
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Découverte personnalisée:</strong> Basé sur votre motivation et curiosité musicale
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Même tarif:</strong> Prix identique aux cours individuels traditionnels
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      30-90 min
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      1:1 Personnalisé
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/musical-discovery-instruments-artistic.jpg"
                      alt="Plan Sensibilización Musical - Découverte instrumentale"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Card>
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
