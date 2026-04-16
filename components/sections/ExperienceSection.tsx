import { experiences } from '@/lib/data'
import { SectionHeader, GlassCard } from '@/components/ui'

interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string[]
}

function TimelineItem({ title, company, period, description }: TimelineItemProps) {
  return (
    <div className="flex gap-6 md:gap-8 mb-8 group">
      {/* Timeline Dot */}
      <div className="
        w-4 h-4 flex-shrink-0
        bg-dark border-[3px] border-accent rounded-full
        relative z-10
        transition-all duration-300
        group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(0,212,170,0.6)]
      " />

      {/* Content Card */}
      <GlassCard className="flex-1 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-accent font-mono text-sm">{company}</p>
          </div>
          <span className="
            px-4 py-2 
            bg-accent/10 rounded-full 
            text-xs font-mono text-gray-400
            whitespace-nowrap
          ">
            {period}
          </span>
        </div>

        <ul className="space-y-3">
          {description.map((item, index) => (
            <li key={index} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
              <span className="text-accent flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-[5%] py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Professional Experience"
          title="Professional"
          accentText="Journey"
        />

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="
            absolute left-[7px] top-2 bottom-2 w-0.5
            bg-gradient-to-b from-accent to-accent/10
          " />

          {/* Experience Items */}
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.title}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
