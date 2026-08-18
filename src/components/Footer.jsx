import { useLanguage } from '../i18n/useLanguage.js'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{t.footer.copyright}</p>
        <p className="footer__credit">{t.footer.credit}</p>
      </div>
    </footer>
  )
}
