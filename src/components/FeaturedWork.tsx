import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function FeaturedWork() {
  return (
    <section id="projects" aria-label="Projects" className="page-section border-t border-border">
      <div className="mx-auto max-w-6xl page-inner">
        <div className="section-editorial-heading">
          <span className="section-overline">01 / Selected work</span>
          <h2 className="text-title">Projects</h2>
          <p className="text-body text-muted">Things I built to learn, solve a problem, or explore an idea.</p>
        </div>
        <div className="work-list">
          {projects.map((project, index) => (
            <a key={project.id} id={project.id} className="work-item" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="work-main">
                <span className="work-title">{project.title}</span>
                <span className="work-description">{project.description}</span>
                <span className="work-tags">{project.tags.slice(0, 3).join(' · ')}</span>
              </span>
              <ArrowUpRight className="work-arrow" size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
