import { skills } from '@/lib/data'
import { SectionHeader, GlassCard, SkillTag } from '@/components/ui'

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-[5%] py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          label="Skills"
          title="Technical"
          accentText="Expertise"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Object.entries(skills).map(([category, items]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
