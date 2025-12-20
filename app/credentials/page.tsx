"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School, Award, CheckCircle, Calendar, MapPin } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"

const education = [
    {
        degree: "Bachelor's degree, Computer Science",
        institution: "GIET University Gunupur",
        year: "2025",
        icon: GraduationCap,
        description: "Specialized in Computer Science with focus on AI/ML and Software Engineering",
        location: "Gunupur, Odisha, India",
    },
    {
        degree: "Intermediate",
        institution: "Delhi Public School (DPS)",
        year: "2021",
        icon: BookOpen,
        description: "Science stream with Mathematics and Computer Science",
        location: "Dhenkanal, Odisha, India",
    },
    {
        degree: "High School",
        institution: "Maharshi Vidya Mandir",
        year: "2019",
        icon: School,
        description: "Foundation in Science and Mathematics",
        location: "Rayagada, Odisha, India",
    },
]

const certifications = [
    {
        title: "AWS Bedrock Workshop (Build a Gen AI Chatbot) - Level 100!",
        issuer: "Udemy",
        year: "2024",
        category: "AI/ML",
    },
    {
        title: "Amazon Bedrock Getting Started",
        issuer: "Amazon Web Services (AWS)",
        year: "2024",
        category: "Cloud",
    },
    {
        title: "Amazon Q Developer",
        issuer: "Amazon Web Services (AWS)",
        year: "2024",
        category: "Cloud",
    },
    {
        title: "Amazon Web Services Cloud Practitioner",
        issuer: "Udemy",
        year: "2024",
        category: "Cloud",
    },
    {
        title: "Learn to Code in Python 3: Programming beginner to advanced",
        issuer: "Udemy",
        year: "2024",
        category: "Programming",
    },
    {
        title: "Planning a Machine Learning Project",
        issuer: "Amazon Web Services (AWS)",
        year: "2024",
        category: "AI/ML",
    },
    {
        title: "Python For Data Science and Machine Learning",
        issuer: "Udemy",
        year: "2024",
        category: "AI/ML",
    },
    {
        title: "Project Management",
        issuer: "Career Ninja | LearnTube",
        year: "2024",
        category: "Management",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as any,
        },
    },
}

export default function Credentials() {
    return (
        <div className="relative text-gray-100 min-h-screen overflow-hidden">
            <StarryBackground />
            <Navigation />
            <motion.main
                className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                } as any}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut" as any
                    }}
                    className="text-center mb-16 relative gpu-accelerated"
                >
                    <h1 className="achiko-font text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400">
                        Credentials
                    </h1>
                    <p className="text-lg text-color-text-muted max-w-2xl mx-auto">
                        Academic foundation and continuous professional development
                    </p>
                </motion.div>

                {/* Education Section */}
                <motion.div className="mb-24" variants={itemVariants}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {education.map((edu, index) => {
                            const Icon = edu.icon
                            const colors = [
                                "from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500/60",
                                "from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/60",
                                "from-cyan-500/10 to-teal-500/10 border-cyan-500/30 hover:border-cyan-500/60",
                            ]
                            const iconColors = ["bg-blue-500/20 border-blue-500/40", "bg-purple-500/20 border-purple-500/40", "bg-cyan-500/20 border-cyan-500/40"]
                            const iconTextColors = ["text-blue-400", "text-purple-400", "text-cyan-400"]

                            return (
                                <motion.div
                                    key={index}
                                    className="group"
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`h-full bg-gradient-to-br ${colors[index]} backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}>
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-xl ${iconColors[index]} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-8 h-8 ${iconTextColors[index]}`} />
                                        </div>

                                        {/* Year Badge */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <Calendar className="w-4 h-4 text-color-text-muted" />
                                            <span className="text-sm font-medium text-cyan-400">{edu.year}</span>
                                        </div>

                                        {/* Degree */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                            {edu.degree}
                                        </h3>

                                        {/* Institution */}
                                        <div className="flex items-start gap-2 mb-3">
                                            <MapPin className="w-4 h-4 text-color-text-muted flex-shrink-0 mt-1" />
                                            <p className="text-sm font-medium text-purple-300">{edu.institution}</p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-color-text-muted leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {/* Bottom accent */}
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <span className="text-xs text-color-text-muted">{edu.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Professional Certifications</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => {
                            const categoryColors = {
                                "AI/ML": {
                                    gradient: "from-purple-500/10 to-pink-500/10",
                                    border: "border-purple-500/30 hover:border-purple-500/60",
                                    badge: "bg-purple-500/20 text-purple-300",
                                    icon: "text-purple-400"
                                },
                                "Cloud": {
                                    gradient: "from-blue-500/10 to-cyan-500/10",
                                    border: "border-blue-500/30 hover:border-blue-500/60",
                                    badge: "bg-blue-500/20 text-blue-300",
                                    icon: "text-blue-400"
                                },
                                "Programming": {
                                    gradient: "from-green-500/10 to-emerald-500/10",
                                    border: "border-green-500/30 hover:border-green-500/60",
                                    badge: "bg-green-500/20 text-green-300",
                                    icon: "text-green-400"
                                },
                                "Management": {
                                    gradient: "from-orange-500/10 to-yellow-500/10",
                                    border: "border-orange-500/30 hover:border-orange-500/60",
                                    badge: "bg-orange-500/20 text-orange-300",
                                    icon: "text-orange-400"
                                },
                            }
                            const colors = categoryColors[cert.category as keyof typeof categoryColors] || categoryColors["Cloud"]

                            return (
                                <motion.div
                                    key={index}
                                    className="group"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`h-full bg-gradient-to-br ${colors.gradient} backdrop-blur-md border ${colors.border} rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10`}>
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <CheckCircle className={`w-5 h-5 ${colors.icon}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-3 group-hover:text-cyan-300 transition-colors leading-tight">
                                                    {cert.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="text-xs text-color-text-muted mb-3">{cert.issuer}</p>

                                        <div className="flex items-center justify-between gap-2">
                                            <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${colors.badge}`}>
                                                {cert.category}
                                            </span>
                                            <span className="text-xs text-color-text-muted font-medium">
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={containerVariants}
                >
                    {[
                        { label: "Degree", value: "1", icon: GraduationCap, color: "from-blue-500 to-cyan-500" },
                        { label: "Institutions", value: "3", icon: School, color: "from-purple-500 to-pink-500" },
                        { label: "Certifications", value: "8", icon: Award, color: "from-cyan-500 to-teal-500" },
                        { label: "Latest", value: "2025", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
                    ].map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-gradient-to-br from-color-background/60 to-color-background/30 backdrop-blur-md border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 border border-white/10 mx-auto mb-3 flex items-center justify-center`}>
                                    <Icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-color-text-muted">{stat.label}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.main>
        </div>
    )
}
