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
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main page (assembles sections)
│   ├── icon.tsx                 # Favicon (generated, N symbol)
│   └── opengraph-image.tsx      # OG image for social sharing
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   ├── sections/                # Page sections (in order)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   │
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── SectionHeader.tsx
│       ├── SkillTag.tsx
│       └── index.ts
│
├── lib/
│   └── data.ts                  # ⭐ All portfolio content here
│
└── public/
    └── images/                  # Static images (profile photo, etc.)
```

## ✏️ How to Edit Content

**All portfolio data lives in one file: `lib/data.ts`**

### Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",
  firstName: "First",
  lastName: "Last",
  title: "Your Title",
  bio: "One-line bio shown in the hero section.",
  shortBio: "Short bio used in metadata.",
  aboutBio: "Full paragraph shown in the About section.",
  aboutBio2: "Second paragraph shown in the About section.",
}
```

### Experience
```typescript
export const experiences = [
  {
    title: "Job Title",
    company: "Company | City, Country",
    period: "Month YYYY – Month YYYY",
    description: [
      "Bullet point 1",
      "Bullet point 2",
    ],
  },
]
```

### Projects
```typescript
export const projects = [
  {
    group: "Group Name",
    note: "Optional note (e.g. private repo notice)",
    items: [
      {
        title: "Project Title",
        description: "Short description.",
        tech: ["React", "TypeScript"],
        url: "https://example.com", // null for private projects
      },
    ],
  },
]
```

### Skills
```typescript
export const skills = {
  "Category Name": ["Skill 1", "Skill 2"],
}
```

### Education
```typescript
export const education = {
  degree: "Bachelor of ...",
  field: "Field of Study",
  school: "University Name",
  period: "YYYY – YYYY",
}
```

### Languages
```typescript
export const languages = [
  { name: "English", level: "Advanced C1" },
]
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    DEFAULT: '#00d4aa',  // Main accent (teal)
    blue: '#00a8ff',
    pink: '#ff006e',
  },
}
```

### Profile Photo
Replace the image in `public/images/` and update the `src` in `components/sections/AboutSection.tsx`.

## 🔧 Adding New Sections

1. Create `components/sections/NewSection.tsx`
2. Export from `components/sections/index.ts`
3. Add to `app/page.tsx`
4. Add nav entry in `lib/data.ts` → `navItems`

## 📦 Build & Deploy

```bash
npm run build
npm start
```

Deploy to **Vercel** (recommended): connect your GitHub repo and it deploys automatically on every push.
