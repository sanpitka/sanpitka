import { useLanguage } from '../i18n/useLanguage.js'

export default function Skills() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">{skills.heading}</h2>
        <p className="section__intro">{skills.intro}</p>

        <ul className="skills__grid">
          {skills.groups.map((group) => (
            <li className="card skills__group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
