---
name: Studio Ara
description: A creative agency showcasing impactful, minimalist design through geometric discipline.
colors:
  primary: "#e54b3c"
  secondary: "#f1c40f"
  neutral-bg: "#ecf0f1"
  neutral-text: "#2c3e50"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontWeight: 500
    lineHeight: 1.375
rounded:
  full: "9999px"
spacing:
  md: "24px"
  lg: "32px"
components:
  nav-link:
    textColor: "{colors.neutral-text}"
    typography: "{typography.body}"
---

# Design System: Studio Ara

## Overview

**Creative North Star: "Ikko Tanaka Geometric Discipline"**

Studio Ara embraces a visual world built from flat geometric planes of color, where the layout grid acts as a structural authority. The aesthetic is heavily inspired by Ikko Tanaka's posters: a calm paper ground punctuated by bold vermilion and gold, anchored by deep indigo lines. Typography is monumental, employing a minimal grotesk face tightly tracked. The tension between strict architectural layout rules and vibrant, abstract illustration forms the core identity.

**Key Characteristics:**
- **Explicit Grids:** Content blocks are strictly bounded by visible borders mimicking table structures.
- **Flat Planes:** Solid vectors and CSS colors replace drop shadows, photography, or ambient lighting.
- **Monumental Type:** Display typography is treated as a structural graphic element rather than mere text.
- **Primary Restraint:** The palette is incredibly tight—only four colors compose the entire visual field.

## Colors

A highly restrained four-color palette derived from classic mid-century poster design.

### Primary
- **Vermilion** (#e54b3c): The primary accent color. Used for bold geometric illustration blocks, hover states, and navigational highlights.

### Secondary
- **Gold** (#f1c40f): The counterweight to Vermilion. Used sparingly for accent geometric elements and background hover effects to create warmth.

### Neutral
- **Paper Ground** (#ecf0f1): The default background color. Cooler and calmer than pure white, evoking physical print media.
- **Indigo Ink** (#2c3e50): The default text and structural color. Replaces pure black to provide a softer, deeper contrast that harmonizes with the bold accents.

### Named Rules
**The Flat Paint Rule.** Colors are applied as flat, solid planes. No gradients, no soft shadows, no ambient lighting.

## Typography

**Display Font:** Archivo (with Helvetica Neue)
**Body Font:** Archivo (with Helvetica Neue)

**Character:** A minimal, assertive grotesk. Used tightly tracked at large sizes to feel structural and architectural.

### Hierarchy
- **Display** (700 weight, clamp/large scale, 1.05 line-height): Used exclusively for the hero headline. Tracks extremely tight to form a solid typographic block.
- **Title** (700 weight, xl/2xl size): Used for section headers.
- **Body** (500 weight, base/lg size, 1.375 line-height): Used for standard paragraph text and navigation items.
- **Label** (600 weight, sm size, wide tracking): Used for upper-case navigational elements and footers.

### Named Rules
**The Typographic Block Rule.** Display text is treated as a structural rectangle. Line breaks are deliberate to maintain edge alignment rather than arbitrary flow.

## Layout

The spatial model relies on a hard, visible grid. The page is divided into large rectangular regions separated by 1px Indigo borders (`border-indigo/20`). On desktop, a distinct narrow left column houses geometric markers, creating a table-like structure that runs down the page. Spacing is ample (p-6 to p-12) to ensure the strict grid feels intentional rather than cluttered.

## Elevation & Depth

No shadows. Depth is conveyed strictly through spatial division (grid lines) and overlapping planes of flat color. The only exception is a subtle drop shadow on the floating footer logo, emphasizing its distinct actionable nature.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Geometric markers and typography sit directly on the Paper ground.

## Shapes

Sharp corners entirely. The only curves permitted are perfect circles (e.g., geometric markers, logo container) and the organic contours of specific vector illustrations. Borders are explicitly drawn (`border-r`, `border-b`) rather than implied.

## Components

### Geometric Markers
- **Style:** Small arrangements of 12px squares and circles in Vermilion, Indigo, and Gold.
- **Role:** Replaces traditional icons or bullet points to anchor sections.

### Navigation Links
- **Typography:** Archivo, uppercase, wide tracking.
- **Hover / Focus:** A Vermilion underline expands from the left via `transition-all duration-300`, shifting the text color.

## Do's and Don'ts

### Do:
- **Do** use strict visible borders to divide content sections.
- **Do** treat typography as a graphic element with deliberate line breaks.
- **Do** use the exact four-color palette.

### Don't:
- **Don't** use gradients, bevels, or soft shadows to create depth.
- **Don't** introduce secondary fonts or thin/light font weights.
- **Don't** use rounded corners on structural layout blocks or containers.
