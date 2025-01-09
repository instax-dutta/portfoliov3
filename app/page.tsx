'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import StarryBackground from './components/StarryBackground'

export default function Home() {
  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/education", label: "Education" },
    { href: "/certifications", label: "Certifications" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <StarryBackground />
      <motion.div
        className="z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          variants={itemVariants}
        >
          Sai Dutta Abhishek Dash
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-gray-300"
          variants={itemVariants}
        >
          Computer Science Student | Machine Learning Enthusiast | Backend Developer | Open Source Contributor
        </motion.p>
        <motion.nav variants={itemVariants}>
          <ul className="flex flex-wrap justify-center gap-4">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </main>
  )
}

