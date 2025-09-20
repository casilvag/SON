"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dubois",
    age: 28,
    course: "Piano Moderne",
    text: "L'approche moderne du piano m'a permis de jouer mes chansons préférées en quelques mois seulement. Les professeurs sont exceptionnels!",
    rating: 5,
    avatar: "MD",
  },
  {
    name: "Carlos Rodriguez",
    age: 35,
    course: "Guitare",
    text: "Après des années à essayer d'apprendre seul, j'ai enfin trouvé la méthode qui me convient. L'ambiance est fantastique!",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Aisha Patel",
    age: 22,
    course: "Chant",
    text: "Ma confiance en moi a complètement changé grâce aux cours de chant. Je recommande vivement cette académie!",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Jean-Luc Martin",
    age: 45,
    course: "DJ",
    text: "À 45 ans, j'ai découvert ma passion pour le DJing. Les cours sont adaptés à tous les âges et niveaux.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sofia Chen",
    age: 19,
    course: "Production Musicale",
    text: "J'ai appris à créer mes propres beats et à produire ma musique. Le matériel professionnel est un vrai plus!",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Ahmed Hassan",
    age: 31,
    course: "Ensamble Grupal",
    text: "L'expérience d'ensamble est incroyable! Jouer avec d'autres musiciens m'a fait progresser rapidement.",
    rating: 5,
    avatar: "AH",
  },
  {
    name: "Emma Thompson",
    age: 26,
    course: "Piano Moderne",
    text: "Les professeurs trilingues sont un atout énorme. Je peux apprendre dans ma langue maternelle!",
    rating: 5,
    avatar: "ET",
  },
  {
    name: "Luis Gonzalez",
    age: 38,
    course: "Guitare",
    text: "L'atmosphère détendue et professionnelle à la fois rend l'apprentissage très agréable. Merci à toute l'équipe!",
    rating: 5,
    avatar: "LG",
  },
  {
    name: "Fatima Al-Zahra",
    age: 24,
    course: "Chant",
    text: "J'ai découvert ma voix grâce aux techniques enseignées ici. Les progrès sont visibles dès les premières semaines!",
    rating: 5,
    avatar: "FZ",
  },
  {
    name: "David Kim",
    age: 29,
    course: "DJ",
    text: "De débutant complet à DJ confirmé en 6 mois! L'enseignement est vraiment de qualité supérieure.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Isabella Rossi",
    age: 33,
    course: "Production Musicale",
    text: "J'ai enfin pu concrétiser mes idées musicales grâce aux cours de production. Un rêve devenu réalité!",
    rating: 5,
    avatar: "IR",
  },
  {
    name: "Michael O'Connor",
    age: 27,
    course: "Ensamble Grupal",
    text: "Les présentations semestrielles nous motivent à donner le meilleur de nous-mêmes. Une expérience enrichissante!",
    rating: 5,
    avatar: "MO",
  },
  {
    name: "Yuki Tanaka",
    age: 21,
    course: "Piano Moderne",
    text: "L'approche personnalisée de chaque professeur fait toute la différence. Je me sens vraiment accompagnée!",
    rating: 5,
    avatar: "YT",
  },
  {
    name: "Roberto Silva",
    age: 42,
    course: "Guitare",
    text: "Reprendre la musique à 42 ans était un défi, mais l'équipe m'a donné confiance pour persévérer!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Leila Benali",
    age: 30,
    course: "Chant",
    text: "L'académie SON a transformé ma passion en véritable compétence. L'enseignement est exceptionnel!",
    rating: 5,
    avatar: "LB",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage,
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-yellow-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-32 right-20 text-blue-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-48 left-1/4 text-red-400 opacity-40 text-2xl">♪</div>
        <div className="absolute top-64 right-1/3 text-yellow-400 opacity-40 text-xl">♫</div>
        <div className="absolute bottom-32 left-16 text-blue-400 opacity-40 text-2xl">♪</div>
        <div className="absolute bottom-48 right-24 text-red-400 opacity-40 text-xl">♫</div>
        <div className="absolute top-20 left-2/3 text-yellow-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-20 left-1/2 text-blue-400 opacity-40 text-2xl">♫</div>
        <div className="absolute top-40 right-12 text-red-400 opacity-40 text-xl">♪</div>
        <div className="absolute bottom-40 right-1/4 text-yellow-400 opacity-40 text-2xl">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Témoignages</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que nos étudiants pensent de leur expérience à l'Académie SON
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full flex items-center justify-center text-black font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.age} ans • {testimonial.course}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonials}
              className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors duration-300"
              aria-label="Témoignages précédents"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    Math.floor(currentIndex / testimonialsPerPage) === index
                      ? "bg-yellow-400"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Aller à la page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonials}
              className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors duration-300"
              aria-label="Témoignages suivants"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
