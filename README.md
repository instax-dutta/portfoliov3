# 🚀 Sci-Fi Space Portfolio

> A mesmerizing, space-themed developer portfolio that takes visitors on an interstellar journey through skills, projects, and achievements.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## ✨ Features

### 🌌 Immersive Space Experience

- **Starry Background** - Dynamic, animated star field that creates depth and atmosphere
- **Rocket Cursor** - Custom rocket-shaped cursor that rotates based on movement direction
- **Smooth Scrolling** - Powered by Lenis for silky-smooth, momentum-based scrolling
- **Glassmorphism UI** - Modern frosted glass effects with backdrop blur
- **Gradient Animations** - Vibrant, multi-color gradients throughout the interface

### 🎨 Design Excellence

- **Sci-Fi Aesthetic** - Dark theme with neon accents (blue, cyan, pink, purple)
- **Custom Typography** - Unique fonts including Mooxy, Achiko, Orbitron, and more
- **Micro-Animations** - Framer Motion animations on every interaction
- **Responsive Design** - Flawless experience across all devices
- **Performance Optimized** - GPU-accelerated animations with `will-change` and `transform3d`

### 📱 Pages & Sections

#### 🏠 **Home / Hero**

- Captivating headline with gradient text effects
- Animated call-to-action buttons
- Subtle scroll indicator
- Floating space elements

#### 💼 **Projects**

- Animated grid layout with staggered reveals
- Project cards with hover effects
- Tech stack badges
- Direct links to live demos
- Categorized by type: AI/ML, Security, Web Development

#### 🛠️ **Skills**

- Chroma Grid background effects
- Interactive skill cards
- Proficiency indicators
- Technology icons with glow effects
- Organized by categories: Languages, Frameworks, Tools, Databases

#### 🎓 **Education**

- Timeline-based layout
- Institution details with achievements
- Academic credentials
- Visual hierarchy with card design

#### 🏆 **Certifications**

- Certificate showcase
- Issuing organizations
- Verification links
- Achievement dates

### 🚀 Tech Stack

**Frontend Framework:**

- Next.js 14 (React 18) with App Router
- TypeScript 5 for type safety

**Styling:**

- Tailwind CSS 3 - Utility-first styling
- Custom CSS with CSS Variables
- Radix UI - Accessible component primitives
- shadcn/ui - Beautiful, customizable components

**Animations:**

- Framer Motion - React animation library
- Lenis - Smooth scroll library
- GSAP - Advanced animations (optional)
- Custom CSS keyframe animations

**UI Components:**

- Custom Rocket Cursor
- Animated Project Cards
- Starry Background Canvas
- Chroma Grid Effects
- Glassmorphic Navigation

**Performance:**

- GPU-accelerated transforms
- Request Animation Frame optimization
- Lazy loading components
- Optimized fonts with `font-display: swap`

## 🎯 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/instax-dutta/portfoliov3.git
cd portfoliov3
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### 1. **Update Personal Information**

Edit the content in each page:

- `/app/page.tsx` - Hero section
- `/app/projects/page.tsx` - Projects list
- `/app/skills/page.tsx` - Skills inventory
- `/app/education/page.tsx` - Education timeline
- `/app/certifications/page.tsx` - Certificates

### 2. **Modify Color Scheme**

Update CSS variables in `/app/globals.css`:

```css
:root {
  --color-background: #0a0f1f;
  --color-primary: #60a5fa;      /* Blue */
  --color-secondary: #f472b6;    /* Pink */
  --color-accent: #22d3ee;       /* Cyan */
  --color-text: #e2e8f0;
  --color-text-muted: #94a3b8;
  --color-rocket: #60a5fa;
}
```

### 3. **Customize Cursor**

Modify `/app/components/CustomCursor.tsx`:

- Change icon/SVG
- Adjust rotation speed (lerp factor)
- Update size and colors
- Add particle effects

### 4. **Adjust Animations**

Fine-tune Framer Motion animations:

- Duration: `transition={{ duration: 0.5 }}`
- Easing: `ease`, `easeIn`, `easeOut`, `easeInOut`
- Stagger children: `staggerChildren: 0.1`

### 5. **Add Custom Fonts**

1. Add font files to `/public/fonts/`
2. Define `@font-face` in `globals.css`
3. Apply with custom classes

## 📂 Project Structure

```
portfoliov3/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx      # Rocket cursor
│   │   ├── Navigation.tsx        # Main navigation
│   │   ├── StarryBackground.tsx  # Animated stars
│   │   └── LenisProvider.tsx     # Smooth scroll
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── education/page.tsx
│   ├── certifications/page.tsx
│   ├── layout.tsx
│   ├── page.tsx                  # Home/Hero
│   └── globals.css
├── components/
│   └── ui/
│       ├── animated-project-card.tsx
│       ├── projects-grid.tsx
│       ├── chroma-grid.tsx
│       └── ... (shadcn components)
├── public/
│   └── fonts/
│       ├── mooxy.ttf
│       └── achiko.otf
├── styles/
├── hooks/
├── lib/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🌟 Key Components

### Custom Cursor

```tsx
// Instant tracking with smooth rotation
// GPU-accelerated transforms
// Hover-device detection
```

### Starry Background

```tsx
// Canvas-based particle system
// Responsive star field
// Performance-optimized rendering
```

### Animated Project Cards

```tsx
// Staggered reveal animations
// Hover effects with scale
// Glassmorphic design
```

### Chroma Grid

```tsx
// Dynamic gradient backgrounds
// CSS Grid-based layout
// Color-shifting effects
```

## 🚀 Performance Optimizations

- **GPU Acceleration** - `transform3d`, `will-change`
- **RAF Optimization** - Efficient animation loops
- **Lazy Loading** - Code splitting with Next.js
- **Image Optimization** - Next.js Image component
- **Font Display** - `swap` strategy for custom fonts
- **CSS Containment** - Layout containment where applicable
- **Reduced Motion** - Respects `prefers-reduced-motion`

## 📱 Responsive Design

Breakpoints:

- **sm:** 640px (phones)
- **md:** 768px (tablets)
- **lg:** 1024px (small laptops)
- **xl:** 1280px (desktops)
- **2xl:** 1536px (large screens)

## 🎭 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Inspiration

This portfolio draws inspiration from:

- Sci-fi movies and games (Tron, Cyberpunk)
- Modern space exploration aesthetics
- Neon-futuristic design trends
- Glassmorphism and neumorphism

## 🛠️ Built By

**Saidutta Abhishek Dash**

- Portfolio: [sdad.pro](https://sdad.pro)
- GitHub: [@instax-dutta](https://github.com/instax-dutta)

---

<div align="center">
  <strong>🚀 Launch your career with a portfolio that's out of this world! 🌌</strong>
  <br><br>
  <sub>Made with ❤️ and lots of ☕</sub>
</div>
