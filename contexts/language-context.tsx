"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.courses": "Cours",
    "nav.schedule": "Horaires",
    "nav.back_home": "Retour à l'accueil",
    "nav.inscription": "S'inscrire",
    "nav.academy": "Académie de Musique",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.team": "Équipe",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "SON Académie de Musique",
    "hero.subtitle": "Apprenez la Musique à Votre Rythme, avec Passion et Créativité",
    "hero.demoButton": "Voir la Démo",

    // About Section
    "about.title": "À Propos de",
    "about.description":
      "Chez Son, nous visons à attirer des étudiants de tous âges et niveaux en cultivant la sensibilité musicale comme fondement clé.",
    "about.reduce_details": "Réduire les détails",
    "about.learn_more": "En savoir plus",
    "about.objective.title": "Objectif",
    "about.objective.description":
      "Chaque étudiant vit la musique comme un langage vivant, plein d'émotion, de créativité et d'expression personnelle.",
    "about.mission.title": "Mission",
    "about.mission.description":
      "Fournir une éducation musicale complète et flexible, permettant à chaque étudiant de progresser à son rythme et d'explorer librement plusieurs instruments et styles.",
    "about.vision.title": "Vision",
    "about.vision.description":
      "Être une académie de musique leader au Québec et au-delà, reconnue pour notre approche innovante permettant aux étudiants de passer d'un instrument à l'autre sans limitations.",

    // Services Section
    "services.title": "Nos",
    "services.services": "Services",
    "services.subtitle": "Une gamme complète de services musicaux adaptés à tous les niveaux et tous les âges",
    "services.featured": "PRODUIT VEDETTE",
    "services.new": "NOUVEAU",
    "services.sensibilization.title": "Plan Sensibilisation Musical",
    "services.sensibilization.description":
      "Plan d'apprentissage musical personnalisé vers la découverte musicale de l'étudiant",
    "services.sensibilization.feature1": "Changement entre tous nos cours individuels",
    "services.sensibilization.feature2": "Mélange d'instruments dans chaque classe",
    "services.sensibilization.feature3": "Guidé par nos professeurs expérimentés",
    "services.sensibilization.feature4": "Même coût que les cours individuels",
    "services.strings.title": "Instruments à Cordes",
    "services.strings.description": "Cours de guitare et basse pour tous niveaux",
    "services.piano.title": "Piano Moderne",
    "services.piano.description": "Cours de piano moderne pour tous niveaux et styles contemporains",
    "services.percussion.title": "Percussions",
    "services.percussion.description": "Batterie, congas, djembé et percussions latines",
    "services.dj.title": "Cours de DJ",
    "services.dj.description": "Mixage, techniques de DJ et production électronique",
    "services.production.title": "Production Musicale",
    "services.production.description": "Formation spécialisée en production, composition et arrangements",
    "services.recording.title": "Enregistrement Professionnel",
    "services.recording.description": "Services d'enregistrement de reprises simples aux projets originaux complets",
    "services.ensemble.title": "Ensemble de Groupe",
    "services.ensemble.description":
      "Cours de groupe avec rotation d'instruments et présentations formelles tous les 6 mois",
    "services.ensemble.feature1": "Rotation entre instruments",
    "services.ensemble.feature2": "Présentations en juillet et décembre",
    "services.ensemble.feature3": "$25 par séance",
    "services.flexible.title": "Approche Flexible",
    "services.flexible.subtitle": "Cours flexibles : passez facilement d'un instrument à l'autre",
    "services.flexible.description":
      "Formation personnalisée et mentorat • Opportunités de performances live et d'enregistrement de projets originaux",

    // Pricing Section
    "pricing.title": "Nos Tarifs",
    "pricing.subtitle": "Choisissez le plan qui vous convient",
    "pricing.basic.title": "Cours Individuel",
    "pricing.basic.price": "€40",
    "pricing.basic.period": "par cours",
    "pricing.basic.feature1": "Cours personnalisé de 60 minutes",
    "pricing.basic.feature2": "Matériel pédagogique inclus",
    "pricing.basic.feature3": "Suivi personnalisé",
    "pricing.premium.title": "Forfait Mensuel",
    "pricing.premium.price": "€140",
    "pricing.premium.period": "par mois",
    "pricing.premium.feature1": "4 cours de 60 minutes",
    "pricing.premium.feature2": "Matériel pédagogique inclus",
    "pricing.premium.feature3": "Accès aux événements",
    "pricing.premium.feature4": "Suivi personnalisé",
    "pricing.pro.title": "Cours de Groupe",
    "pricing.pro.price": "€25",
    "pricing.pro.period": "par cours",
    "pricing.pro.feature1": "Cours en groupe (max 6 personnes)",
    "pricing.pro.feature2": "Matériel pédagogique inclus",
    "pricing.pro.feature3": "Ambiance conviviale",
    "pricing.pro.feature4": "Apprentissage collaboratif",
    "pricing.choose_plan": "Choisir ce plan",

    // Registration Section
    "registration.title": "Formulaire d'Inscription",
    "registration.subtitle": "Rejoignez notre académie musicale",
    "registration.name": "Nom complet",
    "registration.email": "Adresse e-mail",
    "registration.phone": "Numéro de téléphone",
    "registration.instrument": "Instrument souhaité",
    "registration.instrument.guitar": "Guitare",
    "registration.instrument.piano": "Piano",
    "registration.instrument.voice": "Chant",
    "registration.instrument.drums": "Batterie",
    "registration.instrument.violin": "Violon",
    "registration.instrument.folklore": "Folklore et Rythmes Latinos",
    "registration.level": "Niveau",
    "registration.level.beginner": "Débutant",
    "registration.level.intermediate": "Intermédiaire",
    "registration.level.advanced": "Avancé",
    "registration.message": "Message (optionnel)",
    "registration.submit": "S'inscrire",

    // Footer
    "footer.contact": "Contact",
    "footer.address": "123 Rue de la Musique, 75001 Paris",
    "footer.phone": "+33 1 23 45 67 89",
    "footer.email": "info@sonacademie.fr",
    "footer.hours": "Horaires d'ouverture",
    "footer.hours.weekdays": "Lun - Ven: 9h00 - 20h00",
    "footer.hours.saturday": "Sam: 9h00 - 18h00",
    "footer.hours.sunday": "Dim: Fermé",
    "footer.follow": "Suivez-nous",
    "footer.description":
      "Académie de musique à Québec offrant une approche flexible et créative pour apprendre la musique à votre rythme.",
    "footer.rights": "© 2024 Académie Son. Tous droits réservés.",
    "footer.navigation": "Navigation",
    "footer.instruments": "Instruments",
    "footer.guitar": "Guitare",
    "footer.bass": "Basse",
    "footer.piano": "Piano",
    "footer.drums": "Batterie",
    "footer.latin_percussion": "Percussions Latines",
    "footer.created_with_passion": "Créé avec passion pour la musique • Québec, Canada",

    // Why Choose Us
    "why_choose.title": "Pourquoi Choisir",
    "why_choose.academy": "SON Académie",
    "why_choose.subtitle": "Découvrez ce qui fait de notre académie un lieu unique pour votre parcours musical",
    "why_choose.trilingual.title": "Instructeurs Trilingues",
    "why_choose.trilingual.description":
      "Enseignement en français, anglais et espagnol pour une expérience d'apprentissage inclusive",
    "why_choose.personalized.title": "Approche Personnalisée",
    "why_choose.personalized.description":
      "Chaque étudiant bénéficie d'un programme adapté à son niveau et ses objectifs musicaux",
    "why_choose.experienced.title": "Instructeurs Expérimentés",
    "why_choose.experienced.description":
      "Notre équipe de professionnels passionnés vous guide vers l'excellence musicale",
    "why_choose.flexible.title": "Horaires Flexibles",
    "why_choose.flexible.description": "Cours disponibles en semaine et weekend pour s'adapter à votre emploi du temps",
    "why_choose.welcoming.title": "Environnement Bienveillant",
    "why_choose.welcoming.description":
      "Une atmosphère chaleureuse et encourageante pour développer votre passion musicale",
    "why_choose.performances.title": "Performances Live",
    "why_choose.performances.description":
      "Opportunités régulières de se produire en concert et d'enregistrer vos créations",

    // Courses Page
    "courses.title": "Nos Cours",
    "courses.subtitle": "Découvrez notre gamme complète de cours de musique",
    "courses.description":
      "Que vous soyez débutant ou musicien expérimenté, nous avons le cours parfait pour vous. Nos professeurs qualifiés vous guideront dans votre parcours musical.",
    "courses.benefits": "Avantages",

    // Featured Course
    "courses.featured.title": "Plan Sensibilisation Musical",
    "courses.featured.description":
      "Un plan d'apprentissage musical personnalisé vers la découverte musicale de l'étudiant, où nous facilitons la possibilité de changer entre tous nos cours individuels ou bien les mélanger dans chaque classe.",
    "courses.featured.unique_features": "Caractéristiques Uniques",
    "courses.featured.flexibility": "Flexibilité totale",
    "courses.featured.flexibility_desc": "Changez d'instrument à chaque cours selon vos envies",
    "courses.featured.guidance": "Guidance professionnelle",
    "courses.featured.guidance_desc": "Décisions toujours guidées par nos professeurs",
    "courses.featured.discovery": "Découverte personnalisée",
    "courses.featured.discovery_desc": "Basé sur votre motivation et curiosité musicale",
    "courses.featured.pricing": "Même tarif",
    "courses.featured.pricing_desc": "Prix identique aux cours individuels traditionnels",
    "courses.featured.personalized": "1:1 Personnalisé",
    "courses.featured.alt": "Plan Sensibilisation Musical - Découverte instrumentale",

    // Individual Courses
    "courses.individual.title": "Cours Individuels",
    "courses.individual.subtitle":
      "Bénéficiez d'une attention personnalisée avec nos cours individuels adaptés à votre niveau et vos objectifs musicaux.",
    "courses.individual.bass.title": "Basse Électrique",
    "courses.individual.bass.description":
      "Apprenez les techniques de base et avancées de la basse électrique avec un instructeur dédié.",
    "courses.individual.bass.benefit1": "Attention personnalisée",
    "courses.individual.bass.benefit2": "Progression à votre rythme",
    "courses.individual.bass.benefit3": "Répertoire adapté à vos goûts",
    "courses.individual.drums.title": "Batterie",
    "courses.individual.drums.description":
      "Maîtrisez les rythmes et techniques de batterie dans un environnement d'apprentissage personnalisé.",
    "courses.individual.drums.benefit1": "Technique personnalisée",
    "courses.individual.drums.benefit2": "Styles variés",
    "courses.individual.drums.benefit3": "Équipement professionnel",
    "courses.individual.dj.title": "DJ",
    "courses.individual.dj.description":
      "Découvrez l'art du mixage et de la production musicale avec des équipements professionnels.",
    "courses.individual.dj.benefit1": "Équipement professionnel",
    "courses.individual.dj.benefit2": "Techniques de mixage",
    "courses.individual.dj.benefit3": "Production musicale",
    "courses.individual.guitar.title": "Guitare",
    "courses.individual.guitar.description":
      "Cours de guitare personnalisés pour tous niveaux, du débutant au musicien confirmé.",
    "courses.individual.guitar.benefit1": "Méthode adaptée",
    "courses.individual.guitar.benefit2": "Styles multiples",
    "courses.individual.guitar.benefit3": "Théorie et pratique",
    "courses.individual.piano.title": "Piano Moderne",
    "courses.individual.piano.description":
      "Explorez le piano moderne avec des techniques contemporaines et un répertoire actuel.",
    "courses.individual.piano.benefit1": "Répertoire moderne",
    "courses.individual.piano.benefit2": "Techniques contemporaines",
    "courses.individual.piano.benefit3": "Improvisation",
    "courses.individual.production.title": "Production Musicale",
    "courses.individual.production.description":
      "Apprenez à créer, enregistrer et produire votre propre musique avec des logiciels professionnels.",
    "courses.individual.production.benefit1": "Logiciels professionnels",
    "courses.individual.production.benefit2": "Enregistrement",
    "courses.individual.production.benefit3": "Composition",
    "courses.individual.xylophone.title": "Xylophone",
    "courses.individual.xylophone.description":
      "Découvrez la beauté mélodique du xylophone avec des techniques classiques et modernes.",
    "courses.individual.xylophone.benefit1": "Technique de frappe",
    "courses.individual.xylophone.benefit2": "Lecture musicale",
    "courses.individual.xylophone.benefit3": "Répertoire varié",

    // Group Courses
    "courses.group.title": "Cours de Groupe",
    "courses.group.subtitle":
      "Rejoignez nos cours de groupe pour une expérience musicale collaborative et enrichissante avec d'autres passionnés.",
    "courses.group.badge": "Groupe",
    "courses.group.rock.title": "Ensemble de Groupe - Rock",
    "courses.group.rock.description":
      "Formez un groupe et jouez ensemble des classiques du rock dans une ambiance collaborative.",
    "courses.group.rock.benefit1": "Jeu en groupe",
    "courses.group.rock.benefit2": "Répertoire rock",
    "courses.group.rock.benefit3": "Performance live",
    "courses.group.rock.students": "4-6 étudiants",
    "courses.group.production.title": "Atelier de Production Collective",
    "courses.group.production.description":
      "Créez de la musique ensemble en utilisant des techniques de production moderne.",
    "courses.group.production.benefit1": "Création collaborative",
    "courses.group.production.benefit2": "Techniques modernes",
    "courses.group.production.benefit3": "Projet commun",
    "courses.group.production.students": "3-4 étudiants",
    "courses.group.folklore.title": "Folklore et Rythmes Latinos",
    "courses.group.folklore.description":
      "Explorez la richesse musicale de l'Amérique latine à travers ses rythmes traditionnels et ses instruments authentiques comme les congas, bongos, maracas et guitares.",
    "courses.group.folklore.benefit1": "Rythmes traditionnels",
    "courses.group.folklore.benefit2": "Instruments authentiques",
    "courses.group.folklore.benefit3": "Culture latino-américaine",
    "courses.group.folklore.students": "6-8 étudiants",

    // Schedule Page
    "schedule.title": "Horaires des Cours",
    "schedule.subtitle": "Planifiez vos cours selon votre emploi du temps",
    "schedule.description":
      "Consultez nos créneaux disponibles et réservez vos cours en ligne. Nous offrons une flexibilité maximale pour s'adapter à votre rythme de vie.",
    "schedule.monday": "Lundi",
    "schedule.tuesday": "Mardi",
    "schedule.wednesday": "Mercredi",
    "schedule.thursday": "Jeudi",
    "schedule.friday": "Vendredi",
    "schedule.saturday": "Samedi",
    "schedule.sunday": "Dimanche",
    "schedule.morning": "Matin",
    "schedule.afternoon": "Après-midi",
    "schedule.evening": "Soir",
    "schedule.available": "Disponible",
    "schedule.booked": "Réservé",
    "schedule.book": "Réserver",
    "schedule.calendar_title": "Calendrier des",
    "schedule.classes": "Cours",
    "schedule.calendar_subtitle":
      "Consultez notre calendrier interactif pour voir les disponibilités et les cours en cours",
    "schedule.free": "Libre",
    "schedule.hours": "Horaires",
    "schedule.occupied": "Occupé",
    "schedule.professor": "Prof.",
    "schedule.music_teacher": "Professeur de musique",
    "schedule.specialties": "Spécialités",
    "schedule.filter_by_professor": "Filtrer par Professeur",
    "schedule.all_professors": "Tous les Professeurs",
    "schedule.want_to_book": "Vous voulez réserver un cours?",
    "schedule.contact_us": "Contactez-nous pour réserver votre horaire préféré",
    "schedule.call": "Appeler",
    "schedule.registration_form": "Formulaire d'Inscription",
    "schedule.legend.two_hours_available": "2+ heures disponibles",
    "schedule.legend.available_hours": "Horarios disponibles",
    "schedule.legend.ongoing_classes": "Cours en cours",
    "schedule.legend.not_available": "Non disponible",
    "schedule.professors.cesar.specialty": "Todos los cursos",
    "schedule.professors.sebastian.specialty1": "Batterie",
    "schedule.professors.sebastian.specialty2": "Bajo",
    "schedule.courses.guitare": "Guitare",
    "schedule.courses.batterie": "Batterie",
    "schedule.courses.cours_collectif": "Cours Collectif",
    "schedule.types.individuel": "Individuel",
    "schedule.types.groupe": "Groupe",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.courses": "Cursos",
    "nav.schedule": "Horarios",
    "nav.back_home": "Volver al inicio",
    "nav.inscription": "Inscribirse",
    "nav.academy": "Academia de Música",
    "nav.about": "Acerca de",
    "nav.services": "Servicios",
    "nav.team": "Equipo",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "SON Academia de Música",
    "hero.subtitle": "Aprende Música a Tu Ritmo, con Pasión y Creatividad",
    "hero.demoButton": "Ver Demo",

    // About Section
    "about.title": "Acerca de",
    "about.description":
      "En Son, buscamos atraer estudiantes de todas las edades y niveles cultivando la sensibilidad musical como fundamento clave.",
    "about.reduce_details": "Reducir detalles",
    "about.learn_more": "Saber más",
    "about.objective.title": "Objetivo",
    "about.objective.description":
      "Cada estudiante vive la música como un lenguaje vivo, lleno de emoción, creatividad y expresión personal.",
    "about.mission.title": "Misión",
    "about.mission.description":
      "Proporcionar una educación musical completa y flexible, permitiendo a cada estudiante progresar a su ritmo y explorar libremente varios instrumentos y estilos.",
    "about.vision.title": "Visión",
    "about.vision.description":
      "Ser una academia de música líder en Quebec y más allá, reconocida por nuestro enfoque innovador que permite a los estudiantes cambiar de un instrumento a otro sin limitaciones.",

    // Services Section
    "services.title": "Nuestros",
    "services.services": "Servicios",
    "services.subtitle": "Una gama completa de servicios musicales adaptados a todos los niveles y edades",
    "services.featured": "PRODUCTO DESTACADO",
    "services.new": "NUEVO",
    "services.sensibilization.title": "Plan Sensibilización Musical",
    "services.sensibilization.description":
      "Plan de aprendizaje musical personalizado hacia el descubrimiento musical del estudiante",
    "services.sensibilization.feature1": "Cambio entre todos nuestros cursos individuales",
    "services.sensibilization.feature2": "Mezcla de instrumentos en cada clase",
    "services.sensibilization.feature3": "Guiado por nuestros profesores experimentados",
    "services.sensibilization.feature4": "Mismo costo que los cursos individuales",
    "services.strings.title": "Instrumentos de Cuerda",
    "services.strings.description": "Clases de guitarra y bajo para todos los niveles",
    "services.piano.title": "Piano Moderno",
    "services.piano.description": "Clases de piano moderno para todos los niveles y estilos contemporáneos",
    "services.percussion.title": "Percusiones",
    "services.percussion.description": "Batería, congas, djembé y percusiones latinas",
    "services.dj.title": "Clases de DJ",
    "services.dj.description": "Mezcla, técnicas de DJ y producción electrónica",
    "services.production.title": "Producción Musical",
    "services.production.description": "Formación especializada en producción, composición y arreglos",
    "services.recording.title": "Grabación Profesional",
    "services.recording.description":
      "Servicios de grabación desde covers simples hasta proyectos originales completos",
    "services.ensemble.title": "Conjunto Grupal",
    "services.ensemble.description":
      "Clases grupales con rotación de instrumentos y presentaciones formales cada 6 meses",
    "services.ensemble.feature1": "Rotación entre instrumentos",
    "services.ensemble.feature2": "Presentaciones en julio y diciembre",
    "services.ensemble.feature3": "$25 por sesión",
    "services.flexible.title": "Enfoque Flexible",
    "services.flexible.subtitle": "Clases flexibles: cambia fácilmente de un instrumento a otro",
    "services.flexible.description":
      "Formación personalizada y mentoría • Oportunidades de presentaciones en vivo y grabación de proyectos originales",

    // Pricing Section
    "pricing.title": "Nuestras Tarifas",
    "pricing.subtitle": "Elige el plan que te convenga",
    "pricing.basic.title": "Clase Individual",
    "pricing.basic.price": "€40",
    "pricing.basic.period": "por clase",
    "pricing.basic.feature1": "Clase personalizada de 60 minutos",
    "pricing.basic.feature2": "Material pedagógico incluido",
    "pricing.basic.feature3": "Seguimiento personalizado",
    "pricing.premium.title": "Paquete Mensual",
    "pricing.premium.price": "€140",
    "pricing.premium.period": "por mes",
    "pricing.premium.feature1": "4 clases de 60 minutos",
    "pricing.premium.feature2": "Material pedagógico incluido",
    "pricing.premium.feature3": "Acceso a eventos",
    "pricing.premium.feature4": "Seguimiento personalizado",
    "pricing.pro.title": "Clases Grupales",
    "pricing.pro.price": "€25",
    "pricing.pro.period": "por clase",
    "pricing.pro.feature1": "Clases en grupo (máx 6 personas)",
    "pricing.pro.feature2": "Material pedagógico incluido",
    "pricing.pro.feature3": "Ambiente amigable",
    "pricing.pro.feature4": "Aprendizaje colaborativo",
    "pricing.choose_plan": "Elegir este plan",

    // Registration Section
    "registration.title": "Formulario de Inscripción",
    "registration.subtitle": "Únete a nuestra academia musical",
    "registration.name": "Nombre completo",
    "registration.email": "Dirección de correo electrónico",
    "registration.phone": "Número de teléfono",
    "registration.instrument": "Instrumento deseado",
    "registration.instrument.guitar": "Guitarra",
    "registration.instrument.piano": "Piano",
    "registration.instrument.voice": "Canto",
    "registration.instrument.drums": "Batería",
    "registration.instrument.violin": "Violín",
    "registration.instrument.folklore": "Folklore y Ritmos Latinos",
    "registration.level": "Nivel",
    "registration.level.beginner": "Principiante",
    "registration.level.intermediate": "Intermedio",
    "registration.level.advanced": "Avanzado",
    "registration.message": "Mensaje (opcional)",
    "registration.submit": "Inscribirse",

    // Footer
    "footer.contact": "Contacto",
    "footer.address": "123 Calle de la Música, 75001 París",
    "footer.phone": "+33 1 23 45 67 89",
    "footer.email": "info@sonacademie.fr",
    "footer.hours": "Horarios de apertura",
    "footer.hours.weekdays": "Lun - Vie: 9:00 - 20:00",
    "footer.hours.saturday": "Sáb: 9:00 - 18:00",
    "footer.hours.sunday": "Dom: Cerrado",
    "footer.follow": "Síguenos",
    "footer.description":
      "Academia de música en Quebec que ofrece un enfoque flexible y creativo para aprender música a tu ritmo.",
    "footer.rights": "© 2024 Academia Son. Todos los derechos reservados.",
    "footer.navigation": "Navegación",
    "footer.instruments": "Instrumentos",
    "footer.guitar": "Guitarra",
    "footer.bass": "Bajo",
    "footer.piano": "Piano",
    "footer.drums": "Batería",
    "footer.latin_percussion": "Percusiones Latinas",
    "footer.created_with_passion": "Creado con pasión por la música • Quebec, Canadá",

    // Why Choose Us
    "why_choose.title": "Por Qué Elegir",
    "why_choose.academy": "SON Academia",
    "why_choose.subtitle": "Descubre lo que hace de nuestra academia un lugar único para tu viaje musical",
    "why_choose.trilingual.title": "Instructores Trilingües",
    "why_choose.trilingual.description":
      "Enseñanza en francés, inglés y español para una experiencia de aprendizaje inclusiva",
    "why_choose.personalized.title": "Enfoque Personalizado",
    "why_choose.personalized.description":
      "Cada estudiante se beneficia de un programa adaptado a su nivel y objetivos musicales",
    "why_choose.experienced.title": "Instructores Experimentados",
    "why_choose.experienced.description":
      "Nuestro equipo de profesionales apasionados te guía hacia la excelencia musical",
    "why_choose.flexible.title": "Horarios Flexibles",
    "why_choose.flexible.description": "Clases disponibles entre semana y fines de semana para adaptarse a tu horario",
    "why_choose.welcoming.title": "Ambiente Acogedor",
    "why_choose.welcoming.description": "Una atmósfera cálida y alentadora para desarrollar tu pasión musical",
    "why_choose.performances.title": "Presentaciones en Vivo",
    "why_choose.performances.description":
      "Oportunidades regulares de presentarse en concierto y grabar tus creaciones",

    // Courses Page
    "courses.title": "Nuestros Cursos",
    "courses.subtitle": "Descubre nuestra gama completa de cursos de música",
    "courses.description":
      "Ya seas principiante o músico experimentado, tenemos el curso perfecto para ti. Nuestros profesores calificados te guiarán en tu viaje musical.",
    "courses.benefits": "Beneficios",

    // Featured Course
    "courses.featured.title": "Plan Sensibilización Musical",
    "courses.featured.description":
      "Un plan de aprendizaje musical personalizado hacia el descubrimiento musical del estudiante, donde facilitamos la posibilidad de cambiar entre todos nuestros cursos individuales o mezclarlos en cada clase.",
    "courses.featured.unique_features": "Características Únicas",
    "courses.featured.flexibility": "Flexibilidad total",
    "courses.featured.flexibility_desc": "Cambia de instrumento en cada clase según tus deseos",
    "courses.featured.guidance": "Guía profesional",
    "courses.featured.guidance_desc": "Decisiones siempre guiadas por nuestros profesores",
    "courses.featured.discovery": "Descubrimiento personalizado",
    "courses.featured.discovery_desc": "Basado en tu motivación y curiosidad musical",
    "courses.featured.pricing": "Mismo precio",
    "courses.featured.pricing_desc": "Precio idéntico a los cursos individuales tradicionales",
    "courses.featured.personalized": "1:1 Personalizado",
    "courses.featured.alt": "Plan Sensibilización Musical - Descubrimiento instrumental",

    // Individual Courses
    "courses.individual.title": "Cursos Individuales",
    "courses.individual.subtitle":
      "Benefíciate de atención personalizada con nuestros cursos individuales adaptados a tu nivel y objetivos musicales.",
    "courses.individual.bass.title": "Bajo Eléctrico",
    "courses.individual.bass.description":
      "Aprende las técnicas básicas y avanzadas del bajo eléctrico con un instructor dedicado.",
    "courses.individual.bass.benefit1": "Atención personalizada",
    "courses.individual.bass.benefit2": "Progresión a tu ritmo",
    "courses.individual.bass.benefit3": "Repertorio adaptado a tus gustos",
    "courses.individual.drums.title": "Batería",
    "courses.individual.drums.description":
      "Domina los ritmos y técnicas de batería en un ambiente de aprendizaje personalizado.",
    "courses.individual.drums.benefit1": "Técnica personalizada",
    "courses.individual.drums.benefit2": "Estilos variados",
    "courses.individual.drums.benefit3": "Equipo profesional",
    "courses.individual.dj.title": "DJ",
    "courses.individual.dj.description":
      "Descubre el arte de la mezcla y producción musical con equipos profesionales.",
    "courses.individual.dj.benefit1": "Equipo profesional",
    "courses.individual.dj.benefit2": "Técnicas de mezcla",
    "courses.individual.dj.benefit3": "Producción musical",
    "courses.individual.guitar.title": "Guitarra",
    "courses.individual.guitar.description":
      "Clases de guitarra personalizadas para todos los niveles, desde principiante hasta músico experimentado.",
    "courses.individual.guitar.benefit1": "Método adaptado",
    "courses.individual.guitar.benefit2": "Múltiples estilos",
    "courses.individual.guitar.benefit3": "Teoría y práctica",
    "courses.individual.piano.title": "Piano Moderno",
    "courses.individual.piano.description": "Explora el piano moderno con técnicas contemporáneas y repertorio actual.",
    "courses.individual.piano.benefit1": "Repertorio moderno",
    "courses.individual.piano.benefit2": "Técnicas contemporáneas",
    "courses.individual.piano.benefit3": "Improvisación",
    "courses.individual.production.title": "Producción Musical",
    "courses.individual.production.description":
      "Aprende a crear, grabar y producir tu propia música con software profesional.",
    "courses.individual.production.benefit1": "Software profesional",
    "courses.individual.production.benefit2": "Grabación",
    "courses.individual.production.benefit3": "Composición",
    "courses.individual.xylophone.title": "Xilófono",
    "courses.individual.xylophone.description":
      "Descubre la belleza melódica del xilófono con técnicas clásicas y modernas.",
    "courses.individual.xylophone.benefit1": "Técnica de golpeo",
    "courses.individual.xylophone.benefit2": "Lectura musical",
    "courses.individual.xylophone.benefit3": "Repertorio variado",

    // Group Courses
    "courses.group.title": "Cursos Grupales",
    "courses.group.subtitle":
      "Únete a nuestros cursos grupales para una experiencia musical colaborativa y enriquecedora con otros apasionados.",
    "courses.group.badge": "Grupo",
    "courses.group.rock.title": "Conjunto Grupal - Rock",
    "courses.group.rock.description": "Forma una banda y toca juntos clásicos del rock en un ambiente colaborativo.",
    "courses.group.rock.benefit1": "Juego en grupo",
    "courses.group.rock.benefit2": "Repertorio rock",
    "courses.group.rock.benefit3": "Presentación en vivo",
    "courses.group.rock.students": "4-6 estudiantes",
    "courses.group.production.title": "Taller de Producción Colectiva",
    "courses.group.production.description": "Crea música juntos usando técnicas de producción moderna.",
    "courses.group.production.benefit1": "Creación colaborativa",
    "courses.group.production.benefit2": "Técnicas modernas",
    "courses.group.production.benefit3": "Proyecto común",
    "courses.group.production.students": "3-4 estudiantes",
    "courses.group.folklore.title": "Folklore y Ritmos Latinos",
    "courses.group.folklore.description":
      "Explora la riqueza musical de América Latina a través de sus ritmos tradicionales e instrumentos auténticos como congas, bongos, maracas y guitarras.",
    "courses.group.folklore.benefit1": "Ritmos tradicionales",
    "courses.group.folklore.benefit2": "Instrumentos auténticos",
    "courses.group.folklore.benefit3": "Cultura latinoamericana",
    "courses.group.folklore.students": "6-8 estudiantes",

    // Schedule Page
    "schedule.title": "Horarios de Clases",
    "schedule.subtitle": "Planifica tus clases según tu horario",
    "schedule.description":
      "Consulta nuestros horarios disponibles y reserva tus clases en línea. Ofrecemos máxima flexibilidad para adaptarnos a tu ritmo de vida.",
    "schedule.monday": "Lunes",
    "schedule.tuesday": "Martes",
    "schedule.wednesday": "Miércoles",
    "schedule.thursday": "Jueves",
    "schedule.friday": "Viernes",
    "schedule.saturday": "Sábado",
    "schedule.sunday": "Domingo",
    "schedule.morning": "Mañana",
    "schedule.afternoon": "Tarde",
    "schedule.evening": "Noche",
    "schedule.available": "Disponible",
    "schedule.booked": "Reservado",
    "schedule.book": "Reservar",
    "schedule.calendar_title": "Calendario de",
    "schedule.classes": "Clases",
    "schedule.calendar_subtitle": "Consulta nuestro calendario interactivo para ver disponibilidades y clases en curso",
    "schedule.free": "Libre",
    "schedule.hours": "Horarios",
    "schedule.occupied": "Ocupado",
    "schedule.professor": "Prof.",
    "schedule.music_teacher": "Profesor de música",
    "schedule.specialties": "Especialidades",
    "schedule.filter_by_professor": "Filtrar por Profesor",
    "schedule.all_professors": "Todos los Profesores",
    "schedule.want_to_book": "¿Quieres reservar una clase?",
    "schedule.contact_us": "Contáctanos para reservar tu horario preferido",
    "schedule.call": "Llamar",
    "schedule.registration_form": "Formulario de Inscripción",
    "schedule.legend.two_hours_available": "2+ horas disponibles",
    "schedule.legend.available_hours": "Horarios disponibles",
    "schedule.legend.ongoing_classes": "Clases en curso",
    "schedule.legend.not_available": "No disponible",
    "schedule.professors.cesar.specialty": "Todos los cursos",
    "schedule.professors.sebastian.specialty1": "Batería",
    "schedule.professors.sebastian.specialty2": "Bajo",
    "schedule.courses.guitare": "Guitarra",
    "schedule.courses.batterie": "Batería",
    "schedule.courses.cours_collectif": "Clase Colectiva",
    "schedule.types.individuel": "Individual",
    "schedule.types.groupe": "Grupo",
  },
}
