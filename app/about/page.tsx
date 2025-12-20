import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
    title: "About Me | Sai Dutta Abhishek Dash",
    description: "Learn more about Sai Dutta Abhishek Dash - a Full Stack Developer and AI/ML Engineer dedicated to building innovative and scalable solutions.",
    keywords: ["About Sai Dutta", "Full Stack Developer", "AI Engineer", "Software Engineering Portfolio"],
}

export default function AboutPage() {
    return <AboutClient />
}
