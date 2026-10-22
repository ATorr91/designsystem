# BluePixel — Website UI Kit

A faithful marketing-site recreation for **bluepixel.mx**, built entirely on the BluePixel
design-system foundations (Pixel Blue, Red Hat Display / Open Sans, the deep-indigo gradient,
and the playful accent palette). Content is the company's real service copy.

## Files
- `index.html` — the assembled homepage (open this). Tagged `@dsCard group="Website"` and a starting point.
- `parts.jsx` — all section components on `window.BPSite`: `Nav`, `Hero`, `Logos`, `Capabilities`, `ServiceModel`, `Work`, `Contact`, `Footer`, plus a shared `Btn`.

## Screen anatomy (top → bottom)
1. **Nav** — sticky, blurred; logo + links, Eng/Esp toggle, Contact button.
2. **Hero** — indigo gradient, pixel-confetti motif, headline + dual CTA.
3. **Logos** — client wordmark strip (placeholder names).
4. **Capabilities** — accordion of the four capability pillars, each keyed to an accent color.
5. **Service Model** — BUILD · Futureproof · Agentic, on navy.
6. **Work** — three featured-case cards with gradient covers + hover lift.
7. **Contact** — gradient CTA band with `hello@bluepixel.mx`.
8. **Footer** — link columns + social on navy-deep.

## Notes
- The Figma source is a **brandbook**, not a product UI, so this kit applies the brand to the
  company's live site content rather than copying pixel-for-pixel Figma screens.
- Client and case-study imagery are represented with gradient/wordmark placeholders — drop in
  real logos and case thumbnails to finish.
- The `Logo` component is pulled from the compiled bundle; everything else is plain tokens.
