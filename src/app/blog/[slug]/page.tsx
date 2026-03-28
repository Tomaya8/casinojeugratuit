import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import NewsletterInline from '@/components/NewsletterInline';
import FAQ from '@/components/FAQ';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'CasinoJeuGratuit',
      url: 'https://casinojeugratuit.com',
    },
  };

  const sections = parseContent(post.content);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      <article>
        <header className="mb-10 pb-8 border-b border-orange-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 text-lg mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime} min de lecture</span>
          </div>
        </header>

        {sections.map((section, i) => (
          <div key={i}>{renderSection(section)}</div>
        ))}
      </article>

      {post.faq && post.faq.length > 0 && (
        <FAQ items={post.faq} />
      )}

      <div className="mt-12">
        <NewsletterInline />
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="bg-white border border-orange-100 rounded-xl p-5 hover:border-orange-200 transition-all"
              >
                <h3 className="font-semibold text-gray-900 hover:text-orange-600 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 text-center">
        <Link href="/blog" className="text-orange-600 hover:text-orange-700 text-sm">
          ← Retour au blog
        </Link>
      </div>
    </div>
  );
}

// ---- TYPES ----

type Section =
  | { type: 'image'; id: string }
  | { type: 'proscons'; title: string; pros: string[]; cons: string[] }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'olist'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

// ---- HERO IMAGES ----

const HERO_IMAGES: Record<string, { src: string; alt: string; caption: string; color: string }> = {
  'hero-bonus': {
    src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=900&h=400&fit=crop&q=80',
    alt: 'Jetons de casino colorés sur table de jeu verte',
    caption: 'Bonus sans dépôt : le guide essentiel pour jouer gratuitement',
    color: 'from-orange-600 to-red-600',
  },
  'hero-gains': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&h=400&fit=crop&q=80',
    alt: 'Machine à sous de casino avec lumières néon',
    caption: 'Peut-on vraiment gagner avec un bonus sans dépôt ?',
    color: 'from-emerald-600 to-teal-600',
  },
  'hero-strategy': {
    src: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=900&h=400&fit=crop&q=80',
    alt: 'Cartes de poker et jetons sur table de casino',
    caption: '7 stratégies éprouvées pour maximiser vos bonus',
    color: 'from-blue-600 to-indigo-600',
  },
  'hero-ranking': {
    src: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=900&h=400&fit=crop&q=80',
    alt: 'Intérieur luxueux de casino avec tables de jeu',
    caption: 'Classement 2026 des meilleurs bonus sans dépôt',
    color: 'from-orange-600 to-amber-600',
  },
  'hero-wagering': {
    src: 'https://images.unsplash.com/photo-1594139590891-76e145a3d820?w=900&h=400&fit=crop&q=80',
    alt: 'Dés de casino rouges sur table de jeu',
    caption: 'Le wagering décrypté : comprendre les conditions de mise',
    color: 'from-red-600 to-rose-600',
  },
  'hero-compare': {
    src: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=900&h=400&fit=crop&q=80',
    alt: 'Roue de roulette de casino en mouvement',
    caption: 'Free Spins vs Bonus Cash : le comparatif complet',
    color: 'from-purple-600 to-violet-600',
  },
};

// ---- RENDER ----

function renderSection(section: Section): React.ReactNode {
  switch (section.type) {
    case 'image': {
      const img = HERO_IMAGES[section.id];
      if (!img) return null;
      return (
        <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-52 sm:h-64">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">{img.caption}</p>
            </div>
          </div>
        </div>
      );
    }

    case 'proscons':
      return (
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="font-bold text-emerald-800 text-lg">Avantages</h4>
            </div>
            <ul className="space-y-3">
              {section.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-900">
                  <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0">+</span>
                  <span dangerouslySetInnerHTML={{ __html: applyInline(p) }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <h4 className="font-bold text-red-800 text-lg">Inconvénients</h4>
            </div>
            <ul className="space-y-3">
              {section.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-900">
                  <span className="text-red-500 mt-0.5 font-bold flex-shrink-0">−</span>
                  <span dangerouslySetInnerHTML={{ __html: applyInline(c) }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'h2':
      return <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-2 border-b-2 border-orange-200" dangerouslySetInnerHTML={{ __html: applyInline(section.text) }} />;

    case 'h3':
      return <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3" dangerouslySetInnerHTML={{ __html: applyInline(section.text) }} />;

    case 'paragraph':
      return <p className="text-gray-600 text-[15px] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: applyInline(section.text) }} />;

    case 'list':
      return (
        <ul className="my-4 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
              <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: applyInline(item) }} />
            </li>
          ))}
        </ul>
      );

    case 'olist':
      return (
        <ol className="my-4 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
              <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0 w-5 text-center">{i + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: applyInline(item) }} />
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="my-8 overflow-x-auto rounded-xl border border-orange-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-50">
                {section.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-orange-200" dangerouslySetInnerHTML={{ __html: applyInline(h) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-600 border-b border-orange-100" dangerouslySetInnerHTML={{ __html: applyInline(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

function applyInline(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>');
}

// ---- PARSER ----

function parseContent(md: string): Section[] {
  const lines = md.trim().split('\n');
  const sections: Section[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // Empty line
    if (trimmed === '') { i++; continue; }

    // Image: :::image hero-xxx:::
    const imgMatch = trimmed.match(/^:::image\s+(\S+):::$/);
    if (imgMatch) {
      sections.push({ type: 'image', id: imgMatch[1] });
      i++; continue;
    }

    // Proscons block
    const pcMatch = trimmed.match(/^:::proscons\s+(.+):::$/);
    if (pcMatch) {
      const title = pcMatch[1];
      const pros: string[] = [];
      const cons: string[] = [];
      let collecting: 'none' | 'pros' | 'cons' = 'none';
      i++;
      while (i < lines.length) {
        const line = lines[i].trim();
        if (line === ':::end:::') { i++; break; }
        if (line === 'pros:') { collecting = 'pros'; i++; continue; }
        if (line === 'cons:') { collecting = 'cons'; i++; continue; }
        if (line.startsWith('- ') && collecting === 'pros') pros.push(line.slice(2));
        if (line.startsWith('- ') && collecting === 'cons') cons.push(line.slice(2));
        i++;
      }
      sections.push({ type: 'proscons', title, pros, cons });
      continue;
    }

    // Table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
      if (/^\|[-| :]+\|$/.test(nextLine)) {
        const headers = trimmed.split('|').filter(c => c.trim()).map(c => c.trim());
        i += 2; // skip header + separator
        const rows: string[][] = [];
        while (i < lines.length) {
          const row = lines[i].trim();
          if (!row.startsWith('|') || !row.endsWith('|')) break;
          rows.push(row.split('|').filter(c => c.trim()).map(c => c.trim()));
          i++;
        }
        sections.push({ type: 'table', headers, rows });
        continue;
      }
    }

    // H2
    if (trimmed.startsWith('## ')) {
      sections.push({ type: 'h2', text: trimmed.slice(3) });
      i++; continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      sections.push({ type: 'h3', text: trimmed.slice(4) });
      i++; continue;
    }

    // Unordered list
    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      sections.push({ type: 'list', items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      sections.push({ type: 'olist', items });
      continue;
    }

    // Paragraph
    sections.push({ type: 'paragraph', text: trimmed });
    i++;
  }

  return sections;
}
