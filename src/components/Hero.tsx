import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="section-layout hero-section">
      <div className="section-index"><span>01</span><span>PROFILE</span></div>
      <div className="section-body hero-body">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Backend &amp; AI engineer · Anand, India</p>
        <h1>Building thoughtful software, one useful idea at a time.</h1>
        <p className="hero-copy">
          I’m Sneh — a curious engineer who likes getting close to hard problems and making complex things feel simple. I build dependable backends and practical AI tools, learning by making along the way.
        </p>
        <div className="hero-actions">
          <a className="text-link" href="#projects">Explore selected work <ArrowDown size={14} aria-hidden="true" /></a>
          <a className="text-link muted-link" href="#contact">Say hello <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

