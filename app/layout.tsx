import './globals.css'
import { Inter } from 'next/font/google'
import StarryBackground from './components/StarryBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sai Dutta Abhishek Dash - Portfolio',
  description: 'Computer Science Student | Machine Learning Engineer | Backend Developer | Cloud & DevOps Enthusiast | Building intelligent and scalable solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen relative`}>
        <StarryBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

