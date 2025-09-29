"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const CameraIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const Music2Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="8" cy="18" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path d="M12 18V2l7 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const Mic2Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="12" x2="12" y1="19" y2="22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8" x2="16" y1="22" y2="22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

export function GallerySection() {
  const { t } = useLanguage()

  const galleryItems = [
    {
      type: "video",
      title: t("gallery.groupClasses"),
      description: t("gallery.collaborativeLearning"),
      icon: PlayIcon,
      color: "bg-primary/20 text-primary",
    },
    {
      type: "photo",
      title: t("gallery.studentPerformances"),
      description: t("gallery.recitalsShows"),
      icon: Music2Icon,
      color: "bg-accent/20 text-accent",
    },
    {
      type: "video",
      title: t("gallery.recordingStudio"),
      description: t("gallery.behindScenes"),
      icon: Mic2Icon,
      color: "bg-primary/20 text-primary",
    },
    {
      type: "photo",
      title: t("gallery.liveEvents"),
      description: t("gallery.workshopsPerformances"),
      icon: CameraIcon,
      color: "bg-accent/20 text-accent",
    },
  ]

  return (
    <section id="galerie" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-24 text-yellow-400 text-xl opacity-40">♪</div>
        <div className="absolute top-32 right-20 text-red-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-48 left-1/4 text-blue-400 text-lg opacity-40">♬</div>
        <div className="absolute top-64 right-1/3 text-yellow-400 text-xl opacity-50">♪</div>
        <div className="absolute top-80 left-20 text-red-400 text-2xl opacity-40">♫</div>
        <div className="absolute bottom-32 right-16 text-blue-400 text-xl opacity-50">♪</div>
        <div className="absolute bottom-48 left-1/3 text-yellow-400 text-lg opacity-40">♬</div>
        <div className="absolute bottom-64 right-1/4 text-red-400 text-2xl opacity-50">♫</div>
        <div className="absolute top-20 right-1/2 text-blue-400 text-xl opacity-40">♪</div>
        <div className="absolute bottom-20 left-1/2 text-yellow-400 text-lg opacity-50">♬</div>
        <div className="absolute top-36 left-1/5 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute top-52 right-1/5 text-blue-400 text-2xl opacity-40">♫</div>
        <div className="absolute top-68 left-2/3 text-yellow-400 text-xl opacity-50">♬</div>
        <div className="absolute bottom-36 right-2/3 text-red-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-52 left-1/6 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute top-24 left-3/4 text-yellow-400 text-lg opacity-45">♪</div>
        <div className="absolute bottom-24 right-1/6 text-red-400 text-2xl opacity-50">♬</div>
        <div className="absolute top-8 left-1/2 text-blue-400 text-xl opacity-40">♫</div>
        <div className="absolute bottom-8 right-1/2 text-yellow-400 text-lg opacity-45">♪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">{t("gallery.title")}</span> & {t("gallery.media")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t("gallery.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <div
                  className={`w-full h-full ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <item.icon className="w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">{t("gallery.livePerformancesTitle")}</h3>
            <p className="text-muted-foreground mb-4">{t("gallery.livePerformancesDesc")}</p>
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <PlayIcon className="w-16 h-16 text-muted-foreground" />
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">{t("gallery.recordingStudioTitle")}</h3>
            <p className="text-muted-foreground mb-4">{t("gallery.recordingStudioDesc")}</p>
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <Mic2Icon className="w-16 h-16 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
