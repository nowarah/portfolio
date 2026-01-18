interface SectionHeaderProps {
  label: string
  title: string
  accentText: string
}

export function SectionHeader({ label, title, accentText }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent block mb-4">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        {title}<br />
        <span className="text-accent">{accentText}</span>
      </h2>
    </div>
  )
}
