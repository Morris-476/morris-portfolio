import { profile } from '../utils/data'

const bentoItems = [
  { label: '就讀學校', value: '淡江大學', sub: '資管系 · 輔修資工系', span: 1, emoji: '🏫', color: '#2E75B6' },
  { label: '學業成績', value: `GPA ${profile.gpa}`, sub: `系排前 ${profile.rank}`, span: 1, emoji: '📈', color: '#1D9E75' },
  { label: '語言能力', value: `TOEIC ${profile.toeic}`, sub: '藍色證書', span: 1, emoji: '🌐', color: '#534AB7' },
  { label: '2026 亞太博覽會', value: '確定出席', sub: '代表淡江大學在國際舞台展示研究成果', span: 2, emoji: '🌏', color: '#0ea5e9' },
  { label: '品管圈競賽', value: '全校第一名', sub: '淡江大學品管圈', span: 1, emoji: '🏆', color: '#BA7517' },
  { label: '工作經歷', value: '文錙音樂廳', sub: '燈光音響 · 導播', span: 3, emoji: '🎵', color: '#D85A30' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#f0f6ff', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Title */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
            <span className="title-gradient">關於我</span>
          </h2>
          <div className="section-bar" />
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'stretch' }}>

          {/* Left photo — fills full column height */}
          <div className="reveal-left" style={{ flex: '0 0 clamp(200px, 30%, 270px)', minHeight: '360px' }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(27,42,74,0.15)',
              position: 'relative',
            }}>
              <img
                src="/images/headshot.jpg"
                alt="張恆輔 Morris"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Bottom name overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1rem 1rem',
                background: 'linear-gradient(to top, rgba(15,23,42,0.72), transparent)',
                color: '#fff', textAlign: 'center',
                fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em',
              }}>
                張恆輔 · Morris
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="reveal-right" style={{ flex: '1 1 300px' }}>

            {/* Quote */}
            <div style={{
              borderLeft: '4px solid transparent',
              borderImage: 'linear-gradient(to bottom, #2E75B6, #38bdf8) 1',
              paddingLeft: '1.25rem',
              marginBottom: '2rem',
            }}>
              <p style={{
                color: '#334155', fontSize: '0.95rem', lineHeight: 1.8,
                fontStyle: 'italic',
              }}>
                {profile.about}
              </p>
            </div>

            {/* Bento Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.7rem',
              marginBottom: '1.5rem',
            }}>
              {bentoItems.map(item => (
                <div
                  key={item.label}
                  className="card"
                  style={{
                    gridColumn: `span ${item.span}`,
                    padding: '1rem',
                    cursor: 'default',
                    borderTop: `3px solid ${item.color}`,
                  }}
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect()
                    const x = (e.clientX - r.left) / r.width - 0.5
                    const y = (e.clientY - r.top)  / r.height - 0.5
                    e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`
                  }}
                  onMouseLeave={e => { e.currentTarget.style.transform = '' }}
                >
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{item.emoji}</div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '0.1rem' }}>{item.label}</div>
                  <div style={{ fontWeight: 800, color: '#1B2A4A', fontSize: '0.92rem' }}>{item.value}</div>
                  {item.sub && <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.1rem' }}>{item.sub}</div>}
                </div>
              ))}
            </div>

            {/* Contact bar */}
            <div style={{
              display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
            }}>
              {[
                { icon: '📧', label: 'Email',  value: profile.email,   href: `mailto:${profile.email}` },
                { icon: '📱', label: 'Phone',  value: profile.phone,   href: `tel:${profile.phone}` },
                { icon: '💻', label: 'GitHub', value: 'Morris-476',    href: profile.github },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0.45rem 0.9rem',
                    background: '#fff', borderRadius: '8px',
                    border: '1px solid rgba(46,117,182,0.15)',
                    textDecoration: 'none', color: '#1B2A4A',
                    fontSize: '0.82rem', fontWeight: 500,
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 8px rgba(27,42,74,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#2E75B6'
                    e.currentTarget.style.color = '#2E75B6'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(46,117,182,0.15)'
                    e.currentTarget.style.color = '#1B2A4A'
                  }}
                >
                  <span>{c.icon}</span>
                  <span>{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
