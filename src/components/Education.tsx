import { education } from '../data/resume'

export function Education() {
  return (
    <section id="education" aria-label="Education" className="page-section page-wrap section-divider compact-section">
      <div className="section-heading">
        <p className="eyebrow">05 / Education</p>
        <h2>Where it started.</h2>
      </div>
      <div className="education-list">
        {education.map((entry) => (
          <article key={entry.id} className="education-row">
            <div>
              <h3>{entry.school}</h3>
              <p>{entry.detail}</p>
            </div>
            <span>{entry.period}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
