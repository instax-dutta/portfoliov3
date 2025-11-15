'use client'

import React from 'react'
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

  return (
    <div className="relative w-full">
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
  )
}

