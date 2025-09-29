"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

const MusicIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="6" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="18" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="7,10 12,15 17,10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="12" x2="12" y1="15" y2="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="8" y1="13" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="8" y1="17" y2="17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="10,9 9,9 8,9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12,22s8-4 8-10V5l-8-3L4,5v7c0,6 8,10 8,10z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="14" x="2" y="5" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="2" x2="22" y1="10" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect
      width="18"
      height="18"
      x="3"
      y="4"
      rx="2"
      ry="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <line x1="16" x2="16" y1="2" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8" x2="8" y1="2" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="3" x2="21" y1="10" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

export function Footer() {
  const { t } = useLanguage()
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false)

  const policies = [
    {
      title: t("policies.generalPolicies"),
      description: t("policies.generalPoliciesDesc"),
      icon: ShieldIcon,
      filename: "politiques-generales.pdf",
      size: "245 KB",
    },
    {
      title: t("policies.paymentPolicies"),
      description: t("policies.paymentPoliciesDesc"),
      icon: CreditCardIcon,
      filename: "politiques-paiement.pdf",
      size: "189 KB",
    },
    {
      title: t("policies.cancellationPolicies"),
      description: t("policies.cancellationPoliciesDesc"),
      icon: CalendarIcon,
      filename: "politiques-annulation.pdf",
      size: "156 KB",
    },
    {
      title: t("policies.ensemblePolicies"),
      description: t("policies.ensemblePoliciesDesc"),
      icon: UsersIcon,
      filename: "politiques-ensamble.pdf",
      size: "203 KB",
    },
  ]

  const handleDownload = (filename: string) => {
    alert(`${t("policies.downloadStarted")} ${filename} ${t("policies.demoFile")}`)
  }

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MusicIcon />
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

        <div className="border-t border-border mt-8 pt-8">
          <button
            onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
            className="flex items-center justify-between w-full text-left mb-4 hover:text-primary transition-colors"
          >
            <h4 className="font-semibold text-primary">{t("policies.title")}</h4>
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform duration-200 ${isPoliciesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isPoliciesOpen && (
            <div className="space-y-6 animate-in slide-in-from-top-2 duration-200">
              <p className="text-sm text-muted-foreground mb-6">{t("policies.subtitle")}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {policies.map((policy, index) => {
                  const IconComponent = policy.icon
                  return (
                    <div
                      key={index}
                      className="bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      <h5 className="font-semibold text-sm mb-2">{policy.title}</h5>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{policy.description}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <FileTextIcon className="w-3 h-3 mr-1" />
                          PDF
                        </span>
                        <span>{policy.size}</span>
                      </div>

                      <button
                        onClick={() => handleDownload(policy.filename)}
                        className="w-full bg-primary/10 text-primary font-medium py-2 px-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-xs group-hover:scale-105"
                      >
                        <DownloadIcon className="w-4 h-4 mr-1" />
                        Télécharger
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="text-center">
                  <h5 className="font-semibold mb-2">{t("policies.needHelp")}</h5>
                  <p className="text-sm text-muted-foreground mb-4">{t("policies.needHelpDesc")}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:4188020383"
                      className="bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition-all duration-300 text-sm"
                    >
                      {t("policies.call")}: 4188020383
                    </a>
                    <a
                      href="#contact"
                      className="bg-transparent border border-primary text-primary font-medium py-2 px-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
                    >
                      {t("policies.contactUs")}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  {t("policies.lastUpdate")} • {t("policies.availableInFrench")}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footer.created_with_passion")}</p>
        </div>
      </div>
    </footer>
  )
}
