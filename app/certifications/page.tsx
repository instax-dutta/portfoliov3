'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: "AWS Bedrock Workshop (Build a Gen AI Chatbot) - Level 100!",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Amazon Bedrock Getting Started",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    title: "Amazon Q Developer",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    title: "Amazon Web Services Cloud Practitioner",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Learn to Code in Python 3: Programming beginner to advanced",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Planning a Machine Learning Project",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    title: "Python For Data Science and Machine Learning",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Project Management",
    issuer: "Career Ninja | LearnTube",
    year: "2024"
  }
]

export default function Certifications() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
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
          Certifications
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{cert.title}</h2>
              <p className="text-blue-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-400">{cert.year}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </motion.main>
    </div>
  )
}

