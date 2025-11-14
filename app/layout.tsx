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
    default: "Sai Dutta Abhishek Dash - Freelance Full Stack Developer & ML Engineer",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "Freelance Full Stack Developer and Machine Learning Engineer. Specialized in Python, React, Next.js, AI/ML, and Cloud technologies. Available for remote projects and consulting.",
  keywords: [
    "Freelance Full Stack Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "Machine Learning Engineer",
    "Python Developer",
    "React Developer",
    "Next.js Developer",
    "AI Engineer",
    "Freelance Web Developer",
    "Remote Developer",
    "Full Stack Engineer",
    "Web Development Services",
    "Custom Web Development",
    "Machine Learning Services",
    "Python Development",
    "React Development",
    "Next.js Development",
    "TypeScript Developer",
    "JavaScript Developer",
    "Cloud Developer",
    "DevOps Engineer",
    "Portfolio",
    "Web Development",
    "Machine Learning",
    "Cloud Computing",
    "Sai Dutta Abhishek Dash",
  ],
  authors: [{ name: "Sai Dutta Abhishek Dash", url: "https://sdad.pro" }],
  creator: "Sai Dutta Abhishek Dash",
  publisher: "Sai Dutta Abhishek Dash",
  metadataBase: new URL("https://sdad.pro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdad.pro",
    siteName: "Sai Dutta Abhishek Dash - Freelance Full Stack Developer",
    title: "Sai Dutta Abhishek Dash - Freelance Full Stack Developer & ML Engineer",
    description: "Freelance Full Stack Developer and Machine Learning Engineer. Specialized in Python, React, Next.js, AI/ML, and Cloud technologies. Available for remote projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash - Freelance Full Stack Developer & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash - Freelance Full Stack Developer & ML Engineer",
    description: "Freelance Full Stack Developer and Machine Learning Engineer. Available for remote projects and consulting.",
    images: ["/og-image.jpg"],
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
  category: "Portfolio",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Dutta Abhishek Dash",
  url: "https://sdad.pro",
  image: "https://sdad.pro/og-image.jpg",
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
    "AI/ML",
    "Cloud Computing",
    "DevOps",
    "Freelance Web Development",
    "Custom Software Development",
  ],
  email: "contact@sdad.pro",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressCountry: "IN",
  },
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      serviceType: "Web Development",
      description: "Freelance Full Stack Development and Machine Learning services",
    },
  },
}

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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