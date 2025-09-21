"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, ChevronLeft, ChevronRight, Music } from "lucide-react"

export function ScheduleSection() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedProfessor, setSelectedProfessor] = useState("tous")

  const professors = [
    {
      id: "maria",
      name: "María González",
      specialties: ["Piano Moderne", "Guitare", "Chant"],
      color: "bg-yellow-400",
      textColor: "text-yellow-400",
    },
    {
      id: "carlos",
      name: "Carlos Dubois",
      specialties: ["Basse Électrique", "Batterie", "Xylophone"],
      color: "bg-blue-400",
      textColor: "text-blue-400",
    },
  ]

  const occupiedClasses = {
    "2025-01-15": [
      { time: "15:00", professor: "maria", course: "Piano Moderne", type: "Individuel" },
      { time: "16:00", professor: "carlos", course: "Basse Électrique", type: "Individuel" },
      { time: "17:00", professor: "maria", course: "Guitare", type: "Groupe" },
    ],
    "2025-01-16": [
      { time: "15:30", professor: "carlos", course: "Batterie", type: "Individuel" },
      { time: "18:00", professor: "maria", course: "Chant", type: "Groupe" },
    ],
    "2025-01-17": [
      { time: "16:00", professor: "carlos", course: "Xylophone", type: "Individuel" },
      { time: "19:00", professor: "maria", course: "Piano Moderne", type: "Individuel" },
    ],
  }

  const availableTimeSlots = [
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ]

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const formatDateKey = (date) => {
    return date.toISOString().split("T")[0]
  }

  const isAvailableDay = (date) => {
    if (!date) return false
    const dayOfWeek = date.getDay()
    // Tuesday (2), Wednesday (3), Thursday (4)
    return dayOfWeek >= 2 && dayOfWeek <= 4
  }

  const getClassesForDate = (date) => {
    if (!date) return []
    const dateKey = formatDateKey(date)
    return occupiedClasses[dateKey] || []
  }

  const hasClasses = (date) => {
    return getClassesForDate(date).length > 0
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
        <div className="absolute top-60 right-1/2 text-green-400 text-xl opacity-45 -rotate-12">♪</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calendrier des <span className="text-yellow-400">Cours</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Consultez notre calendrier interactif pour voir les disponibilités et les cours en cours
          </p>
        </div>

        <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800 mb-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={() => navigateMonth(-1)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <h2 className="text-2xl font-bold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>

            <Button
              variant="outline"
              onClick={() => navigateMonth(1)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="p-3 text-center font-semibold text-gray-400">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {getDaysInMonth().map((date, index) => {
              if (!date) {
                return <div key={index} className="p-3"></div>
              }

              const isAvailable = isAvailableDay(date)
              const classes = getClassesForDate(date)
              const isToday = date.toDateString() === new Date().toDateString()
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()

              return (
                <div
                  key={date.toDateString()}
                  onClick={() => isAvailable && setSelectedDate(date)}
                  className={`p-3 rounded-lg text-center cursor-pointer transition-all min-h-[60px] flex flex-col justify-center ${
                    isSelected
                      ? "bg-yellow-400 text-black"
                      : isToday
                        ? "bg-gray-700 text-white border-2 border-yellow-400"
                        : isAvailable
                          ? classes.length > 0
                            ? "bg-red-900/50 text-red-300 hover:bg-red-800/50"
                            : "bg-green-900/50 text-green-300 hover:bg-green-800/50"
                          : "bg-gray-800/30 text-gray-500"
                  }`}
                >
                  <div className="font-semibold">{date.getDate()}</div>
                  {isAvailable && (
                    <div className="text-xs mt-1">
                      {classes.length > 0 ? (
                        <div className="flex items-center justify-center">
                          <Music className="w-3 h-3 mr-1" />
                          {classes.length}
                        </div>
                      ) : (
                        "Libre"
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {selectedDate && (
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              {selectedDate.toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>

            <div className="grid gap-4">
              <h4 className="text-lg font-semibold text-yellow-400">Horaires (15h00 - 21h00)</h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableTimeSlots.map((time) => {
                  const occupiedClass = getClassesForDate(selectedDate).find((c) => c.time === time)

                  return (
                    <div
                      key={time}
                      className={`p-4 rounded-lg border transition-all ${
                        occupiedClass
                          ? "bg-red-900/30 border-red-700"
                          : "bg-green-900/30 border-green-700 hover:bg-green-800/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="font-medium text-white">{time}</span>
                        </div>

                        {occupiedClass ? (
                          <div className="text-right">
                            <div className="text-red-300 text-sm font-medium">Occupé</div>
                            <div className="text-xs text-gray-400">
                              {occupiedClass.course} ({occupiedClass.type})
                            </div>
                            <div className="text-xs text-gray-500">
                              Prof. {professors.find((p) => p.id === occupiedClass.professor)?.name.split(" ")[0]}
                            </div>
                          </div>
                        ) : (
                          <div className="text-green-300 text-sm font-medium">Disponible</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-green-900/50 rounded-full mr-3"></div>
            <div className="text-white text-sm">Jours disponibles</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-red-900/50 rounded-full mr-3"></div>
            <div className="text-white text-sm">Cours en cours</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-gray-800/30 rounded-full mr-3"></div>
            <div className="text-white text-sm">Non disponible</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
            <div className="text-white text-sm">Jour sélectionné</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {professors.map((prof) => (
            <Card key={prof.id} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${prof.color} rounded-full flex items-center justify-center mr-4`}>
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{prof.name}</h4>
                    <p className="text-gray-400 text-sm">Professeur de musique</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-2">Spécialités:</p>
                  <div className="flex flex-wrap gap-2">
                    {prof.specialties.map((specialty) => (
                      <span key={specialty} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professor Filter */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Filtrer par Professeur</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedProfessor === "tous" ? "default" : "outline"}
              onClick={() => setSelectedProfessor("tous")}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              Tous les Professeurs
            </Button>
            {professors.map((prof) => (
              <Button
                key={prof.id}
                variant={selectedProfessor === prof.id ? "default" : "outline"}
                onClick={() => setSelectedProfessor(prof.id)}
                className={`${selectedProfessor === prof.id ? prof.color + " text-black hover:opacity-90" : "border-gray-600 text-gray-300 hover:bg-gray-700"}`}
              >
                {prof.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Professor Cards */}
        {selectedProfessor !== "tous" && (
          <div className="mb-8">
            {professors
              .filter((p) => p.id === selectedProfessor)
              .map((prof) => (
                <Card key={prof.id} className="bg-gray-900/50 border-gray-800 max-w-md mx-auto">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${prof.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <User className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{prof.name}</h4>
                    <p className="text-gray-300 text-sm">Spécialités: {prof.specialties.join(", ")}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Schedule Grid */}
        <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800 overflow-x-auto mb-8">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="p-3 text-center font-semibold text-gray-400">Heure</div>
              {dayNames.map((day) => (
                <div key={day} className="p-3 text-center font-semibold text-white bg-gray-800 rounded-lg">
                  {day}
                </div>
              ))}
            </div>

            {availableTimeSlots.map((time) => (
              <div key={time} className="grid grid-cols-7 gap-2 mb-2">
                <div className="p-3 text-center font-medium text-gray-300 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {time}
                </div>
                {dayNames.map((day, index) => {
                  const date = getDaysInMonth()[index]
                  const isAvailable = isAvailableDay(date)
                  const classes = getClassesForDate(date)
                  const occupiedClass = classes.find((c) => c.time === time)

                  return (
                    <div
                      key={`${date}-${time}`}
                      className={`p-3 rounded-lg text-center text-sm transition-all ${
                        occupiedClass
                          ? "bg-red-900/50 text-red-300 hover:scale-105 cursor-pointer"
                          : isAvailable
                            ? "bg-green-900/50 text-green-300 hover:scale-105 cursor-pointer"
                            : "bg-gray-800/30 text-gray-500"
                      }`}
                    >
                      {occupiedClass ? (
                        <div>
                          <div className="font-semibold">{occupiedClass.professor}</div>
                          <div className="text-xs opacity-80">Occupé</div>
                        </div>
                      ) : (
                        <div className="text-xs">Disponible</div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-3">Vous voulez réserver un cours?</h4>
            <p className="text-gray-300 mb-4">Contactez-nous pour réserver votre horaire préféré</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <a href="tel:4188020383" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Appeler: 418-802-0383
                </a>
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                <a href="/#inscription" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Formulaire d'Inscription
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
