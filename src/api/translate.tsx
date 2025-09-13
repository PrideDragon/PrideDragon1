import { translations } from '../utils';
import type { Translations } from '../utils';

export const translate = async (language: keyof Translations) => {
  return translations[language] || null;
}