import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Portfolio: AI, Security & Full Stack Projects",
    description: "Explore Sai Dutta Abhishek Dash's production-ready projects: RedisKeeper (Redis Activity Guard), Tooner (Doc Tokenization), Ignition (Reddit to LLM), RPi Persona (Server Health), and 25+ more. Expertise in React, Next.js, Python, ML, and Security Architecture.",
    keywords: [
        "Sai Dutta Abhishek Dash Projects",
        "RedisKeeper",
        "Redis Activity Guard",
        "AI Portfolio",
        "Security Engineering Showcase",
        "Python Full Stack Apps",
        "Tooner AI",
        "Ignition Reddit Mirror",
        "Open Source Security Tools",
        "Next.js Production Examples"
    ],
}

export default function ProjectsPage() {
    return <ProjectsClient />
}
