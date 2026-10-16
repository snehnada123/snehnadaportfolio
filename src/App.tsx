import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { FeaturedWork } from './components/FeaturedWork'
import { Writings } from './components/Writings'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="site-shell min-h-screen flex flex-col antialiased">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Experience />
        <FeaturedWork />
        <Writings />
        <Skills />
        <Education />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
