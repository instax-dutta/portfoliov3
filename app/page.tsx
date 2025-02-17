"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import StarryBackground from "./components/StarryBackground"
import AnimatedText from "./components/AnimatedText"
import Navigation from "./components/Navigation"

export default function Home() {
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
        <AnimatedText
          text="Sai Dutta Abhishek Dash"
          className="text-4xl sm:text-5xl font-bold mb-4 text-white font-playfair"
        />
        <motion.div className="text-2xl sm:text-4xl font-bold mb-4 gradient-text font-playfair" variants={itemVariants}>
          <AnimatedText text="AI-Driven Developer" />
        </motion.div>
        <motion.p className="text-lg sm:text-xl mb-8 text-color-text-muted" variants={itemVariants}>
          🐍 Python & Machine Learning Specialist | 💻 Backend Developer | ☁️ Cloud & DevOps Engineer
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-color-primary to-color-secondary hover:from-color-primary/80 hover:to-color-secondary/80 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="bg-transparent border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

