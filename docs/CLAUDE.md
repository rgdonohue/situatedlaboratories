# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Situated Laboratories** is a dharma and yoga practice site focused on Buddhist insight, Ashtanga yoga, and recovery-oriented practices. The site serves people navigating recovery, burnout, and life in late capitalism with grounded, nervous-system-aware approaches.

### Core Content Pillars

1. **Practice Lab**: Guided audio/video practices (5-25 minutes) for meditation, breath work, and gentle movement
2. **Field Notes**: Essays on suffering, systems, and practice applied to recovery, burnout, and structural harm
3. **Study & Support**: Plain-language dharma/yoga explainers, reading lists, and occasional group offerings

### Tone & Values

- Direct, sober, and warm—no guru culture or spiritual bypass
- Justice-aware: names capitalism, white supremacy, climate collapse, digital fascism
- Always ties systemic critique back to embodied practice
- Clear boundaries: this is NOT therapy, medical care, or crisis support

## Architecture

The site will be built as a static site with markdown-based content. Planned tech stack (per PLAN.md):

- Static site generator options: Eleventy, Astro, Hugo, or Next.js
- Markdown-based content management for essays and practice notes
- Self-hosted or privacy-respecting audio/video embedding
- RSS feed for Field Notes
- Clean, typographically-strong aesthetic echoing 2010s Situated Labs design

### Content Structure

```
/practice-lab/     # Guided practices (audio/video + text)
/field-notes/      # Essays and reflections
/study/            # Dharma/yoga explainers and resources
/about/            # About page and FAQ
```

## Development Commands

(To be added once tech stack is chosen)

## Content Guidelines

### Practice Lab Content
- 5-25 minute guided sessions (audio/video)
- Focus on nervous system regulation, not performance
- Categories: breath/bandhas, ethics (yamas/niyamas), pratyahara, concentration
- Include 2-5 minute micro-practices for acute distress

### Field Notes Essays
- Title format: Direct, honest, non-performative
- Always include boundary/context statements when discussing recovery or health
- Link systemic analysis to embodied practice
- Tone: intelligent, plain-spoken, justice-aware

### Study Materials
- Plain-language explanations of Four Noble Truths, Eightfold Path, Eight Limbs
- Avoid Sanskrit overload; use English with occasional parenthetical Sanskrit
- Focus on daily-life application, not abstract philosophy

## Important Boundaries

Every practice or health-related content must include appropriate disclaimers:
- This is not therapy, medical care, or crisis support
- Encourage working with licensed clinicians when needed
- Point to crisis resources (988 in US, etc.) for acute distress
- Clearly distinguish spiritual practice from clinical treatment

## Design Principles

- Calm neutrals with single accent color (deep teal or rust)
- Plenty of whitespace—nothing "busy"
- Typography-driven design
- Simple, minimal icons for the three content pillars
- Privacy-respecting: no surveillance tech, minimal analytics

## Future Features

- Tagging system for cross-referencing (e.g., "craving," "grief," "nervous system")
- Interactive diagrams for certain essays
- Optional member area for small group offerings (only if appropriate)
