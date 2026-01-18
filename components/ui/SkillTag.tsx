interface SkillTagProps {
  name: string
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="
      inline-block px-4 py-2 
      bg-accent/10 border border-accent/20 
      rounded-full text-sm text-accent 
      font-mono
      transition-all duration-300
      hover:bg-accent/20 hover:border-accent hover:scale-105
      cursor-default
    ">
      {name}
    </span>
  )
}
