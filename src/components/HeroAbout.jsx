import { useEffect, useState } from 'react'
import { profile, roles, stats } from '../utils/data'
import { useCountUp } from '../hooks/useCountUp'

/* ── SVG icon set ── */
function SvgIcon({ type, size = 16, color = '#38bdf8' }) {
  const s = size
  if (type === 'trophy') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <polygon points="10,2 12,7.5 18,7.5 13,11 15,17 10,13.5 5,17 7,11 2,7.5 8,7.5"
        stroke={color} strokeWidth="1.2" fill={`${color}22`}/>
      <line x1="10" y1="17" x2="10" y2="19" stroke={color} strokeWidth="1.1"/>
      <line x1="7.5" y1="19" x2="12.5" y2="19" stroke={color} strokeWidth="1.1"/>
    </svg>
  )
  if (type === 'trend') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <polyline points="2,16 6.5,10 11,13 18,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="4" r="1.8" fill={color}/>
      <line x1="2" y1="18" x2="18" y2="18" stroke={color} strokeWidth="0.7" strokeOpacity="0.35"/>
    </svg>
  )
  if (type === 'globe') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke={color} strokeWidth="1.2"/>
      <ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke={color} strokeWidth="0.8"/>
      <line x1="2.5" y1="10" x2="17.5" y2="10" stroke={color} strokeWidth="0.8"/>
      <line x1="3.5" y1="6.5" x2="16.5" y2="6.5" stroke={color} strokeWidth="0.5" strokeOpacity="0.45"/>
      <line x1="3.5" y1="13.5" x2="16.5" y2="13.5" stroke={color} strokeWidth="0.5" strokeOpacity="0.45"/>
    </svg>
  )
  if (type === 'cert') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="12" rx="2" stroke={color} strokeWidth="1.2"/>
      <circle cx="10" cy="9" r="3" stroke={color} strokeWidth="1"/>
      <path d="M7.5 15 L7.5 18 L10 17 L12.5 18 L12.5 15" stroke={color} strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  )
  if (type === 'star') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <polygon points="10,2 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7"
        stroke={color} strokeWidth="1.2" fill={`${color}22`}/>
    </svg>
  )
  if (type === 'rank') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="13" width="4" height="5" fill={`${color}30`} stroke={color} strokeWidth="1"/>
      <rect x="8" y="9" width="4" height="9" fill={`${color}30`} stroke={color} strokeWidth="1"/>
      <rect x="13" y="5" width="4" height="13" fill={`${color}30`} stroke={color} strokeWidth="1"/>
      <circle cx="15" cy="4" r="2" fill={color} fillOpacity="0.6"/>
    </svg>
  )
  if (type === 'email') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke={color} strokeWidth="1.2"/>
      <polyline points="2,6 10,12 18,6" stroke={color} strokeWidth="1.1"/>
    </svg>
  )
  if (type === 'phone') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <rect x="6" y="2" width="8" height="16" rx="2" stroke={color} strokeWidth="1.2"/>
      <circle cx="10" cy="15.5" r="0.9" fill={color}/>
      <line x1="8" y1="5" x2="12" y2="5" stroke={color} strokeWidth="0.9"/>
    </svg>
  )
  if (type === 'code') return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <polyline points="7,5 2,10 7,15" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="13,5 18,10 13,15" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="11" y1="3" x2="9" y2="17" stroke={color} strokeWidth="1.1" strokeOpacity="0.55"/>
    </svg>
  )
  return null
}

/* ── AR Floating chip ── */
function FloatChip({ iconType, iconColor, label, value, top, right, left, bottom, delay = 2, duration = 4 }) {
  return (
    <div style={{
      position: 'absolute', top, right, left, bottom,
      background: 'rgba(5,13,28,0.82)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      border: `1px solid ${iconColor}40`,
      borderRadius: '12px',
      padding: '0.45rem 0.7rem',
      boxShadow: `0 6px 24px rgba(0,0,0,0.45), 0 0 12px ${iconColor}18`,
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      zIndex: 10,
      animation: `chipFloat ${duration}s ease-in-out ${delay}s both infinite`,
      pointerEvents: 'none', whiteSpace: 'nowrap',
    }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '7px',
        background: `${iconColor}1a`,
        border: `1px solid ${iconColor}2e`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <SvgIcon type={iconType} size={14} color={iconColor} />
      </div>
      <div>
        <div style={{ fontSize: '0.54rem', color: 'rgba(255,255,255,0.36)', fontWeight: 500, fontFamily: 'Inter', letterSpacing: '0.05em' }}>{label}</div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: '#e2e8f0', fontSize: '0.78rem', lineHeight: 1.1 }}>{value}</div>
      </div>
    </div>
  )
}

/* ── Bento card ── */
const bentoItems = [
  { label: '就讀學校', value: '淡江大學', sub: '資管系 · 輔修資工系', span: 1, accent: '#2E75B6' },
  { label: 'GPA', value: '3.53 / 4.0', sub: '系排前 14.8%', span: 1, accent: '#1D9E75' },
  { label: 'TOEIC', value: '840', sub: '藍色證書', span: 1, accent: '#534AB7', photoUrl: '/images/certs/TOEIC.jpg' },
  { label: '2026 亞太博覽會', value: '確定出席', sub: '代表淡江大學展示研究成果', span: 1, accent: '#0ea5e9' },
  { label: '品管圈競賽', value: '全校第一名', sub: '淡江大學', span: 1, accent: '#BA7517' },
  { label: '工作經歷', value: '文錙音樂廳', sub: '燈光音響 · 導播 ', span: 1, accent: '#D85A30' },
]

export default function HeroAbout() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [scanDone, setScanDone] = useState(false)
  const [toeicOpen, setToeicOpen] = useState(false)

  useEffect(() => {
    const cur = roles[roleIdx]
    let t
    if (typing) {
      t = displayed.length < cur.length
        ? setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 80)
        : setTimeout(() => setTyping(false), 2000)
    } else {
      t = displayed.length > 0
        ? setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        : (() => { setRoleIdx(i => (i + 1) % roles.length); setTyping(true) })()
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIdx])

  useEffect(() => {
    const t = setTimeout(() => setScanDone(true), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      padding: '100px 2rem 5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #040c18 0%, #071020 45%, #0c1a32 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background grid */}
      <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:0.03, pointerEvents:'none' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1" fill="#38bdf8" fillOpacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)"/>
      </svg>
      {/* Ambient orbs */}
      <div style={{ position:'absolute', top:'10%', left:'5%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(46,117,182,0.12) 0%, transparent 65%)', filter:'blur(70px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'15%', right:'5%', width:'380px', height:'380px', borderRadius:'50%', background:'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)', filter:'blur(60px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: '1180px', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* ── TOP ROW ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.55fr',
          gap: '4rem',
          alignItems: 'stretch',
          marginBottom: '3rem',
        }}>

          {/* ═══ LEFT: Photo + floating chips ═══ */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Outer container sized to hold photo + chips */}
            <div style={{ position: 'relative', width: '340px', height: '460px' }}>

              {/* Morphing rings */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: '300px', height: '360px',
                transform: 'translate(-50%, -50%)',
                border: '1.5px solid rgba(56,189,248,0.18)',
                borderRadius: '30% 70% 62% 38% / 44% 44% 56% 56%',
                animation: 'morphBorder 8s ease-in-out infinite',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: '320px', height: '380px',
                transform: 'translate(-50%, -50%)',
                border: '1px solid rgba(46,117,182,0.08)',
                borderRadius: '40% 60% 35% 65% / 55% 45% 55% 45%',
                animation: 'morphBorder 12s ease-in-out infinite reverse',
                zIndex: 0,
              }} />

              {/* Glow */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: '240px', height: '300px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(46,117,182,0.28) 0%, transparent 70%)',
                filter: 'blur(28px)',
                animation: 'glowPulseBlue 3.5s ease-in-out infinite',
                zIndex: 0,
              }} />

              {/* Photo frame — centered in outer div */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '230px', height: '300px',
                borderRadius: '22px',
                overflow: 'hidden',
                zIndex: 2,
                boxShadow: '0 28px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(56,189,248,0.14)',
              }}>
                <img
                  src="/images/headshot/個人照片.jpg"
                  alt="張恆輔"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                    animation: 'heroReveal 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s both',
                  }}
                />

                {/* Scan line */}
                {!scanDone && (
                  <div style={{
                    position: 'absolute', left: 0, right: 0, top: 0, height: '3px',
                    background: 'linear-gradient(90deg, transparent 0%, #38bdf8 20%, rgba(255,255,255,0.95) 50%, #38bdf8 80%, transparent 100%)',
                    boxShadow: '0 0 16px #38bdf8, 0 0 40px rgba(56,189,248,0.6)',
                    animation: 'scanDown 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
                    zIndex: 6,
                  }} />
                )}

                {/* Hover contact reveal */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(4,12,24,0.92)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '0.8rem', opacity: 0, transition: 'opacity 0.35s',
                  color: '#94a3b8', fontSize: '0.78rem', fontFamily: 'Inter',
                  zIndex: 7,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <span style={{ color: '#38bdf8', fontSize: '0.68rem', letterSpacing: '0.14em', fontWeight: 700 }}>— 聯絡方式 —</span>
                  <span style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}><SvgIcon type="email" size={12} color="#38bdf8"/> {profile.email}</span>
                  <span style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}><SvgIcon type="phone" size={12} color="#38bdf8"/> {profile.phone}</span>
                  <span style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}><SvgIcon type="code" size={12} color="#38bdf8"/> GitHub</span>
                </div>
              </div>

              {/* Top accent */}
              <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'48px', height:'3px', background:'linear-gradient(90deg,#2E75B6,#38bdf8)', borderRadius:'2px', zIndex:5 }} />
              <div style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:'22px', height:'3px', background:'rgba(56,189,248,0.35)', borderRadius:'2px', zIndex:5 }} />

              {/* ── 5 Floating chips ── */}
              {/* 1: Top-right — 品管圈 */}
              <FloatChip iconType="trophy" iconColor="#BA7517"
                label="品管圈競賽" value="全校第一名"
                top="4%" right="-2px" delay={2.2} duration={4.3} />
              {/* 2: Top-left — 系排名 */}
              <FloatChip iconType="rank" iconColor="#2E75B6"
                label="系排名" value="前 14.8%"
                top="12%" left="0px" delay={2.8} duration={4.7} />
              {/* 3: Mid-left — GPA */}
              <FloatChip iconType="trend" iconColor="#1D9E75"
                label="GPA" value="3.53 / 4.0"
                top="44%" left="-4px" delay={3.1} duration={4.5} />
              {/* 3b: Mid-right — 創新創業 */}
              <FloatChip iconType="star" iconColor="#22c55e"
                label="創新創業競賽" value="全校第三名"
                top="28%" right="-2px" delay={3.4} duration={4.6} />
              {/* 4: Bottom-right — TOEIC */}
              <FloatChip iconType="globe" iconColor="#534AB7"
                label="TOEIC" value="840 分"
                bottom="14%" right="-2px" delay={2.5} duration={5.0} />
              {/* 5: Bottom — 證照 */}
              <FloatChip iconType="cert" iconColor="#0ea5e9"
                label="已取得證照" value="9+ 張"
                bottom="2%" left="18%" delay={3.5} duration={4.2} />
            </div>
          </div>

          {/* ═══ RIGHT: Info ═══ */}
          <div style={{
            animation: 'heroFadeRight 1s cubic-bezier(0.16,1,0.3,1) 0.5s both',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            {/* Status */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: '20px', padding: '0.3rem 1rem',
              fontSize: '0.77rem', color: '#4ade80', fontWeight: 600, marginBottom: '1.5rem',
              fontFamily: 'Inter', width: 'fit-content',
            }}>
              <span className="glow-dot" style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block' }} />
              現正尋求實習機會
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Outfit', 'Noto Sans TC', sans-serif",
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              fontWeight: 900, lineHeight: 1, letterSpacing: '-1.5px', margin: '0 0 0.5rem',
              background: 'linear-gradient(135deg, #c8d8f0 15%, #38bdf8 60%, #7dd3fc 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {profile.name}
            </h1>
            <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.9rem', fontWeight:300, letterSpacing:'6px', color:'#38bdf8', opacity:0.5, marginBottom:'0.6rem' }}>
              {profile.nameEn.toUpperCase()}
            </div>
            <div style={{ color:'#3d5575', fontSize:'0.8rem', marginBottom:'1.2rem', fontFamily:'Inter' }}>
              {profile.school}
            </div>

            {/* Divider */}
            <div style={{ height:'1px', marginBottom:'1.2rem', background:'linear-gradient(90deg,rgba(56,189,248,0.38),rgba(46,117,182,0.18),transparent)' }} />

            {/* Typewriter + CTA */}
            <div style={{ display:'flex', alignItems:'center', width:'100%', maxWidth:'500px', marginBottom:'1.4rem' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}>
                <span style={{
                  background:'linear-gradient(135deg,#0f2040,#2E75B6)', color:'#7dd3fc',
                  fontSize:'0.68rem', fontWeight:700, padding:'0.2rem 0.65rem', borderRadius:'6px',
                  letterSpacing:'1px', border:'1px solid rgba(56,189,248,0.2)',
                  flexShrink:0,
                }}>現任</span>
                <span style={{ color:'#38bdf8', fontWeight:700, fontSize:'0.92rem', minWidth:'12ch', display:'inline-block' }}>{displayed}</span>
                <span style={{ borderRight:'2px solid #38bdf8', animation:'blink 1s step-end infinite' }}>&nbsp;</span>
              </div>
              <a href="#projects" className="btn-primary" style={{ marginLeft:'auto', flexShrink:0 }}>查看我的專案 →</a>
            </div>

            {/* About */}
            <p style={{
              color:'#ffffff', fontSize:'0.86rem', lineHeight:1.95,
              borderLeft:'3px solid rgba(56,189,248,0.4)', paddingLeft:'1rem',
              marginBottom:'1.6rem', maxWidth:'500px',
            }}>
              {profile.about}
            </p>

            {/* Contact chips */}
            <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'1.8rem' }}>
              {[
                { t:'email', v:profile.email,  h:`mailto:${profile.email}` },
                { t:'phone', v:profile.phone,  h:`tel:${profile.phone}` },
                { t:'code',  v:'GitHub',        h:profile.github },
              ].map(c => (
                <a key={c.v} href={c.h} target="_blank" rel="noreferrer" style={{
                  display:'inline-flex', alignItems:'center', gap:'0.38rem',
                  padding:'0.28rem 0.7rem', borderRadius:'20px',
                  background:'rgba(56,189,248,0.06)', border:'1px solid rgba(56,189,248,0.14)',
                  textDecoration:'none', color:'#38bdf8',
                  fontSize:'0.76rem', fontWeight:600, transition:'all 0.2s', fontFamily:'Inter',
                }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(56,189,248,0.14)'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='rgba(56,189,248,0.06)'; e.currentTarget.style.transform='' }}
                >
                  <SvgIcon type={c.t} size={12} color="#38bdf8"/>
                  {c.v}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div style={{ animation:'heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.2s both' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gridAutoRows:'auto', gap:'0.7rem' }}>
            {bentoItems.map(item => (
              <div key={item.label} style={{
                gridColumn: `span ${item.span}`,
                padding: '1rem 1.1rem',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.055)',
                borderTop: `3px solid ${item.accent}`,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                cursor: item.photoUrl ? 'pointer' : 'default',
                position: 'relative',
              }}
              onClick={() => item.photoUrl && setToeicOpen(true)}
              onMouseMove={e => {
                const r = e.currentTarget.getBoundingClientRect()
                const x = (e.clientX-r.left)/r.width-0.5
                const y = (e.clientY-r.top)/r.height-0.5
                e.currentTarget.style.transform = `perspective(600px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-3px)`
                e.currentTarget.style.boxShadow = `0 10px 28px rgba(0,0,0,0.35), 0 0 14px ${item.accent}14`
              }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
              >
                <div style={{ fontSize:'0.58rem', color:'#ffffff', marginBottom:'0.1rem', fontFamily:'Inter', letterSpacing:'0.04em' }}>{item.label}</div>
                <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, color:'#ffffff', fontSize:'0.86rem' }}>{item.value}</div>
                {item.sub && <div style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.7)', marginTop:'0.12rem', lineHeight:1.35 }}>{item.sub}</div>}
                {item.photoUrl && (
                  <div style={{ position:'absolute', top:'0.45rem', right:'0.55rem', fontSize:'0.52rem', color:`${item.accent}cc`, fontFamily:'Inter', letterSpacing:'0.04em' }}>
                    ▶ 成績單
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOEIC Lightbox */}
      {toeicOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:2000,
          background:'rgba(0,0,0,0.88)',
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer',
        }} onClick={() => setToeicOpen(false)}>
          <div style={{ position:'relative', maxWidth:'90vw', maxHeight:'88vh' }} onClick={e => e.stopPropagation()}>
            <img src="/images/certs/TOEIC.jpg" alt="TOEIC 成績單"
              style={{ maxWidth:'100%', maxHeight:'88vh', objectFit:'contain', borderRadius:'12px', boxShadow:'0 24px 64px rgba(0,0,0,0.7)', display:'block' }}
            />
            <button onClick={() => setToeicOpen(false)} style={{
              position:'absolute', top:'-14px', right:'-14px',
              background:'#1B2A4A', color:'#e2e8f0', border:'1px solid rgba(255,255,255,0.15)',
              borderRadius:'50%', width:'32px', height:'32px',
              cursor:'pointer', fontSize:'1.1rem', fontWeight:700,
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 12px rgba(0,0,0,0.5)',
            }}>×</button>
            <div style={{ textAlign:'center', marginTop:'0.6rem', fontSize:'0.75rem', color:'rgba(255,255,255,0.45)', fontFamily:'Inter' }}>
              點擊任意處關閉
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes heroReveal { from{clip-path:inset(0 0 100% 0)} to{clip-path:inset(0 0 0% 0)} }
        @keyframes scanDown { from{top:0;opacity:1} 92%{opacity:0.8} to{top:100%;opacity:0} }
        @keyframes heroFadeRight { from{opacity:0;transform:translateX(50px)} to{opacity:1;transform:translateX(0)} }
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes chipFloat {
          0%{opacity:0;transform:translateY(12px) scale(0.88)}
          16%{opacity:1;transform:translateY(0) scale(1)}
          58%{transform:translateY(-8px)}
          100%{opacity:1;transform:translateY(0)}
        }
        @keyframes morphBorder {
          0%,100%{border-radius:30% 70% 62% 38% / 44% 44% 56% 56%}
          33%{border-radius:50% 50% 42% 58% / 58% 42% 58% 42%}
          66%{border-radius:42% 58% 72% 28% / 28% 72% 28% 72%}
        }
        @keyframes glowPulseBlue { 0%,100%{opacity:0.45} 50%{opacity:1} }
        @keyframes shimmerSlide { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
      `}</style>
    </section>
  )
}
