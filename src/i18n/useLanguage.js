import { createContext, useContext } from 'react'

/** Shape: { lang, setLang, toggle, t } — see LanguageProvider. */
export const LanguageContext = createContext(null)

/**
 * Read the active language and its copy.
 * `t` is the whole content tree for the current language (see data/content.js).
 */
export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage must be used inside a LanguageProvider')
  }
  return value
}
