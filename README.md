# Modèle site artisan — Astro

Modèle de site vitrine pour artisan (couvreur, plombier, maçon…), dérivé du site
maison-dallau.fr : même design system, même structure SEO (accueil-hub, pages
prestations, hubs départementaux, pages villes), mêmes optimisations de
performance (Lighthouse ~95+). Tout le contenu est en **lorem ipsum** et toutes
les images sont des **placeholders** : il suffit de remplacer.

Stack : [Astro](https://astro.build) (statique + adaptateur Node pour la route
`/api/devis`), police Montserrat auto-hébergée (RGPD-OK), CSS vanilla inliné,
formulaire Brevo + Turnstile + anti-spam, bandeau cookies RGPD (GA4 chargé
après consentement seulement).

## Démarrer

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:4321
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Structure

- `src/data/site.ts` — **informations centrales de l'entreprise** (NAP, contacts).
  Modifier ici se répercute partout.
- `src/data/zones.ts` — départements/communes de la zone d'intervention +
  maillage (hubs, liens villes).
- `src/data/villes/` — un fichier de contenu par page ville (`ville-un.ts`,
  `ville-deux.ts` en exemples), rendues par `src/pages/zone-[slug].astro`.
- `src/styles/global.css` — design system central (palette, boutons, cartes,
  hero, sections). Les styles locaux d'une page ne doivent jamais l'enfreindre.
- `src/layouts/BaseLayout.astro` — head, SEO, schema LocalBusiness, Open Graph,
  GA4 (après consentement).
- `src/pages/` :
  - `index.astro` — accueil **et hub SEO du département principal**.
  - `prestation-1/2/3.astro` — gabarits de pages service (dupliquer/renommer).
  - `zone-hub-exemple.astro` — gabarit de hub départemental secondaire.
  - `zone-[slug].astro` — gabarit commun des pages villes.
  - `devis-gratuit.astro` + `api/devis.ts` — formulaire (Brevo + Turnstile).
  - `mentions-legales`, `plan-du-site`, `merci`, `404`, `sitemap.xml.ts`.
- `DESIGN.md` — règles de design et de typographie à respecter.

## Checklist d'adaptation à un nouveau client

1. **`src/data/site.ts`** : nom, slogan, téléphone, email, adresse, GPS, URL.
2. **`astro.config.mjs`** : `site:` = URL de production (aussi dans le
   `serialize` du sitemap) ; changer la police si besoin.
3. **`src/styles/global.css`** : adapter la palette dans `:root` (les noms de
   tokens `--bleu`/`--rouge` sont historiques : principal / accent). Vérifier
   les contrastes AA (texte 4.5:1, boutons 3:1).
4. **Images** : remplacer les placeholders de `public/images/` (mêmes noms ou
   mettre à jour les `src`). Recadrer au ratio affiché, exporter en webp,
   respecter les 3 tailles du hero (640/1024/1600). Logo : 3 variantes
   (couleur, 400px, blanc) + `og-*.png` 1200×630 + favicons.
5. **Textes** : remplacer le lorem ipsum page par page (garder la structure
   HTML et le maillage interne service ↔ ville ↔ hub).
6. **Pages prestations** : renommer `prestation-N.astro` (le nom de fichier =
   l'URL), mettre à jour nav du Header, Footer, plan-du-site et le `<select>`
   de devis-gratuit + `PRESTATION_LABELS` dans `api/devis.ts`.
7. **Pages zones** : renommer le préfixe `zone-` si souhaité (ex.
   `couvreur-[slug].astro`), créer un fichier par ville dans
   `src/data/villes/` + l'importer dans `index.ts` + `LIENS_VILLES`.
8. **`src/pages/mentions-legales.astro`** : remplacer tous les champs
   `[ENTRE CROCHETS]` (SIREN, SIRET, TVA, hébergeur…).
9. **BaseLayout** : `@type` du schema (RoofingContractor, Plumber…), ID GA4,
   balise Search Console, `knowsAbout`.
10. **`.env`** : copier `.env.example`, renseigner Brevo + Turnstile.
11. **Déploiement** : `Dockerfile` multi-stage fourni (Node 22 alpine,
    Coolify-ready) — passer `TURNSTILE_SITE_KEY` en build-arg.

## Règles SEO embarquées (héritées du site d'origine)

- L'accueil EST le hub du département principal : ne pas créer de page
  « [métier] + département principal » (cannibalisation).
- Hubs départementaux secondaires : mots-clés du département ENTIER dans
  title/H1/H2 (jamais de micro-zone sans volume de recherche).
- Pages villes : H1 sur l'intention « métier + ville », cartes prestations
  illustrées avec ancre « service + ville » dans le paragraphe, cocon étanche
  (une ville linke 2-3 villes voisines du même département + son hub).
- title ≠ H1 ≠ meta (anti-triplette) ; une seule ancre par page cible ;
  jamais deux fois la même photo sur une même page.
