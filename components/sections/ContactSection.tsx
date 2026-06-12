import { socialLinks } from '@/lib/data'
import { SectionHeader } from '@/components/ui'
import { Linkedin, Mail } from 'lucide-react'

interface ContactLinkProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  target?: string
}

function ContactLink({ icon, label, value, href, target }: ContactLinkProps) {
  const Tag = href ? 'a' : 'div'
  const linkProps = href
    ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : {}

  return (
    <Tag
      {...linkProps}
      className={`
        flex items-center gap-4
        p-5 md:p-6
        glass rounded-2xl
        transition-all duration-300
        ${href ? 'hover:bg-accent/10 hover:border-accent/30 hover:translate-x-2 cursor-pointer' : 'cursor-default'}
      `}
    >
      <div className="w-12 h-12 flex-shrink-0 bg-accent/10 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 mb-1">{label}</div>
        <div className="font-mono">{value}</div>
      </div>
    </Tag>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-[5%] py-24">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeader
          label="Contact"
          title="Let's Work"
          accentText="Together"
        />

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
          I'm currently open to new opportunities and interesting projects.
          Feel free to reach out if you'd like to collaborate!
        </p>

        {/* Contact Links */}
        <div className="space-y-4">
          <ContactLink
            icon={<Linkedin className="text-accent" size={24} />}
            label="LinkedIn"
            value="linkedin.com/in/nuwara"
            href={socialLinks.linkedin}
            target="_blank"
          />
        <ContactLink
            icon={<Mail className="text-accent" size={24} />}
            label="Email"
            value={socialLinks.email}
            href={`mailto:${socialLinks.email}`}
          />

        </div>
      </div>
    </section>
  )
}
