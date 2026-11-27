# Project memory

## Product intent & audience

- Front-end only landing page for an automotive collision repair shop
- Single conversion goal: get visitors to request a free estimate
- Audience: vehicle owners needing collision repair
- No backend — estimate form is visually/interactively complete but non-functional

## Brand personality & voice

- Calm, confident, clear — trust-building, not selling
- No urgency language, no hype words, no exclamation points, no pressure tactics
- Plain language; informative tone over persuasive

## Visual design & UX direction

- Dark modern aesthetic: deep charcoal/near-black (`#0f0f0f`), off-white/light gray text
- Inter (Google Fonts) — bold confident sans-serif with strong size/weight hierarchy
- Amber accent color for CTAs
- Generous spacing, no clutter, no decorative noise
- Minimal icon usage (lucide-react), no decorative overload
- Fully responsive (mobile/tablet/desktop)
- Subtle hover states on buttons/links only — no other animations
- Smooth scroll behavior from CTA buttons to form section (form anchored with id)
- Semantic HTML throughout
- Single scrollable page, no routing

## Decisions, constraints & rationale

- Stack: Vite + React, JSX, Tailwind CSS, lucide-react icons (per `.bolt/prompt` global rules)
- No third-party UI libraries — custom styled components only
- EstimateForm uses `forwardRef` to serve as scroll anchor target
- Photo upload field is styled and shows selected filename but does not upload
- Form submission is prevented; no backend integration
- Page sections built in order: Hero → What the Estimate Includes (4-card grid) → Three-Step Process → Estimate Request Form → Final CTA
- Header includes compact "Free Estimate" link that also scrolls to form
- Build and typecheck pass clean

## Open questions & assumptions

- Shop name, contact info, and location not specified — currently generic
- No actual email/phone handling for form submissions (front-end only)
- Insurance coordination mentioned in copy but not built out as a feature
- No imagery or photography beyond what could be uploaded via form