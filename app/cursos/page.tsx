"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, User, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { useLanguage } from "@/contexts/language-context"

export default function CoursesPage() {
  const { t } = useLanguage()

  const individualCourses = [
    {
      title: t("courses.individual.bass.title"),
      description: t("courses.individual.bass.description"),
      benefits: [
        t("courses.individual.bass.benefit1"),
        t("courses.individual.bass.benefit2"),
        t("courses.individual.bass.benefit3"),
      ],
      duration: "30-60 min",
      image: "/electric-bass-guitar-lesson.jpg",
    },
    {
      title: t("courses.individual.drums.title"),
      description: t("courses.individual.drums.description"),
      benefits: [
        t("courses.individual.drums.benefit1"),
        t("courses.individual.drums.benefit2"),
        t("courses.individual.drums.benefit3"),
      ],
      duration: "30-60 min",
      image: "/drum-kit-lesson.jpg",
    },
    {
      title: t("courses.individual.dj.title"),
      description: t("courses.individual.dj.description"),
      benefits: [
        t("courses.individual.dj.benefit1"),
        t("courses.individual.dj.benefit2"),
        t("courses.individual.dj.benefit3"),
      ],
      duration: "45-90 min",
      image: "/dj-mixing-turntables.jpg",
    },
    {
      title: t("courses.individual.guitar.title"),
      description: t("courses.individual.guitar.description"),
      benefits: [
        t("courses.individual.guitar.benefit1"),
        t("courses.individual.guitar.benefit2"),
        t("courses.individual.guitar.benefit3"),
      ],
      duration: "30-60 min",
      image: "/acoustic-guitar-lesson.jpg",
    },
    {
      title: t("courses.individual.piano.title"),
      description: t("courses.individual.piano.description"),
      benefits: [
        t("courses.individual.piano.benefit1"),
        t("courses.individual.piano.benefit2"),
        t("courses.individual.piano.benefit3"),
      ],
      duration: "30-60 min",
      image: "/modern-piano-keyboard.jpg",
    },
    {
      title: t("courses.individual.production.title"),
      description: t("courses.individual.production.description"),
      benefits: [
        t("courses.individual.production.benefit1"),
        t("courses.individual.production.benefit2"),
        t("courses.individual.production.benefit3"),
      ],
      duration: "60-90 min",
      image: "/music-production-studio.png",
    },
    {
      title: t("courses.individual.xylophone.title"),
      description: t("courses.individual.xylophone.description"),
      benefits: [
        t("courses.individual.xylophone.benefit1"),
        t("courses.individual.xylophone.benefit2"),
        t("courses.individual.xylophone.benefit3"),
      ],
      duration: "30-45 min",
      image: "/xylophone-percussion-instrument.jpg",
    },
  ]

  const groupCourses = [
    {
      title: t("courses.group.rock.title"),
      description: t("courses.group.rock.description"),
      benefits: [t("courses.group.rock.benefit1"), t("courses.group.rock.benefit2"), t("courses.group.rock.benefit3")],
      duration: "90 min",
      maxStudents: t("courses.group.rock.students"),
      image: "/rock-band-ensemble.jpg",
    },
    {
      title: t("courses.group.production.title"),
      description: t("courses.group.production.description"),
      benefits: [
        t("courses.group.production.benefit1"),
        t("courses.group.production.benefit2"),
        t("courses.group.production.benefit3"),
      ],
      duration: "120 min",
      maxStudents: t("courses.group.production.students"),
      image: "/group-music-production-workshop.jpg",
    },
    {
      title: t("courses.group.folklore.title"),
      description: t("courses.group.folklore.description"),
      benefits: [
        t("courses.group.folklore.benefit1"),
        t("courses.group.folklore.benefit2"),
        t("courses.group.folklore.benefit3"),
      ],
      duration: "90 min",
      maxStudents: t("courses.group.folklore.students"),
      image: "/latin-folklore-instruments.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection showVideoButton={false} />

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
                  ⭐ {t("services.featured")}
                </Badge>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("courses.featured.title")}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t("courses.featured.description")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t("courses.featured.unique_features")}:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>{t("courses.featured.flexibility")}:</strong> {t("courses.featured.flexibility_desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>{t("courses.featured.guidance")}:</strong> {t("courses.featured.guidance_desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>{t("courses.featured.discovery")}:</strong> {t("courses.featured.discovery_desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>{t("courses.featured.pricing")}:</strong> {t("courses.featured.pricing_desc")}
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
                      {t("courses.featured.personalized")}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/musical-discovery-instruments-artistic.jpg"
                      alt={t("courses.featured.alt")}
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("courses.individual.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("courses.individual.subtitle")}
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
                      <h4 className="font-medium text-foreground">{t("courses.benefits")}:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("courses.group.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("courses.group.subtitle")}</p>
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
                      {t("courses.group.badge")}
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
                      <h4 className="font-medium text-foreground">{t("courses.benefits")}:</h4>
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
