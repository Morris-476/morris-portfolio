import { profile, learningHighlights } from '../utils/data'

export default function LearningJourney() {
  return (
    <section id="journey" style={{
      background: 'linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)',
      padding: '6rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Geometric decor — concentric circles + hexagon */}
      <svg style={{ position:'absolute', top:'-60px', right:'-60px', width:'320px', opacity:0.14, pointerEvents:'none' }} viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="140" stroke="#2E75B6" strokeWidth="1" fill="none" strokeDasharray="4 6"/>
        <circle cx="160" cy="160" r="100" stroke="#2E75B6" strokeWidth="1" fill="none"/>
        <polygon points="160,30 290,105 290,215 160,290 30,215 30,105" stroke="#2E75B6" strokeWidth="0.8" fill="none"/>
      </svg>
      {/* Subtle cross-hatch grid */}
      <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:1, pointerEvents:'none' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="cross-journey" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="20" y1="0" x2="20" y2="40" stroke="#2E75B6" strokeWidth="0.4" strokeOpacity="0.1"/>
            <line x1="0" y1="20" x2="40" y2="20" stroke="#2E75B6" strokeWidth="0.4" strokeOpacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross-journey)"/>
      </svg>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Title */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800 }}>
            <span className="title-gradient">學習歷程與課外經歷</span>
          </h2>
          <div className="section-bar" />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'stretch' }}>

          {/* ── Left: Story blocks ── */}
          <div className="reveal-left" style={{ display:'flex', flexDirection:'column', gap:'1.5rem', height:'100%' }}>

            <div style={{
              background: '#fff',
              borderRadius: '16px', padding: '1.75rem',
              border: '1px solid rgba(46,117,182,0.12)',
              boxShadow: '0 4px 20px rgba(27,42,74,0.07)',
              borderLeft: '3px solid #2E75B6',
              flex: 1,
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="3" width="22" height="22" rx="4" stroke="#2E75B6" strokeWidth="1.2"/>
                  <path d="M8 14 L12 18 L20 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.95rem', fontWeight:800, color:'#1B2A4A', margin:0 }}>
                  專案開發與團隊合作
                </h3>
              </div>
              <p style={{ color:'#475569', fontSize:'0.86rem', lineHeight:1.85, paddingLeft:'0.75rem', borderLeft:'2px solid rgba(46,117,182,0.2)' }}>
                {profile.projectStory}
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '16px', padding: '1.75rem',
              border: '1px solid rgba(46,117,182,0.12)',
              boxShadow: '0 4px 20px rgba(27,42,74,0.07)',
              borderLeft: '3px solid #38bdf8',
              flex: 1,
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="11" stroke="#38bdf8" strokeWidth="1.2"/>
                  <path d="M14 8 L14 14 L19 17" stroke="#2E75B6" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.95rem', fontWeight:800, color:'#1B2A4A', margin:0 }}>
                  學習歷程與跨域探索
                </h3>
              </div>
              <p style={{ color:'#475569', fontSize:'0.86rem', lineHeight:1.85, paddingLeft:'0.75rem', borderLeft:'2px solid rgba(46,117,182,0.2)', whiteSpace:'pre-line' }}>
                {profile.learningStory}
              </p>
            </div>
          </div>

          {/* ── Right: Numbered list (Option C) ── */}
          <div className="reveal-right" style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
            {learningHighlights.map((h, i) => (
              <div key={h.title} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                padding: '1.3rem 0',
                borderBottom: i < learningHighlights.length - 1
                  ? '1px solid rgba(46,117,182,0.1)' : 'none',
              }}>
                {/* Large number */}
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '2rem', fontWeight: 900, lineHeight: 1,
                  color: 'rgba(46,117,182,0.25)',
                  flexShrink: 0, minWidth: '3rem',
                  letterSpacing: '-1px',
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Content */}
                <div style={{ paddingTop: '0.15rem' }}>
                  <div style={{ fontWeight:800, fontSize:'0.95rem', color:'#1B2A4A', marginBottom:'0.3rem', fontFamily:"'Outfit',sans-serif" }}>
                    {h.title}
                  </div>
                  <div style={{ fontSize:'0.82rem', color:'#475569', lineHeight:1.65 }}>
                    {h.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
