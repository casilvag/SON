"use client"

import type React from "react"
import { useState } from "react"
import { UserPlus, Send } from "lucide-react"

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    age: "",
    niveau: "",
    cours: "",
    duree: "",
    horaire: "",
    disponibilite: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleAvailabilityChange = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      disponibilite: prev.disponibilite.includes(day)
        ? prev.disponibilite.filter((d) => d !== day)
        : [...prev.disponibilite, day],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("[v0] Submitting registration form:", formData)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: `INSCRIPTION - Nouvelle demande d'inscription:
          
Âge: ${formData.age}
Niveau: ${formData.niveau}
Cours souhaité: ${formData.cours}
Durée souhaitée: ${formData.duree}
Horaire préféré: ${formData.horaire}
Disponibilité: ${formData.disponibilite.length > 0 ? formData.disponibilite.join(", ") : "Non spécifiée"}

Message: ${formData.message}`,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("[v0] Registration form submitted successfully:", result)
        alert("Votre demande d'inscription a été envoyée avec succès! Nous vous contacterons bientôt.")
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          age: "",
          niveau: "",
          cours: "",
          duree: "",
          horaire: "",
          disponibilite: [],
          message: "",
        })
      } else {
        const errorData = await response.json()
        console.error("[v0] Error response from registration API:", response.status, errorData)
        alert(`Une erreur est survenue: ${errorData.message || "Erreur inconnue"}. Veuillez réessayer.`)
      }
    } catch (error) {
      console.error("[v0] Network error submitting registration form:", error)
      alert("Erreur de connexion. Vérifiez votre connexion internet et réessayez.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inscription" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-yellow-400 opacity-30 text-2xl">♪</div>
        <div className="absolute top-40 right-24 text-blue-400 opacity-30 text-xl">♫</div>
        <div className="absolute top-60 left-1/3 text-red-400 opacity-30 text-2xl">♪</div>
        <div className="absolute bottom-40 right-1/4 text-yellow-400 opacity-30 text-xl">♫</div>
        <div className="absolute bottom-60 left-20 text-blue-400 opacity-30 text-2xl">♪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <UserPlus className="w-12 h-12 text-yellow-400 mr-4" />
            Formulaire d'<span className="text-yellow-400">Inscription</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rejoignez Academy SON et commencez votre voyage musical dès aujourd'hui!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-white font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
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

                {/* Téléphone */}
                <div>
                  <label htmlFor="telephone" className="block text-white font-medium mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                {/* Âge */}
                <div>
                  <label htmlFor="age" className="block text-white font-medium mb-2">
                    Âge
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="5"
                    max="99"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="Votre âge"
                  />
                </div>

                {/* Niveau */}
                <div>
                  <label htmlFor="niveau" className="block text-white font-medium mb-2">
                    Niveau musical *
                  </label>
                  <select
                    id="niveau"
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Sélectionnez votre niveau</option>
                    <option value="debutant">Débutant</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="avance">Avancé</option>
                  </select>
                </div>

                {/* Cours */}
                <div>
                  <label htmlFor="cours" className="block text-white font-medium mb-2">
                    Cours souhaité *
                  </label>
                  <select
                    id="cours"
                    name="cours"
                    value={formData.cours}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Sélectionnez un cours</option>
                    <option value="bajo-electrico">Basse Électrique</option>
                    <option value="bateria">Batterie</option>
                    <option value="dj">DJ</option>
                    <option value="ensemble-de-groupe">Ensemble de Groupe</option>
                    <option value="guitare">Guitare</option>
                    <option value="piano-moderne">Piano Moderne</option>
                    <option value="production-musicale">Production Musicale</option>
                    <option value="xilofono">Xylophone</option>
                  </select>
                </div>

                {/* Durée souhaitée */}
                <div>
                  <label htmlFor="duree" className="block text-white font-medium mb-2">
                    Durée souhaitée *
                  </label>
                  <select
                    id="duree"
                    name="duree"
                    value={formData.duree}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Sélectionnez la durée</option>
                    <option value="30min">30 minutes</option>
                    <option value="45min">45 minutes</option>
                    <option value="60min">60 minutes</option>
                    <option value="90min">90 minutes</option>
                  </select>
                </div>
              </div>

              {/* Horaire préféré */}
              <div>
                <label htmlFor="horaire" className="block text-white font-medium mb-2">
                  Horaire préféré
                </label>
                <select
                  id="horaire"
                  name="horaire"
                  value={formData.horaire}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                >
                  <option value="">Sélectionnez un horaire</option>
                  <option value="matin">Matin (9h00 - 12h00)</option>
                  <option value="apres-midi">Après-midi (12h00 - 17h00)</option>
                  <option value="soir">Soir (17h00 - 20h00)</option>
                  <option value="weekend">Weekend</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Disponibilité dans la semaine */}
              <div>
                <label className="block text-white font-medium mb-4">Disponibilité dans la semaine</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "lundi", label: "Lundi" },
                    { value: "mardi", label: "Mardi" },
                    { value: "mercredi", label: "Mercredi" },
                    { value: "jeudi", label: "Jeudi" },
                    { value: "vendredi", label: "Vendredi" },
                    { value: "samedi", label: "Samedi" },
                    { value: "dimanche", label: "Dimanche" },
                    { value: "flexible", label: "Flexible" },
                  ].map((day) => (
                    <label key={day.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.disponibilite.includes(day.value)}
                        onChange={() => handleAvailabilityChange(day.value)}
                        className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">{day.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message ou questions spécifiques
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-vertical"
                  placeholder="Parlez-nous de vos objectifs musicaux, expérience précédente, ou toute question..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold text-lg rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
                </button>
              </div>
            </form>

            {/* Info supplémentaire */}
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Prochaines étapes:</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">1.</span>
                  Nous examinerons votre demande dans les 24h
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">2.</span>
                  Un de nos conseillers vous contactera pour discuter de vos besoins
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">3.</span>
                  Nous planifierons votre première séance d'évaluation gratuite
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
