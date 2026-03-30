"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { AnimatedProjectCard } from "@/components/ui/animated-project-card"
import { ProjectsAnimatedGrid } from "@/components/ui/projects-grid"

const projects = [
  // 🚀 Nexus: AI & Automation (VC & High-End Client Focus)

  {
    title: "Tooner — Lightning-Fast Document Tokenization",
    description: "Privacy-first, client-side platform to convert any document (PDF, DOCX, CSV, etc.) into token-optimized .toon files. Reduces token usage for LLMs with zero server-side storage.",
    technologies: ["React 19", "Vite 6", "TypeScript 5", "Framer Motion", "GSAP", "Lenis", "Web Workers", "TOON Format"],
    link: "https://tooner.sdad.pro",
  },
  {
    title: "Ignition — Reddit to LLM Extraction Engine",
    description: "High-performance extraction engine that transforms Reddit discussions into TOON format for LLM ingestion. Intelligent subreddit discovery with 50-70% token reduction.",
    technologies: ["Vite 5", "React 18", "TypeScript 5", "Framer Motion", "Lenis", "Zustand", "TanStack Query v5", "Tailwind CSS v4", "shadcn/ui", "Netlify Functions"],
    link: "https://ignition.sdad.pro",
    githubLink: "https://github.com/instax-dutta/project-ignition",
  },
  {
    title: "GenieLabs",
    description: "AI-powered dev platform for code generation, analysis, and optimization. Workflow automation for the modern developer.",
    technologies: ["AI Agent", "API Integration", "Next.js 14", "React 18", "Tailwind CSS 3", "TypeScript 5"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "WordAI",
    description: "AI content generation that produces SEO-optimized articles in seconds. No sign-up required.",
    technologies: ["AI Agent", "API Integration", "React 18", "Vite 5", "Tailwind CSS 3", "Redux Toolkit", "NLP"],
    link: "https://wordai.app",
  },
  {
    title: "OneShotAI – AI-Powered Prompt Engineering Tool",
    description: "Streamline prompt engineering workflows and optimize AI model interactions for better results.",
    technologies: ["AI", "Prompt Engineering", "Next.js 14", "React 18", "Tailwind CSS 3", "NLP"],
    link: "https://oneshotai.site",
  },
  {
    title: "VeronicaBot — Production Discord Bot for YouTube/Twitch Monitoring",
    description: "A production-grade Discord bot for monitoring YouTube and Twitch channels for live streams and sending real-time notifications to Discord servers. Features privacy-first local storage with SQLite database, YouTube/Twitch API integration, web dashboard, and role-based notifications.",
    technologies: ["Node.js", "Discord.js", "SQLite", "Upstash Redis", "Express.js", "Next.js", "TypeScript", "Docker", "PM2"],
    link: "https://github.com/instax-dutta/VeronicaBot",
    githubLink: "https://github.com/instax-dutta/VeronicaBot",
  },
  {
    title: "MaxArchiver — FFmpeg-based Video Compression Automation",
    description: "Simple FFmpeg-based automation scripts to compress large video libraries and reclaim storage space from gameplay recordings and video captures. Features intelligent hardware auto-select, NVIDIA NVENC/Apple VideoToolbox acceleration, resume logic, and cross-platform support (Windows/Linux/macOS).",
    technologies: ["FFmpeg", "Bash", "Batch", "NVIDIA NVENC", "Apple VideoToolbox", "libx265", "Hardware Acceleration"],
    link: "https://github.com/instax-dutta/MaxArchiver",
    githubLink: "https://github.com/instax-dutta/MaxArchiver",
  },

  // 🔬 Applied ML & Data Engineering (Deep Tech Focus)
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

  // 🛡️ Infrastructure, Security & Cloud (Enterprise Focus)
  {
    title: "Binify - Zero-Knowledge Encrypted Pastebin",
    description: "Zero-knowledge encrypted pastebin. Client-side encryption ensures absolute privacy—even we can't read your pastes.",
    technologies: ["Next.js 15", "Turso", "Upstash Redis", "Tailwind CSS", "Framer Motion", "Lucide React", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
  },
  {
    title: "RedisKeeper — Privacy-First Redis Activity Guard",
    description: "A privacy-first, open-source tool to prevent free-tier Redis databases from being auto-deleted due to inactivity. Weekly automated pings with client-side TweetNaCl.js encryption.",
    technologies: ["Next.js 15", "TypeScript", "NeonDB", "Prisma", "TweetNaCl.js", "Tailwind CSS 4", "Framer Motion", "Lucide React"],
    link: "https://github.com/instax-dutta/rediskeeper",
    githubLink: "https://github.com/instax-dutta/rediskeeper",
  },
  {
    title: "Sensory",
    description: "Scalable cloud storage with efficient database management and advanced rate limiting for optimal performance.",
    technologies: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS 4", "Vercel", "Backblaze B2", "Turso", "Upstash Redis"],
    link: "https://mirror.sdad.pro",
  },
  {
    title: "PacketBuddy — Open Source Network Usage & Bandwidth Tracker",
    description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats, cost tracking, and zero configuration.",
    technologies: ["Python", "JavaScript", "HTML/CSS", "Shell", "PowerShell", "Batchfile", "NeonDB", "Chart.js"],
    link: "https://github.com/instax-dutta/packet-buddy",
  },
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
    link: "https://passwords.sdad.pro",
    githubLink: "https://github.com/instax-dutta/SecPassGenV2",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
}

export default function Projects() {
  return (
    <div className="relative min-h-screen text-color-text">
      <Navigation />
      <motion.main
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          variants={itemVariants}
        >
          <motion.h1
            className="scifi-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 via-teal-400 to-emerald-500 text-glow"
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
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl will-change-transform" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl will-change-transform" />
        </motion.div>
      </motion.main>
    </div>
  )
}
