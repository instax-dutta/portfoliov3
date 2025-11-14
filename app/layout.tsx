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
  weight: ["400", "500", "600", "700", "800", "900"]
})

// Accent heading font - tech/terminal feel
const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"]
})

// Body text font - clean and readable
const archivo = Archivo({ 
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"]
})

// Monospace font for code/tech elements
const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash - Portfolio",
  description: "Computer Science Student and Machine Learning Enthusiast",
  keywords: ["portfolio", "web development", "machine learning", "computer science"],
  authors: [{ name: "Sai Dutta Abhishek Dash" }],
  metadataBase: new URL("https://sdad.pro"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdad.pro",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceMono.variable} ${archivo.variable} ${inconsolata.variable} font-archivo bg-color-background text-color-text min-h-screen`}>
        <StarryBackground />
        <CustomCursor />
        <LenisProvider>
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  )
}