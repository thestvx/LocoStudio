import { useEffect } from "react"

export default function ParallaxWatcher() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"))
    const onScroll = () => {
      const vh = window.innerHeight
      for (const el of els) {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const offset = (vh / 2 - center) * 0.18
        el.style.transform = `translate3d(0, ${offset}px, 0)`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return null
}
