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
      id: "cesar",
      name: "Cesar Silva",
      specialties: ["Tous les cours"],
      color: "bg-yellow-400",
      textColor: "text-yellow-400",
    },
    {
      id: "sebastian",
      name: "Sebastian Rey",
      specialties: ["Batterie", "Basse"],
      color: "bg-blue-400",
      textColor: "text-blue-400",
    },
  ]

  const generateCesarSchedule = () => {
    const schedule = {}
    const currentYear = new Date().getFullYear()

    // Helper function to generate dates for a range
    const generateDatesForRange = (startDate, endDate, dayOfWeek) => {
      const dates = []
      const current = new Date(startDate)

      // Move to the first occurrence of the desired day of week
      while (current.getDay() !== dayOfWeek) {
        current.setDate(current.getDate() + 1)
      }

      while (current <= endDate) {
        dates.push(new Date(current))
        current.setDate(current.getDate() + 7) // Next week
      }

      return dates
    }

    const yearStart = new Date(currentYear, 0, 1)
    const yearEnd = new Date(currentYear, 11, 31)

    // Generate all weekdays (Monday=1 to Friday=5)
    for (let dayOfWeek = 1; dayOfWeek <= 5; dayOfWeek++) {
      const weekdays = generateDatesForRange(yearStart, yearEnd, dayOfWeek)

      weekdays.forEach((date) => {
        const dateKey = date.toISOString().split("T")[0]
        if (!schedule[dateKey]) {
          schedule[dateKey] = []
        }
      })
    }

    const septemberStart = new Date(currentYear, 8, 1) // September 1st
    const novemberEnd = new Date(currentYear, 10, 30) // November 30th
    const mondays = generateDatesForRange(septemberStart, novemberEnd, 1) // Monday = 1

    mondays.forEach((date) => {
      const dateKey = date.toISOString().split("T")[0]
      schedule[dateKey] = [
        { time: "17:00", professor: "cesar", course: "Guitare", type: "Individuel" },
        { time: "17:30", professor: "cesar", course: "Guitare", type: "Individuel" },
        { time: "18:00", professor: "cesar", course: "Batterie", type: "Individuel" },
        { time: "18:30", professor: "cesar", course: "Batterie", type: "Individuel" },
      ]
    })

    // Tuesday, Wednesday, Thursday from September 3rd to last week of November - Drums 15h-21h
    const septemberThird = new Date(currentYear, 8, 3) // September 3rd
    const novemberEnd2 = new Date(currentYear, 10, 30) // November 30th

    // Generate all Tuesday, Wednesday, Thursday dates
    for (let dayOfWeek = 2; dayOfWeek <= 4; dayOfWeek++) {
      // 2=Tuesday, 3=Wednesday, 4=Thursday
      const dates = generateDatesForRange(septemberThird, novemberEnd2, dayOfWeek)

      dates.forEach((date) => {
        const dateKey = date.toISOString().split("T")[0]
        schedule[dateKey] = [
          { time: "15:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "15:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "16:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "16:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "17:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "17:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "18:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "18:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "19:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "19:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "20:00", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "20:30", professor: "cesar", course: "Batterie", type: "Individuel" },
          { time: "21:00", professor: "cesar", course: "Batterie", type: "Individuel" },
        ]
      })
    }

    // All Saturdays - Group class 13h-16h
    const saturdays = generateDatesForRange(yearStart, yearEnd, 6) // Saturday = 6

    saturdays.forEach((date) => {
      const dateKey = date.toISOString().split("T")[0]
      schedule[dateKey] = [
        { time: "13:00", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "13:30", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "14:00", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "14:30", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "15:00", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "15:30", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
        { time: "16:00", professor: "cesar", course: "Cours Collectif", type: "Groupe" },
      ]
    })

    return schedule
  }

  const occupiedClasses = generateCesarSchedule()

  const availableTimeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ]

  const weekendTimeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ]

  const weekdayTimeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
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

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

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
    // Show Monday-Sunday as available days (1=Monday, 0=Sunday, 6=Saturday)
    return dayOfWeek >= 0 && dayOfWeek <= 6
  }

  const hasAtLeastTwoHoursAvailable = (date) => {
    if (!date) return false

    const dayOfWeek = date.getDay()
    if (dayOfWeek < 0 || dayOfWeek > 6) return false

    const occupiedTimes = getClassesForDate(date).map((c) => c.time)
    const timeSlots = dayOfWeek === 0 || dayOfWeek === 6 ? weekendTimeSlots : weekdayTimeSlots
    const availableTimes = timeSlots.filter((time) => !occupiedTimes.includes(time))

    // Check for at least 2 consecutive hours (4 slots of 30 minutes each)
    let consecutiveCount = 0
    let maxConsecutive = 0

    for (let i = 0; i < timeSlots.length; i++) {
      if (availableTimes.includes(timeSlots[i])) {
        consecutiveCount++
        maxConsecutive = Math.max(maxConsecutive, consecutiveCount)
      } else {
        consecutiveCount = 0
      }
    }

    // 4 slots = 2 hours (each slot is 30 minutes)
    return maxConsecutive >= 4
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

              const classes = getClassesForDate(date)
              const hasClassesToday = classes.length > 0
              const isToday = date.toDateString() === new Date().toDateString()
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
              const isWeekdayAvailable = isAvailableDay(date)
              const hasTwoHoursAvailable = hasAtLeastTwoHoursAvailable(date)

              return (
                <div
                  key={date.toDateString()}
                  onClick={() => isWeekdayAvailable && setSelectedDate(date)}
                  className={`p-3 rounded-lg text-center cursor-pointer transition-all min-h-[60px] flex flex-col justify-center ${
                    isSelected
                      ? "bg-yellow-400 text-black"
                      : isToday
                        ? "bg-gray-700 text-white border-2 border-yellow-400"
                        : hasClassesToday && !hasTwoHoursAvailable
                          ? "bg-red-900/50 text-red-300 hover:bg-red-800/50"
                          : hasTwoHoursAvailable
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : isWeekdayAvailable
                              ? "bg-green-900/50 text-green-300 hover:bg-green-800/50"
                              : "bg-gray-800/30 text-gray-500"
                  }`}
                >
                  <div className="font-semibold">{date.getDate()}</div>
                  {hasClassesToday && (
                    <div className="text-xs mt-1">
                      <div className="flex items-center justify-center">
                        <Music className="w-3 h-3 mr-1 text-red-400" />
                        <span className="text-red-400">{classes.length}</span>
                      </div>
                    </div>
                  )}
                  {!hasClassesToday && isWeekdayAvailable && <div className="text-xs mt-1 text-green-400">Libre</div>}
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
              <h4 className="text-lg font-semibold text-yellow-400">
                Horaires{" "}
                {selectedDate.getDay() === 6
                  ? "(08h00 - 18h00)"
                  : selectedDate.getDay() === 0
                    ? "(08h00 - 18h00)"
                    : "(08h00 - 21h00)"}
              </h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {(selectedDate.getDay() === 0 || selectedDate.getDay() === 6 ? weekendTimeSlots : weekdayTimeSlots).map(
                  (time) => {
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
                  },
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
            <div className="text-white text-sm">2+ heures disponibles</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-green-900/50 rounded-full mr-3"></div>
            <div className="text-white text-sm">Horaires disponibles</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-red-900/50 rounded-full mr-3"></div>
            <div className="text-white text-sm">Cours en cours</div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-4 h-4 bg-gray-800/30 rounded-full mr-3"></div>
            <div className="text-white text-sm">Non disponible</div>
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
                className={`${selectedProfessor === prof.id ? prof.color + " text-black hover:opacity-90" : "border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"}`}
              >
                {prof.name}
              </Button>
            ))}
          </div>
        </div>

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
