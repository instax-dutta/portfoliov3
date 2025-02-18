"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import StarryBackground from "./components/StarryBackground"
import AnimatedText from "./components/AnimatedText"
import Navigation from "./components/Navigation"

const roles = [
  "🐍 Python Full Stack Developer",
  "🧠 Machine Learning Engineer",
  "💻 Full Stack Developer",
  "☁️ Certified Cloud Practitioner",
  "🔧 Systems Automation Specialist",
]

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000) // Change role every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <StarryBackground />
      <Navigation />
      <motion.div
        className="z-10 text-center px-4 max-w-4xl mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white font-playfair leading-tight"
          variants={nameVariants}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sai
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dutta
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Abhishek
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Dash
          </motion.span>
        </motion.h1>
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-playfair"
          variants={itemVariants}
        >
          AI-Driven Developer
        </motion.div>
        <motion.div className="text-xl sm:text-2xl mb-8 text-color-text-muted" variants={itemVariants}>
          <AnimatedText text={roles[currentRoleIndex]} key={currentRoleIndex} />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-color-primary to-color-secondary hover:from-color-primary/80 hover:to-color-secondary/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="bg-transparent border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

