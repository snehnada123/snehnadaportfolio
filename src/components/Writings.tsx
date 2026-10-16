import { ArrowUpRight, BookOpenText } from 'lucide-react'
import { site } from '../data/site'

export function Writings() {
  return (
    <section id="writing" aria-label="Writing" className="page-section page-wrap">
      <div className="section-heading">
        <p className="eyebrow">03 / Writing</p>
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
        <span className="writing-icon" aria-hidden="true"><BookOpenText size={19} strokeWidth={1.6} /></span>
        <span className="writing-copy">
          <span className="writing-title">Sneh’s Substack</span>
          <span className="writing-description">Read my latest notes and follow along</span>
        </span>
        <span className="writing-action">Visit publication <ArrowUpRight size={15} aria-hidden="true" /></span>
      </a>
    </section>
  )
}
