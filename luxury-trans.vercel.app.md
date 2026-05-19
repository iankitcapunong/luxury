# luxury-trans.vercel.app — Revision Brief

**Live URL:** https://luxury-trans.vercel.app/
**Stack:** Vite + React SPA, Tailwind, Cormorant Garamond + DM Serif Display + Poppins
**Client:** Jordan (Driven / luxury private chauffeur, London)
**Source meeting:** Jordan X Bryan X Prince, 2026-05-12

---

## 1. Context for the cloud session

This is one of two parallel drafts being shown to the client. This draft is the stronger of the two — its structure, palette, and discretion patterns already align with the client's stated vision. The work below is corrective, not a rebuild. Three issues are non-negotiable before re-showing the client. The rest are polish.

The client uses Rolls-Royce and Bentley as the reference standard. Any change that nudges this draft toward those references is in the right direction.

## 2. Client requirements (verbatim quotes from the 05-12 call)

1. Cinematic, immersive hero: *"It's like a movie... sets the theme on the website... selling your product before you've even seen a price."*
2. Neutral background (Bentley cream/beige), black text: *"let it be this background and this color and this font, the font from Bentley."*
3. No yellow, no orange, no bronze headings: *"bronze is never going to make it... it's already associated with some cheap knock-off."*
4. Luxury typography only — no basic "three steps" panel: *"that is cheesy man... it doesn't look luxury. It looks bland and basic."*
5. A Vision or "Future and Beyond" tab in the top nav: *"there needs to be a tab on the website talking about, we're thinking about tomorrow."*
6. A brand manifesto / culture / movement narrative: *"luxury transport is not just travelling in luxury, it's a lifestyle. It's a movement."*
7. Discretion on clients — never list clients by name at top of nav. Rename or move to a discreet "Who we've worked with" pattern: *"It's not a need-to-know basis."*
8. Two booking paths — fast express checkout AND a longer data-collection form after payment: *"Amazon two-click... then after we'll find somewhere to collect extra data."*
9. Vehicle features section separate from extra services: *"one place should be to showcase the features of the vehicle. The other is to showcase the extra additional services."*
10. Refreshments on board — champagne, luxury tequila, luxury spirits, shown like a stocked fridge: *"show maybe some form of fridge showing the stocks."*
11. No baby or kid content in the main flow — move to a sub-service tile if at all: *"this is not for babies, not for kids."*
12. Centered, symmetrical layout: *"everything's centred, bro... it's symmetrical... it helps the flow."*
13. Continuous brand recognition — emblem persistent across sections: *"90% of whatever's being shown, there's some form of double R somewhere."*
14. Consistent energy from top to bottom — not premium hero with basic body: *"You've lost our way at some point."*
15. Stay hazy about being a new business: *"I'm not trying to let them know that we just started."*

## 3. Current state audit (what's on the live site now)

Page composition top to bottom: Hero ("A Private Chauffeur House", "Discretion · Punctuality · Composure") → Manifesto ("A house built on...", "Every detail attended", "Every way to travel. One standard of service.") → Inside the Cabin / Inside the Mercedes Sprinter ("Quietly equipped", "Fireplace ambience", "Umbrellas & tissues", "Uniformed drivers") → Services (Airside, Boardroom, Talent & Tour, The Open Road, The Photographed Hour, Weddings & Group Travel, Long Distance Hire — some labelled "Service · Three") → Locations (Mayfair, Knightsbridge, Belgravia airports and hotels, Bicester Village, Bulgari Hotel London, Mandarin Oriental Hyde Park, The Lanesborough, London·Manchester, Birmingham·Edinburgh) → Audience (Head Concierge · Mayfair hotel, Tour Manager · Independent label, Wedding Planner · Cotswolds) → Press (Claridge Concierge, Kensington & Co., Mayfair Hotel Co., Northwood Capital) → Enquiry form ("A line about your journey", "Destination address", "Select a service") → Footer ("Luxury Transport · Est. MMXXVI", `bookings@luxurytransport.co.uk`) → Concierge widget ("Move in silence. Discretion is our policy.", "Reduced to a single message. We attend to the rest.").

What's working:
- Cream background (`bg-cream-50`) with near-black text (`text-ink-900`) — matches the Bentley palette the client approved.
- Manifesto + Audience + Press sections together carry the movement / lifestyle narrative.
- Audience uses role-based anonymous attribution — the exact discretion pattern asked for.
- Cabin section is separate from the services tiles.
- Concierge widget messaging is on-brand and discreet.
- Ten distinct sections vs five generic ones on the parallel draft — the energy carries.

What's broken:
- Heavy gold accent use throughout (`text-gold-600`, `border-gold-500/40`, `text-mask-gold-bright`, italic display headings tinted gold).
- "Est. MMXXVI" in the footer broadcasts that the business is new.
- The Manifesto section exists but is not navigable from the top nav.
- The brand on the page is "Luxury Transport" but the project name (per source folder, the 04-27 meeting, and the alt deployment driven-london.vercel.app) is "Driven". One of these is wrong.
- Press logos may be aspirational placeholders. If they are not real partners, this is risky on a luxury site.
- No champagne / spirits / fridge in the Cabin section, despite the client asking for it specifically.

## 4. Step-by-step changes (in order)

### Step 1. Strip the gold (critical, do this first)
The client explicitly rejected bronze and goldish tones. Across the React components and Tailwind theme, replace all gold accent usage.

**In `tailwind.config.ts`:**
Either delete the entire `gold` colour token, or repurpose it as a neutral hairline.

```ts
// Before
gold: {
  DEFAULT: "#a07a2a",
  pressed: "#7a5d20",
},

// After (recommended: delete entirely)
// — removed —

// Or, if used in too many places to delete safely:
gold: {
  DEFAULT: "rgba(26, 24, 22, 0.32)",   // neutral hairline ink
  pressed: "rgba(26, 24, 22, 0.56)",
},
```

**In every component file under `components/sections/`:**
Search and replace:
- `text-gold-600` → `text-ink-900`
- `text-gold-400` → `text-ink-900`
- `text-gold-300` → `text-ink-mute`
- `text-mask-gold-bright` → remove the class, replace with `text-ink-900`
- `border-gold-500/40` → `border-ink-900/15`
- `border-gold-500/60` → `border-ink-900/20`
- `border-gold-500/15` → `border-ink-900/08`
- `border-gold-400/60` → `border-ink-900/20`
- `bg-gold-400` → remove and replace with `bg-ink-900/40`
- `from-gold-300/20 via-transparent to-gold-300/10` → remove the gradient entirely; cream surface only
- `editorial-rule !text-gold-300` → `editorial-rule text-ink-900/30`

Acceptance: a grep across the repo for `gold` returns zero results in `components/` and `app/`, and at most a single neutralised entry in `tailwind.config.ts`.

If the client later wants a single accent, propose deep purple at low opacity (Bentley's accent is purple, which Prince specifically called out on the call as the royalty cue).

### Step 2. Remove the newness signal
**In the Footer component:**
Remove the string `Est. MMXXVI`. Replace with one of:

```
London. Private chauffeur.
```

or simply the wordmark with no tagline. Do not replace with `Est. 2010` or any fabricated date — leave the founding date off the site entirely.

Also search the codebase for: `MMXXVI`, `2026`, `Est.`, `since`, `founded`, `new`, `recently`, `we just`. Remove or rewrite anything that signals the business is new.

### Step 3. Add a Vision tab to the top nav
**In the Chrome (header) component:**

The Manifesto section exists but cannot be reached from the nav. Add a navigable link.

Current nav structure (inferred):
```
[Logo]     [brand line spans]     [Enquire button]
```

Add a primary nav between the logo and brand line:
```
The Vision     Inside the Cabin     Services     Audience     Reserve
```

Each link is an anchor jump to its section id (`#manifesto`, `#cabin`, `#services`, `#audience`, `#enquiry`). Keep links uppercase, letter-spaced (`tracking-[0.18em]`), 12px, ink-mute colour with ink-900 on hover.

This satisfies requirement 5.

### Step 4. Reconcile the brand name
Decide with the user before changing copy: is the brand **Driven** or **Luxury Transport**?

Signals favouring **Driven**:
- Folder is named `driven-site-react/`.
- The 04-27 meeting referenced "Driven" as the working name.
- An older deployment lives at `driven-london.vercel.app`.
- The 05-12 meeting talks about the "Driven" name being "still being worked on".

Signals favouring **Luxury Transport**:
- The deployed site uses "Luxury Transport" everywhere.
- The email address is `bookings@luxurytransport.co.uk`.

Until confirmed, do not change. Flag this to the user and the client before next review. Once confirmed, do a full search-replace across:
- Page metadata (title, description, og tags)
- Chrome component logo and brand-line spans
- Footer wordmark
- Concierge greeting line
- Email address (if changing to driven.london or similar)

### Step 5. Add champagne / spirits to the Cabin section
**In the Vehicle / Cabin component:**

The current cabin list includes "Fireplace ambience", "Umbrellas & tissues", "Uniformed drivers". Add a refreshments tile that addresses requirement 10 directly. Suggested copy:

```
Title:  The chilled cabinet
Body:   Champagne on ice. Single-estate tequila. Curated spirits and zero-proof options. Restocked before each journey to your stated preference.
```

Layout: same treatment as the other cabin tiles. Centered, eyebrow + headline + short body. Do not use a literal fridge image unless the client has approved photography — a typographic tile is sufficient for now.

### Step 6. Audit the press / trust strip
**In the Press component:**

Current logos: Claridge Concierge, Kensington & Co., Mayfair Hotel Co., Northwood Capital. Confirm whether any of these are real partners.

- If they are real: leave as-is.
- If they are aspirational placeholders: remove them. Replace with a single editorial line such as *"References available on request. We do not name our clients."* This is consistent with the discretion theme and avoids the credibility risk of fake logos on a luxury site.

Flag the answer to the user before deciding.

### Step 7. Confirm or relabel "Service · Three"
**In the Services component:**

Two tiles appear labelled "Service · Three". If this is the Bentley-coded chic naming the client may approve of, leave it. If it is leftover from a copy-fill scaffold, replace with a real service name.

Default to replacement unless deliberately coded. Suggested replacement: pick one of the existing named services (Airside, Boardroom, Talent & Tour, The Open Road, The Photographed Hour, Weddings & Group Travel, Long Distance Hire) and ensure it is not duplicated.

### Step 8. Implement the dual booking flow
Currently there is one enquiry form. Restructure as:

**8a. Express reserve (primary CTA in hero, sticky nav, and at end of each section):**
A two-field widget. Fields: `Destination address` and `When`. Single button: `Reserve a Journey`. Submission opens a confirmation step with payment.

**8b. Post-payment data form:**
Surfaces after payment is confirmed. Optional, skippable. Fields:
- Where did you hear about us
- Which other providers did you consider
- Preferred refreshments
- Anything we should know for the journey

Label it "Help us serve you better". Keep the existing long Enquiry form as the fallback for the "Become a member" path that the client compared to Rolls-Royce.

### Step 9. Verify symmetry and centering
Walk every section top to bottom in the React tree. Confirm:
- Every section uses `text-center mx-auto max-w-prose60` or equivalent
- No section is left-aligned without a deliberate editorial reason
- The hero, manifesto, cabin, services grid, audience, and footer are all centered around the same vertical axis

Satisfies requirement 12.

### Step 10. Add monogram repetition
The wordmark "Driven" (or "Luxury Transport") appears in the header and footer. Add a small typographic monogram (single letter `D` or `LT`, very low opacity) as a divider between sections — at least three times down the page. Use `text-ink-900/8` or similar. This is the "double-R" repetition pattern from the call (requirement 13).

### Step 11. Final consistency pass
Read the page end to end as the client would. Confirm:
- No bronze, gold, yellow, or orange anywhere — including hover states, gradients, and SVG fills
- The hero energy carries through every section
- Every section is centered
- The brand name is consistent end to end
- No "Est." date or newness signal anywhere
- The cabin section explicitly mentions refreshments

## 5. Acceptance criteria

The revision is ready to re-show the client when all of the following are true:

- [ ] `grep -r "gold" components/ app/` returns no class names. `tailwind.config.ts` `gold` token is removed or neutralised.
- [ ] No occurrence of `MMXXVI`, `Est.`, `2026` (as a founding date), or any "we just started" language anywhere in the code or copy.
- [ ] Top nav includes a `The Vision` link that scrolls to the manifesto section.
- [ ] Brand name is consistent end to end (decision: ____________).
- [ ] Cabin section includes a champagne / spirits tile.
- [ ] Press strip is either real partners or replaced with the "references available on request" line.
- [ ] No tile is labelled `Service · Three` unless deliberately coded.
- [ ] Booking flow has a fast two-field express path and a separate post-payment optional data form.
- [ ] A monogram repeats at least three times between sections at low opacity.
- [ ] Every section is centered and symmetrical.

## 6. Out of scope for this revision

- Domain change. Keep deploying to luxury-trans.vercel.app for now.
- Real booking back-end / payment integration. A confirmation screen mockup is sufficient for client review.
- Photography commission. The Mercedes V-Class imagery can remain as-is until the client provides final assets.
- Any structural changes to the Manifesto or Audience copy — both are landing well per the audit.
