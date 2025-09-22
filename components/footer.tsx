"use client"

import { Music, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">SON</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">{t("footer.navigation")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.team")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">{t("footer.instruments")}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{t("footer.guitar")}</li>
              <li className="text-muted-foreground">{t("footer.bass")}</li>
              <li className="text-muted-foreground">{t("footer.piano")}</li>
              <li className="text-muted-foreground">{t("footer.drums")}</li>
              <li className="text-muted-foreground">{t("footer.latin_percussion")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.created_with_passion")}</p>
          <div className="mt-2">
            <Link
              href="/setup"
              className="inline-flex items-center text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <Settings className="w-3 h-3 mr-1" />
              Configuración
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
