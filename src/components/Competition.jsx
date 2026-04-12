import { useState } from 'react'
import { competitions } from '../utils/data'
import Modal from './Modal'

const typeTheme = {
  gold:  { grad:'linear-gradient(140deg,#1a0e00 0%,#3d1f00 55%,#d97706 100%)', accent:'#f59e0b', badge:{bg:'rgba(251,191,36,0.15)',color:'#fcd34d',border:'rgba(251,191,36,0.3)'} },
  blue:  { grad:'linear-gradient(140deg,#0b1524 0%,#0f2a45 55%,#2E75B6 100%)', accent:'#38bdf8', badge:{bg:'rgba(56,189,248,0.12)',color:'#7dd3fc',border:'rgba(56,189,248,0.25)'} },
  green: { grad:'linear-gradient(140deg,#021208 0%,#0a2e10 55%,#16a34a 100%)', accent:'#4ade80', badge:{bg:'rgba(74,222,128,0.12)',color:'#86efac',border:'rgba(74,222,128,0.25)'} },
}

function CompSigil({ id }) {
  if (id === 'c1') return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width:'100%', height:'100%' }}>
      <polygon points="40,8 46,28 68,28 51,42 57,62 40,50 23,62 29,42 12,28 34,28"
        stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <polygon points="40,18 44,30 56,30 47,38 51,50 40,43 29,50 33,38 24,30 36,30"
        stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="5" fill="rgba(255,255,255,0.25)" />
    </svg>
  )
  if (id === 'c2') return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width:'100%', height:'100%' }}>
      <circle cx="40" cy="40" r="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
      <ellipse cx="40" cy="40" rx="13" ry="28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <ellipse cx="40" cy="40" rx="28" ry="9" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <line x1="12" y1="40" x2="68" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
      <line x1="40" y1="12" x2="40" y2="68" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
    </svg>
  )
  if (id === 'c3') return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width:'100%', height:'100%' }}>
      <ellipse cx="40" cy="40" rx="30" ry="11" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <ellipse cx="40" cy="40" rx="30" ry="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="30" ry="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" transform="rotate(120 40 40)"/>
      <circle cx="40" cy="40" r="5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="70" cy="40" r="3" fill="rgba(255,255,255,0.25)"/>
      <circle cx="10" cy="40" r="3" fill="rgba(255,255,255,0.25)"/>
    </svg>
  )
  if (id === 'c4') return (
    <svg viewBox="0 0 80 80" fill="none" style={{ width:'100%', height:'100%' }}>
      <path d="M18 62 Q28 46 40 32 Q52 18 58 10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M58 10 L54 21 M58 10 L69 14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="40" cy="32" r="3.5" fill="rgba(255,255,255,0.35)"/>
      <circle cx="29" cy="47" r="2.5" fill="rgba(255,255,255,0.22)"/>
      <circle cx="18" cy="62" r="2" fill="rgba(255,255,255,0.16)"/>
      <circle cx="58" cy="10" r="4.5" fill="rgba(255,255,255,0.45)"/>
      <path d="M6 68 L26 68 M6 74 L18 74" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
    </svg>
  )
  return null
}

export default function Competition() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="competition" style={{
      background: 'linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)',
      padding: '6rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Hexagonal grid decor */}
      <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:1, pointerEvents:'none' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hex-comp" width="52" height="45" patternUnits="userSpaceOnUse">
            <polygon points="26,2 50,14 50,38 26,50 2,38 2,14" fill="none" stroke="#1D9E75" strokeWidth="0.6" strokeOpacity="0.1"/>
            <polygon points="0,14 0,38 -24,50 -24,26" fill="none" stroke="#1D9E75" strokeWidth="0.6" strokeOpacity="0.1"/>
            <polygon points="52,14 52,38 76,50 76,26" fill="none" stroke="#1D9E75" strokeWidth="0.6" strokeOpacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-comp)"/>
      </svg>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>

        <div className="reveal" style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800 }}>
            <span className="title-gradient">競賽與榮譽</span>
          </h2>
          <div className="section-bar" />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.5rem' }}>
          {competitions.map((c, i) => {
            const ts = typeTheme[c.type] || typeTheme.blue
            return (
              <div key={c.id} className="reveal"
                style={{
                  borderRadius:'16px', overflow:'hidden',
                  border:'1px solid rgba(46,117,182,0.1)',
                  cursor:'pointer', transitionDelay:`${i*0.08}s`,
                  transition:'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s',
                  boxShadow:'0 4px 20px rgba(27,42,74,0.08)',
                }}
                onClick={() => setSelected(c)}
                onMouseMove={e => {
                  const r = e.currentTarget.getBoundingClientRect()
                  const x = (e.clientX-r.left)/r.width-0.5
                  const y = (e.clientY-r.top)/r.height-0.5
                  e.currentTarget.style.transform = `perspective(700px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-4px)`
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(27,42,74,0.16), 0 0 30px ${ts.accent}22`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,42,74,0.08)'
                }}
              >
                {/* Banner */}
                <div style={{
                  background: ts.grad, padding:'2.2rem 1.75rem',
                  position:'relative', overflow:'hidden',
                  display:'flex', alignItems:'center', gap:'1.25rem',
                }}>
                  {/* Grid overlay */}
                  <svg style={{ position:'absolute', inset:0, opacity:0.08, width:'100%', height:'100%' }} preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id={`g-${c.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#g-${c.id})`}/>
                  </svg>
                  {/* Accent glow */}
                  <div style={{
                    position:'absolute', width:'120px', height:'120px', borderRadius:'50%',
                    background:`radial-gradient(circle, ${ts.accent}30 0%, transparent 70%)`,
                    filter:'blur(30px)', top:'50%', left:'20%', transform:'translate(-50%,-50%)',
                  }} />
                  {/* Sigil */}
                  <div style={{ width:'56px', height:'56px', flexShrink:0, position:'relative', zIndex:1 }}>
                    <CompSigil id={c.id} />
                  </div>
                  {/* Header text */}
                  <div style={{ position:'relative', zIndex:1 }}>
                    <span style={{
                      display:'inline-block', padding:'0.18rem 0.65rem', borderRadius:'4px',
                      fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.08em',
                      background:ts.badge.bg, color:ts.badge.color, border:`1px solid ${ts.badge.border}`,
                      marginBottom:'0.4rem', fontFamily:'Inter',
                    }}>{c.badge}</span>
                    <h3 style={{
                      fontFamily:"'Outfit',sans-serif", fontSize:'1rem', fontWeight:800,
                      color:'#fff', lineHeight:1.3, margin:0,
                      textShadow:'0 2px 8px rgba(0,0,0,0.4)',
                    }}>{c.title}</h3>
                  </div>
                  {/* Index */}
                  <div style={{
                    position:'absolute', top:'0.7rem', right:'0.9rem',
                    fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.14em',
                    color:'rgba(255,255,255,0.25)', fontFamily:'Inter', textTransform:'uppercase',
                  }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  {/* 查看文件 button */}
                  {c.docUrl && (
                    <a href={c.docUrl} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        position:'absolute', bottom:'0.65rem', right:'0.9rem',
                        background:'rgba(255,255,255,0.12)', color:'#fff',
                        fontSize:'0.63rem', fontWeight:700, fontFamily:'Inter',
                        padding:'0.22rem 0.7rem', borderRadius:'5px',
                        textDecoration:'none', letterSpacing:'0.04em',
                        border:'1px solid rgba(255,255,255,0.25)',
                        backdropFilter:'blur(4px)', WebkitBackdropFilter:'blur(4px)',
                        zIndex:10,
                      }}
                    >
                      查看文件 ↗
                    </a>
                  )}
                </div>

                {/* Body */}
                <div style={{
                  background:'#fff', padding:'1.2rem 1.75rem 1.4rem',
                  display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'1rem',
                }}>
                  <p style={{ fontSize:'0.84rem', color:'#475569', lineHeight:1.7, flex:1 }}>{c.desc}</p>
                  <span style={{ fontSize:'0.72rem', color:'#2E75B6', fontWeight:700, flexShrink:0, marginTop:'0.1rem', fontFamily:'Inter' }}>
                    查看 →
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (() => {
          const ts = typeTheme[selected.type] || typeTheme.blue
          const idx = competitions.findIndex(c => c.id === selected.id)
          return (
            <>
              <div style={{
                background: ts.grad, borderRadius:'12px', padding:'1.75rem',
                marginBottom:'1.25rem', position:'relative', overflow:'hidden',
                display:'flex', alignItems:'center', gap:'1rem',
              }}>
                <div style={{ width:'56px', height:'56px', flexShrink:0 }}>
                  <CompSigil id={selected.id} />
                </div>
                <div>
                  <span style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.4)', fontFamily:'Inter', letterSpacing:'0.12em' }}>
                    AWARD {String(idx+1).padStart(2,'0')}
                  </span>
                  <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'1.1rem', fontWeight:800, color:'#fff', margin:0, lineHeight:1.3 }}>
                    {selected.title}
                  </h3>
                </div>
              </div>
              <span style={{
                display:'inline-block', padding:'0.25rem 0.8rem', borderRadius:'4px',
                fontSize:'0.78rem', fontWeight:700, marginBottom:'1rem', fontFamily:'Inter',
                background:ts.badge.bg, color:ts.badge.color, border:`1px solid ${ts.badge.border}`,
              }}>{selected.badge}</span>
              <p style={{ fontSize:'0.9rem', color:'#475569', lineHeight:1.8, marginBottom:'1.5rem' }}>{selected.desc}</p>
              {selected.images && selected.images.length > 0 && (
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
                  {selected.images.map((img, i) => (
                    <div key={i}>
                      <img src={img.src} alt={img.caption} style={{ width:'100%', borderRadius:'10px', objectFit:'cover', aspectRatio:'4/3' }} />
                      <p style={{ textAlign:'center', fontSize:'0.72rem', color:'#94a3b8', marginTop:'0.3rem' }}>{img.caption}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )
        })()}
      </Modal>
    </section>
  )
}
