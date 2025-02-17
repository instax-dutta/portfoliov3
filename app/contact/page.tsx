"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, href: "https://github.com/instax-dutta" },
  { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/sdabhishekdash/" },
  { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/abhishekdash69" },
  { icon: <Mail className="w-6 h-6" />, href: "mailto:sdabhishekdash19@gmail.com" },
]

export default function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.currentTarget)

    formData.append("access_key", "19f3f5f2-bed7-452c-ae94-55018f2c7418")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully!")
      event.currentTarget.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-white font-playfair">Contact Me</h1>
        <div className="w-full max-w-4xl bg-color-background/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-text hover:text-color-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-color-text mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-color-background text-color-text border border-color-text/30 rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-color-text mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-color-background text-color-text border border-color-text/30 rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-color-text mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 bg-color-background text-color-text border border-color-text/30 rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-color-primary to-color-secondary hover:from-color-primary/80 hover:to-color-secondary/80 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
          {result && (
            <motion.p
              className="mt-4 text-center text-color-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {result}
            </motion.p>
          )}
        </div>
      </motion.main>
    </div>
  )
}

