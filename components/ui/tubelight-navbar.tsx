"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  external?: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(
    items.find((item) => item.url === pathname)?.name || items[0].name
  )
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = items.find((item) => {
      if (item.external) return false
      if (item.url === "/") return pathname === "/"
      return pathname.startsWith(item.url)
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-50 pt-3 sm:pt-4 pr-2 sm:pr-4 md:pr-6 lg:pr-8",
        className,
      )}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-color-background/80 backdrop-blur-lg py-0.5 sm:py-1 px-0.5 sm:px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          const linkContent = (
            <>
              <span className="hidden md:inline text-xs lg:text-sm">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-color-primary/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-color-primary rounded-t-full shadow-lg shadow-color-primary/50">
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-color-primary/40 rounded-full blur-md -top-1.5 sm:-top-2 -left-1.5 sm:-left-2" />
                    <div className="absolute w-6 sm:w-8 h-4 sm:h-6 bg-color-primary/40 rounded-full blur-md -top-0.5 sm:-top-1" />
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-color-primary/40 rounded-full blur-sm top-0 left-1.5 sm:left-2" />
                  </div>
                </motion.div>
              )}
            </>
          )

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-semibold px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-colors",
                  "text-color-text/80 hover:text-color-primary",
                  isActive && "bg-color-primary/20 text-color-primary",
                )}
              >
                {linkContent}
              </a>
            )
          }

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-colors",
                "text-color-text/80 hover:text-color-primary",
                isActive && "bg-color-primary/20 text-color-primary",
              )}
            >
              {linkContent}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

