"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path
      d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path d="M2 12h20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline
      points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: GlobeIcon,
      title: t("why_choose.trilingual.title"),
      description: t("why_choose.trilingual.description"),
      color: "text-primary",
    },
    {
      icon: UsersIcon,
      title: t("why_choose.personalized.title"),
      description: t("why_choose.personalized.description"),
      color: "text-accent",
    },
    {
      icon: AwardIcon,
      title: t("why_choose.experienced.title"),
      description: t("why_choose.experienced.description"),
      color: "text-primary",
    },
    {
      icon: ClockIcon,
      title: t("why_choose.flexible.title"),
      description: t("why_choose.flexible.description"),
      color: "text-accent",
    },
    {
      icon: HeartIcon,
      title: t("why_choose.welcoming.title"),
      description: t("why_choose.welcoming.description"),
      color: "text-primary",
    },
    {
      icon: StarIcon,
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
