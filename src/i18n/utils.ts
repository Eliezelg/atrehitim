import { defaultLocale, supportedLocales } from './config';

export function getLanguageFromURL(pathname: string): string {
  const [, lang] = pathname.split('/');
  return supportedLocales.includes(lang) ? lang : defaultLocale;
}

export function useTranslations(lang: string) {
  const translations = {
    he: () => import('./locales/he/translation.json'),
    fr: () => import('./locales/fr/translation.json')
  };

  return async (key: string) => {
    const msgs = await translations[lang]();
    return key.split('.').reduce((obj, k) => obj?.[k], msgs) || key;
  };
}

export function getLocalizedURL(pathname: string, lang: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const currentLang = segments[0];
  
  if (supportedLocales.includes(currentLang)) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  
  return `/${segments.join('/')}`;
}