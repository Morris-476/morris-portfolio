import { useEffect, useRef, useState } from 'react'
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js'
import { skills, radarConfig } from '../utils/data'

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

/* ── Circuit board background ── */
function CircuitBg({ id }) {
  return (
    <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none' }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`circuit-${id}`} width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2E75B6" strokeWidth="0.35" strokeOpacity="0.18"/>
          <path d="M 20 0 L 20 28 L 48 28" fill="none" stroke="#2E75B6" strokeWidth="0.55" strokeOpacity="0.22"/>
          <circle cx="20" cy="28" r="2" fill="#2E75B6" fillOpacity="0.28"/>
          <circle cx="48" cy="28" r="1.5" fill="#2E75B6" fillOpacity="0.22"/>
          <path d="M 60 80 L 60 52 L 80 52" fill="none" stroke="#2E75B6" strokeWidth="0.55" strokeOpacity="0.22"/>
          <circle cx="60" cy="52" r="2" fill="#2E75B6" fillOpacity="0.28"/>
          <path d="M 0 55 L 15 55 L 15 40" fill="none" stroke="#1B2A4A" strokeWidth="0.5" strokeOpacity="0.15"/>
          <circle cx="15" cy="40" r="1.5" fill="#1B2A4A" fillOpacity="0.2"/>
          <circle cx="0"  cy="0"  r="1.8" fill="#2E75B6" fillOpacity="0.3"/>
          <circle cx="80" cy="0"  r="1.8" fill="#2E75B6" fillOpacity="0.3"/>
          <circle cx="0"  cy="80" r="1.8" fill="#2E75B6" fillOpacity="0.3"/>
          <circle cx="80" cy="80" r="1.8" fill="#2E75B6" fillOpacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#circuit-${id})`}/>
    </svg>
  )
}

function SkillBar({ label, value, color, delay = 0 }) {
  const [filled, setFilled] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ marginBottom:'0.75rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.3rem' }}>
        <span style={{ fontSize:'0.82rem', fontWeight:600, color:'#1B2A4A' }}>{label}</span>
        <span style={{ fontSize:'0.75rem', color:'#64748b', fontFamily:'Inter' }}>{value}%</span>
      </div>
      <div style={{ height:'5px', background:'rgba(27,42,74,0.1)', borderRadius:'99px', overflow:'hidden', boxShadow:'inset 1px 1px 3px rgba(27,42,74,0.08)' }}>
        <div style={{
          height:'100%', borderRadius:'99px',
          width: filled ? `${value}%` : '0%',
          background: `linear-gradient(90deg, ${color}, #38bdf8)`,
          transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
          boxShadow: `0 0 6px ${color}60`,
        }} />
      </div>
    </div>
  )
}

const skillBars = [
  { label:'Python / JAVA',   value:88, color:'#2E75B6' },
  { label:'AI / 電腦視覺',  value:76, color:'#1D9E75' },
  { label:'Power Platform', value:82, color:'#534AB7' },
  { label:'設計工具',        value:72, color:'#888780' },
  { label:'硬體整合',        value:65, color:'#BA7517' },
  { label:'Agile / PM',    value:70, color:'#D85A30' },
]

export default function Skills() {
  const canvasRef = useRef(null)
  const chartRef  = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    chartRef.current = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels: radarConfig.labels,
        datasets: [{
          data: radarConfig.data,
          backgroundColor: 'rgba(46,117,182,0.08)',
          borderColor: '#2E75B6',
          borderWidth: 2,
          pointBackgroundColor: radarConfig.pointColors,
          pointBorderColor: 'rgba(255,255,255,0.8)',
          pointBorderWidth: 1.5,
          pointRadius: 5,
          pointHoverRadius: 8,
        }],
      },
      options: {
        animation: { duration:1800, easing:'easeInOutQuart' },
        plugins: { legend:{ display:false }, tooltip:{
          backgroundColor:'#fff', titleColor:'#1B2A4A',
          bodyColor:'#64748b', padding:10, cornerRadius:8,
          borderColor:'rgba(46,117,182,0.2)', borderWidth:1,
        }},
        scales: {
          r: {
            beginAtZero:true, max:100,
            grid:{ color:'rgba(27,42,74,0.08)', circular:true },
            pointLabels:{ font:{ size:11, weight:'600' }, color:'#1B2A4A' },
            angleLines:{ color:'rgba(27,42,74,0.07)' },
            ticks:{ display:false },
          },
        },
      },
    })
    return () => { chartRef.current?.destroy() }
  }, [])

  return (
    <section id="skills" style={{
      background:'linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)',
      padding:'6rem 2rem',
      position:'relative', overflow:'hidden',
    }}>
      <CircuitBg id="skills" />

      {/* Corner geometric decor */}
      <svg style={{ position:'absolute', bottom:'-40px', left:'-40px', width:'260px', opacity:0.12, pointerEvents:'none' }} viewBox="0 0 260 260">
        <rect x="20" y="20" width="220" height="220" stroke="#2E75B6" strokeWidth="1.2" fill="none" strokeDasharray="4 6"/>
        <rect x="55" y="55" width="150" height="150" stroke="#2E75B6" strokeWidth="0.9" fill="none"/>
        <circle cx="130" cy="130" r="55" stroke="#38bdf8" strokeWidth="0.8" fill="none" strokeDasharray="3 5"/>
        <circle cx="130" cy="130" r="20" stroke="#2E75B6" strokeWidth="0.6" fill="none"/>
      </svg>
      <svg style={{ position:'absolute', top:'-30px', right:'-30px', width:'200px', opacity:0.1, pointerEvents:'none' }} viewBox="0 0 200 200">
        <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="#2E75B6" strokeWidth="1" fill="none"/>
        <polygon points="100,35 165,68 165,132 100,165 35,132 35,68" stroke="#38bdf8" strokeWidth="0.7" fill="none"/>
        <circle cx="100" cy="100" r="30" stroke="#2E75B6" strokeWidth="0.6" fill="none" strokeDasharray="3 4"/>
      </svg>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Title */}
        <div className="reveal" style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800 }}>
            <span className="title-gradient">技能</span>
          </h2>
          <div className="section-bar" />
        </div>

        {/* Radar + Bars */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'stretch', marginBottom:'4rem' }}>
          <div className="reveal-left" style={{ display:'flex', alignItems:'center' }}>
            {/* Radar wrapper with subtle bg — 80% width to shrink 20% */}
            <div style={{
              background:'rgba(255,255,255,0.65)', backdropFilter:'blur(12px)',
              WebkitBackdropFilter:'blur(12px)',
              borderRadius:'20px', padding:'1.5rem',
              border:'1px solid rgba(46,117,182,0.12)',
              boxShadow:'0 4px 24px rgba(27,42,74,0.08)',
              width:'80%', margin:'0 auto',
            }}>
              <canvas ref={canvasRef} />
            </div>
          </div>
          <div className="reveal-right" style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%' }}>
            <div style={{ fontSize:'0.92rem', fontWeight:700, letterSpacing:'0.15em', color:'#2E75B6', fontFamily:'Inter', marginBottom:'1.4rem', textTransform:'uppercase' }}>
              能力指標
            </div>
            {skillBars.map((b,i) => <SkillBar key={b.label} {...b} delay={i*0.1}/>)}
          </div>
        </div>

        {/* Skill tag groups */}
        <div className="reveal" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'2rem' }}>
          {skills.map(group => (
            <div key={group.category}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.85rem' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'2px', background:group.color, flexShrink:0 }} />
                <span style={{ fontWeight:700, fontSize:'0.82rem', color:'#64748b', letterSpacing:'0.08em', fontFamily:'Inter', textTransform:'uppercase' }}>
                  {group.category}
                </span>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                {group.tags.map(tag => (
                  <span key={tag} className="skill-tag" style={{
                    padding:'0.25rem 0.7rem', borderRadius:'4px', fontSize:'0.78rem', fontWeight:600,
                    background:`${group.color}28`, color:group.color, border:`1.5px solid ${group.color}60`,
                    fontFamily:'Inter',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
