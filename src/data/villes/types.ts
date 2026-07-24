// ─────────────────────────────────────────────────────────────────────────
// Type d'une page ville « [Métier] à [Ville] » — le contenu de chaque page
// vit dans son fichier src/data/villes/[slug].ts ; le gabarit commun est
// src/pages/zone-[slug].astro. Ajouter une ville = ajouter un fichier
// de données + l'importer dans src/data/villes/index.ts.
// ─────────────────────────────────────────────────────────────────────────
export interface VillePage {
  /** Partie d'URL après « zone- » : 'ville-un' → /zone-ville-un/ */
  slug: string;
  ville: string;
  dep: string; // 'Département A'
  depNum: string; // '00'
  /** Hub départemental parent (absent pour le département principal : rattaché à l'accueil). */
  hub?: { label: string; href: string };

  // Balises — title ≠ h1, meta qui complète sans paraphraser (anti-triplette).
  title: string;
  description: string;
  h1: string;

  imgIntro: { src: string; alt: string };
  /** Paragraphes d'introduction (HTML : liens et <strong> autorisés). */
  intro: string[];

  /**
   * Section grise « prestations » : cartes illustrées façon accueil.
   * L'ancre est DANS le paragraphe de la carte, sur « service + ville »
   * (ex. « prestation 1 à Ville-Un ») — jamais de carte cliquable
   * ni de lien « Découvrir ».
   */
  prestations: {
    titre: string;
    intro: string; // paragraphe HTML d'amorce
    cartes: {
      titre: string;
      img: { src: string; alt: string };
      texte: string; // HTML, contient l'ancre service + ville
    }[];
  };

  /** Section duo photo/texte : l'angle propre à la ville. */
  angle: {
    titre: string;
    img: { src: string; alt: string };
    paras: string[];
    inverse?: boolean;
  };

  /** Secteur : communes voisines, liens vers les villes sœurs et le hub. */
  secteur: { titre: string; paras: string[] };

  /** CTA final (photo + panneau bleu). */
  cta: { titre: string; texte: string };
}
