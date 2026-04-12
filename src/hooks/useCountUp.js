import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 1500, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!startOnView) {
      runAnimation()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          runAnimation()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  function runAnimation() {
    const isFloat = !Number.isInteger(target)
    const startTime = performance.now()

    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      const current = eased * target
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }

  return { count, ref }
}
