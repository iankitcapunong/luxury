# Revision Instructions — Draft I

> Hand this file to a single Claude Code session. Read it top to bottom before doing anything. Do not improvise on the brief.

---

## 0. Scope and ground rules

| | |
|---|---|
| **Target deployment** | https://luxury-trans.vercel.app/ |
| **Stack** | React SPA (Vite or Next App Router) + Tailwind |
| **Type system** | Cormorant Garamond + DM Serif Display + Poppins (per audit brief) |
| **Client** | Jordan (Driven / luxury private chauffeur, London) |
| **Source meeting** | Jordan × Bryan × Prince, 12 May 2026 |
| **Audit reference** | `comparison-report/index.html` — sections III, IV (open before starting) |
| **Screenshots** | `comparison-report/screenshots/luxury-trans-full.png` |

**Hard rules — do not break:**

1. No yellow, no orange, no bronze, no gold tokens anywhere — in CSS, in SVG fills, in image overlays, in hover states. The client called bronze "cheap knock-off". The neutral accent is silver / hairline ink only. If you absolutely need an accent, deep purple at low opacity is the only approved option.
2. No "Est.", no "MMXXVI", no "founded", no "since", no "we just started" language. Anywhere.
3. No baby or kids imagery in the main flow.
4. Centered, symmetrical layout end to end. The reference is bentleymotors.com.
5. The wordmark/emblem repeats at least three times down the page — Jordan called this the "double-R" recognition pattern from Rolls-Royce.
6. Use only verbatim Jordan phrasing where supplied. Do not paraphrase.

---

## 1. Locate the source

The deployed copy on `luxury-trans.vercel.app` does **not** match the local `Clients/Madeea.ai/Clients/Jordan/driven-site-react/` repo — the deployment was built from a different machine. Pull the live source first:

```bash
cd Clients/Madeea.ai/Clients/Jordan/
mkdir -p draft-1-source
cd draft-1-source
npx vercel link            # link to the luxury-trans project under bryancontacts-projects
npx vercel pull            # pulls env vars + project settings
npx vercel env pull        # pulls .env.local
npx vercel git ls          # confirm git remote, then clone from there if applicable
```

If `vercel pull` does not surface the source (Vercel only stores build artefacts), do the following fallback:

1. Check if Bryan committed the source to a private GitHub repo — search the org for "luxury-trans", "driven", "chauffeur".
2. If no repo exists, treat `Clients/Madeea.ai/Clients/Jordan/driven-site-react/` as the closest parallel and use it as the structural base. Migrate the brand voice from this brief and the items below.

**Do not start editing until you have confirmed which directory the deployed site is built from.** Confirm by changing one trivial line (a comment, not visible copy) and re-deploying to verify the change appears live.

---

## 2. What carries already — do not touch

These items already pass per the audit. Leave them alone:

- Cinematic hero with champagne bottles and "Arrive Composed." headline.
- Page title `Discretion. Punctuality. Composure.` — that is Jordan's tagline, verbatim. Do not rewrite.
- Mercedes Sprinter image in the vehicle section.
- "A house built on quiet precision" manifesto block.
- Concierge widget surfacing "Move in silence. Discretion is our policy."
- Stylesheet is already free of gold / bronze.
- "How it works" entry in the primary nav.
- Locations copy reads broadly (London·Manchester, Birmingham·Edinburgh) — no postcode restriction.

---

## 3. The change list — in order

There are **eleven** changes. Execute in this order. Open one file per change, make the edit, confirm visually, move on.

### Change 1 — Remove the `Clients` tab from the top nav  *(critical, do first)*

**Jordan, 12 May:** *"It's not a need-to-know basis. This is a luxury business. We're just giving you some people that want to be named. As opposed to clients, is a bit dual-meaning."*

**Current state:** Top nav reads `THE VISION · HOW IT WORKS · SERVICES · CLIENTS`.

**Required:**
- Delete the `Clients` link from the nav component (likely `Chrome.tsx` or a header component).
- If the section it linked to is the Press / Audience block, leave that section in place — just delete the nav anchor.
- Replace with nothing. The nav should now read: `THE VISION · HOW IT WORKS · SERVICES`. Keep it that lean.
- Lower in the page, rename any "Clients" heading to **"Who we've worked with"** if such a heading exists.

**Acceptance:** Grep the codebase for the word `Clients` (case-insensitive). The only matches should be in URL slugs, comments, or the renamed body heading "Who we've worked with". Nothing in the nav.

---

### Change 2 — Strip `Est. MMXXVI` from the footer  *(critical, do second)*

**Jordan, 12 May:** *"I'm not trying to let them know that we just started. Because that gives newbies. That's not luxury."*

**Current state:** Footer reads `Luxury Transport · Est. MMXXVI`.

**Required:**
- Open the Footer component.
- Remove the string `Est. MMXXVI` entirely. Do not replace with `Est. 2010` or any fabricated date.
- Footer should now read either just the wordmark, or wordmark + `London. Private chauffeur.`

**Acceptance:** Grep the repo for `MMXXVI`, `Est.`, `since`, `founded`, `we just`, `recently`, `new business`. Zero matches in any user-facing copy.

---

### Change 3 — Add a `Future and Beyond` nav entry

**Jordan, 12 May:** *"There needs to be a tab on the website talking about, we're thinking about tomorrow. In the sense of, I've called it the future and beyond."*

**Current state:** Nav has `The Vision` only. No `Future` entry. No future-tomorrow copy on page.

**Required:**
- Add `THE FUTURE` between `THE VISION` and `HOW IT WORKS` in the nav.
- Create a new section anchored to `#future`, positioned after the Manifesto. Use this draft copy as the starting point (the client will revise):

```
Eyebrow:    THE FUTURE AND BEYOND
Headline:   Tomorrow, attended to.
Body:       Our standard is a fleet that is hand-maintained, electrified where the route allows,
            and operated by drivers who are paid as professionals, not as gig hires. The future
            of luxury transport is not larger. It is quieter.
```

- Layout: centered, max-width ~60ch, generous whitespace (160px top/bottom on desktop, 80px on mobile). Headline in the display serif at 52px, body in the body sans at 19px.

**Acceptance:** Clicking `THE FUTURE` in the nav scrolls smoothly to the new section. Section is visually consistent with the Manifesto. No bronze, no gold.

---

### Change 4 — Add a "Chilled cabinet" tile to the vehicle section

**Jordan, 12 May:** *"Show maybe some form of fridge showing the stocks of other things that's stopped on board... champagne, luxury tequila, luxury spirits."*

**Current state:** Champagne bottles appear in the hero imagery. No written cabinet tile on page.

**Required:**
- Open the Vehicle component (`Vehicle.tsx`).
- Add a tile alongside the existing cabin tiles (Fireplace ambience, Umbrellas & tissues, Uniformed drivers). Use this copy:

```
Eyebrow:    THE CHILLED CABINET
Headline:   On ice, by default.
Body:       Champagne on ice. Single-estate tequila. Curated spirits and zero-proof options.
            Restocked before each journey to your stated preference.
```

- Use the same typographic treatment as the other cabin tiles. No fridge image — typography only — until the client signs off real photography.

**Acceptance:** Cabin section now has at least four tiles, one of which is the chilled cabinet. The word "champagne" appears in body copy, not just in imagery.

---

### Change 5 — Add monogram repetition

**Jordan, 12 May:** *"90% of whatever's being shown, there's some form of double-R somewhere. They're not making you forget where you are."*

**Current state:** Wordmark only appears in header and footer.

**Required:**
- Insert a low-opacity monogram divider between sections, at least three times down the page.
- Suggested placements:
  - Between Manifesto and Vehicle
  - Between Services and Locations
  - Between Audience and Enquiry
- Single-letter `D` (if the brand resolves to Driven) or paired letters (`LT` if it stays Luxury Transport). Display serif, italic, 64px, `color: rgba(10, 10, 10, 0.08)`, centered. Wrap in a `<div>` with `margin: 80px auto` and aria-hidden="true".

**Acceptance:** Scrolling top to bottom, the monogram appears at least three times between sections. It is faint enough that it never competes with body copy.

---

### Change 6 — Split the enquiry form into two paths

**Prince, 12 May:** *"Amazon two-click checkout on one hand, and on the other hand, the Rolls-Royce become a member."*

**Current state:** One long enquiry form.

**Required:**
- **6a — Express path:** Replace the primary form with a two-field widget. Fields: `Destination address` (autocomplete) and `When` (date + time). Single button: `Reserve a Journey`. Place this widget in the hero, in the sticky nav, and at the end of each section as a repeat CTA. Submission opens a confirmation screen with a payment step (mock is fine for client review).
- **6b — Post-payment data form:** After payment confirms, surface a short skippable form titled `Help us serve you better`. Fields:
  - Where did you hear about us
  - Which other providers did you consider
  - Preferred refreshments
  - Anything we should know for the journey
- Keep the existing long enquiry form alive only as the "Become a member" path the client compared to Rolls-Royce — link it from the footer as `Apply for membership`.

**Acceptance:** The first form a visitor sees has exactly two fields. A post-payment form exists in the booking flow. The long enquiry is reachable only from a footer link.

---

### Change 7 — Surface the phrase "None of them yours"

**Jordan, 7 May:** *"With this three steps, none of them yours, the beginning inquiry should be attached to that step one. Cause then all they do is put their name and then we leave them alone."*

**Current state:** Phrase not present anywhere.

**Required:**
- Place this phrase as a small editorial line adjacent to the Express reserve widget. Suggested treatment:

```
ABOVE THE TWO FIELDS, centered, display serif italic at 22px, color rgba(10,10,10,0.6):

   Three steps. None of them yours.
```

- Or as a hover/expand line on the `Reserve a Journey` button.

**Acceptance:** The phrase "None of them yours" appears in visible copy adjacent to the booking flow.

---

### Change 8 — Carry the hero energy through the lower fold

**Jordan, 12 May:** *"The energy that you've given on the first page, it's not consistent through when you scroll down. You've lost our way at some point."*

**Current state:** Hero is the strongest part. Lower-fold reads quieter than the opening.

**Required:**
- Walk the page top to bottom in the React tree. For every section after Vehicle:
  - Confirm the section has a serif headline at minimum 36px.
  - Confirm the section has an eyebrow label in 10px uppercase mono with 0.3em tracking.
  - Confirm the section has at least one editorial image OR the monogram from Change 5.
- Any section that reads as plain rows of cards without an editorial frame gets reframed — borrow the Manifesto's centered headline + lead pattern.

**Acceptance:** Scroll the page from top to bottom. There is no section that reads visually quieter than the section above it. The Audience and Press sections in particular should match the Manifesto's energy.

---

### Change 9 — Resolve the brand name

**Status:** The deployed site reads "Luxury Transport". The project name (per source folder, the 04-27 meeting, the alt deployment `driven-london.vercel.app`, and the 12 May "Driven name still being worked on" comment) is "Driven". One of these is wrong.

**Required — do not proceed alone:**
- Open a brief with Bryan or Jordan before changing this. Ask: *"For the luxury-trans deployment, is the wordmark Driven or Luxury Transport?"*
- Once confirmed, search-replace across:
  - Page metadata (title, description, og tags)
  - Chrome / Nav component logo and brand-line spans
  - Footer wordmark
  - Concierge greeting line
  - Email address (if changing to driven.london)
- Update the monogram letters from Change 5 to match the resolved name.

**Acceptance:** The brand name is consistent end to end. There is a single source-of-truth string referenced everywhere, ideally as a constant.

---

### Change 10 — Audit the press / trust strip

**Status:** Current logos are Claridge Concierge, Kensington & Co., Mayfair Hotel Co., Northwood Capital.

**Required:**
- Ask Bryan: are any of these real partners?
- If real → leave as-is.
- If aspirational → delete the logos. Replace with a single editorial line, centered:

```
References available on request.
We do not name our clients.
```

- This is consistent with the discretion theme and avoids the credibility risk of fake logos on a luxury site.

**Acceptance:** Either every logo on the press strip is a confirmed real partner, or the strip has been replaced with the references-on-request line.

---

### Change 11 — Replace any `Service · Three` placeholder labels

**Status:** Two tiles in the Services section are labelled `Service · Three`.

**Required:**
- If this is a deliberate Bentley-coded chic naming convention (numbered services), confirm with Bryan first.
- Default to replacement. Pick from the existing named services already on the page: Airside, Boardroom, Talent & Tour, The Open Road, The Photographed Hour, Weddings & Group Travel, Long Distance Hire. Ensure no service appears twice.

**Acceptance:** No tile is labelled `Service · Three` or any other placeholder format.

---

## 4. Final consistency pass

After every change above, run this checklist before pushing:

- [ ] `grep -rn "Clients" --include="*.tsx" --include="*.ts"` returns no nav match.
- [ ] `grep -rn -E "MMXXVI|Est\\.|founded|since|we just|recently" --include="*.tsx"` returns zero matches in user-facing copy.
- [ ] `grep -rn -E "gold|bronze|#a07a2a|#b8860b|#c8a04d" --include="*.tsx" --include="*.ts" --include="*.css"` returns no class names, hex values, or token names.
- [ ] No baby, kid, or family-day imagery in the main flow.
- [ ] Top nav reads exactly `THE VISION · THE FUTURE · HOW IT WORKS · SERVICES`.
- [ ] Footer has no founding-date string.
- [ ] Cabin section explicitly mentions refreshments / champagne in body copy.
- [ ] Express reserve widget is two fields. Post-payment data form exists.
- [ ] Monogram repeats at least three times mid-page.
- [ ] Brand name is consistent end to end.
- [ ] Every section is centered and symmetrical.
- [ ] No section reads quieter than the section above it.

---

## 5. Deploy and notify

```bash
git add -A
git commit -m "luxury-trans: apply 12 May revision brief (11 changes)"
git push
# Vercel auto-deploys from the linked branch. Confirm preview URL works before pushing to main.
```

After the deploy succeeds, ping Bryan with:
- The preview URL.
- A note saying *"Eleven changes applied per the 12 May call. Ready for Jordan re-review on the next call."*
- The list of any items above where you blocked on a question (Change 9 brand name, Change 10 press strip).

---

## 6. Out of scope

Do not work on any of these without explicit user approval:

- Domain change. Keep deploying to `luxury-trans.vercel.app`.
- Real booking back-end or payment integration. A confirmation screen mockup is sufficient.
- Photography commission. The Mercedes Sprinter imagery can remain as-is until Jordan provides final assets.
- Structural changes to the Manifesto or Audience copy — both land per the audit.
- Brand voice rewrites. The voice is on-archetype.

---

## 7. If you get stuck

- The full visual audit is at `comparison-report/index.html`. Open it for the per-instruction Pass/Partial/Not-Yet verdicts.
- The original 12 May transcript is at `Clients/Madeea.ai/Meeting-Notes/Fathom Transcripts/Jordan X Bryan X Prince 05-12.md`.
- The earlier 7 May transcript is at the same path with the `05-07` filename.
- If you cannot find the source code (Section 1), stop and ask Bryan. Do not edit the wrong repo.
