import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Content Repurposer PRO - Orange-Purple Premium Edition',
  description: 'Premium AI content transformation with animated orange-purple theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white overflow-x-hidden`}>
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 orange-purple-gradient opacity-20"></div>
          
          {/* Animated orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#f97316' : '#a855f7'}, transparent)`,
                top: `${(i * 20) % 100}%`,
                left: `${(i * 15) % 100}%`,
                animation: `float-smooth ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(to right, #f97316 1px, transparent 1px),
                              linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </div>
        
        {/* Toast notifications would go here */}
      </body>
    </html>
  )
}
