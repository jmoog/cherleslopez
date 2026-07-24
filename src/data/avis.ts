// ─────────────────────────────────────────────────────────────────────────
// Avis clients réels (Google & PagesJaunes) — note 5/5.
// ─────────────────────────────────────────────────────────────────────────
export interface AvisClient {
  note: number;
  source: 'google' | 'pagesjaunes';
  nom: string;
  date: string;
  texte: string;
}

export const AVIS: AvisClient[] = [
  { note: 5, source: 'google', nom: 'Toquard Betsy', date: 'Janvier 2023',
    texte: "Monsieur Lopez a effectué le remplacement de la toiture de ma maison. Très satisfait, je recommande : personne sérieuse, très propre et à l'écoute du client." },
  { note: 5, source: 'pagesjaunes', nom: 'Thierry G. — Aussonne', date: 'Octobre 2024',
    texte: "Monsieur Lopez répond au téléphone et fait ce qu'il dit, très bien. C'est tellement rare de nos jours. Je recommande." },
  { note: 5, source: 'google', nom: 'Serge Etienne', date: 'Janvier 2025',
    texte: "Artisan consciencieux et sérieux, bon travail. À recommander." },
  { note: 5, source: 'pagesjaunes', nom: 'Jean-Paul', date: 'Décembre 2023',
    texte: "Travail professionnel et efficace. Chantier quitté après nettoyage des lieux. Équipe réactive et sympathique, ce qui ne gâche rien. À recommander." },
  { note: 5, source: 'google', nom: 'Marc Fournier', date: 'Décembre 2023',
    texte: "Très satisfait de ses services, je recommande ce couvreur." },
  { note: 5, source: 'pagesjaunes', nom: 'Alain M. — 31', date: 'Avril 2023',
    texte: "Très bon travail pour la réfection de toute la toiture de ma maison et du garage, plus la peinture. Rien à redire, je recommande." },
  { note: 5, source: 'pagesjaunes', nom: 'Kilian', date: 'Octobre 2023',
    texte: "Artisan sérieux, réactif et à l'écoute, travail efficace et de grande qualité. Je recommande." },
  { note: 5, source: 'google', nom: 'S. Etienne', date: 'Juillet 2024',
    texte: "Artisan très sérieux, sympathique et prix raisonnable : réfection de 15 m de faîtage, plus traitement et nettoyage du toit." },
  { note: 5, source: 'pagesjaunes', nom: 'Stéphane', date: 'Avril 2023',
    texte: "Intervention rapide et efficace." },
  { note: 5, source: 'pagesjaunes', nom: 'luphi', date: 'Novembre 2018',
    texte: "Travail sérieux avec un vrai souci de propreté : nettoyage des mousses, changement des tuiles cassées, reprise de l'étanchéité et des gouttières. Excellent résultat !" },
];

/** Renvoie `count` avis à partir de `start` (avec bouclage) — pour varier d'une page à l'autre. */
export function pickAvis(start = 0, count = 4): AvisClient[] {
  const n = AVIS.length;
  return Array.from({ length: Math.min(count, n) }, (_, i) => AVIS[(start + i) % n]);
}
