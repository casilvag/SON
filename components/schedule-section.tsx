"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar } from "lucide-react"

export function ScheduleSection() {
  const [selectedProfessor, setSelectedProfessor] = useState("todos")

  const professors = [
    {
      id: "maria",
      name: "María González",
      specialties: ["Piano Moderno", "Canto"],
      color: "bg-yellow-400",
      textColor: "text-yellow-400",
    },
    {
      id: "carlos",
      name: "Carlos Dubois",
      specialties: ["Guitarra", "Bajo"],
      color: "bg-blue-400",
      textColor: "text-blue-400",
    },
    {
      id: "sophie",
      name: "Sophie Martin",
      specialties: ["Percusiones", "DJ"],
      color: "bg-red-400",
      textColor: "text-red-400",
    },
    {
      id: "jean",
      name: "Jean-Pierre Roy",
      specialties: ["Producción Musical", "Ensamble"],
      color: "bg-green-400",
      textColor: "text-green-400",
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  const schedule = {
    maria: {
      Lunes: ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"],
      Martes: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"],
      Miércoles: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
      Jueves: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
      Viernes: ["11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
      Sábado: ["10:00 AM", "12:00 PM", "2:00 PM"],
    },
    carlos: {
      Lunes: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"],
      Martes: ["10:00 AM", "1:00 PM", "4:00 PM", "6:00 PM"],
      Miércoles: ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
      Jueves: ["11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
      Viernes: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
      Sábado: ["11:00 AM", "1:00 PM", "3:00 PM"],
    },
    sophie: {
      Lunes: ["12:00 PM", "1:00 PM", "5:00 PM", "7:00 PM"],
      Martes: ["9:00 AM", "12:00 PM", "2:00 PM", "7:00 PM"],
      Miércoles: ["11:00 AM", "1:00 PM", "3:00 PM", "6:00 PM"],
      Jueves: ["10:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
      Viernes: ["10:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
      Sábado: ["9:00 AM", "11:00 AM", "4:00 PM"],
    },
    jean: {
      Lunes: ["11:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
      Martes: ["10:00 AM", "3:00 PM", "5:00 PM", "8:00 PM"],
      Miércoles: ["9:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
      Jueves: ["12:00 PM", "3:00 PM", "6:00 PM", "8:00 PM"],
      Viernes: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"],
      Sábado: ["12:00 PM", "2:00 PM", "4:00 PM"],
    },
  }

  const getFilteredSchedule = () => {
    if (selectedProfessor === "todos") {
      return schedule
    }
    return { [selectedProfessor]: schedule[selectedProfessor] }
  }

  const getProfessorByTime = (day, time) => {
    for (const prof of professors) {
      if (schedule[prof.id][day]?.includes(time)) {
        return prof
      }
    }
    return null
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
            Horarios de <span className="text-yellow-400">Clases</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Consulta los horarios disponibles de nuestros profesores y encuentra el momento perfecto para tus clases
          </p>
        </div>

        {/* Professor Filter */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Filtrar por Profesor</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedProfessor === "todos" ? "default" : "outline"}
              onClick={() => setSelectedProfessor("todos")}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              Todos los Profesores
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
        {selectedProfessor !== "todos" && (
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
                    <p className="text-gray-300 text-sm">Especialidades: {prof.specialties.join(", ")}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Schedule Grid */}
        <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="p-3 text-center font-semibold text-gray-400">Hora</div>
              {days.map((day) => (
                <div key={day} className="p-3 text-center font-semibold text-white bg-gray-800 rounded-lg">
                  {day}
                </div>
              ))}
            </div>

            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-7 gap-2 mb-2">
                <div className="p-3 text-center font-medium text-gray-300 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {time}
                </div>
                {days.map((day) => {
                  const prof = getProfessorByTime(day, time)
                  const isAvailable =
                    selectedProfessor === "todos" ? prof !== null : schedule[selectedProfessor]?.[day]?.includes(time)

                  return (
                    <div
                      key={`${day}-${time}`}
                      className={`p-3 rounded-lg text-center text-sm transition-all ${
                        isAvailable
                          ? selectedProfessor === "todos"
                            ? `${prof.color} text-black font-medium hover:scale-105 cursor-pointer`
                            : `${professors.find((p) => p.id === selectedProfessor)?.color} text-black font-medium hover:scale-105 cursor-pointer`
                          : "bg-gray-800/30 text-gray-500"
                      }`}
                    >
                      {isAvailable ? (
                        selectedProfessor === "todos" ? (
                          <div>
                            <div className="font-semibold">{prof.name.split(" ")[0]}</div>
                            <div className="text-xs opacity-80">Disponible</div>
                          </div>
                        ) : (
                          <div>
                            <div className="font-semibold">Disponible</div>
                            <div className="text-xs opacity-80">Reservar</div>
                          </div>
                        )
                      ) : (
                        <div className="text-xs">No disponible</div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {professors.map((prof) => (
            <div
              key={prof.id}
              className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800"
            >
              <div className={`w-4 h-4 ${prof.color} rounded-full mr-3`}></div>
              <div>
                <div className="text-white font-medium text-sm">{prof.name}</div>
                <div className="text-gray-400 text-xs">{prof.specialties.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-3">¿Quieres reservar una clase?</h4>
            <p className="text-gray-300 mb-4">Contacta con nosotros para reservar tu horario preferido</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <a href="tel:4188020383" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Llamar: 418-802-0383
                </a>
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                <a href="#contact" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Formulario de Contacto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
