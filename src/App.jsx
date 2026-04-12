import { useScrollReveal } from './hooks/useScrollReveal'

import MeshBg         from './components/MeshBg'
import BgCanvas       from './components/BgCanvas'
import Navbar         from './components/Navbar'
import HeroAbout      from './components/HeroAbout'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Competition    from './components/Competition'
import Certs          from './components/Certs'
import LearningJourney from './components/LearningJourney'
import Contact        from './components/Contact'

export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Animated gradient mesh background */}
      <MeshBg />

      {/* Particle canvas */}
      <BgCanvas />

      {/* Rotating geometry (top-right accent) */}
      <svg
        style={{
          position: 'fixed', top: '-90px', right: '-90px',
          width: '360px', height: '360px',
          opacity: 0.04, zIndex: 0, pointerEvents: 'none',
          animation: 'rotateSlow 40s linear infinite',
        }}
        viewBox="0 0 200 200" fill="none"
      >
        <polygon points="100,8 192,55 192,145 100,192 8,145 8,55"
          stroke="#2E75B6" strokeWidth="1.2" fill="none"/>
        <circle cx="100" cy="100" r="78"
          stroke="#38bdf8" strokeWidth="1" fill="none" strokeDasharray="7 5"/>
        <polygon points="100,28 172,65 172,135 100,172 28,135 28,65"
          stroke="#2E75B6" strokeWidth="0.7" fill="none"/>
      </svg>

      <Navbar />

      <main>
        <HeroAbout />
        <Skills />
        <Projects />
        <Competition />
        <Certs />
        <LearningJourney />
        <Contact />
      </main>
    </>
  )
}
