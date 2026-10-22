# BluePixel Design System

A design system for **BluePixel** — a UX/UI & software consultancy ("Digital Evolution Partner")
based in Mexico (bluepixel.mx). Voice: **professional, dynamic, playful**. Bilingual (ES/EN).
Brand signature line: **"Software that Feels Right."**

This system is reconstructed from the company's **"Blue Brandbook"** Figma file (mounted as a
read-only virtual filesystem for this build) plus real content pulled from
[bluepixel.mx](https://www.bluepixel.mx/). The brandbook is the source of truth for logo, color,
type and the **Pixelios** mascot; the website supplied the current service/capability copy.

---

## Sources
- **Figma:** "Brandbook (Copy).fig" — pages `Cover`, `BluePixel` (49 brandbook frames), `Pixelios`
  (mascot illustration set). Contained the logo system, color page (Pantone-mapped), type specimens,
  values, stickers, social-media templates and notebook/merch mockups.
- **Website:** https://www.bluepixel.mx/ — service model (Build / Futureproof / Agentic),
  capabilities, featured work, contact.
- No standalone logo file existed as a single mark; the wordmark is copied out as
  `assets/logo/bluepixel-wordmark.svg` and the pixel square is drawn from the brand color.

---

## Brand archetype
**Primary: The Magician.** BluePixel's core promise is transformation — turning a complex,
unproven idea into a working digital platform ("concept, then design," "Build → Futureproof →
Agentic"). The Magician makes change feel inevitable rather than risky; confidence, not hype,
is the persuasion tool.

**Secondary: The Sage.** A consultancy sells expertise as much as delivery. Claims stay specific
and earned ("within 24 hours," not "revolutionary"), and the voice is allergic to buzzwords —
authority comes from precision, not volume.

Use this pairing as a filter on new copy: does it read like an expert quietly making something
hard look solved? If it reads like hype or like a generic agency, it's off-brand.

## Content fundamentals (voice & copy)
- **Tone:** confident and outcome-focused ("platforms that deliver measurable business impact,
  not just great interfaces") balanced with a **playful, human** streak from the mascot brand
  (sticker lines like *"You are not the user."*, *"First, concept. Then, design."*,
  *"Good UX is good business."*).
- **Person:** "**We**" for the company, "**you / your platform**" for the client. Collective,
  partner-like ("a long-term technology partner").
- **Casing:** Titles in **Title Case** or short **Sentence case**; eyebrows/labels **UPPERCASE**
  with wide `0.2em` tracking. Big display words (section dividers, stickers) can be all-caps.
- **Bilingual:** English and Spanish coexist (Eng/Esp toggle). Spanish copy is casual and punny
  in social ("Si no reportas tus horas… hay tabla").
- **Emoji:** not used in product/marketing surfaces. Playfulness comes from the **Pixelios mascot**
  and the accent palette, not emoji.
- **Numbers/claims:** concrete and restrained (e.g. "within 24 hours"), never padded.

### Digital communication principles (do / don't)
Apply these per-surface — the tone shifts slightly by channel, but the rules below never do.

| Principle | Do | Don't |
|---|---|---|
| Direct, not jargon-heavy | "We shipped it in three weeks." | "We leveraged agile methodology to deliver synergistic outcomes." |
| Confident, not hyped | Back claims with a number or timeframe. | Lean on "revolutionary," "cutting-edge," "game-changing." |
| Human, never corporate | Contractions are fine; address the reader as "you." | Passive voice, "stakeholders," "leverage" as a verb. |
| Product copy is clear, not clever | Short, verb-first UI labels ("Send message," "Try again"). | Puns or mascot voice inside error/empty states — save personality for marketing and social. |

**By surface:**
- **Website / proposals:** Sage-forward — precise claims, case-study specifics, minimal adjectives.
- **Product UI:** plain, verb-first, no idioms (bilingual users read literally); errors are helpful,
  not funny.
- **Social / Spanish-market:** Magician-playful, puns welcome, Pixelios can carry the joke instead
  of copy having to.
- **Email / decks:** professional-warm — the Sage's precision with the Magician's confidence,
  no slang, no emoji.

---

## Visual foundations
- **Color:** one hero hue — **Pixel Blue `#16A1CD`** (Pantone 801 c) — over a large neutral field
  (`#F2F3F7` light, `#FFFFFF` cards, `#212529` ink). A **deep-indigo `#1E1C67`** anchors dark
  sections and the signature **radial gradient** (`#14135B → #12131F`) used on covers/heroes.
  A four-hue **secondary accent palette** (Magenta `#BE199A`, Lime `#EDF074`, Green `#88D465`,
  Purple `#7A39CD`) plus the brighter **mascot cyan `#00C1D3`** add energy — used **one at a time**,
  as small pixels/keylines, never as big gradient washes.
- **Type:** **Red Hat Display** for titles (400–900; big headlines are 700–800, tight
  `-0.015em` tracking, `~1.0` leading), **Open Sans** for body/UI (16px, 1.5 leading), and
  **Dela Gothic One** as a chunky display face for stickers, big numbers and hype moments only.
- **Shape language:** the **pixel/square** is the core motif (sharp-cornered squares as bullets,
  accents, logo). UI containers use soft-square radii — `4 / 8 / 16 / 24px` — and `999px` pills for
  badges/avatars. Cards are white with hairline `#E4E7EF` borders and **indigo-tinted** shadows.
- **Backgrounds:** flat brand colors, the light neutral, or the indigo radial gradient. Scattered
  small accent **squares** ("pixel confetti") decorate hero/cover space. Real photography (team,
  mockups) appears in mockup/merch contexts.
- **Motion:** confident ease-out (`cubic-bezier(.22,.61,.36,1)`), ~220ms. Hover = lift +
  colored/blue shadow, underline grows in; press = darken. No bounces, no infinite loops.
- **Elevation:** three-step shadow ramp + a colored **blue glow** for primary emphasis.

---

## Iconography
- **UI glyphs:** a small **13-glyph set** materialized from the source (Search, Settings,
  Notifications, Help, Cart, Alert, Plus, Chevron, Arrow, Trash, Camera, Speaker, Keyboard-arrow).
  Mixed Feather-style strokes + Material-filled shapes. Rendered via the **`Glyph`** component,
  `currentColor`, sized by prop. See `components/icons/`.
- **Brand illustration:** the **Pixelios** mascot — a cyan pixel-square character in many costumes
  (astronaut, unicorn, wizard, headphones…) — is the primary illustrative device. It is vector-
  composed in the source; recreate via the source, don't redraw from memory.
- **Emoji / unicode icons:** not used as an icon system.

---

## Index / manifest
- **`styles.css`** — root entry; `@import`s the token + generated CSS below.
- **`tokens/`** — `fonts.css` (Google Fonts: Red Hat Display, Open Sans, Dela Gothic One),
  `colors.css`, `typography.css`, `spacing.css` (radii/shadow/motion).
- **`components/`** — reusable primitives (see below) + `fig-tokens.css`, `fig-assets.css`.
- **`components/icons/`** — `Glyph` + `icon-data.js` (the 13-glyph set).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand — incl. archetype
  and voice & tone cards).
- **`ui_kits/website/`** — bluepixel.mx marketing homepage recreation.
- **`templates/brandbook-deck/`** — full Brandbook slide-deck template (`BrandbookDeck.dc.html`):
  cover, contents, positioning, archetype, voice & tone, values, logo, color, type, iconography,
  Pixelios, components and applications — 15 slides in total.
- **`assets/`** — logo wordmark + tagline SVGs, brand imagery.

### Components (built)
- **Logo** — BLUEPIXEL wordmark + pixel square; `dark` / `white` variants.
- **Value** — company-value tile; `default` (outlined) + `hover` (indigo glow) variants (+ `ValueFaster` value icon).
- **Badge** — status badge; `standard` / `dot` × 7 colors.
- **Avatar** — `circle` / `square` / `rounded`, with badge/icon/image options.
- **Icon** — size wrapper (sm/md/lg) around **Star**.
- **Star** — star glyph.
- **UI glyph set** — `components/icons/icon-data.js`: 13 UI glyphs as `{ viewBox, body }` SVG
  data (Search, Settings, Notifications, Help, Cart, Alert, Plus, Chevron, Arrow, Trash, Camera,
  Keyboard-arrow). Render inline (see `card-glyphs.html`) or wrap in your own component — kept as
  raw data so it maps 1:1 to the kit's standalone icon symbols rather than inventing a wrapper family.
- **Confetti** — celebratory confetti graphic (skin-tone variants).
- **Gif** — animated-mascot frame graphic.
- **LogoGridHover** — client-logo grid hover state.
- **SectionAgradecimiento** — "thank you" closing section graphic.
- **Scribble** / **Scribble2** — hand-drawn scribble accents (brand doodle marks).
- **Wow** — mascot "wow" expression sticker.
- **SideNavBar** — app side-navigation bar layout.
- **KeyboardArrowDownFilled** — chevron/expander glyph.

### Brand characters — Pixelios
The **Pixelios** are BluePixel's brand characters (not mascots): a cyan pixel-square character with
expressive faces, plus a color-variant family. Extracted as faithful vector art in
`components/pixelios/Components.bundle.js` (self-contained, loads on `window` — `Group43768` the base
character, `Frame13` the color-variant sheet). See `components/pixelios/card-pixelios.html` and the
homepage hero (`ui_kits/website/`) for usage; load the bundle via a `<script>` + link its
`fig-assets.css`.

### Intentional additions
- None. Every built component maps to a source family; the UI glyphs ship as raw `icon-data.js`
  data (not a wrapper component) so nothing is invented on top of the kit vocabulary.

### Full kit coverage
All 24 source component families are now built, including device bezels
(`DevicesAppleIPadAir4`, `DevicesAppleIPhone12ProMax`) and one-off layout/label symbols
(`FormatoDePag`, `Name`, `Speaker`, `Camera`) — kept for completeness even though they are
mockup furniture rather than core brand components. `Avatar` / `Badge` / `Icon` are generic
(Roboto, Material colors) leftovers from a UI template that were kept because the
source defines them, but they are **not** brand-styled — prefer the brand primitives above.

---

## Caveats
- **Fonts** are loaded from Google Fonts (the real brand faces — no substitution). Swap in licensed
  binaries if you have them.
- The **Pixelios mascot** illustrations were not extracted as flat assets (vector-composed in Figma);
  they're documented here rather than shipped. Ask if you want specific mascots exported.
