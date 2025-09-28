"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const GuitarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M8 6h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M8 10h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M8 14h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M8 18h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <ellipse cx="12" cy="4" rx="6" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M6 4v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
)

const PianoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="8" width="20" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="6" x2="6" y1="8" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="10" x2="10" y1="8" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="14" x2="14" y1="8" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="18" x2="18" y1="8" y2="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <rect x="4" y="8" width="2" height="7" fill="currentColor" strokeWidth={0} />
    <rect x="8" y="8" width="2" height="7" fill="currentColor" strokeWidth={0} />
    <rect x="16" y="8" width="2" height="7" fill="currentColor" strokeWidth={0} />
  </svg>
)

const DrumIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M8 1l2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M16 1l-2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const MicIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="12" x2="12" y1="19" y2="22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const MusicIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="18" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const HeadphonesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: MusicIcon,
      title: t("services.sensibilization.title"),
      description: t("services.sensibilization.description"),
      color: "text-yellow-400",
      isStar: true,
    },
    {
      icon: GuitarIcon,
      title: t("services.strings.title"),
      description: t("services.strings.description"),
      color: "text-primary",
    },
    {
      icon: PianoIcon,
      title: t("services.piano.title"),
      description: t("services.piano.description"),
      color: "text-accent",
    },
    {
      icon: DrumIcon,
      title: t("services.percussion.title"),
      description: t("services.percussion.description"),
      color: "text-primary",
    },
    {
      icon: HeadphonesIcon,
      title: t("services.dj.title"),
      description: t("services.dj.description"),
      color: "text-accent",
    },
    {
      icon: MusicIcon,
      title: t("services.production.title"),
      description: t("services.production.description"),
      color: "text-primary",
    },
    {
      icon: MicIcon,
      title: t("services.recording.title"),
      description: t("services.recording.description"),
      color: "text-accent",
    },
    {
      icon: UsersIcon,
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
        <div className="absolute top-60 right-1/5 text-blue-400 text-xl opacity-40">♫</div>
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
