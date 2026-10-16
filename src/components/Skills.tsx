import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="page-section page-wrap section-divider compact-section">
      <div className="section-heading">
        <p className="eyebrow">04 / Toolkit</p>
        <h2>Tools I reach for.</h2>
      </div>
      <ul className="skill-list" aria-label="Skills">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}
