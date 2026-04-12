import { useState } from 'react'
import { projects } from '../utils/data'
import Modal from './Modal'

// ── Tag color map ──────────────────────────────────────────
function tagColor(tag) {
  const map = {
    'Agile': '#D85A30', 'Jira': '#D85A30', 'SDLC': '#D85A30',
    'Python Flask': '#2E75B6', 'Python': '#2E75B6',
    'YOLOv11-Seg': '#1D9E75', 'ByteTrack': '#1D9E75', 'OpenCV': '#1D9E75',
    'RTK-GNSS': '#BA7517', 'ToF': '#BA7517', 'Arduino': '#BA7517',
    'GIS互動式地圖': '#0891b2', 'QR Code 比例尺': '#0891b2',
    'Web Dev': '#534AB7', 'React': '#2E75B6', 'Vite': '#534AB7',
    'Tailwind CSS': '#0891b2', 'Claude AI': '#BA7517', 'Claude Code': '#BA7517',
    'Chart.js': '#1D9E75', 'Framer Motion': '#D85A30',
    'C#': '#534AB7', 'SQL Server': '#534AB7', 'Visual Studio': '#534AB7',
    '雙驗證演算法': '#1D9E75',
  }
  return map[tag] || '#64748b'
}

// ── Per-project theme ──────────────────────────────────────
const themes = {
  p1: { gradient: 'linear-gradient(140deg, #0d1f12 0%, #0e4a2a 55%, #1D9E75 100%)', accent: '#1D9E75' },
  p2: { gradient: 'linear-gradient(140deg, #0b1524 0%, #0f2a45 55%, #2E75B6 100%)', accent: '#2E75B6' },
  p3: { gradient: 'linear-gradient(140deg, #0f0d2e 0%, #1e1a52 55%, #534AB7 100%)', accent: '#534AB7' },
  p4: { gradient: 'linear-gradient(140deg, #1a1005 0%, #3a2208 55%, #BA7517 100%)', accent: '#BA7517' },
}

// ── Unique SVG sigil per project ───────────────────────────
function ProjectSigil({ id }) {
  if (id === 'p1') return (
    // Tree rings + measurement grid — carbon/environment
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="60" cy="60" r="36" stroke="rgba(255,255,255,0.13)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="60" cy="60" r="24" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="60" cy="60" r="13" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="4"  fill="rgba(255,255,255,0.45)" />
      <line x1="60" y1="8"  x2="60" y2="112" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="8"  y1="60" x2="112" y2="60" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      {[16,30,44,58,72,86,100].map(x => (
        <line key={x} x1={x} y1="57.5" x2={x} y2="62.5" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
      ))}
      <path d="M9,9 L9,22 M9,9 L22,9"   stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <path d="M111,9 L111,22 M111,9 L98,9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <path d="M9,111 L9,98 M9,111 L22,111"   stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <path d="M111,111 L111,98 M111,111 L98,111" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
    </svg>
  )

  if (id === 'p2') return (
    // Phone silhouette + scan beam + segmentation box
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <rect x="40" y="14" width="40" height="72" rx="6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
      <rect x="44" y="20" width="32" height="48" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <circle cx="60" cy="76" r="3.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="44" y1="44" x2="76" y2="44" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <line x1="44" y1="41" x2="76" y2="41" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
      <line x1="44" y1="47" x2="76" y2="47" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
      <rect x="51" y="26" width="18" height="26" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx="51" cy="26" r="1.8" fill="rgba(255,255,255,0.6)" />
      <circle cx="69" cy="26" r="1.8" fill="rgba(255,255,255,0.6)" />
      <circle cx="51" cy="52" r="1.8" fill="rgba(255,255,255,0.6)" />
      <circle cx="69" cy="52" r="1.8" fill="rgba(255,255,255,0.6)" />
      <line x1="80" y1="30" x2="100" y2="20" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
      <rect x="95" y="12" width="16" height="16" rx="2" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
      <line x1="99" y1="16" x2="107" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
      <line x1="99" y1="20" x2="107" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
      <line x1="99" y1="24" x2="103" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
    </svg>
  )

  if (id === 'p3') return (
    // Database stack + ER connection diagram
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      {[28, 50, 72].map((y, i) => (
        <g key={i}>
          <ellipse cx="60" cy={y} rx="28" ry="6.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          <line x1="32" y1={y} x2="32" y2={y + 18} stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          <line x1="88" y1={y} x2="88" y2={y + 18} stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        </g>
      ))}
      <ellipse cx="60" cy="90" rx="28" ry="6.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
      <line x1="60" y1="34" x2="60" y2="44" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="60" y1="56" x2="60" y2="66" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="88" y1="59" x2="108" y2="45" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="108" cy="45" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="32" y1="59" x2="12" y2="45" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="12" cy="45" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
    </svg>
  )

  if (id === 'p4') return (
    // Neural network constellation — AI / creative
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      {[
        [60,18],[22,42],[98,42],[36,78],[84,78],[60,102],
        [60,55],
      ].flatMap(([x,y], i, arr) =>
        arr.slice(i + 1).map(([x2,y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        ))
      )}
      {[
        [60,18,4.5],[22,42,3],[98,42,3],[36,78,3],[84,78,3],[60,102,3],[60,55,5.5],
      ].map(([x,y,r], i) => (
        <circle key={i} cx={x} cy={y} r={r}
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1" />
      ))}
      <circle cx="60" cy="55" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="2 3" />
      <circle cx="60" cy="18" r="8"  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="3 4" />
    </svg>
  )

  return null
}

// ── Tag pill ───────────────────────────────────────────────
function Tag({ label }) {
  const color = tagColor(label)
  return (
    <span style={{
      padding: '0.18rem 0.6rem', borderRadius: '4px', fontSize: '0.71rem',
      fontWeight: 600, letterSpacing: '0.02em',
      background: `${color}18`, color, border: `1px solid ${color}30`,
      fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

// ── Photo strip ────────────────────────────────────────────
function PhotoStrip({ images, aspect }) {
  const [w, h] = (aspect || '16/9').split('/').map(Number)
  const ratio = `${w} / ${h}`

  if (!images || images.length === 0) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="" style={{
          width: '100%', height: 'auto',
          borderRadius: '8px', display: 'block',
        }} />
      ))}
    </div>
  )
}

// ── GitHub button ──────────────────────────────────────────
function GithubBtn({ href, accent }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
        background: '#1B2A4A', color: '#fff', borderRadius: '8px',
        padding: '0.6rem 1.3rem', fontSize: '0.82rem', fontWeight: 600,
        textDecoration: 'none', fontFamily: 'Inter', transition: 'background 0.2s, transform 0.15s',
        border: `1px solid rgba(255,255,255,0.08)`,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#1B2A4A'; e.currentTarget.style.transform = '' }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
      查看原始碼
    </a>
  )
}

// ── Main component ─────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Diagonal line texture */}
      <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:1, pointerEvents:'none' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="diag-proj" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="28" stroke="#2E75B6" strokeWidth="1" strokeOpacity="0.22"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-proj)"/>
      </svg>
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Title */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1B2A4A' }}>
            專案開發
          </h2>
          <div style={{ width: '48px', height: '4px', background: '#2E75B6', borderRadius: '2px', margin: '0.75rem auto 0' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {projects.map((p, i) => {
            const theme = themes[p.id] || themes.p2
            return (
              <div
                key={p.id}
                className="card-tilt reveal"
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(46,117,182,0.1)',
                  boxShadow: '0 4px 20px rgba(27,42,74,0.07)',
                  cursor: 'pointer',
                  transitionDelay: `${i * 0.08}s`,
                }}
                onClick={() => setSelected(p)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = (e.clientX - rect.left) / rect.width - 0.5
                  const y = (e.clientY - rect.top) / rect.height - 0.5
                  e.currentTarget.style.transform = `perspective(700px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(27,42,74,0.14)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,42,74,0.07)'
                }}
              >
                {/* Banner */}
                <div style={{
                  background: theme.gradient,
                  height: '120px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Sigil — centred */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '110px', height: '110px' }}>
                      <ProjectSigil id={p.id} />
                    </div>
                  </div>

                  {/* Project index label */}
                  <div style={{
                    position: 'absolute', top: '0.7rem', right: '0.9rem',
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter',
                    textTransform: 'uppercase',
                  }}>
                    PROJECT {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Accent underline */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, ${theme.accent}cc, transparent)`,
                  }} />
                  {/* 計畫書 link — p1 only, bottom-right */}
                  {p.id === 'p1' && (
                    <a href="https://reurl.cc/0m9RNl" target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        position: 'absolute', bottom: '0.6rem', right: '0.9rem',
                        background: 'rgba(29,158,117,0.82)', color: '#fff',
                        fontSize: '0.63rem', fontWeight: 700, fontFamily: 'Inter',
                        padding: '0.22rem 0.7rem', borderRadius: '5px',
                        textDecoration: 'none', letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
                        zIndex: 10,
                      }}
                    >
                      點我看計畫書 →
                    </a>
                  )}
                  {/* 查看原始碼 — projects with github, bottom-right */}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        position: 'absolute', bottom: '0.6rem', right: '0.9rem',
                        background: 'rgba(0,0,0,0.38)', color: '#fff',
                        fontSize: '0.63rem', fontWeight: 700, fontFamily: 'Inter',
                        padding: '0.22rem 0.7rem', borderRadius: '5px',
                        textDecoration: 'none', letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
                        zIndex: 10,
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      查看原始碼
                    </a>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.35rem 1.5rem 1.5rem' }}>
                  <h3 style={{
                    fontSize: '0.95rem', fontWeight: 800, color: '#1B2A4A',
                    marginBottom: '0.2rem', lineHeight: 1.35,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: '0.73rem', color: theme.accent, fontWeight: 600,
                    marginBottom: '0.7rem', fontFamily: 'Inter',
                  }}>
                    {p.sub}
                  </p>
                  <p style={{
                    fontSize: '0.83rem', color: '#475569', lineHeight: 1.65,
                    marginBottom: '1rem',
                    display: '-webkit-box', WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
                    {p.tags.slice(0, 4).map(t => <Tag key={t} label={t} />)}
                    {p.tags.length > 4 && (
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', padding: '0.18rem 0.4rem', alignSelf: 'center' }}>
                        +{p.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(46,117,182,0.1)',
                  }}>
                    <span style={{
                      fontSize: '0.75rem', color: theme.accent, fontWeight: 700,
                      letterSpacing: '0.06em', fontFamily: 'Inter',
                    }}>
                      查看詳情 →
                    </span>
                    {p.images && p.images.length > 0 && (
                      <span style={{ fontSize: '0.68rem', color: '#cbd5e1', fontFamily: 'Inter', letterSpacing: '0.04em' }}>
                        {p.images.length} PHOTO{p.images.length > 1 ? 'S' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Modal ── */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (() => {
          const theme = themes[selected.id] || themes.p2
          const idx = projects.findIndex(p => p.id === selected.id)
          return (
            <>
              {/* Modal banner */}
              <div style={{
                background: theme.gradient,
                height: '96px',
                margin: '-2rem -2rem 1.5rem',
                borderRadius: '16px 16px 0 0',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem',
              }}>
                <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.55, width: '80px', height: '80px' }}>
                  <ProjectSigil id={selected.id} />
                </div>
                <span style={{
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', textTransform: 'uppercase',
                }}>
                  PROJECT {String(idx + 1).padStart(2, '0')}
                </span>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${theme.accent}cc, transparent)` }} />
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#1B2A4A', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                {selected.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: theme.accent, fontWeight: 600, marginBottom: '1rem', fontFamily: 'Inter' }}>
                {selected.sub}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem', marginBottom: '1.25rem' }}>
                {selected.tags.map(t => <Tag key={t} label={t} />)}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {selected.desc}
              </p>

              {/* Photos — p4 不顯示 */}
              {selected.id !== 'p4' && (
                <div style={{ marginBottom: selected.github ? '1.5rem' : 0, borderRadius: '10px', overflow: 'hidden' }}>
                  <PhotoStrip images={selected.images} aspect={selected.imageAspect} />
                </div>
              )}

              {/* GitHub button (only if project has one) */}
              {selected.github && (
                <GithubBtn href={selected.github} accent={theme.accent} />
              )}
            </>
          )
        })()}
      </Modal>
    </section>
  )
}
