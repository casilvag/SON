"use client"

import { useLanguage } from "@/contexts/language-context"

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

export function PoliciesSection() {
  const { t } = useLanguage()

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
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 text-yellow-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-36 right-20 text-blue-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-56 left-1/4 text-red-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-76 right-1/3 text-yellow-400 opacity-40 text-xl">♫</div>
        <div className="absolute bottom-36 left-20 text-blue-400 opacity-40 text-2xl">♪</div>
        <div className="absolute bottom-56 right-24 text-red-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-28 left-2/3 text-yellow-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-28 left-1/2 text-blue-400 opacity-40 text-2xl">♫</div>
        <div className="absolute top-48 right-12 text-red-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-48 right-1/4 text-yellow-400 opacity-40 text-2xl">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("policies.title")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("policies.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{policy.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FileTextIcon className="w-4 h-4 mr-1" />
                    PDF
                  </span>
                  <span>{policy.size}</span>
                </div>

                <button
                  onClick={() => handleDownload(policy.filename)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Télécharger
                </button>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t("policies.needHelp")}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t("policies.needHelpDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4188020383"
                className="bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300"
              >
                {t("policies.call")}: 4188020383
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                {t("policies.contactUs")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t("policies.lastUpdate")} • {t("policies.availableInFrench")}
          </p>
        </div>
      </div>
    </section>
  )
}
