import type { Metadata } from "next"
import SkillsClient from "./SkillsClient"

export const metadata: Metadata = {
    title: "Tech Stack & Skills | Sai Dutta Abhishek Dash",
    description: "Comprehensive list of technical skills and tools mastered by Sai Dutta Abhishek Dash, from React and Next.js to Python and AWS.",
    keywords: ["Technical Skills", "Tech Stack", "Programming Languages", "Developer Tools", "AI/ML Tools"],
}

export default function SkillsPage() {
    return <SkillsClient />
}
