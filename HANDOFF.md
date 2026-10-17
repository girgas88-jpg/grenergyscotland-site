# HANDOFF — grenergyscotland.co.uk

**Updated:** 2026-10-17
**Status:** **LIVE** at http://www.grenergyscotland.co.uk — GitHub Pages on
(`main` / root), Namecheap DNS pointed at GitHub, bare domain redirects to
`www`. Site v3 copy pushed: stripped back per Gavin's 17 Oct voice notes.
**HTTPS pending** (certificate not yet issued at time of writing) and the
**enquiry form is not connected** yet.

---

## 🔴 Still blocking

### 1. Enforce HTTPS

Once GitHub issues the certificate (Settings → Pages stops saying "DNS Check
in Progress"), tick **Enforce HTTPS**. Verify from outside:
`curl -sI https://www.grenergyscotland.co.uk` → 200, and
`http://` → 301 to `https://`.

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
| **Photos** | Gavin wants real job photos throughout (installs, boilers, radiators, before/after). Needs him to send them — landscape, good light, no customer house numbers or faces. |
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
- **Line endings:** working copies are a CRLF/LF mix (`text=auto`). Scripted
  edits must handle both; `sed -i` in Git Bash strips CRs. Commits normalise.
