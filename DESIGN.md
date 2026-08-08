---
name: Midnight Forge
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c5c6cb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e9195'
  outline-variant: '#44474a'
  surface-tint: '#c1c7cf'
  primary: '#ffffff'
  on-primary: '#2b3137'
  primary-container: '#dde3eb'
  on-primary-container: '#5f656c'
  inverse-primary: '#595f66'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffffff'
  on-tertiary: '#3a2e24'
  tertiary-container: '#f3dfd0'
  on-tertiary-container: '#706256'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde3eb'
  primary-fixed-dim: '#c1c7cf'
  on-primary-fixed: '#161c22'
  on-primary-fixed-variant: '#41474e'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#f3dfd0'
  tertiary-fixed-dim: '#d6c3b5'
  on-tertiary-fixed: '#241a11'
  on-tertiary-fixed-variant: '#51443a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style
The design system embodies the atmosphere of a master craftsman’s workshop at midnight—focused, industrial, and high-stakes. It targets a demographic of power users and gamers who appreciate meticulous detail and tactical depth. 

The aesthetic is a hybrid of **Corporate Modern** and **Tactile Minimalism**. It utilizes deep charcoal surfaces, high-contrast functional accents, and structured layouts to evoke the feeling of a "Quartermaster's Ledger." The UI should feel heavy, reliable, and premium, prioritizing clarity for complex data while maintaining a moody, immersive edge.

## Colors
The palette is rooted in a dark-mode-first architecture. The primary background uses a deep slate to prevent pure-black "crushing" of details.

- **Primary & Neutral:** Uses a range of cool grays and slates to maintain a professional, metallic feel.
- **Rarity System:** These colors are tuned for high luminosity against dark backgrounds. Use these for item borders, glow effects, and title text to signify value.
- **Durability Gradient:** A functional semantic scale used for status bars and health indicators.
- **Surface Tiers:** Use incremental shifts in hex values (e.g., #1E293B for cards) to create separation rather than relying on heavy shadows.

## Typography
This design system employs a high-contrast typographic pairing to achieve the "Ledger" feel. 

- **Headlines:** Uses *Playfair Display*. The serif nature provides a classical, authoritative tone that contrasts against the digital environment. Use it for item names, section headers, and significant callouts.
- **Body & UI:** Uses *Inter*. This ensures that inventory counts, descriptions, and technical data remain hyper-legible and functional.
- **Labels:** Small labels should use Inter with a slightly increased letter spacing and uppercase styling to denote metadata and categories.

## Layout & Spacing
The layout follows a strict **8px grid system** to ensure mathematical harmony. 

- **Grid Model:** Use a 12-column fluid grid for desktop and a 4-column grid for mobile.
- **Rhythm:** Spacing between related inventory items should be tight (8px or 12px) to mimic a dense ledger, while major sections should be separated by larger gaps (32px+) to allow the eye to rest.
- **Alignment:** All text elements should be left-aligned to reinforce the "document" feel, except for centered call-to-action buttons.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Outlines**. In this dark environment, shadows are less effective than color-stepping.

- **Background:** The base layer is the darkest surface.
- **Surface/Containers:** Cards and modals use a slightly lighter slate hex. 
- **Borders:** Instead of heavy shadows, use 1px "inner-glow" borders (low opacity white or primary color) to define the edges of items.
- **Interaction:** When an item is hovered, increase the border opacity or apply a subtle rarity-colored outer glow to indicate selection.

## Shapes
The design system utilizes a precise, industrial shape language. 

Elements use a **0.25rem (4px)** base corner radius. This provides a "softened industrial" look—avoiding the harshness of sharp corners while remaining significantly more structured than rounded or pill-shaped consumer apps. This level of roundedness (ROUND_FOUR) should be applied consistently to all buttons, input fields, and inventory slots.

## Components
- **Buttons:** Primary buttons should be solid with high-contrast text. Secondary buttons should use the "ghost" style with a 1px border. All use the 4px corner radius.
- **Inventory Slots:** Square containers with a subtle 1px border. Rarity is indicated by a colored top-border or a glow effect.
- **Input Fields:** Darker than the surface layer to appear "recessed." Use Inter for the input text.
- **Progress Bars (Durability):** Use a thick 8px track. The fill color shifts dynamically based on the percentage (Green > Yellow > Red).
- **Tooltips:** Use a dark, semi-transparent background with a Playfair Display title and Inter body text to provide high-detail item information without cluttering the main view.