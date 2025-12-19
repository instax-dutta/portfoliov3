"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const targetPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const rotation = useRef(0)
  const isVisible = useRef(false)
  const rafId = useRef<number | null>(null)

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible.current) {
        isVisible.current = true
        currentPos.current = { x: e.clientX, y: e.clientY } // Snap on first move
        if (cursorRef.current) cursorRef.current.style.opacity = "1"
      }
    }

    const handleMouseLeave = () => {
      isVisible.current = false
      if (cursorRef.current) cursorRef.current.style.opacity = "0"
    }

    const handleMouseEnter = () => {
      isVisible.current = true
      if (cursorRef.current) cursorRef.current.style.opacity = "1"
    }

    const animate = () => {
      // Smoothly follow the mouse with high-performance lerp
      // Using 0.25 for a very responsive but smooth feel
      const nextX = lerp(currentPos.current.x, targetPos.current.x, 0.25)
      const nextY = lerp(currentPos.current.y, targetPos.current.y, 0.25)

      // Calculate rotation based on the movement delta of the smoothed position
      const dx = nextX - currentPos.current.x
      const dy = nextY - currentPos.current.y

      currentPos.current = { x: nextX, y: nextY }

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90

        // Wrap rotation for smoothest transitions
        const diff = ((targetAngle - rotation.current + 180) % 360) - 180
        rotation.current += diff * 0.15 // Smooth rotation adjustment
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%) rotate(${rotation.current}deg)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor fixed pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 will-change-transform"
      style={{ left: 0, top: 0 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400/90 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
        <path d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
      </svg>
    </div>
  )
}

export default CustomCursor

