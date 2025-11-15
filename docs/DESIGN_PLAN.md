# Situated Laboratories – Design System & Landing Page Spec (v0.2)

_Aesthetic: calm radicalism · “dharma zine meets essay site” · anti–wellness-industrial-complex_

---

## 1. Visual Identity & Aesthetic

### 1.1 Core Visual Concept

- **Vibe:** Calm radicalism. Feels like reading a thoughtful dharma zine, not browsing a lifestyle brand.
- **Metaphor:** “Earth + ink + contour lines.”
  - Earth = warm paper background.
  - Ink = strong typography, minimal line art.
  - Contour lines = subtle nod to geography and “terrain of mind.”

**Distinctive element:**  
Subtle **topographic line patterns** used sparingly:
- In the hero background (faint, low-contrast).
- As thin horizontal section dividers (single contour line).
- In quote blocks (a vertical contour line instead of a generic quote glyph).

These should be **SVG**, monochrome, <5KB each.

---

### 1.2 Color Palette

_Base idea: warm, accessible, high-contrast. “Earth + ink” with a teal accent and rust highlights._

- **Background (paper):** `#F7F3EC`
- **Primary text (ink):** `#151515`
- **Secondary text / subtle UI:** `#555149`  
  - Darker than previous `#6C6962` to ensure WCAG AA contrast.
- **Primary accent (links, primary buttons):** `#1E5C57` (deep teal)
- **Secondary accent (section lines, chips, highlights):** `#B35632` (rust)
- **Border/line color:** `#D0C5B6` (for hairline dividers, cards)

**Usage:**
- Links & primary actions: teal.
- Important structural accents (chips, key headings, contour lines): rust.
- Background tints: very soft paper-dark variants (`#EFE5D8`).

---

### 1.3 Typography

**Headlines (H1–H2):**  
- **Font:** Fraunces (or similar) – evokes text + poster / activist energy.  
- Weights: ~600–700.  
- Tracking: slightly tight (-1 to -2).  
- Sizes:
  - H1 desktop: clamp(2.5rem, 3vw, 3.3rem)
  - H2 desktop: ~2.0rem
  - Mobile: scale down via clamp.

**Body & UI text:**  
- **Font:** Inter / Work Sans / Source Sans.  
- Weight: 400 for body, 500–600 for labels.  
- Size:
  - Body: 1rem–1.05rem
  - Line-height: 1.6–1.8

**Quotes / Dharma passages:**
- Same body font, italic.
- Distinctive treatment (see 2.3 below).

---

### 1.4 Interaction & Motion

**Principles:**
- Subtle, predictable, no bounce.
- Serve legibility, not entertainment.

**Defaults:**
- Transitions: 150–250ms, `ease-out`.
- Card hover:
  - Slight lift (`transform: translateY(-2px)`).
  - Border darkens slightly.
- Link hover:
  - Underline appears.
  - Color shifts from `#1E5C57` → slightly lighter teal.

---

## 2. Layout Patterns (Desktop)

Viewport reference: 1440px width, main content column ~960–1080px.

### 2.1 Header / Nav

- **Structure:**
  - Left: `Situated Laboratories` (Fraunces)  
    - Small subline: `Yoga · Dharma · Social Justice`
  - Right: nav links in sans:
    - `Field Notes · Practice Lab · Study · About · Support`

- **Styles:**
  - Background: paper (`#F7F3EC`).
  - Border-bottom: 1px `#D0C5B6`.
  - Sticky on scroll.

- **Mobile nav:**
  - Avoid full-screen overlay.
  - Use **slide-down panel**:
    - Tapping hamburger toggles a panel below the header.
    - Page content dims slightly but remains visible and scrollable.
  - Keep at least one key link (`Field Notes`) visible even when collapsed.

---

### 2.2 Hero Section

**Tagline adjustment (less pretentious):**

- Small overline (rust):  
  `YOGA · DHARMA · SOCIAL JUSTICE`
- Main H1:  
  > *Yoga, dharma & social justice practice for a burning world.*
- Subtext (2–3 sentences):  
  Positioning text about experiments in practice; “experiments in liberation” can appear lower as a phrase, but not as main tagline.

**Layout (desktop): 60 / 40 split**

- **Left (60%) – Text:**
  - Overline.
  - H1.
  - Short paragraph.
  - Button row:
    - Primary: `Read the latest Field Note`
    - Secondary (ghost): `Try a 5-minute practice`

- **Right (40%) – Visual:**
  - Card with:
    - Minimal abstract line art (contour lines, path).
    - Short caption like:
      > Every mind is a situated laboratory. We practice with the conditions we’ve got.

---

### 2.3 Quotes / Teachings Block

Distinctive visual treatment to avoid sameness:

- Left-side **vertical contour line** in rust (`#B35632`).
- Quote text in serif or italic sans.
- Example:

```text
| (rust contour line)
|
|  “Freedom is found not by escaping conditions,
|   but by seeing clearly how they shape us.”
````

* Author/Source in small caps sans.

Use this pattern for:

* Dharma quotes.
* Pull quotes from essays.

---

### 2.4 Three Pillar Tiles

Three cards in a row on desktop; stacked on mobile.

* **Field Notes**
* **Practice Lab**
* **Study**

Each card:

* Icon top (simple line icon).
* Title (H3).
* 1–2 line description.
* Small link: `Explore →`

Use **rust** for icon lines or top border to differentiate them from generic content sites.

---

### 2.5 Featured Content (Asymmetric)

Addressing the 50/50 “too rigid” critique:

* **Layout:** 60/40 split instead of 50/50.

**Left (60%) – Featured Essay**

* Tag chip: `Field Note`.
* Title: larger than practice title.
* 2–3-line excerpt.
* Link: `Read this essay →`.

**Right (40%) – Featured Practice**

* Tag chip: `Practice`.
* Title: slightly smaller than essay title.
* One-line description.
* Play icon + duration: `Listen (5:12)`.

On tablet & mobile, these stack with the **essay first**.

---

### 2.6 Crisis & Support Footer

**Footer structure (desktop):**

* Background: darker muted ink (`#151515`), text in `#F7F3EC`.
* Columns:

1. **Identity**

   * `Situated Laboratories`
   * Short line: `Yoga, dharma & social justice practice for difficult times.`

2. **Navigation**

   * `Field Notes`
   * `Practice Lab`
   * `Study`
   * `About`
   * `Support`

3. **Crisis & Support**

   * Line:
     `If you are in immediate distress, please contact local emergency services or a crisis resource.`
   * `U.S.: Call or text 988 for the Suicide & Crisis Lifeline.`
   * Link to support/resources page with more detail.

4. **Legal / Misc**

   * `© 2025 Richard Donohue`
   * Short line about privacy-respecting analytics.

Crisis note is **always visible** in footer on all pages.

---

## 3. Responsive Behavior

### 3.1 Tablet (768–1024px)

* Header: logo + nav, smaller type.
* Hero: text above, visual below (full-width).
* Tiles: 2-up grid, third tile centered on its own row.
* Featured content: stack essay then practice.
* Footer: columns collapse into 2-up or stacked sections.

### 3.2 Mobile (≤ 480–600px)

* Single-column layout.
* Header:

  * Wordmark + hamburger.
  * Slide-down nav panel (no full-screen takeover).
* Hero:

  * Overline, H1, paragraph, buttons stacked.
  * Visual below.
* Tiles:

  * Full-width cards, stacked with 16–20px gaps.
* Featured:

  * Essay card > Practice card.
* Footer:

  * Stacked sections, crisis text stays prominent.

---

## 4. Accessibility & UX Commitments

### 4.1 Keyboard & Focus

* **Skip link**:

  * First element on page:
    `Skip to main content` (visible on focus).
* All interactive elements keyboard navigable.
* Visible focus states:

  * **Links & buttons**: color shift + 2px outline (e.g. teal outline on paper background).
  * No reliance on color alone; use underline or thickness changes.

### 4.2 Color Contrast

* Verify via WCAG 2.1 AA:

  * Body text `#151515` on `#F7F3EC` – passes easily.
  * Secondary text `#555149` on `#F7F3EC` – verify contrast ~4.5:1 or higher.
  * Links/CTAs `#1E5C57` on `#F7F3EC` – confirm contrast and adjust if needed.

No text under 16px uses the lighter gray against the paper background.

### 4.3 Media & Motion

* All audio practices:

  * Have transcripts.
  * Use a simple player with clear controls.
* No autoplay audio/video.
* No rapidly moving animations or parallax.

---

## 5. Performance & Implementation Notes

### 5.1 Performance Budget

* **Fonts:**

  * Max 2 families (serif + sans), 2 weights each.
  * Use variable fonts if available.
* **CSS:**

  * Target < 50KB gzipped initial CSS.
  * Inline critical CSS for above-the-fold hero if needed.
* **JS:**

  * Very light. No heavy frameworks if avoidable.
  * Use progressive enhancement for nav and audio player.
* **Images:**

  * Abstract SVGs for contour lines + icons (< 5KB each).
  * No hero photos by default.

Goal: fast Time-to-Content, even on mediocre mobile connections.

---

## 6. Newsletter & Support Messaging

### 6.1 Newsletter Copy

Tone: invitational, not defensive.

* Heading: `Stay in the experiment`

* Subtext:
  *Infrequent notes when there’s something worth saying — new essays, practices, and reflections.*

* Fields:

  * Email input + `Get updates` button.

* No multi-step funnel; one field only.

### 6.2 Support / Dana

On the **Support** page and surfaced lightly in footer:

* Short teaching note on **dana**:

  * Generosity as a reciprocal practice.
* Clear statement:

  * “This work takes time and care. If you’re resourced and find it helpful, you’re invited to support it.”
* Options:

  * One-time donation + optional recurring.
  * Sliding-scale guidelines (e.g., suggested ranges, with “pay what you can” option).

Link in header nav + mention on relevant pages.

---

## 7. Landing Page Sections Summary (Desktop)

In order:

1. **Header / Nav**
2. **Hero** – Yoga, dharma & social justice heading; CTAs.
3. **Three Pillar Tiles** – Field Notes / Practice Lab / Study.
4. **Featured Content (60/40)** – primary essay + secondary practice.
5. **Quote Block** – dharma or teaching highlight.
6. **About Strip** – short intro + link to full About.
7. **Newsletter / Support Strip** – email capture + link to support.
8. **Footer with Crisis Resources** – nav, crisis note, legal.

---

> “Design, like practice, should ease the mind’s grip — not tighten it. When the page is quiet, the dharma can speak.”
