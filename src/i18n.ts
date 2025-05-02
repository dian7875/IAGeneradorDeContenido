import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import de from './locales/de.json'
const savedLang = localStorage.getItem('lang') || 'es'

export const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'es',
  messages: {
    de,
    en,
    es,
    fr,
    ja,
  },
})
