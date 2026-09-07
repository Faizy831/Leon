import { Language } from "./content";

export interface TermsSection {
  heading: string;
  paragraphs?: (string | { tips: string[] })[];
  points?: { point: string; description: string }[];
}

export const termsContent: Record<Language, TermsSection[]> = {
  en: [
    {
      heading: "General Terms and Conditions",
      paragraphs: [
        "You are currently connected to the public website of ALIX / GEXIARAIL. The information and content published on this site are subject to the following general conditions. Your access and use of this website constitute acceptance of all such general conditions.",
        "The purpose of this website is to present the structure of ALIX / GEXIARAIL, its services, and its financial information. Despite the efforts of ALIX / GEXIARAIL, it cannot be guaranteed that this site is free of inaccuracies, typographical errors, or omissions.",
        "The ALIX / GEXIARAIL website contains links to other websites for convenience. The content of these sites is not under the control of ALIX / GEXIARAIL and implies no responsibility or approval by ALIX / GEXIARAIL. The website and its content are protected by intellectual property rights and are the exclusive property of Hello Pomelo.",
        "These general conditions are governed by French law and must be interpreted according to said legislation. Any legal action against ALIX / GEXIARAIL must be initiated in France.",
      ],
    },
    {
      heading: "Personal Data",
      paragraphs: [
        "ALIX / GEXIARAIL is committed to ensuring the highest level of protection for your personal data in accordance with the amended French Data Protection Act and Regulation (EU) 2016/679 (GDPR). Your personal data is collected and processed within the applicable legal framework. For information on personal data protection, you can consult the CNIL website.",
      ],
    },
    {
      heading: "Privacy Policy",
      paragraphs: [
        "The company has implemented a personal data protection policy aligned with legal principles: lawfulness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.",
      ],
    },
    {
      heading: "Purpose – Processing your data",
      paragraphs: [
        "The personal data you provide is processed by the Marketing team of ALIX / GEXIARAIL as Data Controller for strictly internal use. They are used to contact you regarding upcoming events, publications, or commercial outreach.",
        "Regarding B2B information and prospecting, this processing is based on the Legitimate Interest of ALIX / GEXIARAIL.",
        "Regarding B2C commercial prospecting, this processing is based on the consent of the Data Subjects (opt-in).",
      ],
    },
    {
      heading: "Storage and Retention Period",
      paragraphs: [
        "Processed personal data is subject to limited retention. They are kept for three years following their collection or the last contact. Data is stored within the European Union by our provider Ionos and is not transmitted to third parties.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: [
        "In accordance with regulations, you have the right to access, rectify, and delete your personal data. You may also object to the processing of your data.",
        "You can exercise these rights by sending an email to contact@gexiarail.com or at the following address:",
        {
          tips: [
            "ALIX / GEXIARAIL",
            "209 rue Jean Bart",
            "Agora 1B Building",
            "31670 Labège, France",
          ],
        },
        "Your request must be accompanied by proof of identity and will be processed within a maximum period of one month.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "When visiting our site, cookies are placed on your terminal. A cookie is a text file placed in your browser when visiting a site. These files are intended to facilitate navigation. If you do not wish to use cookies, you must configure your browser settings.",
      ],
    },
    {
      heading: "Types of Cookies",
      points: [
        {
          point: "Session cookies",
          description:
            "They remain stored during your browsing session. They help us remember the site's language preference.",
        },
        {
          point: "Audience measurement cookies",
          description:
            "They are used to establish traffic statistics via Google Analytics.",
        },
        {
          point: "Third-party cookies",
          description:
            "Our site contains links to other websites that use their own cookies.",
        },
      ],
    },
  ],
  fr: [
    {
      heading: "Conditions générales",
      paragraphs: [
        "Vous êtes actuellement connecté au site Web public de ALIX / GEXIARAIL. Les informations et contenus qui y sont publiés sont soumis aux conditions générales suivantes et votre accès au présent site Web, ainsi que votre utilisation de ce site, valent acceptation de l’ensemble des dites conditions générales.",
        "Le but de ce site web est de présenter la structure de ALIX / GEXIARAIL, ses services ainsi que ses informations financières. Malgré les efforts de ALIX / GEXIARAIL il ne peut être garanti que ce site soit exempt d’inexactitudes, d’erreurs typographiques ou d’omissions.",
        "Le site ALIX / GEXIARAIL contient des liens vers d’autres sites web par souci de praticité d’usage. Le contenu de ces sites ne relève pas du contrôle de ALIX / GEXIARAIL et n’implique aucune responsabilité ni approbation de la part de ALIX / GEXIARAIL. Le site web de ALIX / GEXIARAIL et son contenu est protégé par les droits de propriété intellectuelle et est la propriété exclusive de Hello Pomelo.",
        "Les présentes conditions générales sont régies par la législation française et doivent être interprétées selon ladite législation. Toute action en justice à l’encontre de ALIX / GEXIARAIL doit être engagée en France.",
      ],
    },
    {
      heading: "Données Personnelles",
      paragraphs: [
        "ALIX / GEXIARAIL s’engage à assurer le meilleur niveau de protection à vos données personnelles en conformité avec la loi Informatique et Libertés modifiée en France et avec le règlement (UE) 2016/679 du Parlement européen et du Conseil. Vos données personnelles sont ainsi collectées et traitées dans le respect du cadre légal applicable. Pour toute information sur la protection des données personnelles, vous pouvez consulter le site de la Commission Nationale de l’Informatique et des Libertés.",
      ],
    },
    {
      heading: "Politique de protection de données personnelles",
      paragraphs: [
        "L’entreprise a mis en œuvre une politique relative à la protection des données à caractère personnel en adéquation avec les principes issus du cadre légal : licéité, transparence et loyauté du traitement, finalité explicite et légitime, pertinence et proportionnalité des données collectées, durée de conservation des données limitée, sécurité et confidentialité des données et respect des droits des personnes.",
      ],
    },
    {
      heading: "Finalité – Traitement de vos données",
      paragraphs: [
        "Les données personnelles que vous nous communiquez sont traitées par l’équipe Marketing de ALIX / GEXIARAIL en tant que Responsable du Traitement dans le cadre d’un usage strictement interne. Elles sont utilisées dans le but de vous contacter pour de prochains évènements organisés par ALIX / GEXIARAIL, pour vous adresser des publications ou des sollicitations commerciales.",
        "Concernant les démarches d’information et de prospection dans un cadre B2B, ce traitement se fonde sur l’Intérêt Légitime de ALIX / GEXIARAIL.",
        "Concernant les démarches d’information et de prospection commerciale dans un cadre B2C, ce traitement se fonde sur le consentement des Personnes Concernées (opt-in).",
      ],
    },
    {
      heading: "Stockage et durée de conservation",
      paragraphs: [
        "Les données personnelles traitées font l’objet d’une conservation limitée. Elles sont conservées pendant les trois années suivant leur collecte ou suivant le dernier contact avec la personne concernée. Les données sont stockées sur le territoire de l’Union Européenne par notre prestataire Ionos et ne sont transmises à aucun tiers.",
      ],
    },
    {
      heading: "Vos droits",
      paragraphs: [
        "Conformément à la réglementation, vous disposez d’un droit d’accès, de rectification et d’effacement sur vos données personnelles. Vous pouvez également vous opposer au traitement des données vous concernant.",
        "Vous pouvez exercer ces droits en adressant un courrier électronique à contact@gexiarail.com ou à l’adresse suivante :",
        {
          tips: [
            "ALIX / GEXIARAIL",
            "209 rue Jean Bart",
            "Bâtiment Agora 1B",
            "31670 Labège, France",
          ],
        },
        "Votre demande doit être accompagnée d’un justificatif d’identité et sera traitée dans un délai maximum d’un mois.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Lors de la consultation de notre site, des cookies sont déposés sur votre terminal. Un cookie est un fichier texte déposé dans votre navigateur lors de la visite d’un site. Ces fichiers ont pour but de vous faciliter la navigation. Si vous ne souhaitez pas utiliser de cookies, vous devez configurer les paramètres de votre navigateur.",
      ],
    },
    {
      heading: "Types de cookies",
      points: [
        {
          point: "Cookies de session",
          description:
            "Ils restent stockés durant votre session de navigation. Ils nous servent à mémoriser la langue d’utilisation du site.",
        },
        {
          point: "Cookies de mesure d’audience",
          description:
            "Ils servent à établir des statistiques de fréquentation via Google Analytics.",
        },
        {
          point: "Cookies tiers",
          description:
            "Notre site contient des liens renvoyant vers d’autres sites qui utilisent leurs propres cookies.",
        },
      ],
    },
  ],
};
