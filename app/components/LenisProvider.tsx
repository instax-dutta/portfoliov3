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

    // Optimized Lenis configuration for ultra-smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Perfect balance between smoothness and responsiveness
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for natural feel
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical', // Vertical gestures
      smoothWheel: true, // Enable smooth wheel scrolling
      smoothTouch: false, // Disable on touch for better mobile performance
      wheelMultiplier: 1, // Standard wheel sensitivity
      touchMultiplier: 2, // Enhanced touch scrolling
      normalizeWheel: true, // Normalize scroll across browsers
      infinite: false, // No infinite scroll
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

