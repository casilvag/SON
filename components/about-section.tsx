"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const TargetIcon = () => (
  <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="6,9 12,15 18,9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const ChevronUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="18,15 12,9 6,15" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

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
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
                <HeartIcon />
                <h3 className="text-2xl font-bold mb-4">{t("about.objective.title")}</h3>
                <p className="text-muted-foreground">{t("about.objective.description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <TargetIcon />
                <h3 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h3>
                <p className="text-muted-foreground">{t("about.mission.description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <EyeIcon />
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
