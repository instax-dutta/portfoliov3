"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import Lenis from "lenis"

type LenisProviderProps = {
  children: ReactNode
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      normalizeWheel: true,
    })

    let animationFrame: number

    const onFrame = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(onFrame)
    }

    animationFrame = requestAnimationFrame(onFrame)

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
    }
  }, [])

  return <>{children}</>
}

export default LenisProvider

