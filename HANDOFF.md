# HANDOFF — grenergyscotland.co.uk

**Updated:** 2026-08-27 (evening)
**Status:** Site v2 pushed — VAT wording removed, phone number removed
(email + form only), ghost drum added to the home page. Repo is public.
**Not yet live** — Pages and DNS still to do.

---

## 🔴 Blocking — the site does nothing until these are done

### 1. Turn on GitHub Pages

Repo → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`,
folder `/ (root)` → Save. Custom domain field should pick up
`www.grenergyscotland.co.uk` from the `CNAME` file.

### 2. Point the DNS

At whoever `grenergyscotland.co.uk` is registered with:

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `girgas88-jpg.github.io` | default |
| A | `@` | `185.199.108.153` | default |
| A | `@` | `185.199.109.153` | default |
| A | `@` | `185.199.110.153` | default |
| A | `@` | `185.199.111.153` | default |

The four A records send the bare domain to GitHub so `grenergyscotland.co.uk`
redirects to `www`. Propagation is usually minutes, occasionally hours. Then
tick **Enforce HTTPS** in Settings → Pages — the certificate can take up to an
hour to issue and the box stays greyed out until it does.

### 3. Connect the enquiry form

Sign up at **web3forms.com** with `grenergyscotland@gmail.com` — free, no
account needed, the key arrives by email. Then in `contact.html`:

```html
<input type="hidden" name="access_key" value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY">
```

Replace that value, push, and **send yourself a test enquiry**. Until it's
replaced, `main.js` blocks submission and tells the visitor to email instead —
so the form fails safe rather than silently binning leads.

---

## Competitor check (2026-08-27)

Looked at local rivals: JDS Gas Services (Kirkintilloch), Absolute Gas
Services / glasgowgasengineer.co.uk, plus the Able Group and TrustATrader
listings. Pattern: all phone-first, Gas Safe number prominent; the stronger
ones (JDS) show **manufacturer accreditation logos — Worcester, Ideal,
Vaillant, Baxi** — and package pricing; several have Rated People / review
counts. Weaknesses across the board: dated, text-heavy design, and half have
no reviews. Our gaps against them: no manufacturer accreditation badges, no
reviews yet, and (by Gavin's choice) no phone number.

## Logos — read before adding any

- **Gas Safe logo:** Gavin is registered (962889) so he's entitled to display
  it, but the artwork must come from the Gas Safe Register engineer portal
  (Rules for Registered Businesses govern usage). Download it there, drop it
  in `assets/img/`, and add it beside the register number in the footer and
  hero card. **Do not redraw or generate it** — it's a certification mark.
- **Baxi:** only add the Baxi (or Baxi Approved Installer) logo if Gavin is
  actually on their installer scheme, using artwork Baxi supplies. The drum's
  boiler drawing is deliberately unbranded; the caption says "incl. Baxi"
  which is a statement of what he works on, not an accreditation claim.

## 🟠 Decisions Gavin needs to make

| Question | Why it matters |
|---|---|
| **Full address or town only?** The site currently shows *"Torrance, Glasgow G64"* — not the full street address, since it's the home address. A full address helps local SEO and is required for a Google Business Profile, but it's public forever. | `index.html`, `about.html`, `contact.html`, footer on every page, and the JSON-LD `PostalAddress` in `index.html` |
| **MCS certification** — not claimed anywhere on the site, because it wasn't in the business repo. Grant-funded heat pump work generally requires it. If you hold it, say so on `heat-pumps.html`; it's a strong differentiator. | `heat-pumps.html` |
| **Public liability insurance** — not mentioned. Customers ask. If you're covered, worth a line on `about.html` with the cover amount. | `about.html` |
| **Emergency / out-of-hours** — the site deliberately promises no response time. Your pricing basis has an out-of-hours rate, so if you want that work, it needs saying somewhere. | `services.html`, `contact.html` |
| **No phone number** — removed at your request. Both local competitors are phone-first because breakdown customers phone. Reconsider a forwarding/virtual number if enquiry volume disappoints. | site-wide |
| **Areas list** — I built it from a sensible radius around Torrance. Check it: anything on there you won't travel to, and anything missing you would. | `areas.html` |

---

## 🟡 Worth doing soon

- **Photographs.** The site has no images at all beyond the favicon. Photos of
  actual jobs — a tidy boiler install, a cylinder in a cupboard, the van —
  would lift it more than any copy change. Shoot landscape, good light, and
  they'll drop into the service pages.
- **Google Business Profile.** For a local trade this drives more calls than the
  website itself. Needs the address decision above settled first.
- **Real reviews.** Deliberately none on the site — inventing them is out.
  Once you've a few Google reviews, they can be quoted with attribution.
- **Logo.** The header currently uses a simple "GR" block. A proper logo drops
  straight into `.brand .mark` in the header of each page.

---

## 🟢 Done

- Nine pages: home, services, gas boilers, unvented cylinders, heat pumps,
  areas, about, contact, privacy — plus `thanks.html` and `404.html`
- Responsive layout, mobile nav, dark mode via `prefers-color-scheme`
- `LocalBusiness` + `FAQPage` structured data, `sitemap.xml`, `robots.txt`
- Enquiry form with honeypot and a fail-safe guard until the key is set
- Copy checked against `GR-Energy-Scotland/CLAUDE.md`: no VAT references,
  no England-only Building Regs wording, no invented credentials or reviews

---

## Gotchas for next session

- **Header/footer are duplicated in all 11 HTML files.** Site-wide changes need
  a `sed` across `*.html`, not an edit to one file.
- **`404.html` uses root-relative links** (`/index.html`) on purpose. Don't
  "fix" them to relative.
- **FAQ answers exist twice** — in the visible HTML and in the `FAQPage`
  JSON-LD. Edit both or the structured data goes stale.
- **Don't delete `CNAME`.** GitHub's Pages UI rewrites it; losing it drops the
  custom domain and the site 404s on the real URL.
- **`.nojekyll` matters** — without it GitHub runs Jekyll over the repo and can
  swallow files beginning with an underscore.
- **Ghost drum:** `#kit` section on `index.html` + JS at the bottom of
  `main.js`. The drum fades the `svg` only — don't move the opacity onto the
  `figure` or the captions wash out. Reduced-motion users get a static row.
- **VAT and the phone number were deliberately removed** on 2026-08-27 —
  don't "restore" them from an old commit.
