import type { Metadata } from "next"
import dynamic from "next/dynamic"
const HomeClient = dynamic(() => import("./components/HomeClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash | Full Stack Engineer & AI/ML Specialist",
  description: "Official portfolio of Sai Dutta Abhishek Dash. Expert in Security-first Full Stack Development, AI/ML Engineering, and Cloud Architecture. Explore 25+ production-ready projects including Tooner, Ignition, and Binify. Specialized in Python, React, Next.js, and AWS.",
  keywords: [
    "Sai Dutta Abhishek Dash",
    "sdad.pro",
    "Full Stack Engineer Bhubaneswar",
    "AI/ML Engineer India",
    "Security Researcher",
    "Python Developer",
    "React Expert",
    "Next.js Specialist",
    "AWS Certified Developer",
    "Freelance Software Engineer",
    "Hire Full Stack Developer",
    "Bhubaneswar Tech Expert"
  ],
  alternates: {
    canonical: "https://sdad.pro/",
  }
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <HomeClient />
    </>
  )
}
