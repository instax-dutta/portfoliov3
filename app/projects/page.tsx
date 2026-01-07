import type { Metadata } from "next"
import ProjectsClient from "./ProjectsClient"

export const metadata: Metadata = {
    title: "Projects | Sai Dutta Abhishek Dash",
    description: "Explore production-ready projects by Sai Dutta Abhishek Dash: Zero-knowledge encryption systems, AI-powered platforms, cloud storage solutions, and network monitoring tools. Showcasing expertise in security engineering, AI/ML, full stack development, and cloud architecture.",
    keywords: [
        "Portfolio Projects",
        "Full Stack Projects",
        "AI/ML Projects",
        "Security Engineering Projects",
        "Zero-Knowledge Encryption",
        "AI-Powered Applications",
        "Cloud Storage Solutions",
        "Network Monitoring Tools",
        "Next.js Applications",
        "React Projects",
        "Python Projects",
        "Open Source Projects",
        "Production Apps",
        "Enterprise Security Solutions",
        "Machine Learning Applications",
        "DevOps Projects",
        "Cloud Architecture",
        "TypeScript Projects",
        "Software Development Portfolio"
    ],
}

export default function ProjectsPage() {
    return <ProjectsClient />
}
