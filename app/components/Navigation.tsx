"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Code,
  GraduationCap,
  Mail,
  Menu,
  X
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/credentials", label: "Credentials", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Mail },
]

const Navigation: React.FC = () => {
  const [uiState, setUiState] = useState({isScrolled: false, isMobile: false, isMobileMenuOpen: false})
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUiState(prev => ({...prev, isMobileMenuOpen: false}))
  }, [pathname])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setUiState(prev => ({...prev, isMobileMenuOpen: false}))
    }
  }, [])

  useEffect(() => {
    if (uiState.isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [uiState.isMobileMenuOpen, handleClickOutside])

  useEffect(() => {
    const handleScroll = () => {
      setUiState(prev => ({...prev, isScrolled: window.scrollY > 10}))
    }

    const handleResize = () => {
      setUiState(prev => {
        const newIsMobile = window.innerWidth < 768
        return {
          ...prev,
          isMobile: newIsMobile,
          isMobileMenuOpen: newIsMobile ? false : prev.isMobileMenuOpen
        }
      })
    }

    handleResize()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navItems = menuItems.map((item) => ({
    name: item.label,
    url: item.href,
    icon: item.icon,
  }))

  return (
    <>
      {/* Logo at top left */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${uiState.isScrolled ? "bg-color-background/80 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 relative">
            <Link href="/" className="text-color-primary font-bold text-lg sm:text-xl achiko-font z-10">
              SDAD
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
                setUiState(prev => ({...prev, isMobileMenuOpen: !prev.isMobileMenuOpen}))
              }}
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="md:hidden p-2 rounded-lg text-color-text hover:bg-color-primary/20 transition-colors z-[100] relative cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={uiState.isMobileMenuOpen}
              data-testid="mobile-menu-button"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 100 }}
            >
              {uiState.isMobileMenuOpen ? (
                <X className="w-6 h-6 pointer-events-none" />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {uiState.isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
                      onClick={() => setUiState(prev => ({...prev, isMobileMenuOpen: false}))}
            />
            {/* Menu */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-14 sm:top-16 left-0 right-0 z-[60] bg-color-background/95 backdrop-blur-md border-b border-color-primary/30 md:hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
              onClick={() => setUiState(prev => ({...prev, isMobileMenuOpen: false}))}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-color-text hover:bg-color-primary/20 hover:text-color-primary transition-colors",
                        isActive && "bg-color-primary/10 text-color-primary"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Tubelight Navbar - positioned to the right to avoid logo overlap */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>
    </>
  )
}

export default Navigation

