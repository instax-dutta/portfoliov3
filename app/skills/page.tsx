"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Server, Zap } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

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
      { name: "Java", level: 50 },
      { name: "C++", level: 40 },
      { name: "R", level: 20 },
      { name: "Rust", level: 15 },
      { name: "Go", level: 10 },
      { name: "TypeScript", level: 70 },
      { name: "React", level: 50 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    category: "AI/ML",
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
      { name: "LmStudio", level: 75 },
      { name: "Ollama", level: 80 },
      { name: "Hugging Face", level: 80 },
      { name: "Google Vertex", level: 80 },
    ],
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
      { name: "Kubernetes", level: 20 },
      { name: "Bash", level: 90 },
    ],
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
      { name: "Conflict Resolution", level: 85 },
      { name: "Decision Making", level: 90 },
      { name: "Teamwork", level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <div className="relative text-gray-100 min-h-screen">
      <StarryBackground />
      <Navigation />
      
      <motion.main
        className="relative container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="achiko-font text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills & Expertise
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  // Use spring for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Reduced transform ranges for smoother performance
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95], {
    clamp: false
  });
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4], {
    clamp: false
  });
  const y = useTransform(smoothProgress, [0, 1], [20, -20], {
    clamp: false
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        y,
        willChange: "transform, opacity"
      }}
      className="relative bg-color-background/50 backdrop-blur-md border border-color-primary rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-400">{category.icon}</div>
        <h2 className="text-xl font-semibold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {category.category}
        </h2>
      </div>
      <div className="space-y-3">
        {category.items.map((skill: any, skillIndex: number) => (
          <SkillBar key={skillIndex} skill={skill} delay={skillIndex * 0.05} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBar({ skill, delay }: { skill: any; delay: number }) {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: delay + 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </div>
    </motion.div>
  )
}
