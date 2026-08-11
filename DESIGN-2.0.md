---
name: Ancient Parchment
colors:
  surface: '#fff9ee'
  surface-dim: '#e1dac6'
  surface-bright: '#fff9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3df'
  surface-container: '#f5edd9'
  surface-container-high: '#f0e8d4'
  surface-container-highest: '#eae2ce'
  on-surface: '#1f1c0f'
  on-surface-variant: '#584141'
  inverse-surface: '#343023'
  inverse-on-surface: '#f8f0dc'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#272727'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d3d3d'
  on-tertiary-container: '#a9a7a7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fff9ee'
  on-background: '#1f1c0f'
  surface-variant: '#eae2ce'
typography:
  headline-xl:
    fontFamily: Cinzel
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Cinzel
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Cinzel
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Cinzel
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Cinzel
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  scroll-padding: 32px
---

## Brand & Style
The design system evokes the tactile, historical atmosphere of a medieval scriptorium or a high-fantasy adventurer's chronicle. It targets users seeking immersion, storytelling, and a sense of "precious" digital artifacts.

The style is **Tactile / Skeuomorphic** with elements of **High-Contrast / Bold** ornamentation. It prioritizes texture and depth to mimic physical materials: weathered vellum, aged leather, forged iron, and melted wax. The emotional response should be one of discovery, authority, and timelessness.

## Colors
The palette is rooted in a warm, fibrous background that simulates aged parchment (`#F4ECD8`). 

- **Primary (Burgundy):** Used for critical actions, headers, and royal sigils. It conveys importance and bloodline.
- **Secondary (Burnt Gold):** Used for ornamentation, borders, and active states. It mimics metallic leafing.
- **Tertiary (Charcoal):** Used for ink-like text and "forged" structural elements like dividers or heavy frames.
- **Rarity Jewels:** Highly saturated tones used strictly for item classification or magical status indicators. They should glow slightly against the neutral background.

## Typography
The typography system uses a hierarchical split between "The Inscription" and "The Chronicle."

- **Headings (Cinzel):** Use for titles, lore fragments, and major navigation. These should appear as if carved into stone or stamped with a heavy press.
- **Body & Labels (Playfair Display):** Use for descriptions and interactive labels. The italic variant of Playfair Display should be used for quotes or flavor text to enhance the "hand-written" feel.
- **Ink Effect:** All text should use the Charcoal color with a very slight (0.5px) blur in certain contexts to simulate ink bleeding into the parchment fibers.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy, centered like a royal decree or an open book. 

- **Desktop:** A 12-column grid with generous outer margins to simulate the edges of a scroll or table.
- **Composition:** Elements are often contained within "Regions" defined by ornate borders rather than loose whitespace. 
- **Rhythm:** Spacing is deliberate and spacious, avoiding the cramped nature of modern SaaS interfaces to maintain a "precious" feel. Use the `scroll-padding` unit for inner contents of containers to ensure text doesn't touch the decorative borders.

## Elevation & Depth
Depth in this design system is achieved through physical metaphors rather than abstract lighting:

- **Surface Layers:** The Parchment background is the lowest layer. Cards and modals are "Overlays" that appear as separate pieces of vellum or heavy wooden slabs.
- **Shadows:** Use dark, multi-layered shadows with low spread to make elements look like they are sitting *on* the parchment. 
- **Inner Depth:** For inputs and "wells," use inner shadows to create the effect of paper being pressed down or ink being absorbed.
- **Ornate Borders:** Use double-lined borders in Burnt Gold. Outer lines are thicker (2px), inner lines are thinner (1px).

## Shapes
Shapes are defined by organic, hand-crafted curves. While the base `roundedness` is set to `2` (8px), certain decorative elements (like the ends of a scroll) should utilize the `rounded-xl` (24px) setting to create soft, rolled edges. 

Avoid sharp 90-degree angles; every corner should feel slightly "worn" or rounded by time.

## Components
- **Buttons (Wax Seals):** Primary buttons are circular or pebble-shaped, colored in Burgundy with a 3D "stamped" effect in the center. Hover states should increase the gold inner-glow.
- **Secondary Buttons (Leather Straps):** Rectangular with high roundedness, Charcoal color, and a subtle "grain" texture.
- **Input Fields:** No background color (transparent) with a 2px bottom border in Charcoal, resembling a line on a ledger. The cursor should be a custom "quill" tip if possible.
- **Cards (Vellum Sheets):** Use a slightly lighter shade of parchment than the background, with deckled or "burnt" edges and a subtle inner-glow.
- **Chips (Ribbons):** Small rectangular tags with a "V" notch cut out of one side, using the Rarity Jewel colors for categorization.
- **Checkboxes:** Styled as hand-drawn "X" marks within a heavy iron-colored square frame.