import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center gap-3 px-8 py-4 
    font-semibold text-sm tracking-wider uppercase 
    rounded-full cursor-pointer 
    transition-all duration-300 ease-out
    hover:-translate-y-1
  `
  
  const variants = {
    primary: `
      bg-gradient-to-r from-accent to-accent-blue 
      text-dark 
      hover:shadow-[0_15px_30px_-10px_rgba(0,212,170,0.5)]
    `,
    outline: `
      bg-transparent text-accent 
      border-2 border-accent 
      hover:bg-accent/10
    `,
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
