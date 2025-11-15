"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  Code, 
  GraduationCap, 
  Award, 
  Mail, 
  BookOpen 
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "https://blog.sdad.pro", label: "Blog", icon: BookOpen, external: true },
]

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = menuItems.map((item) => ({
    name: item.label,
    url: item.href,
    icon: item.icon,
    external: item.external,
  }))

  return (
    <>
      {/* Logo at top left */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-color-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="text-color-primary font-bold text-xl achiko-font">
              SDAD
            </Link>
          </div>
        </div>
      </nav>

      {/* Tubelight Navbar - positioned to the right to avoid logo overlap */}
      <NavBar items={navItems} />
    </>
  )
}

export default Navigation

