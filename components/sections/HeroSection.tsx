import { personalInfo, stats } from '@/lib/data'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-[5%] relative">
      <div className="max-w-6xl w-full pb-24 md:pb-0">
        {/* Intro */}
        <p
          className="font-mono text-sm tracking-[0.2em] text-accent mb-6 animate-slideUp opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          HELLO, I'M
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-tight text-gradient animate-gradient bg-200% animate-slideUp opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          {personalInfo.firstName.toUpperCase()}<br />
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed animate-slideUp opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mt-10 animate-slideUp opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <Button href="#contact" variant="primary">
            Get In Touch
            <ArrowRight size={20} />
          </Button>
          <Button href="#experience" variant="outline">
            Experience
          </Button>
          <Button href="#projects" variant="outline">
            Key Projects
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 md:gap-12 mt-16 animate-slideUp opacity-0"
          style={{ animationDelay: '1s' }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent font-mono">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="
        hidden md:flex
        absolute bottom-12 left-1/2 -translate-x-1/2
        flex-col items-center gap-2 text-gray-500
        animate-pulse-slow
      ">
        <span className="text-xs tracking-[0.2em]">SCROLL</span>
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <line x1="10" y1="8" x2="10" y2="14" />
        </svg>
      </div>
    </section>
  )
}
