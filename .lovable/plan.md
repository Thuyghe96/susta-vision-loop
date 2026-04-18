
Replace the redundant "Senior advisory, no junior hand-offs" reason in the Why Choose Us section with **"Tailor-built to your company's needs"** in both English and Dutch.

## Changes

**File: `src/i18n/translations.ts`**

In `en.why.reasons`: replace the "Senior advisory / no junior hand-offs" entry with:
- Title: "Tailor-built to your company's needs"
- Description: Short line emphasizing every engagement is shaped around the business's sector, size, and maturity - no off-the-shelf templates.

In `nl.why.reasons`: same replacement, translated:
- Title: "Op maat gemaakt voor uw bedrijf"
- Description: Dutch equivalent emphasizing customization to sector, size, and maturity.

No component changes needed - `WhyChooseUs.tsx` renders whatever entries exist in the translations array.
