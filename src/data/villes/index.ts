// Registre des pages villes « Couvreur à [Ville] » — rendues par src/pages/[ville].astro.
// Toutes rattachées à l'accueil (hub Haute-Garonne). Slugs repris du site en production.
import type { VillePage } from './types.ts';

import toulouse from './toulouse.ts';
import blagnac from './blagnac.ts';
import colomiers from './colomiers.ts';
import beauzelle from './beauzelle.ts';
import aussonne from './aussonne.ts';
import mondonville from './mondonville.ts';
import pibrac from './pibrac.ts';
import daux from './daux.ts';
import merville from './merville.ts';
import launac from './launac.ts';
import saintpaul from './saintpaul.ts';

export type { VillePage };

export const VILLES: VillePage[] = [
  toulouse,
  blagnac,
  colomiers,
  beauzelle,
  aussonne,
  mondonville,
  pibrac,
  daux,
  merville,
  launac,
  saintpaul,
];

export const villesDuDep = (depNum: string) => VILLES.filter((v) => v.depNum === depNum);
