"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import { AnimatedProjectCard } from "@/components/ui/animated-project-card"
import { ProjectsAnimatedGrid } from "@/components/ui/projects-grid"

const projects = [
  // Tier 1: Production-ready, cutting-edge tech, business value
  {
    title: "Sensory",
    description: "Modern web application built with cutting-edge technologies featuring scalable cloud storage, efficient database management, and advanced rate limiting for optimal performance and security.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel", "Backblaze B2", "Turso", "Upstash Redis"],
    link: "https://mirror.sdad.pro",
  },
  {
    title: "BizForge",
    description: "A comprehensive suite of powerful business tools designed to supercharge your online presence, automate workflows, and drive business growth with modern web technologies.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "RadixUI", "Flask", "Python"],
    link: "https://bizzforge.sdad.pro",
  },
  {
    title: "GenieLabs",
    description: "AI-powered development platform that elevates your workflow with intelligent tools for code generation, analysis, and optimization. Built for developers, by developers.",
    technologies: ["AI Agent", "API Integration", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "12Labs",
    description: "Enterprise-grade suite of AI-powered audio and text processing tools featuring TTS, transcription, and intelligent content generation with support for multiple AI providers.",
    technologies: ["Python", "Flask", "AI", "edge-tts", "Mistral API", "Gemini API", "Machine Learning"],
    link: "https://12labs.xyz",
  },
  {
    title: "WordAI",
    description: "Advanced AI content generation platform that produces high-quality, SEO-optimized content in seconds. Production-ready solution serving users with zero sign-up friction.",
    technologies: ["AI Agent", "API Integration", "React", "Vite", "Tailwind CSS", "Redux", "NLP"],
    link: "https://wordai.app",
  },
  {
    title: "RemoBG – AI Background Remover",
    description: "Production-ready AI-powered image processing tool that removes backgrounds instantly using advanced computer vision. Optimized for speed, privacy, and user experience.",
    technologies: ["AI", "Computer Vision", "Image Processing", "Next.js", "Tailwind CSS", "React"],
    link: "https://remobg.sdad.pro",
  },
  {
    title: "OneShotAI – AI-Powered Prompt Engineering Tool",
    description: "Professional AI tool designed to streamline prompt engineering workflows and optimize AI model interactions for better results and efficiency.",
    technologies: ["AI", "Prompt Engineering", "Next.js", "React", "Tailwind CSS", "NLP"],
    link: "https://oneshotai.sdad.pro",
  },
  // Tier 2: Complex AI/ML applications with business applications
  {
    title: "AI Powered Vedic MatchMaker",
    description: "Intelligent matchmaking platform leveraging advanced AI and Vedic astrology principles to provide comprehensive compatibility analysis and relationship insights.",
    technologies: ["Next.js", "AI", "TensorFlow", "Mistral AI", "API", "React"],
    link: "https://aim.numbervibes.in",
  },
  {
    title: "AI Tarot Card Reader",
    description: "Advanced AI-powered application that provides personalized insights using state-of-the-art machine learning and natural language processing technologies.",
    technologies: ["Next.js", "AI", "TensorFlow", "API", "React", "TypeScript"],
    link: "https://ait.numbervibes.in",
  },
  {
    title: "CV Extractor",
    description: "Intelligent document processing system that automatically extracts and analyzes crucial information from resumes using ML-powered text extraction. Ideal for HR and recruitment workflows.",
    technologies: ["Flask", "Python", "python-docx", "PyPDF2", "openpyxl", "Document Processing", "ML"],
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
  },
  {
    title: "Product Review Sentiment Analyser",
    description: "Machine learning-powered business intelligence tool that analyzes product reviews using advanced sentiment analysis and NLP to provide actionable insights for businesses.",
    technologies: ["Flask", "BeautifulSoup", "Python", "Machine Learning", "NLP", "Sentiment Analysis"],
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
  },
  // Tier 3: Professional web development and design
  {
    title: "My Developer Portfolio",
    description: "Professional portfolio website showcasing modern web development practices, responsive design, and seamless user experience built with cutting-edge technologies.",
    technologies: ["React", "Next.js", "Tailwind CSS", "RadixUI", "shadcn/ui"],
    link: "https://sdad.pro",
  },
  {
    title: "A 3d Landing page for a discord Community",
    description: "Immersive 3D interactive landing page built with Three.js, demonstrating advanced frontend development skills and creative technical implementation.",
    technologies: ["Three.js", "Tailwind CSS", "shadcn/ui", "Next.js", "React"],
    link: "https://zengodz.pp.ua",
  },
  {
    title: "A modern and animated developer portfolio",
    description: "Modern, animated portfolio website featuring smooth animations, particle effects, and responsive design showcasing advanced frontend capabilities.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "RadixUI", "particles.js"],
    link: "https://sdnayak.pp.ua",
  },
  {
    title: "A Creation Showcase web gallery for a 3d printing company",
    description: "Professional web gallery for a 3D printing company, demonstrating ability to create clean, functional business websites with modern design principles.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://www.race3d.store",
  },
  // Tier 4: Productivity and utility tools
  {
    title: "PacePal - A PomoDoro Timer to improve productivity",
    description: "Productivity-focused Pomodoro timer application designed to help users manage time effectively and boost productivity with a clean, intuitive interface.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://focus.racer.news",
  },
  {
    title: "SecPassGen",
    description: "Enterprise-grade secure password generator with strength analysis, built using industry-standard security practices and cryptographic libraries.",
    technologies: ["Flask", "zxcvbn", "SQLite", "Python"],
    link: "https://github.com/instax-dutta/Secure-Password-Generator-Webapp",
  },
  {
    title: "PassGuard",
    description: "Secure password management application with encrypted storage, demonstrating expertise in security best practices and data protection.",
    technologies: ["Flask", "SQLite", "Python"],
    link: "https://github.com/instax-dutta/FlaskPasswordManagerApp",
  },
  {
    title: "Todo List Webapp",
    description: "Full-stack task management application with CRUD operations, task reordering, and persistent storage. Demonstrates complete application development lifecycle.",
    technologies: ["Flask", "SQLAlchemy", "SQLite"],
    link: "https://github.com/instax-dutta/TODO-List-FlaskApp",
  },
  {
    title: "Bandwidth Patrol",
    description: "System monitoring tool that tracks and visualizes bandwidth usage in real-time, providing insights for network management and optimization.",
    technologies: ["Flask", "HTML", "Python"],
    link: "https://github.com/instax-dutta/Bandwith-Usage-Dashboard",
  },
  // Tier 5: DevOps, security, and networking
  {
    title: "Ultimate-Firewall",
    description: "Enterprise-grade firewall solution with comprehensive IP table rules and DDoS protection techniques, demonstrating advanced DevOps and security expertise.",
    technologies: ["IP tables", "DDoS protection techniques"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "CL-Chat",
    description: "Multi-client command-line chat application built with socket programming, showcasing networking expertise and real-time communication implementation.",
    technologies: ["Python", "Socket Programming"],
    link: "https://github.com/instax-dutta/CL-Chat",
  },
  {
    title: "IpRecon",
    description: "Network reconnaissance tool that fetches and analyzes IP address data using external APIs, demonstrating API integration and data analysis skills.",
    technologies: ["Tkinter", "IPinfo API", "Python"],
    link: "https://github.com/instax-dutta/IPRecon",
  },
  {
    title: "Minecraft Server Status Checker",
    description: "Real-time server monitoring tool that checks Minecraft server status, demonstrating API integration and real-time data fetching capabilities.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://mcs.sdad.pro",
  },
  // Tier 6: Creative and design projects
  {
    title: "Horror Themed Portfolio",
    description: "Creative portfolio website with unique horror-themed design, showcasing ability to create engaging, themed user experiences with advanced animations.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "framer-motion", "RadixUI"],
    link: "https://horror-dev-portfolio.vercel.app",
  },
  {
    title: "Minimalistic Corner of the Web",
    description: "Minimalist personal website demonstrating clean design principles, performance optimization, and modern web development practices.",
    technologies: ["Vite", "Tailwind CSS", "shadcn/ui", "RadixUI"],
    link: "https://s8m1t.xyz",
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen text-color-text">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.h1
            className="achiko-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400 tracking-wide"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <p className="text-sm sm:text-base lg:text-lg text-color-text-muted max-w-2xl mx-auto px-4">
            Explore my latest work showcasing innovative solutions and creative implementations
          </p>
        </motion.header>
        <ProjectsAnimatedGrid aria-label="Project portfolio" data-testid="projects-grid">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </ProjectsAnimatedGrid>
        {/* Debug: Ensure all projects are rendered */}
        <div className="sr-only" aria-hidden="true">
          Total projects: {projects.length}
        </div>
        <motion.div
          className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 will-change-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl will-change-transform" />
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl will-change-transform" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl will-change-transform" />
        </motion.div>
      </motion.main>
    </div>
  )
}
