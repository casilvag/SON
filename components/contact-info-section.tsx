export function ContactInfoSection() {
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
            <p className="text-gray-300 text-lg font-medium">418-802-0383</p>
            <p className="text-gray-400 text-sm mt-2">Lundi à Vendredi: 9h00 - 20h00</p>
          </div>

          {/* Email */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-lg font-medium">casilvag10@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Réponse sous 24h</p>
          </div>

          {/* Address */}
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
            <p className="text-gray-300 text-lg font-medium">125 25e rue</p>
            <p className="text-gray-400 text-sm mt-2">Québec, Canada</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/30 rounded-lg p-6 max-w-2xl mx-auto border border-gray-800">
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
        </div>
      </div>
    </section>
  )
}
