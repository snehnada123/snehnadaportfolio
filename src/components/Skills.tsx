import { useState } from 'react'
import { skills } from '../data/skills'

const nodes = [
  { label: 'Python', x: 25, y: 32, group: 'language' },
  { label: 'SQL', x: 51, y: 20, group: 'language' },
  { label: 'C++', x: 76, y: 31, group: 'language' },
  { label: 'FastAPI', x: 18, y: 63, group: 'backend' },
  { label: 'PostgreSQL', x: 47, y: 54, group: 'backend' },
  { label: 'LangChain', x: 78, y: 66, group: 'ai' },
  { label: 'Docker', x: 30, y: 81, group: 'infra' },
  { label: 'Kubernetes', x: 68, y: 85, group: 'infra' },
  { label: 'Git', x: 58, y: 39, group: 'infra' },
  { label: 'GitHub', x: 90, y: 46, group: 'infra' },
] as const

const links: [number, number][] = [
  [0, 3], [0, 4], [0, 5], [1, 4], [2, 0], [3, 4],
  [3, 6], [4, 7], [5, 0], [5, 7], [6, 7], [8, 9], [8, 6], [8, 3],
]

export function Skills() {
  const [active, setActive] = useState<string | null>(null)
  const connected = new Set<number>()
  const activeIndex = nodes.findIndex((node) => node.label === active)
  links.forEach(([a, b]) => {
    if (a === activeIndex) connected.add(b)
    if (b === activeIndex) connected.add(a)
  })

  return (
    <section id="skills" aria-label="Skills" className="page-section border-t border-border">
      <div className="mx-auto max-w-6xl page-inner flex flex-col gap-6 sm:gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-title">Skills</h2>
          <p className="text-body text-muted">
            A map of the tools I connect when building backend systems and AI applications.
            <span className="block text-small">Hover, focus, or tap a skill to explore its connections.</span>
          </p>
        </div>
        <div className="skills-graph" aria-label="Interactive skills graph" onMouseLeave={() => setActive(null)}>
          <svg className="skills-graph__edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {links.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                className={activeIndex < 0 ? '' : a === activeIndex || b === activeIndex ? 'is-active' : 'is-dim'}
              />
            ))}
          </svg>
          {nodes.map((node, index) => (
            <button
              key={node.label}
              type="button"
              className={`skills-graph__node skills-graph__node--${node.group} ${activeIndex < 0 || index === activeIndex || connected.has(index) ? '' : 'is-dim'} ${index === activeIndex ? 'is-active' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActive(node.label)}
              onFocus={() => setActive(node.label)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((current) => current === node.label ? null : node.label)}
              aria-pressed={index === activeIndex}
            >
              {node.label}
            </button>
          ))}
          <span className="skills-graph__label" aria-hidden="true">SKILL MAP / 01</span>
        </div>
        <ul className="skill-list" aria-label="All skills">
          {skills.map((skill) => <li key={skill} className="tag-pill tag-pill--skill">{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}
