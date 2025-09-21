"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Guitar, Piano, Drum, Mic, Music, Headphones, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Music,
      title: t("services.sensibilization.title"),
      description: t("services.sensibilization.description"),
      color: "text-yellow-400",
      isStar: true,
    },
    {
      icon: Guitar,
      title: t("services.strings.title"),
      description: t("services.strings.description"),
      color: "text-primary",
    },
    {
      icon: Piano,
      title: t("services.piano.title"),
      description: t("services.piano.description"),
      color: "text-accent",
    },
    {
      icon: Drum,
      title: t("services.percussion.title"),
      description: t("services.percussion.description"),
      color: "text-primary",
    },
    {
      icon: Headphones,
      title: t("services.dj.title"),
      description: t("services.dj.description"),
      color: "text-accent",
    },
    {
      icon: Music,
      title: t("services.production.title"),
      description: t("services.production.description"),
      color: "text-primary",
    },
    {
      icon: Mic,
      title: t("services.recording.title"),
      description: t("services.recording.description"),
      color: "text-accent",
    },
    {
      icon: Users,
      title: t("services.ensemble.title"),
      description: t("services.ensemble.description"),
      color: "text-blue-400",
      isNew: true,
    },
  ]

  return (
    <section id="services" className="pt-8 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-red-400 text-xl opacity-40">♪</div>
        <div className="absolute top-36 right-24 text-yellow-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-52 left-1/3 text-blue-400 text-lg opacity-45">♬</div>
        <div className="absolute top-68 right-1/4 text-red-400 text-xl opacity-50">♪</div>
        <div className="absolute top-84 left-20 text-yellow-400 text-2xl opacity-40">♫</div>
        <div className="absolute bottom-40 right-20 text-blue-400 text-xl opacity-50">♪</div>
        <div className="absolute bottom-56 left-1/4 text-red-400 text-lg opacity-40">♬</div>
        <div className="absolute bottom-72 right-1/3 text-yellow-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-24 right-1/2 text-blue-400 text-xl opacity-40">♪</div>
        <div className="absolute bottom-24 left-1/2 text-red-400 text-2xl opacity-50">♬</div>
        <div className="absolute top-44 left-1/5 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute top-60 right-1/5 text-blue-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-76 left-2/3 text-red-400 text-xl opacity-50">♬</div>
        <div className="absolute bottom-44 right-2/3 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-60 left-1/6 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute top-32 left-3/4 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-32 right-1/6 text-yellow-400 text-2xl opacity-40">♬</div>
        <div className="absolute top-12 left-1/2 text-blue-400 text-xl opacity-40">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("services.title")} <span className="text-primary">{t("services.services")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href="/cursos" className="block">
              <Card
                className={`bg-card border-border hover:border-primary/50 transition-colors group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform ${
                  service.isNew
                    ? "ring-2 ring-blue-400/30 bg-blue-950/20"
                    : service.isStar
                      ? "ring-4 ring-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 border-yellow-400/30"
                      : ""
                }`}
              >
                <div
                  className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      service.title === t("services.sensibilization.title")
                        ? `url('/musical-discovery-instruments-artistic.jpg')`
                        : service.title === t("services.strings.title")
                          ? `url('/electric-guitar-strings-close-up-artistic.jpg')`
                          : service.title === t("services.piano.title")
                            ? `url('/modern-piano-keys-black-and-white-artistic.jpg')`
                            : service.title === t("services.percussion.title")
                              ? `url('/drum-kit-cymbals-percussion-instruments-artistic.jpg')`
                              : service.title === t("services.dj.title")
                                ? `url('/dj-turntables-mixing-console-headphones-artistic.jpg')`
                                : service.title === t("services.production.title")
                                  ? `url('/music-production-studio-mixing-board-artistic.jpg')`
                                  : service.title === t("services.recording.title")
                                    ? `url('/recording-studio-microphone-professional-artistic.jpg')`
                                    : `url('/musical-ensemble-group-instruments-artistic.jpg')`,
                  }}
                />
                <CardContent className="p-8 relative z-10">
                  {service.isStar && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ {t("services.featured")}
                    </div>
                  )}
                  {service.isNew && (
                    <div className="absolute top-4 right-4 bg-blue-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                      {t("services.new")}
                    </div>
                  )}
                  <service.icon
                    className={`w-12 h-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  {service.isStar && (
                    <div className="mt-4 pt-4 border-t border-yellow-400/20">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-yellow-400">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {t("services.sensibilization.feature1")}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {t("services.sensibilization.feature2")}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {t("services.sensibilization.feature3")}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {t("services.sensibilization.feature4")}
                        </div>
                      </div>
                    </div>
                  )}
                  {service.isNew && (
                    <div className="mt-4 pt-4 border-t border-blue-400/20">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-blue-400">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {t("services.ensemble.feature1")}
                        </div>
                        <div className="flex items-center text-blue-400">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {t("services.ensemble.feature2")}
                        </div>
                        <div className="flex items-center text-blue-400">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {t("services.ensemble.feature3")}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">{t("services.flexible.title")}</h3>
            <p className="text-lg text-muted-foreground mb-4">{t("services.flexible.subtitle")}</p>
            <p className="text-muted-foreground">{t("services.flexible.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
