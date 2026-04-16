import { aboutCards } from '@/lib/data'
import { SectionHeader, GlassCard } from '@/components/ui'


export function AboutSection() {
  const orbitTags = ['Javascript','Typescript', 'Reactjs', 'PHP', 'Symfony']

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
              Full Stack Developer with 4+ years of professional experience building scalable web applications using React.js,
              Next.js, TypeScript, and PHP/Symfony. After building a solid career in Libya across frontend and fullstack roles, I
              relocated to Spain and took the opportunity to broaden my experience through a hands-on internship at Aircury.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Strong background in clean code, SOLID principles, API design, and agile teamwork, with a consistent focus on performance and maintainability.
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

            ">
              <span className="text-8xl md:text-9xl filter grayscale-[30%]">👩‍💻</span>

{/* Orbiting Tags */}
              {orbitTags.map((tag, index) => {
                const positions = [
                  'top-[5%] left-1/2 -translate-x-1/2',
                  'top-1/2 -right-4 -translate-y-1/2',
                  'bottom-[5%] left-1/2 -translate-x-1/2',
                  'top-1/2 -left-4 -translate-y-1/2',
                ]
                const delays = ['0s', '0.3s', '0.6s', '0.9s']

                return (
                  <span
                    key={tag}
                    className={`
                      absolute ${positions[index]}
                      px-4 py-2
                      bg-dark/90 border border-accent/30 rounded-full
                      text-xs font-mono text-accent
                      animate-float
                    `}
                    style={{ animationDelay: delays[index] }}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
