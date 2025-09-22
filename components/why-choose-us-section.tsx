"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, Clock, Heart, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Globe,
      title: t("why_choose.trilingual.title"),
      description: t("why_choose.trilingual.description"),
      color: "text-primary",
    },
    {
      icon: Users,
      title: t("why_choose.personalized.title"),
      description: t("why_choose.personalized.description"),
      color: "text-accent",
    },
    {
      icon: Award,
      title: t("why_choose.experienced.title"),
      description: t("why_choose.experienced.description"),
      color: "text-primary",
    },
    {
      icon: Clock,
      title: t("why_choose.flexible.title"),
      description: t("why_choose.flexible.description"),
      color: "text-accent",
    },
    {
      icon: Heart,
      title: t("why_choose.welcoming.title"),
      description: t("why_choose.welcoming.description"),
      color: "text-primary",
    },
    {
      icon: Star,
      title: t("why_choose.performances.title"),
      description: t("why_choose.performances.description"),
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("why_choose.title")} <span className="text-primary">{t("why_choose.academy")}</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t("why_choose.subtitle")}</p>
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
      </div>
    </section>
  )
}
