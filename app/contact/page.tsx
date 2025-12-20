import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
    title: "Contact | Sai Dutta Abhishek Dash",
    description: "Get in touch with Sai Dutta Abhishek Dash for collaboration, freelance opportunities, or technical inquiries.",
    keywords: ["Contact Developer", "Hire Developer", "Collaboration", "Freelance Inquiry"],
}

export default function ContactPage() {
    return <ContactClient />
}
