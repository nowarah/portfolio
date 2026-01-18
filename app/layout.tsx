import type { Metadata } from 'next'
import './globals.css'
import { personalInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.shortBio,
  keywords: ['Full Stack Developer', 'Web Developer', 'Vue.js', '.NET Core', 'React', 'Frontend Developer'],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.shortBio,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Noise overlay */}
        <div className="noise" />
        
        {/* Floating background shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-accent opacity-30 blur-[80px] -top-[200px] -right-[200px] animate-float"
          />
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-accent-blue opacity-30 blur-[80px] bottom-[10%] -left-[100px] animate-float-slow"
          />
          <div 
            className="absolute w-[300px] h-[300px] rounded-full bg-accent-pink opacity-30 blur-[80px] top-[50%] right-[10%] animate-float-slower"
          />
        </div>

        {children}
      </body>
    </html>
  )
}
