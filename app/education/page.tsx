'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "GIET University Gunupur",
    year: "2025"
  },
  {
    degree: "Intermediate",
    institution: "Delhi Public School (DPS)",
    year: "February 2021"
  },
  {
    degree: "High School",
    institution: "Maharshi Vidya Mandir",
    year: "March 2019"
  }
]

export default function Education() {
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
          Education
        </motion.h1>
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{edu.degree}</h2>
            <h3 className="text-xl text-blue-400 mb-2">{edu.institution}</h3>
            <p className="text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
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

