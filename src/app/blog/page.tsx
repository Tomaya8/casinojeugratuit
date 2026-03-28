import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

const postImages: Record<string, { src: string; alt: string }> = {
  'comment-fonctionnent-bonus-sans-depot': {
    src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=340&fit=crop&q=80',
    alt: 'Jetons de casino colorés sur une table de jeu verte',
  },
  'peut-on-vraiment-gagner-sans-deposer': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=340&fit=crop&q=80',
    alt: 'Machine à sous de casino avec lumières néon',
  },
  'maximiser-bonus-sans-depot': {
    src: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&h=340&fit=crop&q=80',
    alt: 'Cartes de poker et jetons sur table de casino',
  },
  'meilleurs-bonus-sans-depot-2026': {
    src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=600&h=340&fit=crop&q=80',
    alt: 'Intérieur luxueux de casino avec tables de jeu',
  },
  'wagering-explique': {
    src: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=600&h=340&fit=crop&q=80',
    alt: 'Dés de casino rouges sur table de jeu',
  },
  'free-spins-vs-bonus-cash': {
    src: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=600&h=340&fit=crop&q=80',
    alt: 'Roue de roulette de casino en mouvement',
  },
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
        {blogPosts.map(post => {
          const img = postImages[post.slug];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                {img ? (
                  <>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </>
                ) : (
                  <div className="h-full bg-gradient-to-br from-orange-50 to-amber-50" />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold border rounded-full backdrop-blur-sm ${categoryColors[post.category]}`}>
                    {categoryLabels[post.category]}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <NewsletterInline />
      </div>
    </div>
  );
}
