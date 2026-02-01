import type { Metadata } from "next"
import SkillsClient from "./SkillsClient"

export const metadata: Metadata = {
    title: "Tech Stack & Specialized Skills | Sai Dutta Abhishek Dash",
    description: "Deep dive into the technical expertise of Sai Dutta Abhishek Dash. Mastering Python, Next.js 15, React 19, AWS (Certified), TensorFlow, and high-performance security auditing tools.",
    keywords: ["Tech Stack 2024", "Modern Web Development Skills", "AI/ML Engineering Tools", "Cybersecurity Expertise", "AWS Certified Practitioner"],
}

export default function SkillsPage() {
    return <SkillsClient />
}
