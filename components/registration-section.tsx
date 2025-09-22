"use client"

import type React from "react"
import { useState } from "react"
import { UserPlusIcon, SendIcon, CheckCircleIcon, XCircleIcon } from "@/components/icons"
import { useLanguage } from "@/contexts/language-context"
import { sendEmail } from "@/lib/email-service"

export function RegistrationSection() {
  const { t } = useLanguage()

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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

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
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      if (!formData.nom.trim() || !formData.email.trim() || !formData.telephone.trim()) {
        throw new Error("Por favor completa todos los campos obligatorios")
      }

      const emailData = {
        campo4: `Nueva inscripcion Academy Son - ${formData.nom.trim()} - ${formData.email.trim()} - ${formData.telephone.trim()} - Edad ${formData.age || "No especificada"} - Nivel ${formData.niveau || "No especificado"} - Curso ${formData.cours || "No especificado"} - Duracion ${formData.duree || "No especificada"} - Horario ${formData.horaire || "No especificado"} - Disponibilidad ${formData.disponibilite.length > 0 ? formData.disponibilite.join(" ") : "No especificada"} - Mensaje ${formData.message || "Ninguno"}`,
      }

      console.log("[v0] Enviando inscripción con campos genéricos")

      const result = await sendEmail(emailData)

      console.log("[v0] Resultado del envío:", result)

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage("¡Tu solicitud de inscripción ha sido enviada exitosamente! Te contactaremos pronto.")
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
        setTimeout(() => {
          setSubmitStatus("idle")
          setSubmitMessage("")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Error al enviar la solicitud. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("[v0] Error en handleSubmit:", error)
      setSubmitStatus("error")
      setSubmitMessage(
        error instanceof Error ? error.message : "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
      )
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
            <UserPlusIcon className="w-12 h-12 text-yellow-400 mr-4" />
            {t("registration.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("registration.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {submitStatus !== "idle" && (
            <div
              className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${
                submitStatus === "success"
                  ? "bg-green-900/50 border-green-500 text-green-100"
                  : "bg-red-900/50 border-red-500 text-red-100"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : (
                <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
              )}
              <p className="font-medium">{submitMessage}</p>
            </div>
          )}

          <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-white font-medium mb-2">
                    {t("registration.name_label")} *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder={t("registration.name_placeholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    {t("registration.email_label")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder={t("registration.email_placeholder")}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="telephone" className="block text-white font-medium mb-2">
                    {t("registration.phone_label")} *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder={t("registration.phone_placeholder")}
                  />
                </div>

                {/* Âge */}
                <div>
                  <label htmlFor="age" className="block text-white font-medium mb-2">
                    {t("registration.age_label")}
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
                    placeholder={t("registration.age_placeholder")}
                  />
                </div>

                {/* Niveau */}
                <div>
                  <label htmlFor="niveau" className="block text-white font-medium mb-2">
                    {t("registration.level_label")} *
                  </label>
                  <select
                    id="niveau"
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">{t("registration.level_placeholder")}</option>
                    <option value="debutant">{t("registration.level_beginner")}</option>
                    <option value="intermediaire">{t("registration.level_intermediate")}</option>
                    <option value="avance">{t("registration.level_advanced")}</option>
                  </select>
                </div>

                {/* Cours */}
                <div>
                  <label htmlFor="cours" className="block text-white font-medium mb-2">
                    {t("registration.course_label")} *
                  </label>
                  <select
                    id="cours"
                    name="cours"
                    value={formData.cours}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">{t("registration.course_placeholder")}</option>
                    <option value="bajo-electrico">{t("registration.course_bass")}</option>
                    <option value="bateria">{t("registration.course_drums")}</option>
                    <option value="dj">{t("registration.course_dj")}</option>
                    <option value="ensemble-de-groupe">{t("registration.course_ensemble")}</option>
                    <option value="guitare">{t("registration.course_guitar")}</option>
                    <option value="piano-moderne">{t("registration.course_piano")}</option>
                    <option value="production-musicale">{t("registration.course_production")}</option>
                    <option value="xilofono">{t("registration.course_xylophone")}</option>
                  </select>
                </div>

                {/* Durée souhaitée */}
                <div>
                  <label htmlFor="duree" className="block text-white font-medium mb-2">
                    {t("registration.duration_label")} *
                  </label>
                  <select
                    id="duree"
                    name="duree"
                    value={formData.duree}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                  >
                    <option value="">{t("registration.duration_placeholder")}</option>
                    <option value="30min">{t("registration.duration_30")}</option>
                    <option value="45min">{t("registration.duration_45")}</option>
                    <option value="60min">{t("registration.duration_60")}</option>
                    <option value="90min">{t("registration.duration_90")}</option>
                  </select>
                </div>
              </div>

              {/* Horaire préféré */}
              <div>
                <label htmlFor="horaire" className="block text-white font-medium mb-2">
                  {t("registration.schedule_label")}
                </label>
                <select
                  id="horaire"
                  name="horaire"
                  value={formData.horaire}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                >
                  <option value="">{t("registration.schedule_placeholder")}</option>
                  <option value="matin">{t("registration.schedule_morning")}</option>
                  <option value="apres-midi">{t("registration.schedule_afternoon")}</option>
                  <option value="soir">{t("registration.schedule_evening")}</option>
                  <option value="weekend">{t("registration.schedule_weekend")}</option>
                  <option value="flexible">{t("registration.schedule_flexible")}</option>
                </select>
              </div>

              {/* Disponibilité dans la semaine */}
              <div>
                <label className="block text-white font-medium mb-4">{t("registration.availability_label")}</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "lundi", label: t("registration.day_monday") },
                    { value: "mardi", label: t("registration.day_tuesday") },
                    { value: "mercredi", label: t("registration.day_wednesday") },
                    { value: "jeudi", label: t("registration.day_thursday") },
                    { value: "vendredi", label: t("registration.day_friday") },
                    { value: "samedi", label: t("registration.day_saturday") },
                    { value: "dimanche", label: t("registration.day_sunday") },
                    { value: "flexible", label: t("registration.day_flexible") },
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
                  {t("registration.message_label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-vertical"
                  placeholder={t("registration.message_placeholder")}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold text-lg rounded-lg hover:from-yellow-300 hover:to-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  <SendIcon className="w-5 h-5 mr-2" />
                  {isSubmitting ? t("registration.submitting") : t("registration.submit_button")}
                </button>
              </div>
            </form>

            {/* Info supplémentaire */}
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">{t("registration.next_steps")}</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">1.</span>
                  {t("registration.step1")}
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">2.</span>
                  {t("registration.step2")}
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">3.</span>
                  {t("registration.step3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
