import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import StarryBackground from "./components/StarryBackground"
import CustomCursor from "./components/CustomCursor"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash - Portfolio",
  description: "Computer Science Student and Machine Learning Enthusiast",
  keywords: ["portfolio", "web development", "machine learning", "computer science"],
  authors: [{ name: "Sai Dutta Abhishek Dash" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
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
      <body className={`${inter.className} bg-color-background text-color-text min-h-screen`}>
        <StarryBackground />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}



import './globals.css'