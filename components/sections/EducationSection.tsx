import { education, languages } from '@/lib/data'
import { SectionHeader, GlassCard } from '@/components/ui'

export function EducationSection() {
  return (
    <section id="education" className="px-[5%] py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Education"
          title="Academic"
          accentText="Background"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Degree */}
          <GlassCard className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                <p className="text-accent font-mono text-sm mt-1">{education.field}</p>
                <p className="text-gray-400 text-sm mt-2">{education.school}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-accent/10 rounded-full text-xs font-mono text-gray-400">
                  {education.period}
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Languages */}
          <GlassCard className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{lang.name}</span>
                      <span className="px-3 py-0.5 bg-accent/10 rounded-full text-xs font-mono text-accent">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
