import { site } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function closeMobileMenu() {
  const menu = document.getElementById('mobile-nav')
  if (menu instanceof HTMLDetailsElement) menu.open = false
}

export function Header() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a aria-label={`${site.author} — home`} href="#hero" className="wordmark">
            {site.author}<span className="wordmark-period">.</span>
          </a>

          <nav aria-label="Primary" className="desktop-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          <div className="mobile-actions">
            <ThemeToggle />
            <details id="mobile-nav" className="mobile-menu">
              <summary aria-label="Open navigation">Menu</summary>
              <nav aria-label="Primary" className="mobile-nav-panel">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  )
}
