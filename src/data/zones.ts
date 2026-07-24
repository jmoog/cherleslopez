// ─────────────────────────────────────────────────────────────────────────
// Zone d'intervention — source unique pour la section « Zone d'intervention »
// de l'accueil et pour l'areaServed des schemas JSON-LD.
// Charles Lopez intervient sur TOUTE la Haute-Garonne (31). L'accueil est le
// hub SEO du département → pas de hub secondaire.
// ─────────────────────────────────────────────────────────────────────────
export const ZONES = [
  {
    dep: 'Haute-Garonne (31)',
    villes: [
      'Toulouse',
      'Blagnac',
      'Colomiers',
      'Beauzelle',
      'Aussonne',
      'Mondonville',
      'Pibrac',
      'Daux',
      'Merville',
      'Launac',
      'Saint-Paul-sur-Save',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Maillage du cocon zones. Le département principal (Haute-Garonne) est porté
// par l'accueil → aucun hub départemental secondaire.
// ─────────────────────────────────────────────────────────────────────────
export const HUBS_ZONES: Record<string, string> = {};

// Villes disposant d'une page dédiée → slug exact repris du site en production
// (préservation du référencement).
export const LIENS_VILLES: Record<string, string> = {
  'Toulouse': '/couvreur-a-toulouse-31000/',
  'Blagnac': '/blagnac/',
  'Colomiers': '/colomiers/',
  'Beauzelle': '/beauzelle/',
  'Aussonne': '/aussonne/',
  'Mondonville': '/mondonville-31700/',
  'Pibrac': '/pibrac/',
  'Daux': '/daux/',
  'Merville': '/merville/',
  'Launac': '/launac/',
  'Saint-Paul-sur-Save': '/saint-paul-sur-save/',
};
