import { BirthdayBalloons } from './components/BirthdayBalloons'
import { MobilePreviewShell } from './components/MobilePreviewShell'
import { Header } from './components/Header'
import { MagneticDock } from './components/MagneticDock'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { FeaturedWork } from './components/FeaturedWork'
import { GitHubActivity } from './components/GitHubActivity'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { useClickSound } from './hooks/useClickSound'

export default function App() {
  useClickSound()

  return (
    <MobilePreviewShell>
      <div className="min-h-full flex flex-col antialiased">
        <BirthdayBalloons />
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <FeaturedWork />
          <GitHubActivity />
          <ContactCTA />
        </main>
        <Footer />
        <MagneticDock />
      </div>
    </MobilePreviewShell>
  )
}