import { projects } from '@/lib/data'
import { SectionHeader, GlassCard } from '@/components/ui'

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-[5%] py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Key"
          accentText="Projects"
        />

        <div className="mt-12 space-y-16">
          {projects.map((group) => (
            <div key={group.group}>
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-semibold text-white">{group.group}</h3>
                <div className="flex-1 h-px bg-accent/20" />
              </div>

              {group.note && (
                <p className="text-xs text-gray-500 font-mono mb-6 -mt-4">
                  * {group.note}
                </p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((project) => (
                  <GlassCard key={project.title} className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {project.title}
                      </h4>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent flex-shrink-0 hover:text-white transition-colors"
                          aria-label={`Visit ${project.title}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-gray-600 flex-shrink-0" title="Private / internal project">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </span>
                      )}
                    </div>

                    {project.description && (
                      <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                    )}

                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-mono rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
