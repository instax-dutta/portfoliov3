# Portfolio Projects Update Plan

## 📋 Overview
Add 4 new GitHub projects to the portfolio projects page with live demo links and proper technology tags.

## 🎯 Objectives
1. Add Rpi-Persona, preddit, project-ignition, and tooner to ProjectsClient.tsx
2. Maintain design consistency with existing projects
3. Ensure all links are functional
4. Verify build passes

## 📦 Projects to Add

### 1. Tooner — Lightning-Fast Document Tokenization
- **Description:** Privacy-first, client-side platform to convert any document (PDF, DOCX, CSV, etc.) into token-optimized .toon files. Reduces token usage for LLMs with zero server-side storage.
- **Technologies:** React 19, Vite 6, TypeScript 5, Framer Motion, GSAP, Lenis, Web Workers, TOON Format
- **Live Link:** https://tooner.sdad.pro
- **GitHub:** https://github.com/instax-dutta/tooner
- **Category:** 🤖 AI/ML Applications

### 2. Ignition — Reddit to LLM Extraction Engine
- **Description:** High-performance extraction engine that transforms Reddit discussions into TOON format for LLM ingestion. Intelligent subreddit discovery with 50-70% token reduction.
- **Technologies:** Vite 5, React 18, TypeScript 5, Framer Motion, Lenis, Zustand, TanStack Query v5, Tailwind CSS v4, shadcn/ui, Netlify Functions
- **Live Link:** https://ignition.sdad.pro
- **GitHub:** https://github.com/instax-dutta/project-ignition
- **Category:** 🤖 AI/ML Applications

### 3. RPi Persona — Server Health Monitoring Daemon
- **Description:** Minimalist daemon that gives your server a voice based on its health. Ultra-lightweight with deterministic persona moods and premium glassmorphism dashboard.
- **Technologies:** Python 3, Flask, psutil, HTML5/CSS, Ollama Cloud, Glassmorphism
- **Live Link:** https://rpi.sdad.pro
- **GitHub:** https://github.com/instax-dutta/Rpi-Persona
- **Category:** 🔐 Enterprise Security & DevOps / Monitoring

### 4. Preddit — Lightweight Reddit Mirror
- **Description:** Super-lightweight, personalisable Reddit mirror for minimal hardware. Disk-first aggregator with zero JavaScript and sub-20KB pages.
- **Technologies:** Python 3, Flask, SQLite 3, HTML, Server-Side Rendering
- **Live Link:** https://preddit.sdad.pro
- **GitHub:** https://github.com/instax-dutta/preddit
- **Category:** 🎨 Modern Web Development & Creative

## 📁 Files to Modify

### Primary Change
**File:** `d:\portfoliov3\app\projects\ProjectsClient.tsx`
- **Location:** Lines 7-164 (projects array)
- **Action:** Insert 4 new project objects

## 🎯 Insertion Strategy

### Option A: As Featured Projects (RECOMMENDED)
Insert at the **beginning** of the projects array (after line 8) to showcase as latest work.

**Reasoning:**
- These are recent projects with live demos
- Strong technical implementations across security, AI, and performance
- Mix of different tech stacks (Python backend, React frontend, low-level monitoring)
- Excellent portfolio diversity

## 🔧 Implementation Steps

### Step 1: Update ProjectsClient.tsx
1. Open `d:\portfoliov3\app\projects\ProjectsClient.tsx`
2. Insert 4 new project objects at line 9 (top of array)
3. Follow existing format:
   ```typescript
   {
     title: string,
     description: string,
     technologies: string[],
     link: string,
     githubLink?: string
   }
   ```

### Step 2: Format Consistency Check
- ✅ Descriptions should be concise (1-2 sentences)
- ✅ Technology arrays should list 4-10 items
- ✅ Use version numbers where applicable (e.g., "React 19", "Python 3")
- ✅ Primary link should be live demo (if available)
- ✅ Include githubLink for GitHub repo

### Step 3: Build Verification
```bash
npm run dev
```
- Navigate to /projects page
- Verify all 4 new projects appear
- Click all links to ensure they work
- Check mobile responsiveness

### Step 4: Production Build Test
```bash
npm run build
```
- Ensure build completes without errors
- Check for any TypeScript errors
- Verify bundle size hasn't increased significantly

## ✅ Verification Checklist

### Visual Verification
- [ ] All 4 projects visible on projects page
- [ ] Project cards match existing design
- [ ] Animations work smoothly
- [ ] No layout shifts or UI glitches

### Functional Verification
- [ ] Live demo links open correctly
- [ ] GitHub links open correctly
- [ ] Technology tags render properly
- [ ] Hover effects work on all cards

### Technical Verification
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Build completes successfully
- [ ] No accessibility warnings

### Content Verification
- [ ] Descriptions are accurate
- [ ] Technology lists are complete
- [ ] Links point to correct URLs
- [ ] Project count updates (should show 28 total projects)

---

**Plan Updated:** 2026-02-01  
**Status:** Completed  
**Estimated Time:** 15-20 minutes  
**Risk Level:** Low
