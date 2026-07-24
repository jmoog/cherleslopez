// ─────────────────────────────────────────────────────────────────────────
// Pages SERVICES « [prestation] en Haute-Garonne (31) ».
// Le contenu de chaque service vit ici ; le gabarit commun est
// src/components/ServicePage.astro ; chaque page src/pages/<slug>.astro
// se contente d'importer le service correspondant.
// Slugs repris à l'identique du site en production (préservation SEO).
// ─────────────────────────────────────────────────────────────────────────

export interface ServiceSection {
  titre: string;
  paras?: string[];
  liste?: string[];
  listeTitre?: string;
  img?: { src: string; alt: string };
  inverse?: boolean;
}

export interface ServicePage {
  slug: string; // ex : 'renovation-de-toiture-en-haute-garonne-31'
  title: string;
  description: string;
  h1: string;
  sousTitre: string;
  introImg: { src: string; alt: string };
  intro: string[];
  sections: ServiceSection[];
  points: string[];
  cta: { titre: string; texte: string };
  galerie?: { titre: string; photos: { src: string; alt: string }[] };
  ctaImg?: { src: string; alt: string };
  titrePoints?: string;
}

export const SERVICES: ServicePage[] = [
  // ── 1. RÉNOVATION ───────────────────────────────────────────────────────
  {
    slug: 'renovation-de-toiture-en-haute-garonne-31',
    title: 'Rénovation de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez, artisan couvreur en Haute-Garonne, rénove les toitures anciennes et abîmées : diagnostic, remplacement des matériaux, garantie décennale. Devis gratuit.",
    h1: 'Rénovation de toiture en Haute-Garonne (31)',
    sousTitre: 'Redonnez une seconde vie à votre toit',
    titrePoints: 'Pourquoi me confier la rénovation ou le remplacement de votre toiture',
    introImg: { src: '/images/photos/placeholder-carte-1.webp', alt: "Rénovation de toiture par Charles Lopez en Haute-Garonne" },
    intro: [
      "En tant que propriétaire d'une maison en Haute-Garonne, il est indispensable de veiller à la qualité et au bon état de votre toiture. <a href=\"/\">artisan couvreur expérimenté</a>, je rénove les toitures anciennes et modernes dans tout le département.",
      "La <strong>rénovation complète de toiture</strong>, c'est le remplacement des matériaux usagés ou détériorés, la mise à niveau de la charpente si besoin, la modification de la pente : tout est mis en œuvre pour rendre votre toiture comme neuve.",
    ],
    sections: [
      {
        titre: 'Le diagnostic avant toute rénovation',
        paras: [
          "Avant d'entreprendre la rénovation de votre toiture, je commence par un diagnostic complet pour évaluer l'état général du toit, déterminer les travaux nécessaires et établir un devis adapté à vos besoins.",
        ],
        listeTitre: 'Le diagnostic prend en compte :',
        liste: [
          "L'étanchéité de la couverture (infiltrations, fuites, dégradation des matériaux)",
          'La solidité de la charpente (déformations, fissures, fragilités)',
          'La qualité des fixations (crochets, liteaux)',
          'Les éléments de zinguerie à réparer ou remplacer (gouttières, rives, noues)',
        ],
        img: { src: '/images/photos/chantier-01.webp', alt: "Diagnostic de toiture avant rénovation" },
      },
      {
        titre: 'Comment se déroule votre rénovation',
        paras: [
          "<strong>1. Contact et rendez-vous</strong> — un premier échange téléphonique, puis une visite sur place. <strong>2. Diagnostic et devis gratuit</strong> — état précis de la toiture et chiffrage détaillé. <strong>3. Réalisation des travaux</strong> — dans le respect des normes en vigueur et de l'esthétique du bâtiment. <strong>4. Contrôle qualité et garantie</strong> — vérification minutieuse en fin de chantier et garantie décennale.",
          "L'entretien régulier de votre toiture étant primordial, je reste à votre disposition pour des interventions ponctuelles ou des contrats d'entretien annuels.",
        ],
        img: { src: '/images/photos/chantier-02.webp', alt: "Rénovation de toiture en cours en Haute-Garonne" },
        inverse: true,
      },
      {
        titre: 'Rénovation des toitures anciennes en tuiles romanes',
        paras: [
          "La Haute-Garonne possède un riche patrimoine bâti où les toitures en tuiles romanes sont très présentes, notamment dans le quartier historique de Toulouse et les villages alentours. J'attache une importance particulière à préserver ce patrimoine et ce savoir-faire ancestral, avec plusieurs chantiers significatifs réalisés ces dernières années.",
        ],
      },
    ],
    points: [
      'Diagnostic complet et conseils personnalisés avant travaux.',
      'Remplacement des matériaux usagés, reprise de charpente et de zinguerie.',
      'Travaux réalisés dans les règles de l’art, avec équipements de sécurité (EPI).',
      'Garantie décennale et responsabilité civile professionnelle.',
      'Devis gratuit et détaillé, déplacement offert dans toute la Haute-Garonne.',
    ],
    cta: {
      titre: 'Un projet de rénovation de toiture ?',
      texte:
        "Décrivez-moi votre toiture : je passe faire le diagnostic, je vous conseille la solution adaptée et je vous remets un devis gratuit et détaillé. Déplacement offert dans toute la Haute-Garonne.",
    },
  },

  // ── 2. RÉPARATION ───────────────────────────────────────────────────────
  {
    slug: 'reparation-de-toiture-en-haute-garonne-31',
    title: 'Réparation de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez, couvreur en Haute-Garonne, intervient rapidement pour réparer votre toit : tuiles, faîtage, fuites, gouttières. Diagnostic et devis gratuits.",
    h1: 'Réparation de toiture en Haute-Garonne (31)',
    sousTitre: 'Optimisez la durée de vie de votre toit',
    titrePoints: 'Pourquoi me confier la réparation de votre toiture',
    introImg: { src: '/images/photos/placeholder-carte-2.webp', alt: "Réparation de toiture par Charles Lopez" },
    intro: [
      "La réparation de toiture est une nécessité pour les propriétaires de maisons ou d'immeubles en Haute-Garonne. Les intempéries et le temps causent des dommages qui entraînent fuites et problèmes d'isolation.",
      "Pour éviter ces désagréments et assurer la pérennité de votre bien, <a href=\"/\">couvreur expérimenté</a>, je répare votre toiture et j'interviens rapidement dans tout le département.",
    ],
    sections: [
      {
        titre: 'Les signes qui doivent vous alerter',
        listeTitre: 'Plusieurs indices peuvent révéler un problème sur votre toit :',
        liste: [
          'Traces brunes ou auréoles au plafond',
          'Humidité constante sur les murs intérieurs ou extérieurs',
          'Peinture cloquée ou décollée',
          'Infiltrations ou écoulements visibles',
          'Pourriture des éléments sous la toiture (charpente, isolant)',
        ],
        paras: [
          "Dès que vous repérez l'un de ces signes, il est indispensable de réagir rapidement pour éviter que les dégâts ne s'aggravent.",
        ],
        img: { src: '/images/photos/chantier-03.webp', alt: "Repérage d'un défaut sur une toiture" },
      },
      {
        titre: 'Un diagnostic précis avant réparation',
        paras: [
          "La première étape est un diagnostic précis de l'état de votre toiture. Je pose les bonnes questions : date de construction ou de rénovation, type de couverture (tuiles, ardoises, zinc), présence d'un système d'évacuation des eaux pluviales adéquat.",
          "Cette analyse permet de définir les zones prioritaires en tenant compte de la vétusté des matériaux, de l'exposition aux intempéries et d'éventuelles malfaçons antérieures. Je procède ensuite au remplacement des éléments abîmés, à la reprise des joints et soudures et à la remise en état des évacuations.",
        ],
        img: { src: '/images/photos/chantier-04.webp', alt: "Réparation de tuiles sur une toiture" },
        inverse: true,
      },
    ],
    points: [
      'Intervention rapide en cas de fuite ou de tuiles endommagées.',
      'Réparation du faîtage, des tuiles, des noues et de la zinguerie.',
      'Reprise des joints, soudures et systèmes d’évacuation des eaux.',
      'Garantie décennale et responsabilité civile professionnelle.',
      'Diagnostic et devis gratuits, déplacement offert.',
    ],
    cta: {
      titre: 'Une réparation de toiture à prévoir ?',
      texte:
        "Fuite, tuiles cassées, faîtage abîmé : j'interviens rapidement en Haute-Garonne pour un diagnostic et un devis gratuits. Contactez-moi dès les premiers signes.",
    },
  },

  // ── 3. GOUTTIÈRES ───────────────────────────────────────────────────────
  {
    slug: 'pose-et-remplacement-de-gouttiere-31',
    title: 'Pose et remplacement de gouttières en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez pose et remplace vos gouttières en Haute-Garonne : aluminium, zinc, PVC, cuivre. Protégez votre maison des infiltrations. Devis gratuit.",
    h1: 'Pose & remplacement de gouttières en Haute-Garonne (31)',
    sousTitre: 'Protégez durablement votre maison des eaux de pluie',
    titrePoints: 'Pourquoi me confier la pose de vos gouttières',
    introImg: { src: '/images/photos/placeholder-carte-3.webp', alt: "Pose de gouttières par Charles Lopez, artisan couvreur" },
    intro: [
      "Les gouttières sont indispensables pour protéger votre maison des intempéries : elles collectent et évacuent les eaux de pluie et préviennent les infiltrations et les problèmes d'humidité.",
      "<a href=\"/\">Votre couvreur</a>, je pose et remplace vos <strong>gouttières</strong> en Haute-Garonne, sur bâtiments anciens comme récents.",
    ],
    sections: [
      {
        titre: 'Pourquoi installer ou remplacer vos gouttières',
        listeTitre: 'Au-delà de l’esthétique, des gouttières en bon état vous apportent :',
        liste: [
          'La protection des murs et des fondations contre l’humidité',
          'La prévention des infiltrations dans les combles',
          'Une meilleure esthétique de la façade',
          'Le respect des normes de sécurité',
          'De la sérénité face aux intempéries',
        ],
        paras: [
          "Il est temps d'intervenir en cas de gouttières fissurées, trouées ou déformées, de débordements fréquents, d'accumulation de mousse et de débris, de traces d'humidité sur les murs, ou dans le cadre d'une rénovation de toiture.",
        ],
        img: { src: '/images/photos/placeholder-photo-4.webp', alt: "Gouttière en zinc posée par Charles Lopez" },
      },
      {
        titre: 'Quel matériau choisir pour vos gouttières',
        paras: [
          "<strong>Aluminium</strong> : léger, résistant à la corrosion, nombreux coloris et peu d'entretien. <strong>Zinc</strong> : esthétique traditionnelle, très durable, idéal sur les bâtiments anciens. <strong>PVC</strong> : léger et économique, facile à poser. <strong>Cuivre</strong> : matériau noble à la durée de vie exceptionnelle.",
          "Je vous conseille le matériau le mieux adapté à votre habitation, à son style et à votre budget, puis j'assure une pose soignée dans le respect des normes.",
        ],
        img: { src: '/images/photos/gouttieres-aluminium.webp', alt: "Gouttières en aluminium posées par Charles Lopez en Haute-Garonne" },
        inverse: true,
      },
    ],
    points: [
      'Pose et remplacement de gouttières aluminium, zinc, PVC ou cuivre.',
      'Conseil sur le matériau adapté à votre maison et à votre budget.',
      'Travaux de zinguerie associés (rives, noues, descentes).',
      'Garantie décennale et responsabilité civile professionnelle.',
      'Devis gratuit et déplacement offert dans toute la Haute-Garonne.',
    ],
    cta: {
      titre: 'Des gouttières à poser ou à remplacer ?',
      texte:
        "Débordements, gouttières fissurées ou projet neuf : je vous conseille le bon matériau et je vous remets un devis gratuit. Déplacement offert en Haute-Garonne.",
    },
  },

  // ── 4. NETTOYAGE / DÉMOUSSAGE ───────────────────────────────────────────
  {
    slug: 'nettoyage-de-toiture-en-haute-garonne-31',
    title: 'Nettoyage et démoussage de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez, spécialiste du nettoyage de toiture en Haute-Garonne : démoussage, brossage manuel, traitement hydrofuge. Devis gratuit.",
    h1: 'Nettoyage et démoussage de toiture en Haute-Garonne (31)',
    sousTitre: 'Prolongez la durée de vie de votre couverture',
    titrePoints: 'Pourquoi me confier le nettoyage de votre toiture',
    introImg: { src: '/images/photos/nettoyage-avant-1.webp', alt: "Tuiles canal encrassées et satellites avant nettoyage, en Haute-Garonne" },
    intro: [
      "La toiture protège votre maison contre les intempéries mais se dégrade avec le temps : elle se salit et se recouvre de mousses et de lichens qui altèrent son aspect, sa résistance et son étanchéité.",
      "Un <strong>nettoyage régulier</strong> préserve son état et prolonge sa durée de vie. <a href=\"/\">spécialiste du nettoyage</a> et du démoussage de toiture, j'interviens en Haute-Garonne depuis plus de 10 ans.",
    ],
    sections: [
      {
        titre: 'Pourquoi nettoyer sa toiture',
        paras: [
          "Les accumulations de végétaux et de pollution causent des dégâts importants : infiltrations d'eau, fissures des tuiles, perte de performance énergétique et dégradation esthétique.",
          "Un nettoyage régulier prévient les réparations coûteuses, améliore le confort thermique et valorise votre patrimoine. L'opération est recommandée au moins une fois par an, au printemps ou à l'automne.",
        ],
        img: { src: '/images/photos/nettoyage-tuiles-sales.webp', alt: "Tuiles canal encrassées avant nettoyage, en Haute-Garonne" },
      },
      {
        titre: 'Les méthodes de nettoyage',
        paras: [
          "<strong>À l'eau</strong> (basse ou haute pression) : méthode simple et écologique pour décoller mousses et salissures. <strong>Chimique</strong> : application de produits anti-mousse fongicides, efficace et durable. <strong>Mécanique</strong> : brossage manuel adapté aux toitures très sales, qui demande prudence et savoir-faire.",
          "Un <strong>traitement hydrofuge</strong> est conseillé en finition pour renforcer la protection. J'adapte la méthode et les produits à votre type de toiture.",
        ],
        img: { src: '/images/photos/nettoyage-traitement.webp', alt: "Application d'un traitement hydrofuge après nettoyage de toiture" },
        inverse: true,
      },
    ],
    points: [
      'Démoussage, brossage manuel et nettoyage adapté à votre toiture.',
      'Traitement hydrofuge de finition pour une protection durable.',
      'Produits adaptés aux tuiles, ardoises, zinc et fibrociment.',
      'Garantie décennale et devis gratuit.',
      'Intervention dans toute la Haute-Garonne, déplacement offert.',
    ],
    cta: {
      titre: 'Une toiture à nettoyer et démousser ?',
      texte:
        "Mousses, lichens, toiture qui ternit : je redonne de l'éclat à votre toit et le protège durablement. Devis gratuit, déplacement offert en Haute-Garonne.",
    },
    galerie: {
      titre: 'Quelques nettoyages et démoussages réalisés',
      photos: [
        { src: '/images/photos/nettoyage-action.webp', alt: 'Nettoyage de toiture en cours par Charles Lopez' },
        { src: '/images/photos/nettoyage-avant-2.webp', alt: "Tuiles canal salies autour d'une antenne satellite, avant démoussage" },
      ],
    },
    ctaImg: { src: '/images/photos/placeholder-photo-1.webp', alt: 'Toiture propre et entretenue en Haute-Garonne' },
  },

  // ── 5. ÉTANCHÉITÉ ───────────────────────────────────────────────────────
  {
    slug: 'etancheite-de-toiture-en-haute-garonne-31',
    title: 'Étanchéité de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez, artisan couvreur en Haute-Garonne, assure l'étanchéité de votre toit et prévient les infiltrations. Diagnostic et devis gratuits.",
    h1: 'Étanchéité de toiture en Haute-Garonne (31)',
    sousTitre: 'Une toiture parfaitement protégée des infiltrations',
    titrePoints: "Pourquoi me confier l'étanchéité de votre toiture",
    introImg: { src: '/images/photos/placeholder-carte-5.webp', alt: "Étanchéité de toiture par Charles Lopez" },
    intro: [
      "L'étanchéité de la toiture est essentielle : une mauvaise étanchéité entraîne des infiltrations d'eau et endommage la structure du bâtiment.",
      "<a href=\"/\">artisan couvreur</a>, j'assure l'étanchéité de votre toiture partout en Haute-Garonne.",
    ],
    sections: [
      {
        titre: "Pourquoi l'étanchéité est primordiale",
        paras: [
          "La toiture protège l'intérieur des intempéries et assure l'isolation thermique. Une toiture mal étanche peut occasionner de lourds dégâts.",
        ],
        listeTitre: 'Les conséquences d’un défaut d’étanchéité :',
        liste: [
          'Détérioration de la charpente',
          'Infiltrations et taches d’humidité sur les murs, plafonds ou sols',
          'Vulnérabilité face aux vents violents',
          'Diminution du confort et de l’efficacité énergétique',
        ],
        img: { src: '/images/photos/chantier-07.webp', alt: "Contrôle de l'étanchéité d'une toiture" },
      },
      {
        titre: 'Entretenir et vérifier son étanchéité',
        paras: [
          "Maintenir l'étanchéité passe par un entretien régulier : inspection visuelle de la toiture, vérification de l'isolation thermique et, au moindre doute, l'intervention d'un professionnel.",
          "Je mets mon expérience à votre service : disponibilité, sérieux, devis précis et conseil personnalisé pour garantir la qualité des travaux.",
        ],
        img: { src: '/images/photos/chantier-08.webp', alt: "Travaux d'étanchéité de toiture" },
        inverse: true,
      },
    ],
    points: [
      'Diagnostic des points faibles et reprise de l’étanchéité.',
      'Traitement des toitures en pente et des toitures-terrasses.',
      'Protection contre les infiltrations et les vents violents.',
      'Garantie décennale et responsabilité civile professionnelle.',
      'Diagnostic et devis gratuits, déplacement offert.',
    ],
    cta: {
      titre: "Un doute sur l'étanchéité de votre toit ?",
      texte:
        "J'inspecte votre toiture, j'identifie les points faibles et je vous remets un devis gratuit pour une étanchéité durable. Déplacement offert en Haute-Garonne.",
    },
  },

  // ── 6. RECHERCHE DE FUITE ───────────────────────────────────────────────
  {
    slug: 'recherche-de-fuite-de-toiture-en-haute-garonne-31',
    title: 'Recherche de fuite de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Une fuite de toiture ? Charles Lopez intervient rapidement en Haute-Garonne pour identifier l'origine de la fuite et la réparer. Devis gratuit.",
    h1: 'Recherche de fuite de toiture en Haute-Garonne (31)',
    sousTitre: 'On localise la fuite, on la traite durablement',
    titrePoints: 'Pourquoi me confier la recherche de votre fuite',
    introImg: { src: '/images/photos/chantier-09.webp', alt: "Recherche de fuite de toiture par Charles Lopez" },
    intro: [
      "Une fuite de toiture peut générer des dommages importants et une dégradation accélérée des matériaux, avec des réparations onéreuses à la clé. Il est vivement conseillé de solliciter un spécialiste dès les premiers signes d'infiltration.",
      "<a href=\"/\">couvreur en Haute-Garonne</a>, j'interviens rapidement pour la recherche et le traitement de fuite sur votre toiture.",
    ],
    sections: [
      {
        titre: 'Les méthodes de détection',
        listeTitre: 'Selon les cas, plusieurs techniques sont mises en œuvre :',
        liste: [
          'Inspection visuelle (tuiles déplacées, soudures fissurées, joints usés, évacuations bouchées)',
          "Test à l'eau avec colorant pour localiser précisément l'infiltration",
          'Caméra thermique ou endoscopique pour visualiser les écarts de température',
          'Recherche fumigène, très efficace sur les toitures-terrasses et les raccordements',
        ],
        img: { src: '/images/photos/chantier-10.webp', alt: "Inspection d'une toiture pour rechercher une fuite" },
      },
      {
        titre: 'Traitement de la fuite et prévention',
        paras: [
          "Une fois l'origine identifiée, je mets en œuvre les actions nécessaires : remplacement des matériaux abîmés, remise en état des systèmes d'évacuation, reprise des joints et soudures défectueuses.",
          "Des dispositifs de protection contre les intempéries, les UV et les mousses (écran de sous-toiture, traitement hydrofuge) et un entretien régulier permettent ensuite de prévenir les infiltrations futures.",
        ],
        img: { src: '/images/photos/chantier-11.webp', alt: "Réparation d'une fuite de toiture" },
        inverse: true,
      },
    ],
    points: [
      'Localisation rapide et fiable de l’origine de la fuite.',
      'Méthodes adaptées : test à l’eau, caméra thermique, fumigène.',
      'Réparation durable et conseils de prévention.',
      'Intervention rapide, y compris en urgence.',
      'Devis gratuit et déplacement offert en Haute-Garonne.',
    ],
    cta: {
      titre: 'Une fuite à localiser sur votre toit ?',
      texte:
        "Auréole au plafond, infiltration après la pluie : j'interviens rapidement pour trouver et traiter la fuite. Devis gratuit, déplacement offert en Haute-Garonne.",
    },
  },

  // ── 7. TRAITEMENT ───────────────────────────────────────────────────────
  {
    slug: 'traitement-de-toiture-en-haute-garonne-31',
    title: 'Traitement de toiture en Haute-Garonne (31) — Charles Lopez',
    description:
      "Charles Lopez, spécialiste du traitement de toiture en Haute-Garonne : traitement hydrofuge, fongicide, anti-UV. Protégez et embellissez votre toit. Devis gratuit.",
    h1: 'Traitement de toiture en Haute-Garonne (31)',
    sousTitre: 'Protégez et embellissez votre toiture',
    titrePoints: 'Pourquoi me confier le traitement de votre toiture',
    introImg: { src: '/images/photos/placeholder-carte-6.webp', alt: "Application d'un traitement de toiture par Charles Lopez" },
    intro: [
      "Le nettoyage seul ne suffit pas toujours. Avec le temps, les intempéries, la pollution ou les mousses, votre toit peut se dégrader, perdre son éclat, devenir poreux ou se fissurer.",
      "L'<strong>application d'un traitement</strong> permet de protéger et d'embellir votre toiture : imperméabilité, résistance et couleur retrouvées. <a href=\"/\">je suis spécialiste du traitement</a> de toiture en Haute-Garonne.",
    ],
    sections: [
      {
        titre: 'Les différents types de traitements',
        paras: [
          "<strong>Traitement hydrofuge</strong> : imperméabilise et protège contre l'humidité, les infiltrations, les algues et les mousses ; il augmente la durée de vie de la toiture. <strong>Traitement anti-mousse</strong> : élimine mousses, lichens, champignons et algues, à renouveler tous les 3 à 5 ans. <strong>Traitement anti-UV</strong> : protège contre les rayons solaires, préserve l'éclat et retarde le vieillissement.",
        ],
        img: { src: '/images/photos/chantier-12.webp', alt: "Toiture traitée et protégée" },
      },
      {
        titre: 'Les avantages de mon traitement',
        listeTitre: 'Faire appel à moi, c’est :',
        liste: [
          'Des produits adaptés aux tuiles, ardoises, zinc et fibrociment',
          'Des traitements hydrofuges et des protections UV, anti-champignons et anti-insectes',
          'Des produits écologiques et biodégradables',
          'Un bon rapport qualité-prix avec devis gratuit',
        ],
        paras: [
          "Je connais les spécificités climatiques de la région et je vous conseille sur les traitements complémentaires (hydrofugation, peinture, vernis).",
        ],
      },
    ],
    points: [
      'Traitement hydrofuge, fongicide et anti-UV selon vos besoins.',
      'Produits adaptés à chaque type de couverture.',
      'Produits écologiques et biodégradables.',
      'Conseils sur les traitements complémentaires.',
      'Devis gratuit et déplacement offert en Haute-Garonne.',
    ],
    cta: {
      titre: 'Envie de protéger durablement votre toiture ?',
      texte:
        "Après le nettoyage, un traitement adapté prolonge la vie de votre toit et lui redonne de l'éclat. Je vous conseille et je vous remets un devis gratuit.",
    },
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
