# NexaBoost — Digital Marketing Agency Website

A modern, high-performance agency website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Features a dark glassmorphism UI with neon accents, animated service cards with images, a rebuilt about page, and full responsiveness.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Orbitron + Inter (Google Fonts) |
| Images | Next.js Image (Unsplash CDN) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services preview, why us, testimonials, FAQ |
| `/services` | All 6 services with image cards and process steps |
| `/about` | Team, principles, office photo, stats |
| `/contact` | Contact form, WhatsApp, email, quick FAQs |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Services

1. Web Development
2. AI Development
3. SEO Optimization
4. Google Ads
5. Meta Ads
6. Backlink Building

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
rankgrow-nextjs/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsApp button)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & custom utility classes
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroBanner.tsx
│   ├── ServicesGrid.tsx
│   ├── ServiceCard.tsx     # Service card with banner image
│   ├── WhySection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   ├── AnimatedSection.tsx
│   ├── MarqueeSection.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   └── services.ts         # Service data (title, desc, icon, image, features)
├── public/                 # Static assets
└── next.config.js          # Next.js config (Unsplash image domain)
```

---

## Contact

**NexaBoost**
- WhatsApp: +92 331 4589220
- Email: hello@nexaboost.com
- Location: Peshawar, Pakistan
