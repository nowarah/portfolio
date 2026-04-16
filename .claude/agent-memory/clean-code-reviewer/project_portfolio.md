---
name: Portfolio Project
description: Next.js 14 personal portfolio site using Tailwind CSS, with sections-based architecture and a central lib/data.ts data layer
type: project
---

Next.js 14 (App Router) + Tailwind CSS portfolio site. All content lives in `lib/data.ts`. UI primitives are in `components/ui/` (Button, GlassCard, SectionHeader, SkillTag). Page sections are in `components/sections/`. Layout components in `components/layout/`. All sections are server components except Navbar (client component with scroll/active state logic).

**Why:** Personal portfolio showcasing experience, projects, skills, education, and contact info.
**How to apply:** Suggestions should favor simplicity and minimal abstraction — it's a static portfolio, not a product app.
