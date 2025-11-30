"use client"
import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import ChromaGrid from "@/components/ui/chroma-grid"

const certifications = [
  {
    title: "AWS Bedrock Workshop (Build a Gen AI Chatbot) - Level 100!",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Amazon Bedrock Getting Started",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
  },
  {
    title: "Amazon Q Developer",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
  },
  {
    title: "Amazon Web Services Cloud Practitioner",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Learn to Code in Python 3: Programming beginner to advanced",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Planning a Machine Learning Project",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
  },
  {
    title: "Python For Data Science and Machine Learning",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Project Management",
    issuer: "Career Ninja | LearnTube",
    year: "2024",
  },
]

export default function Certifications() {
  const certificationItems = certifications.map((cert, index) => {
    const colors = [
      { border: "#3B82F6", gradient: "linear-gradient(145deg, #3B82F6, #000)" },
      { border: "#A855F7", gradient: "linear-gradient(145deg, #A855F7, #000)" },
      { border: "#06B6D4", gradient: "linear-gradient(145deg, #06B6D4, #000)" },
      { border: "#F59E0B", gradient: "linear-gradient(145deg, #F59E0B, #000)" },
    ];
    const color = colors[index % colors.length];

    return {
      title: cert.title,
      subtitle: cert.issuer,
      handle: cert.year,
      icon: <Award className="w-20 h-20 text-white/90" />,
      borderColor: color.border,
      gradient: color.gradient,
    };
  });

  return (
    <div className="relative text-gray-100 min-h-screen overflow-hidden">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="achiko-font text-4xl sm:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 via-purple-400 to-pink-400"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h1>

        <div className="w-full h-[800px] relative">
          <ChromaGrid
            items={certificationItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={3}
            rows={3}
          />
        </div>
      </motion.main>
    </div>
  )
}
