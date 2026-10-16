import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { FeaturedWork } from './components/FeaturedWork'
import { Writings } from './components/Writings'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
  return (
    <div className="site-shell antialiased">
      <Header />
      <div className="main-panel">
        <div className="topbar">
          <span className="topbar-path"><span>PORTFOLIO</span><span className="path-slash">/</span> PERSONAL SITE</span>
          <div className="topbar-actions"><span className="availability"><span className="status-dot" /> Available for interesting work</span><ThemeToggle /></div>
        </div>
        <main id="main" className="content-column">
          <Hero />
          <Experience />
          <FeaturedWork />
          <Writings />
          <Skills />
          <Education />
          <ContactCTA />
          <Footer />
        </main>
      </div>
    </div>
  )
}

