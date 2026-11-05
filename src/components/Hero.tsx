import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { TimeOnEarth } from './TimeOnEarth'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="page-section border-b border-border">
      <div className="mx-auto max-w-6xl page-inner hero-editorial">
        <p className="hero-kicker">Sneh Nada <span aria-hidden="true">/</span> backend & AI engineer</p>
        <h1 className="hero-heading">Hi, I’m Sneh. I build the systems behind useful AI tools.</h1>
        <p className="hero-intro">I’m bloody curious about how things work. I learn from first principles, then turn what I learn into backend systems, AI workflows, and small tools people can actually use.</p>
        <div className="hero-links" aria-label="Explore and connect">
          <a href="#projects">Selected work <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={`mailto:${site.email}`}>Email me <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="hero-footnote"><TimeOnEarth /></div>
      </div>
    </section>
  )
}
