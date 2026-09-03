export type Language = 'en' | 'fr';

export const siteConfig = {
  en: {
    projectInitials: ["EMM", "A"],
    navLinks: [
      { label: "Features", href: "#features" },
      { label: "Value Proposition", href: "#value" },
      { label: "Standard", href: "#standard" },
    ],
    hero: {
      eyebrow: "Railway Track Gauge and Position Measuring Trolley",
      headlinePart1: "The Next-Generation",
      headlinePart2: "Portable Railway Measurement",
      highlightWord: "Trolley",
      primaryButton: { label: "Request a Demo", href: "#contact" },
      secondaryButton: { label: "View Features", href: "#features" },
      gallery: [
        { src: "/leon-trolley-three-quarter.jpg", alt: "The LÉON measuring trolley seen from a three-quarter angle" },
        { src: "/leon-trolley-side-profile.jpg", alt: "Side profile of the LÉON trolley deployed at full measuring length" },
        { src: "/leon-trolley-folded.jpg", alt: "The LÉON trolley folded upright for transport" },
      ],
      stats: [
        { label: "Weight", value: "< 5 kg" },
        { label: "Export", value: "HTML · CSV" },
        { label: "Interface", value: "Smartphone" },
        { label: "Standard", value: "EN 13848" },
      ]
    },
    featuresSection: {
      eyebrow: "Key Features",
      heading: "Everything you need to measure, nothing to carry",
      subheading: "Each survey combines metrological precision and ease of use, designed for the single operator on the track.",
      features: [
        {
          id: "EMA-01",
          title: "Time-stamped field entry",
          description: "Events and operator remarks are recorded in real time and integrated into the measurement report, for complete traceability."
        },
        {
          id: "EMA-02",
          title: "Continuous localization",
          description: "Distance traveled from the starting point, time-stamping, and automatic identification of the trolley throughout the journey."
        },
        {
          id: "EMA-03",
          title: "Open format export",
          description: "Data exported in HTML and ASCII CSV, interoperable with existing infrastructure management systems."
        },
        {
          id: "EMA-04",
          title: "Precision measurement",
          description: "Cant, twist, and odometry recorded on a reference base, in accordance with TGR (Track Geometry Recorder) requirements."
        },
        {
          id: "EMA-05",
          title: "Real-time visualization",
          description: "Kilometric location, cant, and twist displayed graphically, live, on the smartphone interface."
        },
        {
          id: "EMA-06",
          title: "Designed for the field",
          description: "Lightweight device, less than 5 kg, without computer or heavy logistics to deploy."
        }
      ]
    },
    valueSection: {
      eyebrow: "Value Proposition",
      heading: "Reliable data, available immediately",
      subheading: "EMMA shortens the time between measurement and decision, on site as well as in operation.",
      values: [
        {
          num: "01",
          title: "Derailment prevention",
          description: "Early detection of critical geometric defects, during the construction phase or when returning the tracks."
        },
        {
          num: "02",
          title: "Immediate post-work control",
          description: "Reliable restitution of the track at the end of an intervention, without waiting time for the results."
        },
        {
          num: "03",
          title: "Autonomous operation",
          description: "A smartphone interface is enough — no computer, no heavy logistics to mobilize."
        }
      ]
    },
    benefitsSection: {
      eyebrow: "Why choose LÉON",
      heading: "Why choose LÉON?",
      tagline: "Track geometry measurement, reinvented",
      benefits: [
        { title: "One pass, every measurement", description: "Position, cant and gauge captured together — no repeat runs." },
        { title: "8 kg, folds to 90 cm", description: "One agent carries, sets up and packs it away — solo." },
        { title: "Straight to your tablet", description: "Bluetooth results, real time — no cables, no syncing." },
        { title: "Set up in minutes", description: "No tools, no crew. Place, measure, move on." },
        { title: "Operator safety, built in", description: "Rail-compliant dead man's switch. Light weight, low MSD risk." },
        { title: "Advanced tech, fair price", description: "Cutting-edge measurement without the enterprise price tag." },
        { title: "Any Android device", description: "No proprietary hardware, no supplier lock-in." },
        { title: "Designed by rail engineers", description: "Built for the real demands of trackside work." },
        { title: "One team, one contact", description: "Design, manufacturing, maintenance, support — all in-house." },
        { title: "Repairs on your schedule", description: "Standardized parts — your team fixes it, no import delays." },
      ],
      footerMessagePart1: "See LÉON measure a full track section in ",
      footerMessageHighlight: "under 60 seconds",
      footerMessagePart2: " — live at our stand.",
      footerButton: { label: "Request a demo", href: "#contact" },
      footerButtonNote: "Book a private walkthrough",
    },
    complianceSection: {
      eyebrow: "Normative compliance",
      heading: "Complies with European standard EN 13848",
      description: "EMMA meets the requirements of the European standard for track geometry measurement systems.",
      badgeTop: "EN",
      badgeBottom: "13848"
    },
    ctaSection: {
      headlinePart1: "Switch to",
      highlightWord: "real-time",
      headlinePart2: "measurement",
      description: "Talk to our team to evaluate EMMA on your network or your next construction site.",
      primaryButton: { label: "Request a Demo", href: "#contact" },
      secondaryButton: { label: "Download Datasheet", href: "#" }
    },
    footerText: "Track Geometry and Twist Measurement Trolley",
    navCta: "Request a Demo",
  },
  fr: {
    projectInitials: ["EMM", "A"],
    navLinks: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Valeur ajoutée", href: "#value" },
      { label: "Conformité", href: "#standard" },
    ],
    hero: {
      eyebrow: "Chariot de mesure — géométrie de voie",
      headlinePart1: "Mesurez la voie",
      headlinePart2: "Validez sur le",
      highlightWord: "terrain",
      primaryButton: { label: "Demander une démonstration", href: "#contact" },
      secondaryButton: { label: "Voir les fonctionnalités", href: "#features" },
      gallery: [
        { src: "/leon-trolley-three-quarter.jpg", alt: "Le chariot de mesure LÉON vu de trois quarts" },
        { src: "/leon-trolley-side-profile.jpg", alt: "Profil du chariot LÉON déployé à sa longueur de mesure" },
        { src: "/leon-trolley-folded.jpg", alt: "Le chariot LÉON replié à la verticale pour le transport" },
      ],
      stats: [
        { label: "Poids", value: "< 5 kg" },
        { label: "Export", value: "HTML · CSV" },
        { label: "Interface", value: "Smartphone" },
        { label: "Norme", value: "EN 13848" },
      ]
    },
    featuresSection: {
      eyebrow: "Fonctionnalités clés",
      heading: "Tout ce qu'il faut mesurer, rien à transporter",
      subheading: "Chaque relevé combine précision métrologique et simplicité d'usage, pensé pour l'opérateur seul sur la voie.",
      features: [
        {
          id: "EMA-01",
          title: "Saisie terrain horodatée",
          description: "Événements et remarques opérateur consignés en temps réel et intégrés au rapport de mesure, pour une traçabilité complète."
        },
        {
          id: "EMA-02",
          title: "Localisation continue",
          description: "Distance parcourue depuis le point de départ, horodatage et identification automatique du chariot tout au long du parcours."
        },
        {
          id: "EMA-03",
          title: "Export en formats ouverts",
          description: "Données exportées en HTML et ASCII CSV, interopérables avec les systèmes de gestion d'infrastructure existants."
        },
        {
          id: "EMA-04",
          title: "Mesure de précision",
          description: "Dévers, gauches et odométrie relevés sur base de référence, conformément aux exigences TGR (Track Geometry Recorder)."
        },
        {
          id: "EMA-05",
          title: "Visualisation en temps réel",
          description: "Localisation kilométrique, dévers et gauches affichés graphiquement, en direct, sur l'interface smartphone."
        },
        {
          id: "EMA-06",
          title: "Conçu pour le terrain",
          description: "Dispositif léger, moins de 5 kg, sans ordinateur ni logistique lourde à déployer."
        }
      ]
    },
    valueSection: {
      eyebrow: "Valeur ajoutée",
      heading: "Une donnée fiable, disponible tout de suite",
      subheading: "EMMA raccourcit le délai entre la mesure et la décision, sur chantier comme en exploitation.",
      values: [
        {
          num: "01",
          title: "Prévention des déraillements",
          description: "Détection précoce des défauts géométriques critiques, en phase chantier ou lors de la restitution des voies."
        },
        {
          num: "02",
          title: "Contrôle post-travaux immédiat",
          description: "Restitution fiable de la voie dès la fin d'une intervention, sans délai d'attente pour les résultats."
        },
        {
          num: "03",
          title: "Opération autonome sur le terrain",
          description: "Une interface smartphone suffit — sans ordinateur, sans logistique lourde à mobiliser."
        }
      ]
    },
    benefitsSection: {
      eyebrow: "Pourquoi choisir LÉON",
      heading: "Pourquoi choisir LÉON ?",
      tagline: "La mesure de géométrie de voie réinventée",
      benefits: [
        { title: "Un seul passage, toutes les mesures", description: "Position, dévers et écartement relevés ensemble — sans repasser." },
        { title: "8 kg, replié à 90 cm", description: "Un seul agent le transporte, l'installe et le range — en autonomie." },
        { title: "Directement sur votre tablette", description: "Résultats en Bluetooth, en temps réel — sans câble, sans synchronisation." },
        { title: "Installé en quelques minutes", description: "Sans outil, sans équipe. Posez, mesurez, avancez." },
        { title: "Sécurité opérateur intégrée", description: "Dispositif d'homme mort conforme au ferroviaire. Léger, risque TMS réduit." },
        { title: "Technologie avancée, prix juste", description: "Une mesure de pointe sans le tarif des grands systèmes." },
        { title: "N'importe quel appareil Android", description: "Aucun matériel propriétaire, aucune dépendance fournisseur." },
        { title: "Conçu par des ingénieurs ferroviaires", description: "Pensé pour les contraintes réelles du travail sur voie." },
        { title: "Une équipe, un interlocuteur", description: "Conception, fabrication, maintenance, support — tout en interne." },
        { title: "Réparations à votre rythme", description: "Pièces standardisées — votre équipe intervient, sans délai d'import." },
      ],
      footerMessagePart1: "Voyez LÉON mesurer une section complète de voie en ",
      footerMessageHighlight: "moins de 60 secondes",
      footerMessagePart2: " — en direct sur notre stand.",
      footerButton: { label: "Demander une démonstration", href: "#contact" },
      footerButtonNote: "Réservez une présentation privée",
    },
    complianceSection: {
      eyebrow: "Conformité normative",
      heading: "Conforme à la norme européenne EN 13848",
      description: "EMMA répond aux exigences de la norme européenne relative aux systèmes de mesure de la géométrie de voie.",
      badgeTop: "EN",
      badgeBottom: "13848"
    },
    ctaSection: {
      headlinePart1: "Passez à la mesure",
      highlightWord: "en temps réel",
      headlinePart2: "",
      description: "Échangez avec notre équipe pour évaluer EMMA sur votre réseau ou votre prochain chantier.",
      primaryButton: { label: "Demander une démonstration", href: "#contact" },
      secondaryButton: { label: "Télécharger la fiche technique", href: "#" }
    },
    footerText: "Chariot de mesure des gauches et de la géométrie de voie",
    navCta: "Demander une démo",
  }
};
