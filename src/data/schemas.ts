// ─────────────────────────────────────────────────────────────────────────
// Schemas JSON-LD partagés — un schema Service par page prestation,
// rattaché au LocalBusiness (@id) déclaré dans BaseLayout.
// ─────────────────────────────────────────────────────────────────────────
import { SITE } from './site.ts';
import { ZONES } from './zones.ts';

// Base + département + les communes de la zone d'intervention.
export const AREA_SERVED = [
  { '@type': 'City', name: `${SITE.ville} (${SITE.cp})` },
  ...ZONES.flatMap((z) => [
    { '@type': 'AdministrativeArea', name: z.dep },
    ...z.villes.map((v) => ({ '@type': 'City', name: v })),
  ]),
];

export function schemaService(opts: { nom: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nom,
    serviceType: opts.nom,
    description: opts.description,
    url: `${SITE.url}${opts.slug}`,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: AREA_SERVED,
  };
}

// Schema d'une page ville « Couvreur à [Ville] » : Service localisé,
// areaServed restreint à la ville et au département.
export function schemaVille(opts: { ville: string; dep: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Couvreur à ${opts.ville}`,
    serviceType: 'Travaux de couverture et toiture',
    description: opts.description,
    url: `${SITE.url}${opts.slug}`,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: [
      { '@type': 'City', name: opts.ville },
      { '@type': 'AdministrativeArea', name: opts.dep },
    ],
  };
}

// Schema d'un hub départemental (non utilisé actuellement — un seul département).
export function schemaHub(opts: {
  nom: string;
  description: string;
  slug: string;
  dep: string;
  villes: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nom,
    serviceType: 'Travaux de couverture et toiture',
    description: opts.description,
    url: `${SITE.url}${opts.slug}`,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: opts.dep },
      ...opts.villes.map((v) => ({ '@type': 'City', name: v })),
    ],
  };
}
