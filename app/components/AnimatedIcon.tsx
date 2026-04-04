"use client"

import React, { memo } from "react"

import { m } from "framer-motion"

interface AnimatedIconProps {
  icon: React.ReactNode
  delay?: number
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, delay = 0 }) => {
  return (
    <m.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
    >
      {icon}
    </motion.div>
  )
}

export default memo(AnimatedIcon)

