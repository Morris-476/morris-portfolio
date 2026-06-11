import { useEffect, useState } from 'react'
import { profile, roles, stats } from '../utils/data'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ value, suffix, label, delay = 0 }) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref}
      className="float-badge"
      style={{
        animationDelay: `${delay}s`,
        textAlign: 'center',
        padding: '0.75rem 1.1rem',
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        borderRadius: '14px',
        border: '1px solid rgba(46,117,182,0.15)',
        boxShadow: '0 4px 16px rgba(27,42,74,0.08)',
        minWidth: '80px',
      }}
    >
      <div style={{
        fontSize: '1.55rem',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #1B2A4A, #2E75B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1.1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '0.2rem', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let t
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 42)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIdx])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '100px 2rem 5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        gap: '3.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>

        {/* ── Left: Photo ── */}
        <div className="reveal-left" style={{
          flex: '0 0 clamp(240px, 40%, 320px)',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{ position: 'relative', width: '290px', height: '290px' }}>

            {/* Outer glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-18px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46,117,182,0.12) 0%, transparent 70%)',
              zIndex: 0,
            }} />

            {/* Dashed spinning ring */}
            <svg
              className="spin-ring"
              style={{
                position: 'absolute',
                inset: '-22px',
                width: 'calc(100% + 44px)',
                height: 'calc(100% + 44px)',
                zIndex: 0,
              }}
              viewBox="0 0 334 334"
            >
              <circle cx="167" cy="167" r="155"
                stroke="url(#ringGrad)" strokeWidth="1.5"
                fill="none" strokeDasharray="9 6" />
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E75B6" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Photo polygon */}
            <div
              style={{
                width: '100%',
                height: '100%',
                clipPath: 'polygon(50% 0%, 95% 20%, 100% 70%, 75% 100%, 25% 100%, 0% 70%, 5% 20%)',
                background: 'linear-gradient(145deg, #1B2A4A 0%, #2563ab 55%, #38bdf8 100%)',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', gap: '0.5rem',
              }}>
                <span style={{ fontSize: '3.2rem' }}>👤</span>
                <span>個人照片</span>
              </div>

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(15,23,42,0.88)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem', opacity: 0,
                  transition: 'opacity 0.3s', color: '#fff', fontSize: '0.82rem',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <span>📧 {profile.email}</span>
                <span>📱 {profile.phone}</span>
                <span>💻 GitHub</span>
              </div>
            </div>

            {/* Orbit tags */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <div className="orbit-tag-cw" style={{
                  background: 'linear-gradient(135deg,#1B2A4A,#2E75B6)',
                  color: '#fff', borderRadius: '20px', padding: '5px 12px',
                  fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(46,117,182,0.35)',
                }}>
                  YOLOv11
                </div>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <div className="orbit-tag-ccw" style={{
                  background: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
                  color: '#fff', borderRadius: '20px', padding: '5px 12px',
                  fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(14,165,233,0.35)',
                }}>
                  RTK-GNSS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div className="reveal-right" style={{ flex: '1 1 300px' }}>

          {/* Status pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(46,117,182,0.08))',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '20px', padding: '0.3rem 0.95rem',
            fontSize: '0.8rem', color: '#166534', fontWeight: 600, marginBottom: '1.4rem',
          }}>
            <span className="glow-dot" style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
            }} />
            現正尋求實習機會
          </div>

          {/* Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
            <div style={{
              width: '5px', height: '58px', flexShrink: 0,
              background: 'linear-gradient(to bottom, #2E75B6, #38bdf8)',
              borderRadius: '3px',
            }} />
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #1B2A4A 40%, #2E75B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.05,
              margin: 0,
            }}>
              {profile.name}
            </h1>
          </div>

          <p style={{
            fontStyle: 'italic', color: '#2E75B6',
            fontSize: '1.05rem', fontWeight: 400,
            marginBottom: '0.4rem', marginLeft: '1.3rem', letterSpacing: '0.5px',
          }}>
            {profile.nameEn}
          </p>

          <p style={{
            color: '#64748b', fontSize: '0.85rem',
            marginBottom: '1.1rem', marginLeft: '1.3rem',
          }}>
            {profile.school}
          </p>

          {/* Typewriter */}
          <div style={{
            marginBottom: '1.6rem', marginLeft: '1.3rem',
            fontSize: '0.95rem', color: '#1B2A4A',
            background: 'rgba(46,117,182,0.06)',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.4rem 0.9rem', borderRadius: '8px',
            border: '1px solid rgba(46,117,182,0.12)',
          }}>
            <span style={{ color: '#64748b', fontWeight: 500 }}>現任</span>
            <span style={{ color: '#2E75B6', fontWeight: 700 }}>{displayed}</span>
            <span style={{ borderRight: '2px solid #2E75B6', animation: 'blink 1s step-end infinite', marginLeft: '1px' }}>&nbsp;</span>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
            marginBottom: '2rem',
          }}>
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.4} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              查看我的專案 →
            </a>
            <a href="#" className="btn-outline">
              ↓ 下載履歷 PDF
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
