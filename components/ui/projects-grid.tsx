"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectsGridProps {
  children: React.ReactNode
  className?: string
}

// Stagger animation variants for grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export function ProjectsGrid({ children, className }: ProjectsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for the grid
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  // Convert children to array
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className={cn("relative", className)}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {childrenArray.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full"
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

// Alternative: Masonry-style grid with varying heights
export function ProjectsMasonryGrid({ children, className }: ProjectsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3)
      } else if (window.innerWidth >= 768) {
        setColumns(2)
      } else {
        setColumns(1)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const childrenArray = React.Children.toArray(children)

  // Distribute items across columns for masonry effect
  const columnItems: React.ReactNode[][] = Array.from({ length: columns }, () => [])
  childrenArray.forEach((child, index) => {
    columnItems[index % columns].push(child)
  })

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("relative", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {columnItems.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            {column.map((child, itemIndex) => (
              <motion.div
                key={itemIndex}
                variants={itemVariants}
                className="w-full"
              >
                {child}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Animated grid with hover effects and glow
export function ProjectsAnimatedGrid({ children, className, ...props }: ProjectsGridProps & HTMLMotionProps<"section">) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  const childrenArray = React.Children.toArray(children)

  return (
    <motion.section
      ref={containerRef}
      style={{ scale }}
      className={cn("relative", className)}
      {...props}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        initial={{
          background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {childrenArray.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="w-full h-full flex"
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

