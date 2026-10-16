import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {year} {site.author}</p>
        <p>Made with care, and with the blessings of my mom, Nita.</p>
        <a href="#hero">Back to top ↑</a>
      </div>
    </footer>
  )
}
