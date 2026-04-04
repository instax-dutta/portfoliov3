"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const previousMousePosition = useRef({ x: 0, y: 0 })
  const rotation = useRef(0)
  const targetRotation = useRef(0)
  const isVisible = useRef(false)
  const rafId = useRef<number | null>(null)

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  useEffect(() => {
    // Check if device supports hover (mouse)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return

    const updateMousePosition = (e: MouseEvent) => {
      // Store previous position for rotation calculation
      previousMousePosition.current = { ...mousePosition.current }
      mousePosition.current = { x: e.clientX, y: e.clientY }

      if (!isVisible.current) {
        isVisible.current = true
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

    const animateCursor = () => {
      const currentX = mousePosition.current.x
      const currentY = mousePosition.current.y

      // Calculate rotation based on actual mouse movement
      const dx = currentX - previousMousePosition.current.x
      const dy = currentY - previousMousePosition.current.y

      // Only update target rotation if mouse moved significantly (prevents jitter)
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90 // +90 to align rocket tip

        // Handle wrapping around 360 degrees for smooth rotation
        const rotDiff = angle - rotation.current
        const adjustedDiff = ((rotDiff + 180) % 360) - 180
        targetRotation.current = rotation.current + adjustedDiff
      }

      // Smooth rotation interpolation
      const rotationDiff = Math.abs(targetRotation.current - rotation.current)

      // Only update if there's a meaningful difference (performance optimization)
      if (rotationDiff > 0.1) {
        rotation.current = lerp(rotation.current, targetRotation.current, 0.2)

        if (cursorRef.current) {
          // Position is instant - no lerp! This makes it truly replace the cursor
          cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${rotation.current}deg)`
        }
      } else if (cursorRef.current) {
        // Just update position without rotation calculation
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${rotation.current}deg)`
      }

      rafId.current = requestAnimationFrame(animateCursor)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    rafId.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor fixed pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 will-change-transform"
      style={{ left: 0, top: 0 }} // Ensure it starts at top-left so translate works correctly
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
        <path d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
      </svg>
    </div>
  )
}

export default CustomCursor
