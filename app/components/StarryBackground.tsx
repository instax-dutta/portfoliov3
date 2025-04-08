"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const shootingStars: { x: number; y: number; len: number; speed: number }[] = []

    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
      })
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > width) star.vx = -star.vx
        if (star.y < 0 || star.y > height) star.vy = -star.vy
      })
    }

    function drawShootingStars() {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
      ctx.lineWidth = 2
      shootingStars.forEach((star, index) => {
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x + star.len, star.y + star.len)
        ctx.stroke()

        star.x += star.speed
        star.y += star.speed

        if (star.x > width || star.y > height) {
          shootingStars.splice(index, 1)
        }
      })
    }

    function addShootingStar() {
      if (Math.random() < 0.005 && shootingStars.length < 3) {
        // Reduced probability and max number of shooting stars
        shootingStars.push({
          x: Math.random() * width,
          y: 0,
          len: Math.random() * 80 + 10,
          speed: Math.random() * 10 + 5,
        })
      }
    }

    function animate() {
      drawStars()
      drawShootingStars()
      addShootingStar()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}

export default StarryBackground
