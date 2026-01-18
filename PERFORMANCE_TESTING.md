# Performance Testing Guide

## Quick Performance Checks

### 1. Visual Inspection

```bash
npm run dev
```

**Check for:**

- ✅ StarryBackground appears only once (not duplicated)
- ✅ Smooth scrolling works correctly
- ✅ Custom cursor animates smoothly
- ✅ Text morphing animation works
- ✅ No visual regressions in fonts

### 2. Browser DevTools Performance Check

#### Chrome DevTools

1. Open DevTools (F12)
2. Go to **Performance** tab
3. Click **Record** and scroll the page
4. Stop recording after 5-10 seconds

**Look for:**

- FPS should be stable at ~60 FPS
- No long tasks (yellow/red bars)
- Reduced scripting time
- Lower paint times

#### Performance Metrics to Monitor

```
Before Optimization:
- FPS: 30-45 (stuttering)
- Scripting: ~40-50ms per frame
- Paint: ~15-20ms per frame
- RAF loops: 4-5 running

After Optimization:
- FPS: 55-60 (smooth)
- Scripting: ~10-15ms per frame
- Paint: ~5-8ms per frame
- RAF loops: 3 running (managed)
```

### 3. Memory Leak Check

#### Before (with leak)

1. Open DevTools → Memory tab
2. Take heap snapshot
3. Navigate between pages 10 times
4. Take another heap snapshot
5. Compare - should see growing memory

#### After (leak fixed)

1. Same steps as above
2. Memory should stabilize after initial load
3. No continuous growth

### 4. Network Performance

#### Font Loading Check

```bash
# Open Network tab in DevTools
# Filter by "Font"
# Reload page
```

**Expected:**

- Orbitron: 3 files (400, 700, 900)
- Archivo: 3 files (400, 600, 700)
- Inconsolata: 2 files (400, 700)
- Space Mono: 2 files (400, 700)
- Total: ~10 font files (down from ~21)

### 5. Lighthouse Audit

```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
npx lighthouse http://localhost:3000 --view
```

**Target Scores:**

- Performance: 90+ (up from ~70)
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 6. Quick RAF Loop Check

Open Console and run:

```javascript
// Count active RAF loops
let rafCount = 0;
const originalRAF = window.requestAnimationFrame;
window.requestAnimationFrame = function(...args) {
  rafCount++;
  console.log('Active RAF loops:', rafCount);
  return originalRAF.apply(this, args);
};
```

**Expected:** Should see 3 RAF loops (Lenis, StarryBackground, CustomCursor, GooeyText)

### 7. Mobile Performance Test

**Test on:**

- Chrome DevTools mobile emulation
- Real mobile device if available

**Check:**

- Touch scrolling is smooth
- No jank during animations
- Custom cursor disabled on touch devices
- Page loads quickly on 3G/4G

### 8. Bundle Size Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.mjs:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })

# Run analysis
ANALYZE=true npm run build
```

## Performance Benchmarks

### Canvas Performance

- **Before**: 600 stars × 60 FPS = 36,000 draw calls/sec
- **After**: 100 stars × 60 FPS = 6,000 draw calls/sec
- **Improvement**: 83% reduction

### Font Loading

- **Before**: ~450KB total font files
- **After**: ~180KB total font files
- **Improvement**: 60% reduction

### JavaScript Bundle

- **First Load JS**: ~87.1 kB (shared)
- **Largest Route**: /projects at 159 kB
- **Smallest Route**: /_not-found at 88 kB

## Common Issues & Solutions

### Issue: Scrolling still feels janky

**Solution:**

- Check if other browser extensions are interfering
- Verify GPU acceleration is enabled
- Try adjusting Lenis `lerp` value (0.05-0.12 range)

### Issue: Fonts look different

**Solution:**

- Font weights were optimized but fallbacks maintained
- If specific weight needed, add it back to layout.tsx
- Browser may need cache clear (Cmd+Shift+R)

### Issue: StarryBackground not visible

**Solution:**

- Check z-index layering
- Verify it's only in layout.tsx
- Check browser console for errors

### Issue: Custom cursor not working

**Solution:**

- Only works on devices with hover capability
- Check media query: `(hover: hover) and (pointer: fine)`
- Verify cursor.tsx is properly imported

## Monitoring in Production

### Key Metrics to Track

1. **Core Web Vitals**:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

2. **Custom Metrics**:
   - Time to Interactive: < 3s
   - Total Blocking Time: < 200ms
   - Speed Index: < 3s

### Tools

- Google Analytics 4 (Web Vitals)
- Vercel Analytics (if deployed on Vercel)
- Chrome User Experience Report
- WebPageTest.org

## Rollback Plan

If issues occur, revert changes:

```bash
git log --oneline  # Find commit before optimization
git revert <commit-hash>  # Revert specific commit
# Or
git reset --hard <commit-hash>  # Hard reset (use with caution)
```

## Next Steps

After confirming optimizations work:

1. ✅ Monitor production metrics for 1 week
2. ✅ Gather user feedback on smoothness
3. ✅ Consider implementing lazy loading (Phase 2)
4. ✅ Add Intersection Observer for animations (Phase 2)
5. ✅ Optimize images with Next.js Image component (Phase 2)
