import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage.js'
import ProjectCard from './ProjectCard.jsx'

/**
 * Carousel built on native scroll-snap — no dependencies.
 *
 * The browser owns the scrolling (so touch, trackpad and momentum are free and
 * feel native); React only tracks which slide is settled, for the dots and the
 * live region.
 */
export default function ProjectCarousel() {
  const { t } = useLanguage()
  const { projects } = t
  const items = projects.items
  const count = items.length

  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // An IntersectionObserver rooted on the track beats a scroll listener here:
    // no throttling, no rAF bookkeeping, and it stays correct across resizes.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index))
          }
        })
      },
      { root: track, threshold: 0.6 },
    )

    track.querySelectorAll('[data-index]').forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [count])

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current
      if (!track) return

      const clamped = Math.max(0, Math.min(index, count - 1))
      const slide = track.children[clamped]
      if (!slide) return

      // Scroll the track itself rather than calling slide.scrollIntoView(), which
      // would also scroll the page and yank the whole document sideways.
      // Smoothing comes from CSS scroll-behavior, which already honours
      // prefers-reduced-motion.
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft })
    },
    [count],
  )

  const onKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        goTo(active - 1)
        break
      case 'ArrowRight':
        event.preventDefault()
        goTo(active + 1)
        break
      case 'Home':
        event.preventDefault()
        goTo(0)
        break
      case 'End':
        event.preventDefault()
        goTo(count - 1)
        break
      default:
        break
    }
  }

  const atStart = active === 0
  const atEnd = active === count - 1

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">{projects.heading}</h2>
        <p className="section__intro">{projects.intro}</p>

        {/* role="group" is required: aria-roledescription is ignored on an
            element with a generic role, so a bare <div> would silently drop the
            "carousel" announcement. */}
        <div
          className="carousel"
          role="group"
          aria-roledescription="carousel"
          aria-labelledby="projects-heading"
        >
          {/* tabIndex=0 is deliberate: a scrollable region must be reachable by
              keyboard, and it anchors the arrow-key handler. */}
          <div
            className="carousel__track"
            ref={trackRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            {items.map((project, i) => (
              <div
                className="carousel__slide"
                key={project.id}
                data-index={i}
                role="group"
                aria-roledescription="slide"
                aria-label={projects.slideLabel(i + 1, count, project.title)}
              >
                <ProjectCard project={project} eager={i === 0} />
              </div>
            ))}
          </div>

          <p className="visually-hidden" aria-live="polite">
            {projects.status(active + 1, count, items[active].title)}
          </p>

          <div className="carousel__controls">
            {/* aria-disabled rather than disabled: a real `disabled` button drops
                out of the tab order mid-interaction, throwing focus to <body>
                the moment you reach the last slide. */}
            <button
              type="button"
              className="carousel__arrow"
              onClick={() => !atStart && goTo(active - 1)}
              aria-disabled={atStart}
              aria-label={projects.prev}
            >
              <span aria-hidden="true">&#8592;</span>
            </button>

            <ul className="carousel__dots">
              {items.map((project, i) => (
                <li key={project.id}>
                  <button
                    type="button"
                    className="carousel__dot"
                    onClick={() => goTo(i)}
                    aria-current={i === active}
                    aria-label={projects.dotLabel(i + 1, project.title)}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="carousel__arrow"
              onClick={() => !atEnd && goTo(active + 1)}
              aria-disabled={atEnd}
              aria-label={projects.next}
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>

          <p className="carousel__hint">{projects.hint}</p>
        </div>
      </div>
    </section>
  )
}
