"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Brain, Server, Zap, Target, TrendingUp, Lightbulb, Rocket, Users, Globe } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

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

export default function About() {
  return (
    <div className="relative text-gray-100 min-h-screen">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400 achiko-font"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-color-text-muted text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Freelance Full Stack Developer and Machine Learning Engineer passionate about building innovative solutions and delivering high-quality projects
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Large Hero Card - Professional Summary */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-color-background/50 backdrop-blur-md border border-color-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-color-primary/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Professional Summary
                </h2>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I am a dynamic and results-driven Freelance Full Stack Developer with a strong foundation in Python, machine
                learning, and DevOps. My entrepreneurial drive and technical proficiency enable me to deliver innovative solutions
                for clients across the tech industry.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With extensive hands-on experience in developing machine learning models, automating processes, and managing cloud
                infrastructure, I specialize in building scalable applications that leverage cutting-edge technologies
                to solve real-world business problems. Available for remote projects and consulting.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-color-primary/20">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm border border-blue-500/30">
                  Full Stack
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs sm:text-sm border border-purple-500/30">
                  ML Engineer
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm border border-cyan-500/30">
                  Cloud Practitioner
                </span>
              </div>
            </div>
          </motion.div>

          {/* Programming Skills Card */}
          <SkillBentoCard
            icon={<Code className="w-6 h-6" />}
            title="Programming"
            skills={["Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "HTML", "CSS", "SQL", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Java", "C++", "Rust", "Go", "Tailwind CSS", "Redux"]}
            gradient="from-blue-500/20 to-cyan-500/20"
            borderColor="border-blue-500/30"
            iconColor="text-blue-400"
            variants={itemVariants}
          />

          {/* AI/ML Skills Card */}
          <SkillBentoCard
            icon={<Brain className="w-6 h-6" />}
            title="AI/ML"
            skills={["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas", "OpenCV", "Hugging Face", "Ollama", "Keras", "XGBoost", "Matplotlib", "Seaborn", "Plotly", "NLTK", "spaCy", "LangChain", "Google Vertex AI", "Mistral AI", "Gemini API", "Computer Vision"]}
            gradient="from-purple-500/20 to-pink-500/20"
            borderColor="border-purple-500/30"
            iconColor="text-purple-400"
            variants={itemVariants}
          />

          {/* DevOps Skills Card */}
          <SkillBentoCard
            icon={<Server className="w-6 h-6" />}
            title="DevOps"
            skills={["AWS", "Docker", "Git", "CI/CD", "Kubernetes", "GitHub Actions", "Vercel", "Netlify", "Linux", "Bash", "Terraform", "Ansible", "Jenkins", "Nginx", "CloudFormation", "EC2", "S3", "Lambda", "CloudWatch", "IAM"]}
            gradient="from-cyan-500/20 to-blue-500/20"
            borderColor="border-cyan-500/30"
            iconColor="text-cyan-400"
            variants={itemVariants}
          />

          {/* Soft Skills Card */}
          <SkillBentoCard
            icon={<Zap className="w-6 h-6" />}
            title="Soft Skills"
            skills={["Problem Solving", "Leadership", "Communication", "Teamwork", "Adaptability", "Creativity", "Time Management", "Critical Thinking", "Decision Making", "Conflict Resolution", "Empathy", "Collaboration", "Mentoring", "Project Management", "Agile Methodology"]}
            gradient="from-yellow-500/20 to-orange-500/20"
            borderColor="border-yellow-500/30"
            iconColor="text-yellow-400"
            variants={itemVariants}
          />

          {/* Professional Objectives Cards */}
          <ObjectiveCard
            icon={<Target className="w-4 h-4" />}
            title="Problem Solving"
            description="Expert in analyzing complex technical challenges and delivering innovative, scalable solutions. Proven track record of debugging critical issues and optimizing system performance across multiple projects."
            gradient="from-green-500/20 to-emerald-500/20"
            borderColor="border-green-500/30"
            iconColor="text-green-400"
            variants={itemVariants}
          />

          <ObjectiveCard
            icon={<TrendingUp className="w-4 h-4" />}
            title="Continuous Learning"
            description="Committed to staying ahead of industry trends, regularly upskilling in AI/ML, cloud technologies, and modern frameworks. Actively contributes to open-source projects and technical communities."
            gradient="from-indigo-500/20 to-purple-500/20"
            borderColor="border-indigo-500/30"
            iconColor="text-indigo-400"
            variants={itemVariants}
          />

          <ObjectiveCard
            icon={<Lightbulb className="w-4 h-4" />}
            title="Impactful Work"
            description="Delivered 20+ production-ready applications serving thousands of users. Specialized in building AI-powered solutions that automate workflows and enhance business efficiency."
            gradient="from-pink-500/20 to-rose-500/20"
            borderColor="border-pink-500/30"
            iconColor="text-pink-400"
            variants={itemVariants}
          />

          <ObjectiveCard
            icon={<Globe className="w-4 h-4" />}
            title="Client-Focused"
            description="Experienced in remote collaboration with international clients. Strong communication skills with proven ability to translate technical concepts to stakeholders and deliver projects on time and within budget."
            gradient="from-teal-500/20 to-cyan-500/20"
            borderColor="border-teal-500/30"
            iconColor="text-teal-400"
            variants={itemVariants}
          />
        </div>
      </motion.main>
    </div>
  )
}

function SkillBentoCard({
  icon,
  title,
  skills,
  gradient,
  borderColor,
  iconColor,
  variants,
}: {
  icon: React.ReactNode
  title: string
  skills: string[]
  gradient: string
  borderColor: string
  iconColor: string
  variants: any
}) {
  return (
    <motion.div
      className={`bg-color-background/50 backdrop-blur-md border ${borderColor} rounded-xl p-3 sm:p-4 flex flex-col group hover:border-opacity-60 transition-all duration-300`}
      variants={variants}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} border ${borderColor}`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {title}
        </h3>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 rounded-md bg-gradient-to-br ${gradient} ${borderColor} border text-xs text-gray-300`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ObjectiveCard({
  icon,
  title,
  description,
  gradient,
  borderColor,
  iconColor,
  variants,
}: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  borderColor: string
  iconColor: string
  variants: any
}) {
  return (
    <motion.div
      className={`bg-color-background/50 backdrop-blur-md border ${borderColor} rounded-xl p-3 sm:p-4 flex flex-col group hover:border-opacity-60 transition-all duration-300`}
      variants={variants}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex items-start gap-2.5 mb-2">
        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} border ${borderColor} flex-shrink-0`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-bold text-white mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
