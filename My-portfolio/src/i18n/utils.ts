// src/i18n/utils.ts
// Single source of truth for translation lookups.
// Every component imports getTranslations() from this file.
// Never import from en.ts or he.ts directly in components.

import type { Translation } from './index';
import { t as en } from './en';
import { t as he } from './he';

/**
 * Returns the full typed Translation object for the given locale.
 * Use this in every .astro component frontmatter:
 *
 *   import { getTranslations } from '../i18n/utils';
 *   const t = getTranslations(currentLocale);
 */
export function getTranslations(locale: 'en' | 'he'): Translation {
  return locale === 'he' ? he : en;
}
