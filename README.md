# grenergyscotland.co.uk

Static website for **GR Energy Scotland** — Gavin's heating and gas engineering
business in Glasgow. Plain HTML, CSS and a few lines of vanilla JS. No build
step, no framework, no dependencies.

Hosted on **GitHub Pages** from the `main` branch, custom domain
`www.grenergyscotland.co.uk`.

## Editing

Open the `.html` file and edit it. That's the whole workflow. Push to `main`
and GitHub Pages redeploys in about a minute.

There is no templating, so the header, footer and nav are duplicated across
every page. To change nav or footer everywhere:

```bash
# example: change the phone number across the whole site
grep -rl '07915 458467' *.html | xargs sed -i 's/07915 458467/07915 999999/g'
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

| Path | What it is |
|---|---|
| `index.html` | Home |
| `services.html` | Services overview |
| `gas-boilers.html` | Boiler repair / servicing / replacement |
| `unvented-cylinders.html` | G3 unvented cylinder work |
| `heat-pumps.html` | Air source heat pumps |
| `areas.html` | Areas covered |
| `about.html` | About |
| `contact.html` | Enquiry form + direct contact |
| `thanks.html` | Form success page (noindex) |
| `privacy.html` | Privacy notice |
| `404.html` | Not-found page (root-relative links) |
| `assets/css/style.css` | All styling |
| `assets/js/main.js` | Mobile nav + form guard |
| `CNAME` | Custom domain for GitHub Pages |
| `sitemap.xml`, `robots.txt` | SEO |
| `.nojekyll` | Stops GitHub running Jekyll over the files |

See `CLAUDE.md` for content rules and `HANDOFF.md` for what still needs doing.
