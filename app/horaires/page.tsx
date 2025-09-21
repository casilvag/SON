"use client"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function HorairesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 flex-shrink-0 bg-black rounded-full p-1">
                  <Image
                    src="/images/logo.png"
                    alt="Academy SON Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-primary">SON</div>
                  <div className="text-xs text-muted-foreground font-medium">{t("nav.academy")}</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  {t("nav.back_home")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-4">
        <section className="bg-background border-b border-border py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-foreground">{t("schedule.title")}</h1>
          </div>
        </section>

        <ScheduleSection />
      </div>
      <Footer />
    </div>
  )
}
