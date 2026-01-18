import { aboutCards } from '@/lib/data'
import { SectionHeader, GlassCard } from '@/components/ui'
import Image from 'next/image'

export function AboutSection() {

  return (
    <section id="about" className="min-h-screen flex items-center px-[5%] py-24">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <SectionHeader
              label="About Me"
              title="Turning Ideas Into"
              accentText="Digital Reality"
            />

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              I'm a Full Stack Developer with a passion for building elegant, scalable web applications.
              With expertise spanning frontend frameworks like Reactjs, Nextjs, Vue.js + Vite to backend technologies like PHP and .NET Core,
              I bring a comprehensive approach to software development.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              My journey includes leading development teams, optimizing SEO performance, and
              implementing analytics solutions. I'm also passionate about sharing knowledge through
              teaching and mentoring upcoming developers.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {aboutCards.map((card, index) => (
                <GlassCard key={index} className="p-5">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-sm text-gray-400 leading-snug">
                    <div className="text-white/90">{card.title}</div>
                    {card.subtitle}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center items-center">
            <div className="
              relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
              rounded-full
              bg-gradient-to-br from-accent/20 to-accent-blue/20
              border-2 border-accent/30
              flex justify-center items-center
              animate-glow
              overflow-hidden
            ">
<Image
  src="/images/IMG_0405.jpeg"
  alt="Nuwarah Khalafullah"
  fill
  className="object-cover"
  priority
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
