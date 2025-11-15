# Project Decisions & Resolutions

**Purpose:** Document key decisions to ensure consistency across all documents and implementation

---

## Tagline & Hero Text

**Decision:** Use DESIGN_PLAN.md version as primary hero text

**Primary Hero (H1):**
> Yoga, dharma & social justice practice for a burning world.

**Secondary Phrase:**
> Experiments in liberation

**Placement:** 
- Primary: Hero section H1
- Secondary: Can appear in footer, about page, or as supporting text

**Rationale:** Less pretentious, more direct, aligns with "calm radicalism" aesthetic

**Action:** Update PLAN.md Section 4 to reflect this, or note this decision here.

---

## Home Page Structure

**Decision:** Use DESIGN_PLAN.md Section 7 order (more detailed specification)

**Final Order:**
1. Header / Nav
2. Hero (with primary tagline)
3. Three Pillar Tiles (Field Notes, Practice Lab, Study)
4. Featured Content (60/40 split: Essay left, Practice right)
5. Quote Block (dharma teaching with contour line accent)
6. About Strip (short intro + link to About page)
7. Newsletter / Support Strip (email signup + link to Support)
8. Footer with Crisis Resources (always visible)

**FAQ Placement:** FAQ content goes on Support page, not separate section on home

**Rationale:** DESIGN_PLAN.md has more detailed specifications, quote block aligns with dharma zine aesthetic

---

## Naming Conventions

### Study vs Study & Support

**Decision:** Use "Study" consistently

**Rationale:** Simpler, cleaner. Support is separate page. "Study & Support" was confusing.

**Usage:**
- Navigation: "Study"
- Page title: "Study"
- Content collection: `study/`
- Route: `/study/`

### Practice Lab Folder vs Route

**Decision:** Folder = `practices/`, Route = `/practice-lab/`

**Rationale:** 
- Folder name is simpler (`practices/`)
- Route matches PLAN.md naming (`/practice-lab/`)
- Clear separation between content organization and URL structure

**Usage:**
- Content folder: `src/content/practices/`
- Route: `/practice-lab/[...slug]`
- Component references: Use `practice-lab` in URLs, `practices` in code

---

## Tech Complexity Decision

**Decision:** Current technical approach (Astro + Tailwind + Custom CSS) is appropriate

**Rationale:**
1. **Right effort:** Not too little (would require refactoring), not too much (no backend, no CMS)
2. **Sustainable:** One-time setup enables long-term simplicity
3. **Minimal JS:** Astro ships zero JavaScript by default
4. **Text-first:** Content is markdown, no complex tooling
5. **Maintainable:** Well-structured code easier for one person

**Alternative Considered:** Start with custom CSS only (no Tailwind)

**Decision:** Start with Tailwind + Custom CSS. Can remove Tailwind later if it feels unnecessary.

**How it aligns with "minimal tech overhead":**
- No runtime JavaScript (Astro static)
- No backend or database
- Content is simple markdown
- Structure prevents future complexity
- One-time setup, then simple content creation

---

## Font Strategy

**Decision:** Start with Google Fonts, can migrate to self-hosted later

**Rationale:**
- Faster initial setup
- Can optimize later if needed
- Privacy concerns can be addressed with self-hosting if desired
- Variable fonts available via Google Fonts

**Fonts:**
- Fraunces (serif, headlines): weights 600, 700
- Inter (sans, body): weights 400, 500, 600

**Future consideration:** Self-host if privacy becomes concern or if performance needs optimization

---

## Analytics

**Decision:** No analytics initially (per PLAN.md)

**Rationale:**
- Privacy-respecting approach
- Aligns with justice-oriented ethos
- Can add Plausible/Fathom later if needed
- Focus on content, not metrics

**Future:** If analytics added, use privacy-respecting option (Plausible or Fathom)

---

## Newsletter Provider

**Decision:** Buttondown (per PLAN.md)

**Status:** Need to confirm username/account

**Rationale:**
- Privacy-respecting
- Simple embed form
- Low-friction for users
- Aligns with "no marketing funnel" approach

**Action:** Confirm Buttondown username before building newsletter component

---

## FAQ Page Structure

**Decision:** FAQ content goes on Support page, not separate page

**Rationale:**
- Reduces navigation complexity
- Support page is natural home for boundaries/disclaimers
- Keeps home page focused

**FAQ Questions to Include:**
1. Is this therapy or treatment?
2. What is Situated Laboratories?
3. How do I support this work?
4. Can I share practices with others?
5. What if I'm in crisis?
6. How often is new content published?

**Action:** Draft FAQ content before building Support page

---

## Support Page Structure

**Decision:** Combine Contact + Dana/Donations + Future Offerings

**Sections:**
1. Dana teaching (short explanation of generosity practice)
2. Donation options (one-time, recurring)
3. Contact (email or simple form)
4. Future offerings preview (1:1 sessions, groups)
5. FAQ / Boundaries
6. Crisis resources

**Rationale:** PLAN.md specifies combining these elements, reduces page count

**Action:** Draft Support page content structure before building

---

## About Page Content

**Decision:** 500-700 words (per PLAN.md)

**Should Include:**
- Laboratory metaphor explanation
- Your background (geographer, ex-professor, practitioner)
- Why this exists now
- What makes this different (no gurus, no bypass, justice-oriented)
- How to engage

**Tone:** Clear, intelligent, non-performative (per PLAN.md Section 7.1)

**Action:** Draft About page content before building

---

## Study Page Structure

**Decision:** Simple hub with explainers and reading lists

**Sections:**
1. Introduction paragraph
2. Dharma Foundations
   - Four Noble Truths explainer
   - Eightfold Path explainer
   - Reading list: "Three starting points for dharma + justice"
3. Yoga Foundations
   - Eight limbs of yoga explainer
   - Reading list: "Three starting points for yoga as path, not performance"
4. Ethics & Justice
   - How ethics intersect with practice
   - Future: "Ethics, Speech, and Online Life" series preview

**Rationale:** PLAN.md specifies lightweight at launch, can expand later

**Action:** Create Study page wireframe or content outline

---

## Content Cadence

**Decision:** Humane, sustainable cadence (per PLAN.md Section 13)

**Target:**
- 1 Field Notes essay every 2-4 weeks (can adjust)
- 1 new practice every 1-2 months
- Study materials: add as capacity allows

**Rationale:** Sustainable for one person, prevents burnout, aligns with "humane scope" goal

**Note:** This is a guideline, not a requirement. Adjust based on capacity.

---

## Audio Hosting

**Decision:** Phase 1 - Host in `/public/audio/` (per PLAN.md)

**Rationale:**
- Simple, works for small scale
- No additional service needed
- Netlify/Vercel can handle small audio files

**Future Considerations:**
- Phase 2: Cloudflare R2 or AWS S3 if files grow
- Phase 3: Dedicated podcast host only if advanced features needed

**File Size Target:** <5MB for 5-minute practices (compressed MP3)

---

## Domain

**Decision:** Use `situatedlaboratories.com` (per PLAN.md)

**Status:** Confirm domain availability/ownership

**Action:** Verify domain before deployment

---

## Summary of Actions Needed

Before building:
- [ ] Confirm Buttondown username
- [ ] Verify domain availability
- [ ] Draft About page content (500-700 words)
- [ ] Draft Support page structure
- [ ] Draft FAQ questions
- [ ] Create Study page outline
- [ ] Decide: Tailwind from start or add later?

During build:
- [ ] Follow DESIGN_PLAN.md for home page structure
- [ ] Use "Study" consistently (not "Study & Support")
- [ ] Use folder `practices/` but route `/practice-lab/`
- [ ] Implement primary tagline from DESIGN_PLAN.md
- [ ] Keep FAQ on Support page

---

> "Decisions made clearly prevent confusion later. Document them, then build."
