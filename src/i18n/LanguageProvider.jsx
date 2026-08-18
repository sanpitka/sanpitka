import { useCallback, useEffect, useMemo, useState } from 'react'
import { content, languages } from '../data/content.js'
import { LanguageContext } from './useLanguage.js'

const STORAGE_KEY = 'lang'

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (languages.includes(saved)) return saved
  } catch {
    // localStorage throws in some private-browsing modes — fall through to the
    // browser's language hint rather than breaking the render.
  }
  return navigator.language?.toLowerCase().startsWith('fi') ? 'fi' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  useEffect(() => {
    // Screen readers take pronunciation from <html lang>, so it must track state —
    // otherwise Finnish copy gets read with English phonemes.
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Failing to persist the choice is not worth breaking the page over.
    }
  }, [lang])

  const toggle = useCallback(
    () => setLang((current) => (current === 'en' ? 'fi' : 'en')),
    [],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: content[lang] }),
    [lang, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
