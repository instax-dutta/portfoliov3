"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import { AnimatedProjectCard } from "@/components/ui/animated-project-card"
import { ProjectsAnimatedGrid } from "@/components/ui/projects-grid"

const projects = [
  // 🚀 Featured: Production-Ready Fullstack & AI Applications
  {
    title: "VullScanny - Security Vulnerability Scanner",
    description: "AI-powered security scanner with zero-config setup. Instant code analysis and comprehensive vulnerability reports.",
    technologies: ["Next.js 16", "React", "Tailwind CSS", "Framer Motion", "Lenis", "PWA", "Turbopack", "Vercel", "HSTS"],
    link: "https://vullscanny.sdad.pro",
  },
  {
    title: "Binify - Zero-Knowledge Encrypted Pastebin",
    description: "Zero-knowledge encrypted pastebin. Client-side encryption ensures absolute privacy—even we can't read your pastes.",
    technologies: ["Next.js 15", "Turso", "Upstash Redis", "Tailwind CSS", "Framer Motion", "Lucide React", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
  },
  {
    title: "GenieLabs",
    description: "AI-powered dev platform for code generation, analysis, and optimization. Workflow automation for the modern developer.",
    technologies: ["AI Agent", "API Integration", "Next.js 14", "React 18", "Tailwind CSS 3", "TypeScript 5"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "Sensory",
    description: "Scalable cloud storage with efficient database management and advanced rate limiting for optimal performance.",
    technologies: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS 4", "Vercel", "Backblaze B2", "Turso", "Upstash Redis"],
    link: "https://mirror.sdad.pro",
  },
  // TODO: Hidden - Work in progress, uncomment when ready to display
  /* {
    title: "12Labs",
    description: "Enterprise-grade suite of AI-powered audio and text processing tools featuring TTS, transcription, and intelligent content generation with support for multiple AI providers.",
    technologies: ["Python 3.11", "Flask 3", "AI", "edge-tts", "Mistral API", "Gemini API", "Machine Learning"],
    link: "https://12labs.xyz",
  }, */
  {
    title: "WordAI",
    description: "AI content generation that produces SEO-optimized articles in seconds. No sign-up required.",
    technologies: ["AI Agent", "API Integration", "React 18", "Vite 5", "Tailwind CSS 3", "Redux Toolkit", "NLP"],
    link: "https://wordai.app",
  },
  {
    title: "BizForge",
    description: "Suite of business tools to automate workflows and supercharge online presence. All-in-one business growth platform.",
    technologies: ["Next.js 14", "Tailwind CSS 3", "shadcn/ui", "RadixUI", "Flask 3", "Python 3.11"],
    link: "https://bizzforge.sdad.pro",
  },

  {
    title: "OneShotAI – AI-Powered Prompt Engineering Tool",
    description: "Streamline prompt engineering workflows and optimize AI model interactions for better results.",
    technologies: ["AI", "Prompt Engineering", "Next.js 14", "React 18", "Tailwind CSS 3", "NLP"],
    link: "https://oneshotai.sdad.pro",
  },
  {
    title: "AI Powered Vedic MatchMaker",
    description: "AI-driven matchmaking using Vedic astrology for comprehensive compatibility analysis and relationship insights.",
    technologies: ["Next.js 13", "AI", "TensorFlow.js", "Mistral AI", "API", "React 18"],
    link: "https://aim.numbervibes.in",
  },
  {
    title: "AI Tarot Card Reader",
    description: "AI-powered tarot readings with personalized insights using advanced ML and NLP technologies.",
    technologies: ["Next.js 13", "AI", "TensorFlow.js", "API", "React 18", "TypeScript 5"],
    link: "https://ait.numbervibes.in",
  },

  // 🔬 Machine Learning & Data Engineering
  {
    title: "CV Extractor",
    description: "ML-powered resume parser that automatically extracts key information. Streamlines HR and recruitment workflows.",
    technologies: ["Flask 2", "Python 3.10", "python-docx", "PyPDF2", "openpyxl", "Document Processing", "ML"],
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
  },
  {
    title: "Product Review Sentiment Analyser",
    description: "ML-powered sentiment analysis tool that transforms product reviews into actionable business insights.",
    technologies: ["Flask 2", "BeautifulSoup 4", "Python 3.9", "Machine Learning", "NLP", "Sentiment Analysis"],
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
  },

  // 🔐 Enterprise Security & DevOps
  {
    title: "Ultimate-Firewall",
    description: "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques.",
    technologies: ["IP tables v1.8", "DDoS protection techniques"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "SecPassGen",
    description: "Secure password generator with strength analysis using industry-standard cryptographic practices.",
    technologies: ["Flask 2", "zxcvbn", "SQLite 3", "Python 3.9"],
    link: "https://github.com/instax-dutta/Secure-Password-Generator-Webapp",
  },
  {
    title: "PassGuard",
    description: "Password manager with encrypted storage. Built with security best practices and data protection in mind.",
    technologies: ["Flask 2", "SQLite 3", "Python 3.9"],
    link: "https://github.com/instax-dutta/FlaskPasswordManagerApp",
  },
  {
    title: "Bandwidth Patrol",
    description: "Real-time bandwidth monitoring and visualization for network management and optimization insights.",
    technologies: ["Flask 2", "HTML5", "Python 3.9"],
    link: "https://github.com/instax-dutta/Bandwith-Usage-Dashboard",
  },
  {
    title: "IpRecon",
    description: "Network reconnaissance tool for IP address analysis and geolocation data using external APIs.",
    technologies: ["Tkinter", "IPinfo API", "Python 3.9"],
    link: "https://github.com/instax-dutta/IPRecon",
  },
  {
    title: "CL-Chat",
    description: "Multi-client CLI chat application built with socket programming for real-time communication.",
    technologies: ["Python 3.8", "Socket Programming"],
    link: "https://github.com/instax-dutta/CL-Chat",
  },

  // 🎨 Modern Web Development & Creative
  {
    title: "My Developer Portfolio",
    description: "Modern portfolio showcasing responsive design and seamless UX with cutting-edge web technologies.",
    technologies: ["React 18", "Next.js 14", "Tailwind CSS 3", "RadixUI", "shadcn/ui"],
    link: "https://sdad.pro",
  },
  {
    title: "A 3d Landing page for a discord Community",
    description: "Immersive 3D landing page built with Three.js. Interactive experience showcasing creative frontend development.",
    technologies: ["Three.js r150", "Tailwind CSS 3", "shadcn/ui", "Next.js 13", "React 18"],
    link: "https://zengodz.pp.ua",
  },
  {
    title: "Todo List Webapp",
    description: "Full-stack task manager with CRUD operations, drag-and-drop reordering, and persistent storage.",
    technologies: ["Flask 2", "SQLAlchemy 2", "SQLite 3"],
    link: "https://github.com/instax-dutta/TODO-List-FlaskApp",
  },
  {
    title: "PacePal - A PomoDoro Timer to improve productivity",
    description: "Pomodoro timer with a clean interface to boost productivity and manage time effectively.",
    technologies: ["Next.js 14", "Tailwind CSS 3", "shadcn/ui"],
    link: "https://focus.racer.news",
  },
  {
    title: "Horror Themed Portfolio",
    description: "Horror-themed portfolio with unique design and advanced animations. A spooky twist on the traditional portfolio.",
    technologies: ["Next.js 14", "Tailwind CSS 3", "shadcn/ui", "framer-motion 10", "RadixUI"],
    link: "https://horror-dev-portfolio.vercel.app",
  },
  {
    title: "Minimalistic Corner of the Web",
    description: "Minimalist website demonstrating clean design and performance optimization. Less is more.",
    technologies: ["Vite 4", "Tailwind CSS 3", "shadcn/ui", "RadixUI"],
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
