
Apply the same three-tone editorial rhythm (off-white → sand → faint teal mist, with the dark ink as a strong anchor) across every page so navigation between sections feels intentional everywhere, not just on the homepage.

## Pages in scope

- Home (already planned)
- Services
- About
- Contact
- NotFound (light touch)

## New shared token

In `src/index.css`, add:
- `--surface-mist: 184 30% 96%` (light mode) - faint teal wash
- Dark-mode equivalent: `184 30% 14%`

Reusable across all pages. Bookend gradients keep using existing `--gradient-soft`.

## Per-page rhythm

**Home** (as previously planned)
```text
Hero              gradient-soft         (opening)
TrustStrip        background            (quiet pause)
TriggerSection    secondary/60 (sand)   (the problem)
ServiceAreas      background            (what we do)
ServiceLoop       surface-mist (teal)   (how we work)
WhyChooseUs       secondary/50 (sand)   (why us)
ExperienceSection foreground (dark)     (anchor)
FinalCTA          gradient-soft reversed (closing)
```

**Services** (`src/pages/Services.tsx`)
```text
Hero header       gradient-soft         (opening - already is)
ServiceAreas      background            (what we do)
ServiceLoop       surface-mist (teal)   (how we work)
FinalCTA          gradient-soft reversed (closing)
```

**About** (`src/pages/About.tsx`) - inspect first to map sections, then apply the same off-white → sand → mist pattern, ending with either the dark ink anchor (if a values/credentials block exists) or a soft gradient close. Likely rhythm:
```text
Hero/intro        gradient-soft
Founder bio       background
Approach/values   secondary/50 (sand)
Sectors/credentials foreground (dark anchor) — if present
Closing CTA       gradient-soft reversed
```

**Contact** (`src/pages/Contact.tsx`) - usually one or two blocks. Apply:
```text
Header            gradient-soft
Form + info       background
(optional FAQ)    secondary/50 (sand)
```

**NotFound** - keep simple: `bg-gradient-soft` so even the 404 feels on-brand.

## Shared seam refinement

Across all pages, soften section dividers from `border-border` to `border-hairline` so the color shift carries the rhythm rather than the line. Keep the dark-section borders as-is (they already use `border-background/15`).

## Files to edit

- `src/index.css` - add `--surface-mist` token (light + dark)
- `src/components/home/Hero.tsx`
- `src/components/home/TriggerSection.tsx`
- `src/components/home/ServiceLoop.tsx`
- `src/components/home/WhyChooseUs.tsx`
- `src/components/home/FinalCTA.tsx`
- `src/components/home/ExperienceSection.tsx` (border softening only)
- `src/pages/Services.tsx` (header section bg + final CTA mirroring)
- `src/pages/About.tsx` (section backgrounds - will read first to map exact sections)
- `src/pages/Contact.tsx` (header + section backgrounds)
- `src/pages/NotFound.tsx` (single bg swap)

No layout, typography, copy, or component-structure changes - purely surface tones and seams. Boutique and quiet, but every page now has a clear chapter rhythm.
