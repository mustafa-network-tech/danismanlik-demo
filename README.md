# Mavi Danışmanlık

Production-ready, conversion-focused website for the Turkish consulting brand **Mavi Danışmanlık** — "Net yol, sakin zihin."

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- react-hook-form + zod
- lucide-react
- No database (Vercel-ready)

## Quick start

```bash
cp .env.example .env.local
# Edit .env.local: NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_PHONE_NUMBER, NEXT_PUBLIC_EMAIL

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
danısmanlık/
├── app/
│   ├── layout.tsx           # Root layout, metadata
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── (site)/
│       ├── layout.tsx       # Header, Footer, FloatingButtons
│       ├── page.tsx         # Home
│       ├── hizmetler/page.tsx
│       ├── hakkimizda/page.tsx
│       ├── iletisim/page.tsx
│       ├── kvkk/page.tsx
│       ├── gizlilik/page.tsx
│       └── kullanim-sartlari/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FloatingButtons.tsx  # WhatsApp (right) + Call (left, mobile)
│   ├── Section.tsx
│   ├── CTAButtons.tsx
│   ├── ServiceCard.tsx
│   ├── TrustBar.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── PricingCards.tsx
│   ├── FAQAccordion.tsx
│   └── LeadForm.tsx
├── lib/
│   ├── site-config.ts       # All editable content (brand, services, FAQ, pricing, form fields)
│   └── utils.ts             # cn, buildLeadMessage, getWhatsAppUrl, getMailtoUrl
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Editable content

All copy, services, FAQs, testimonials, pricing, and lead form fields are in **`lib/site-config.ts`**. Edit that file to change content without touching components.

## Env vars

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `905XXXXXXXXX` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Display format, e.g. `+90 5XX XXX XX XX` |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `NEXT_PUBLIC_SITE_URL` | Optional; for sitemap/robots (e.g. `https://mavidanismanlik.com`) |

## Deploy (Vercel)

```bash
npm run build
```

Connect the repo to Vercel and set the env vars in the dashboard.
