"use client"

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
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

export const AnimatedProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const isGithubLink = project.link.includes('github.com')

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative"
    >
      <Card className={cn(
        "h-full bg-color-background/50 backdrop-blur-md border border-color-primary/30",
        "hover:border-color-primary/50 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden",
        "text-color-text"
      )}>
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"
        />

        <motion.div
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative z-10"
        >
          <CardHeader>
            <CardTitle className={cn(
              "text-2xl font-bold bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            )}>
              {project.title}
            </CardTitle>
            <CardDescription className="text-color-text-muted">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className={cn(
                    "bg-color-primary/20 text-color-primary border-color-primary/30",
                    "hover:bg-color-primary/30 transition-colors"
                  )}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button
              asChild
              className={cn(
                "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
                "text-white shadow-md border-0"
              )}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </a>
            </Button>
            {isGithubLink && (
              <Button
                asChild
                variant="outline"
                className={cn(
                  "border-color-primary/30 text-color-primary hover:bg-color-primary/10"
                )}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </CardFooter>
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  )
}

