import { personalInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="
      px-[5%] py-8
      border-t border-white/5
      flex flex-wrap justify-between items-center gap-4
    ">
      <p className="font-mono text-gray-500">
        © {currentYear} {personalInfo.name}
      </p>
    
    </footer>
  )
}
