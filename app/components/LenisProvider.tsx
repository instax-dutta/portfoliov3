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

    // "Luxury" Profile: Silky smooth, physics-based scrolling
    const lenis = new Lenis({
      duration: 1.2, // The "Gold Standard" for premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo Out for snappy start, smooth settle
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    let animationFrame: number

    const onFrame = (time: number) => {
      // Let Lenis run at native refresh rate for butter-smooth scrolling
      lenis.raf(time)
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

