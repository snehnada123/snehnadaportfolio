import { experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" aria-label="About and experience" className="section-layout section-rule">
      <div className="section-index"><span>02</span><span>ABOUT</span></div>
      <div className="section-body">
      <div className="section-heading">
        <h2>Curiosity is how I work.</h2>
        <p className="section-intro">
          I like getting close to a problem, understanding its moving parts, and making the solution feel simple. I’m especially interested in useful AI, dependable backends, and the details that make software a pleasure to use.
        </p>
      </div>

      <div className="experience-block">
        <p className="eyebrow experience-label">EXPERIENCE</p>
        {experience.map((entry) => (
          <article key={entry.id} className="experience-row">
            <div className="experience-title-group">
              <h3>{entry.company}</h3>
              <p>{entry.role} · {entry.type}</p>
            </div>
            <div className="experience-detail">
              <p>{entry.description}</p>
              <ul className="inline-tags" aria-label="Technologies">
                {entry.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}

