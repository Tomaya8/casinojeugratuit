import type { MetadataRoute } from 'next';
import { bonuses } from '@/data/bonuses';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casinojeugratuit.com';

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${base}/bonus-sans-depot`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${base}/free-spins-sans-depot`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/bonus-sans-depot-sans-wagering`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/bonus-casino-gratuit`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/code-promo-casino`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const bonusPages = bonuses.map(b => ({
    url: `${base}/bonus-sans-depot/${b.slug}`,
    lastModified: new Date(b.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...bonusPages, ...blogPages];
}
