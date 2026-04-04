"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { Briefcase, Calendar, Building2, Zap, Code, Brain, Rocket, ChevronDown } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    date: "September 2025 – Present",
    type: "Freelance",
    location: "Remote",
    description: "Providing full-stack development services to clients, building scalable web applications, and delivering end-to-end solutions from frontend to backend.",
    skills: ["Full Stack Development", "Web Applications", "Client Services", "Project Management", "React", "Node.js", "Database Design"],
    achievements: ["Delivering custom web solutions", "Working with diverse client projects", "Building scalable applications"],
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    color: "from-cyan-400 via-blue-500 to-indigo-600"
  },
  {
    title: "Associate",
    company: "Tech Mahindra",
    date: "June 2025 – September 2025",
    type: "Full-time",
    location: "Bhubaneswar, India",
    description: "Worked as an Associate, contributing to enterprise software solutions and digital transformation initiatives.",
    skills: ["Enterprise Solutions", "Digital Transformation", "Team Collaboration", "Client Management"],
    achievements: ["Promoted from Associate Trainee", "Contributed to key projects"],
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    color: "from-emerald-400 via-teal-500 to-cyan-600"
  },
  {
    title: "Associate Trainee",
    company: "Tech Mahindra",
    date: "May 2025 – June 2025",
    type: "Training Program",
    location: "Bhubaneswar, India",
    description: "Completed comprehensive training program covering enterprise technologies, software development practices, and industry standards.",
    skills: ["Enterprise Technologies", "Software Development", "Industry Standards", "Professional Development"],
    achievements: ["Successfully completed training program", "Quick promotion to Associate"],
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    color: "from-sky-400 via-blue-500 to-indigo-700"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodeAlpha",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed and implemented machine learning models for data analysis and predictive analytics projects.",
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Scikit-learn"],
    achievements: ["Built 3 ML models", "Improved prediction accuracy by 15%"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />,
    color: "from-teal-300 via-emerald-400 to-green-600"
  },
  {
    title: "Python Developer Intern",
    company: "OctaNet Services Pvt Ltd.",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed Python applications and automated workflows, contributing to backend development projects.",
    skills: ["Python", "Backend Development", "API Development", "Automation", "Database Management"],
    achievements: ["Created automation scripts", "Reduced manual work by 40%"],
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-blue-200 via-sky-400 to-blue-600"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CognoRise InfoTech",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Focused on computer vision and natural language processing projects, implementing cutting-edge ML algorithms.",
    skills: ["Computer Vision", "NLP", "Deep Learning", "OpenCV", "NLTK"],
    achievements: ["Implemented CV solutions", "Developed NLP models"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-blue-200 via-sky-300 to-blue-500"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "TechnoHacks EduTech Official",
    date: "May 2024 - June 2024",
    type: "Internship",
    location: "Remote",
    description: "Worked on educational technology solutions using machine learning to enhance learning experiences.",
    skills: ["EdTech Solutions", "Machine Learning", "Data Science", "Educational Analytics"],
    achievements: ["Built learning recommendation system", "Analyzed student performance data"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-cyan-300 via-sky-400 to-blue-500"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodSoft",
    date: "May 2024 - June 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed machine learning solutions for business intelligence and data-driven decision making.",
    skills: ["Business Intelligence", "Data Mining", "Predictive Analytics", "Machine Learning"],
    achievements: ["Created BI dashboards", "Implemented predictive models"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-sky-300 via-blue-400 to-indigo-500"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Cognifyz Technologies",
    date: "May 2024 - June 2024",
    type: "Internship",
    location: "Remote",
    description: "Specialized in developing AI-powered applications and integrating machine learning models into production systems.",
    skills: ["AI Applications", "Model Deployment", "Production Systems", "MLOps"],
    achievements: ["Deployed ML models to production", "Optimized model performance"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-emerald-300 via-teal-400 to-teal-700"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Encryptix",
    date: "April 2024 - May 2024",
    type: "Internship",
    location: "Remote",
    description: "Focused on developing secure ML applications with emphasis on data privacy and security in AI systems.",
    skills: ["Secure ML", "Data Privacy", "Encryption", "AI Security", "Privacy-Preserving ML"],
    achievements: ["Implemented secure ML pipeline", "Enhanced data privacy measures"],
    icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-slate-300 via-gray-400 to-zinc-600"
  },
  {
    title: "Python Developer Intern",
    company: "Cognifyz Technologies",
    date: "Feb 2024 – March 2024",
    type: "Internship",
    location: "Remote",
    description: "Early internship experience focusing on Python development fundamentals and software engineering practices.",
    skills: ["Python", "Software Engineering", "Web Development", "Database Design"],
    achievements: ["Built web applications", "Learned industry best practices"],
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-slate-200 via-slate-400 to-blue-600"
  },
  {
    title: "CEO & Co-Founder",
    company: "RacerNodes",
    date: "May 2022 – July 2023",
    type: "Entrepreneurship",
    location: "India",
    description: "Founded and led a technology startup, managing team operations, product development, and strategic planning.",
    skills: ["Leadership", "Entrepreneurship", "Strategic Planning", "Team Management", "Product Development"],
    achievements: ["Led team of 5+ members", "Launched successful product", "Managed startup operations"],
    icon: (
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <Rocket className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" strokeWidth={2.5} />
        {/* Plasma Thruster Effect */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-cyan-400 blur-[2px] opacity-60 animate-pulse" />
      </motion.div>
    ),
    color: "from-white via-cyan-300 to-blue-600"
  },
]

// Optimized animation variants with reduced motion support
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
    },
  },
}

export default function Experience() {

  return (
    <div className="relative text-gray-100 min-h-screen">
      <Navigation />

      <motion.main
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section - Optimized for mobile */}
        <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-md border border-blue-500/20"
          >
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            <span className="font-space-mono text-sm sm:text-base text-blue-400 font-medium tracking-wider">Professional Journey</span>
          </motion.div>

          <motion.h1
            className="scifi-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 via-teal-400 to-emerald-500 text-glow"
          >
            Experience Timeline
          </motion.h1>

          <motion.p
            className="font-archivo text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            A comprehensive journey through my professional experiences, from entrepreneurship to machine learning engineering,
            showcasing growth, learning, and impact across diverse technology domains.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 cursor-pointer group"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={() => {
                const timelineElement = document.querySelector('[data-timeline]') || document.querySelector('.relative')
                if (timelineElement) {
                  timelineElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-md border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-space-mono">Scroll</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Timeline Component */}
        <div className="relative" data-timeline>
          <Timeline
            data={experiences.map((exp) => ({
              title: exp.date,
              content: (
                <div className="text-gray-300">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} bg-opacity-40 border-2 border-white/20 shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 relative`}>
                        {/* Outer Glow Layer */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${exp.color} blur-lg opacity-40 -z-10`} />
                        <div className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] relative z-10">
                          {exp.icon}
                        </div>
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-slate-900/80 text-white border border-white/10 backdrop-blur-md shadow-lg relative overflow-hidden group/type">
                        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-20 -z-10`} />
                        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r ${exp.color} opacity-50`} />
                        {exp.type}
                      </span>
                    </div>
                    <h2 className={`scifi-heading text-2xl lg:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${exp.color} tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]`}>
                      {exp.title}
                    </h2>
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 tracking-wider">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-700/50 pt-4 mt-4">
                      <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        </div>

        {/* Footer Stats - Mobile-optimized */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 sm:p-6">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
              >
                {experiences.length}
              </motion.div>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Total Experiences</p>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 sm:p-6">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
              >
                10+
              </motion.div>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Companies Worked With</p>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 sm:p-6">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
              >
                3+
              </motion.div>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
