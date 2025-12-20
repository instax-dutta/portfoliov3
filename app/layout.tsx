import type React from "react"
import "./globals.css"
import { Orbitron, Space_Mono, Archivo, Inconsolata } from "next/font/google"
import StarryBackground from "./components/StarryBackground"
import CustomCursor from "./components/CustomCursor"
import LenisProvider from "./components/LenisProvider"
import type { Metadata } from "next"

// Primary heading font - futuristic display
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
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
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

// Monospace font for code/tech elements
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false, // Not critical, load later
})

export const metadata: Metadata = {
  title: {
    default: "Sai Dutta Abhishek Dash - Full Stack Developer | AI/ML Engineer | Security Expert",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "Expert Full Stack Developer & AI/ML Engineer specializing in Python, React, Next.js, Security Engineering, DevOps, and Cloud Architecture. Built 20+ production apps including AI-powered tools, zero-knowledge encryption systems, and enterprise security solutions. AWS Certified Cloud Practitioner available for innovative projects.",
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
    description: "Expert Full Stack Developer & AI/ML Engineer with 20+ production applications. Specializing in AI-powered tools, zero-knowledge encryption, security solutions, and cloud architecture. Python • React • Next.js • AWS • TensorFlow",
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
    description: "Expert in Full Stack Development, AI/ML, Security Engineering & Cloud Architecture. Built 20+ production apps. Python • React • Next.js • AWS • TensorFlow",
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
  "@type": ["Person", "ProfessionalService"],
  name: "Sai Dutta Abhishek Dash",
  url: "https://sdad.pro",
  image: "https://sdad.pro/og-image.png",
  sameAs: [
    "https://github.com/instax-dutta",
    "https://www.linkedin.com/in/sdabhishekdash/",
    "https://twitter.com/abhishekdash69",
  ],
  jobTitle: "Freelance Full Stack Developer & Machine Learning Engineer",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "GIET University Gunupur",
  },
  knowsAbout: [
    "Python",
    "Machine Learning",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "AI/ML",
    "Cloud Computing",
    "DevOps",
    "Freelance Web Development",
    "Custom Software Development",
    "Database Design",
    "API Development",
    "E-commerce Development",
  ],
  email: "contact@sdad.pro",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://sdad.pro/contact",
    serviceType: "Online",
  },
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Web Development",
        name: "Full Stack Web Development",
        description: "Custom full-stack web application development using React, Next.js, Node.js, and modern technologies. Building scalable, responsive, and high-performance web solutions.",
        provider: {
          "@type": "Person",
          name: "Sai Dutta Abhishek Dash",
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sdad.pro/contact",
        },
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Machine Learning",
        name: "Machine Learning & AI Services",
        description: "Machine learning model development, AI integration, data analysis, and predictive analytics services using Python, TensorFlow, and modern ML frameworks.",
        provider: {
          "@type": "Person",
          name: "Sai Dutta Abhishek Dash",
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sdad.pro/contact",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Software Development",
        name: "Custom Software Development",
        description: "End-to-end custom software development services including frontend, backend, database design, API development, and deployment.",
        provider: {
          "@type": "Person",
          name: "Sai Dutta Abhishek Dash",
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://sdad.pro/contact",
        },
      },
    },
  ],
}

import DOMPurify from "isomorphic-dompurify"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceMono.variable} ${archivo.variable} ${inconsolata.variable} font-archivo bg-color-background text-color-text min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(structuredData)) }}
        />
        <StarryBackground />
        <CustomCursor />
        <LenisProvider>
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  )
}