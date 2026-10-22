---
name: bluepixel-design
description: Use this skill to generate well-branded interfaces and assets for BluePixel, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** BluePixel — UX/UI & software consultancy. Tagline "Software that Feels Right." Voice: professional, dynamic, playful; bilingual ES/EN; "we/you"; no emoji.
- **Primary color:** Pixel Blue `#16A1CD`. Dark anchor: indigo `#1E1C67` + radial gradient `#14135B→#12131F`. Accents (one at a time): magenta `#BE199A`, lime `#EDF074`, green `#88D465`, purple `#7A39CD`, mascot cyan `#00C1D3`.
- **Type:** Red Hat Display (titles), Open Sans (body), Dela Gothic One (display/stickers only).
- **Motif:** the pixel/square — sharp squares as bullets & accents; soft-square radii on cards; indigo-tinted shadows; blue glow for emphasis.
- **Mascot:** "Pixelios" cyan pixel-square character (documented; not shipped as flat assets).

## Files
- `styles.css` — link this; it imports all tokens (`tokens/*.css`) and generated CSS.
- `components/` — React primitives (Logo, Value, Badge, Avatar, Icon, Glyph, Confetti, Gif, …).
- `guidelines/` — foundation specimen cards.
- `ui_kits/website/` — bluepixel.mx homepage recreation.
- `templates/brandbook-deck/` — brand-guidelines slide-deck template.
- `assets/logo/` — wordmark + tagline SVGs.
