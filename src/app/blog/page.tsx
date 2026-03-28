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
            <div className="h-40 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
              <span className="text-4xl opacity-30">📝</span>
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
