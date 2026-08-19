import { useLanguage } from '../i18n/useLanguage.js'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section className="section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container about__inner">
        <div className="about__story">
          <h2 id="about-heading">{about.heading}</h2>
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="about__education">
          <h3>{about.educationHeading}</h3>
          <ol className="timeline">
            {about.education.map((entry) => (
              <li className="timeline__item" key={entry.years}>
                <p className="timeline__years">{entry.years}</p>
                <p className="timeline__title">{entry.title}</p>
                <p className="timeline__org">{entry.org}</p>
                {entry.note && <p className="timeline__note">{entry.note}</p>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
