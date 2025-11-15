# Quick Start Guide - Situated Laboratories

**For:** Developers implementing the site  
**Time estimate:** 4 weeks (phased approach)

---

## Week 1: Foundation

### Day 1-2: Project Setup

```bash
# Initialize project
npm create astro@latest situated-laboratories -- --template minimal
cd situated-laboratories

# Add integrations
npx astro add tailwind
npx astro add sitemap

# Install dependencies
npm install @astrojs/rss

# Create directory structure
mkdir -p src/{components,layouts,pages,content/{field-notes,practices,study},styles,utils,assets/svg}
mkdir -p public/audio
```

### Day 3-4: Design System

1. **Create design tokens** (`src/styles/tokens.css`)
   - Copy from TECHNICAL_IMPLEMENTATION.md
   - Verify all colors match DESIGN_PLAN.md

2. **Set up typography** (`src/styles/typography.css`)
   - Configure Fraunces + Inter fonts
   - Set up responsive type scale

3. **Create layout utilities** (`src/styles/layout.css`)
   - Container, grid, split utilities

4. **Add focus states** (`src/styles/focus.css`)
   - Skip link styles
   - Focus-visible patterns

### Day 5: Core Components

1. **SkipLink.astro** - Accessibility baseline
2. **Header.astro** - Navigation with mobile menu
3. **CrisisFooter.astro** - Always-visible footer

**Test:** Keyboard navigation, focus states, mobile menu

---

## Week 2: Content & Pages

### Day 1-2: Content Collections

1. **Set up schemas** (`src/content/config.ts`)
   - Field Notes schema
   - Practices schema (with audio + transcript)
   - Study schema

2. **Create first content**
   - First Field Note: "Dharma in a Burning World"
   - First Practice: "Three-Breath Reset" (with audio + transcript)

### Day 3-4: Components

1. **AudioPlayer.astro**
   - Transcript display
   - Keyboard controls
   - No autoplay

2. **EssayCard.astro** - For Field Notes listings
3. **PracticeTile.astro** - For Practice Lab listings

### Day 5: Pages

1. **Home page** (`src/pages/index.astro`)
   - Hero section (60/40 split)
   - Three pillar tiles
   - Featured content
   - Quote block
   - Newsletter signup

2. **Field Notes pages**
   - Archive (`/field-notes/index.astro`)
   - Detail (`/field-notes/[...slug].astro`)

3. **Practice Lab pages**
   - Archive (`/practice-lab/index.astro`)
   - Detail (`/practice-lab/[...slug].astro`)

---

## Week 3: Features & Polish

### Day 1: RSS Feed

1. **Create RSS feed** (`src/pages/rss.xml.ts`)
   - Field Notes only (per PLAN.md)
   - Test with feed validator

### Day 2: SEO

1. **SEO utilities** (`src/utils/seo.ts`)
2. **Structured data** (`src/utils/schema.ts`)
3. **Add meta tags to layouts**

### Day 3: Newsletter

1. **NewsletterSignup.astro**
   - Buttondown embed form
   - Test form submission

### Day 4: SVG Patterns

1. **Create topographic SVGs**
   - `contour-hero.svg` - Hero background
   - `contour-divider.svg` - Section dividers
   - `contour-quote.svg` - Quote accent

2. **Integrate into pages**

### Day 5: Performance

1. **Font optimization**
   - Variable fonts
   - Subsetting
   - Preload critical fonts

2. **CSS optimization**
   - Verify <50KB gzipped
   - Purge unused styles

3. **Image optimization**
   - WebP with fallbacks
   - Lazy loading

---

## Week 4: Testing & Launch

### Day 1-2: Accessibility Audit

- [ ] Keyboard navigation (all pages)
- [ ] Screen reader testing
- [ ] Color contrast verification (WCAG AA)
- [ ] Focus states visible
- [ ] Skip link works
- [ ] All images have alt text
- [ ] Audio transcripts complete

### Day 3: Cross-Browser Testing

- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Day 4: Performance Testing

- Lighthouse audit (target: 90+)
- Mobile performance
- Network throttling test
- Audio file loading

### Day 5: Deployment

1. **Set up hosting** (Netlify or Vercel)
2. **Configure domain**
3. **Set up redirects** (`netlify.toml` or `vercel.json`)
4. **Deploy**
5. **Verify RSS feed**
6. **Test newsletter form**

---

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution:** Check font paths, verify preload tags, test with network throttling

### Issue: Mobile menu not working
**Solution:** Verify JavaScript is enabled, check aria-expanded attributes

### Issue: Audio player transcript not displaying
**Solution:** Check markdown rendering, verify transcript field in schema

### Issue: RSS feed not validating
**Solution:** Check date formatting, verify all required fields present

### Issue: Tailwind styles not applying
**Solution:** Verify `tailwind.config.mjs` content paths, check CSS import order

---

## Content Creation Workflow

### Creating a Field Note

1. Create markdown file: `src/content/field-notes/my-essay.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "My Essay Title"
   description: "Brief description"
   pubDate: 2025-01-27
   tags: ["dharma", "climate"]
   featured: false
   ---
   ```
3. Write content in markdown
4. Build and preview: `npm run dev`

### Creating a Practice

1. Record audio (5-10 minutes)
2. Compress audio (target: <5MB for 5 min)
3. Save to `public/audio/practice-name.mp3`
4. Create markdown: `src/content/practices/practice-name.md`
5. Add frontmatter with audio URL and transcript
6. Write practice description

---

## Design System Quick Reference

### Colors
- Paper: `#F7F3EC`
- Ink: `#151515`
- Teal: `#1E5C57` (links, primary actions)
- Rust: `#B35632` (accents, chips)

### Typography
- Headlines: Fraunces, 600-700 weight
- Body: Inter, 400 weight
- Line height: 1.6-1.8

### Spacing
- Container: `min(1080px, 100% - 2rem)`
- Section padding: `var(--space-xl)` to `var(--space-2xl)`

### Breakpoints
- Mobile: ≤ 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Resources

- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Buttondown Docs:** https://buttondown.email/help/api

---

## Support

If you get stuck:
1. Check TECHNICAL_IMPLEMENTATION.md for detailed code examples
2. Review DESIGN_PLAN.md for design specifications
3. Consult PLAN.md for content requirements
4. Check Astro documentation for framework-specific issues

---

> "Start where you are. Use what you have. Do what you can." — Arthur Ashe
