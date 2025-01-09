'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Product Review Sentiment Analyser",
    description: "Developed a web application using Flask and BeautifulSoup to analyze Flipkart product reviews.",
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
    technologies: ["Flask", "BeautifulSoup"]
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
    technologies: ["Flask", "zxcvbn", "SQLite"]
  },
  {
    title: "PassGuard",
    description: "Developed a secure password manager application with Flask.",
    link: "#",
    technologies: ["Flask", "SQLite"]
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

