# Situated Laboratories

**Yoga, Dharma & Social Justice Practice**  
*Experiments in liberation for a burning world.*

A practice-centered laboratory for integrating Buddhist insight, Ashtanga yoga, and collective liberation. Essays, study guides, and simple practices for people navigating burnout, climate grief, political anxiety, and everyday suffering — without gurus, spiritual bypass, or toxic positivity.

---

## Project Overview

Situated Laboratories is a **text-first, markdown-based static site** built with Astro. It's designed to be:

- **Minimal tech overhead** — No backend, no database, no runtime JavaScript (Astro ships zero JS by default)
- **Sustainable** — Maintainable by one person, with clear structure that prevents future complexity
- **Accessible** — Built with justice-oriented commitments: transcripts, keyboard navigation, high contrast
- **Privacy-respecting** — No analytics initially, no tracking, simple newsletter integration

### Core Intentions

1. **Offer grounded, workable practices** — Short, realistic practices integrated into daily life
2. **Integrate dharma, yoga, and justice** — Show how teachings speak to structural harm, climate crisis, digital overload
3. **Tell honest, public-facing stories** — Essays that name power and systems while returning to practice
4. **Keep scope humane and sustainable** — Start text-first, grow only as capacity allows
5. **Create a soft doorway** — Optional deeper engagement without marketing funnels

See [PLAN.md](./PLAN.md) for the complete project brief and content plan.

---

## Tech Stack & Philosophy

### Why This Approach?

**Tech Stack:**
- **Framework:** Astro 5.x (static site generator)
- **Styling:** Tailwind CSS (minimal) + Custom CSS for design tokens
- **Content:** Markdown with Astro Content Collections
- **Hosting:** Netlify or Vercel (static hosting)
- **Email:** Buttondown (privacy-respecting newsletter)
- **Analytics:** None initially (add Plausible/Fathom later if needed)

**How It Aligns with "Minimal Tech Overhead":**

1. **No runtime JavaScript** — Astro generates static HTML/CSS
2. **No backend or database** — Content is markdown files
3. **Text-first** — Content creation is simple markdown editing
4. **One-time setup** — Structure prevents future refactoring
5. **Sustainable** — Well-organized code easier for one person to maintain

**Right Effort Principle:**
- Not too little (would require refactoring later)
- Not too much (no CMS, no complex tooling)
- Just enough structure to support sustainable practice

See [DECISIONS.md](./DECISIONS.md) for detailed rationale on tech choices.

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd situated-laboratories

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Detailed Implementation Guide

For a complete day-by-day implementation guide, see [QUICK_START.md](./QUICK_START.md).

---

## Project Structure

```
situated-laboratories/
├── public/
│   ├── audio/              # Audio practice files
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── svg/            # Topographic SVG patterns
│   ├── components/         # Astro components
│   │   ├── SkipLink.astro
│   │   ├── Header.astro
│   │   ├── CrisisFooter.astro
│   │   ├── AudioPlayer.astro
│   │   └── ...
│   ├── content/            # Content collections
│   │   ├── config.ts       # Collection schemas
│   │   ├── field-notes/    # Field Notes essays
│   │   ├── practices/      # Practice Lab audio + transcripts
│   │   └── study/          # Study materials
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro
│   │   ├── EssayLayout.astro
│   │   └── PracticeLayout.astro
│   ├── pages/              # Routes (file-based routing)
│   │   ├── index.astro     # Home page
│   │   ├── about.astro
│   │   ├── support.astro
│   │   ├── field-notes/
│   │   │   ├── index.astro      # Archive
│   │   │   └── [...slug].astro  # Detail pages
│   │   └── practice-lab/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── styles/             # CSS files
│   │   ├── tokens.css      # Design tokens (CSS custom properties)
│   │   ├── typography.css  # Font loading & typography
│   │   ├── layout.css      # Layout utilities
│   │   └── focus.css       # Accessibility focus states
│   └── utils/              # Utility functions
│       ├── seo.ts          # SEO utilities
│       └── schema.ts       # Structured data
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Key Conventions

- **Content folders:** Use simple names (`practices/`, `study/`)
- **Routes:** Match PLAN.md naming (`/practice-lab/`, `/study/`)
- **Components:** PascalCase (`.astro` files)
- **Styles:** CSS custom properties for design tokens

See [TECHNICAL_IMPLEMENTATION.md](./TECHNICAL_IMPLEMENTATION.md) for detailed code examples.

---

## Development Workflow

### Creating Content

#### Field Notes (Essays)

1. Create markdown file: `src/content/field-notes/my-essay.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "My Essay Title"
   description: "Brief description for meta tags and listings"
   pubDate: 2025-01-27
   tags: ["dharma", "climate"]
   featured: false
   ---
   ```
3. Write content in markdown
4. Build and preview: `npm run dev`

#### Practices (Audio + Transcripts)

1. Record audio (5-10 minutes)
2. Compress audio (target: <5MB for 5 min)
3. Save to `public/audio/practice-name.mp3`
4. Create markdown: `src/content/practices/practice-name.md`
5. Add frontmatter:
   ```yaml
   ---
   title: "Practice Title"
   description: "Brief description"
   audioUrl: "/audio/practice-name.mp3"
   duration: "5:12"
   pubDate: 2025-01-27
   featured: false
   transcript: |
     # Transcript: Practice Title
     
     [Full transcript in markdown...]
   ---
   ```
6. Write practice description in markdown

### Running Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check
```

### Content Cadence

**Target (adjustable):**
- 1 Field Notes essay every 2-4 weeks
- 1 new practice every 1-2 months
- Study materials: add as capacity allows

This is a guideline, not a requirement. Adjust based on capacity and energy.

---

## Design System

### Quick Reference

**Colors:**
- Paper (background): `#F7F3EC`
- Ink (text): `#151515`
- Teal (links, primary): `#1E5C57`
- Rust (accents): `#B35632`
- Border: `#D0C5B6`

**Typography:**
- Headlines: Fraunces (serif), weights 600-700
- Body: Inter (sans), weight 400
- Line height: 1.6-1.8

**Spacing:**
- Container: `min(1080px, 100% - 2rem)`
- Section padding: `var(--space-xl)` to `var(--space-2xl)`

**Breakpoints:**
- Mobile: ≤ 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

See [DESIGN_PLAN.md](./DESIGN_PLAN.md) for complete design specifications.

---

## Accessibility

### Built-in Features

- **Skip links** — Jump to main content
- **Keyboard navigation** — All interactive elements accessible
- **Focus states** — Visible 2px teal outline on focus
- **High contrast** — WCAG AA compliant color palette
- **Transcripts** — All audio practices include transcripts
- **Semantic HTML** — Proper heading hierarchy, ARIA labels
- **No autoplay** — Audio/video never autoplays

### Testing Checklist

- [ ] Keyboard navigation (all pages)
- [ ] Screen reader testing
- [ ] Color contrast verification (WCAG AA)
- [ ] Focus states visible
- [ ] Skip link works
- [ ] All images have alt text
- [ ] Audio transcripts complete

See [QUICK_START.md](./QUICK_START.md) Week 4 for full accessibility audit process.

---

## Deployment

### Hosting Setup

**Netlify or Vercel:**

1. Connect repository to hosting platform
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Set environment variables (if needed)
4. Deploy

### Domain Configuration

1. Verify domain ownership (`situatedlaboratories.com`)
2. Configure DNS in hosting platform
3. Add SSL certificate (automatic on Netlify/Vercel)

### Post-Deployment Checklist

- [ ] Verify RSS feed: `/rss.xml`
- [ ] Test newsletter form
- [ ] Check all pages load correctly
- [ ] Verify audio files play
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (target: 90+)

See [TECHNICAL_IMPLEMENTATION.md](./TECHNICAL_IMPLEMENTATION.md) for detailed deployment configuration.

---

## Content Guidelines

### Tone & Style

- **Clear, intelligent, non-performative**
- Willing to name: capitalism, white supremacy, climate breakdown, digital fascism
- Always returns to: *What does this mean for practice?*
- *What can one nervous system reasonably hold and respond to?*

### Boundaries & Disclaimers

**This site offers educational and spiritual material, not professional clinical care.**

- Not therapy
- Not medical advice
- Not crisis support

Encourage readers to seek licensed therapists, medical providers, or crisis resources (988 in U.S.) when needed.

See [PLAN.md](./PLAN.md) Section 7 for complete tone and ethics guidelines.

---

## Resources

### Planning Documents

- **[PLAN.md](./PLAN.md)** — Project brief and content plan
- **[DESIGN_PLAN.md](./DESIGN_PLAN.md)** — Design system and visual specifications
- **[TECHNICAL_IMPLEMENTATION.md](./TECHNICAL_IMPLEMENTATION.md)** — Detailed technical plan with code examples
- **[TECHNICAL_CRITIQUE.md](./TECHNICAL_CRITIQUE.md)** — Analysis of technical approach
- **[QUICK_START.md](./QUICK_START.md)** — Day-by-day implementation guide
- **[DECISIONS.md](./DECISIONS.md)** — Key project decisions and resolutions
- **[PRE_BUILD_REVIEW.md](./PRE_BUILD_REVIEW.md)** — Consistency and skillfulness review
- **[CONTENT_TEMPLATES.md](./CONTENT_TEMPLATES.md)** — Content creation templates

### External Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Buttondown Documentation](https://buttondown.email/help/api)

---

## Support & Contributing

This is a personal project, but if you have suggestions or find issues:

1. Check existing documentation first
2. Review [DECISIONS.md](./DECISIONS.md) for project rationale
3. Consider alignment with project intentions (minimal tech, sustainability, justice-oriented)

---

## License

[Add your license here]

---

> "Freedom is not found by escaping conditions, but by seeing clearly how we are conditioned — and responding with wisdom instead of habit."