"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.12),transparent_55%)] pointer-events-none" />
      <Navigation />
      <motion.main
        className="relative flex-grow flex flex-col items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10 space-y-3 max-w-2xl px-2">
          <p className="inline-flex items-center px-4 py-1 rounded-full text-xs sm:text-sm tracking-[0.25em] uppercase bg-white/5 border border-white/10 text-color-text/70">
            Let&apos;s collaborate
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white hero-mooxy leading-tight">
            Contact Me
          </h1>
          <p className="text-color-text-muted text-sm sm:text-base lg:text-lg">
            Whether you have a project in mind, need technical advice, or just
            want to say hello, drop a line and I will get back to you.
          </p>
        </div>
        <div className="w-full max-w-5xl grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] flex flex-col gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <p className="text-sm text-color-text-muted">
                Prefer a direct channel? Reach out via any of these platforms.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-color-text/80 hover:text-white hover:border-color-primary/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-color-text-muted">
              <div className="flex flex-col gap-1">
                <span className="text-color-text font-semibold tracking-wide uppercase text-xs">
                  Email
                </span>
                <a href="mailto:sdabhishekdash19@gmail.com" className="text-white hover:text-color-primary">
                  sdabhishekdash19@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-color-text font-semibold tracking-wide uppercase text-xs">
                  Location
                </span>
                <p className="text-white/80">Bhubaneswar, India · Available for remote work</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-color-text font-semibold tracking-wide uppercase text-xs">
                  Response Time
                </span>
                <p className="text-white/80">Within 24 hours on weekdays</p>
              </div>
            </div>
          </section>
          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-color-text">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder:text-color-text-muted border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-color-primary/60 focus:border-color-primary/50 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-color-text">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder:text-color-text-muted border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-color-primary/60 focus:border-color-primary/50 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-color-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 text-white placeholder:text-color-text-muted border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-color-primary/60 focus:border-color-primary/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full text-base sm:text-lg tracking-wide font-heading shadow-shadow hover:-translate-y-0.5 transition-transform duration-200"
              >
                Send Message
              </Button>
            </form>
            {result && (
              <motion.p
                className="mt-6 text-center text-color-text text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {result}
              </motion.p>
            )}
          </section>
        </div>
      </motion.main>
    </div>
  )
}

