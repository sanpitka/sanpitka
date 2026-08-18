import { useLanguage } from '../i18n/useLanguage.js'
import { asset } from '../lib/asset.js'
import Icon from './Icon.jsx'

export default function ProjectCard({ project, eager = false }) {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <article className="card project">
      <div className="project__media">
        {/* Explicit dimensions + aspect-ratio in CSS keep the slide height stable,
            so the carousel doesn't reflow as images stream in. */}
        <img
          src={asset(project.image.src)}
          alt={project.image.alt}
          width="1200"
          height="800"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="project__body">
        <p className="eyebrow">
          {project.year} · {project.context}
        </p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__client">{project.client}</p>

        <p className="project__role">
          <span className="project__role-label">{projects.roleLabel}:</span>{' '}
          {project.role}
        </p>

        <p className="project__blurb">{project.blurb}</p>

        {/* Optional — the private iXBRL repo has no stack data. */}
        {project.tech?.length > 0 && (
          <p className="project__tech">
            <span className="project__role-label">{projects.techLabel}:</span>{' '}
            {project.tech.join(' · ')}
          </p>
        )}

        <ul className="tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="project__links">
          {project.links.map((link) => (
            <a
              className="button button--outline button--sm"
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon id={link.icon} size={18} />
              {link.label}
            </a>
          ))}
          {project.private && (
            <p className="project__private">{projects.privateLabel}</p>
          )}
        </div>
      </div>
    </article>
  )
}
