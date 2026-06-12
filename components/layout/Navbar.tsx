'use client'

import { useState, useEffect } from 'react'
import { navItems, personalInfo } from '@/lib/data'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50)

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      navItems.map(item => document.getElementById(item.id)).forEach((section) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.clientHeight) {
          setActiveSection(section.id)
        }
      })
    }

    const handleScroll = () => { updateScrolled(); updateActiveSection() }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        flex justify-between items-center
        px-[5%] py-6
        transition-all duration-300
        ${isScrolled ? 'bg-dark/95 backdrop-blur-xl py-4' : 'bg-transparent'}
      `}>
        {/* Logo */}
        <a href="#home" className="font-mono text-xl font-bold text-accent">
          {personalInfo.firstName[0]}
          <span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`
                  nav-link relative
                  text-sm tracking-[0.15em] uppercase
                  transition-colors duration-300
                  ${activeSection === item.id ? 'text-accent' : 'text-gray-400 hover:text-accent'}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-0 z-40
        bg-dark/98 backdrop-blur-xl
        flex flex-col justify-center items-center gap-8
        transition-transform duration-400 ease-out
        md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleNavClick(item.id)}
            className={`
              text-2xl tracking-[0.15em] uppercase
              transition-colors duration-300
              ${activeSection === item.id ? 'text-accent' : 'text-gray-400'}
            `}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
