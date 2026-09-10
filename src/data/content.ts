export type Language = 'en' | 'fr';

export const siteConfig = {
  en: {
    projectInitials: ["LÉO", "N"],
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
    ],
    hero: {
      tagline: "Your Rail Data On The Go",
      eyebrow: "THE NEXT-GENERATION",
      headingPart1: "PORTABLE RAILWAY",
      headingPart2: "MEASUREMENT TROLLEY",
      primaryButton: { label: "Request a Demo", href: "/demo" },
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
      subheading: "",
      galleryLabel: "LÉON, Field-Ready, By Design",
      features: [
        {
          id: "EMA-01",
          title: "Core Measurements",
          description: "Delivers accurate track positioning, precise super-elevation (cant) assessment, and reliable L & H gauge clearance verification relative to railway structures — all captured in a single run."
        },
        {
          id: "EMA-02",
          title: "Portability",
          description: "At just 8 kg and foldable down to 90 cm, LÉON is built for easy transport, quick setup, and compact storage on site."
        },
        {
          id: "EMA-03",
          title: "Connectivity",
          description: "Bluetooth data transfer to smartphone or tablet, with real-time visualization and direct Excel export — no cables, no manual synchronization."
        },
        {
          id: "EMA-04",
          title: "Rapid Deployment",
          description: "Fully operational within minutes, requiring no specialized tools or extensive training."
        },
        {
          id: "EMA-05",
          title: "Operator Safety",
          description: "Integrated dead-man safety device, compliant with strict railway safety standards, for continuous operator protection on the track."
        },
        {
          id: "EMA-06",
          title: "Compatibility",
          description: "Designed to integrate with the equipment and software already in use, adapting to existing operational workflows."
        }
      ]
    },
    benefitsSection: {
      eyebrow: "Value Proposition",
      heading: "Why choose LÉON?",
      benefits: [
        { title: "One run, every measurement", description: "Position, cant and gauge captured together — no repeat runs." },
        { title: "Ultra-Lightweight & Portable", description: "Just 8 kg and folds down to 90 cm — light enough to carry, compact enough to store anywhere." },
        { title: "Straight to your phone", description: "Bluetooth results, real time — no cables, no syncing." },
        { title: "Set up in minutes", description: "No tools, no crew. Place, measure, move on." },
        { title: "Operator safety, built in", description: "Rail-compliant dead man's switch. Light weight, low MSD risk." },
        { title: "Advanced tech, fair price", description: "Cutting-edge measurement without the enterprise price tag." },
        { title: "Any Android device", description: "No proprietary hardware, no supplier lock-in." },
        { title: "Designed by rail engineers", description: "Built for the real demands of trackside work." },
        { title: "One team, one contact", description: "Design, manufacturing, maintenance, support — all in-house." },
        { title: "Repairs on your schedule", description: "Standardized parts — your team fixes it, no import delays." },
      ],
    },
    solutionSection: {
      eyebrow: "Our Approach",
      heading: "A solution designed by the field, for the field",
      features: [
        "Railway track maintenance and inspection",
        "Monitoring of heavy mechanical tamping during works",
        "Monitoring of track alignment and geometry",
      ],
      downloadButton: { label: "Download Technical Sheet", href: "/technical-sheet" },
      ctaHeading: "Want a demo? Let's talk",
      ctaButton: { label: "Book A Demo Today", href: "/demo" },
    },
    ctaSection: {
      headlinePart1: "Discover",
      highlightWord: "LÉON",
      headlinePart2: "",
      description: "Talk To Our Team Now!",
      primaryButton: { label: "Request a Demo", href: "/demo" },
      secondaryButton: { label: "Download Technical Sheet", href: "/technical-sheet" }
    },
    aboutPage: {
      eyebrow: "Railway maintenance, reinvented",
      headline: "Light in hand.",
      headlineHighlight: "Sharp in data.",
      lede: "We design lightweight, smartphone-driven measurement tools that give a single operator real autonomy, real-time precision, and zero complexity in the field.",
      approach: {
        eyebrow: "About Us",
        heading: "Railway Maintenance, Reinvented",
        story: {
          title: "Our Story",
          text: "ALIXRAIL was born from a simple observation: existing railway measurement tools are no longer suited to the challenges of today's maintenance work. Designed by rail people, for rail people, our instruments combine lightness and agility, for data that's accurate and easy to use.",
        },
        fieldAgent: {
          title: "Built for the field agent",
          text: "Every ALIXRAIL tool assembles without any tools, operates solo, and connects via Bluetooth to a smartphone or tablet — for real-time measurements and data export from the first minute on site.",
        },
        convictions: [
          { title: "Field-ready", description: "Light and rugged enough to work anywhere on the track, in any railway environment." },
          { title: "Self-sufficient", description: "Smartphone-driven, so one operator measures, records, and shares data without extra hands." },
          { title: "Precise", description: "Real-time data, captured and validated on the spot — trusted the moment it's recorded." },
        ],
      },
      products: {
        eyebrow: "Our products",
        heading: "A product range built for modern rail challenges",
        items: [
          {
            id: "leon",
            name: "LÉON",
            tagline: "Your Rail Data On The Go",
            role: "Track Position & Clearance Gauge Measurement Trolley",
            highlight: "One operator, one pass.",
            description: "Simultaneously measures track position, cant, and left/right clearance gauges across all railway environments.",
            specs: ["8 kg", "Folds to 90 cm", "Integrated dead-man safety device", "Real-time app view", "Direct Excel export"],
            image: "/leon-trolley-three-quarter.jpg",
            color: "#ec634d",
          },
          {
            id: "emma",
            name: "EMMA",
            tagline: "Trust Begins at the Source",
            role: "Track Twist & Geometry Measurement Trolley",
            highlight: "High-precision geometry, on the spot.",
            description: "Measure, record, and validate track geometry in real time from a smartphone — no heavy equipment, no deferred post-processing.",
            specs: ["Under 5 kg", "Cant, twist & odometry on a reference base", "TGR-compliant", "EN 13848 certified"],
            image: "/emma-trolley.jpg",
            color: "#f5a428",
          },
          {
            id: "tom",
            name: "TOM",
            tagline: "Tracking Made Simple",
            role: "Rail Chainage & Field Event Tracking Tool",
            highlight: "The field team's benchmark.",
            description: "Measure rail chainage with precision and log events in seconds via intuitive dropdown menus — all from a single smartphone.",
            specs: ["Auto-timestamped & geotagged", "Zero manual transcription", "Direct export to study systems"],
            image: "/tom-tool.jpg",
            color: "#2fc4c9",
          },
          {
            id: "kat",
            name: "KAT",
            tagline: "Precision Captured Securely",
            role: "Catenary Contact Wire Height & Stagger Measurement",
            highlight: "Safety without disruption.",
            description: "Acquire catenary geometry data safely outside the danger zone — no catenary consignment, no traffic immobilization.",
            specs: ["Motorized rangefinder", "Smartphone-operated", "Real-time video targeting", "Simultaneous height & stagger"],
            image: null,
            color: "#e6377e",
          },
          {
            id: "halo",
            name: "HALO",
            tagline: "Self-reliant. Contact-free.",
            role: "Autonomous Optical Odometry Smart Tool",
            highlight: "Distance you can trust, without touching the rail.",
            description: "Measures odometry — distance and position along the track — using optical sensing instead of a contact wheel, removing wear, slippage, and calibration drift.",
            specs: ["Fully autonomous", "Data sent directly to your phone in real time", "Zero contact with the rail"],
            image: "/halo-odometer.jpg",
            color: "#4fc86a",
          },
        ],
        formatsNote: "All ALIXRAIL products export data in open formats (HTML, ASCII CSV) — fully compatible with your existing infrastructure management systems, with data direct on your phone from the first measurement.",
        comingSoon: "Photography coming soon",
      },
      why: {
        eyebrow: "Why ALIXRAIL",
        heading: "Why ALIXRAIL",
        items: [
          { title: "One team, one contact", description: "Design, manufacturing, maintenance, and support — all in-house." },
          { title: "Any Android device", description: "No proprietary hardware, no supplier lock-in." },
          { title: "Designed by rail engineers", description: "Built for the real demands of trackside work." },
          { title: "Advanced tech, fair price", description: "Cutting-edge measurement without the enterprise price tag." },
          { title: "Repairs on your schedule", description: "Standardized parts — your team fixes it, no import delays." },
          { title: "Built for the field", description: "No tools, no crew, no cables — place, measure, move on." },
        ],
      },
      cta: {
        heading: "Contact us for information",
        description: "Talk to our team about which ALIXRAIL tool fits your track.",
        primaryButton: { label: "Request a Demo", href: "/demo" },
        secondaryButton: { label: "Contact Us", href: "mailto:contact@alixrail.com" },
      },
    },
    footerText: "Railway Maintenance Reinvented",
    navCta: "Request a Demo",
  },
  fr: {
    projectInitials: ["LÉO", "N"],
    navLinks: [
      { label: "À propos", href: "#about" },
      { label: "Fonctionnalités", href: "#features" },
    ],
    hero: {
      tagline: "Vos données ferroviaires en mouvement",
      eyebrow: "NOUVELLE GÉNÉRATION",
      headingPart1: "CHARIOT DE MESURE PORTABLE",
      headingPart2: "POUR VOIE FERRÉE",
      primaryButton: { label: "Demander une démonstration", href: "/demo" },
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
      subheading: "",
      galleryLabel: "LÉON, conçu pour le terrain",
      features: [
        {
          id: "EMA-01",
          title: "Mesures fondamentales",
          description: "Offre un positionnement précis de la voie, une évaluation fiable du dévers (surélévation) et une vérification fiable des gabarits de dégagement L & H par rapport aux structures ferroviaires — le tout en un seul passage."
        },
        {
          id: "EMA-02",
          title: "Portabilité",
          description: "Avec seulement 8 kg et repliable à 90 cm, LÉON est conçu pour un transport facile, une mise en œuvre rapide et un rangement compact sur site."
        },
        {
          id: "EMA-03",
          title: "Connectivité",
          description: "Transfert de données par Bluetooth vers smartphone ou tablette, avec visualisation en temps réel et export direct vers Excel — sans câble, sans synchronisation manuelle."
        },
        {
          id: "EMA-04",
          title: "Déploiement rapide",
          description: "Opérationnel en quelques minutes, sans outil spécialisé ni formation approfondie."
        },
        {
          id: "EMA-05",
          title: "Sécurité de l'opérateur",
          description: "Dispositif de sécurité homme-mort intégré, conforme aux normes de sécurité ferroviaire strictes, pour une protection continue de l'opérateur sur la voie."
        },
        {
          id: "EMA-06",
          title: "Compatibilité",
          description: "Conçu pour s'intégrer aux équipements et logiciels déjà utilisés, en s'adaptant aux flux de travail opérationnels existants."
        }
      ]
    },
    benefitsSection: {
      eyebrow: "Valeur ajoutée",
      heading: "Pourquoi choisir LÉON ?",
      benefits: [
        { title: "Un seul passage, toutes les mesures", description: "Position, dévers et écartement relevés ensemble — sans repasser." },
        { title: "Ultra-léger et portable", description: "Seulement 8 kg et replié à 90 cm — assez léger pour être transporté, assez compact pour être rangé n'importe où." },
        { title: "Directement sur votre téléphone", description: "Résultats en Bluetooth, en temps réel — sans câble, sans synchronisation." },
        { title: "Installé en quelques minutes", description: "Sans outil, sans équipe. Posez, mesurez, avancez." },
        { title: "Sécurité opérateur intégrée", description: "Dispositif d'homme mort conforme au ferroviaire. Léger, risque TMS réduit." },
        { title: "Technologie avancée, prix juste", description: "Une mesure de pointe sans le tarif des grands systèmes." },
        { title: "N'importe quel appareil Android", description: "Aucun matériel propriétaire, aucune dépendance fournisseur." },
        { title: "Conçu par des ingénieurs ferroviaires", description: "Pensé pour les contraintes réelles du travail sur voie." },
        { title: "Une équipe, un interlocuteur", description: "Conception, fabrication, maintenance, support — tout en interne." },
        { title: "Réparations à votre rythme", description: "Pièces standardisées — votre équipe intervient, sans délai d'import." },
      ],
    },
    solutionSection: {
      eyebrow: "Notre approche",
      heading: "Une solution pensée par le terrain, pour le terrain",
      features: [
        "Maintenance et inspection des voies ferrées",
        "Suivi en phase travaux du bourrage mécanique lourd",
        "Surveillance de l'alignement et de la géométrie de la voie",
      ],
      downloadButton: { label: "Télécharger la fiche technique", href: "/technical-sheet" },
      ctaHeading: "Besoin d'une démo ? Parlons-en",
      ctaButton: { label: "Réservez une démo aujourd'hui", href: "/demo" },
    },
    ctaSection: {
      headlinePart1: "Découvrez",
      highlightWord: "LÉON",
      headlinePart2: "",
      description: "Contactez notre équipe maintenant !",
      primaryButton: { label: "Demander une démonstration", href: "/demo" },
      secondaryButton: { label: "Télécharger la fiche technique", href: "/technical-sheet" }
    },
    aboutPage: {
      eyebrow: "La maintenance ferroviaire, réinventée",
      headline: "Léger en main.",
      headlineHighlight: "Précis dans la donnée.",
      lede: "Nous concevons des outils de mesure légers et pilotés par smartphone qui donnent à un seul opérateur une réelle autonomie, une précision en temps réel et zéro complexité sur le terrain.",
      approach: {
        eyebrow: "À propos de nous",
        heading: "La maintenance ferroviaire, réinventée",
        story: {
          title: "Notre histoire",
          text: "ALIXRAIL est née d'un constat simple : les outils de mesure ferroviaire existants ne sont plus adaptés aux enjeux des travaux de maintenance d'aujourd'hui. Conçus par des gens du rail, pour les gens du rail, nos instruments allient légèreté et agilité, pour des données précises et faciles à exploiter.",
        },
        fieldAgent: {
          title: "Conçu pour l'agent de terrain",
          text: "Chaque outil ALIXRAIL s'assemble sans outillage, s'utilise seul et se connecte en Bluetooth à un smartphone ou une tablette — pour des mesures en temps réel et un export de données dès la première minute sur site.",
        },
        convictions: [
          { title: "Prêt pour le terrain", description: "Léger et robuste, pour intervenir partout sur la voie, dans tous les environnements ferroviaires." },
          { title: "Autonome", description: "Piloté par smartphone, pour qu'un seul opérateur mesure, enregistre et partage les données sans renfort." },
          { title: "Précis", description: "Des données en temps réel, capturées et validées sur place — fiables dès l'instant de la mesure." },
        ],
      },
      products: {
        eyebrow: "Nos produits",
        heading: "Une gamme pensée pour les défis ferroviaires actuels",
        items: [
          {
            id: "leon",
            name: "LÉON",
            tagline: "Vos données rail, en mouvement",
            role: "Chariot de mesure de position et de gabarit de dégagement",
            highlight: "Un opérateur, un passage.",
            description: "Mesure simultanément la position de la voie, le dévers et les gabarits de dégagement gauche/droite, dans tous les environnements ferroviaires.",
            specs: ["8 kg", "Se replie à 90 cm", "Dispositif de sécurité homme-mort intégré", "Visualisation en temps réel sur l'application", "Export direct vers Excel"],
            image: "/leon-trolley-three-quarter.jpg",
            color: "#ec634d",
          },
          {
            id: "emma",
            name: "EMMA",
            tagline: "La confiance commence à la source",
            role: "Chariot de mesure de gauche et de géométrie de voie",
            highlight: "Une géométrie de haute précision, sur place.",
            description: "Mesurez, enregistrez et validez la géométrie de la voie en temps réel depuis un smartphone — sans équipement lourd, sans traitement différé.",
            specs: ["Moins de 5 kg", "Dévers, gauche et odométrie sur base de référence", "Conforme TGR", "Certifié EN 13848"],
            image: "/emma-trolley.jpg",
            color: "#f5a428",
          },
          {
            id: "tom",
            name: "TOM",
            tagline: "Le suivi terrain simplifié",
            role: "Outil de suivi du PK et des événements terrain",
            highlight: "La référence des équipes terrain.",
            description: "Mesurez le point kilométrique avec précision et consignez les événements en quelques secondes via des menus déroulants intuitifs — le tout depuis un smartphone.",
            specs: ["Horodatage et géolocalisation automatiques", "Zéro retranscription manuelle", "Export direct vers les systèmes d'étude"],
            image: "/tom-tool.jpg",
            color: "#2fc4c9",
          },
          {
            id: "kat",
            name: "KAT",
            tagline: "La précision, capturée en sécurité",
            role: "Mesure de la hauteur et du désaxement du fil de contact caténaire",
            highlight: "La sécurité sans interruption d'exploitation.",
            description: "Acquérez les données de géométrie caténaire en toute sécurité, hors zone de danger — sans consignation caténaire, ni immobilisation du trafic.",
            specs: ["Télémètre motorisé", "Piloté depuis un smartphone", "Visée vidéo en temps réel", "Hauteur et désaxement simultanés"],
            image: null,
            color: "#e6377e",
          },
          {
            id: "halo",
            name: "HALO",
            tagline: "Autonome. Sans contact.",
            role: "Outil intelligent d'odométrie optique autonome",
            highlight: "Une distance fiable, sans jamais toucher le rail.",
            description: "Mesure l'odométrie — distance et position le long de la voie — par détection optique plutôt que par roue de contact, éliminant l'usure, le glissement et la dérive d'étalonnage.",
            specs: ["Totalement autonome", "Données envoyées directement sur votre téléphone en temps réel", "Zéro contact avec le rail"],
            image: "/halo-odometer.jpg",
            color: "#4fc86a",
          },
        ],
        formatsNote: "Tous les produits ALIXRAIL exportent les données dans des formats ouverts (HTML, ASCII CSV) — pleinement compatibles avec vos systèmes de gestion d'infrastructure existants, avec les données directement sur votre téléphone dès la première mesure.",
        comingSoon: "Photo à venir",
      },
      why: {
        eyebrow: "Pourquoi ALIXRAIL",
        heading: "Pourquoi ALIXRAIL",
        items: [
          { title: "Un seul interlocuteur", description: "Conception, fabrication, maintenance et support — tout en interne." },
          { title: "Tout appareil Android", description: "Pas de matériel propriétaire, pas de dépendance fournisseur." },
          { title: "Conçu par des ingénieurs ferroviaires", description: "Pensé pour les exigences réelles du travail sur voie." },
          { title: "Technologie avancée, prix juste", description: "Une mesure de pointe, sans le tarif des grands comptes." },
          { title: "Réparable à votre rythme", description: "Pièces standardisées — votre équipe répare, sans délai d'importation." },
          { title: "Conçu pour le terrain", description: "Pas d'outillage, pas d'équipe, pas de câbles — on pose, on mesure, on avance." },
        ],
      },
      cta: {
        heading: "Contactez-nous pour plus d'informations",
        description: "Parlez à notre équipe pour identifier l'outil ALIXRAIL adapté à votre voie.",
        primaryButton: { label: "Demander une démonstration", href: "/demo" },
        secondaryButton: { label: "Nous contacter", href: "mailto:contact@alixrail.com" },
      },
    },
    footerText: "La Maintenance Ferroviaire Réinventée",
    navCta: "Demander une démo",
  }
};
