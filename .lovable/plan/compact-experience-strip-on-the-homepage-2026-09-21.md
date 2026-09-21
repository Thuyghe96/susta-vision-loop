# Compact "Experience" strip on the homepage

## Context
The homepage already has an `ExperienceSection` (a large dark text block with four numbered sectors and long descriptions) positioned after "Why Sustavision" and before the final call-to-action. The new compact strip replaces it in the same position - keeping both would duplicate the same message.

## What changes

1. **New background image**
   - Generate one subtle, wide image suggesting operational reality (port / warehouse / logistics environment, muted tones, no green leaves, no promotional feel).
   - Save as `src/assets/experience-operations.jpg`.

2. **Rewrite `src/components/home/ExperienceSection.tsx`** as a compact, image-backed strip:
   - One horizontal band (`relative overflow-hidden`), background image with a semi-transparent deep-forest-green overlay (existing dark ink/foreground token family) so text stays highly readable.
   - Content, top-aligned and centred where suitable:
     - Heading (display serif): "Experience across operational sectors"
     - Supporting text: "We have delivered ESG support in distribution, manufacturing and logistics-linked contexts - among others. The sectors below are examples, not limits."
   - Below the text: four compact pills/chips in one horizontal row on desktop (flex-wrap on mobile), each with a small lucide line icon:
     - Chemicals & distribution - FlaskConical
     - Food & drinks distribution - Package
     - Port & industrial operations - Anchor
     - Manufacturing - Factory
   - Pills: light/translucent surface over the dark overlay, light text, hairline border, no long descriptions.
   - Compact vertical padding (roughly py-16/py-20, clearly smaller than a full section) - a credibility band, not a dominant block.
   - No em/en dashes anywhere.

3. **Update `src/i18n/translations.ts`** - replace the `experience` block in both EN and NL:
   - EN: exact heading and supporting text from the request; four sector labels as given.
   - NL: Flemish / algemeen Nederlands, "u"-form consistent with the rest of the site; same four sectors.
   - Remove the old long sector descriptions and footnote (no longer rendered).

## Verification
- Type check (`tsgo --noEmit`).
- Playwright (desktop 1280x1800 + mobile 390x844): strip appears after "Why Sustavision" and before the final CTA; four pills in one row on desktop, wrapped on mobile; readable contrast over the image; no console errors; EN and NL both checked.
