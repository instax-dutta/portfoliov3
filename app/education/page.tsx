"use client"
import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School } from "lucide-react"
import Navigation from "../components/Navigation"
import StarryBackground from "../components/StarryBackground"
import DisplayCards from "@/components/ui/display-cards"

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
  return (
    <div className="text-gray-100 min-h-screen">
      <StarryBackground />
      <Navigation />
      <motion.main
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h1>
        
        {/* Display Cards for Education */}
        <div className="flex justify-center items-center min-h-[600px] py-12">
          <DisplayCards
            cards={[...education].reverse().map((edu, index) => {
              const icons = [
                <GraduationCap className="size-5 text-blue-300" />,
                <BookOpen className="size-5 text-purple-300" />,
                <School className="size-5 text-cyan-300" />,
              ];
              const colors = [
                { icon: "text-blue-400", title: "text-blue-400" },
                { icon: "text-purple-400", title: "text-purple-400" },
                { icon: "text-cyan-400", title: "text-cyan-400" },
              ];
              
              // Map reversed array index to original icons/colors
              const originalIndex = education.length - 1 - index;
              
              return {
                icon: icons[originalIndex],
                title: edu.degree,
                description: edu.institution,
                date: edu.year,
                iconClassName: colors[originalIndex].icon,
                titleClassName: colors[originalIndex].title,
                className:
                  index === 0
                    ? "[grid-area:stack] hover:-translate-y-12 hover:scale-105 z-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
                    : index === 1
                    ? "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-4 hover:scale-105 z-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
                    : "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-8 hover:scale-105 z-30",
              };
            })}
          />
        </div>
      </motion.main>
    </div>
  )
}
