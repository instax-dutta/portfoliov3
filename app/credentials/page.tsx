import type { Metadata } from "next"
import CredentialsClient from "./CredentialsClient"

export const metadata: Metadata = {
    title: "Credentials & Certifications | Sai Dutta Abhishek Dash",
    description: "Verified academic background and professional certifications from AWS, GIET University, and leading tech platforms. Proof of expertise in Cloud Architecture, AI, and Engineering.",
    keywords: ["Verified Credentials", "AWS Certified Cloud Practitioner", "GIET University Alumni", "Computer Science Degree", "Software Engineering Certifications"],
}

export default function CredentialsPage() {
    return <CredentialsClient />
}
