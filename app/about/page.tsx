import type { Metadata } from "next"
import dynamic from "next/dynamic"
const AboutClient = dynamic(() => import("./AboutClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "About Me | Full Stack Engineer & AI Specialist",
    description: "Discover the journey of Sai Dutta Abhishek Dash, a security-minded Full Stack Developer and ML Engineer. Specializing in Python, React, and building ultra-lightweight production applications.",
    keywords: ["Sai Dutta Abhishek Dash Background", "Full Stack Developer Story", "AI Engineer Bhubaneswar", "Security-first Development Philosophy"],
    alternates: {
        canonical: "/about",
    },
}

const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
        "@type": "Person",
        "@id": "https://sdad.pro/#person",
        "name": "Sai Dutta Abhishek Dash",
        "url": "https://sdad.pro/about",
        "description": "Security-minded Full Stack Developer and Machine Learning Engineer specializing in Python, React, and production applications."
    }
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://sdad.pro/about" },
    ],
}

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <AboutClient />
        </>
    )
}
