import { ArrowUpRight, BookOpenText } from 'lucide-react'
import { site } from '../data/site'

export function Writings() {
  return (
    <section id="writing" aria-label="Writing" className="section-layout section-rule">
      <div className="section-index"><span>04</span><span>WRITING</span></div>
      <div className="section-body">
      <div className="section-heading">
        <h2>Ideas, in progress.</h2>
        <p className="section-intro">
          Notes on building software, learning in public, and the questions I keep coming back to.
        </p>
      </div>

      <a
        className="writing-link"
        href={site.links.substack}
        target="_blank"
        rel="noreferrer"
      >
        <span className="writing-copy">
          <span className="writing-title"><BookOpenText size={15} strokeWidth={1.7} aria-hidden="true" /> Sneh’s Substack</span>
          <span className="writing-description">Read my latest notes and follow along</span>
        </span>
        <span className="writing-action">Visit publication <ArrowUpRight size={15} aria-hidden="true" /></span>
      </a>
      </div>
    </section>
  )
}

