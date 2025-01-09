'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "CodeAlpha",
    date: "June 2024 – July 2024",
  },
  {
    title: "Python Developer Intern",
    company: "OctaNet Services Pvt Ltd.",
    date: "June 2024 – July 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CognoRise InfoTech",
    date: "June 2024 – July 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "TechnoHacks EduTech Official",
    date: "May 2024 - June 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodSoft",
    date: "May 2024 - June 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Cognifyz Technologies",
    date: "May 2024 - June 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Encryptix",
    date: "April 2024 - May 2024",
  },
  {
    title: "Python Developer Intern",
    company: "Cognifyz Technologies",
    date: "Feb 2024 – March 2024",
  },
  {
    title: "CEO & Co-Founder",
    company: "RacerNodes",
    date: "May 2022 – July 2023",
  }
]

export default function Experience() {
  return (
    <div className="text-gray-100 min-h-screen">
      <motion.main 
        className="container mx-auto px-4 py-20"
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
          Experience Timeline
        </motion.h1>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-16 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{exp.title}</h2>
                  <h3 className="text-xl text-blue-400">{exp.company}</h3>
                  <p className="text-gray-400">{exp.date}</p>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              )}
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

