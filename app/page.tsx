import { Navbar, Footer } from '@/components/layout'
import { 
  HeroSection, 
  AboutSection, 
  ExperienceSection, 
  SkillsSection, 
  ContactSection 
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
