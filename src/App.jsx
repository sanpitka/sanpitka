import { useLanguage } from './i18n/useLanguage.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import ProjectCarousel from './components/ProjectCarousel.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.meta.skipToContent}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <ProjectCarousel />
        <Contact />
      </main>

      {/* Outside <main> so it registers as the contentinfo landmark. */}
      <Footer />
    </>
  )
}

export default App
