import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience - Freelance Full Stack Developer | Professional Journey",
  description: "Explore my professional experience as a Freelance Full Stack Developer, including work at Tech Mahindra, multiple ML engineering internships, and entrepreneurship. Currently available for freelance projects and consulting. View my complete work history, skills, and achievements.",
  keywords: [
    "Freelance Full Stack Developer Experience",
    "Full Stack Developer Portfolio",
    "Professional Experience",
    "Work History",
    "Freelance Developer Experience",
    "Tech Mahindra Experience",
    "Machine Learning Engineer Experience",
    "Python Developer Experience",
    "React Developer Experience",
    "Software Development Experience",
    "Freelance Services",
    "Available for Hire",
    "Remote Developer Experience",
  ],
  openGraph: {
    title: "Experience - Freelance Full Stack Developer | Professional Journey",
    description: "Explore my professional experience as a Freelance Full Stack Developer. Currently available for freelance projects and consulting.",
    url: "https://sdad.pro/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience - Freelance Full Stack Developer | Professional Journey",
    description: "Explore my professional experience as a Freelance Full Stack Developer. Currently available for freelance projects.",
  },
  alternates: {
    canonical: "/experience",
  },
}

const experienceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sai Dutta Abhishek Dash",
    jobTitle: "Freelance Full Stack Developer & Machine Learning Engineer",
    url: "https://sdad.pro/experience",
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Machine Learning",
      "Web Development",
      "Software Development",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Freelance Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Remote",
        },
        datePosted: "2025-09-01",
        validThrough: "2026-12-31",
      },
    ],
  },
}

import DOMPurify from "isomorphic-dompurify"

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(experienceStructuredData)) }}
      />
      {children}
    </>
  )
}

