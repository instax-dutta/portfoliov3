# PLAN: Experience Page Layout Adjustment & Color Revert

## Objective
Restore the cohesive sci-fi color palette (blue/cyan/emerald) to the Experience page and fix layout overlaps in the Timeline component while maintaining smooth animations and responsiveness.

## Proposed Changes

### 1. Color System Revert
- **Files**: `app/experience/ExperienceClient.tsx`
- **Action**: Change the unique "cool" colors assigned to roles back to the established cohesive sci-fi palette.
  - Role 1 (Freelance): `from-blue-400 to-cyan-500`
  - Role 2 (Associate): `from-emerald-400 to-cyan-500`
  - Role 3 (ML Intern): `from-teal-400 to-emerald-500`
  - ... and so on, following the pattern of blue/cyan/emerald.
- **Action**: Revert achievement bullet points to use the standard blue/emerald gradient.

### 2. Layout & Timeline Optimization
- **Files**: `components/ui/timeline.tsx`
- **Problem**: Large side titles currently overlap with content cards.
- **Solution**: 
  - Adjust the `h3` size for side titles (currently `text-5xl` on md+ screens). Reduce to `text-3xl` or adjust margins.
  - Fix the `translate` or `gap` between the sticky side title and the content.
  - Ensure the "Role" text doesn't bleed into the card area.
- **Files**: `app/experience/ExperienceClient.tsx`
- **Decision**: Keep Role title as the side text BUT optimize its length/size, or revert to Date if users prefer.
- **Refinement**: Add side padding or grid constraints to prevent overlap.

### 3. Responsiveness Fixes
- **Action**: Hide or significantly shrink side titles on smaller tablet screens (md) where horizontal space is tight.
- **Action**: Ensure cards center properly on mobile.

### 4. Verification
- Manual visual inspection via `npm run dev`.
- Run linting checks.

## Agent Assignments (Phase 2)
1. **frontend-specialist**: Implementation of layout fixes and color reverts.
2. **performance-optimizer**: Verify scroll performance and animation fluidity.
3. **test-engineer**: Validate responsiveness across breakpoints (375px, 768px, 1024px).

---

## Approval Required
Does this plan look correct?
- Reverting colors to cohesive blue/emerald theme.
- Fixing the side-text overlap by adjusting layout constraints.
- Keeping the smooth scroll behavior.
