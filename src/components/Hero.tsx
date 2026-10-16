import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="hero-section page-wrap">
      <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Backend &amp; AI engineer · Anand, India</p>
      <h1>Curious by nature.<br className="hero-break" />Building with intent.</h1>
      <p className="hero-copy">
        I’m Sneh — a curious engineer drawn to the hard, interesting questions. I build backend systems and AI tools that make complex ideas easier to use, starting from first principles and learning by building.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={16} aria-hidden="true" /></a>
        <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <div className="hero-socials" aria-label="Social links">
        <a href={site.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={site.links.x} target="_blank" rel="noreferrer">X <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
