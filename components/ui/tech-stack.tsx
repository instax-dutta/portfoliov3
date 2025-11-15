'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { FileCode } from 'lucide-react'

interface Tech {
  name: string
  url: string
  color: string
}

interface ComponentProps {
  techStack: Tech[]
}

export const TechStack: React.FC<ComponentProps> = ({ techStack }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const lightSize = 80

  const lightX = useTransform(x, (value) => value - lightSize / 2)
  const lightY = useTransform(y, (value) => value - lightSize / 2)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <div className="relative bg-color-background/80 overflow-hidden w-full h-48 rounded-lg shadow-lg border border-color-primary/30 backdrop-blur-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-30"
        width={600}
        height={400}
        unoptimized
      />

      <div className="absolute inset-0 bg-color-background/60 rounded-lg border border-color-primary/20 backdrop-blur-xl"></div>

      {isHovered && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: lightSize,
            height: lightSize,
            background: 'rgba(96, 165, 250, 0.3)',
            filter: 'blur(30px)',
            x: lightX,
            y: lightY,
          }}
        ></motion.div>
      )}

      <div className="relative z-10 flex flex-col justify-between p-4 h-full">
        <div className="flex items-center gap-2 mb-3">
          <FileCode className="w-4 h-4 text-color-primary" />
          <p className="font-medium text-sm text-color-text">Tech Stack</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={tech.url}
              className="inline-flex items-center rounded-full border border-color-primary/30 px-2.5 py-0.5 text-xs transition-colors text-color-text hover:bg-color-primary/20 hover:border-color-primary/50"
            >
              <div
                className="w-2 h-2 mr-2 rounded-full"
                style={{ backgroundColor: tech.color }}
              ></div>
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

