"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
}

// Default fallback for unknown technologies
const getTechInfo = (techName: string): { url: string; color: string } => {
  return techMap[techName] || { url: '#', color: '#60a5fa' }
}

export const AnimatedProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isGithubLink = project.link.includes('github.com')

  // Convert technologies to tech stack format
  const techStack = project.technologies.map(tech => ({
    name: tech,
    ...getTechInfo(tech)
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Card className={cn(
        "h-full bg-color-background/50 backdrop-blur-md border border-color-primary/30",
        "hover:border-color-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden",
        "text-color-text flex flex-col"
      )}>
        <div className="relative z-10 flex flex-col flex-1">
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

          <CardContent className="flex-1">
            <TechStack techStack={techStack} />
          </CardContent>

          <CardFooter className="flex gap-2 mt-auto">
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
        </div>
      </Card>
    </motion.div>
  )
}

