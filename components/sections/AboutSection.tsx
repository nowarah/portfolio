import { SectionHeader } from '@/components/ui'


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
              Full Stack Developer with 4+ years of professional experience building scalable web applications using React.js,
              Next.js, TypeScript, and PHP/Symfony. After building a solid career in Libya across frontend and fullstack roles, I
              relocated to Spain and took the opportunity to broaden my experience through a hands-on internship at Aircury.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Strong background in clean code, SOLID principles, API design, and agile teamwork, with a consistent focus on performance and maintainability.
            </p>

          </div>

          {/* Visual */}
          <div className="flex justify-center items-center">
            <div className="
              relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
              rounded-full
              bg-gradient-to-br from-accent/20 to-accent-blue/20
              border-2 border-accent/30
              flex justify-center items-center
              animate-glow overflow-hidden

            ">
              <img
                src="/images/IMG_3839.PNG"
                alt="Nuwarah Khalafullah"
                className="w-full h-full object-cover rounded-full" style={{ objectPosition: 'center 15%' }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
