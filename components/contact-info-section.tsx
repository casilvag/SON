"use client"

import type React from "react"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { sendContactEmail } from "@/lib/email-service"
import { useEmailForm, emailValidations } from "@/hooks/use-email-form"
import { FormStatusAlert } from "@/components/ui/form-status-alert"

export function ContactInfoSection() {
  const { t } = useLanguage()
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  })

  const { isSubmitting, status, message, handleSubmit } = useEmailForm({
    onSuccess: () => {
      setFormData({ nom: "", email: "", telephone: "", message: "" })
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await handleSubmit(formData, sendContactEmail, (data) => {
      const requiredError = emailValidations.required(data, ["nom", "email", "telephone"])
      if (requiredError) return requiredError

      const emailError = emailValidations.email(data.email)
      if (emailError) return emailError

      const phoneError = emailValidations.phone(data.telephone)
      if (phoneError) return phoneError

      return null
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-yellow-400 text-2xl opacity-40 rotate-12">♪</div>
        <div className="absolute top-32 right-20 text-blue-400 text-xl opacity-45 -rotate-12">♫</div>
        <div className="absolute top-48 left-1/4 text-red-400 text-lg opacity-40 rotate-45">♪</div>
        <div className="absolute bottom-32 right-16 text-yellow-400 text-xl opacity-45 -rotate-45">♫</div>
        <div className="absolute bottom-48 left-16 text-blue-400 text-2xl opacity-40 rotate-12">♪</div>
        <div className="absolute top-24 right-1/3 text-red-400 text-lg opacity-45 -rotate-12">♫</div>
        <div className="absolute bottom-16 left-1/3 text-yellow-400 text-xl opacity-40 rotate-45">♪</div>
        <div className="absolute top-40 left-2/3 text-blue-400 text-lg opacity-45 -rotate-45">♫</div>
        <div className="absolute bottom-24 right-1/4 text-red-400 text-2xl opacity-40 rotate-12">♪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Informations de <span className="text-yellow-400">Contact</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Contactez-nous pour plus d'informations sur nos cours et services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Phone */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
            <p className="text-gray-300 text-lg font-medium">418-802-0383</p>
            <p className="text-gray-400 text-sm mt-2">Lundi à Vendredi: 9h00 - 20h00</p>
          </div>

          {/* Email */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-lg font-medium">casilvag10@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Réponse sous 24h</p>
          </div>

          {/* Address */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
            <p className="text-gray-300 text-lg font-medium">125 25e rue</p>
            <p className="text-gray-400 text-sm mt-2">Québec, Canada</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-red-400 text-black px-6 py-3 rounded-lg font-medium hover:from-yellow-300 hover:to-red-300 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              <span>{showContactForm ? "Masquer le formulaire" : "Envoyer un message"}</span>
            </button>
          </div>

          {showContactForm && (
            <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Contactez-nous directement</h3>

              <FormStatusAlert status={status} message={message} />

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

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
                    placeholder="418-XXX-XXXX"
                  />
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
                    placeholder="Votre message..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold text-lg rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gray-900/30 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800 mb-8">
            <h4 className="text-xl font-semibold text-white mb-3">Heures d'Ouverture</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-medium text-yellow-400">Lundi - Vendredi</p>
                <p>9h00 - 20h00</p>
              </div>
              <div>
                <p className="font-medium text-yellow-400">Samedi</p>
                <p>10h00 - 18h00</p>
              </div>
            </div>
          </div>

          {/* Social Media Section with Construction Notice */}
          <div className="bg-gray-900/30 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex justify-center space-x-6 mb-4">
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057 1.645.069 4.849.069 3.204 0 3.667-.014 4.947-.072 4.358-.2 6.78 2.618 6.98 6.98.059 1.281.073 1.689.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.149 3.227 1.664 4.771 4.919 4.919 1.266.057 1.69.073 4.949.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </button>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
              <p className="text-yellow-400 text-sm font-medium">🚧 En construction</p>
              <p className="text-gray-300 text-xs mt-1">Nos liens de réseaux sociaux seront bientôt disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
