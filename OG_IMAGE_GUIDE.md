# OG Image Creation Guide

## Quick Create with Canva (Recommended)

1. **Go to Canva**: <https://www.canva.com>
2. **Create Custom Size**: 1200 x 630 pixels
3. **Use this design**:

### Design Specifications

**Background:**

- Dark gradient: #0a0f1f to #1a1f3f (top to bottom)
- Add stars/constellation overlay (search "space background" in Canva)

**Main Text:**

- **Name**: "Sai Dutta Abhishek Dash"
  - Font: Orbitron or Rajdhani (Bold/ExtraBold)
  - Size: 60-72px
  - Color: White (#FFFFFF)
  - Add cyan glow effect

**Subtitle:**

- "Full Stack Developer | AI Engineer | Security Expert"
  - Font: Inter or Montserrat (SemiBold)
  - Size: 28-32px
  - Color: #60a5fa (cyan-blue)

**Tech Icons** (arrange in a circular pattern):

- Python logo
- React logo  
- AWS cloud icon
- Brain/AI icon
- Shield/security icon
- Docker logo

**Accent Elements:**

- Neon glow lines in corners (cyan #22d3ee, purple #a855f7)
- Subtle grid pattern overlay
- Particle effects (optional)

**Footer:**

- "sdad.pro" in small text (16px, #94a3b8)
- Bottom right corner

## Alternative: Use Figma

Template URL: <https://www.figma.com/community/file/958264443280769974>

## Alternative: Use OG Image Services

### 1. Cloudinary OG Image Generator

```
https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/l_text:Arial_60_bold:Sai%20Dutta%20Abhishek%20Dash,co_white,g_north,y_200/l_text:Arial_32:Full%20Stack%20Developer%20|%20AI%20Engineer,co_rgb:60a5fa,g_south,y_200/gradient_fade
```

### 2. Vercel OG Image

Create at: <https://og-playground.vercel.app/>

## After Creating

1. Save as **og-image.png**
2. Place in `/public/og-image.png`
3. Optimize with TinyPNG: <https://tinypng.com/>
4. Test with:
   - Twitter Card Validator: <https://cards-dev.twitter.com/validator>
   - Facebook Debugger: <https://developers.facebook.com/tools/debug/>
   - LinkedIn Post Inspector: <https://www.linkedin.com/post-inspector/>

## Color Palette (Copy these)

- Background Dark: #0a0f1f
- Primary Blue: #60a5fa
- Accent Cyan: #22d3ee  
- Accent Purple: #a855f7
- Accent Pink: #f472b6
- Text Muted: #94a3b8
- White: #FFFFFF

## Example Layout

```
┌─────────────────────────────────────────┐
│  ★ ·  ·    ·  ★    · ·    ★    (stars) │
│                                         │
│         SAI DUTTA ABHISHEK DASH        │
│   Full Stack Developer | AI Engineer   │
│              Security Expert            │
│                                         │
│    🐍   ⚛️   ☁️   🧠   🛡️   🐳      │
│   (Python React AWS AI Security Docker)│
│                                         │
│  ★    ·  ·  ★     ·    ·    ★    ·  ·  │
│                           sdad.pro ·    │
└─────────────────────────────────────────┘
```

## Pro Tip

Use a glassmorphism card effect in the center with semi-transparent background (#0a0f1f with 80% opacity) and backdrop blur for a modern, premium look!
