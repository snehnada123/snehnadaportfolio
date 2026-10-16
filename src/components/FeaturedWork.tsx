import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function FeaturedWork() {
  return (
    <section id="projects" aria-label="Projects" className="section-layout section-rule">
      <div className="section-index"><span>03</span><span>PROJECTS</span></div>
      <div className="section-body">
      <div className="section-heading section-heading-row">
        <div>
          <h2>Things I’ve made.</h2>
        </div>
        <a className="text-link all-projects-link" href="https://github.com/snehnada123" target="_blank" rel="noreferrer">
          More on GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <a
            key={project.id}
            id={project.id}
            className="project-row"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-number">0{index + 1}</span>
            <span className="project-info">
              <span className="project-title">{project.title}</span>
              <span className="project-description">{project.description}</span>
              <span className="project-tags">{project.tags.slice(0, 3).join(' · ')}</span>
            </span>
            <ArrowUpRight className="project-arrow" size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}

