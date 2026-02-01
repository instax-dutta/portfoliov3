import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
    title: "About Me | Full Stack Engineer & AI Specialist",
    description: "Discover the journey of Sai Dutta Abhishek Dash, a security-minded Full Stack Developer and ML Engineer. Specializing in Python, React, and building ultra-lightweight production applications.",
    keywords: ["Sai Dutta Abhishek Dash Background", "Full Stack Developer Story", "AI Engineer Bhubaneswar", "Security-first Development Philosophy"],
}

export default function AboutPage() {
    return <AboutClient />
}
