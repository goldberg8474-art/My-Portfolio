// ─────────────────────────────────────────────────────────────────────────────
// Yael Cohen Photography — i18n Utilities
// ─────────────────────────────────────────────────────────────────────────────

import { translations, type Locale, type TranslationKey } from './translations';

/**
 * Returns the translation string for a given key in the specified locale.
 * If the key is not found, returns the key itself as a fallback (never silent).
 */
export function t(locale: Locale, key: TranslationKey): string {
  const value = translations[locale]?.[key];
  if (value === undefined || value === '') {
    console.warn(`[i18n] Missing translation for key "${key}" in locale "${locale}"`);
    return key;
  }
  return value;
}

/**
 * Given the current URL pathname and locale, returns the equivalent path
 * in the other locale.
 *
 * URL structure:
 *   Hebrew (default, no prefix): /,  /portfolio,  /about,  /contact
 *   English (prefixed):         /en, /en/portfolio, /en/about, /en/contact
 *
 * This function handles the prefix/no-prefix asymmetry.
 */
export function getAlternatePath(currentPath: string, currentLocale: Locale): string {
  if (currentLocale === 'he') {
    // Currently on Hebrew (no prefix). Switch to English by prepending /en.
    // Normalise trailing slash: / -> /en, /portfolio -> /en/portfolio
    if (currentPath === '/' || currentPath === '') {
      return '/en';
    }
    return `/en${currentPath}`;
  } else {
    // Currently on English (has /en prefix). Switch to Hebrew by stripping /en.
    const withoutPrefix = currentPath.replace(/^\/en/, '');
    // If stripping the prefix leaves an empty string, return root /
    return withoutPrefix === '' ? '/' : withoutPrefix;
  }
}

/**
 * Returns true if the given locale is a right-to-left language.
 */
export function isRTL(locale: Locale): boolean {
  return locale === 'he';
}
