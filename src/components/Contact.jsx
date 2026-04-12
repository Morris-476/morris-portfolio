import { profile } from '../utils/data'

const contacts = [
  { icon: '📧', label: 'Email',  value: profile.email, href: `mailto:${profile.email}`, color: '#2E75B6' },
  { icon: '💻', label: 'GitHub', value: 'Morris-476',  href: profile.github,           color: '#38bdf8' },
  { icon: '📱', label: 'Phone',  value: profile.phone, href: `tel:${profile.phone}`,   color: '#0ea5e9' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(160deg, #0f172a 0%, #1B2A4A 50%, #1e3a5f 100%)',
        padding: '7rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(46,117,182,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-40px', left: '-40px',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Title */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800,
            background: 'linear-gradient(135deg, #fff 30%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            聯絡我
          </h2>
          <div style={{
            width: '56px', height: '4px', margin: '0.6rem auto 1rem',
            background: 'linear-gradient(90deg, #2E75B6, #38bdf8)', borderRadius: '2px',
          }} />
          <div style={{ marginBottom: '3rem' }} />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="reveal"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '0.75rem', textAlign: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '18px', padding: '2rem 1.5rem',
                textDecoration: 'none',
                transition: 'all 0.25s',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(46,117,182,0.15)'
                e.currentTarget.style.borderColor = `${c.color}55`
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.2), 0 0 20px ${c.color}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.color}30, ${c.color}15)`,
                border: `1px solid ${c.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.7rem',
              }}>
                {c.icon}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                {c.label}
              </div>
              <div style={{
                color: '#fff', fontWeight: 700, fontSize: '0.88rem',
                wordBreak: 'break-all', lineHeight: 1.4,
              }}>
                {c.value}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="reveal" style={{
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          color: 'rgba(255,255,255,0.25)',
          fontSize: '0.78rem',
        }}>
          © 2026 張恆輔 Morris &nbsp;·&nbsp; Built with React + Vite &nbsp;·&nbsp; Hosted on Vercel
        </div>
      </div>
    </section>
  )
}
