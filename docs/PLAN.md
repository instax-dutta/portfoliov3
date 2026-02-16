# PLAN: Add RedisKeeper to Projects Page

## Objective
Add the RedisKeeper project to the portfolio's project listing to showcase high-performance infrastructure and security work.

## Project Details: RedisKeeper
- **Title**: RedisKeeper — Privacy-First Redis Activity Guard
- **Description**: A privacy-first, open-source tool to prevent free-tier Redis databases from being auto-deleted due to inactivity. Weekly automated pings with client-side TweetNaCl.js encryption.
- **Technologies**: Next.js 15, TypeScript 5.7, NeonDB, Prisma 6, TweetNaCl.js, Tailwind CSS 4, Framer Motion, Lucide React
- **Link**: https://github.com/instax-dutta/rediskeeper
- **Category**: Infrastructure, Security & Cloud

## Proposed Changes

### 1. Update Project Data
- **File**: `app/projects/ProjectsClient.tsx`
- **Action**: Add RedisKeeper to the `projects` array under the `Infrastructure, Security & Cloud` section (after `Binify`).

### 2. Update Technology Metadata
- **File**: `components/ui/animated-project-card.tsx`
- **Action**: Add missing technology mappings to `techMap` for:
  - `Next.js 15`
  - `TypeScript 5.7`
  - `NeonDB`
  - `Prisma 6`
  - `TweetNaCl.js`
  - `Tailwind CSS 4`

### 3. Verification
- **Build Check**: Run `npm run build` to ensure no TypeScript or build errors.
- **Visual Check**: Plan to verify the card rendering and technology icons in the UI.
- **Link Check**: Verify GitHub links are correctly handled by the `AnimatedProjectCard` logic.

## Agent Assignments (Phase 2)
1. **frontend-specialist**: Update `ProjectsClient.tsx` and `animated-project-card.tsx` with the new project data and tech metadata.
2. **seo-specialist**: Verify if any SEO metadata (e.g., in `ProjectsClient.tsx` or `Project` components) should be updated to include the new project keywords.
3. **test-engineer**: Run linting and build checks to ensure the codebase remains stable.

---

## Approval Required
Does this plan look correct?
- Adding RedisKeeper under the Infrastructure section.
- Updating tech metadata for new libraries.
- Verifying the build after changes.
