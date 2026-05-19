# Client Changes — Implementation Guideline

Companion to [luxury-trans.vercel.app.md](luxury-trans.vercel.app.md). That file holds the verbatim client quotes from the 2026-05-12 call; this file is the concrete checklist for the engineer. All references are to files and lines in this repo (clone1) as of 2026-05-19.

**Stack (verified):** Vite + React SPA, Tailwind ([tailwind.config.js](tailwind.config.js)), Cormorant Garamond + DM Serif Display + Futura. Site is one monolithic file: [src/App.jsx](src/App.jsx) (1844 lines). Concierge widget is a separate component: [src/Chatbot.jsx](src/Chatbot.jsx). Blog is [src/Blog.jsx](src/Blog.jsx). Global CSS is [src/index.css](src/index.css).

**Brand name:** "Luxury Transport" — already consistent across [App.jsx](src/App.jsx), [Chatbot.jsx](src/Chatbot.jsx), and email. Do not change unless the client explicitly asks.

---

## Priorities

- **P0** — Must ship before the client sees this again. Three items.
- **P1** — Should ship in the same revision; the page reads as half-done without them.
- **P2** — Polish. Ship if there's time; deferrable.

---

## P0 — Non-negotiable

### P0-1. Remove all gold

**Client quote (req 3):** *"bronze is never going to make it... it's already associated with some cheap knock-off."*

**Scope:** 77 occurrences across 4 files.
- [src/App.jsx](src/App.jsx) — ~60+ uses (highest density)
- [src/index.css](src/index.css) — utility definitions at lines [80](src/index.css#L80), [87](src/index.css#L87)
- [src/Blog.jsx](src/Blog.jsx) — line [101](src/Blog.jsx#L101) uses `text-mask-gold`
- [src/Chatbot.jsx](src/Chatbot.jsx) — small number, but real

**What to do:**

1. In [tailwind.config.js:25-30](tailwind.config.js#L25-L30), delete the `gold` token entirely.

2. In [src/index.css](src/index.css), remove or repurpose the `.text-mask-gold`, `.text-mask-gold-bright` utilities (lines [80-99](src/index.css#L80-L99)). Replacement: drop the class definitions; let headings render as solid `text-ink-900`.

3. In every `.jsx` file, swap class names. **Use real tokens from [tailwind.config.js](tailwind.config.js#L31-L37) — `ink` scale is `300, 500, 700, 800, 900`. There is no `ink-mute` token; do not use it.**

   | Find | Replace with |
   |---|---|
   | `text-gold-600` | `text-ink-900` |
   | `text-gold-500` | `text-ink-900` |
   | `text-gold-400` | `text-ink-700` |
   | `text-gold-300` | `text-ink-500` |
   | `border-gold-500/40` | `border-ink-900/15` |
   | `border-gold-500/60` | `border-ink-900/20` |
   | `border-gold-500/15` | `border-ink-900/10` |
   | `border-gold-400/60` | `border-ink-900/20` |
   | `bg-gold-400` | `bg-ink-900/40` |
   | `from-gold-*` / `via-gold-*` / `to-gold-*` | remove the gradient — cream surface only |
   | `text-mask-gold-bright` | remove the class; let `text-ink-900` carry the heading |
   | `text-mask-gold` | same — remove |
   | `!text-gold-300` | `text-ink-900/30` |

4. **SVG fills.** [src/App.jsx:452](src/App.jsx#L452) defines `<linearGradient id="goldStripe">`. Find all `fill="url(#goldStripe)"` uses and either retarget to a neutral gradient or remove the gradient and use a solid ink fill.

5. **Hover, focus, ring states.** Search for `hover:*gold`, `focus:*gold`, `ring-gold` and apply the same mapping.

**Done when:**
- A repo-wide search for `gold` returns no class names in `src/` (and the `gold` token is gone from [tailwind.config.js](tailwind.config.js)).
- No yellow/orange/bronze appears anywhere when the page is scrolled top to bottom in a browser. (Visual check, not just grep.)

---

### P0-2. Remove the newness signal

**Client quote (req 15):** *"I'm not trying to let them know that we just started."*

**Where:** [src/App.jsx:1574](src/App.jsx#L1574) — the literal string `Luxury Transport · Est. MMXXVI`.

**What to do:**
- Replace with `Luxury Transport` alone, or `Luxury Transport · London`.
- Do **not** substitute a fabricated date (no `Est. 2010`, etc.).
- Also scan for any `MMXXVI`, `Est.`, `since`, `founded`, `recently`, `we just` — flag and rewrite anything that hints at age.
- Keep the existing dynamic copyright at [App.jsx:1664](src/App.jsx#L1664) (`© {new Date().getFullYear()}`) — that's a legal line, not a founding signal.

**Done when:** No occurrence of `MMXXVI`, `Est.`, or any "we just started" phrasing anywhere in `src/`.

---

### P0-3. Add a navigable nav with a Vision link

**Client quote (req 5):** *"there needs to be a tab on the website talking about, we're thinking about tomorrow."*

**Where:** [src/App.jsx:258-336](src/App.jsx#L258) (header/nav block).

**Problem:** The manifesto block ("A house built on..." at [App.jsx:1699](src/App.jsx#L1699)) is in the markup but unreachable from the nav. The existing section IDs on the page are: `top`, `how`, `contact`, `services`, `features`, `testimonials`. **There is no `#manifesto`, `#cabin`, or `#audience` ID — those need to be added.**

**What to do:**

1. Add IDs to the existing sections in [src/App.jsx](src/App.jsx):
   - Section at [line 1680](src/App.jsx#L1680) (manifesto, "A house built on") → add `id="vision"`.
   - Section at [line 1092](src/App.jsx#L1092) (cabin / inside the Sprinter) → add `id="cabin"`.
   - Section at [line 1423](src/App.jsx#L1423) (already `id="testimonials"`) → also accept as the "audience" anchor.

2. In the header nav at [App.jsx:260](src/App.jsx#L260), insert a primary nav row between the logo and the Enquire button:

   ```
   The Vision   |   Inside the Cabin   |   Services   |   Audience   |   Reserve
   ```

   Each link is an anchor: `#vision`, `#cabin`, `#services`, `#testimonials`, `#contact`.

   Styling: `uppercase tracking-[0.18em] text-[12px] text-ink-500 hover:text-ink-900`.

3. Move the manifesto block earlier in the visual order if possible. Currently "A house built on..." renders after the footer in markup ([line 1699](src/App.jsx#L1699), after footer at [line 1561](src/App.jsx#L1561)). Verify in the browser whether this is rendered above or below the footer — if below, move it above.

**Done when:**
- Clicking `The Vision` in the nav scrolls smoothly to the manifesto section.
- All five nav links target IDs that exist on the page.

---

## P1 — Same revision

### P1-1. Add a refreshments tile to the Cabin section

**Client quote (req 10):** *"show maybe some form of fridge showing the stocks."*

**Note:** Champagne is already mentioned in copy ([App.jsx:558, 1143, 1183](src/App.jsx#L1143), [Blog.jsx:55](src/Blog.jsx#L55), [Chatbot.jsx:37, 62](src/Chatbot.jsx#L37)). What's missing is a *dedicated tile* in the Cabin section that frames refreshments as a feature, not a passing mention.

**Where:** Cabin section starts around [App.jsx:1319](src/App.jsx#L1319) (where the Sprinter image lives).

**What to do:** Add a tile in the same visual treatment as the other cabin tiles (eyebrow + headline + body). Suggested copy:

```
Eyebrow:  The cabin
Title:    The chilled cabinet
Body:     Champagne on ice. Single-estate tequila. Curated spirits and
          zero-proof options. Restocked before each journey to your stated
          preference.
```

Do **not** use a literal fridge image unless the client has approved photography. A typographic tile is sufficient.

**Done when:** A "chilled cabinet" / refreshments tile renders in the Cabin section with the same visual treatment as the existing tiles.

---

### P1-2. Replace `Service · Three`

**Client quote (req 4):** *"that is cheesy man... it doesn't look luxury."*

**Where:** [src/App.jsx:1165](src/App.jsx#L1165) — `eyebrow: "Service · Three"`.

**What to do:** Replace the placeholder eyebrow with a real service name consistent with the named tiles around it (Airside, Boardroom, Talent & Tour, The Open Road, The Photographed Hour, Weddings & Group Travel, Long Distance Hire). Confirm it doesn't duplicate another tile.

**Done when:** No tile is labelled `Service · Three`.

---

### P1-3. Confirm or remove the press strip

**Note from audit:** The brief mentions logos (Claridge Concierge, Kensington & Co., Mayfair Hotel Co., Northwood Capital) — **these strings do not exist in the current src/.** Either the press strip was removed already, or the brief described a different deployment.

**What to do:**
1. Verify in a browser whether a press logo strip is rendered. If yes, locate it in the markup and confirm whether the logos are real partners.
2. If aspirational/placeholder: remove and replace with a single editorial line:
   > *"References available on request. We do not name our clients."*
3. If real partners: leave as-is.

**Done when:** Either the press strip is real partners only, or it is replaced with the editorial line.

---

### P1-4. Symmetry pass

**Client quote (req 12):** *"everything's centred, bro... it's symmetrical."*

**Where:** every `<section>` in [src/App.jsx](src/App.jsx) (sections at lines [337](src/App.jsx#L337), [739](src/App.jsx#L739), [1092](src/App.jsx#L1092), [1190](src/App.jsx#L1190), [1423](src/App.jsx#L1423), [1500](src/App.jsx#L1500), [1680](src/App.jsx#L1680), [1723](src/App.jsx#L1723)).

**What to do:** For each section, confirm content is centered around the page's vertical axis: `mx-auto`, `text-center` where appropriate, content max-width ≤ ~60ch. Left-aligned blocks should have an editorial reason (e.g., a long-form quote).

**Done when:** Scrolling the page in a browser, every section's content sits on the same vertical centerline.

---

## P2 — Polish

### P2-1. Monogram repetition between sections

**Client quote (req 13):** *"90% of whatever's being shown, there's some form of double R somewhere."*

**What to do:** Add a small typographic monogram (a single `LT` in Cormorant Garamond, `text-ink-900/10`, ~40-60px) as a visual divider between three section pairs. Suggested placements:
- Between Hero and Manifesto/Vision
- Between Cabin and Services
- Between Testimonials and Footer

**Done when:** The `LT` monogram appears at least three times down the page at low opacity.

---

### P2-2. Cream swatch sanity check

The current cream is `#F5ECD6` ([tailwind.config.js:16](tailwind.config.js#L16)) — leans warm/wheat. Bentley's reference cream is closer to `#EFE7D8` (cooler, more putty). If the client comments on it, the swatch is a one-line change. Don't pre-emptively shift it; just be ready.

---

### P2-3. Dual booking flow (express + post-payment data)

**Client quote (req 8):** *"Amazon two-click... then after we'll find somewhere to collect extra data."*

**Status:** Largest piece of new build. The brief's Section 6 also says payment integration is out of scope, so treat this as a **mockup, not a working flow** for the next client review.

**Mockup spec:**

1. **Express widget** in the hero ([App.jsx ~340-440](src/App.jsx#L337)). Two fields: `Destination` and `When`. One button: `Reserve a Journey`. Submission goes to a mock confirmation screen.

2. **Mock confirmation screen** — static, no real payment. Shows "Payment received" (Lorem placeholder OK) and surfaces an **optional, skippable** post-payment form with fields:
   - Where did you hear about us
   - Which other providers did you consider
   - Preferred refreshments
   - Anything we should know for the journey

   Label: "Help us serve you better."

3. **Keep** the existing long enquiry form at [App.jsx ~1020-1080](src/App.jsx#L1038) as a "Become a member" fallback.

4. The existing concierge widget ([src/Chatbot.jsx](src/Chatbot.jsx)) stays untouched — it's a separate channel.

**Done when:** Hero has a two-field express widget; submitting it shows a mock confirmation with a skippable data form; the long enquiry form still exists as a secondary path.

---

## Out of scope (defer)

- Domain change. Keep `luxury-trans.vercel.app`.
- Real payment processing. Mockup only.
- New photography. Mercedes V-Class imagery stays as-is.
- Manifesto and audience copy edits. Both already land well per the audit.
- Brand rename ("Driven" vs "Luxury Transport"). Code is consistent on Luxury Transport; do not change until the client asks.

---

## Acceptance checklist (for the next client review)

- [ ] Repo-wide search for `gold` returns no class names in `src/`. `gold` token removed from [tailwind.config.js](tailwind.config.js).
- [ ] No `MMXXVI`, `Est.`, or "we just started" language anywhere in `src/`.
- [ ] Top nav has five working anchor links (`#vision`, `#cabin`, `#services`, `#testimonials`, `#contact`).
- [ ] The manifesto section renders before the footer.
- [ ] Cabin section includes a refreshments tile.
- [ ] No tile labelled `Service · Three`.
- [ ] Press strip is either real partners or the editorial "references" line.
- [ ] Every section is centered around the page's vertical axis.
- [ ] `LT` monogram repeats at least three times at low opacity.
- [ ] Express two-field reserve widget exists in the hero; submitting it surfaces a mock confirmation + optional data form.
- [ ] Eye-test: scroll the live preview top to bottom and confirm no bronze/gold/yellow/orange appears in any state (default, hover, focus, SVG fill).
