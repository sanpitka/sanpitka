import { useLanguage } from '../i18n/useLanguage.js'
import Icon from './Icon.jsx'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <section
      className="section section--alt"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact__inner">
        <h2 id="contact-heading">{contact.heading}</h2>
        <p className="contact__body">{contact.body}</p>

        <ul className="contact__links">
          {contact.links.map((link) => (
            <li key={link.href}>
              <a
                className="button button--filled"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon id={link.icon} size={20} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
