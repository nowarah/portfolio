import { Navbar, Footer } from '@/components/layout'
import {
  HeroSection,
  AboutSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
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
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
