import type { Metadata } from "next"
import ExperienceClient from "./ExperienceClient"

export const metadata: Metadata = {
  title: "Experience | Sai Dutta Abhishek Dash",
  description: "Professional journey and work experience of Sai Dutta Abhishek Dash, from freelance development to full-stack engineering projects.",
  keywords: ["Work Experience", "Freelance Developer", "Professional Journey", "Software Developer Resume"],
}

export default function ExperiencePage() {
  return <ExperienceClient />
}
