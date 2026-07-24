# Guide de design & typographie

Référence à suivre pour toute évolution du site. La plupart de ces règles sont
déjà appliquées dans `src/styles/global.css` (design system central) ; les
styles locaux d'une page ne doivent jamais les enfreindre.

## 1. Typographie

- **Police principale : Montserrat**, auto-hébergée (configurée dans
  `astro.config.mjs`, injectée via la variable CSS `--font-base`). Aucune
  requête vers Google Fonts (conforme RGPD/CNIL).
- **Graisses : 2 à 3 variantes en usage réel.** Regular 400 pour le texte,
  Bold 700 pour les titres. Éviter de multiplier les graisses pour ne pas
  alourdir la page.
- **Contraste :** couleur de texte nettement distincte du fond. Contrastes
  vérifiés AA (texte 4.5:1, boutons/grand texte 3:1).

## 2. Hiérarchie et tailles

- **Corps de texte : 16px minimum.** Défini explicitement sur `body`. Une valeur
  inférieure à 16px déclenche un zoom auto indésirable sur les formulaires
  mobiles → **les champs `input`/`select`/`textarea` ne descendent jamais sous
  `1rem`.**
- **H1 :** ~32px sur mobile, 40px+ sur desktop.
- **H2 :** ~24px sur mobile, ~32px sur desktop.
- **H3 :** ~20px sur mobile, ~24px sur desktop (min lisible = 20px).
- **Interligne :** 1.5 pour le corps, 1.2 pour les titres, pour aérer la lecture.

## 3. Veuves et orphelines

- **Pas d'un ou deux mots seuls** sur la dernière ligne d'un titre ou d'un
  paragraphe.
- **Espaces insécables :** lier les mots finaux d'une phrase avec `&nbsp;` pour
  forcer un groupe logique à passer ensemble.
- **CSS :** `text-wrap: balance;` sur les titres (déjà global sur `h1–h4`),
  `text-wrap: pretty;` sur les paragraphes (déjà global sur `p, li`).
- **Contrôle manuel :** `<br>` sur des titres très spécifiques si le CSS ne
  suffit pas, en respectant le regroupement logique des mots.

## 4. Alignement

- **Paragraphes et textes longs : toujours à gauche.** Jamais centré ni
  justifié (espaces inégaux, lecture difficile sur plusieurs lignes).
- **Titres :** à gauche par défaut pour s'accorder au corps de texte. Le
  centrage reste réservé aux titres très courts ou bannières isolées (ex. titres
  de section `.section > .conteneur > h2`).
- **Boutons desktop :** alignés à gauche, dans l'axe de lecture du paragraphe.

## 5. Ergonomie et mobile

- **Boutons CTA :** centrés ou en pleine largeur (avec marges) sur petit écran,
  pour un accès direct au pouce.
- **Zones de clic :** minimum 44×44 px (les boutons `.btn` sont à `min-height:
  48px`).
- **Espacement des éléments interactifs :** marge suffisante entre liens/boutons
  pour éviter les clics accidentels.
- **Marges latérales mobile :** 16 à 20px (`.conteneur` → `padding-inline: 1rem`).
- **Longueur de ligne :** ~70 caractères max sur grand écran (`max-width: 70ch`
  sur les blocs de prose) pour que l'œil retrouve facilement la ligne suivante.
