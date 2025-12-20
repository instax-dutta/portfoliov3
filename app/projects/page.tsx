import type { Metadata } from "next"
import ProjectsClient from "./ProjectsClient"

export const metadata: Metadata = {
    title: "Projects | Sai Dutta Abhishek Dash",
    description: "Explore the portfolio of projects by Sai Dutta Abhishek Dash, including AI-powered apps, security scanners, and full-stack solutions.",
    keywords: ["Portfolio Projects", "AI Apps", "Full Stack Projects", "Open Source", "Software Development"],
}

export default function ProjectsPage() {
    return <ProjectsClient />
}
