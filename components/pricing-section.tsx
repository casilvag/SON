export function PricingSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 text-yellow-400 text-2xl opacity-40 rotate-12">♪</div>
        <div className="absolute top-36 right-24 text-blue-400 text-xl opacity-45 -rotate-12">♫</div>
        <div className="absolute top-52 left-1/3 text-red-400 text-lg opacity-40 rotate-45">♪</div>
        <div className="absolute bottom-36 right-20 text-yellow-400 text-xl opacity-45 -rotate-45">♫</div>
        <div className="absolute bottom-52 left-20 text-blue-400 text-2xl opacity-40 rotate-12">♪</div>
        <div className="absolute top-28 right-1/4 text-red-400 text-lg opacity-45 -rotate-12">♫</div>
        <div className="absolute bottom-20 left-2/5 text-yellow-400 text-xl opacity-40 rotate-45">♪</div>
        <div className="absolute top-44 left-3/4 text-blue-400 text-lg opacity-45 -rotate-45">♫</div>
        <div className="absolute bottom-28 right-1/3 text-red-400 text-2xl opacity-40 rotate-12">♪</div>
        <div className="absolute top-60 right-1/2 text-yellow-400 text-lg opacity-45 -rotate-12">♫</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos <span className="text-yellow-400">Tarifs</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Plans flexibles adaptés à vos besoins musicaux</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Individual Classes */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Cours Individuels</h3>
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-yellow-400">$40</span>
                  <span className="text-gray-400 ml-2">/ heure</span>
                </div>
                <p className="text-gray-300">Attention personnalisée en tête-à-tête</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Piano moderne, guitare, chant, DJ, production
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Durée: 30min, 45min ou 1 heure
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Horaire flexible
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Progrès personnalisé
                </div>
              </div>
            </div>
          </div>

          {/* Group Classes */}
          <div className="bg-gradient-to-br from-blue-900/50 to-gray-800 rounded-2xl p-8 border border-blue-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Cours de Groupe</h3>
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-blue-400">$25</span>
                  <span className="text-gray-400 ml-2">/ séance</span>
                </div>
                <p className="text-gray-300">Apprenez en groupe et partagez des expériences</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cours d'ensemble musical
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Rotation entre instruments
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Présentations tous les 6 mois
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Environnement collaboratif
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Duration Options */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Options de Durée</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-sm">30</span>
              </div>
              <h4 className="text-white font-semibold mb-2">30 Minutes</h4>
              <p className="text-gray-400 text-sm">Idéal pour débutants</p>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-sm">45</span>
              </div>
              <h4 className="text-white font-semibold mb-2">45 Minutes</h4>
              <p className="text-gray-400 text-sm">Équilibre parfait</p>
            </div>
            <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-sm">60</span>
              </div>
              <h4 className="text-white font-semibold mb-2">1 Heure</h4>
              <p className="text-gray-400 text-sm">Utilisation maximale</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Prêt à commencer votre voyage musical?</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
            Inscrivez-vous Maintenant
          </button>
        </div>
      </div>
    </section>
  )
}
