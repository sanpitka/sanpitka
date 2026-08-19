import { useLanguage } from '../i18n/useLanguage.js'

export default function Header() {
  const { lang, t, toggle } = useLanguage()

  const sections = [
    ['about', t.nav.about],
    ['projects', t.nav.projects],
    ['contact', t.nav.contact],
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          {t.nav.brand}
        </a>

        <nav className="header__nav" aria-label={t.nav.brand}>
          <ul className="header__links">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Labelled with the language you'd switch TO — less ambiguous than an
            EN | FI pair. No aria-label: it would override the visible text and
            break voice control (WCAG 2.5.3). lang= marks the foreign word so
            screen readers pronounce "Suomeksi" correctly (WCAG 3.1.2). */}
        <button
          type="button"
          className="lang-toggle"
          onClick={toggle}
          lang={lang === 'en' ? 'fi' : 'en'}
        >
          {t.langToggle.long}
        </button>
      </div>
    </header>
  )
}
