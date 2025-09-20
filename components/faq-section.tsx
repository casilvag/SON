"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, MessageCircle, Send } from "lucide-react"

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
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

    try {
      console.log("[v0] Submitting consultation form:", formData)

      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("[v0] Consultation form submitted successfully:", result)
        alert("Votre demande de consultation a été envoyée avec succès!")
        setFormData({ name: "", email: "", phone: "", course: "", message: "" })
      } else {
        console.error("[v0] Error response from consultation API:", response.status)
        alert("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("[v0] Network error submitting consultation form:", error)
      alert("Une erreur est survenue. Veuillez réessayer.")
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos cours et services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <MessageCircle className="w-8 h-8 text-yellow-400 mr-3" />
              FAQ
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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

          {/* Consultation Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Send className="w-8 h-8 text-blue-400 mr-3" />
              Demande de Consultation
            </h3>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <p className="text-gray-300 mb-6">
                Vous avez des questions spécifiques? Demandez une consultation personnalisée avec nos experts!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-white font-medium mb-2">
                    Cours d'intérêt
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Sélectionnez un cours</option>
                    <option value="piano-moderne">Piano Moderne</option>
                    <option value="guitare">Guitare</option>
                    <option value="chant">Chant</option>
                    <option value="dj">DJ</option>
                    <option value="production-musicale">Production Musicale</option>
                    <option value="ensemble-de-groupe">Ensemble de Groupe</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-vertical"
                    placeholder="Décrivez vos questions ou besoins spécifiques..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
