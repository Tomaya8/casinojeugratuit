# CasinoJeuGratuit.com

The leading French-language comparison platform for no-deposit casino bonuses. Built for SEO performance, conversion optimization, and user trust.

**Live target**: [casinojeugratuit.com](https://casinojeugratuit.com)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Rendering | Static Site Generation (SSG) |
| Runtime | React 19 |
| Deployment | Vercel (recommended) |

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

## Project Structure

```
src/
  app/                          # Next.js App Router pages
    page.tsx                    # Homepage
    bonus-sans-depot/
      page.tsx                  # All bonuses listing (filterable table)
      [slug]/page.tsx           # Individual bonus detail pages (10)
    free-spins-sans-depot/
      page.tsx                  # Free spins category
    bonus-sans-depot-sans-wagering/
      page.tsx                  # No-wagering bonuses
    bonus-casino-gratuit/
      page.tsx                  # Free casino bonuses
    code-promo-casino/
      page.tsx                  # Promo code offers
    blog/
      page.tsx                  # Blog hub
      [slug]/page.tsx           # Blog articles (6)
    about/page.tsx              # About page
    methodologie/page.tsx       # Scoring methodology
    api/newsletter/route.ts     # Newsletter signup API
    sitemap.ts                  # Dynamic sitemap.xml
    robots.ts                   # robots.txt
    layout.tsx                  # Root layout
    globals.css                 # Global styles
  components/
    Header.tsx                  # Sticky header with navigation
    Footer.tsx                  # Footer with links + responsible gambling
    BonusCard.tsx               # Bonus offer card component
    BonusTable.tsx              # Filterable/sortable comparison table
    CouponReveal.tsx            # Click-to-reveal promo code
    CasinoBg.tsx                # SVG casino-themed hero background
    FAQ.tsx                     # Accordion FAQ with Schema.org markup
    HowItWorks.tsx              # 4-step process section
    NewsletterPopup.tsx         # Timed popup (15s delay)
    NewsletterInline.tsx        # Inline email capture form
  data/
    bonuses.ts                  # 10 bonus offers + helper functions
    blog.ts                     # 6 blog articles + helper functions
  lib/
    utils.ts                    # Score colors, wagering labels, formatting
```

## Pages (31 total)

### Core Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, top offers, free spins, exclusives, new offers, how-it-works, FAQ |
| `/bonus-sans-depot` | Full bonus listing with filterable/sortable comparison table |
| `/bonus-sans-depot/[slug]` | 10 individual bonus detail pages with KPIs, pros/cons, claim steps |
| `/free-spins-sans-depot` | Free spins offers category |
| `/bonus-sans-depot-sans-wagering` | No-wagering bonuses with wagering impact table |
| `/bonus-casino-gratuit` | All free casino bonuses |
| `/code-promo-casino` | Promo code offers with reveal mechanic |

### Editorial
| Route | Description |
|-------|-------------|
| `/blog` | Blog hub with 6 articles across 4 categories |
| `/blog/[slug]` | Individual blog articles |
| `/about` | About page + scoring methodology overview |
| `/methodologie` | Detailed scoring criteria with visual breakdowns |

### SEO & API
| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Auto-generated sitemap with all pages |
| `/robots.txt` | Search engine directives |
| `/api/newsletter` | POST endpoint for email signups |

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
- Sort by: score, wagering, estimated value, max win
- Inline promo code reveal + claim buttons

### Coupon Reveal System
- Click-to-reveal animation for promo codes
- Copy-to-clipboard on click
- "Automatique" badge for no-code bonuses

### Lead Generation
- **Popup**: Appears after 15 seconds, dismissible, stored in localStorage
- **Inline CTA**: Embedded in pages after content sections
- **API endpoint**: Ready for Brevo / Mailchimp integration

### SEO
- Static site generation for all pages
- Schema.org FAQ markup on every page
- Dynamic `sitemap.xml` covering all bonus and blog URLs
- Semantic HTML with proper heading hierarchy
- Long-form SEO content on category pages
- Internal linking between related pages

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
  score: number;           // 0-100 proprietary score
  estimatedValue: number;  // Real EV in euros
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
  category: 'guides' | 'strategies' | 'comparatifs' | 'avertissements';
  content: string;         // Markdown content
  date: string;
  readTime: number;
}
```

## Adding Content

### Add a New Bonus
Edit `src/data/bonuses.ts` and add a new object to the `bonuses` array. The page at `/bonus-sans-depot/[slug]` is auto-generated via `generateStaticParams`.

### Add a New Blog Post
Edit `src/data/blog.ts` and add a new object to the `blogPosts` array. The page at `/blog/[slug]` is auto-generated.

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

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Static Export
Add `output: 'export'` to `next.config.ts` for fully static hosting (Netlify, Cloudflare Pages, etc.).

## Roadmap

- [ ] Integrate Brevo/Mailchimp for newsletter API
- [ ] Add real affiliate links
- [ ] Expand to 30+ bonus offers
- [ ] Rewrite blog articles with full SEO (600+ words, FAQs, comparisons)
- [ ] Add casino review pages
- [ ] Implement A/B testing on CTA buttons
- [ ] Add country auto-detection for filtering
- [ ] PWA support for mobile
- [ ] Admin CMS for managing offers without code changes

## License

Private. All rights reserved.
