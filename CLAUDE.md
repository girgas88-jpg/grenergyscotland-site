# CLAUDE.md — grenergyscotland.co.uk

Static marketing website for **GR Energy Scotland**, Gavin's heating and gas
engineering business in Glasgow. Plain HTML/CSS/JS on GitHub Pages.

**Live:** https://www.grenergyscotland.co.uk
**Repo:** `girgas88-jpg/grenergyscotland-site` (public — GitHub Pages needs it)
**Business repo:** `girgas88-jpg/GR-Energy-Scotland` (quotes, estimates, pricing)

Read `HANDOFF.md` for current state and next actions.

---

## ⚠️ Content rules — get these wrong and it's a real problem

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
- Works on air source heat pumps
- Based in Torrance, covers Glasgow and East Dunbartonshire

**Not claimed, because unconfirmed:** MCS certification, OFTEC, years of
experience, number of jobs completed, insurance cover, "24/7", guaranteed
response times, awards, and **any customer review or testimonial**.

Do not add a testimonials section with placeholder or invented quotes. Real
reviews only, attributed, with the customer's agreement.

### 4. Metric only

mm, litres, kg, °C, l/min throughout. No imperial anywhere.

### 5. British spelling

`-ise` not `-ize`, "programme", "litre", "metre".

---

## Structure

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

### The ghost drum (home page)

`index.html` has a `#kit` section — a horizontal band of ghosted inline-SVG
line art (boiler, pipework, heat pump, radiator, cylinder, black T7 van) that
translates and rotates like a cylinder as the visitor scrolls. Driven by the
"Ghost drum" block at the bottom of `assets/js/main.js`; styles under
"Ghost drum" in the stylesheet. It respects `prefers-reduced-motion`
(falls back to a static wrapped row) and fades only the `svg`, never the
captions. The art is deliberately unbranded — see HANDOFF for the Gas Safe
and Baxi logo situation before adding any trademark.

## Styling

One stylesheet, `assets/css/style.css`, driven by CSS custom properties on
`:root`. Dark mode is handled by a single `prefers-color-scheme` block that
redefines the tokens — **never hard-code a colour in a page**, use the variable.

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
In dark mode the header logo sits on a white chip (`.brand img`).

## The enquiry form

`contact.html` posts to **Web3Forms** (`api.web3forms.com/submit`). GitHub Pages
is static and cannot process a form itself, which is why a third party is
involved at all.

- The `access_key` hidden input must hold the real key from web3forms.com.
  Until it does, `main.js` intercepts submit and shows a fallback message.
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
