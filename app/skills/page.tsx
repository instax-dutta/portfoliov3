'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Brain, Server, Zap } from 'lucide-react'

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-8 h-8" />,
    items: [
      { name: "HTML", level: 95 },
      { name: "Python", level: 95 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 50 },
      { name: "C++", level: 40 },
      { name: "R", level: 20 },
    ]
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "scikit-learn", level: 85 },
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 90 },
      { name: "Keras", level: 80 },
      { name: "XGBoost", level: 75 },
      { name: "OpenCV", level: 70 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Plotly", level: 75 },
      { name: "LmStudio",level: 75},
    ]
  },
  {
    category: "DevOps",
    icon: <Server className="w-8 h-8" />,
    items: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Bash scripting", level: 80 },
      { name: "Linux server administration", level: 75 },
      { name: "Netlify", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "Jenkins", level: 50 },
      { name: "Kubernetes", level: 20},
    ]
  },
  {
    category: "Soft Skills",
    icon: <Zap className="w-8 h-8" />,
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 95 },
      { name: "Collaboration", level: 90 },
      { name: "Leadership", level: 80 },
      { name: "Time Management", level: 90 },
      { name: "Critical Thinking", level: 95 },
      { name: "Creativity", level: 90 },
      { name: "Empathy", level: 85 },
    ]
  }
]

export default function Skills() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <motion.main 
        className="container mx-auto px-4 py-12"
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
          Skills
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <SkillCategory key={index} category={skillCategory} index={index} />
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
            Back to Home
          </Link>
        </motion.div>
      </motion.main>
    </div>
  )
}

function SkillCategory({ category, index }: { category: any, index: number }) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-400">{category.icon}</div>
        <h2 className="text-2xl font-semibold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{category.category}</h2>
      </div>
      <div className="space-y-4">
        {category.items.map((skill: any, skillIndex: number) => (
          <SkillBar key={skillIndex} skill={skill} delay={skillIndex * 0.1} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBar({ skill, delay }: { skill: any, delay: number }) {
  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.5, delay }}
        />
      </div>
    </motion.div>
  )
}

