# Enclosed Frames — studio site

An **experimental photo booth studio** (Los Angeles): we invent, design and build custom photo booths and capture
experiences for brands, agencies and artists. **Completely separate from LA Glam Booth**: no links, logos, colours,
copy, client names, stats or tracking from it. Never present LA Glam Booth's events, clients or numbers as this
studio's track record; show work made under this name (or credited "designed by our founding team").

## Stack
Static site: `index.html`, `styles.css`, `main.js`, `favicon.svg`. No framework, no build step. Preview with
`python3 -m http.server` in this folder. The brief form is a preview until the studio inbox is connected.

## Identity
- Colours (Nov 2026): page **Red Orange `#F42902`**; **Snowy White `#FDFDFF`** for large type only (4.0:1 on red);
  **Ink `#0B0B0C`** for body text, labels and small type (4.8:1); **Yellow Punk `#CCFF00`** accent: the one italic
  headline word, buttons (yellow with ink text), REC dot, client-review markers. Never yellow or white for small text on
  red. Dark "screen" panels (viewfinder, Lab contact sheet, renders, team cards) keep light-on-ink via local CSS vars.
- Type: **Archivo** (wide `font-stretch` 110–125%, 800–900) for display. **Instrument Serif** italic for the one
  accent word. **IBM Plex Mono** uppercase for slate/timecode/metadata labels.
- Device: viewfinder crop brackets ⌜ ⌟ (wordmark, hero corners).
- Layout language: viewfinder hero, numbered index (Booths), contact sheet (Lab), film credits (Process), call
  sheet (brief form). Editorial grid, hairline rules, film grain.

## 3D booth (EF—001 The Enclosed)
`js/booth.js` is the owner's three.js r128 model of the booth (copied from their own files) with this studio's
branding: the sign reads ENCLOSED FRAMES / enclosedframes.com, the sample strip says EF—001, and the print strips are
plain (no client photo). `js/vendor/` holds three r128 + OrbitControls + RoomEnvironment, self-hosted. `main.js` loads
it after page load into the hero viewfinder: slow auto-rotate, drag on desktop, never captures touch on phones, still
with reduced motion, falls back to the gradient without WebGL. Never bring back other brands' text or client images.

## Renders
`assets/renders/ef001-*.jpg` (1600×2000) and `ef001-og.jpg` (1200×630 social) come from `tools/render.html?shot=<name>`,
which stages the live model on the studio backdrop: front/left/back three-quarter, curtain-closed, low-angle,
sign-detail, wrap-study (a Tally Red wrap, no client art). Capture `#stage` at deviceScaleFactor 1.6 with WebGL on.
Always caption them "Render" on the site until real photos of the build replace them.

## Content rules
- Real footage and real projects only. Placeholder slots are labelled as such until replaced. No stock imagery.
- Booth entries say their true status: Built / In development / Lab.
