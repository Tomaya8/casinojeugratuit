import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import NewsletterInline from '@/components/NewsletterInline';

export const metadata: Metadata = {
  title: 'Blog — Guides, Stratégies & Avertissements Casino',
  description: 'Guides complets, stratégies et avertissements sur les bonus casino sans dépôt. Apprenez à maximiser vos offres et éviter les pièges.',
};

const categoryLabels: Record<string, string> = {
  guides: 'Guides',
  strategies: 'Stratégies',
  comparatifs: 'Comparatifs',
  avertissements: 'Avertissements',
};

const categoryColors: Record<string, string> = {
  guides: 'bg-blue-100 text-blue-700 border-blue-200',
  strategies: 'bg-purple-100 text-purple-700 border-purple-200',
  comparatifs: 'bg-orange-100 text-orange-600 border-orange-200',
  avertissements: 'bg-red-100 text-red-700 border-red-200',
};

const categoryIcons: Record<string, string> = {
  guides: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  strategies: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  comparatifs: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  avertissements: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Blog & Guides</h1>
        <p className="text-gray-500 max-w-3xl">
          Tout ce que vous devez savoir sur les bonus casino sans dépôt. Guides détaillés, stratégies éprouvées, et avertissements pour jouer en toute connaissance de cause.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-all"
          >
            <div className="h-40 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={categoryIcons[post.category] || categoryIcons.guides} />
              </svg>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 text-xs font-semibold border rounded-full ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
                <span className="text-xs text-gray-500">{post.readTime} min de lecture</span>
              </div>
              <h2 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              <p className="text-xs text-gray-500 mt-3">{formatDate(post.date)}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <NewsletterInline />
      </div>
    </div>
  );
}
