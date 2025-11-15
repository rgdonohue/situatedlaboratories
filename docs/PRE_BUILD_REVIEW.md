# Pre-Build Review: Consistency & Skillfulness Check

**Date:** 2025-01-27  
**Purpose:** Review all planning documents for consistency, alignment with project intentions, and right effort before building

---

## Executive Summary

**Overall Assessment:** ✅ **Strong foundation with minor inconsistencies to resolve**

The documents are well-aligned with project intentions (minimal tech, sustainability, justice-oriented). A few inconsistencies need resolution, and one philosophical question about tech complexity deserves consideration before building.

---

## ✅ Strengths

1. **Clear project vision** - PLAN.md articulates purpose, audience, and boundaries well
2. **Comprehensive design system** - DESIGN_PLAN.md provides detailed specifications
3. **Actionable technical plan** - TECHNICAL_IMPLEMENTATION.md addresses all gaps
4. **Accessibility-first approach** - Aligns with justice-oriented ethos
5. **Sustainable scope** - 4-week timeline is realistic for one person

---

## ⚠️ Inconsistencies to Resolve

### 1. Tagline / Hero Text (HIGH PRIORITY)

**PLAN.md (Section 4):**
> "Yoga, Dharma & Social Justice Practice"  
> *Experiments in liberation for a burning world.*

**DESIGN_PLAN.md (Section 2.2):**
> Main H1: *Yoga, dharma & social justice practice for a burning world.*  
> (Note: "experiments in liberation" can appear lower as a phrase, but not as main tagline)

**Issue:** Two different taglines. Which is the primary?

**Recommendation:** Use DESIGN_PLAN.md version as primary hero text, keep "Experiments in liberation" as secondary phrase or footer tagline. This is less pretentious and more direct.

**Action:** Update PLAN.md to reflect this decision, or create a decision document.

---

### 2. Home Page Section Order (MEDIUM PRIORITY)

**PLAN.md (Section 6.1) lists:**
1. Hero Block
2. Three Tiles (Content Pillars)
3. Featured Essay + Featured Practice
4. Short About Strip
5. Support & Updates Strip
6. FAQ / Boundaries Preview

**DESIGN_PLAN.md (Section 7) lists:**
1. Header / Nav
2. Hero
3. Three Pillar Tiles
4. Featured Content (60/40)
5. Quote Block
6. About Strip
7. Newsletter / Support Strip
8. Footer with Crisis Resources

**Issue:** PLAN.md includes "FAQ / Boundaries Preview" but DESIGN_PLAN.md doesn't. DESIGN_PLAN.md includes "Quote Block" which PLAN.md doesn't mention.

**Recommendation:** Use DESIGN_PLAN.md order (it's more detailed). Add FAQ link to About Strip or Support page rather than separate section. Quote block aligns with dharma zine aesthetic.

**Action:** Update PLAN.md Section 6.1 to match DESIGN_PLAN.md, or document the decision.

---

### 3. Study vs Study & Support Naming (LOW PRIORITY)

**PLAN.md:** Uses "Study & Support" in some places, "Study" in navigation

**DESIGN_PLAN.md:** Uses "Study" consistently

**Issue:** Minor inconsistency in naming

**Recommendation:** Use "Study" consistently (simpler, cleaner). Support is separate page.

**Action:** Standardize to "Study" throughout.

---

### 4. Content Collection Naming (LOW PRIORITY)

**PLAN.md:** Uses "Practice Lab" consistently

**TECHNICAL_IMPLEMENTATION.md:** Uses both "practices" (folder) and "practice-lab" (route)

**Issue:** Folder name vs route name inconsistency

**Recommendation:** Keep folder as `practices/` (simpler), route as `/practice-lab/` (matches PLAN.md). Document this clearly.

**Action:** Add note to TECHNICAL_IMPLEMENTATION.md explaining this naming convention.

---

## 🤔 Philosophical Question: Tech Complexity vs "Minimal Tech Overhead"

### The Question

PLAN.md emphasizes: "Start text-first, with minimal tech and production overhead"

Current technical plan includes:
- Astro (good, minimal)
- Tailwind CSS + Custom CSS (is this too much?)
- Multiple component files
- Design token system
- SEO utilities
- Structured data

### Analysis

**Arguments FOR current approach (it's skillful):**
- ✅ Design system prevents future refactoring
- ✅ Accessibility built-in saves time later
- ✅ Component structure scales sustainably
- ✅ Astro ships zero JS by default (truly minimal)
- ✅ One-time setup, then simple markdown content

**Arguments AGAINST (maybe too much?):**
- ❌ Could start even simpler (just markdown + basic CSS)
- ❌ Tailwind might be overkill for text-first site
- ❌ Design tokens system adds complexity

### Recommendation: **Current approach is skillful**

**Rationale:**
1. **Right effort principle:** Not too little (would require refactoring later), not too much (not building a CMS or complex backend)
2. **Sustainable:** One-time setup enables long-term simplicity
3. **Aligns with intentions:** Still text-first (content is markdown), minimal JS (Astro ships zero), accessible (justice commitment)
4. **Maintainable:** Well-structured code is easier for one person to maintain

**However:** Consider starting with custom CSS only (no Tailwind) if you want absolute minimalism. Tailwind can be added later if needed.

**Action:** Document this decision in README.md - explain why this level of structure serves "minimal tech overhead" goal.

---

## 📋 Missing Specifications

### 1. FAQ Page Content (MEDIUM PRIORITY)

**PLAN.md mentions:** FAQ / Boundaries Preview, FAQ snippet for reuse

**Missing:** Full FAQ page structure, list of questions

**Recommendation:** Create FAQ page with:
- Is this therapy or treatment?
- What is Situated Laboratories?
- How do I support this work?
- Can I share practices with others?
- What if I'm in crisis?

**Action:** Draft FAQ content before building, or create placeholder structure.

---

### 2. Support Page Structure (MEDIUM PRIORITY)

**PLAN.md mentions:** Support page combining Contact + dana/donations + "work with me"

**Missing:** Detailed page structure, donation integration details

**Recommendation:** Structure Support page with:
- Dana teaching (short explanation)
- Donation options (one-time, recurring)
- Contact form or email
- Future offerings preview (1:1, groups)
- Clear boundaries (not therapy, not crisis work)

**Action:** Draft Support page content structure before building.

---

### 3. About Page Content (MEDIUM PRIORITY)

**PLAN.md mentions:** 500-700 words situating you and the lab metaphor

**Missing:** Specific content outline

**Recommendation:** About page should include:
- Laboratory metaphor explanation
- Your background (geographer, ex-professor, practitioner)
- Why this exists now
- What makes this different
- How to engage

**Action:** Draft About page content before building.

---

### 4. Study Page Structure (LOW PRIORITY)

**PLAN.md mentions:** Short explainers, reading lists

**Missing:** How study materials are organized, displayed

**Recommendation:** Study page structure:
- Introduction paragraph
- Three sections: Dharma Foundations, Yoga Foundations, Ethics & Justice
- Each section: short explainers + reading lists
- Future offerings preview

**Action:** Create Study page wireframe or content outline.

---

## ✅ Alignment Check: Project Intentions

### 1. "Minimal tech overhead" ✅
- Astro ships zero JS by default
- Markdown-first content
- Static site (no backend)
- **Verdict:** Aligned (with note about Tailwind consideration above)

### 2. "Sustainable and maintainable by one person" ✅
- 4-week timeline is realistic
- Clear structure prevents future confusion
- Content is simple markdown
- **Verdict:** Aligned

### 3. "Text-first" ✅
- Content is markdown files
- Audio is secondary
- No complex media production
- **Verdict:** Aligned

### 4. "Privacy-respecting" ✅
- No analytics initially
- No tracking
- Simple newsletter (Buttondown)
- **Verdict:** Aligned

### 5. "Accessibility & Justice commitments" ✅
- Transcripts for all audio
- High contrast design
- Keyboard navigation
- Skip links
- **Verdict:** Aligned

### 6. "No marketing funnel" ✅
- Soft doorway to deeper work
- No aggressive CTAs
- Dana/donations optional
- **Verdict:** Aligned

---

## 🎯 Recommendations Before Building

### Immediate Actions (Before README.md)

1. **Resolve tagline inconsistency**
   - Decision: Use DESIGN_PLAN.md version as primary
   - Update PLAN.md or create decisions document

2. **Clarify home page structure**
   - Use DESIGN_PLAN.md order (more detailed)
   - Document FAQ placement (About or Support page)

3. **Standardize naming**
   - Use "Study" consistently (not "Study & Support")
   - Document folder vs route naming convention

4. **Document tech complexity decision**
   - Explain why current approach serves "minimal tech" goal
   - Note Tailwind consideration (can start without it)

### Before Building (Content Prep)

5. **Draft key content**
   - About page (500-700 words)
   - Support page structure
   - FAQ questions list
   - First Field Note outline

6. **Make final tech decisions**
   - Tailwind vs custom CSS only?
   - Google Fonts vs self-hosted?
   - Buttondown username confirmed?

### During Build (Keep in Mind)

7. **Maintain simplicity**
   - If something feels too complex, simplify
   - Remember: text-first, minimal overhead
   - Can always add features later

8. **Test accessibility early**
   - Don't wait until Week 4
   - Test keyboard nav as you build
   - Verify contrast ratios

---

## 📝 README.md Structure Recommendation

Based on this review, README.md should include:

1. **Project Overview**
   - What Situated Laboratories is
   - Core intentions (from PLAN.md)

2. **Tech Stack & Philosophy**
   - Why Astro (minimal JS, markdown-first)
   - Why this level of structure (sustainable, accessible)
   - How it aligns with "minimal tech overhead"

3. **Quick Start**
   - Link to QUICK_START.md
   - Prerequisites
   - Initial setup commands

4. **Project Structure**
   - Directory layout
   - Key files
   - Content organization

5. **Development Workflow**
   - Creating content (Field Notes, Practices)
   - Running dev server
   - Building for production

6. **Design System**
   - Link to DESIGN_PLAN.md
   - Quick reference (colors, typography)
   - SVG patterns

7. **Accessibility**
   - Built-in features
   - Testing checklist
   - WCAG compliance

8. **Deployment**
   - Hosting setup
   - Domain configuration
   - RSS feed verification

9. **Content Guidelines**
   - Tone and style
   - Boundaries and disclaimers
   - Content cadence

10. **Resources**
    - Links to all planning documents
    - External resources
    - Support/contact

---

## ✅ Final Verdict

**The documents are ready for building** with these minor adjustments:

1. ✅ Resolve tagline inconsistency (use DESIGN_PLAN.md version)
2. ✅ Clarify home page structure (use DESIGN_PLAN.md order)
3. ✅ Standardize naming conventions
4. ✅ Document tech complexity decision in README.md
5. ✅ Draft key content (About, Support, FAQ) before building

**The technical approach is skillful** - it balances:
- Right effort (not too little, not too much)
- Sustainability (one-time setup, long-term simplicity)
- Alignment with intentions (minimal tech, accessible, justice-oriented)

**Recommendation:** Proceed with building, but resolve inconsistencies first. The foundation is solid.

---

## Questions to Answer Before Building

1. **Tagline:** Which is primary? (Recommend: DESIGN_PLAN.md version)
2. **Tailwind:** Start with or without? (Recommend: Start without, add if needed)
3. **FAQ:** Separate page or part of Support? (Recommend: Part of Support)
4. **Fonts:** Google Fonts or self-hosted? (Recommend: Google Fonts initially)
5. **Buttondown:** Username confirmed? (Action needed)

---

> "Right effort means building just enough structure to support sustainable practice, not so much that it becomes the practice itself."
