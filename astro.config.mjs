// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO : URL de production du site (doit correspondre à SITE.url dans src/data/site.ts)
  site: 'https://charles-lopez.fr',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  // Police Montserrat auto-hébergée : Astro télécharge les WOFF2 au build et les
  // sert depuis le domaine — conforme RGPD/CNIL, aucune requête vers Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-base',
      weights: ['400', '500', '600', '700', '800'],
      styles: ['normal'],
      // Le sous-ensemble « latin » couvre tout le français, y compris œ/Œ
      // (U+0152-0153) : inutile de précharger « latin-ext » (~36 Ko de moins
      // sur le chemin critique de rendu).
      subsets: ['latin'],
    },
  ],
  // CSS entièrement inliné dans le HTML → zéro requête CSS bloquante.
  build: {
    inlineStylesheets: 'always',
    format: 'directory',
  },
  // Adapter Node standalone : sert le statique + la route /api/devis.
  adapter: node({ mode: 'standalone' }),
  security: { checkOrigin: false },

  // Sitemap généré automatiquement au build (sitemap-index.xml + sitemap-0.xml).
  // La page /404 est exclue nativement ; on exclut aussi /merci (page technique).
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci'),
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://charles-lopez.fr/') item.priority = 1.0;
        else if (item.url.includes('/devis-gratuit/')) item.priority = 0.9;
        else if (item.url.includes('/plan-du-site/')) {
          item.priority = 0.3;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/mentions-legales/')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else item.priority = 0.7;
        return item;
      },
    }),
  ],
});
