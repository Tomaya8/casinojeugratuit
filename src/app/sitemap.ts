import type { MetadataRoute } from 'next';
import { bonuses } from '@/data/bonuses';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://casinojeugratuit.com';

  // Use the most recent bonus/blog date for listing pages instead of new Date()
  const latestBonusDate = bonuses.reduce((latest, b) => {
    const d = new Date(b.lastUpdated);
    return d > latest ? d : latest;
  }, new Date(0));

  const latestBlogDate = blogPosts.reduce((latest, p) => {
    const d = new Date(p.date);
    return d > latest ? d : latest;
  }, new Date(0));

  const latestOverall = latestBonusDate > latestBlogDate ? latestBonusDate : latestBlogDate;

  const staticPages = [
    { url: base, lastModified: latestOverall, changeFrequency: 'daily' as const, priority: 1 },
    { url: `${base}/bonus-sans-depot`, lastModified: latestBonusDate, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${base}/free-spins-sans-depot`, lastModified: latestBonusDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/bonus-sans-depot-sans-wagering`, lastModified: latestBonusDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/bonus-casino-gratuit`, lastModified: latestBonusDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/code-promo-casino`, lastModified: latestBonusDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: latestBlogDate, changeFrequency: 'weekly' as const, priority: 0.7 },
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
