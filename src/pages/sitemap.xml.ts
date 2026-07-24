import type { APIRoute } from 'astro';

// Beaucoup d'outils SEO (et certains crawlers) cherchent le sitemap à
// l'adresse conventionnelle /sitemap.xml, alors que l'intégration
// @astrojs/sitemap génère /sitemap-index.xml (+ /sitemap-0.xml).
// Cette route runtime (servie par l'adapter Node, comme /api/devis)
// redirige en 301 vers le vrai sitemap : les deux adresses fonctionnent.
export const prerender = false;

export const GET: APIRoute = ({ redirect }) =>
  redirect('/sitemap-index.xml', 301);
