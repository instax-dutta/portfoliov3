'use client'

import React, { memo } from 'react'
import { FileCode } from 'lucide-react'

interface Tech {
  name: string
  url: string
  color: string
}

interface ComponentProps {
  techStack: Tech[]
}

export const TechStack: React.FC<ComponentProps> = memo(({ techStack }) => {

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 mb-3">
        <FileCode className="w-4 h-4 sm:w-5 sm:h-5 text-color-primary flex-shrink-0" />
        <p className="font-semibold text-sm sm:text-base text-color-text">Tech Stack</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <a
            key={tech.name}
            target="_blank"
            rel="noopener noreferrer"
            href={tech.url}
            className="inline-flex items-center rounded-full border border-color-primary/30 px-2.5 py-1 text-xs sm:text-sm font-medium transition-all duration-200 text-color-text hover:bg-color-primary/20 hover:border-color-primary/50 hover:scale-105"
          >
            <div
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-1.5 sm:mr-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: tech.color }}
            ></div>
            <span className="whitespace-nowrap">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
})

