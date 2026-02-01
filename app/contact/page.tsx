import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
    title: "Hire Me & Collaboration | Sai Dutta Abhishek Dash",
    description: "Ready to scale your next project? Contact Sai Dutta Abhishek Dash for freelance full-stack development, AI/ML consulting, or security auditing. Based in Bhubaneswar, serving worldwide.",
    keywords: ["Hire Full Stack Developer", "AI Consultant", "Freelance Software Engineer Bhubaneswar", "Secure Web Development Services"],
}

export default function ContactPage() {
    return <ContactClient />
}
