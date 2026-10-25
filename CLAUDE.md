# CLAUDE.md — grenergyscotland.co.uk

Static marketing website for **GR Energy Scotland**, Gavin's heating and gas
engineering business in Glasgow. Plain HTML/CSS/JS on GitHub Pages.

**Live:** https://www.grenergyscotland.co.uk (HTTPS since 17 Oct 2026)
**Repo:** `girgas88-jpg/grenergyscotland-site` (public — GitHub Pages needs it)
**Business repo:** `girgas88-jpg/GR-Energy-Scotland` (quotes, estimates, pricing)

Read `HANDOFF.md` for current state and next actions.

**Why the site exists (2026-10-17):** mainly so Stripe (contactless payments
on Gavin's phone, paying out to Monzo) could verify the business is real. Keep
it up and keep the business name and contact details consistent with what
Stripe holds.

---

## ⚠️ Content rules — get these wrong and it's a real problem

### 0. Less is more (2026-10-17)

Gavin's rule: **strip it back.** Too much detail reads as AI-written, and
"less information means less for customers to turn against you". Say what he
does, not how he does it — no checklists of what a service covers beyond the
dictated list, no fault-diagnosis detail, no technical sizing tables, nothing
defensive ("no call centre", "what I won't do"). Don't promise anything he
hasn't said: service = flue, ventilation, heat input, working pressure and
safety devices, plus efficiency check and energy-saving advice — no
electrodes or seals. Standards wording is fixed: *"All work is properly
tested, commissioned and installed to local building regulations and
manufacturer's instructions, using quality equipment and materials
throughout."* Don't add radiator/circulation troubleshooting ("cold at the far
end") — it invites problems he doesn't want.

### 0a. Gavin's voice (25 Oct 2026)

Gavin asked for the whole site to sound like him. Copy is first person,
short and plain, the way he talks: "I quote the job and I do the job",
"tell you straight", "get in touch early" (never "to avoid disappointment").
No sales phrasing, very few dashes (they read as AI-written). Keep it
professional, though: no slang beyond the odd plain Scots phrase, and still
no new claims. The standards sentence and heat pump partner wording below
stay word for word.

### 0b. Baxi and manufacturer logos

**Don't name Baxi anywhere until Gavin has checked his Baxi contract for a
no-marketing clause.** Heat pump copy says "MCS-accredited partner". No
manufacturer logos (Baxi, Ideal, Worcester, Vaillant, Megaflo, etc.) unless
he's approved / listed as an approved installer and has their artwork.

### 0c. Heat pumps model

New heat pump installs, in Gavin's wording (17 Oct 2026, late): working with
an MCS-accredited partner, **"we carry out the system design and order the
equipment and materials the job needs"** — never "supply the equipment". Gavin
installs and commissions as the engineer and is the customer's single point of
contact. **Don't claim he holds MCS himself.** The fee he pays the partner is
not website copy. Grants: link Home Energy Scotland's funding page
(`homeenergyscotland.org/find-funding/`, checked 200 on 17 Oct 2026).

### 1. VAT

Gavin is a **sole trader and not VAT registered**, but as of 2026-08-27 he asked
for **all VAT mentions to be removed from the site** — no "no VAT added"
selling point, no VAT FAQ. Don't reintroduce them. The underlying rule stands:
**never add a VAT number, a VAT breakdown, or "prices exclude VAT" anywhere.**

### 1b. Contact channels

As of 2026-08-27 the site carries **no phone number** — enquiries are by the
contact form and email only, at Gavin's request. Don't re-add a tel: link
without asking him. The **National Gas Emergency Service number (0800 111 999)
stays** — that's a safety line, not a contact channel.

### 2. Scotland, not England

**Do not write "notified to Building Standards", "Part G", "Part L", or
"competent person self-certification" in customer-facing copy.** That is England
and Wales practice. Scotland operates under the Building (Scotland) Regulations.
This mistake was made once on QUO-0001 and corrected — don't reintroduce it here.

Safe wording, already used on the site: *"G3 registered"*, *"commissioned,
tested and certified"*, *"gas work notified as required"*.

### 3. Never invent credentials or social proof

The site currently claims **only** what is verifiable:

- Gas Safe register number **962889**
- G3 qualified for unvented hot water storage
- Installs air source heat pumps (via the partner model above)
- **Glasgow-based** — no town, postcode or business structure (sole trader)
  anywhere on the site, at Gavin's request 2026-10-17. Torrance may appear
  only as an area covered. A virtual business address is planned.
- Diary usually full, book in advance; **no 24-hour emergency cover**
- **20 years' experience** in heating and gas — confirmed by Gavin 17 Oct 2026
  and highlighted site-wide (top bar, hero, About, services intro, meta)

**Not claimed, because unconfirmed:** MCS certification, OFTEC, number of
jobs completed, insurance cover, itemised bills (parts and labour shown separately — Gavin doesn't always do it, 18 Oct 2026), "24/7", guaranteed response times, awards,
and **any customer review or testimonial**.

Do not add a testimonials section with placeholder or invented quotes. Real
reviews only, attributed, with the customer's agreement.

### 4. Metric only

mm, litres, kg, °C, l/min throughout. No imperial anywhere.

### 5. British spelling

`-ise` not `-ize`, "programme", "litre", "metre".

---

## Structure

**Pages (25 Oct 2026):** `index`, `services` (overview only: six cards, one
per service, each opening that service's own page), the six **service pages**
`gas-boilers`, `unvented-cylinders`, `heat-pumps`, `radiators`,
`cookers-hobs-fires`, `landlords`, then `areas`, `about`, `contact`,
`privacy`, `thanks`, `404`.

**Why one page per service (Gavin's voice notes, 25 Oct 2026):** the old
single services page, where every card scrolled down to a long description
block, read as "too wordy". Each service now has its own page holding its
description and its own FAQs (with their own `FAQPage` JSON-LD); the services
page keeps no descriptions and no FAQ. The service pages are **not in the
nav** ("hidden" in Gavin's words) - they're reached from the services cards,
the home-page photo tiles and the footer - but they are indexable and in the
sitemap. The first three reuse the filenames of the old 17 Oct forwarding
stubs, so old links and search results land on a real page again. Old
`services.html#boilers`-style links are sent to the right page by a few lines
at the end of `main.js`; if a page is renamed, update that map too.

No templating engine. The `<header>`, `<footer>` and nav markup are **duplicated
in every HTML file**. This is deliberate — it keeps the repo dependency-free —
but it means site-wide changes need a `sed` across all pages:

```bash
grep -rl 'OLD' *.html | xargs sed -i 's/OLD/NEW/g'
```

Check `git diff` afterwards. The nav lives between `<nav class="nav" id="nav">`
and `</nav>`; the footer between `<footer class="site-footer">` and `</footer>`.

`404.html` is the exception: its links are **root-relative** (`/index.html`)
because GitHub Pages serves it from arbitrary URL paths. Keep it that way.

### Home page sections

**Redesigned 17-18 Oct 2026 after homecomfort-ses.co.uk** (Gavin's pick), in GR's own black/red: light split **hero** (text left, `boiler-4` right with the Gas Safe badge on its corner) → **six photo tiles** (`.svc-tiles`, three across; since 25 Oct just the photo with the service name over it, no heading or text - Gavin: "keep the home page with just the pictures of services" - each opens that service's page) → dark **"Time for a new boiler?"** band (`.feature-band`) → **Recent work** (`#work`: before/after slider + four clickable jobs that open a `<dialog>`) → **Why choose** four columns (`.why-grid`) + Gas Safe explainer (`.gs-row`) → Where I work → FAQ → "Planning a heating project?" band. Headings h1/h2 are Inter **300** (light); buttons are small-caps, square-ish, outlined (`.btn-outline` dark, `.btn-ghost` white on dark), red `.btn-primary` kept for the main call to action. Take their layout and feel only - **never their wording, photos, reviews or manufacturer logos**. The "kit I work with" ghost-drum
section was **removed 17 Oct 2026** at Gavin's request (Recent work shows the
same thing with real jobs) — its HTML, JS and CSS are all gone; don't restore it.

Job stories come from Gavin (usually via Ash), rewritten to read
professionally. **Never invent job details** and never add "customer very
happy" lines — that is unattributed social proof (content rule 3).

## Styling

One stylesheet, `assets/css/style.css`, driven by CSS custom properties on
`:root` — **never hard-code a colour in a page**, use the variable.

**Light only (17 Oct 2026, Gavin: the dark mode was "dull and gloomy").**
There is no `prefers-color-scheme: dark` rule anywhere, `:root` sets
`color-scheme: light`, and every page carries
`<meta name="color-scheme" content="light only">` so Chrome's auto-dark and
Samsung Internet's dark mode leave it alone. Don't add a dark theme back
without asking.

| Token | Use |
|---|---|
| `--navy` | Header bar, footer, CTA band |
| `--flame` | Primary buttons, accents, active nav |
| `--ink` / `--body` / `--muted` | Text hierarchy |
| `--bg` / `--bg-alt` / `--card` | Surfaces |

The palette comes from **Gavin's actual logo** (2026-08-27): near-black
`#16161a`, greys, and logo red `#e02b2b`. Don't reintroduce the old
navy/orange scheme.

### Brand assets

`assets/img/logo.svg`, `gas-safe-962889.svg` and `favicon.svg` are **PNG
artwork wrapped in SVG containers** (line-wrapped base64) because this
session's GitHub push path only carries text. Browsers render them normally.
The real PNGs (incl. `og-image.png`, which social scrapers need as raster)
are with Gavin to upload via the GitHub web UI — see HANDOFF. The Gas Safe
badge is Gavin's own numbered artwork (962889); never redraw or recolour it.

## The enquiry form

`contact.html` posts to **Web3Forms** (`api.web3forms.com/submit`). GitHub Pages
is static and cannot process a form itself, which is why a third party is
involved at all.

- The `access_key` hidden input holds the key for the "GR Energy website enquiries" form (account grenergyscotland@gmail.com, connected 17 Oct 2026).
  Until it does, `main.js` intercepts submit and shows a fallback message.
  **Web3Forms now needs an account** (app.web3forms.com, as of 2026-10-17) —
  the old "email in, key out, no account" flow is gone. Gavin signs up himself;
  Claude can't create accounts or accept terms.
- `botcheck` is the honeypot — leave it in, leave it hidden.
- `redirect` points at `thanks.html`, which is `noindex`.
- Free tier is 250 submissions/month. If it's ever exceeded, submissions are
  dropped silently — worth knowing before blaming the form.

**The access key is public by design** (it's in client-side HTML). It is not a
secret, and it cannot be used to read past submissions.

## SEO

- One `LocalBusiness`/`HVACBusiness` JSON-LD block on `index.html` only.
- `FAQPage` JSON-LD on the pages that have a FAQ section. **If you edit a FAQ
  question or answer in the HTML, edit the matching JSON-LD too** — Google
  penalises structured data that doesn't match the visible page.
- `sitemap.xml` lists every indexable page. Add new pages to it.
- Each page has a unique `<title>` and `<meta name="description">`.

## Deployment

Push to `main` → GitHub Pages rebuilds. Settings → Pages → Source: *Deploy from
a branch*, branch `main`, folder `/ (root)`.

`CNAME` holds `www.grenergyscotland.co.uk`. **Don't delete it** — the GitHub
Pages UI rewrites this file, and losing it drops the custom domain.

DNS at the registrar:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `girgas88-jpg.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Then tick **Enforce HTTPS** once the certificate is issued (can take an hour).

DNS is at **Namecheap** (BasicDNS). Set up 2026-10-17. Namecheap's Mail
Settings (Email Forwarding + its SPF TXT) were left untouched. Gotcha: a
stale *URL Redirect* host record there threw "Failed to retrieve the record"
on delete but had in fact gone — reload before retrying. Claude Code's
safety check blocks Claude from deleting DNS records; Gavin clicks those.

## Analytics (25 Oct 2026)

Both on **grenergyscotland@gmail.com**.

- **GoatCounter** — `grenergyscotland.goatcounter.com`. One `<script data-goatcounter=...>` line just before `</head>` on all 14 pages (incl. the six service pages, `thanks.html`, which counts form enquiries, and `404.html`). Any new page needs the line too. Cookieless, so no consent banner (keeps rule 0). Gavin excludes his own visits by opening `/#toggle-goatcounter` once per browser.
- **Google Search Console** — URL-prefix property `https://www.grenergyscotland.co.uk/`, verified by the **HTML file `google046f1be6092b66ba.html` in the repo root. Never delete or rename it** — the site loses verification. `sitemap.xml` submitted 25 Oct.
- **Home Assistant feed (25 Oct 2026):** `site_stats.py` in `Documents\App-Backups` on the rig reads the GoatCounter API (key `goatcounter_token` in `limits.local.json`, Read statistics only) and POSTs to a local-only HA webhook; automation "GR Energy website stats (from rig)" fills `input_number.website_*` / `input_text.website_*`, shown in the "GR Energy website" block on the Tech Overview dashboard (`gasassistiq-status`). Hourly via scheduled task **GR Energy site stats**. Enquiries = hits on any path containing `thanks` — if `thanks.html` is ever renamed, update the script.
- `privacy.html` Cookies section describes both. If you add any other tracking, update it — and anything that sets cookies needs a consent banner under PECR, so ask Gavin first.

## Related repos

| Repo | Purpose |
|---|---|
| `girgas88-jpg/CLaude-memory` | Cross-project memory index — read `MEMORY.md` first each session |
| `girgas88-jpg/GR-Energy-Scotland` | Quotes, estimates, pricing basis, technical defaults. **Source of truth for business facts** — if the site and that repo disagree, that repo wins |
| `girgas88-jpg/GASASSISTIQ` | Job manager that generates the quotes |

## Session workflow

1. **Session start** — read `girgas88-jpg/CLaude-memory/MEMORY.md`, then this
   file and `HANDOFF.md`.
2. **Session end** — update `CLAUDE.md` / `HANDOFF.md` with new decisions,
   files, gotchas and state; update `MEMORY.md` routing if scope changed; commit.
