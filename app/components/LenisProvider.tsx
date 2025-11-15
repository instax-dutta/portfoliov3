"use client"

import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import Lenis from "lenis"

type LenisProviderProps = {
  children: ReactNode
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) return

    // Optimized Lenis configuration for smooth performance
    const lenis = new Lenis({
      lerp: 0.08, // Slightly faster for better responsiveness
      duration: 1.2, // Smooth duration
      smoothWheel: true,
      smoothTouch: false, // Disable on touch for better mobile performance
      wheelMultiplier: 1, // Standard wheel multiplier
      touchMultiplier: 2, // Faster touch scrolling
      normalizeWheel: true,
      infinite: false,
    })

    lenisRef.current = lenis

    let animationFrame: number
    let lastTime = 0

    const onFrame = (time: number) => {
      // Throttle to 60fps for better performance
      if (time - lastTime >= 16.67) {
        lenis.raf(time)
        lastTime = time
      }
      animationFrame = requestAnimationFrame(onFrame)
    }

    animationFrame = requestAnimationFrame(onFrame)

    // Pause when tab is hidden for better performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrame)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}

export default LenisProvider

