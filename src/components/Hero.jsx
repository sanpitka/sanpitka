import { useLanguage } from '../i18n/useLanguage.js'
import { asset } from '../lib/asset.js'

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section className="section hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.name}</h1>
          <p className="hero__tagline">{hero.tagline}</p>
          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            <a className="button button--filled" href="#projects">
              {hero.ctaProjects}
            </a>
            <a className="button button--outline" href="#contact">
              {hero.ctaContact}
            </a>
          </div>

          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt className="hero__fact-value">{fact.value}</dt>
                <dd className="hero__fact-label">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__portrait">
          {/* width/height are the intrinsic size of the placeholder — they reserve
              the box so the layout doesn't shift while the image loads. */}
          <img
            src={asset(hero.portrait.src)}
            alt={hero.portrait.alt}
            width="800"
            height="1000"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
