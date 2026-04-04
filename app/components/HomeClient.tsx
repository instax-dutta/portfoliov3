"use client"

import Link from "next/link"
import { m } from "framer-motion"
import Navigation from "../components/Navigation"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const roles = [
    "🐍 Python Full Stack Developer",
    "🧠 Machine Learning Engineer",
    "💻 Full Stack Developer",
    "☁️ Certified Cloud Practitioner",
    "🔧 Systems Automation Specialist",
    "🤖 AI Engineer",
    "🔐 Security Engineer",
    "🚀 DevOps Engineer",
    "🛡️ Cybersecurity Specialist",
    "📊 Data Engineer",
    "🔮 NLP Engineer",
    "⚡ React & Next.js Specialist",
]

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
            type: "spring" as const,
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

export default function HomeClient() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <Navigation />
            <m.div
                className="z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-7xl mt-12 sm:mt-16 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <m.div variants={nameVariants} className="w-full">
                    <AnimatedText
                        text="Sai Dutta Abhishek Dash"
                        animateBy="words"
                        textClassName="hero-mooxy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white px-2"
                        underlineGradient="from-color-primary via-color-accent to-color-secondary"
                        underlineHeight="h-1.5"
                        underlineOffset="-bottom-3"
                        className="w-full"
                    />
                </m.div>

                <m.div className="h-12 flex items-center justify-center w-full" variants={itemVariants}>
                    <GooeyText
                        texts={roles}
                        morphTime={1.5}
                        cooldownTime={0.5}
                        textClassName="text-lg sm:text-xl md:text-2xl text-color-text-muted text-glow"
                    />
                </m.div>

                <m.div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
                    variants={itemVariants}
                >
                    <span className="bg-color-primary/10 border border-color-primary/20 text-color-primary px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider font-space-mono">Python Full Stack</span>
                    <span className="bg-color-accent/10 border border-color-accent/20 text-color-accent px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider font-space-mono">Machine Learning</span>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider font-space-mono">Next.js 15</span>
                    <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider font-space-mono">AWS Certified</span>
                </m.div>

                <m.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-6">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-color-primary to-color-accent text-white px-8 py-4 h-auto text-lg rounded-full shadow-lg shadow-color-primary/20 hover:shadow-color-primary/40 transition-all font-bold group"
                    >
                        <Link href="/projects" className="no-underline flex items-center gap-2">
                            Explore Projects
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-2 border-color-secondary text-color-secondary hover:bg-color-secondary hover:text-white px-8 py-4 h-auto text-lg rounded-full transition-all font-bold"
                    >
                        <Link href="/contact" className="no-underline">
                            Hire Me
                        </Link>
                    </Button>
                </m.div>

                <m.div
                    className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-6"
                    variants={itemVariants}
                >
                    <a
                        href="https://github.com/instax-dutta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-text-muted hover:text-color-primary transition-all hover:scale-110"
                        aria-label="GitHub Profile - Sai Dutta Abhishek Dash"
                    >
                        <Github className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sdabhishekdash/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-text-muted hover:text-color-primary transition-all hover:scale-110"
                        aria-label="LinkedIn Profile - Sai Dutta Abhishek Dash"
                    >
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a
                        href="https://twitter.com/abhishekdash69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-text-muted hover:text-color-primary transition-all hover:scale-110"
                        aria-label="Twitter Profile - Sai Dutta Abhishek Dash"
                    >
                        <Twitter className="w-8 h-8" />
                    </a>
                    <a
                        href="mailto:contact@sdad.pro"
                        className="text-color-text-muted hover:text-color-primary transition-all hover:scale-110"
                        aria-label="Email Sai Dutta Abhishek Dash"
                    >
                        <Mail className="w-8 h-8" />
                    </a>
                </m.div>
            </m.div>
        </main>
    )
}
