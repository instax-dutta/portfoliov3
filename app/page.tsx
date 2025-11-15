"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import StarryBackground from "./components/StarryBackground"
import Navigation from "./components/Navigation"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"

const roles = [
  "🐍 Python Full Stack Developer",
  "🧠 Machine Learning Engineer",
  "💻 Full Stack Developer",
  "☁️ Certified Cloud Practitioner",
  "🔧 Systems Automation Specialist",
]

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
      className="z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mt-12 sm:mt-16 gap-6 sm:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={nameVariants} className="w-full">
        <AnimatedText
          text="Sai Dutta Abhishek Dash"
          animateBy="words"
          textClassName="hero-mooxy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
          underlineGradient="from-color-primary via-color-accent to-color-secondary"
          underlineHeight="h-1.5"
          underlineOffset="-bottom-3"
          className="w-full"
        />
      </motion.div>
      <motion.div className="text-lg sm:text-xl md:text-2xl text-color-text-muted" variants={itemVariants}>
        <GooeyText
          texts={roles}
          morphTime={1.5}
          cooldownTime={0.5}
          textClassName="text-lg sm:text-xl md:text-2xl text-color-text-muted"
        />
      </motion.div>
    </motion.div>

    <motion.div
      className="z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mt-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6"
        variants={itemVariants}
      >
        <span className="bg-color-primary/20 text-color-primary px-4 py-2 rounded-full font-medium">Python</span>
        <span className="bg-color-primary/20 text-color-primary px-4 py-2 rounded-full font-medium">Machine Learning</span>
        <span className="bg-color-primary/20 text-color-primary px-4 py-2 rounded-full font-medium">TypeScript</span>
        <span className="bg-color-primary/20 text-color-primary px-4 py-2 rounded-full font-medium">React</span>
        <span className="bg-color-primary/20 text-color-primary px-4 py-2 rounded-full font-medium">Cloud</span>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <Button
          asChild
          variant="reverse"
          className="min-w-[160px] px-8 py-3 text-base sm:text-lg font-heading"
        >
          <Link href="/contact" className="no-underline">
            Contact Me
          </Link>
        </Button>
        <Button
          asChild
          variant="neutral"
          className="min-w-[160px] px-8 py-3 text-base sm:text-lg font-heading"
        >
          <Link href="/projects" className="no-underline">
            View Projects
          </Link>
        </Button>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8"
        variants={itemVariants}
      >
        <a
          href="https://github.com/instax-dutta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-color-text-muted hover:text-color-primary transition-colors text-2xl"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sdabhishekdash/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-color-text-muted hover:text-color-primary transition-colors text-2xl"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.05V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.95V24h-4V8z" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  </main>
  )
}
