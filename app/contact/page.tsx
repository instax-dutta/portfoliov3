"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "../components/StarryBackground"
import Navigation from "../components/Navigation"

const socialLinks = [
  { icon: Github, href: "https://github.com/instax-dutta", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sdabhishekdash/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abhishekdash69", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@sdad.pro", label: "Email" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Input sanitization function
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

export default function Contact() {
  const [result, setResult] = useState("")
  const formRef = React.useRef<HTMLFormElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending....")
    const form = event.currentTarget || formRef.current
    if (!form) {
      setResult("Form error. Please refresh the page.")
      return
    }
    const formData = new FormData(form)

    // Sanitize form inputs
    const name = sanitizeInput(formData.get("name") as string || "")
    const email = sanitizeInput(formData.get("email") as string || "")
    const message = sanitizeInput(formData.get("message") as string || "")

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setResult("Please enter a valid email address")
      return
    }

    // Validate required fields
    if (!name || !email || !message) {
      setResult("Please fill in all required fields")
      return
    }

    // Create new FormData with sanitized values
    const sanitizedFormData = new FormData()
    sanitizedFormData.append("name", name)
    sanitizedFormData.append("email", email)
    sanitizedFormData.append("message", message)
    sanitizedFormData.append("access_key", "19f3f5f2-bed7-452c-ae94-55018f2c7418")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sanitizedFormData,
        headers: {
          'Accept': 'application/json',
        },
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully!")
        if (form) {
          form.reset()
        }
      } else {
        console.log("Error", data)
        setResult(data.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("An error occurred. Please try again later.")
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full max-w-4xl space-y-8 sm:space-y-12"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              className="achiko-font text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-color-text-muted text-base sm:text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              Send me a message and I&apos;ll respond as soon as possible.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Contact Info */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Contact Details */}
              <div className="bg-color-background/50 backdrop-blur-md border border-color-primary/30 rounded-xl p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-color-primary/20 border border-color-primary/30">
                      <Mail className="w-5 h-5 text-color-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-color-text-muted uppercase tracking-wider mb-1">Email</p>
                      <a
                        href="mailto:contact@sdad.pro"
                        className="text-white hover:text-color-primary transition-colors text-base sm:text-lg"
                      >
                        contact@sdad.pro
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-color-primary/20 border border-color-primary/30">
                      <MapPin className="w-5 h-5 text-color-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-color-text-muted uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white text-base sm:text-lg">Bhubaneswar, India</p>
                      <p className="text-color-text-muted text-sm mt-1">Available for remote work</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-color-primary/20 border border-color-primary/30">
                      <Clock className="w-5 h-5 text-color-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-color-text-muted uppercase tracking-wider mb-1">Response Time</p>
                      <p className="text-white text-base sm:text-lg">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-color-primary/20">
                  <p className="text-sm text-color-text-muted uppercase tracking-wider mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-lg border border-color-primary/30 bg-color-background/50 hover:bg-color-primary/20 hover:border-color-primary transition-all duration-300 text-color-text hover:text-color-primary"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={link.label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="bg-color-background/50 backdrop-blur-md border border-color-primary/30 rounded-xl p-6 sm:p-8"
              variants={itemVariants}
            >
              <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-color-text mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-color-background/50 border border-color-primary/30 rounded-lg text-white placeholder:text-color-text-muted focus:outline-none focus:ring-2 focus:ring-color-primary/50 focus:border-color-primary transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-color-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-color-background/50 border border-color-primary/30 rounded-lg text-white placeholder:text-color-text-muted focus:outline-none focus:ring-2 focus:ring-color-primary/50 focus:border-color-primary transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-color-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full px-4 py-3 bg-color-background/50 border border-color-primary/30 rounded-lg text-white placeholder:text-color-text-muted focus:outline-none focus:ring-2 focus:ring-color-primary/50 focus:border-color-primary transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-base sm:text-lg font-heading"
                >
                  Send Message
                </Button>

                {result && (
                  <motion.div
                    className="mt-4 p-4 rounded-lg bg-color-primary/10 border border-color-primary/30 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={`text-sm ${
                      result.includes("successfully") 
                        ? "text-green-400" 
                        : result.includes("Sending") 
                        ? "text-color-primary" 
                        : "text-red-400"
                    }`}>
                      {result}
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
