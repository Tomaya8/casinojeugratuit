# CasinoJeuGratuit.com

The leading French-language comparison platform for no-deposit casino bonuses. Built for SEO performance, conversion optimization, and user trust.

**Live**: [casinojeugratuit.vercel.app](https://casinojeugratuit.vercel.app)
**Target domain**: [casinojeugratuit.com](https://casinojeugratuit.com)
**GitHub**: [Tomaya8/casinojeugratuit](https://github.com/Tomaya8/casinojeugratuit)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + @tailwindcss/typography |
| Rendering | Static Site Generation (SSG) |
| Runtime | React 19 |
| Database | Firebase Firestore (email collection, contact forms) |
| Hosting | Vercel (auto-deploy from GitHub) |
| Images | Unsplash (optimized via next/image) |

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000`.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your Firebase credentials:

```bash
cp .env.example .env.local
```

Firebase config is hardcoded in `src/lib/firebase.ts` for client-side reliability, but env vars are available for override.

## Project Structure

```
src/
  app/                              # Next.js App Router pages
    page.tsx                        # Homepage
    bonus-sans-depot/
      page.tsx                      # All bonuses listing (filterable table)
      [slug]/page.tsx               # Individual bonus detail pages (10)
      loading.tsx                   # Loading skeleton
    free-spins-sans-depot/
      page.tsx                      # Free spins category (full SEO)
    bonus-sans-depot-sans-wagering/
      page.tsx                      # No-wagering bonuses (full SEO)
    bonus-casino-gratuit/
      page.tsx                      # Free casino bonuses
    code-promo-casino/
      page.tsx                      # Promo code offers
    blog/
      page.tsx                      # Blog hub with photo cards
      [slug]/page.tsx               # Blog articles with React renderer
      loading.tsx                   # Loading skeleton
    about/page.tsx                  # About page
    methodologie/page.tsx           # Scoring methodology
    contact/page.tsx                # Contact form (Firebase)
    politique-confidentialite/      # Privacy policy (French, GDPR)
    conditions-utilisation/         # Terms of use (French, 18+)
    api/
      newsletter/route.ts           # Newsletter stub (client-side Firebase)
      contact/route.ts              # Contact stub (client-side Firebase)
    sitemap.ts                      # Dynamic sitemap.xml
    robots.ts                       # robots.txt
    not-found.tsx                   # Custom 404 page
    loading.tsx                     # Root loading skeleton
    layout.tsx                      # Root layout (viewport, metadata, icons)
    globals.css                     # Global styles + typography plugin
  components/
    Header.tsx                      # Sticky header, active state, mobile menu
    Footer.tsx                      # Footer with legal links, responsible gambling
    BonusCard.tsx                   # Bonus offer card
    BonusTable.tsx                  # Filterable/sortable comparison table
    CouponReveal.tsx                # Tap-to-reveal promo code + copy
    CasinoBg.tsx                    # SVG casino-themed hero background
    FAQ.tsx                         # Accordion FAQ with Schema.org markup
    HowItWorks.tsx                  # 4-step process section
    NewsletterPopup.tsx             # Timed popup (15s), saves to Firebase
    NewsletterInline.tsx            # Inline email form, saves to Firebase
    ContactForm.tsx                 # Contact form, saves to Firebase
  data/
    bonuses.ts                      # 10 bonus offers + helper functions
    blog.ts                         # 21 blog articles + helper functions
  lib/
    firebase.ts                     # Firebase client SDK (Firestore)
    utils.ts                        # Score colors, wagering labels, formatting
public/
  favicon.svg                       # SVG favicon (CJ logo)
firebase.json                       # Firebase project config
firestore.rules                     # Firestore security rules
```

## Pages (50 total)

### Core Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage: hero with casino SVG bg, top offers, free spins, exclusives, new offers, how-it-works, FAQ |
| `/bonus-sans-depot` | Full bonus listing with filterable/sortable comparison table |
| `/bonus-sans-depot/[slug]` | 10 individual bonus detail pages with KPIs, pros/cons, claim steps, Product JSON-LD |
| `/free-spins-sans-depot` | Free spins category with full SEO content, tables, pros/cons, internal links |
| `/bonus-sans-depot-sans-wagering` | No-wagering bonuses with SEO content, wagering comparison tables, internal links |
| `/bonus-casino-gratuit` | All free casino bonuses |
| `/code-promo-casino` | Promo code offers with reveal mechanic |

### Blog (21 articles, 9 categories)
| Category | Articles |
|----------|---------|
| Guides | Comment fonctionnent les bonus, Peut-on vraiment gagner |
| Strategies | 7 stratégies pour maximiser un bonus |
| Comparatifs | Classement 2026, Free spins vs bonus cash |
| Avertissements | Le wagering expliqué |
| Casinos | Meilleurs casinos francophones, Choisir un casino fiable, Casino mobile |
| Jeux | Machines à sous gratuites, Roulette règles/stratégies, Blackjack guide |
| Securite | Vérifier licence, Protéger données, Jeu responsable |
| Paiements | Méthodes de retrait, Retirer gains bonus, Crypto-casinos |
| Tendances | Tendances 2026, Impact IA, Nouveaux casinos |

Each article: 600+ words, hero photo (Unsplash), mid-article photos, pros/cons block, comparison tables, 4 FAQs with Schema.org, BlogPosting JSON-LD.

### Legal & Info
| Route | Description |
|-------|-------------|
| `/about` | About page with scoring methodology |
| `/methodologie` | Detailed scoring criteria with visual breakdowns |
| `/contact` | Contact form (saves to Firebase Firestore) |
| `/politique-confidentialite` | Privacy policy (GDPR, French) |
| `/conditions-utilisation` | Terms of use (18+, responsible gambling, French) |

### SEO & System
| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Auto-generated sitemap with real content dates |
| `/robots.txt` | Search engine directives |
| `/not-found` | Custom 404 page in French |

## Key Features

### Bonus Scoring System (0-100)
Each bonus is scored on 7 weighted criteria:
- **Wagering** (40%) - Lower is better
- **Estimated real value / EV** (20%) - Based on RTP and wagering
- **Max win** (15%) - Withdrawal cap
- **Validity** (10%) - Time to complete wagering
- **Game variety** (5%) - Number of eligible games
- **Country availability** (5%) - Francophone coverage
- **Casino reputation** (5%) - Track record and licenses

### Comparison Table
- Filter by: type (free spins / cash), no-wagering, exclusive, country
- Sort by: score, wagering, estimated value, max win (keyboard accessible)
- Inline promo code reveal + claim buttons

### Email Collection (Firebase Firestore)
- **Newsletter popup**: Appears after 15s, saves to `newsletter_subscribers` with `source: 'popup'`
- **Inline newsletter**: On every page, saves with `source: 'inline'`
- **Contact form**: Saves to `contact_messages` collection
- **Duplicate handling**: Firestore rules prevent client-side reads/deletes
- **Firestore console**: https://console.firebase.google.com/project/casinojeugratuit/firestore

### Blog Renderer
Custom markdown-to-React parser supporting:
- `:::image IMAGE_ID:::` — Unsplash photos with gradient overlay + caption
- `:::proscons Title:::` — Side-by-side green/red pros/cons cards
- Markdown tables rendered as styled Tailwind components
- Headers, lists, bold, paragraphs — all as React components (not dangerouslySetInnerHTML)

### SEO
- Static site generation for all 50 pages
- Schema.org: FAQPage, BlogPosting, CollectionPage, ItemList, Product/Offer
- Dynamic `sitemap.xml` with real content dates
- Canonical URLs on all pages
- Viewport meta tag
- Breadcrumb navigation on detail pages
- Long-form SEO content (1500-2000 words on category pages)
- Internal linking (9+ links per category page)
- Open Graph metadata

### Accessibility
- ARIA labels on all interactive elements
- `aria-expanded`/`aria-controls` on menus and accordions
- Keyboard-accessible table sorting
- Form labels (visible or sr-only)
- Min 48px touch targets
- WCAG AA contrast compliance
- `role="dialog"` on newsletter popup

## Data Model

### Bonus (`src/data/bonuses.ts`)
```typescript
interface Bonus {
  id: string;
  slug: string;
  casinoName: string;
  title: string;
  type: 'free-spins' | 'cash' | 'mixed';
  amount: string;
  freeSpins: number | null;
  cashBonus: number | null;
  wagering: number;
  noWagering: boolean;
  maxBet: number | null;
  maxWin: number | null;
  eligibleGames: string[];
  validity: string;
  countries: string[];
  promoCode: string | null;
  exclusive: boolean;
  isNew: boolean;
  score: number;
  estimatedValue: number;
  affiliateLink: string;
  pros: string[];
  cons: string[];
  howToClaim: string[];
  termsHighlights: string[];
}
```

### Blog Post (`src/data/blog.ts`)
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'guides' | 'strategies' | 'comparatifs' | 'avertissements'
           | 'casinos' | 'jeux' | 'securite' | 'paiements' | 'tendances';
  content: string;    // Custom markdown with :::image::: and :::proscons::: blocks
  date: string;
  readTime: number;
  image: string;
  faq: { q: string; a: string }[];
}
```

### Firestore Collections
```
newsletter_subscribers/
  - email: string
  - source: 'popup' | 'inline'
  - subscribedAt: ISO string
  - active: boolean

contact_messages/
  - name: string
  - email: string
  - message: string
  - sentAt: ISO string
  - read: boolean
```

## Adding Content

### Add a New Bonus
Edit `src/data/bonuses.ts` and add a new object to the `bonuses` array. The page at `/bonus-sans-depot/[slug]` is auto-generated via `generateStaticParams`.

### Add a New Blog Post
Edit `src/data/blog.ts` and add a new object to the `blogPosts` array. Use `:::image IMAGE_ID:::` for photos and `:::proscons Title:::` for pros/cons blocks. The page at `/blog/[slug]` is auto-generated.

Available image IDs: `hero-bonus`, `hero-gains`, `hero-strategy`, `hero-ranking`, `hero-wagering`, `hero-compare`, `slots-closeup`, `casino-chips`, `roulette-table`, `casino-cards`, `neon-casino`, `dice-roll`, `jackpot-screen`, `poker-chips-stack`.

## Design System

### Color Palette
| Element | Color |
|---------|-------|
| Page background | `#faf7f2` (warm cream) |
| Cards | White with `border-orange-100` |
| Inner sections | `bg-orange-50` |
| Primary CTA | Orange-to-red gradient (`from-orange-500 to-red-500`) |
| Text primary | `text-gray-900` |
| Text secondary | `text-gray-500` |
| Accent | `text-orange-600` |
| Borders | `border-orange-100` / `border-orange-200` |

### Score Colors
| Range | Color |
|-------|-------|
| 90-100 | Emerald (`text-emerald-600`) |
| 75-89 | Amber (`text-amber-600`) |
| 60-74 | Orange (`text-orange-600`) |
| 0-59 | Red (`text-red-600`) |

### Category Badge Colors
| Category | Color |
|----------|-------|
| Guides | Blue |
| Strategies | Purple |
| Comparatifs | Orange |
| Avertissements | Red |
| Casinos | Amber |
| Jeux | Emerald |
| Securite | Sky |
| Paiements | Violet |
| Tendances | Pink |

## Deployment

### Vercel (current)
The site auto-deploys from GitHub on every push to `main`.

- **Dashboard**: https://vercel.com/jarons-projects-73d972c2/casinojeugratuit
- **Live URL**: https://casinojeugratuit.vercel.app
- **Env vars**: All Firebase config added to Vercel production

### Firebase
- **Project**: casinojeugratuit
- **Console**: https://console.firebase.google.com/project/casinojeugratuit/overview
- **Firestore**: https://console.firebase.google.com/project/casinojeugratuit/firestore
- **Region**: EUR3 (Europe)

Deploy Firestore rules:
```bash
firebase deploy --only firestore:rules --project casinojeugratuit
```

### Custom Domain
To connect `casinojeugratuit.com`:
1. Go to Vercel dashboard > Settings > Domains
2. Add `casinojeugratuit.com`
3. Update DNS: CNAME `www` -> `cname.vercel-dns.com` + A record to Vercel IP

## Roadmap

- [x] ~~Integrate email collection~~ (Firebase Firestore)
- [x] ~~Rewrite blog articles with full SEO~~ (21 articles, 600+ words each)
- [x] ~~Add legal pages~~ (privacy policy, terms, contact)
- [x] ~~Fix accessibility~~ (ARIA, keyboard, contrast, touch targets)
- [x] ~~Add structured data~~ (FAQ, BlogPosting, Product, CollectionPage)
- [x] ~~Deploy to Vercel~~ (auto-deploy from GitHub)
- [ ] Add real affiliate links
- [ ] Expand to 30+ bonus offers
- [ ] Add casino review pages
- [ ] Implement A/B testing on CTA buttons
- [ ] Add country auto-detection for filtering
- [ ] PWA support for mobile
- [ ] Admin CMS for managing offers without code changes
- [ ] Google Analytics + consent management
- [ ] Connect custom domain casinojeugratuit.com

## License

Private. All rights reserved.
