'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { title } from 'process'
import { link } from 'fs'

const projects = [
  {
    title: "Product Review Sentiment Analyser",
    description: "Developed a web application using Flask and BeautifulSoup to analyze Flipkart product reviews.",
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
    technologies: ["Flask", "BeautifulSoup","Python",]
  },
  {
    title: "Ultimate-Firewall",
    description: "Developed and implemented a robust collection of IP table rules for Minecraft server security.",
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
    technologies: ["IP tables", "DDoS protection techniques"]
  },
  {
    title: "SecPassGen",
    description: "Built a secure password generator web application with Flask.",
    link: "https://github.com/instax-dutta/Secure-Password-Generator-Webapp",
    technologies: ["Flask", "zxcvbn", "SQLite","python"]
  },
  {
    title: "PassGuard",
    description: "Developed a secure password manager application with Flask.",
    link: "https://github.com/instax-dutta/FlaskPasswordManagerApp",
    technologies: ["Flask", "SQLite",]
  },
  {
    title: "IpRecon",
    description: "A Tkinter-based tool to fetch and analyze IP address data using the IPinfo API",
    link: "https://github.com/instax-dutta/IPRecon",
    technologies: ["Tkinter", "IPinfo API", "Python"]
  },
  {
    title: "Todo List Webapp", 
    description: "Simple to-do list web application built using Flask and SQLAlchemy. Users can add, edit, delete, complete, and reorder tasks.",
    link: "https://github.com/instax-dutta/TODO-List-FlaskApp",
    technologies: ["Flask", "SQLAlchemy", "SQLite"]
  },
  {
    title: "Bandwidth Patrol",
    description: "Application to Measure the Bandwidth Usage of your Device and Display it in the web dashboard!",
    link:"https://github.com/instax-dutta/Bandwith-Usage-Dashboard",
    technologies: ["Flask", "html", "Python"]
  },
  {
    title: "CV Extractor",
    description: "A web application that allows you to extract crucial information from a collection of resumes or CVs in various file formats (PDF, DOCX).",
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
    technologies: ["Flask", "Python", "python-docx","PyPDF2","openpyxl"]
  },
  {
    title: "CL-Chat",
    description: "Multi Client Command Line ChatRoom",
    link: "https://github.com/instax-dutta/CL-Chat",
    technologies: ["Python", "Socket Programming"]
  },
  {
    title: "My Developer Portfolio",
    description: "My Developer Portfolio Website made using Next.js and Tailwind CSS.", 
    link: "https://sdad.pro",
    technologies: ["React","Next.js", "Tailwind CSS","RadixUI","shadcn/ui"]
  },
  {
    title: "Minimalistic Corner of the Web",
    description: "A a minimalistic personal website made using Next.js and Tailwind CSS.",
    link: "https://s8m1t.xyz",
    technologies: ["Vite", "Tailwind CSS","shadcn/ui","RadixUI"]
  },
  {
    title: "Horror Themed Portfolio",
    description: "A horror themed developer portfolio using Next.js and Tailwind CSS.",
    link: "https://horror-dev-portfolio.vercel.app",
    technologies: ["Next.js", "Tailwind CSS","shadcn/ui","framer-motion","RadixUI"]
  },
  {
    title: "A modern and animated developer portfolio",
    description: "A modern and animated developer portfolio using Next.js and Tailwind CSS.",
    link: "https://sdnayak.pp.ua",
    technologies: ["Next.js", "Tailwind CSS","shadcn/ui","RadixUI","particles.js"]
  },
  {
    title: "A 3d Landing page for a discord Community",
    description: "A 3d Landing page for a discord Community using Three.js",
    link: "https://zengodz.pp.ua",
    technologies: ["Three.js", "Tailwind CSS","shadcn/ui","next.js","React"]
  },
  {
    title: "Minecraft Server Status Checker",
    description: "A simple Minecraft server status checker web application using next.js",
    link: "https://mcs.sdad.pro",
    technologies: ["Next.js", "Tailwind CSS","shadcn/ui"]
  },
  {
    title : "A Creation Showcase web gallery for a 3d printing company",
    description: "A Creation Showcase web gallery for a 3d printing company using html",
    link: "https://www.race3d.store",
    technologies: ["html", "css","js"],
  }


]

export default function Projects() {
  return (
    <div className="text-gray-100 min-h-screen">
      <motion.main 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{project.title}</h2>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400 transition-colors duration-300">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </motion.main>
    </div>
  )
}

