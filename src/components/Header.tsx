import { ArrowUpRight, BriefcaseBusiness, GraduationCap, House, Mail, NotebookPen, UserRound, Wrench } from 'lucide-react'
import { site } from '../data/site'

const navigation = [
  { label: 'Overview', href: '#hero', icon: House },
  { label: 'Experience', href: '#experience', icon: UserRound },
  { label: 'Selected work', href: '#projects', icon: BriefcaseBusiness },
  { label: 'Writing', href: '#writing', icon: NotebookPen },
  { label: 'Toolkit', href: '#skills', icon: Wrench },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export function Header() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <aside className="profile-rail" aria-label="Portfolio navigation">
        <a href="#hero" className="identity-link" aria-label={`${site.author} home`}>
          <span className="identity-mark" aria-hidden="true"><span>SN</span></span>
          <span className="identity-name">{site.author}<span className="wordmark-period">.</span></span>
        </a>
        <p className="rail-description">Backend &amp; AI engineer building thoughtful software and useful tools.</p>

        <div className="rail-group">
          <p className="rail-label">NAVIGATION</p>
          <nav aria-label="Primary" className="rail-nav">
            {navigation.map(({ label, href, icon: Icon }) => (
              <a key={href} href={href} className="rail-link">
                <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="rail-bottom">
          <p className="rail-label">ELSEWHERE</p>
          <div className="rail-socials">
            <a href={site.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={site.links.x} target="_blank" rel="noreferrer">X <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
          <span className="rail-location">Anand, India</span>
        </div>
      </aside>
    </>
  )
}

