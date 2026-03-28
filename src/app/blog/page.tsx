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
  casinos: 'Casinos',
  jeux: 'Jeux',
  securite: 'Sécurité',
  paiements: 'Paiements',
  tendances: 'Tendances',
};

const categoryColors: Record<string, string> = {
  guides: 'bg-blue-100 text-blue-700 border-blue-200',
  strategies: 'bg-purple-100 text-purple-700 border-purple-200',
  comparatifs: 'bg-orange-100 text-orange-600 border-orange-200',
  avertissements: 'bg-red-100 text-red-700 border-red-200',
  casinos: 'bg-amber-100 text-amber-700 border-amber-200',
  jeux: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  securite: 'bg-sky-100 text-sky-700 border-sky-200',
  paiements: 'bg-violet-100 text-violet-700 border-violet-200',
  tendances: 'bg-pink-100 text-pink-700 border-pink-200',
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
  'meilleurs-casinos-en-ligne-francophones-2026': {
    src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=600&h=340&fit=crop&q=80',
    alt: 'Intérieur de casino luxueux avec tables de jeu',
  },
  'comment-choisir-casino-en-ligne-fiable': {
    src: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=340&fit=crop&q=80',
    alt: 'Jetons de poker empilés sur table verte',
  },
  'casino-mobile-jouer-smartphone-2026': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=340&fit=crop&q=80',
    alt: 'Machines à sous de casino avec lumières néon',
  },
  'meilleures-machines-a-sous-gratuites-2026': {
    src: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=600&h=340&fit=crop&q=80',
    alt: 'Écran de machine à sous coloré',
  },
  'roulette-gratuite-en-ligne-regles-strategies': {
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=340&fit=crop&q=80',
    alt: 'Table de roulette de casino vue de dessus',
  },
  'blackjack-gratuit-guide-complet-debutant': {
    src: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&h=340&fit=crop&q=80',
    alt: 'Cartes de blackjack et jetons sur tapis vert',
  },
  'comment-verifier-licence-casino-en-ligne': {
    src: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=340&fit=crop&q=80',
    alt: 'Enseigne néon de casino illuminée la nuit',
  },
  'proteger-donnees-personnelles-casinos-en-ligne': {
    src: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=600&h=340&fit=crop&q=80',
    alt: 'Cadenas de sécurité numérique',
  },
  'jeu-responsable-signes-alerte-ressources-aide': {
    src: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=600&h=340&fit=crop&q=80',
    alt: 'Dés rouges lancés sur tapis de jeu',
  },
  'methodes-retrait-rapides-casino-en-ligne': {
    src: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=340&fit=crop&q=80',
    alt: 'Pile de jetons de poker sur table verte',
  },
  'retirer-gains-bonus-sans-depot-guide': {
    src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=340&fit=crop&q=80',
    alt: 'Jetons de casino colorés sur table de jeu',
  },
  'crypto-casinos-bonus-sans-depot-bitcoin': {
    src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=600&h=340&fit=crop&q=80',
    alt: 'Intérieur de casino moderne avec éclairage',
  },
  'tendances-casino-en-ligne-2026': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=340&fit=crop&q=80',
    alt: 'Machines à sous de casino futuristes',
  },
  'impact-intelligence-artificielle-casinos-en-ligne': {
    src: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&h=340&fit=crop&q=80',
    alt: 'Technologie et lumières de casino',
  },
  'nouveaux-casinos-en-ligne-2026-offres': {
    src: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=600&h=340&fit=crop&q=80',
    alt: 'Roue de roulette de casino dorée',
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
