"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

const projects = [
  {
    title: "GenieLabs",
    description: "Elevates your development workflow with AI-powered tools that help you write, analyze, and improve code faster than ever.",
    technologies: ["AI Agent", "API Integration", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "NoGPT",
    description: "Transform AI-generated text into natural, human-like content that bypasses AI detection.",
    technologies: ["AI", "Natural Language Processing (NLP)", "Flask", "Python"],
    link: "https://nogpt.sdad.pro",
  },
  {
    title: "Chronicle Canvas",
    description: "Generate high-quality, SEO-optimized content in seconds with our advanced AI technology. Free to use, no sign-up required.",
    technologies: ["AI Agent", "API Integration", "React", "Vite", "Tailwind CSS", "Redux"],
    link: "https://cc.sdad.pro",
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
    title: "CV Extractor",
    description:
      "A web application that allows you to extract crucial information from a collection of resumes or CVs in various file formats (PDF, DOCX).",
    technologies: ["Flask", "Python", "python-docx", "PyPDF2", "openpyxl"],
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
  },
  {
    title: "Product Review Sentiment Analyser",
    description: "Developed a web application using Flask and BeautifulSoup to analyze Flipkart product reviews.",
    technologies: ["Flask", "BeautifulSoup", "Python"],
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
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
    title: "PassGuard",
    description: "Developed a secure password manager application with Flask.",
    technologies: ["Flask", "SQLite"],
    link: "https://github.com/instax-dutta/FlaskPasswordManagerApp",
  },
  {
    title: "SecPassGen",
    description: "Built a secure password generator web application with Flask.",
    technologies: ["Flask", "zxcvbn", "SQLite", "Python"],
    link: "https://github.com/instax-dutta/Secure-Password-Generator-Webapp",
  },
  {
    title: "Ultimate-Firewall",
    description: "Developed and implemented a robust collection of IP table rules for Minecraft server security.",
    technologies: ["IP tables", "DDoS protection techniques"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "Minimalistic Corner of the Web",
    description: "A minimalistic personal website made using Next.js and Tailwind CSS.",
    technologies: ["Vite", "Tailwind CSS", "shadcn/ui", "RadixUI"],
    link: "https://s8m1t.xyz",
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
    title: "Todo List Webapp",
    description:
      "Simple to-do list web application built using Flask and SQLAlchemy. Users can add, edit, delete, complete, and reorder tasks.",
    technologies: ["Flask", "SQLAlchemy", "SQLite"],
    link: "https://github.com/instax-dutta/TODO-List-FlaskApp",
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-color-background text-color-text">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-color-primary to-color-secondary"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-color-background/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-color-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-color-primary">{project.title}</h2>
              <p className="mb-4 text-color-text-muted">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-color-secondary/20 text-color-secondary rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-primary hover:text-color-secondary transition-colors duration-300"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  )
}

