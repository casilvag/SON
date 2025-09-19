"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instrument: "",
    lessonType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Contact</span> & Inscription
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Prêt à commencer votre parcours musical ? Contactez-nous dès aujourd'hui
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
                        123 Rue de la Musique
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
                      <p className="text-muted-foreground">info@academie-son.ca</p>
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom Complet</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Instrument d'Intérêt</label>
                  <Select onValueChange={(value) => handleInputChange("instrument", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un instrument" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guitare">Guitare</SelectItem>
                      <SelectItem value="basse">Basse</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="batterie">Batterie</SelectItem>
                      <SelectItem value="percussions">Percussions Latines</SelectItem>
                      <SelectItem value="production">Production Musicale</SelectItem>
                      <SelectItem value="multiple">Plusieurs Instruments</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Type de Cours Préféré</label>
                  <Select onValueChange={(value) => handleInputChange("lessonType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez le type de cours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-personne">En Personne</SelectItem>
                      <SelectItem value="en-ligne">En Ligne</SelectItem>
                      <SelectItem value="hybride">Hybride</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message (Optionnel)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Parlez-nous de vos objectifs musicaux..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer la Demande d'Inscription
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
