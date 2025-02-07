'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Brain, Server, Zap } from 'lucide-react'

const sectionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1 }
}

export default function About() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <div className="text-gray-100 min-h-screen">
      <motion.main 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Sai Dutta Abhishek Dash
        </motion.h1>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Professional Summary</h2>
          <p className="text-lg mb-4 text-gray-300">
            I am a dynamic and results-driven Computer Science student with a strong foundation in Python, machine learning, and DevOps. My entrepreneurial drive and technical proficiency make me an ideal candidate for innovative roles in the tech industry.
          </p>
          <p className="text-lg text-gray-300">
            With hands-on experience in developing machine learning models, automating processes, and managing cloud infrastructure, I am poised to contribute significantly to projects that leverage cutting-edge technologies to solve real-world problems.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              icon={<Code className="w-8 h-8" />}
              title="Programming"
              skills={['HTML', 'Python', 'CSS', 'SQL', 'JavaScript', 'Java', 'C++', 'R', 'Rust', 'Go', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js']}
            />
            <SkillCard 
              icon={<Brain className="w-8 h-8" />}
              title="AI/ML"
              skills={['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'Keras', 'XGBoost', 'OpenCV', 'Matplotlib', 'Seaborn', 'Plotly', 'LmStudio', 'Ollama', 'Hugging Face', 'Google Vertex']}
            />
            <SkillCard 
              icon={<Server className="w-8 h-8" />}
              title="DevOps"
              skills={['AWS', 'Docker', 'Git', 'CI/CD', 'Bash scripting', 'Linux server administration', 'Netlify', 'Vercel', 'GitHub Actions', 'Jenkins', 'Kubernetes', 'Bash']}
            />
            <SkillCard 
              icon={<Zap className="w-8 h-8" />}
              title="Soft Skills"
              skills={['Problem Solving', 'Communication', 'Adaptability', 'Collaboration', 'Leadership', 'Time Management', 'Critical Thinking', 'Creativity', 'Empathy', 'Conflict Resolution', 'Decision Making', 'Teamwork']}
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Professional Objectives</h2>
          <div className="space-y-4">
            <ExpandableSection
              title="Innovative Problem Solving"
              content="Seeking opportunities to apply my technical skills and creative thinking to develop innovative solutions for complex challenges in the tech industry."
              isExpanded={expandedSection === 'innovative'}
              toggleExpand={() => toggleSection('innovative')}
            />
            <ExpandableSection
              title="Continuous Learning"
              content="Committed to staying at the forefront of emerging technologies, particularly in AI and machine learning, to drive cutting-edge developments in the field."
              isExpanded={expandedSection === 'learning'}
              toggleExpand={() => toggleSection('learning')}
            />
            <ExpandableSection
              title="Impactful Contributions"
              content="Aiming to contribute to projects that have a meaningful impact on society, leveraging technology to improve people's lives and drive positive change."
              isExpanded={expandedSection === 'impact'}
              toggleExpand={() => toggleSection('impact')}
            />
          </div>
        </motion.section>

        <motion.div
          className="text-center"
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

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function ExpandableSection({ title, content, isExpanded, toggleExpand }: { title: string, content: string, isExpanded: boolean, toggleExpand: () => void }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700">
      <button 
        className="w-full px-4 py-2 flex justify-between items-center text-left"
        onClick={toggleExpand}
      >
        <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{title}</span>
        {isExpanded ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-blue-400" />}
      </button>
      <motion.div
        variants={sectionVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.3 }}
      >
        {isExpanded && <p className="px-4 py-2 text-gray-300">{content}</p>}
      </motion.div>
    </div>
  )
}

