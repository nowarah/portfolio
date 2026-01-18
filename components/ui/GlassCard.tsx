import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div 
      className={`
        glass rounded-3xl 
        transition-all duration-400 ease-out
        ${hover ? 'glass-hover hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,212,170,0.15)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
