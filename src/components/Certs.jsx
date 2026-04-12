import { useState, useRef, useEffect, useCallback } from 'react'
import { certs } from '../utils/data'
import Modal from './Modal'

const tickerItems = [...certs, ...certs]

const orgMeta = {
  Microsoft: { color: '#0078d4', abbr: 'MS',  grad: 'linear-gradient(135deg,#003d70,#0078d4)' },
  TQC:       { color: '#1D9E75', abbr: 'TQ',  grad: 'linear-gradient(135deg,#073d25,#1D9E75)' },
  Adobe:     { color: '#e1251b', abbr: 'Ad',  grad: 'linear-gradient(135deg,#4a0a08,#e1251b)' },
  '經濟部':  { color: '#D85A30', abbr: '國',  grad: 'linear-gradient(135deg,#3d1800,#D85A30)' },
}

function OrgBadge({ org, size = 44 }) {
  const meta = orgMeta[org] || { color: '#2E75B6', abbr: org?.slice(0, 2) || '??', grad: 'linear-gradient(135deg,#0a1e3d,#2E75B6)' }
  return (
    <div style={{
      width: size, height: size, borderRadius: '10px',
      background: meta.grad,
      border: `1px solid ${meta.color}38`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      boxShadow: `0 4px 12px ${meta.color}22`,
    }}>
      <span style={{
        fontFamily: "'Outfit', Inter, sans-serif",
        fontWeight: 900, fontSize: size > 40 ? '1rem' : '0.72rem',
        color: '#fff', letterSpacing: '-0.5px',
      }}>{meta.abbr}</span>
    </div>
  )
}

export default function Certs() {
  const [selected, setSelected]   = useState(null)
  const [dragging, setDragging]   = useState(false)
  const trackRef   = useRef(null)
  const startXRef  = useRef(0)
  const scrollRef  = useRef(0)
  const isPaused   = useRef(false)
  const rafId      = useRef(null)

  // ── Auto-scroll ───────────────────────────────────
  const CARD_W   = 190 + 16   // card width + gap
  const HALF_LEN = certs.length * CARD_W

  const tick = useCallback(() => {
    const el = trackRef.current
    if (el && !isPaused.current) {
      el.scrollLeft += 0.5
      if (el.scrollLeft >= HALF_LEN) el.scrollLeft -= HALF_LEN
    }
    rafId.current = requestAnimationFrame(tick)
  }, [HALF_LEN])

  useEffect(() => {
    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [tick])

  // ── Drag ─────────────────────────────────────────
  const onMouseDown = e => {
    isPaused.current = true
    setDragging(true)
    startXRef.current  = e.pageX
    scrollRef.current  = trackRef.current.scrollLeft
  }
  const onMouseMove = e => {
    if (!dragging) return
    trackRef.current.scrollLeft = scrollRef.current - (e.pageX - startXRef.current)
  }
  const onMouseUp = () => {
    isPaused.current = false
    setDragging(false)
  }

  const onTouchStart = e => {
    isPaused.current = true
    startXRef.current = e.touches[0].pageX
    scrollRef.current = trackRef.current.scrollLeft
  }
  const onTouchMove = e => {
    trackRef.current.scrollLeft = scrollRef.current - (e.touches[0].pageX - startXRef.current)
  }
  const onTouchEnd = () => { isPaused.current = false }

  return (
    <section id="certs" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%)',
      padding: '6rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Corner geometric decor — nested rectangles + diagonals */}
      <svg style={{ position:'absolute', top:'-50px', right:'-50px', width:'260px', opacity:0.14, pointerEvents:'none' }} viewBox="0 0 260 260">
        <rect x="20" y="20" width="220" height="220" stroke="#2E75B6" strokeWidth="1" fill="none" strokeDasharray="5 7"/>
        <rect x="60" y="60" width="140" height="140" stroke="#2E75B6" strokeWidth="0.8" fill="none"/>
        <rect x="100" y="100" width="60" height="60" stroke="#2E75B6" strokeWidth="0.6" fill="none"/>
        <line x1="20" y1="20" x2="240" y2="240" stroke="#2E75B6" strokeWidth="0.5" strokeOpacity="0.5"/>
        <line x1="240" y1="20" x2="20" y2="240" stroke="#2E75B6" strokeWidth="0.5" strokeOpacity="0.5"/>
      </svg>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800 }}>
            <span className="title-gradient">證照</span>
          </h2>
          <div className="section-bar" />
          <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.75rem', fontFamily: 'Inter' }}>
            點擊查看詳情 · 可拖曳瀏覽
          </p>
        </div>

        {/* Stats */}
        <div className="reveal" style={{ display:'flex', justifyContent:'center', gap:'3rem', marginBottom:'2.5rem', flexWrap:'wrap' }}>
          {[
            { n: certs.filter(c => c.status === 'done').length,   label: '已取得', color: '#1D9E75' },
            { n: certs.filter(c => c.status === 'pending').length, label: '準備中', color: '#BA7517' },
            { n: certs.length,                                      label: '目標總數', color: '#2E75B6' },
          ].map(s => (
            <div key={s.label} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'2.4rem', fontWeight:900,
                background:`linear-gradient(135deg, ${s.color}, #1B2A4A)`,
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              }}>{s.n}</div>
              <div style={{ fontSize:'0.75rem', color:'#334155', fontWeight:600, fontFamily:'Inter', marginTop:'0.15rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Draggable strip */}
        <div className="reveal" style={{ margin:'0 -2rem', cursor: dragging ? 'grabbing' : 'grab', overflow: 'hidden' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex', gap: '1rem',
              padding: '1rem 2rem 1.5rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              userSelect: 'none',
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {tickerItems.map((cert, idx) => {
              const meta = orgMeta[cert.org] || { color: '#2E75B6', grad: 'linear-gradient(135deg,#0a1e3d,#2E75B6)' }
              return (
                <div
                  key={`${cert.id}-${idx}`}
                  onClick={() => !dragging && setSelected(cert)}
                  style={{
                    flexShrink: 0,
                    width: '190px', minHeight: '220px',
                    background: '#fff',
                    borderRadius: '16px',
                    border: `1px solid rgba(46,117,182,0.12)`,
                    borderTop: `3px solid ${meta.color}`,
                    boxShadow: '0 4px 16px rgba(27,42,74,0.08)',
                    overflow: 'hidden', cursor: 'pointer',
                    transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s',
                    userSelect: 'none', display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    if (dragging) return
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = `0 16px 40px rgba(27,42,74,0.16), 0 0 20px ${meta.color}22`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,42,74,0.08)'
                  }}
                >
                  {/* Header */}
                  <div style={{
                    background: `linear-gradient(135deg, ${meta.color}28, ${meta.color}12)`,
                    padding: '1.25rem 1.1rem 1rem',
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    borderBottom: `1px solid ${meta.color}14`, flex: 1,
                    position: 'relative',
                  }}>
                    {/* Subtle grid */}
                    <svg style={{ position:'absolute', inset:0, opacity:0.06, width:'100%', height:'100%' }} preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id={`gc-${cert.id}-${idx}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={meta.color} strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#gc-${cert.id}-${idx})`}/>
                    </svg>
                    <OrgBadge org={cert.org} size={40} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ fontSize: '0.65rem', color: meta.color, fontWeight: 700, fontFamily: 'Inter', marginBottom: '0.2rem' }}>
                        {cert.org}
                      </div>
                      <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:'0.86rem', color:'#1B2A4A', lineHeight:1.25 }}>
                        {cert.name}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{ padding: '0.65rem 1.1rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{
                      padding:'0.18rem 0.6rem', borderRadius:'8px', fontSize:'0.65rem', fontWeight:700, fontFamily:'Inter',
                      ...(cert.status === 'done'
                        ? { background:'rgba(74,222,128,0.12)', color:'#4ade80', border:'1px solid rgba(74,222,128,0.25)' }
                        : { background:'rgba(251,191,36,0.12)', color:'#fbbf24', border:'1px solid rgba(251,191,36,0.25)' }),
                    }}>
                      {cert.status === 'done' ? '✓ 已取得' : '⏳ 準備中'}
                    </span>
                    <span style={{ fontSize:'0.7rem', color:'#2E75B6', fontWeight:600, fontFamily:'Inter' }}>查看 →</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (() => {
          const meta = orgMeta[selected.org] || { color: '#2E75B6', grad: 'linear-gradient(135deg,#0a1e3d,#2E75B6)' }
          return (
            <>
              <div style={{
                background: `linear-gradient(135deg, ${meta.color}18, ${meta.color}06)`,
                borderRadius:'14px', padding:'1.5rem',
                border:`1px solid ${meta.color}22`,
                display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem',
              }}>
                <OrgBadge org={selected.org} size={52} />
                <div>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:'1.1rem', color:'#1B2A4A' }}>
                    {selected.name}
                  </div>
                  <div style={{ fontSize:'0.85rem', color:meta.color, fontWeight:600, marginTop:'0.15rem' }}>{selected.org}</div>
                </div>
              </div>

              <span style={{
                display:'inline-block', padding:'0.3rem 0.9rem', borderRadius:'20px',
                fontSize:'0.82rem', fontWeight:700, marginBottom:'1.5rem', fontFamily:'Inter',
                ...(selected.status === 'done'
                  ? { background:'#dcfce7', color:'#166534', border:'1px solid #86efac' }
                  : { background:'#fef9c3', color:'#854d0e', border:'1px solid #fde68a' }),
              }}>
                {selected.status === 'done' ? '✓ 已取得' : '⏳ 準備中'}
              </span>

              {selected.photo ? (
                <div>
                  <img src={selected.photo} alt={selected.name}
                    style={{ width:'100%', borderRadius:'12px', objectFit:'contain', maxHeight:'420px', background:'#f8fbff' }} />
                  <p style={{ textAlign:'center', fontSize:'0.75rem', color:'#64748b', marginTop:'0.5rem' }}>
                    {selected.name} 證書
                  </p>
                </div>
              ) : (
                <div style={{
                  background:'#f8fbff', borderRadius:'12px', padding:'3rem 2rem',
                  textAlign:'center', color:'#94a3b8', fontSize:'0.85rem',
                  border:'1.5px dashed rgba(46,117,182,0.25)',
                }}>
                  證書圖片（待補充）
                </div>
              )}
            </>
          )
        })()}
      </Modal>
    </section>
  )
}
