"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Music } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="equipe" className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-20 text-blue-400 text-2xl opacity-50">♪</div>
        <div className="absolute top-40 right-16 text-yellow-400 text-xl opacity-40">♫</div>
        <div className="absolute top-56 left-1/4 text-red-400 text-lg opacity-50">♬</div>
        <div className="absolute top-72 right-1/3 text-blue-400 text-xl opacity-40">♪</div>
        <div className="absolute top-88 left-16 text-yellow-400 text-2xl opacity-50">♫</div>
        <div className="absolute bottom-36 right-24 text-red-400 text-xl opacity-40">♪</div>
        <div className="absolute bottom-52 left-1/3 text-blue-400 text-lg opacity-50">♬</div>
        <div className="absolute bottom-68 right-1/4 text-yellow-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-28 right-1/2 text-red-400 text-xl opacity-50">♪</div>
        <div className="absolute bottom-28 left-1/2 text-blue-400 text-xl opacity-40">♬</div>
        <div className="absolute top-44 left-1/5 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute top-60 right-1/5 text-red-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-76 left-2/3 text-blue-400 text-xl opacity-40">♬</div>
        <div className="absolute bottom-44 right-2/3 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-60 left-1/6 text-red-400 text-xl opacity-50">♫</div>
        <div className="absolute top-32 left-3/4 text-blue-400 text-lg opacity-40">♪</div>
        <div className="absolute bottom-32 right-1/6 text-yellow-400 text-2xl opacity-40">♬</div>
        <div className="absolute top-12 left-1/2 text-red-400 text-xl opacity-45">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("team.title")} <span className="text-primary">{t("team.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t("team.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                <p className="text-primary font-semibold">{t("team.cesar.title")}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">{t("team.cesar.specialties.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.cesar.specialties.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t("team.cesar.education.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.cesar.education.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {t("team.cesar.experience.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.cesar.experience.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-accent mb-2">{t("team.cesar.approach.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.cesar.approach.description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sebastián Rey */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/sebastian-rey.jpeg"
                    alt="Sebastián Rey - Instructeur"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Sebastián Rey</h3>
                <p className="text-accent font-semibold">{t("team.sebastian.title")}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">{t("team.sebastian.specialties.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.sebastian.specialties.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {t("team.sebastian.groups.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.sebastian.groups.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">{t("team.sebastian.instruments.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.sebastian.instruments.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {t("team.sebastian.experience.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.sebastian.experience.description")}</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground italic">"{t("team.sebastian.quote")}"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ana Lucia Piedrahita Fernandez */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Music className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ana Lucia Piedrahita Fernandez</h3>
                <p className="text-purple-600 font-semibold">{t("team.analucia.title")}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">{t("team.analucia.specialties.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.analucia.specialties.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t("team.analucia.education.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.analucia.education.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {t("team.analucia.experience.title")}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t("team.analucia.experience.description")}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">{t("team.analucia.approach.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("team.analucia.approach.description")}</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground italic">"{t("team.analucia.quote")}"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-primary">{t("team.recognition.title")}</h3>
            <p className="text-muted-foreground">{t("team.recognition.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
