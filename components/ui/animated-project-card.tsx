"use client"

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { TechStack } from '@/components/ui/tech-stack'
import { cn } from '@/lib/utils'

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  githubLink?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

// Technology mapping with colors and URLs
const techMap: Record<string, { url: string; color: string }> = {
  'Next.js': { url: 'https://nextjs.org/', color: '#000000' },
  'React': { url: 'https://react.dev/', color: '#61DAFB' },
  'TypeScript': { url: 'https://www.typescriptlang.org/', color: '#3178C6' },
  'JavaScript': { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#F7DF1E' },
  'Python': { url: 'https://www.python.org/', color: '#3776AB' },
  'Tailwind CSS': { url: 'https://tailwindcss.com/', color: '#06B6D4' },
  'Node.js': { url: 'https://nodejs.org/', color: '#339933' },
  'Flask': { url: 'https://flask.palletsprojects.com/', color: '#000000' },
  'TensorFlow': { url: 'https://www.tensorflow.org/', color: '#FF6F00' },
  'AI': { url: 'https://www.openai.com/', color: '#10A37F' },
  'Machine Learning': { url: 'https://scikit-learn.org/', color: '#F7931E' },
  'API': { url: 'https://restfulapi.net/', color: '#00D9FF' },
  'Mistral AI': { url: 'https://mistral.ai/', color: '#FF6B35' },
  'Gemini API': { url: 'https://ai.google.dev/', color: '#4285F4' },
  'Three.js': { url: 'https://threejs.org/', color: '#000000' },
  'HTML': { url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', color: '#E34F26' },
  'CSS': { url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', color: '#1572B6' },
  'Vite': { url: 'https://vitejs.dev/', color: '#646CFF' },
  'Redux': { url: 'https://redux.js.org/', color: '#764ABC' },
  'NLP': { url: 'https://spacy.io/', color: '#09A3D5' },
  'Computer Vision': { url: 'https://opencv.org/', color: '#5C3EE8' },
  'Image Processing': { url: 'https://opencv.org/', color: '#5C3EE8' },
  'BeautifulSoup': { url: 'https://www.crummy.com/software/BeautifulSoup/', color: '#FF6B6B' },
  'Sentiment Analysis': { url: 'https://www.nltk.org/', color: '#4A90E2' },
  'Document Processing': { url: 'https://python-docx.readthedocs.io/', color: '#3776AB' },
  'ML': { url: 'https://scikit-learn.org/', color: '#F7931E' },
  'RadixUI': { url: 'https://www.radix-ui.com/', color: '#161618' },
  'shadcn/ui': { url: 'https://ui.shadcn.com/', color: '#000000' },
  'particles.js': { url: 'https://github.com/VincentGarreau/particles.js', color: '#000000' },
  'framer-motion': { url: 'https://www.framer.com/motion/', color: '#0055FF' },
  'SQLite': { url: 'https://www.sqlite.org/', color: '#003B57' },
  'SQLAlchemy': { url: 'https://www.sqlalchemy.org/', color: '#D71F00' },
  'zxcvbn': { url: 'https://github.com/dropbox/zxcvbn', color: '#0061FF' },
  'Tkinter': { url: 'https://docs.python.org/3/library/tkinter.html', color: '#3776AB' },
  'Socket Programming': { url: 'https://docs.python.org/3/library/socket.html', color: '#3776AB' },
  'IP tables': { url: 'https://www.netfilter.org/', color: '#000000' },
  'DDoS protection techniques': { url: 'https://www.cloudflare.com/learning/ddos/', color: '#F38020' },
  'AI Agent': { url: 'https://www.langchain.com/', color: '#10A37F' },
  'API Integration': { url: 'https://restfulapi.net/', color: '#00D9FF' },
  'Prompt Engineering': { url: 'https://www.promptingguide.ai/', color: '#10A37F' },
  'edge-tts': { url: 'https://github.com/rany2/edge-tts', color: '#0078D4' },
  'python-docx': { url: 'https://python-docx.readthedocs.io/', color: '#3776AB' },
  'PyPDF2': { url: 'https://pypdf2.readthedocs.io/', color: '#3776AB' },
  'openpyxl': { url: 'https://openpyxl.readthedocs.io/', color: '#3776AB' },
  'IPinfo API': { url: 'https://ipinfo.io/', color: '#4A90E2' },
  'NeonDB': { url: 'https://neon.tech/', color: '#00E297' },
  'Prisma': { url: 'https://www.prisma.io/', color: '#2D3748' },
  'TweetNaCl.js': { url: 'https://github.com/dchest/tweetnacl-js', color: '#000000' },
  'Zustand': { url: 'https://github.com/pmndrs/zustand', color: '#433929' },
  'TanStack Query': { url: 'https://tanstack.com/query', color: '#FF4154' },
  'Next.js 15': { url: 'https://nextjs.org/', color: '#000000' },
  'Tailwind CSS 4': { url: 'https://tailwindcss.com/', color: '#06B6D4' },
}

// Default fallback for unknown technologies
const getTechInfo = (techName: string): { url: string; color: string } => {
  return techMap[techName] || { url: '#', color: '#3b82f6' }
}

export const AnimatedProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [lightSize, setLightSize] = useState(120)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const githubUrl = project.githubLink || (project.link.includes('github.com') ? project.link : null)
  const showGithubButton = !!githubUrl

  // Responsive light size
  useEffect(() => {
    const updateLightSize = () => {
      setLightSize(window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 100 : 120)
    }
    updateLightSize()
    window.addEventListener('resize', updateLightSize)
    return () => window.removeEventListener('resize', updateLightSize)
  }, [])

  const lightX = useTransform(x, (value) => value - lightSize / 2)
  const lightY = useTransform(y, (value) => value - lightSize / 2)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  // Convert technologies to tech stack format
  const techStack = project.technologies.map(tech => ({
    name: tech,
    ...getTechInfo(tech)
  }))

  return (
    <motion.div
      className="relative"
      style={{ willChange: 'transform, opacity' }}
    >
      <div
        className={cn(
          "relative h-full min-h-[400px] sm:min-h-[450px] bg-color-background/80 overflow-hidden rounded-xl shadow-lg border border-color-primary/30 backdrop-blur-xl",
          "hover:border-color-primary/50 transition-all duration-300 flex flex-col",
          "will-change-transform"
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          x.set(0)
          y.set(0)
        }}
        onClick={(e) => {
          // Prevent card click from navigating - only buttons should navigate
          e.stopPropagation()
        }}
      >
        {/* Background Image - Lazy loaded for performance */}
        <Image
          src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
          alt={`${project.title} project background`}
          className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-20"
          width={600}
          height={400}
          loading="lazy"
          quality={30}
          priority={false}
          aria-hidden="true"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-color-background/60 rounded-xl border border-color-primary/20 backdrop-blur-xl"></div>

        {/* Interactive Light Effect */}
        {isHovered && (
          <motion.div
            className="absolute rounded-full pointer-events-none z-0 will-change-transform"
            style={{
              width: lightSize,
              height: lightSize,
              background: 'rgba(34, 211, 238, 0.3)',
              filter: 'blur(40px)',
              x: lightX,
              y: lightY,
            }}
          ></motion.div>
        )}

        {/* Content */}
        <article className="relative z-10 flex flex-col flex-1 p-5 sm:p-6">
          {/* Header */}
          <header className="mb-5 flex-shrink-0">
            <h2 className={cn(
              "text-xl sm:text-2xl font-bold mb-3 leading-tight bg-gradient-to-r from-blue-300 via-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
            )}>
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-color-text-muted leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </header>

          {/* Tech Stack */}
          <div className="flex-1 mb-5 min-h-[120px] overflow-hidden">
            <TechStack techStack={techStack} />
          </div>

          {/* Footer Buttons */}
          <footer className="flex flex-wrap gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-color-primary/10">
            <Button
              asChild
              size="sm"
              className={cn(
                "bg-gradient-to-r from-blue-500 to-emerald-600 hover:from-blue-600 hover:to-emerald-700",
                "text-white shadow-md border-0 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
              )}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="whitespace-nowrap">View Project</span>
              </a>
            </Button>
            {showGithubButton && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className={cn(
                  "border-color-primary/30 text-color-primary hover:bg-color-primary/10 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                )}
              >
                <a href={githubUrl as string} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Code
                </a>
              </Button>
            )}
          </footer>
        </article>
      </div>
    </motion.div>
  )
}

