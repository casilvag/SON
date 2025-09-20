"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Upload, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "", // Changed from instruments array to single instrument string
    musicStyle: "",
    lessonType: "",
    level: "",
    ageGroup: "",
    schedule: "",
    postalCode: "",
    message: "",
    contactMethod: "",
    file: null as File | null,
    consent: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleInputChange("file", file)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Merci pour votre inscription !</h3>
                <p className="text-muted-foreground text-lg">
                  Notre équipe vous contactera sous peu pour organiser votre première leçon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">🎵 Inscrivez-vous</span> aux Cours de Musique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Remplissez ce formulaire pour vous inscrire aux cours de musique ou demander plus d'informations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Informations de Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        125 25e rue
                        <br />
                        Québec, QC G1R 2L3
                        <br />
                        Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <p className="text-muted-foreground">(418) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">casilvag10@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Heures d'Ouverture</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi: 9h00 - 21h00</p>
                        <p>Samedi: 9h00 - 17h00</p>
                        <p>Dimanche: 10h00 - 16h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    YouTube
                  </Button>
                  <Button variant="outline" size="sm">
                    TikTok
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Formulaire d'Inscription</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Nom Complet *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Adresse Email *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Numéro de Téléphone</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(418) 123-4567"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Code Postal / Quartier</Label>
                    <Input
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      placeholder="G1R 2L3"
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-3">Instrument *</Label>
                  <Select onValueChange={(value) => handleInputChange("instrument", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un instrument" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guitare">Guitare</SelectItem>
                      <SelectItem value="basse">Basse</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="batterie">Batterie</SelectItem>
                      <SelectItem value="congas">Congas</SelectItem>
                      <SelectItem value="djembe">Djembé</SelectItem>
                      <SelectItem value="percussions-latines">Percussions Latines</SelectItem>
                      <SelectItem value="dj">DJ / Mixage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Music Style and Lesson Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Style Musical / Genre Préféré</Label>
                    <Select onValueChange={(value) => handleInputChange("musicStyle", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classique">Classique</SelectItem>
                        <SelectItem value="jazz">Jazz</SelectItem>
                        <SelectItem value="pop-rock">Pop/Rock</SelectItem>
                        <SelectItem value="latin">Latin</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Type de Cours / Lieu *</Label>
                    <Select onValueChange={(value) => handleInputChange("lessonType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-personne">En Personne (Studio du Professeur, Québec)</SelectItem>
                        <SelectItem value="en-ligne">En Ligne</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Level and Age Group */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Niveau</Label>
                    <Select onValueChange={(value) => handleInputChange("level", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                        <SelectItem value="avance">Avancé</SelectItem>
                        <SelectItem value="preparatoire">Programme Préparatoire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Groupe d'Âge</Label>
                    <Select onValueChange={(value) => handleInputChange("ageGroup", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez votre groupe d'âge" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enfant">Enfant</SelectItem>
                        <SelectItem value="adolescent">Adolescent</SelectItem>
                        <SelectItem value="adulte">Adulte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Schedule and Contact Method */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium mb-2">Horaire Préféré / Disponibilité</Label>
                    <Input
                      value={formData.schedule}
                      onChange={(e) => handleInputChange("schedule", e.target.value)}
                      placeholder="Ex: Soir, Matin, Fins de semaine"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium mb-2">Méthode de Contact Préférée</Label>
                    <Select onValueChange={(value) => handleInputChange("contactMethod", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez une méthode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="telephone">Téléphone</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label className="block text-sm font-medium mb-2">Commentaires / Informations Supplémentaires</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Parlez-nous de vos objectifs musicaux, questions supplémentaires..."
                    rows={4}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <Label className="block text-sm font-medium mb-2">Téléchargement de Fichier (Optionnel)</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="file"
                      accept="video/*,audio/*"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <Upload className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Partagez une courte vidéo de vous jouant ou des enregistrements de pratique
                  </p>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange("consent", e.target.checked)}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    J'accepte que mes informations soient utilisées pour me contacter concernant les cours de musique et
                    je consens au traitement de mes données personnelles conformément à la politique de confidentialité.
                    *
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
