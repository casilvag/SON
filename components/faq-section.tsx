"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, MessageCircle, Send, CheckCircle, XCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { sendConsultationEmail } from "@/lib/email-service"

const faqs = [
  {
    question: "Quels sont les prérequis pour commencer les cours?",
    answer:
      "Aucun prérequis n'est nécessaire! Nos cours s'adaptent à tous les niveaux, du débutant complet au musicien expérimenté. Nos professeurs trilingues évaluent votre niveau lors de la première séance pour personnaliser l'enseignement.",
  },
  {
    question: "Combien de temps faut-il pour voir des progrès?",
    answer:
      "Les premiers progrès sont généralement visibles dès les 2-3 premières semaines. Cependant, cela dépend de votre pratique personnelle et de la fréquence des cours. Nos étudiants rapportent des améliorations significatives après 2-3 mois de cours réguliers.",
  },
  {
    question: "Puis-je changer d'instrument ou de cours en cours de route?",
    answer:
      "Absolument! Nous encourageons l'exploration musicale. Vous pouvez changer d'instrument ou ajouter des cours supplémentaires à tout moment. Nos forfaits flexibles s'adaptent à vos besoins évolutifs.",
  },
  {
    question: "Comment fonctionnent les cours d'ensamble grupal?",
    answer:
      "Les cours d'ensamble permettent de jouer avec d'autres musiciens en rotation d'instruments. Chaque session coûte 25$ et culmine avec des présentations formelles tous les 6 mois. C'est une excellente façon d'apprendre la collaboration musicale!",
  },
  {
    question: "Quels équipements sont fournis par l'académie?",
    answer:
      "Nous fournissons tous les instruments et équipements professionnels nécessaires pendant les cours. Pour la production musicale et le DJ, nous avons des studios entièrement équipés avec du matériel de pointe.",
  },
  {
    question: "Proposez-vous des cours en ligne?",
    answer:
      "Actuellement, nous nous concentrons sur les cours en présentiel pour offrir la meilleure expérience d'apprentissage. Cependant, nous développons des options hybrides pour certains cours théoriques.",
  },
  {
    question: "Comment puis-je annuler ou reporter un cours?",
    answer:
      "Vous pouvez annuler ou reporter un cours jusqu'à 24h à l'avance sans frais. Pour les politiques détaillées, consultez notre document de politiques disponible en téléchargement sur le site.",
  },
  {
    question: "Y a-t-il des spectacles ou des événements pour les étudiants?",
    answer:
      "Oui! Nous organisons des présentations semestrielles pour les cours d'ensamble, des récitals pour les étudiants individuels, et des événements communautaires réguliers pour célébrer les progrès de nos musiciens.",
  },
]

export function FAQSection() {
  const { t } = useLanguage()

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showFAQs, setShowFAQs] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const faqsTranslated = [
    {
      question: t("faq.q1.question"),
      answer: t("faq.q1.answer"),
    },
    {
      question: t("faq.q2.question"),
      answer: t("faq.q2.answer"),
    },
    {
      question: t("faq.q3.question"),
      answer: t("faq.q3.answer"),
    },
    {
      question: t("faq.q4.question"),
      answer: t("faq.q4.answer"),
    },
    {
      question: t("faq.q5.question"),
      answer: t("faq.q5.answer"),
    },
    {
      question: t("faq.q6.question"),
      answer: t("faq.q6.answer"),
    },
    {
      question: t("faq.q7.question"),
      answer: t("faq.q7.answer"),
    },
    {
      question: t("faq.q8.question"),
      answer: t("faq.q8.answer"),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleFAQSection = () => {
    setShowFAQs(!showFAQs)
    if (!showFAQs) {
      setOpenFAQ(null)
    }
  }

  const toggleConsultationSection = () => {
    setShowConsultation(!showConsultation)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      console.log("[v0] Enviando consulta con EmailJS:", formData)

      const result = await sendConsultationEmail(formData)

      console.log("[v0] Resultado de consulta:", result)

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage("¡Tu consulta ha sido enviada exitosamente! Te contactaremos pronto.")
        setFormData({ name: "", email: "", phone: "", course: "", message: "" })
        setTimeout(() => {
          setSubmitStatus("idle")
          setSubmitMessage("")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Error al enviar la consulta. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.log("[v0] Error en consulta:", error)
      setSubmitStatus("error")
      setSubmitMessage("Error de conexión. Verifica tu internet e inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-yellow-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-40 right-24 text-blue-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-60 left-1/3 text-red-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-80 right-1/4 text-yellow-400 opacity-40 text-xl">♫</div>
        <div className="absolute bottom-40 left-20 text-blue-400 opacity-40 text-2xl">♪</div>
        <div className="absolute bottom-60 right-16 text-red-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-32 left-2/3 text-yellow-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-32 left-1/2 text-blue-400 opacity-40 text-2xl">♫</div>
        <div className="absolute top-52 right-12 text-red-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-52 right-1/3 text-yellow-400 opacity-40 text-2xl">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("faq.title")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("faq.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <MessageCircle className="w-8 h-8 text-yellow-400 mr-3" />
                FAQ
              </h3>
              <button
                onClick={toggleFAQSection}
                className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300"
              >
                <span>{showFAQs ? t("faq.hide") : t("faq.show")}</span>
                {showFAQs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${showFAQs ? "opacity-100 max-h-none" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              <div className="space-y-4">
                {faqsTranslated.map((faq, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-300"
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Send className="w-8 h-8 text-blue-400 mr-3" />
                {t("faq.consultation.title")}
              </h3>
              <button
                onClick={toggleConsultationSection}
                className="flex items-center space-x-2 bg-blue-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-blue-300 transition-colors duration-300"
              >
                <span>{showConsultation ? t("faq.consultation.hide") : t("faq.consultation.show")}</span>
                {showConsultation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${showConsultation ? "opacity-100 max-h-none" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <p className="text-gray-300 mb-6">{t("faq.consultation.description")}</p>

                {submitStatus !== "idle" && (
                  <div
                    className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-900/50 border-green-500 text-green-100"
                        : "bg-red-900/50 border-red-500 text-red-100"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    )}
                    <p className="font-medium">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      {t("faq.consultation.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder={t("faq.consultation.name_placeholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      {t("faq.consultation.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder={t("faq.consultation.email_placeholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      {t("faq.consultation.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder={t("faq.consultation.phone_placeholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-white font-medium mb-2">
                      {t("faq.consultation.course")}
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    >
                      <option value="">{t("faq.consultation.course_placeholder")}</option>
                      <option value="piano-moderne">{t("faq.consultation.course_piano")}</option>
                      <option value="guitare">{t("faq.consultation.course_guitar")}</option>
                      <option value="chant">{t("faq.consultation.course_voice")}</option>
                      <option value="dj">{t("faq.consultation.course_dj")}</option>
                      <option value="production-musicale">{t("faq.consultation.course_production")}</option>
                      <option value="ensemble-de-groupe">{t("faq.consultation.course_ensemble")}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      {t("faq.consultation.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-vertical"
                      placeholder={t("faq.consultation.message_placeholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("faq.consultation.submitting") : t("faq.consultation.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
