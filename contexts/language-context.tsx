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
    const currentTranslations = translations[language] as Record<string, string>
    return currentTranslations[key] || key
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
    "pricing.title": "Nos",
    "pricing.tarifs": "Tarifs",
    "pricing.subtitle": "Plans flexibles adaptés à vos besoins musicaux",
    "pricing.individual.title": "Cours Individuels",
    "pricing.individual.price": "$40",
    "pricing.individual.period": "/ heure",
    "pricing.individual.description": "Attention personnalisée en tête-à-tête",
    "pricing.individual.feature1": "Piano moderne, guitarre, basse, batterie, DJ, production, xylophone",
    "pricing.individual.feature2": "Durée: 30min, 45min ou 1 heure",
    "pricing.individual.feature3": "Horaire flexible",
    "pricing.individual.feature4": "Progrès personnalisé",
    "pricing.group.title": "Cours de Groupe",
    "pricing.group.price": "$25",
    "pricing.group.period": "/ séance",
    "pricing.group.description": "Apprenez en groupe et partagez des expériences",
    "pricing.group.feature1": "Ensemble rock, production collective, folklore et rythmes latinos",
    "pricing.group.feature2": "Durée: 90-120 minutes selon le cours",
    "pricing.group.feature3": "Groupes de 3-8 étudiants",
    "pricing.group.feature4": "Rotation entre instruments",
    "pricing.group.feature5": "Présentations tous les 6 mois",
    "pricing.group.feature6": "Environnement collaboratif",
    "pricing.duration.title": "Options de Durée",
    "pricing.duration.30min": "30 Minutes",
    "pricing.duration.30min_desc": "Idéal pour débutants",
    "pricing.duration.45min": "45 Minutes",
    "pricing.duration.45min_desc": "Équilibre parfait",
    "pricing.duration.60min": "1 Heure",
    "pricing.duration.60min_desc": "Utilisation maximale",
    "pricing.cta.title": "Prêt à commencer votre voyage musical?",
    "pricing.cta.button": "Inscrivez-vous Maintenant",

    // Registration Section
    "registration.title": "Formulaire d'Inscription",
    "registration.subtitle": "Rejoignez Academy SON et commencez votre voyage musical dès aujourd'hui!",
    "registration.name_label": "Nom complet",
    "registration.name_placeholder": "Votre nom complet",
    "registration.email_label": "Email",
    "registration.email_placeholder": "votre@email.com",
    "registration.phone_label": "Téléphone",
    "registration.phone_placeholder": "Votre numéro de téléphone",
    "registration.age_label": "Âge",
    "registration.age_placeholder": "Votre âge",
    "registration.level_label": "Niveau musical",
    "registration.level_placeholder": "Sélectionnez votre niveau",
    "registration.level_beginner": "Débutant",
    "registration.level_intermediate": "Intermédiaire",
    "registration.level_advanced": "Avancé",
    "registration.course_label": "Cours souhaité",
    "registration.course_placeholder": "Sélectionnez un cours",
    "registration.course_bass": "Basse Électrique",
    "registration.course_drums": "Batterie",
    "registration.course_dj": "DJ",
    "registration.course_ensemble": "Ensemble de Groupe",
    "registration.course_guitar": "Guitare",
    "registration.course_piano": "Piano Moderne",
    "registration.course_production": "Production Musicale",
    "registration.course_xylophone": "Xylophone",
    "registration.duration_label": "Durée souhaitée",
    "registration.duration_placeholder": "Sélectionnez la durée",
    "registration.duration_30": "30 minutes",
    "registration.duration_45": "45 minutes",
    "registration.duration_60": "60 minutes",
    "registration.duration_90": "90 minutes",
    "registration.schedule_label": "Horaire préféré",
    "registration.schedule_placeholder": "Sélectionnez un horaire",
    "registration.schedule_morning": "Matin (9h00 - 12h00)",
    "registration.schedule_afternoon": "Après-midi (12h00 - 17h00)",
    "registration.schedule_evening": "Soir (17h00 - 20h00)",
    "registration.schedule_weekend": "Weekend",
    "registration.schedule_flexible": "Flexible",
    "registration.availability_label": "Disponibilité dans la semaine",
    "registration.day_monday": "Lundi",
    "registration.day_tuesday": "Mardi",
    "registration.day_wednesday": "Mercredi",
    "registration.day_thursday": "Jeudi",
    "registration.day_friday": "Vendredi",
    "registration.day_saturday": "Samedi",
    "registration.day_sunday": "Dimanche",
    "registration.day_flexible": "Flexible",
    "registration.message_label": "Message ou questions spécifiques",
    "registration.message_placeholder":
      "Parlez-nous de vos objectifs musicaux, expérience précédente, ou toute question...",
    "registration.submit_button": "Envoyer ma demande d'inscription",
    "registration.submitting": "Envoi en cours...",
    "registration.next_steps": "Prochaines étapes:",
    "registration.step1": "Nous examinerons votre demande dans les 24h",
    "registration.step2": "Un de nos conseillers vous contactera pour discuter de vos besoins",
    "registration.step3": "Nous planifierons votre première séance d'évaluation gratuite",
    "registration.success_message":
      "Votre demande d'inscription a été envoyée avec succès! Nous vous contacterons bientôt.",
    "registration.error_message": "Une erreur est survenue. Veuillez réessayer.",

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

    // Testimonials Section
    "testimonials.title": "Témoignages",
    "testimonials.subtitle": "Découvrez ce que nos étudiants pensent de leur expérience à l'Académie SON",
    "testimonials.years": "ans",
    "testimonials.previous": "Témoignages précédents",
    "testimonials.next": "Témoignages suivants",
    "testimonials.go_to_page": "Aller à la page",

    // Gallery Section
    "gallery.title": "Galerie",
    "gallery.subtitle": "Découvrez l'atmosphère unique de notre académie à travers nos photos et vidéos",
    "gallery.groupClasses": "Cours de Groupe",
    "gallery.collaborativeLearning": "Sessions d'apprentissage collaboratif",
    "gallery.studentPerformances": "Performances Étudiantes",
    "gallery.recitalsShows": "Récitals et spectacles",
    "gallery.recordingStudio": "Studio d'Enregistrement",
    "gallery.behindScenes": "Coulisses des sessions",
    "gallery.liveEvents": "Événements Live",
    "gallery.workshopsPerformances": "Ateliers et performances",
    "gallery.livePerformancesTitle": "Performances Live",
    "gallery.livePerformancesDesc":
      "Nos étudiants ont l'opportunité de se produire sur scène lors de nos événements réguliers et récitals.",
    "gallery.recordingStudioTitle": "Studio d'Enregistrement",
    "gallery.recordingStudioDesc":
      "Équipement professionnel pour enregistrer vos créations, des reprises simples aux projets originaux complets.",

    // Policies Section
    "policies.title": "Politiques et Documents",
    "policies.subtitle":
      "Téléchargez nos politiques officielles et documents importants pour une expérience transparente",
    "policies.generalPolicies": "Politiques Générales",
    "policies.generalPoliciesDesc": "Règlements généraux de l'académie, code de conduite et procédures",
    "policies.paymentPolicies": "Politiques de Paiement",
    "policies.paymentPoliciesDesc": "Méthodes de paiement acceptées, échéances et conditions financières",
    "policies.cancellationPolicies": "Politiques d'Annulation",
    "policies.cancellationPoliciesDesc": "Conditions d'annulation, de report et de remboursement des cours",
    "policies.ensemblePolicies": "Politiques d'Ensamble",
    "policies.ensemblePoliciesDesc": "Règlements spécifiques aux cours de groupe et présentations",
    "policies.downloadStarted": "Téléchargement de",
    "policies.demoFile": "commencé. (Fichier de démonstration)",
    "policies.needHelp": "Besoin d'aide avec nos politiques?",
    "policies.needHelpDesc":
      "Si vous avez des questions concernant nos politiques ou si vous avez besoin de clarifications, n'hésitez pas à nous contacter directement.",
    "policies.call": "Appeler",
    "policies.contactUs": "Nous contacter",
    "policies.lastUpdate": "Dernière mise à jour des politiques: Décembre 2024",
    "policies.availableInFrench": "Tous les documents sont disponibles en français",

    // Team Section
    "team.title": "Notre",
    "team.team": "Équipe",
    "team.subtitle": "Des professeurs expérimentés et passionnés, reconnus dans d'autres écoles de musique du Québec",
    "team.cesar.name": "César Silva",
    "team.cesar.role": "Fondateur et Instructeur Principal",
    "team.cesar.alt": "César Silva - Fondateur et Instructeur Principal",
    "team.cesar.specialties": "Spécialités",
    "team.cesar.specialties_desc":
      "Tous les cours - Guitare, Piano, Batterie, Basse Électrique, Chant, DJ, Production Musicale, Xylophone",
    "team.cesar.education": "Formation Académique",
    "team.cesar.education_desc":
      "Berklee College of Music (USA), Universidad Nacional de Colombia, Université Laval (Canada)",
    "team.cesar.experience": "Expérience",
    "team.cesar.experience_desc": "Plus de 10 ans d'enseignement, dont 2 ans au Québec",
    "team.cesar.approach": "Approche",
    "team.cesar.approach_desc": "Combine la maîtrise technique avec la créativité et la sensibilité musicale",
    "team.sebastian.name": "Sebastián Rey",
    "team.sebastian.role": "Instructeur",
    "team.sebastian.specialties": "Spécialités",
    "team.sebastian.specialties_desc": "Batterie, Basse Électrique",
    "team.sebastian.experience": "Expérience",
    "team.sebastian.experience_desc":
      "Reconnu pour sa polyvalence et son soutien aux étudiants de tous niveaux dans leur parcours musical",
    "team.sebastian.quote":
      '"La musique est un voyage personnel unique pour cada étudiant. Mon rôle est de les guider avec patience et passion."',
    "team.recognition.title": "Reconnaissance Professionnelle",
    "team.recognition.desc":
      "Faculté reconnue dans d'autres écoles de musique du Québec, notamment Long & McQuade, Cercle de musique de Cap Rouge, Sam Gagnon, et plus encore.",

    // FAQ Section
    "faq.title": "Questions Fréquentes",
    "faq.subtitle": "Trouvez les réponses aux questions les plus courantes sur nos cours et services",
    "faq.show": "Voir les FAQ",
    "faq.hide": "Masquer les FAQ",
    "faq.consultation.title": "Demande de Consultation",
    "faq.consultation.show": "Voir le formulaire",
    "faq.consultation.hide": "Masquer le formulaire",
    "faq.consultation.description":
      "Vous avez des questions spécifiques? Demandez une consultation personnalisée avec nos experts!",
    "faq.consultation.name": "Nom complet",
    "faq.consultation.name_placeholder": "Votre nom complet",
    "faq.consultation.email": "Email",
    "faq.consultation.email_placeholder": "votre@email.com",
    "faq.consultation.phone": "Téléphone",
    "faq.consultation.phone_placeholder": "Votre numéro de téléphone",
    "faq.consultation.course": "Cours d'intérêt",
    "faq.consultation.course_placeholder": "Sélectionnez un cours",
    "faq.consultation.course_piano": "Piano Moderne",
    "faq.consultation.course_guitar": "Guitare",
    "faq.consultation.course_voice": "Chant",
    "faq.consultation.course_dj": "DJ",
    "faq.consultation.course_production": "Production Musicale",
    "faq.consultation.course_ensemble": "Ensemble de Groupe",
    "faq.consultation.message": "Message",
    "faq.consultation.message_placeholder": "Décrivez vos questions ou besoins spécifiques...",
    "faq.consultation.submit": "Envoyer la demande",
    "faq.consultation.submitting": "Envoi en cours...",
    "faq.consultation.success": "Votre demande de consultation a été envoyée avec succès!",
    "faq.consultation.error": "Une erreur est survenue. Veuillez réessayer.",

    // FAQ Questions and Answers
    "faq.q1.question": "Quels sont les prérequis pour commencer les cours?",
    "faq.q1.answer":
      "Aucun prérequis n'est nécessaire! Nos cours s'adaptent à tous les niveaux, du débutant complet au musicien expérimenté. Nos professeurs trilingues évaluent votre niveau lors de la première séance pour personnaliser l'enseignement.",
    "faq.q2.question": "Combien de temps faut-il pour voir des progrès?",
    "faq.q2.answer":
      "Les premiers progrès sont généralement visibles dès les 2-3 premières semaines. Cependant, cela dépend de votre pratique personnelle et de la fréquence des cours. Nos étudiants rapportent des améliorations significatives après 2-3 mois de cours réguliers.",
    "faq.q3.question": "Puis-je changer d'instrument ou de cours en cours de route?",
    "faq.q3.answer":
      "Absolument! Nous encourageons l'exploration musicale. Vous pouvez changer d'instrument ou ajouter des cours supplémentaires à tout moment. Nos forfaits flexibles s'adaptent à vos besoins évolutifs.",
    "faq.q4.question": "Comment fonctionnent les cours d'ensamble grupal?",
    "faq.q4.answer":
      "Les cours d'ensamble permettent de jouer avec d'autres musiciens en rotation d'instruments. Chaque session coûte 25$ et culmine avec des présentations formelles tous les 6 mois. C'est une excellente façon d'apprendre la collaboration musicale!",
    "faq.q5.question": "Quels équipements sont fournis par l'académie?",
    "faq.q5.answer":
      "Nous fournissons tous les instruments et équipements professionnels nécessaires pendant les cours. Pour la production musicale et le DJ, nous avons des studios entièrement équipés avec du matériel de pointe.",
    "faq.q6.question": "Proposez-vous des cours en ligne?",
    "faq.q6.answer":
      "Actuellement, nous nous concentrons sur les cours en présentiel pour offrir la meilleure expérience d'apprentissage. Cependant, nous développons des options hybrides pour certains cours théoriques.",
    "faq.q7.question": "Comment puis-je annuler ou reporter un cours?",
    "faq.q7.answer":
      "Vous pouvez annuler ou reporter un cours jusqu'à 24h à l'avance sans frais. Pour les politiques détaillées, consultez notre document de politiques disponible en téléchargement sur le site.",
    "faq.q8.question": "Y a-t-il des spectacles ou des événements pour les étudiants?",
    "faq.q8.answer":
      "Oui! Nous organisons des présentations semestrielles pour les cours d'ensamble, des récitals pour les étudiants individuels, et des événements communautaires réguliers pour célébrer les progrès de nos musiciens.",
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
    "pricing.title": "Nuestras",
    "pricing.tarifs": "Tarifas",
    "pricing.subtitle": "Planes flexibles adaptados a tus necesidades musicales",
    "pricing.individual.title": "Clases Individuales",
    "pricing.individual.price": "$40",
    "pricing.individual.period": "/ hora",
    "pricing.individual.description": "Atención personalizada uno a uno",
    "pricing.individual.feature1": "Piano moderno, guitarra, bajo, batería, DJ, producción, xilófono",
    "pricing.individual.feature2": "Duración: 30min, 45min o 1 hora",
    "pricing.individual.feature3": "Horario flexible",
    "pricing.individual.feature4": "Progreso personalizado",
    "pricing.group.title": "Clases Grupales",
    "pricing.group.price": "$25",
    "pricing.group.period": "/ sesión",
    "pricing.group.description": "Aprende en grupo y comparte experiencias",
    "pricing.group.feature1": "Conjunto rock, producción colectiva, folklore y ritmos latinos",
    "pricing.group.feature2": "Duración: 90-120 minutos según el curso",
    "pricing.group.feature3": "Grupos de 3-8 estudiantes",
    "pricing.group.feature4": "Rotación entre instrumentos",
    "pricing.group.feature5": "Presentaciones cada 6 meses",
    "pricing.group.feature6": "Ambiente colaborativo",
    "pricing.duration.title": "Opciones de Duración",
    "pricing.duration.30min": "30 Minutos",
    "pricing.duration.30min_desc": "Ideal para principiantes",
    "pricing.duration.45min": "45 Minutos",
    "pricing.duration.45min_desc": "Equilibrio perfecto",
    "pricing.duration.60min": "1 Hora",
    "pricing.duration.60min_desc": "Uso máximo",
    "pricing.cta.title": "¿Listo para comenzar tu viaje musical?",
    "pricing.cta.button": "Inscríbete Ahora",

    // Registration Section
    "registration.title": "Formulario de Inscripción",
    "registration.subtitle": "¡Únete a Academy SON y comienza tu viaje musical hoy mismo!",
    "registration.name_label": "Nombre completo",
    "registration.name_placeholder": "Tu nombre completo",
    "registration.email_label": "Email",
    "registration.email_placeholder": "tu@email.com",
    "registration.phone_label": "Teléfono",
    "registration.phone_placeholder": "Tu número de teléfono",
    "registration.age_label": "Edad",
    "registration.age_placeholder": "Tu edad",
    "registration.level_label": "Nivel musical",
    "registration.level_placeholder": "Selecciona tu nivel",
    "registration.level_beginner": "Principiante",
    "registration.level_intermediate": "Intermedio",
    "registration.level_advanced": "Avanzado",
    "registration.course_label": "Curso deseado",
    "registration.course_placeholder": "Selecciona un curso",
    "registration.course_bass": "Bajo Eléctrico",
    "registration.course_drums": "Batería",
    "registration.course_dj": "DJ",
    "registration.course_ensemble": "Conjunto Grupal",
    "registration.course_guitar": "Guitarra",
    "registration.course_piano": "Piano Moderno",
    "registration.course_production": "Producción Musical",
    "registration.course_xylophone": "Xilófono",
    "registration.duration_label": "Duración deseada",
    "registration.duration_placeholder": "Selecciona la duración",
    "registration.duration_30": "30 minutos",
    "registration.duration_45": "45 minutos",
    "registration.duration_60": "60 minutos",
    "registration.duration_90": "90 minutos",
    "registration.schedule_label": "Horario preferido",
    "registration.schedule_placeholder": "Selecciona un horario",
    "registration.schedule_morning": "Mañana (9:00 - 12:00)",
    "registration.schedule_afternoon": "Tarde (12:00 - 17:00)",
    "registration.schedule_evening": "Noche (17:00 - 20:00)",
    "registration.schedule_weekend": "Fin de semana",
    "registration.schedule_flexible": "Flexible",
    "registration.availability_label": "Disponibilidad en la semana",
    "registration.day_monday": "Lunes",
    "registration.day_tuesday": "Martes",
    "registration.day_wednesday": "Miércoles",
    "registration.day_thursday": "Jueves",
    "registration.day_friday": "Viernes",
    "registration.day_saturday": "Sábado",
    "registration.day_sunday": "Domingo",
    "registration.day_flexible": "Flexible",
    "registration.message_label": "Mensaje o preguntas específicas",
    "registration.message_placeholder":
      "Cuéntanos sobre tus objetivos musicales, experiencia previa, o cualquier pregunta...",
    "registration.submit_button": "Enviar mi solicitud de inscripción",
    "registration.submitting": "Enviando...",
    "registration.next_steps": "Próximos pasos:",
    "registration.step1": "Revisaremos tu solicitud en 24h",
    "registration.step2": "Uno de nuestros asesores te contactará para discutir tus necesidades",
    "registration.step3": "Programaremos tu primera sesión de evaluación gratuita",
    "registration.success_message": "¡Tu solicitud de inscripción ha sido enviada con éxito! Te contactaremos pronto.",
    "registration.error_message": "Ha ocurrido un error. Por favor, inténtalo de nuevo.",

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
      "Oportunidades regulares de presentarse en el escenario durante nuestros eventos regulares y recitales.",

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

    // Testimonials Section
    "testimonials.title": "Testimonios",
    "testimonials.subtitle": "Descubre lo que nuestros estudiantes piensan de su experiencia en la Academia SON",
    "testimonials.years": "años",
    "testimonials.previous": "Testimonios anteriores",
    "testimonials.next": "Testimonios siguientes",
    "testimonials.go_to_page": "Ir a la página",

    // Gallery Section
    "gallery.title": "Galería",
    "gallery.subtitle": "Descubre la atmósfera única de nuestra academia a través de nuestras fotos y videos",
    "gallery.groupClasses": "Clases Grupales",
    "gallery.collaborativeLearning": "Sesiones de aprendizaje colaborativo",
    "gallery.studentPerformances": "Presentaciones Estudiantiles",
    "gallery.recitalsShows": "Recitales y espectáculos",
    "gallery.recordingStudio": "Estudio de Grabación",
    "gallery.behindScenes": "Detrás de escena de las sesiones",
    "gallery.liveEvents": "Eventos en Vivo",
    "gallery.workshopsPerformances": "Talleres y presentaciones",
    "gallery.livePerformancesTitle": "Presentaciones en Vivo",
    "gallery.livePerformancesDesc":
      "Nuestros estudiantes tienen la oportunidad de presentarse en el escenario durante nuestros eventos regulares y recitales.",
    "gallery.recordingStudioTitle": "Estudio de Grabación",
    "gallery.recordingStudioDesc":
      "Equipo profesional para grabar tus creaciones, desde covers simples hasta proyectos originales completos.",

    // Policies Section
    "policies.title": "Políticas y Documentos",
    "policies.subtitle":
      "Descarga nuestras políticas oficiales y documentos importantes para una experiencia transparente",
    "policies.generalPolicies": "Políticas Generales",
    "policies.generalPoliciesDesc": "Reglamentos generales de la academia, código de conducta y procedimientos",
    "policies.paymentPolicies": "Políticas de Pago",
    "policies.paymentPoliciesDesc": "Métodos de pago aceptados, fechas límite y condiciones financieras",
    "policies.cancellationPolicies": "Políticas de Cancelación",
    "policies.cancellationPoliciesDesc": "Condiciones de cancelación, aplazamiento y reembolso de clases",
    "policies.ensemblePolicies": "Políticas de Conjunto",
    "policies.ensemblePoliciesDesc": "Reglamentos específicos para clases grupales y presentaciones",
    "policies.downloadStarted": "Descarga de",
    "policies.demoFile": "iniciada. (Archivo de demostración)",
    "policies.needHelp": "¿Necesitas ayuda con nuestras políticas?",
    "policies.needHelpDesc":
      "Si tienes preguntas sobre nuestras políticas o necesitas aclaraciones, no dudes en contactarnos directamente.",
    "policies.call": "Llamar",
    "policies.contactUs": "Contáctanos",
    "policies.lastUpdate": "Última actualización de políticas: Diciembre 2024",
    "policies.availableInFrench": "Todos los documentos están disponibles en francés",

    // Team Section
    "team.title": "Nuestro",
    "team.team": "Equipo",
    "team.subtitle": "Profesores experimentados y apasionados, reconocidos en otras escuelas de música de Quebec",
    "team.cesar.name": "César Silva",
    "team.cesar.role": "Fundador e Instructor Principal",
    "team.cesar.alt": "César Silva - Fundador e Instructor Principal",
    "team.cesar.specialties": "Especialidades",
    "team.cesar.specialties_desc":
      "Todos los cursos - Guitarra, Piano, Batería, Bajo Eléctrico, Canto, DJ, Producción Musical, Xilófono",
    "team.cesar.education": "Formación Académica",
    "team.cesar.education_desc":
      "Berklee College of Music (USA), Universidad Nacional de Colombia, Université Laval (Canadá)",
    "team.cesar.experience": "Experiencia",
    "team.cesar.experience_desc": "Más de 10 años de enseñanza, incluyendo 2 años en Quebec",
    "team.cesar.approach": "Enfoque",
    "team.cesar.approach_desc": "Combina el dominio técnico con la creatividad y la sensibilidad musical",
    "team.sebastian.name": "Sebastián Rey",
    "team.sebastian.role": "Instructor",
    "team.sebastian.specialties": "Especialidades",
    "team.sebastian.specialties_desc": "Batería, Bajo Eléctrico",
    "team.sebastian.experience": "Experiencia",
    "team.sebastian.experience_desc":
      "Reconocido por su versatilidad y apoyo a estudiantes de todos los niveles en su viaje musical",
    "team.sebastian.quote":
      '"La música es un viaje personal único para cada estudiante. Mi papel es guiarlos con paciencia y pasión."',
    "team.recognition.title": "Reconocimiento Profesional",
    "team.recognition.desc":
      "Facultad reconocida en otras escuelas de música de Quebec, incluyendo Long & McQuade, Cercle de música de Cap Rouge, Sam Gagnon, y más.",

    // FAQ Section
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Encuentra las respuestas a las preguntas más comunes sobre nuestros cursos y servicios",
    "faq.show": "Ver FAQ",
    "faq.hide": "Ocultar FAQ",
    "faq.consultation.title": "Solicitud de Consulta",
    "faq.consultation.show": "Ver formulario",
    "faq.consultation.hide": "Ocultar formulario",
    "faq.consultation.description":
      "¿Tienes preguntas específicas? ¡Solicita una consulta personalizada con nuestros expertos!",
    "faq.consultation.name": "Nombre completo",
    "faq.consultation.name_placeholder": "Tu nombre completo",
    "faq.consultation.email": "Email",
    "faq.consultation.email_placeholder": "tu@email.com",
    "faq.consultation.phone": "Teléfono",
    "faq.consultation.phone_placeholder": "Tu número de teléfono",
    "faq.consultation.course": "Curso de interés",
    "faq.consultation.course_placeholder": "Selecciona un curso",
    "faq.consultation.course_piano": "Piano Moderno",
    "faq.consultation.course_guitar": "Guitarra",
    "faq.consultation.course_voice": "Canto",
    "faq.consultation.course_dj": "DJ",
    "faq.consultation.course_production": "Producción Musical",
    "faq.consultation.course_ensemble": "Conjunto Grupal",
    "faq.consultation.message": "Mensaje",
    "faq.consultation.message_placeholder": "Describe tus preguntas o necesidades específicas...",
    "faq.consultation.submit": "Enviar solicitud",
    "faq.consultation.submitting": "Enviando...",
    "faq.consultation.success": "¡Tu solicitud de consulta ha sido enviada con éxito!",
    "faq.consultation.error": "Ha ocurrido un error. Por favor, inténtalo de nuevo.",

    // FAQ Questions and Answers
    "faq.q1.question": "¿Cuáles son los requisitos previos para comenzar las clases?",
    "faq.q1.answer":
      "¡No se necesitan requisitos previos! Nuestras clases se adaptan a todos los niveles, desde principiante completo hasta músico experimentado. Nuestros profesores trilingües evalúan tu nivel en la primera sesión para personalizar la enseñanza.",
    "faq.q2.question": "¿Cuánto tiempo se necesita para ver progreso?",
    "faq.q2.answer":
      "Los primeros progresos generalmente son visibles desde las primeras 2-3 semanas. Sin embargo, esto depende de tu práctica personal y la frecuencia de las clases. Nuestros estudiantes reportan mejoras significativas después de 2-3 meses de clases regulares.",
    "faq.q3.question": "¿Puedo cambiar de instrumento o curso durante el proceso?",
    "faq.q3.answer":
      "¡Absolutamente! Fomentamos la exploración musical. Puedes cambiar de instrumento o agregar cursos adicionales en cualquier momento. Nuestros paquetes flexibles se adaptan a tus necesidades evolutivas.",
    "faq.q4.question": "¿Cómo funcionan las clases de conjunto grupal?",
    "faq.q4.answer":
      "Las clases de conjunto permiten tocar con otros músicos en rotación de instrumentos. Cada sesión cuesta $25 y culmina con presentaciones formales cada 6 meses. ¡Es una excelente manera de aprender colaboración musical!",
    "faq.q5.question": "¿Qué equipos proporciona la academia?",
    "faq.q5.answer":
      "Proporcionamos todos los instrumentos y equipos profesionales necesarios durante las clases. Para producción musical y DJ, tenemos estudios completamente equipados con material de vanguardia.",
    "faq.q6.question": "¿Ofrecen clases en línea?",
    "faq.q6.answer":
      "Actualmente, nos enfocamos en clases presenciales para ofrecer la mejor experiencia de aprendizaje. Sin embargo, estamos desarrollando opciones híbridas para algunos cursos teóricos.",
    "faq.q7.question": "¿Cómo puedo cancelar o posponer una clase?",
    "faq.q7.answer":
      "Puedes cancelar o posponer una clase hasta 24h antes sin costo. Para políticas detalladas, consulta nuestro documento de políticas disponible para descarga en el sitio.",
    "faq.q8.question": "¿Hay espectáculos o eventos para los estudiantes?",
    "faq.q8.answer":
      "¡Sí! Organizamos presentaciones semestrales para las clases de conjunto, recitales para estudiantes individuales, y eventos comunitarios regulares para celebrar el progreso de nuestros músicos.",
  },
}
