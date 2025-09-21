"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  return (
    <section id="apropos" className="pt-20 pb-8 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-yellow-400 text-2xl opacity-50">♪</div>
        <div className="absolute top-32 right-20 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute top-48 left-1/4 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute top-64 right-1/3 text-yellow-400 text-xl opacity-40">♬</div>
        <div className="absolute top-80 left-16 text-blue-400 text-2xl opacity-50">♫</div>
        <div className="absolute bottom-32 right-16 text-red-400 text-xl opacity-40">♪</div>
        <div className="absolute bottom-48 left-1/3 text-yellow-400 text-lg opacity-45">♬</div>
        <div className="absolute bottom-64 right-1/4 text-blue-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-20 right-1/2 text-red-400 text-xl opacity-50">♪</div>
        <div className="absolute bottom-20 left-1/2 text-yellow-400 text-2xl opacity-40">♬</div>
        <div className="absolute top-40 left-1/5 text-blue-400 text-lg opacity-45">♪</div>
        <div className="absolute top-56 right-1/5 text-red-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-72 left-2/3 text-yellow-400 text-xl opacity-50">♬</div>
        <div className="absolute bottom-40 right-2/3 text-blue-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-56 left-1/6 text-red-400 text-xl opacity-40">♫</div>
        <div className="absolute top-28 left-3/4 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-28 right-1/6 text-blue-400 text-2xl opacity-50">♬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("about.title")} <span className="text-primary">Son</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t("about.description")}</p>

          <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="mt-6 gap-2">
            {isExpanded ? t("about.reduce_details") : t("about.learn_more")}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[1000px] opacity-100 mb-16" : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("about.objective.title")}</h3>
                <p className="text-muted-foreground">{t("about.objective.description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h3>
                <p className="text-muted-foreground">{t("about.mission.description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("about.vision.title")}</h3>
                <p className="text-muted-foreground">{t("about.vision.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
