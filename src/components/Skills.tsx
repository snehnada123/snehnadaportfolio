import { useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
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

type Point = { x: number; y: number; vx: number; vy: number }
const initial = () => nodes.map((node) => ({ x: node.x, y: node.y, vx: 0, vy: 0 }))
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

export function Skills() {
  const graphRef = useRef<HTMLDivElement>(null)
  const pointsRef = useRef<Point[]>(initial())
  const dragRef = useRef<number | null>(null)
  const [positions, setPositions] = useState(() => initial())
  const [active, setActive] = useState<string | null>(null)
  const [dragging, setDragging] = useState<number | null>(null)
  const activeIndex = nodes.findIndex((node) => node.label === active)
  const connected = new Set<number>()
  links.forEach(([a, b]) => {
    if (a === activeIndex) connected.add(b)
    if (b === activeIndex) connected.add(a)
  })

  useEffect(() => {
    const graph = graphRef.current
    if (!graph) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let frame = 0
    let last = 0
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting }, { threshold: 0 })
    observer.observe(graph)

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick)
      if (!visible || media.matches || time - last < 30) return
      last = time
      const points = pointsRef.current
      points.forEach((point, index) => {
        if (dragRef.current === index) return
        const anchor = nodes[index]
        const driftX = Math.sin(time * 0.00048 + index * 1.8) * 0.035
        const driftY = Math.cos(time * 0.00042 + index * 2.1) * 0.035
        let forceX = (anchor.x - point.x) * 0.006 + driftX
        let forceY = (anchor.y - point.y) * 0.006 + driftY
        points.forEach((other, otherIndex) => {
          if (index === otherIndex) return
          const dx = point.x - other.x
          const dy = point.y - other.y
          const distance = Math.hypot(dx, dy) || 1
          if (distance < 17) {
            const strength = (17 - distance) * 0.003
            forceX += (dx / distance) * strength
            forceY += (dy / distance) * strength
          }
        })
        point.vx = (point.vx + forceX) * 0.94
        point.vy = (point.vy + forceY) * 0.94
        point.x = clamp(point.x + point.vx, 10, 90)
        point.y = clamp(point.y + point.vy, 12, 88)
      })
      setPositions(points.map((point) => ({ ...point })))
    }
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [])

  const moveDragged = (event: PointerEvent<HTMLButtonElement>, index: number) => {
    if (dragRef.current !== index || !graphRef.current) return
    const rect = graphRef.current.getBoundingClientRect()
    const point = pointsRef.current[index]
    point.x = clamp(((event.clientX - rect.left) / rect.width) * 100, 10, 90)
    point.y = clamp(((event.clientY - rect.top) / rect.height) * 100, 12, 88)
    point.vx = 0
    point.vy = 0
    setPositions(pointsRef.current.map((item) => ({ ...item })))
  }

  return (
    <section id="skills" aria-label="Skills" className="page-section border-t border-border">
      <div className="mx-auto max-w-6xl page-inner flex flex-col gap-6 sm:gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-title">Skills</h2>
          <p className="text-body text-muted">
            A map of the tools I connect when building backend systems and AI applications.
            <span className="block text-small">Drag a skill to move it. Hover, focus, or tap to explore its connections.</span>
          </p>
        </div>
        <div ref={graphRef} className="skills-graph" aria-label="Interactive skills graph" onMouseLeave={() => setActive(null)}>
          <svg className="skills-graph__edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {links.map(([a, b]) => (
              <line key={`${a}-${b}`}
                x1={positions[a].x} y1={positions[a].y} x2={positions[b].x} y2={positions[b].y}
                className={activeIndex < 0 ? '' : a === activeIndex || b === activeIndex ? 'is-active' : 'is-dim'}
              />
            ))}
          </svg>
          {nodes.map((node, index) => (
            <button key={node.label} type="button"
              className={`skills-graph__node skills-graph__node--${node.group} ${activeIndex < 0 || index === activeIndex || connected.has(index) ? '' : 'is-dim'} ${index === activeIndex ? 'is-active' : ''} ${dragging === index ? 'is-dragging' : ''}`}
              style={{ left: `${positions[index].x}%`, top: `${positions[index].y}%` }}
              onMouseEnter={() => setActive(node.label)}
              onFocus={() => setActive(node.label)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((current) => current === node.label ? null : node.label)}
              onPointerDown={(event) => { dragRef.current = index; setDragging(index); event.currentTarget.setPointerCapture(event.pointerId) }}
              onPointerMove={(event) => moveDragged(event, index)}
              onPointerUp={() => { dragRef.current = null; setDragging(null) }}
              onPointerCancel={() => { dragRef.current = null; setDragging(null) }}
              aria-pressed={index === activeIndex}
            >{node.label}</button>
          ))}
          <span className="skills-graph__label" aria-hidden="true">SKILL MAP / LIVE</span>
        </div>
        <ul className="skill-list" aria-label="All skills">
          {skills.map((skill) => <li key={skill} className="tag-pill tag-pill--skill">{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}
