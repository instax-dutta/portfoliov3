"use client"

import React, { memo } from "react"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, idx) => ({ word, id: idx })).map((item) => (
        <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block" }} key={item.id}>
          {item.word}
        </motion.span>
      ))} {/* Static list based on text input, order never changes */}
    </motion.div>
  )
}

export default memo(AnimatedText)

