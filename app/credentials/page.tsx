import type { Metadata } from "next"
import dynamic from "next/dynamic"
const CredentialsClient = dynamic(() => import("./CredentialsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Credentials & Certifications | Sai Dutta Abhishek Dash",
    description: "Verified academic background and professional certifications from AWS, GIET University, and leading tech platforms. Proof of expertise in Cloud Architecture, AI, and Engineering.",
    keywords: ["Verified Credentials", "AWS Certified Cloud Practitioner", "GIET University Alumni", "Computer Science Degree", "Software Engineering Certifications"],
    alternates: {
        canonical: "/credentials",
    },
}

const credentialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Credentials of Sai Dutta Abhishek Dash",
    "credentialCategory": "Certification",
    "author": { "@id": "https://sdad.pro/#person" },
    "about": [
        { "@type": "EducationalOccupationalCredential", name: "AWS Certified Cloud Practitioner" },
        { "@type": "EducationalOccupationalCredential", name: "Bachelor's Degree in Computer Science" },
    ]
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Credentials", item: "https://sdad.pro/credentials" },
    ],
}

export default function CredentialsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <CredentialsClient />
        </>
    )
}
