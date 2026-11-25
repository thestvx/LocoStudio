import Lenis from 'lenis'
import { createRoot } from 'react-dom/client'
import WarpText from './WarpText'

type Mount = HTMLElement & { dataset: DOMStringMap & { warpText?: string } }

const mounts = Array.from(document.querySelectorAll<HTMLElement>('.name-warp')) as Mount[]

mounts.forEach(mount => {
  const text = mount.dataset.warpText || ''
  const root = createRoot(mount)

  root.render(
    <WarpText
      text={text}
      color="currentColor"
      warpStrength={0.08}
      warpScale={1.7}
      speed={0.55}
      pointerInfluence={0.42}
      pointerStrength={0.38}
      refraction={0.018}
      chromatic={0.35}
      ripple
      clickRipple
      idleDrift={0.2}
      lens="bulge"
      intro={false}
      fontSize="inherit"
      fontWeight={1000}
      fontFamily="inherit"
      letterSpacing="-0.06em"
      lineHeight={0.7}
      style={{ height: '100%', minHeight: 0 }}
    />
  )

  const spring = mount.closest('.name-spring')
  const poll = window.setInterval(() => {
    if (mount.querySelector('canvas')) {
      spring?.setAttribute('data-warp-ready', 'true')
      window.clearInterval(poll)
    }
  }, 50)
  window.setTimeout(() => window.clearInterval(poll), 4000)
})

let lenis: Lenis | null = null
let rafId = 0

const runRaf = (time: number) => {
  if (!lenis) return
  lenis.raf(time)
  rafId = requestAnimationFrame(runRaf)
}

const syncSmoothScroll = () => {
  const active = document.documentElement.classList.contains('team-hero-active')
  const foreignSmooth = document.documentElement.classList.contains('lenis') && !lenis

  if (active && !lenis && !foreignSmooth) {
    lenis = new Lenis({ duration: 1 })
    rafId = requestAnimationFrame(runRaf)
  }

  if (!active && lenis) {
    cancelAnimationFrame(rafId)
    lenis.destroy()
    lenis = null
  }
}

syncSmoothScroll()
window.setInterval(syncSmoothScroll, 200)
