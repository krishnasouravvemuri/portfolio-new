import { useEffect, useRef } from 'react'

const RING_DIAM = 27
const TRAIL_WIDTH = 22 // slightly narrower than ring so cylinder looks attached
const TRAIL_MS = 200

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const canvas = trailRef.current
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    let mx = w / 2, my = h / 2
    let rx = mx, ry = my
    const positions = []

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const onDown = () => dot.classList.add('cursor-dot-press')
    const onUp = () => dot.classList.remove('cursor-dot-press')
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    let raf
    const loop = () => {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2
      const t = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      ring.style.transform = t
      dot.style.transform = t

      const now = performance.now()
      positions.push({ x: rx, y: ry, t: now })
      const cutoff = now - TRAIL_MS
      while (positions.length && positions[0].t < cutoff) positions.shift()

      ctx.clearRect(0, 0, w, h)
      if (positions.length > 1) {
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = TRAIL_WIDTH
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(positions[0].x, positions[0].y)
        for (let i = 1; i < positions.length; i++) ctx.lineTo(positions[i].x, positions[i].y)
        ctx.stroke()

        // erase area inside ring so center stays white (no mix-blend overlap)
        ctx.save()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(rx, ry, RING_DIAM / 2 + 1, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <canvas ref={trailRef} className="fixed inset-0 pointer-events-none z-[9997] mix-blend-difference" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
