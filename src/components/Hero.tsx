import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { ResumeButton } from './ResumeButton'
import { TimeOnEarth } from './TimeOnEarth'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="page-section border-b border-border">
      <div className="mx-auto max-w-6xl page-inner hero-editorial">
        <p className="hero-kicker">Sneh Nada <span aria-hidden="true">/</span> backend & AI engineer</p>
        <h1 className="hero-heading">I build useful things and make complex ideas feel simple.</h1>
        <p className="hero-intro">{site.home.paragraph}</p>
        <div className="hero-links" aria-label="Explore and connect">
          <a href="#projects">Selected work <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
          <ResumeButton />
        </div>
        <div className="hero-footnote"><TimeOnEarth /></div>
      </div>
    </section>
  )
}
