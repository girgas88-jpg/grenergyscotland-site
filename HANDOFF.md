# HANDOFF — grenergyscotland.co.uk

**Updated:** 2026-10-17
**Status:** **LIVE over HTTPS** at https://www.grenergyscotland.co.uk —
GitHub Pages on (`main` / root), Namecheap DNS pointed at GitHub, Let's
Encrypt certificate for `www.grenergyscotland.co.uk` (auto-renewed by GitHub),
Enforce HTTPS on; `http://` and the bare domain both 301 to `https://www`.
The **enquiry form is not connected** yet.

---

## 🔴 Still blocking

### 1. ~~Enforce HTTPS~~ — DONE 17 Oct 2026

GitHub's DNS check sat on "in progress" for over two hours with DNS correct
(4 A records, www CNAME, no CAA). **Fix: Settings → Pages → custom domain →
Remove, then type it back in and Save.** The certificate was served within a
minute and GitHub ticked Enforce HTTPS itself. Remove/Save also deletes and
recreates `CNAME` as two GitHub commits (`Delete CNAME`, `Create CNAME`) —
pull afterwards. Claude Code's safety check blocks that click as a
DNS/cert change until Gavin says go in the chat.

### 2. Connect the enquiry form (Web3Forms)

Web3Forms now needs an account. Gavin: sign up at app.web3forms.com with
`grenergyscotland@gmail.com` (email link, not "Continue with Google" unless
that Gmail is the signed-in Google account), create a form, paste the Access
Key to Claude. Then in `contact.html` replace
`REPLACE_WITH_WEB3FORMS_ACCESS_KEY`, update the stale "no account required"
HTML comment above it, push, and send one test enquiry through the live form.
If the business email moves to `@grenergyscotland.co.uk`, update the
Web3Forms delivery address too.

---

## 🟠 Decisions / actions with Gavin

| Item | Notes |
|---|---|
| **Baxi contract** — check for a no-marketing clause | Until checked, the site names no manufacturer. Heat pump copy says "MCS-accredited partner". If the contract allows it, Baxi can go back into the heat pump FAQ and the drum caption. |
| **Business email** `@grenergyscotland.co.uk` | Options laid out in the business repo HANDOFF. When chosen: replace `grenergyscotland@gmail.com` site-wide (topbar, footer, hero card, CTA, contact, privacy, JSON-LD) and in Web3Forms. Re-check Namecheap Mail Settings — switching from Email Forwarding changes MX records. |
| **Virtual phone number** | Gavin wants one. When it exists, add it back (topbar, contact, JSON-LD `telephone`). Until then: no tel: links (content rule 1b). |
| **Virtual business address** | Gavin wants one. Site now says "Glasgow" only. A virtual address could go in JSON-LD `PostalAddress` and a Google Business Profile — never the home address. |
| **Photos — still needed** | Every home-page card has a photo except **Air source heat pumps** — needs Gavin's own HP60 install photo. The Cookers card uses a **stock photo** for now (see Done) — swap it for his own hob/fire install when he has one. Cards without a photo keep their icon. |
| **"House Pro" login prompt** | Gavin (17 Oct): tapping the home-page service cards on his phone asks for a "House Pro" login. **Not reproducible from outside** — every card link returns 200 with no redirect on www and bare domain, and the site has no login anywhere. So it is the phone or the network (home router DNS filter? a browser extension or app link capture?). Next: a screenshot of the prompt showing the address bar, and the same tap on mobile data with Wi-Fi off. |
| **Images Gavin found online — not usable** | 17 Oct he offered five from Downloads: Megaflo and Baxi product shots (manufacturers' copyright; the Baxi one also advertises a "10 year warranty" the site doesn't offer), a Calleos gas-fire product shot, a numbered stock-library hob photo (needs a paid licence), and an AI-generated "CP12" with gibberish text and the Gas Safe logo. All declined. Rule: real work, or a properly licensed generic image that doesn't pose as his job. |
| **360° spin** | Gavin asked for one. Needs 24–36 stills shot all the way round one object (or a short video) — can't be made from ordinary photos. The swipeable "Recent work" strip covers the gallery part. |
| **MCS** | Gavin doesn't hold MCS himself; the partner does. Don't claim it. |
| **Areas list** | Still Claude's sensible radius around Torrance — Gavin to check. |

---

## 🟡 Worth doing soon

- **Upload the PNG pack** — `og-image.png` (social previews) and optionally
  `logo.png` (JSON-LD `logo`) via github.com → `assets/img` → Upload files.
- **Google Business Profile** — once the virtual address exists.
- **Real reviews** — once there are Google reviews, quote with attribution.

---

## 🟢 Done

- **17 Oct 2026 — went live.** Pages enabled; Namecheap DNS: `www` CNAME →
  `girgas88-jpg.github.io.`, four `@` A records → GitHub; stale URL Redirect
  removed; mail settings untouched. Public WHOIS checked: Nominet redacts the
  registrant name, address and email.
- **17 Oct 2026 — copy stripped back** (16 inbox entries): shorter copy on
  every page; servicing promises cut to flue, ventilation, heat input,
  working pressure, safety devices + efficiency/energy advice; replacement
  page loses condensate/sludge detail; unvented page loses technical
  checklist, discharge materials and sizing table; heat pump page rewritten
  to the partner model; About loses sole trader, postcode, "no office, no
  call centre" and the "What I won't do" card, gains "same engineer start to
  finish" and "diary's full, book ahead, no 24-hour cover"; new **Landlords**
  (`services.html#landlord`) and **Cookers, hobs & fires**
  (`services.html#cookers`) sections, both also on the home page; power
  flushing and radiator balancing/"far end of the house" copy removed;
  "not every heating engineer holds G3" removed; "incl. Baxi" drum caption
  removed; contact form gains a cooker/hob/fire option and its postcode
  placeholder is no longer Gavin's real postcode; address site-wide is
  "Glasgow".
- **17 Oct 2026 — first real photos.** `assets/img/work/` (boiler-1, -3,
  -4, radiator-1) from five photos Gavin dropped in the root of his
  gavin.ian.ritchie Google Drive. Cropped to remove a warranty serial number,
  tools/clutter and a street view; resized to 720 px; re-encoded with no
  EXIF. Photo on the Gas boilers and Radiators cards (`.card-photo`), plus a
  swipeable **Recent work** strip (`#work`, CSS scroll-snap + small arrow
  script at the end of `main.js`, no library). Baxi branding in the boiler
  photos accepted by Gavin before the contract check.
  Later the same day: Megaflo cylinder photo added (card + strip) from
  Gavin's Samsung Object-eraser edit `20260725_141846(1).jpg` — installation
  unchanged, wall lightened; crop also removes Samsung's "AI-generated
  content" stamp (Gavin informed).
- **17 Oct 2026, late — kitchen 400 cleaned up.** `boiler-4.jpg` replaced
  with Gavin's Grok-edited version of the same install
  (`grok_1792272340249(1).jpg` in Drive): stripped walls repainted, stickers
  and Baxi badge erased. Installation checked against the original — pipe
  count and positions, flue, condensate and stat receiver unchanged. Three
  stray blue marker marks from the edit painted out locally; cropped to drop
  the window/street view, sink and "AI-generated content" stamp. **The other
  Grok version (`…249.jpg`) was NOT used — it redrew the stickers as
  gibberish text.**
- **17 Oct 2026 — last three cards.** Gas boilers card swapped to the Baxi
  400 kitchen install (`boiler-4`) at Gavin's request. **Landlords card:**
  `landlord-cp12.jpg` is a render of GasAssistIQ's own LGSR template filled
  with dummy details ("Example Tenant", cert no. EXAMPLE) — his real
  paperwork layout, no Gas Safe logo, no customer data. **Cookers card:**
  `hob-stock.jpg` is **Pexels photo 13422435** (Pexels licence: free
  commercial use, no attribution required) — chosen for an even blue flame;
  two candidates were rejected for yellow/orange flames, which read as poor
  combustion to anyone in the trade. Neither is in the Recent work strip —
  that stays real jobs only.
- **17 Oct 2026 — mobile check.** Every page loaded in frames at 320, 360,
  375, 393 px portrait and 800/852 px landscape. Only fault: `contact.html`
  scrolled sideways (+13 to +46 px) because the unbreakable email address
  set the grid column's min-content width. Fixed in CSS (`min-width: 0` on
  grid children, `overflow-wrap: anywhere` on mailto links and spec cells);
  re-test clean on all 66 page/size combinations. Menu toggle, photo strip
  and form checked visually. Not tested on physical iPhone/Android hardware.
- Earlier: nine pages + `thanks.html` + `404.html`; responsive, dark mode;
  LocalBusiness + FAQPage JSON-LD, sitemap, robots; logo palette; numbered
  Gas Safe badge (kept on About and hero — Gavin confirmed 17 Oct).

---

## Competitor check (2026-08-27)

Local rivals (JDS Gas Services, Absolute Gas Services, Able Group,
TrustATrader listings) are phone-first, show Gas Safe numbers prominently, and
the stronger ones show manufacturer accreditation logos and package pricing.
Our gaps: no accreditation badges, no reviews yet, no phone number (virtual
number now planned).

---

## Gotchas for next session

- **Header/footer are duplicated in all 11 HTML files.** Site-wide changes
  need a scripted replace across `*.html`, not an edit to one file.
- **`404.html` uses root-relative links** on purpose.
- **FAQ answers exist twice** — visible HTML and `FAQPage` JSON-LD. Edit both.
  A quick node check comparing `<summary>`/answer pairs to the JSON-LD caught
  nothing on 17 Oct; rerun it after FAQ edits.
- **Don't delete `CNAME`.**
- **`.nojekyll` matters.**
- **Ghost drum:** fades the `svg` only, not the `figure`.
- **VAT and the phone number were deliberately removed** — don't restore
  from old commits (a *virtual* number is a new decision, see above).
- **Base64 assets are fragile to hand-edit.**
- **Photos:** originals live in Gavin's Drive (`C:\Users\girga\My Drive
  (gavin.ian.ritchie@gmail.com)` on the rig — the Drive connector can't
  auth). Never commit originals: crop, resize to 720 px and re-encode (drops
  EXIF/GPS); check for serial numbers, house numbers, street views, faces.
- **AI photo clean-up (ElevenLabs):** the image-edit node defaults to
  **16:9, 1K** — on a portrait photo the model redraws the installation to
  fill the frame (invented pipework). Set 9:16 / portrait before running.
  Cost ~1,800 credits per variation, 4 variations per run. First attempt
  17 Oct wasted ~22k credits this way; nothing from it was used. Only ever
  clean backgrounds, never the installation, and compare against the original.
- **Line endings:** working copies are a CRLF/LF mix (`text=auto`). Scripted
  edits must handle both; `sed -i` in Git Bash strips CRs. Commits normalise.
