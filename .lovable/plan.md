# Redesign the “Where we support” section

## What will change
- Replace the existing support-point treatment with one full-width banner containing three equal image panels.
- Keep the supplied English heading, introduction, panel headlines, and supporting text exactly as provided.
- Add equivalent Flemish/standard Dutch copy so the existing language switch remains complete.
- Use three coordinated custom images: client requests, regulatory guidance, and practical operational action.
- Show only panel headlines initially, then reveal details through calm hover/focus transitions on desktop and tap-to-expand behavior on touch devices.
- Preserve strong contrast, descriptive image text, keyboard access, visible focus states, and reduced-motion support.

## Layout and interaction
- Desktop: three adjacent panels in one row; the active panel expands slightly while all remain visible.
- Mobile/tablet: stacked tappable panels; the active panel grows vertically to display its full text.
- Use subtle light dividers and a forest-green image overlay, with no competing calls to action.

## Technical details
- Add the panel copy to the existing bilingual translation structure.
- Build a focused homepage section component using existing design tokens and controls.
- Add the section to the homepage in the current content flow.
- Verify default, hover/focus, tap, English/Dutch, and responsive states in the live preview.
