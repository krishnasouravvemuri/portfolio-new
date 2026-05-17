import { useEffect, useRef } from 'react'

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
    const positions = [] // { x, y, t }

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const onDown = () => dot.classList.add('cursor-dot-press')
    const onUp = () => dot.classList.remove('cursor-dot-press')
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    let raf
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      const t = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      ring.style.transform = t
      dot.style.transform = t

      const now = performance.now()
      positions.push({ x: rx, y: ry, t: now })
      const cutoff = now - 220
      while (positions.length && positions[0].t < cutoff) positions.shift()

      ctx.clearRect(0, 0, w, h)
      if (positions.length > 1) {
        // draw cylinder: thick white line through recent positions
        ctx.strokeStyle = 'rgba(255,255,255,1)'
        ctx.lineWidth = 28
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(positions[0].x, positions[0].y)
        for (let i = 1; i < positions.length; i++) ctx.lineTo(positions[i].x, positions[i].y)
        ctx.stroke()
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    // text hover: toggle filled ring
    const TEXT_SEL = 'p, h1, h2, h3, h4, h5, h6, li, a, button, span'
    let hovered = null
    const onOver = (e) => {
      const el = e.target.closest(TEXT_SEL)
      if (el && el !== hovered) {
        hovered = el
        ring.classList.add('cursor-ring-hover')
      }
    }
    const onOut = (e) => {
      if (!hovered) return
      if (!e.relatedTarget || !hovered.contains(e.relatedTarget)) {
        hovered = null
        ring.classList.remove('cursor-ring-hover')
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <canvas ref={trailRef} className="fixed inset-0 pointer-events-none z-[9998] mix-blend-difference" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
