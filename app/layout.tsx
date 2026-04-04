import type React from "react"
import { Suspense } from "react"
import "./globals.css"
import { Orbitron, Space_Mono, Archivo, Inconsolata, Audiowide } from "next/font/google"
import StarryBackground from "./components/StarryBackground"
import CustomCursor from "./components/CustomCursor"
import LenisProvider from "./components/LenisProvider"

import type { Metadata } from "next"

// Sci-fi heading font - atmospheric and premium
const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  weight: "400",
  display: "swap",
})

// Primary heading font - futuristic display
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"], // Reduced from 6 weights to 3
  display: "swap",
  preload: true,
})

// Accent heading font - tech/terminal feel
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
})

// Body text font - clean and readable
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "600", "700"], // Reduced from 5 weights to 3
  display: "swap",
  preload: true,
})

// Monospace font for code/tech elements
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["400", "700"], // Reduced from 8 weights to 2
  display: "swap",
  preload: false, // Not critical, load later
})

export const metadata: Metadata = {
  title: {
    default: "Sai Dutta Abhishek Dash - Full Stack Developer | AI/ML Engineer | Security Expert",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "Expert Full Stack Developer & AI/ML Engineer specializing in Security Engineering, Cloud Architecture, and Production Applications. Built 20+ apps including Binify (zero-knowledge encryption), GenieLabs (AI dev platform), Sensory (cloud storage), and PacketBuddy (network monitoring). Expertise in Python, React, Next.js, TypeScript, AWS, TensorFlow. AWS Certified Cloud Practitioner available for innovative projects.",
  keywords: [
    // Core Roles
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Security Engineer",
    "DevOps Engineer",
    "Cloud Architect",
    "Python Developer",
    "React Developer",
    "Next.js Developer",

    // Specialized Skills
    "NLP Engineer",
    "Cybersecurity Specialist",
    "Data Engineer",
    "Systems Automation Specialist",
    "Cryptography Expert",
    "Zero-Knowledge Encryption",

    // Technologies - Frontend
    "React 19",
    "Next.js 15",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn/ui",

    // Technologies - Backend
    "Node.js",
    "Python 3.11",
    "Flask",
    "FastAPI",
    "REST API",
    "GraphQL",

    // AI/ML Technologies
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Hugging Face",
    "OpenAI",
    "Prompt Engineering",
    "NLP",
    "Sentiment Analysis",
    "Machine Learning Models",

    // Cloud & DevOps
    "AWS",
    "AWS Certified",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Cloud Architecture",

    // Security
    "Security Vulnerability Scanner",
    "Penetration Testing",
    "Cryptography",
    "Web Security",
    "Application Security",
    "DDoS Protection",
    "Firewall Configuration",

    // Databases
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Turso",
    "Upstash",
    "SQLite",

    // Freelance Terms
    "Freelance Developer",
    "Remote Developer",
    "Hire Full Stack Developer",
    "Contract Developer",
    "Web Development Services",
    "AI Development Services",
    "Security Consulting",

    // Project Types
    "AI-Powered Applications",
    "Security Solutions",
    "Enterprise Web Apps",
    "SaaS Development",
    "API Development",
    "Cloud Migration",
    "Performance Optimization",

    // Location & Availability
    "Remote Work",
    "Available for Hire",
    "Bhubaneswar Developer",
    "India Developer",
    "Global Projects",

    "Credentials",
    "Education",
    "Certifications",
    "Academic Background",
    "Professional Certifications",
    "Sai Dutta Abhishek Dash",
    "SDAD",
  ],
  authors: [{ name: "Sai Dutta Abhishek Dash", url: "https://sdad.pro" }],
  creator: "Sai Dutta Abhishek Dash",
  publisher: "Sai Dutta Abhishek Dash",
  metadataBase: new URL("https://sdad.pro"),
  alternates: {
    canonical: "https://sdad.pro/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdad.pro",
    siteName: "Sai Dutta Abhishek Dash - Developer Portfolio",
    title: "Sai Dutta Abhishek Dash - Full Stack Developer | AI Engineer | Security Expert",
    description: "Security-focused Full Stack Developer & AI/ML Engineer with 20+ production applications. Built Binify (zero-knowledge encryption), GenieLabs (AI platform), Sensory (cloud storage), PacketBuddy (network monitoring). Python • React • Next.js • AWS • TensorFlow • TypeScript",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash - Full Stack Developer, AI Engineer, Security Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash - Full Stack Developer | AI Engineer | Security Expert",
    description: "Security-focused Full Stack Developer & AI/ML Engineer. Built 20+ apps: Binify (encryption), GenieLabs (AI), Sensory (cloud), PacketBuddy (monitoring). Python • React • Next.js • AWS • TensorFlow",
    images: ["/og-image.png"],
    creator: "@abhishekdash69",
    site: "@abhishekdash69",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  other: {
    "theme-color": "#0a0f1f",
    "format-detection": "telephone=no",
    "og:logo": "https://sdad.pro/favicon.svg",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "url": "https://sdad.pro",
      "image": "https://sdad.pro/og-image.png",
      "description": "Security-focused Full Stack Developer & AI/ML Engineer. Specialist in Python, Next.js, and AWS Cloud Architecture.",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69"
      ],
      "jobTitle": "Full Stack Engineer & AI Specialist",
      "knowsAbout": [
        "Full Stack Web Development",
        "Machine Learning",
        "AI Agent Development",
        "Security Engineering",
        "Cloud Architecture (AWS)",
        "Zero-Knowledge Encryption",
        "NLP & Sentiment Analysis",
        "Automation Systems"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sdad.pro/#website",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash Portfolio",
      "publisher": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "ProfessionalService",
      "name": "Sai Dutta Abhishek Dash - Development Services",
      "image": "https://sdad.pro/og-image.png",
      "url": "https://sdad.pro",
      "telephone": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "areaServed": "Worldwide",
      "serviceType": [
        "SaaS Development",
        "AI/ML Implementation",
        "Security Auditing",
        "Custom Web Applications"
      ]
    }
  ]
}

import DOMPurify from "isomorphic-dompurify"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceMono.variable} ${archivo.variable} ${inconsolata.variable} ${audiowide.variable} font-archivo text-color-text min-h-screen relative overflow-x-hidden`}>
        <script
          type="application/ld+json"
        >
          {DOMPurify.sanitize(JSON.stringify(structuredData))}
        </script>

        {/* Layer 1: Base Background Color (Lowest) */}
        <div className="fixed inset-0 bg-[#0a0f1f] -z-[100]" />

        {/* Layer 2: Starry Background (Component now handles own positioning) */}
        <StarryBackground />

        {/* Layer 3: Custom Cursor (Fixed top) */}
        <CustomCursor />

        {/* Layer 4: Content (Above all backgrounds) */}
        <Suspense fallback={null}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </Suspense>
      </body>
    </html>
  )
}