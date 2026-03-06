# Carreh — AI Travel Platform & Visa Services

Official website for **Carreh** (SIREN: 999 322 886), an AI-powered travel technology startup headquartered in Paris, France.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — Hero, services, destinations, concierge, visa preview, CTA |
| `visas.html` | Visa Services — 7 tabbed categories, 40+ countries, request modal |
| `contact.html` | Contact page — Form (Netlify Forms), WhatsApp, FAQ |
| `styles.css` | Full design system (Purple & White luxury theme) |
| `main.js` | Nav scroll, scroll reveals, language toggle EN/FR, visa tabs, modal, forms |

## Stack

- Pure HTML / CSS / JavaScript — **zero build step required**
- Fonts: DM Serif Display + Inter (Google Fonts CDN)
- Images: Unsplash CDN + Storyblok CDN
- Forms: Netlify Forms (data-netlify="true")

## Deploy on Netlify

### Option A — Drag & Drop (instant)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire folder onto the page
3. Done — live in seconds

### Option B — GitHub (auto-deploy on push)
1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Select your repo
4. Build settings:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
5. Click **Deploy site**

The `netlify.toml` in this repo sets these automatically.

## Netlify Forms

Both forms use `data-netlify="true"` and will appear in your Netlify dashboard under **Forms** automatically after first submission.

- `contact` form → contact.html
- `visa-request` form → visas.html modal

## Contact

- Email: support@carreh.com
- WhatsApp: +33 07 75 84 63 42
- Instagram: @carrehpro
- Address: 29 Av. de la République, 75011 Paris
