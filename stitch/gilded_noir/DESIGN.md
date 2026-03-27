# Design System Strategy: The Cinematic Sovereign

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Noir Stage."** 

This system is not a website; it is a digital proscenium. It rejects the "flatness" of modern SaaS design in favor of a moody, cinematic editorial experience that blends the high-fashion austerity of *Vogue* with the weight of ancient royalty. We break the "template" look through intentional asymmetry—placing oversized, high-contrast serif typography against vast "empty" charcoal voids—and by using dramatic, low-key lighting in imagery to create depth. Every element must feel curated, heavy, and intentional.

## 2. Colors: Tonal Depth & Metallic Accents
We define space through shadow, not lines. Our palette relies on a "Midnight" foundation with "Gilded" highlights.

### The Palette Roles
*   **Surface & Background:** Use `surface` (#131313) as the default. For depth, layer `surface_container_lowest` (#0e0e0e) to create a "void" effect, or `surface_container_high` (#2a2a2a) to suggest a raised platform.
*   **Primary (The Gold):** `primary` (#f2ca50) and `primary_container` (#d4af37). Use these for high-contrast serif headings to mimic gold-leaf embossing.
*   **Secondary (The Crimson):** `secondary_container` (#920703). Reserved exclusively for high-stakes calls to action and critical highlights. It represents the "red velvet" of the theater.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Sectioning must be achieved through background shifts. For example, a hero section in `surface` may transition into a gallery section in `surface_container_low`. If a boundary is required, use a "light-leak" gradient—a 1px tall linear gradient transitioning from `transparent` to `outline_variant` (at 20% opacity) and back to `transparent`.

### The "Glass & Gradient" Rule
To mimic the sheen of silk or polished marble, use glassmorphism on floating elements (like navigation bars or hovering cards). Use `surface_bright` at 40% opacity with a `backdrop-filter: blur(20px)`. 

## 3. Typography: The Editorial Voice
Typography is the primary visual ornament of this system.

*   **Display & Headlines (Noto Serif):** These are your "Statement" pieces. Use `display-lg` for hero titles. Ensure letter-spacing is slightly tightened (-2%) to enhance the high-contrast "Vogue" feel. Always render in `primary_container` (Gold).
*   **Body (Manrope):** A modern, clean sans-serif that provides a "technical" counterpoint to the ornate headlines. Use `body-md` for standard descriptions. 
*   **Labels (Manrope All-Caps):** Use `label-md` with 15% letter-spacing for sub-headings and small metadata. This evokes the feeling of a luxury brand tag.

## 4. Elevation & Depth: Tonal Layering
In a "Noir" system, shadows are not just for depth—they are for mystery.

*   **The Layering Principle:** Avoid traditional drop shadows. Instead, stack your containers. Place a `surface_container_highest` card on top of a `surface_dim` background. The subtle 2-3% difference in hex value provides a sophisticated "lift" that looks expensive.
*   **Ambient Shadows:** If a card must "float" (e.g., an image in a lightbox), use a shadow color tinted with `#000000` at 60% opacity with a 40px-60px blur. It should feel like an object blocking a stage light, not a digital effect.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. It should be barely perceptible—a "whisper" of an edge.

## 5. Components: The Sovereign Elements

### Buttons
*   **Primary (Crimson):** Solid `secondary_container` background with `on_secondary` text. No rounded corners (`0px`). Use `spacing-6` for horizontal padding to create an elongated, elegant silhouette.
*   **Secondary (Gold):** Ghost style. A `primary_container` border (at 30% opacity) with `primary` text. 
*   **Interactive State:** On hover, the background should subtly shift to a radial gradient: `primary_container` to `primary`.

### Cards & Lists
*   **Forbid Dividers:** Never use horizontal rules. Use `spacing-8` or `spacing-12` to create "breath" between items. 
*   **The "Marble" Hover:** When hovering over a list item, change the background to `surface_container_high` and apply a very subtle, low-opacity noise texture to mimic dark marble.

### Input Fields
*   **Styling:** Bottom-border only. Use `outline` (#99907c) for the inactive state. When focused, the border transitions to `primary` (Gold) and glows with a 4px `primary` outer blur.

### Imagery (The Key Component)
*   All imagery must be high-contrast, low-key lighting (Chiaroscuro). 
*   **The "Gold Foil" Frame:** Important portrait imagery should have a `1px` inner border of `primary_container` to act as a digital frame.

## 6. Do’s and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a `display-lg` headline on the far left and a `body-md` paragraph on the far right, leaving a massive charcoal void in the center.
*   **Use Spacing Scale `24` (8.5rem):** Don't be afraid of massive vertical gaps between sections. It signals luxury and "space to breathe."
*   **Tint Your Blacks:** Ensure "black" areas use `surface` (#131313) to allow for the `surface_container_lowest` (#0e0e0e) to feel like a deeper shadow.

### Don't:
*   **Don't Round Corners:** All `borderRadius` values must be `0px`. Roundness is "friendly" and "approachable"; this brand is "formidable" and "elite."
*   **Don't Use Pure White:** Never use #FFFFFF. Use `on_surface` (#e5e2e1) for a softer, more "eggshell" paper feel.
*   **Don't Use Icons in Buttons:** Icons clutter the editorial aesthetic. Use typography alone to convey action whenever possible.