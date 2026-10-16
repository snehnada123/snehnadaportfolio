import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="section-layout section-rule">
      <div className="section-index"><span>05</span><span>TOOLKIT</span></div>
      <div className="section-body">
      <div className="section-heading">
        <h2>Tools I reach for.</h2>
      </div>
      <ul className="skill-list" aria-label="Skills">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      </div>
    </section>
  )
}

