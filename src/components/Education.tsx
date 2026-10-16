import { education } from '../data/resume'

export function Education() {
  return (
    <section id="education" aria-label="Education" className="section-layout section-rule">
      <div className="section-index"><span>06</span><span>EDUCATION</span></div>
      <div className="section-body">
      <div className="section-heading">
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
      </div>
    </section>
  )
}

