# Nuwarah Khalafullah Portfolio

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page (assembles sections)
│
├── components/
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   │
│   └── ui/              # Reusable UI components
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── SectionHeader.tsx
│       ├── SkillTag.tsx
│       └── index.ts
│
├── lib/
│   └── data.ts          # ⭐ All portfolio content here
│
└── public/              # Static assets (images, etc.)
```

## ✏️ How to Edit Content

**All your portfolio data is in one file: `lib/data.ts`**

### Update Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+1 234 567 890",
  location: "Your City, Country",
  // ...
}
```

### Add New Experience
```typescript
export const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start - End",
    description: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // Add more...
]
```

### Add New Skills
```typescript
export const skills = {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  // Add more categories...
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  accent: {
    DEFAULT: '#00d4aa',  // Main accent color
    blue: '#00a8ff',     // Secondary accent
    pink: '#ff006e',     // Tertiary accent
  },
}
```

### Fonts
Update fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## 🔧 Adding New Sections

1. Create a new component in `components/sections/`:
   ```typescript
   // components/sections/ProjectsSection.tsx
   import { SectionHeader, GlassCard } from '@/components/ui'

   export function ProjectsSection() {
     return (
       <section id="projects" className="min-h-screen px-[5%] py-24">
         <SectionHeader
           label="Projects"
           title="My"
           accentText="Work"
         />
         {/* Your content */}
       </section>
     )
   }
   ```

2. Export from `components/sections/index.ts`:
   ```typescript
   export { ProjectsSection } from './ProjectsSection'
   ```

3. Add to `app/page.tsx`:
   ```typescript
   import { ProjectsSection } from '@/components/sections'
   // ...
   <ProjectsSection />
   ```

4. Add to navigation in `lib/data.ts`:
   ```typescript
   export const navItems = [
     // ...
     { id: "projects", label: "Projects" },
   ]
   ```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily to:
- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Drag & drop the `.next` folder
- **Any Node.js hosting**: Run `npm run build && npm start`


