import { useEffect, useState } from 'react'

const navLinks = [
  { label: '關於我',  href: '#hero' },
  { label: '技能',    href: '#skills' },
  { label: '專案',    href: '#projects' },
  { label: '競賽',    href: '#competition' },
  { label: '證照',    href: '#certs' },
  { label: '學習歷程', href: '#journey' },
  { label: '聯絡',    href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = navLinks.map(l => l.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: '62px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem',
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(255,255,255,0.84)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(27,42,74,0.08)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(46,117,182,0.1)' : 'none',
    }}>

      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 800, fontSize: '1.12rem',
        textDecoration: 'none', letterSpacing: '-0.3px',
        display: 'flex', alignItems: 'center', gap: '2px',
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #1B2A4A, #2E75B6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>個人履歷</span>
        <span style={{
          background: 'linear-gradient(135deg, #38bdf8, #f59e0b)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          fontSize: '1.3rem',
        }}>.</span>
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', gap: '0.1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {navLinks.map(link => {
          const on = active === link.href
          return (
            <li key={link.href}>
              <a href={link.href} style={{
                display: 'block',
                padding: '0.32rem 0.75rem', borderRadius: '8px',
                textDecoration: 'none', fontSize: '0.84rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: on ? 700 : 500,
                color: on ? '#2E75B6' : '#1B2A4A',
                background: on ? 'rgba(46,117,182,0.1)' : 'transparent',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { if (!on) e.currentTarget.style.background = 'rgba(46,117,182,0.06)' }}
              onMouseLeave={e => { if (!on) e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
