"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import { AnimatedProjectCard } from "@/components/ui/animated-project-card"

const projects = [
  {
    title: "AI Tarot Card Reader",
    description: "Advanced AI-powered tarot card reading application that provides personalized insights using machine learning and natural language processing.",
    technologies: ["Next.js", "AI", "TensorFlow", "API", "React", "TypeScript"],
    link: "https://ait.numbervibes.in",
  },
  {
    title: "AI Powered Vedic MatchMaker",
    description: "Intelligent matchmaking platform leveraging AI and Vedic astrology principles to provide compatibility analysis and relationship insights.",
    technologies: ["Next.js", "AI", "TensorFlow", "Mistral AI", "API", "React"],
    link: "https://aim.numbervibes.in",
  },
  {
    title: "GenieLabs",
    description: "Elevates your development workflow with AI-powered tools that help you write, analyze, and improve code faster than ever.",
    technologies: ["AI Agent", "API Integration", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "12Labs",
    description: "Suite of audio/text tools: TTS (Edge voices), transcription (text/SRT), AI text gen (Mistral/Gemini via OpenRouter).",
    technologies: ["Python", "Flask", "AI", "edge-tts", "Mistral API", "Gemini API", "Machine Learning"],
    link: "https://12labs.xyz",
  },
  {
    title: "OneShotAI – AI-Powered Prompt Engineering Tool",
    description: "An AI-powered tool designed to streamline prompt engineering tasks and optimize AI model interactions.",
    technologies: ["AI", "Prompt Engineering", "Next.js", "React", "Tailwind CSS", "NLP"],
    link: "https://oneshotai.sdad.pro",
  },
  {
    title: "WordAI",
    description: "Generate high-quality, SEO-optimized content in seconds with our advanced AI technology. Free to use, no sign-up required.",
    technologies: ["AI Agent", "API Integration", "React", "Vite", "Tailwind CSS", "Redux", "NLP"],
    link: "https://wordai.app",
  },
  {
    title: "RemoBG – AI Background Remover",
    description: "Remove image backgrounds instantly using advanced AI computer vision. Fast, free, and privacy-friendly.",
    technologies: ["AI", "Computer Vision", "Image Processing", "Next.js", "Tailwind CSS", "React"],
    link: "https://remobg.sdad.pro",
  },
  {
    title: "Product Review Sentiment Analyser",
    description: "Machine learning web application that analyzes Flipkart product reviews using sentiment analysis and natural language processing.",
    technologies: ["Flask", "BeautifulSoup", "Python", "Machine Learning", "NLP", "Sentiment Analysis"],
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
  },
  {
    title: "CV Extractor",
    description: "Intelligent document processing application that extracts crucial information from resumes using ML-powered text extraction and analysis.",
    technologies: ["Flask", "Python", "python-docx", "PyPDF2", "openpyxl", "Document Processing", "ML"],
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
  },
  {
    title: "BizForge",
    description: "A suite of powerful tools to supercharge your online presence and drive your business forward.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "RadixUI", "Flask", "Python"],
    link: "https://bizzforge.sdad.pro",
  },
  {
    title: "A 3d Landing page for a discord Community",
    description: "A 3d Landing page for a discord Community using Three.js",
    technologies: ["Three.js", "Tailwind CSS", "shadcn/ui", "Next.js", "React"],
    link: "https://zengodz.pp.ua",
  },
  {
    title: "My Developer Portfolio",
    description: "My Developer Portfolio Website made using Next.js and Tailwind CSS.",
    technologies: ["React", "Next.js", "Tailwind CSS", "RadixUI", "shadcn/ui"],
    link: "https://sdad.pro",
  },
  {
    title: "A modern and animated developer portfolio",
    description: "A modern and animated developer portfolio using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "RadixUI", "particles.js"],
    link: "https://sdnayak.pp.ua",
  },
  {
    title: "Horror Themed Portfolio",
    description: "A horror themed developer portfolio using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "framer-motion", "RadixUI"],
    link: "https://horror-dev-portfolio.vercel.app",
  },
  {
    title: "PacePal - A PomoDoro Timer to improve productivity",
    description: "A PomoDoro Timer web application using Next.js",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://focus.racer.news",
  },
  {
    title: "Minecraft Server Status Checker",
    description: "A simple Minecraft server status checker web application using Next.js",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://mcs.sdad.pro",
  },
  {
    title: "A Creation Showcase web gallery for a 3d printing company",
    description: "A Creation Showcase web gallery for a 3d printing company using HTML",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://www.race3d.store",
  },
  {
    title: "Minimalistic Corner of the Web",
    description: "A minimalistic personal website made using Next.js and Tailwind CSS.",
    technologies: ["Vite", "Tailwind CSS", "shadcn/ui", "RadixUI"],
    link: "https://s8m1t.xyz",
  },
  {
    title: "SecPassGen",
    description: "Built a secure password generator web application with Flask.",
    technologies: ["Flask", "zxcvbn", "SQLite", "Python"],
    link: "https://github.com/instax-dutta/Secure-Password-Generator-Webapp",
  },
  {
    title: "PassGuard",
    description: "Developed a secure password manager application with Flask.",
    technologies: ["Flask", "SQLite", "Python"],
    link: "https://github.com/instax-dutta/FlaskPasswordManagerApp",
  },
  {
    title: "Todo List Webapp",
    description:
      "Simple to-do list web application built using Flask and SQLAlchemy. Users can add, edit, delete, complete, and reorder tasks.",
    technologies: ["Flask", "SQLAlchemy", "SQLite"],
    link: "https://github.com/instax-dutta/TODO-List-FlaskApp",
  },
  {
    title: "Bandwidth Patrol",
    description: "Application to Measure the Bandwidth Usage of your Device and Display it in the web dashboard!",
    technologies: ["Flask", "HTML", "Python"],
    link: "https://github.com/instax-dutta/Bandwith-Usage-Dashboard",
  },
  {
    title: "IpRecon",
    description: "A Tkinter-based tool to fetch and analyze IP address data using the IPinfo API",
    technologies: ["Tkinter", "IPinfo API", "Python"],
    link: "https://github.com/instax-dutta/IPRecon",
  },
  {
    title: "CL-Chat",
    description: "Multi Client Command Line ChatRoom",
    technologies: ["Python", "Socket Programming"],
    link: "https://github.com/instax-dutta/CL-Chat",
  },
  {
    title: "Ultimate-Firewall",
    description: "Developed and implemented a robust collection of IP table rules for Minecraft server security.",
    technologies: ["IP tables", "DDoS protection techniques"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen text-color-text">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" aria-label="Project portfolio">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </section>
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
