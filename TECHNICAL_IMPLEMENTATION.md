# Situated Laboratories – Technical Implementation Plan (Expanded)

**Version:** 1.0  
**Based on:** PLAN.md v0.2, DESIGN_PLAN.md v0.2, Technical Critique

---

## Overview

This document provides a detailed, actionable technical implementation plan for building Situated Laboratories with Astro. It addresses the gaps identified in the initial technical plan and integrates design system and accessibility requirements from DESIGN_PLAN.md.

**Tech Stack:**
- Framework: Astro 4.x
- Styling: Tailwind CSS (minimal) + Custom CSS for design tokens
- Content: Markdown with Astro Content Collections
- Hosting: Netlify or Vercel
- Email: Buttondown (embed form)
- Analytics: None initially (add Plausible/Fathom later if needed)

---

## Phase 1: Project Setup & Design System (Week 1)

### 1.1 Initialize Astro Project

```bash
# Create project
npm create astro@latest situated-laboratories -- --template minimal

# Add integrations
npx astro add tailwind
npx astro add sitemap

# Install additional dependencies
npm install @astrojs/rss
```

### 1.2 Project Structure

```
situated-laboratories/
├── public/
│   ├── audio/              # Audio practice files
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── svg/
│   │       ├── contour-hero.svg
│   │       ├── contour-divider.svg
│   │       └── contour-quote.svg
│   ├── components/
│   │   ├── SkipLink.astro
│   │   ├── Header.astro
│   │   ├── CrisisFooter.astro
│   │   ├── AudioPlayer.astro
│   │   ├── EssayCard.astro
│   │   ├── PracticeTile.astro
│   │   └── NewsletterSignup.astro
│   ├── content/
│   │   ├── config.ts        # Content collection schemas
│   │   ├── field-notes/
│   │   │   └── *.md
│   │   ├── practices/
│   │   │   └── *.md
│   │   └── study/
│   │       └── *.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── EssayLayout.astro
│   │   └── PracticeLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── support.astro
│   │   ├── field-notes/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── practice-lab/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── study/
│   │       └── index.astro
│   ├── styles/
│   │   ├── tokens.css       # CSS custom properties
│   │   ├── typography.css   # Font loading & typography
│   │   ├── layout.css       # Layout utilities
│   │   └── focus.css        # Focus states
│   ├── utils/
│   │   ├── seo.ts           # SEO utilities
│   │   └── schema.ts        # Structured data
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### 1.3 Design Tokens (CSS Custom Properties)

**File: `src/styles/tokens.css`**

```css
:root {
  /* Colors - from DESIGN_PLAN.md */
  --color-paper: #F7F3EC;
  --color-paper-dark: #EFE5D8;
  --color-ink: #151515;
  --color-ink-secondary: #555149;
  --color-teal: #1E5C57;
  --color-teal-light: #2A7A73;
  --color-rust: #B35632;
  --color-border: #D0C5B6;
  
  /* Typography - from DESIGN_PLAN.md */
  --font-serif: 'Fraunces', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  
  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-content: min(1080px, 100% - 2rem);
  
  /* Transitions */
  --transition-base: 150ms ease-out;
  --transition-slow: 250ms ease-out;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(21, 21, 21, 0.05);
  --shadow-md: 0 4px 6px rgba(21, 21, 21, 0.1);
}

/* Dark theme for footer */
[data-theme="dark"] {
  --color-bg: var(--color-ink);
  --color-text: var(--color-paper);
  --color-text-secondary: #D0C5B6;
}
```

### 1.4 Typography Setup

**File: `src/layouts/BaseLayout.astro`**

```astro
---
// BaseLayout.astro
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/focus.css';
import SkipLink from '../components/SkipLink.astro';
import Header from '../components/Header.astro';
import CrisisFooter from '../components/CrisisFooter.astro';

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description || title} />
    
    <!-- Preload critical fonts -->
    <link rel="preload" href="/fonts/fraunces-variable.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin />
    
    <!-- Google Fonts fallback (or self-host) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    
    <title>{title} | Situated Laboratories</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  </head>
  <body>
    <SkipLink />
    <Header />
    <main id="main-content">
      <slot />
    </main>
    <CrisisFooter />
  </body>
</html>
```

**File: `src/styles/typography.css`**

```css
/* Typography - from DESIGN_PLAN.md */

/* Headlines */
h1, h2 {
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 3vw, 3.3rem);
  font-weight: 700;
}

h2 {
  font-size: clamp(1.75rem, 2.5vw, 2rem);
}

h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: 600;
  line-height: 1.4;
}

/* Body text */
body {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-ink);
  background-color: var(--color-paper);
}

p {
  margin-bottom: 1.5rem;
}

/* Links */
a {
  color: var(--color-teal);
  text-decoration: none;
  transition: var(--transition-base);
}

a:hover {
  color: var(--color-teal-light);
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Quotes */
blockquote {
  font-style: italic;
  border-left: 3px solid var(--color-rust);
  padding-left: var(--space-md);
  margin-left: 0;
  margin-right: 0;
  color: var(--color-ink-secondary);
}

/* Small caps for quote attribution */
.quote-attribution {
  font-variant: small-caps;
  font-size: 0.9em;
  letter-spacing: 0.05em;
}
```

### 1.5 Focus States

**File: `src/styles/focus.css`**

```css
/* Focus states - from DESIGN_PLAN.md accessibility requirements */

/* Skip link - visible on focus */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-teal);
  color: var(--color-paper);
  padding: var(--space-sm);
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* All interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
audio:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Remove default focus for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### 1.6 Layout Utilities

**File: `src/styles/layout.css`**

```css
/* Layout utilities */

.container {
  width: 100%;
  max-width: var(--container-content);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

/* Grid utilities */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

/* 60/40 split for hero and featured content */
.split-asymmetric {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: var(--space-xl);
}

/* Responsive */
@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .split-asymmetric {
    grid-template-columns: 1fr;
  }
}
```

### 1.7 Tailwind Configuration

**File: `tailwind.config.mjs`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        'paper-dark': '#EFE5D8',
        ink: '#151515',
        'ink-secondary': '#555149',
        teal: '#1E5C57',
        'teal-light': '#2A7A73',
        rust: '#B35632',
        border: '#D0C5B6',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        base: '150ms',
        slow: '250ms',
      },
    },
  },
  plugins: [],
}
```

---

## Phase 2: Core Components (Week 1-2)

### 2.1 Skip Link Component

**File: `src/components/SkipLink.astro`**

```astro
---
// SkipLink.astro - Accessibility requirement
---

<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-teal);
    color: var(--color-paper);
    padding: var(--space-sm) var(--space-md);
    text-decoration: none;
    font-weight: 600;
    z-index: 100;
    border-radius: 0 0 4px 0;
  }

  .skip-link:focus {
    top: 0;
  }
</style>
```

### 2.2 Header Component

**File: `src/components/Header.astro`**

```astro
---
// Header.astro - from DESIGN_PLAN.md
---

<header class="header">
  <div class="container">
    <nav class="nav" aria-label="Main navigation">
      <div class="nav-brand">
        <a href="/" class="brand-link">
          <span class="brand-name">Situated Laboratories</span>
          <span class="brand-tagline">Yoga · Dharma · Social Justice</span>
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="/field-notes">Field Notes</a></li>
        <li><a href="/practice-lab">Practice Lab</a></li>
        <li><a href="/study">Study</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger"></span>
      </button>
    </nav>
  </div>
</header>

<style>
  .header {
    background: var(--color-paper);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(10px);
    background-color: rgba(247, 243, 236, 0.95);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
  }

  .brand-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .brand-name {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-ink);
  }

  .brand-tagline {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    color: var(--color-ink-secondary);
    font-weight: 500;
  }

  .nav-links {
    display: flex;
    gap: var(--space-lg);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    font-family: var(--font-sans);
    font-weight: 500;
    color: var(--color-ink);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
  }

  /* Mobile nav - slide-down panel */
  @media (max-width: 768px) {
    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--color-paper);
      border-bottom: 1px solid var(--color-border);
      flex-direction: column;
      padding: var(--space-md);
      gap: var(--space-sm);
      transform: translateY(-100%);
      opacity: 0;
      transition: var(--transition-base);
      pointer-events: none;
    }

    .nav-links[aria-expanded="true"] {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .nav-toggle {
      display: block;
    }
  }
</style>

<script>
  // Mobile nav toggle
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.setAttribute('aria-expanded', !isExpanded);
      });
    }
  });
</script>
```

### 2.3 Crisis Footer Component

**File: `src/components/CrisisFooter.astro`**

```astro
---
// CrisisFooter.astro - from DESIGN_PLAN.md
// Always visible, dark theme, includes crisis resources
---

<footer class="crisis-footer" data-theme="dark">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section">
        <h3 class="footer-heading">Situated Laboratories</h3>
        <p class="footer-tagline">Yoga, dharma & social justice practice for difficult times.</p>
      </div>

      <nav class="footer-section" aria-label="Footer navigation">
        <h4 class="footer-subheading">Navigation</h4>
        <ul class="footer-links">
          <li><a href="/field-notes">Field Notes</a></li>
          <li><a href="/practice-lab">Practice Lab</a></li>
          <li><a href="/study">Study</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>

      <div class="footer-section footer-crisis">
        <h4 class="footer-subheading">Crisis & Support</h4>
        <p class="crisis-text">
          If you are in immediate distress, please contact local emergency services or a crisis resource.
        </p>
        <p class="crisis-lifeline">
          <strong>U.S.:</strong> Call or text <a href="tel:988">988</a> for the <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">Suicide & Crisis Lifeline</a>.
        </p>
        <p>
          <a href="/support">More resources →</a>
        </p>
      </div>

      <div class="footer-section">
        <h4 class="footer-subheading">Legal</h4>
        <p class="footer-copyright">© 2025 Richard Donohue</p>
        <p class="footer-privacy">
          This site uses privacy-respecting analytics (or no analytics).
        </p>
      </div>
    </div>
  </div>
</footer>

<style>
  .crisis-footer {
    background-color: var(--color-ink);
    color: var(--color-paper);
    padding: var(--space-2xl) 0 var(--space-xl);
    margin-top: var(--space-2xl);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xl);
  }

  .footer-heading {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--space-sm);
    color: var(--color-paper);
  }

  .footer-subheading {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--color-paper);
  }

  .footer-tagline {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: var(--space-xs);
  }

  .footer-links a,
  .crisis-footer a {
    color: var(--color-paper);
    text-decoration: underline;
  }

  .footer-links a:hover,
  .crisis-footer a:hover {
    color: var(--color-teal-light);
  }

  .footer-crisis {
    border-left: 2px solid var(--color-rust);
    padding-left: var(--space-md);
  }

  .crisis-text {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: var(--space-sm);
  }

  .crisis-lifeline {
    font-size: 0.9rem;
    margin-bottom: var(--space-sm);
  }

  .footer-copyright,
  .footer-privacy {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-xs);
  }

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }

    .footer-crisis {
      border-left: none;
      border-top: 2px solid var(--color-rust);
      padding-left: 0;
      padding-top: var(--space-md);
    }
  }
</style>
```

### 2.4 Audio Player Component

**File: `src/components/AudioPlayer.astro`**

```astro
---
// AudioPlayer.astro - from PLAN.md + DESIGN_PLAN.md
// Requirements: transcript display, keyboard controls, no autoplay, duration display

interface Props {
  src: string;
  title: string;
  transcript: string;
  duration?: string;
}

const { src, title, transcript, duration } = Astro.props;
const audioId = `audio-${Math.random().toString(36).substr(2, 9)}`;
const transcriptId = `transcript-${audioId}`;
---

<div class="audio-player">
  <div class="audio-header">
    <h3 class="audio-title">{title}</h3>
    {duration && <span class="audio-duration">{duration}</span>}
  </div>
  
  <audio
    id={audioId}
    controls
    preload="metadata"
    class="audio-element"
    aria-label={`Audio player for ${title}`}
  >
    <source src={src} type="audio/mpeg" />
    <source src={src.replace('.mp3', '.ogg')} type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>

  <details class="transcript-details">
    <summary class="transcript-toggle">
      <span>Show transcript</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </summary>
    <div class="transcript-content" id={transcriptId}>
      <div class="transcript-text" set:html={transcript} />
    </div>
  </details>
</div>

<style>
  .audio-player {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--space-md);
    background: var(--color-paper);
  }

  .audio-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--space-sm);
    gap: var(--space-sm);
  }

  .audio-title {
    font-family: var(--font-sans);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
  }

  .audio-duration {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: var(--color-ink-secondary);
    white-space: nowrap;
  }

  .audio-element {
    width: 100%;
    margin-bottom: var(--space-sm);
  }

  .transcript-details {
    margin-top: var(--space-md);
  }

  .transcript-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-sans);
    font-weight: 500;
    color: var(--color-teal);
    padding: var(--space-sm) 0;
    list-style: none;
    user-select: none;
  }

  .transcript-toggle::-webkit-details-marker {
    display: none;
  }

  .transcript-toggle svg {
    transition: transform var(--transition-base);
  }

  .transcript-details[open] .transcript-toggle svg {
    transform: rotate(180deg);
  }

  .transcript-content {
    padding: var(--space-md);
    background: var(--color-paper-dark);
    border-radius: 4px;
    margin-top: var(--space-sm);
  }

  .transcript-text {
    line-height: 1.7;
    color: var(--color-ink);
  }

  .transcript-text p {
    margin-bottom: var(--space-sm);
  }
</style>

<script>
  // Keyboard controls for audio player
  document.addEventListener('DOMContentLoaded', () => {
    const audioElements = document.querySelectorAll('.audio-element');
    
    audioElements.forEach((audio) => {
      // Spacebar to play/pause (when audio has focus)
      audio.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement === audio) {
          e.preventDefault();
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }
      });

      // Arrow keys for seeking (when audio has focus)
      audio.addEventListener('keydown', (e) => {
        if (document.activeElement === audio) {
          if (e.code === 'ArrowLeft') {
            e.preventDefault();
            audio.currentTime = Math.max(0, audio.currentTime - 10);
          } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
          }
        }
      });
    });
  });
</script>
```

### 2.5 Content Collection Schemas

**File: `src/content/config.ts`**

```typescript
import { defineCollection, z } from 'astro:content';

const fieldNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    // Optional: for future image support
    image: z.string().optional(),
  }),
});

const practices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audioUrl: z.string(), // Path relative to /public/audio/
    transcript: z.string(), // Markdown content for transcript
    duration: z.string(), // Format: "5:12"
    pubDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

const study = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['dharma', 'yoga', 'ethics']),
    order: z.number().optional(), // For ordering study materials
  }),
});

export const collections = {
  'field-notes': fieldNotes,
  'practices': practices,
  'study': study,
};
```

### 2.6 Example Field Notes Markdown

**File: `src/content/field-notes/dharma-in-burning-world.md`**

```markdown
---
title: "Dharma in a Burning World: Why Practice Still Matters"
description: "An origin story and reflection on why Situated Laboratories exists now, in a moment of climate crisis, political breakdown, and collective anxiety."
pubDate: 2025-01-27
tags: ["dharma", "climate", "practice"]
featured: true
---

# Dharma in a Burning World

[Essay content here...]
```

### 2.7 Example Practice Markdown

**File: `src/content/practices/three-breath-reset.md`**

```markdown
---
title: "Three-Breath Reset Before Reading the News"
description: "A 3-5 minute grounding practice to help your nervous system prepare for difficult news."
audioUrl: "/audio/three-breath-reset.mp3"
duration: "3:45"
pubDate: 2025-01-27
featured: true
transcript: |
  # Transcript: Three-Breath Reset

  [Transcript content here...]
---

# Three-Breath Reset Before Reading the News

[Practice description and instructions...]
```

---

## Phase 3: Pages & Routing (Week 2)

### 3.1 Home Page

**File: `src/pages/index.astro`**

```astro
---
// index.astro - Home page from DESIGN_PLAN.md
import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import EssayCard from '../components/EssayCard.astro';
import PracticeTile from '../components/PracticeTile.astro';
import NewsletterSignup from '../components/NewsletterSignup.astro';

// Get featured content
const fieldNotes = await getCollection('field-notes');
const practices = await getCollection('practices');

const featuredEssay = fieldNotes
  .filter(note => note.data.featured)
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())[0];

const featuredPractice = practices
  .filter(practice => practice.data.featured)
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())[0];

const latestEssays = fieldNotes
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  .slice(0, 3);
---

<BaseLayout title="Yoga, Dharma & Social Justice Practice" description="Experiments in liberation for a burning world.">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content split-asymmetric">
        <div class="hero-text">
          <p class="hero-overline">YOGA · DHARMA · SOCIAL JUSTICE</p>
          <h1>Yoga, dharma & social justice practice for a burning world.</h1>
          <p class="hero-description">
            Situated Laboratories is a home for practice, study, and experiment at the intersection of Buddhist insight, Ashtanga yoga, and collective liberation.
          </p>
          <div class="hero-actions">
            {featuredEssay && (
              <a href={`/field-notes/${featuredEssay.slug}`} class="btn btn-primary">
                Read the latest Field Note
              </a>
            )}
            {featuredPractice && (
              <a href={`/practice-lab/${featuredPractice.slug}`} class="btn btn-secondary">
                Try a 5-minute practice
              </a>
            )}
          </div>
        </div>
        <div class="hero-visual">
          <!-- Contour line SVG or illustration -->
          <div class="hero-card">
            <svg class="contour-pattern" viewBox="0 0 400 300" aria-hidden="true">
              <!-- Topographic contour lines SVG -->
            </svg>
            <p class="hero-caption">
              Every mind is a situated laboratory. We practice with the conditions we've got.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Three Pillar Tiles -->
  <section class="pillars">
    <div class="container">
      <div class="grid-3">
        <div class="pillar-card">
          <div class="pillar-icon">
            <!-- Field Notes icon -->
          </div>
          <h3>Field Notes</h3>
          <p>Essays on suffering, systems, and the path.</p>
          <a href="/field-notes">Explore →</a>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">
            <!-- Practice Lab icon -->
          </div>
          <h3>Practice Lab</h3>
          <p>Simple practices for nervous systems under pressure.</p>
          <a href="/practice-lab">Explore →</a>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">
            <!-- Study icon -->
          </div>
          <h3>Study</h3>
          <p>Friendly guides to sutras, suttas, and ethics in context.</p>
          <a href="/study">Explore →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Content (60/40 split) -->
  {featuredEssay && featuredPractice && (
    <section class="featured">
      <div class="container">
        <div class="split-asymmetric">
          <div class="featured-essay">
            <span class="tag">Field Note</span>
            <h2>{featuredEssay.data.title}</h2>
            <p>{featuredEssay.data.description}</p>
            <a href={`/field-notes/${featuredEssay.slug}`}>Read this essay →</a>
          </div>
          <div class="featured-practice">
            <span class="tag">Practice</span>
            <h3>{featuredPractice.data.title}</h3>
            <p>{featuredPractice.data.description}</p>
            <a href={`/practice-lab/${featuredPractice.slug}`}>
              Listen ({featuredPractice.data.duration})
            </a>
          </div>
        </div>
      </div>
    </section>
  )}

  <!-- Quote Block -->
  <section class="quote-block">
    <div class="container">
      <blockquote class="quote-with-contour">
        <p>"Freedom is not found by escaping conditions, but by seeing clearly how we are conditioned — and responding with wisdom instead of habit."</p>
        <cite class="quote-attribution">Situated Laboratories</cite>
      </blockquote>
    </div>
  </section>

  <!-- About Strip -->
  <section class="about-strip">
    <div class="container">
      <p>
        Situated Laboratories is run by Richard Donohue, a geographer, ex-professor, and dharma and yoga practitioner with a justice-oriented orientation.
      </p>
      <a href="/about">Learn more →</a>
    </div>
  </section>

  <!-- Newsletter Signup -->
  <section class="newsletter-strip">
    <div class="container">
      <NewsletterSignup />
    </div>
  </section>
</BaseLayout>

<style>
  /* Hero styles */
  .hero {
    padding: var(--space-2xl) 0;
  }

  .hero-overline {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-rust);
    margin-bottom: var(--space-sm);
  }

  .hero h1 {
    margin-bottom: var(--space-md);
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-ink-secondary);
    margin-bottom: var(--space-lg);
  }

  .hero-actions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    border-radius: 4px;
    font-weight: 500;
    transition: var(--transition-base);
  }

  .btn-primary {
    background: var(--color-teal);
    color: var(--color-paper);
  }

  .btn-primary:hover {
    background: var(--color-teal-light);
    text-decoration: none;
  }

  .btn-secondary {
    background: transparent;
    color: var(--color-teal);
    border: 1px solid var(--color-teal);
  }

  .btn-secondary:hover {
    background: var(--color-teal);
    color: var(--color-paper);
    text-decoration: none;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      padding: var(--space-xl) 0;
    }

    .hero-actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      text-align: center;
    }
  }
</style>
```

### 3.2 RSS Feed

**File: `src/pages/rss.xml.ts`**

```typescript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const fieldNotes = await getCollection('field-notes');
  
  return rss({
    title: 'Situated Laboratories - Field Notes',
    description: 'Essays on suffering, systems, and the path.',
    site: context.site || 'https://situatedlaboratories.com',
    items: fieldNotes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/field-notes/${note.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
```

---

## Phase 4: SEO & Performance (Week 3)

### 4.1 SEO Utilities

**File: `src/utils/seo.ts`**

```typescript
// seo.ts - SEO utilities

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: Date;
  modifiedTime?: Date;
  author?: string;
}

export function generateSEOTags(props: SEOProps) {
  const {
    title,
    description,
    image,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Richard Donohue',
  } = props;

  const siteUrl = 'https://situatedlaboratories.com';
  const fullTitle = `${title} | Situated Laboratories`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: siteUrl,
      siteName: 'Situated Laboratories',
      images: [{ url: imageUrl }],
      type,
      publishedTime: publishedTime?.toISOString(),
      modifiedTime: modifiedTime?.toISOString(),
      authors: [author],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: imageUrl,
    },
  };
}
```

### 4.2 Structured Data

**File: `src/utils/schema.ts`**

```typescript
// schema.ts - JSON-LD structured data

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishedTime: Date;
  modifiedTime?: Date;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishedTime.toISOString(),
    dateModified: (article.modifiedTime || article.publishedTime).toISOString(),
    author: {
      '@type': 'Person',
      name: article.author || 'Richard Donohue',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Situated Laboratories',
    },
  };
}
```

---

## Phase 5: Deployment (Week 4)

### 5.1 Astro Configuration

**File: `astro.config.mjs`**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://situatedlaboratories.com',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using custom CSS
    }),
    sitemap(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: false, // Single CSS file for better caching
    },
  },
});
```

### 5.2 Netlify Configuration

**File: `netlify.toml`**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/field-notes/*"
  to = "/field-notes/:splat"
  status = 200

[[redirects]]
  from = "/practice-lab/*"
  to = "/practice-lab/:splat"
  status = 200

# Headers for performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/audio/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## Performance Checklist

- [ ] Fonts: Use variable fonts, subset to required characters
- [ ] CSS: Verify <50KB gzipped initial load
- [ ] Images: WebP format with fallbacks, lazy loading
- [ ] SVGs: Optimize with SVGO, verify <5KB each
- [ ] Audio: Compress MP3s, use appropriate bitrate
- [ ] Critical CSS: Inline above-the-fold styles if needed
- [ ] Caching: Set appropriate cache headers

---

## Accessibility Checklist

- [ ] Skip link implemented and tested
- [ ] All interactive elements keyboard navigable
- [ ] Focus states visible (2px teal outline)
- [ ] Color contrast verified (WCAG AA)
- [ ] All images have alt text
- [ ] Audio players have transcripts
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Screen reader testing

---

## Next Steps

1. Create SVG contour patterns (hero, divider, quote accent)
2. Set up font hosting (self-host or Google Fonts)
3. Create initial content (first Field Note, first Practice)
4. Test on multiple devices and browsers
5. Deploy to staging environment
6. Final accessibility audit
7. Launch!

---

> "Implementation, like practice, requires both structure and flexibility. Build the foundation well, then iterate."
