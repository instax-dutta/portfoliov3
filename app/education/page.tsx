"use client"
import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import ChromaGrid from "@/components/ui/chroma-grid"

// Education ordered from most recent to oldest
const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "GIET University Gunupur",
    year: "2025",
  },
  {
    degree: "Intermediate",
    institution: "Delhi Public School (DPS)",
    year: "February 2021",
  },
  {
    degree: "High School",
    institution: "Maharshi Vidya Mandir",
    year: "March 2019",
  },
]

export default function Education() {
  const educationItems = education.map((edu, index) => {
    const colors = [
      { border: "#3B82F6", gradient: "linear-gradient(145deg, #3B82F6, #000)" }, // Blue
      { border: "#A855F7", gradient: "linear-gradient(145deg, #A855F7, #000)" }, // Purple
      { border: "#06B6D4", gradient: "linear-gradient(145deg, #06B6D4, #000)" }, // Cyan
    ];
    const icons = [
      <GraduationCap className="w-24 h-24 text-white/90" />,
      <BookOpen className="w-24 h-24 text-white/90" />,
      <School className="w-24 h-24 text-white/90" />,
    ];
    const color = colors[index % colors.length];
    const icon = icons[index % icons.length];

    return {
      title: edu.degree,
      subtitle: edu.institution,
      handle: edu.year,
      icon: icon,
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
          Education
        </motion.h1>

        <div className="w-full h-[600px] relative">
          <ChromaGrid
            items={educationItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={3}
          />
        </div>
      </motion.main>
    </div>
  )
}
