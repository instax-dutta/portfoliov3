import type { Metadata } from "next"
import ExperienceClient from "./ExperienceClient"

export const metadata: Metadata = {
  title: "Experience & Professional Journey | Sai Dutta Abhishek Dash",
  description: "Explore the professional history of Sai Dutta Abhishek Dash. From building Aeglyn/VullScanny to full-stack engineering at scale, see the milestones of a dedicated AI & Security engineer.",
  keywords: ["Software Engineering Experience", "AI/ML Work History", "Freelance Full Stack Milestone", "Professional Developer Resume"],
}

export default function ExperiencePage() {
  return <ExperienceClient />
}
