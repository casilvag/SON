"use client"
import { useState } from "react"

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="6,9 12,15 18,9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="18,15 12,9 6,15" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
)

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)

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
  const [showFAQs, setShowFAQs] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleFAQSection = () => {
    setShowFAQs(!showFAQs)
    if (!showFAQs) {
      setOpenFAQ(null) // Close any open FAQ when hiding section
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

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <MessageCircleIcon className="w-8 h-8 text-yellow-400 mr-3" />
              FAQ
            </h3>
            <button
              onClick={toggleFAQSection}
              className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300"
            >
              <span>{showFAQs ? "Masquer les FAQ" : "Voir les FAQ"}</span>
              {showFAQs ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            </button>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${showFAQs ? "opacity-100 max-h-none" : "opacity-0 max-h-0 overflow-hidden"}`}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
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
      </div>
    </section>
  )
}
