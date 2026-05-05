import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Hire Me & Collaboration | Sai Dutta Abhishek Dash",
    description: "Ready to scale your next project? Contact Sai Dutta Abhishek Dash for freelance full-stack development, AI/ML consulting, or security auditing. Based in Bhubaneswar, serving worldwide.",
    keywords: ["Hire Full Stack Developer", "AI Consultant", "Freelance Software Engineer Bhubaneswar", "Secure Web Development Services"],
    alternates: {
        canonical: "/contact",
    },
}

const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sai Dutta Abhishek Dash",
    description: "Contact page for freelance development and AI/ML consulting services.",
    url: "https://sdad.pro/contact",
    mainEntity: { "@id": "https://sdad.pro/#person" }
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://sdad.pro/contact" },
    ],
}

export default function ContactPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <ContactClient />
        </>
    )
}
