import type { Metadata } from 'next';
import Link from 'next/link';
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

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
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

function markdownToHtml(md: string): string {
  const lines = md.trim().split('\n');
  const output: string[] = [];
  let inList = false;
  let inTable = false;
  let tableHeader = '';
  let tableRows: string[] = [];

  function flushTable() {
    if (!tableHeader) return;
    const headerCells = tableHeader.split('|').filter(c => c.trim()).map(c =>
      `<th style="padding:10px 14px;text-align:left;font-weight:600;color:#374151;background:#fff7ed;border-bottom:2px solid #fed7aa;font-size:13px;">${inline(c.trim())}</th>`
    ).join('');
    const rows = tableRows.map((row, idx) => {
      const cells = row.split('|').filter(c => c.trim()).map(c =>
        `<td style="padding:10px 14px;border-bottom:1px solid #ffedd5;color:#4b5563;font-size:14px;">${inline(c.trim())}</td>`
      ).join('');
      return `<tr style="background:${idx % 2 === 0 ? '#ffffff' : '#fffbf5'}">${cells}</tr>`;
    }).join('');
    output.push(`<div style="overflow-x:auto;margin:24px 0;border-radius:12px;border:1px solid #fed7aa;"><table style="width:100%;border-collapse:collapse;"><thead><tr>${headerCells}</tr></thead><tbody>${rows}</tbody></table></div>`);
    tableHeader = '';
    tableRows = [];
    inTable = false;
  }

  function closeList() {
    if (inList) {
      output.push('</ul>');
      inList = false;
    }
  }

  function inline(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827;font-weight:600;">$1</strong>');
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Table start
    if (!inTable && trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
      if (/^\|[-| :]+\|$/.test(nextLine)) {
        closeList();
        inTable = true;
        tableHeader = trimmed;
        i++;
        continue;
      }
    }

    // Table rows
    if (inTable) {
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        tableRows.push(trimmed);
        continue;
      } else {
        flushTable();
      }
    }

    // Empty
    if (trimmed === '') {
      closeList();
      continue;
    }

    // H2
    if (trimmed.startsWith('## ')) {
      closeList();
      output.push(`<h2 style="font-size:1.5rem;font-weight:700;color:#111827;margin-top:48px;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid #ffedd5;">${inline(trimmed.slice(3))}</h2>`);
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      closeList();
      output.push(`<h3 style="font-size:1.2rem;font-weight:600;color:#1f2937;margin-top:32px;margin-bottom:12px;">${inline(trimmed.slice(4))}</h3>`);
      continue;
    }

    // List item
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        output.push('<ul style="margin:16px 0;padding-left:0;list-style:none;">');
        inList = true;
      }
      output.push(`<li style="padding:6px 0 6px 24px;position:relative;color:#4b5563;font-size:15px;line-height:1.7;"><span style="position:absolute;left:0;color:#ea580c;font-weight:bold;">•</span>${inline(trimmed.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      if (!inList) {
        output.push('<ul style="margin:16px 0;padding-left:0;list-style:none;counter-reset:li;">');
        inList = true;
      }
      output.push(`<li style="padding:6px 0 6px 32px;position:relative;color:#4b5563;font-size:15px;line-height:1.7;"><span style="position:absolute;left:0;color:#ea580c;font-weight:700;font-size:14px;">${olMatch[1]}.</span>${inline(olMatch[2])}</li>`);
      continue;
    }

    // Paragraph
    closeList();
    output.push(`<p style="margin-bottom:16px;color:#4b5563;font-size:15px;line-height:1.8;">${inline(trimmed)}</p>`);
  }

  closeList();
  flushTable();
  return output.join('\n');
}
