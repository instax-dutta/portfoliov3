"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "GIET University Gunupur",
    year: "2025",
  },
  {
    degree: "Intermediate",
    institution: "Delhi Public School (DPS)",
    year: "February 2021",
  },
  {
    degree: "High School",
    institution: "Maharshi Vidya Mandir",
    year: "March 2019",
  },
]

export default function Education() {
  return (
    <div className="text-gray-100 min-h-screen">
      <StarryBackground />
      <Navigation />
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
          Education
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-color-background/50 backdrop-blur-md border border-color-primary rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {edu.degree}
              </h2>
              <h3 className="text-lg text-blue-400 mb-1">{edu.institution}</h3>
              <p className="text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  )
}
