"use client"

"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  duration?: number
  delay?: number
  replay?: boolean
  className?: string
  textClassName?: string
  underlineClassName?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  underlineGradient?: string
  underlineHeight?: string
  underlineOffset?: string
  animateBy?: "letters" | "words"
}

const AnimatedText = React.memo(React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      duration = 0.5,
      delay = 0.1,
      replay = true,
      className,
      textClassName,
      underlineClassName,
      as: Component = "h1",
      underlineGradient = "from-blue-500 via-cyan-500 to-emerald-500",
      underlineHeight = "h-1",
      underlineOffset = "-bottom-2",
      animateBy = "letters",
      ...props
    },
    ref,
  ) => {
    const words = text.split(" ")
    const letters = Array.from(text)
    const items = animateBy === "words" ? words : letters
    const itemCount = animateBy === "words" ? words.length : letters.length

    const container: Variants = {
      hidden: {
        opacity: 0,
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration,
          delayChildren: i * delay,
        },
      }),
    }

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    }

    const lineVariants: Variants = {
      hidden: {
        width: "0%",
        left: "50%",
      },
      visible: {
        width: "100%",
        left: "0%",
        transition: {
          delay: itemCount * delay + (itemCount - 1) * duration,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", className)}
        {...props}
      >
        <div className="relative">
          <motion.div
            style={{ display: "flex", justifyContent: "center", overflow: "visible" }}
            variants={container}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className={cn("text-4xl font-bold text-center flex-wrap md:flex-nowrap mb-2", textClassName)}
          >
            {animateBy === "words" ? (
              words.map((word, idx) => ({ word, id: idx })).map((item) => (
                <motion.span key={item.id} variants={child} className="inline-block">
                  {item.word}
                  {item.id < words.length - 1 && "\u00A0"}
                </motion.span>
              ))
            ) : (
              letters.map((letter, idx) => ({ letter, id: idx })).map((item) => (
                <motion.span key={item.id} variants={child}>
                  {item.letter === " " ? "\u00A0" : item.letter}
                </motion.span>
              ))
            )} {/* Static list based on text input, order never changes */}
          </motion.div>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "absolute",
              underlineHeight,
              underlineOffset,
              "bg-gradient-to-r",
              underlineGradient,
              underlineClassName,
            )}
          />
        </div>
      </div>
    )
  },
))

AnimatedText.displayName = "AnimatedText"

export { AnimatedText }

