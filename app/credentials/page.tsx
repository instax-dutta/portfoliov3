import type { Metadata } from "next"
import CredentialsClient from "./CredentialsClient"

export const metadata: Metadata = {
    title: "Credentials | Sai Dutta Abhishek Dash",
    description: "Academic foundation and professional certifications of Sai Dutta Abhishek Dash, featuring expertise in AI/ML, Cloud, and Software Engineering.",
    keywords: ["Education", "Certifications", "AWS Certified", "Computer Science", "GIET University", "Credentials"],
}

export default function CredentialsPage() {
    return <CredentialsClient />
}
