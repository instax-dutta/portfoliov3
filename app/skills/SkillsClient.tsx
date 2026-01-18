"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Server, Zap } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    items: [
      "HTML", "Python", "CSS", "SQL", "JavaScript", "Java", "C++", "R", "Rust", "Go", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"
    ],
  },
  {
    category: "AI/ML",
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    items: [
      "TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas", "Keras", "XGBoost", "OpenCV", "Matplotlib", "Seaborn", "Plotly", "LmStudio", "Ollama", "Hugging Face", "Google Vertex"
    ],
  },
  {
    category: "DevOps",
    icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
    items: [
      "AWS", "Docker", "Git", "CI/CD", "Bash scripting", "Linux server administration", "Netlify", "Vercel", "GitHub Actions", "Jenkins", "Kubernetes", "Bash"
    ],
  },
  {
    category: "Soft Skills",
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    items: [
      "Problem Solving", "Communication", "Adaptability", "Collaboration", "Leadership", "Time Management", "Critical Thinking", "Creativity", "Empathy", "Conflict Resolution", "Decision Making", "Teamwork"
    ],
  },
]

export default function Skills() {
  return (
    <div className="relative text-gray-100 min-h-screen">
      <StarryBackground />
      <Navigation />

      <motion.main
        className="relative z-10 isolate container mx-auto px-4 pt-20 sm:pt-24 pb-12 sm:pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.header
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="achiko-font text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400 tracking-wide"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Skills & Expertise
          </motion.h1>
          <motion.p
            className="text-color-text-muted text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive overview of my technical abilities and professional competencies
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skills.map((skillCategory, index) => (
            <SkillCategory key={index} category={skillCategory} index={index} />
          ))}
        </div>
      </motion.main>
    </div>
  )
}

function SkillCategory({ category, index }: { category: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Simplified animation logic for better performance
  return (
    <motion.div
      ref={ref}
      className="relative bg-color-background/40 backdrop-blur-md border border-color-primary/30 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center mb-6 border-b border-color-primary/20 pb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
            {category.icon}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {category.category}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {category.items.map((skill: string, skillIndex: number) => (
            <SkillBadge key={skillIndex} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.03, // Faster stagger for snappier feel
        ease: "backOut"
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-color-background/60 border border-color-primary/20 text-sm sm:text-base font-medium text-color-text-muted hover:text-color-primary hover:border-color-primary/50 hover:bg-color-primary/10 transition-colors cursor-default select-none shadow-sm"
    >
      {skill}
    </motion.div>
  )
}
