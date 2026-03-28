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
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 text-lg mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime} min de lecture</span>
          </div>
        </header>

        <div
          className="
            prose max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-900
            prose-li:text-gray-600
            prose-ul:my-4 prose-ol:my-4
            prose-table:text-sm prose-table:my-6
            prose-th:text-gray-700 prose-th:bg-orange-50/50 prose-th:border-orange-100 prose-th:py-2.5 prose-th:px-3 prose-th:text-left prose-th:font-semibold
            prose-td:border-orange-100 prose-td:py-2 prose-td:px-3
            prose-tr:border-b prose-tr:border-orange-50
            prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </article>

      {/* Article FAQ */}
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
  let tableSep = '';
  let tableRows: string[] = [];

  function flushTable() {
    if (!tableHeader) return;
    const headerCells = tableHeader.split('|').filter(c => c.trim()).map(c => `<th>${applyInline(c.trim())}</th>`).join('');
    const rows = tableRows.map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${applyInline(c.trim())}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    output.push(`<div class="overflow-x-auto"><table><thead><tr>${headerCells}</tr></thead><tbody>${rows}</tbody></table></div>`);
    tableHeader = '';
    tableSep = '';
    tableRows = [];
    inTable = false;
  }

  function closeList() {
    if (inList) {
      output.push('</ul>');
      inList = false;
    }
  }

  function applyInline(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table detection: a pipe line followed by a separator line
    if (!inTable && trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
      if (/^\|[-| :]+\|$/.test(nextLine)) {
        closeList();
        inTable = true;
        tableHeader = trimmed;
        tableSep = nextLine;
        i++; // skip separator
        continue;
      }
    }

    // Table body rows
    if (inTable) {
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        tableRows.push(trimmed);
        continue;
      } else {
        flushTable();
        // fall through to process current line normally
      }
    }

    // Empty line
    if (trimmed === '') {
      closeList();
      continue;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      closeList();
      output.push(`<h3>${applyInline(trimmed.slice(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      closeList();
      output.push(`<h2>${applyInline(trimmed.slice(3))}</h2>`);
      continue;
    }

    // Unordered list items
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        output.push('<ul>');
        inList = true;
      }
      output.push(`<li>${applyInline(trimmed.slice(2))}</li>`);
      continue;
    }

    // Ordered list items (render as ul to match original behavior)
    const olMatch = trimmed.match(/^\d+\.\s+(.*)/);
    if (olMatch) {
      if (!inList) {
        output.push('<ul>');
        inList = true;
      }
      output.push(`<li>${applyInline(olMatch[1])}</li>`);
      continue;
    }

    // Paragraph
    closeList();
    output.push(`<p>${applyInline(trimmed)}</p>`);
  }

  // Flush remaining state
  closeList();
  flushTable();

  return output.join('\n');
}
