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

// Custom image banners with SVG illustrations
const IMAGE_BANNERS: Record<string, string> = {
  'hero-bonus': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#fff7ed,#fef3c7);border:1px solid #fed7aa;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#ea580c" fill-opacity="0.1"/><circle cx="40" cy="35" r="18" stroke="#ea580c" stroke-width="2.5" fill="none"/><circle cx="40" cy="35" r="10" stroke="#ea580c" stroke-width="1.5" fill="none"/><text x="40" y="40" text-anchor="middle" font-size="16" font-weight="bold" fill="#ea580c">€</text><path d="M25 58h30M30 64h20" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/></svg>
      <div><p style="font-size:18px;font-weight:700;color:#9a3412;margin:0 0 4px 0;">Bonus sans dépôt : le guide essentiel</p><p style="font-size:14px;color:#c2410c;margin:0;">Tout ce que vous devez savoir pour jouer gratuitement et intelligemment.</p></div>
    </div>`,
  'hero-gains': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#16a34a" fill-opacity="0.1"/><path d="M20 55L35 35L45 45L60 25" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 25h10v10" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="60" width="40" height="2" rx="1" fill="#16a34a" fill-opacity="0.3"/></svg>
      <div><p style="font-size:18px;font-weight:700;color:#166534;margin:0 0 4px 0;">Peut-on vraiment gagner ?</p><p style="font-size:14px;color:#15803d;margin:0;">Analyse honnête des probabilités et de la valeur espérée des bonus.</p></div>
    </div>`,
  'hero-strategy': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #bfdbfe;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#2563eb" fill-opacity="0.1"/><path d="M40 20v8M40 52v8M20 40h8M52 40h8" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="40" r="16" stroke="#2563eb" stroke-width="2.5" fill="none"/><path d="M40 32l3 5h-6z" fill="#2563eb"/><circle cx="40" cy="40" r="4" fill="#2563eb" fill-opacity="0.3"/></svg>
      <div><p style="font-size:18px;font-weight:700;color:#1e40af;margin:0 0 4px 0;">Stratégies de maximisation</p><p style="font-size:14px;color:#2563eb;margin:0;">7 techniques éprouvées pour tirer le maximum de chaque bonus.</p></div>
    </div>`,
  'hero-ranking': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #fed7aa;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#ea580c" fill-opacity="0.1"/><rect x="18" y="45" width="12" height="20" rx="3" fill="#fb923c"/><rect x="34" y="30" width="12" height="35" rx="3" fill="#ea580c"/><rect x="50" y="38" width="12" height="27" rx="3" fill="#f97316"/><text x="40" y="24" text-anchor="middle" font-size="18" fill="#ea580c">★</text></svg>
      <div><p style="font-size:18px;font-weight:700;color:#9a3412;margin:0 0 4px 0;">Classement 2026</p><p style="font-size:14px;color:#c2410c;margin:0;">Les meilleurs bonus sans dépôt, analysés et classés objectivement.</p></div>
    </div>`,
  'hero-wagering': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#fef2f2,#fee2e2);border:1px solid #fecaca;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#dc2626" fill-opacity="0.1"/><path d="M40 22l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="#dc2626" stroke-width="2" fill="none"/><circle cx="40" cy="50" r="12" stroke="#dc2626" stroke-width="2.5" fill="none"/><text x="40" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">x30</text></svg>
      <div><p style="font-size:18px;font-weight:700;color:#991b1b;margin:0 0 4px 0;">Attention : le wagering décrypté</p><p style="font-size:14px;color:#dc2626;margin:0;">Comprendre les conditions de mise pour ne jamais être pris au dépourvu.</p></div>
    </div>`,
  'hero-compare': `
    <div style="margin:32px 0;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#faf5ff,#f3e8ff);border:1px solid #e9d5ff;padding:32px;display:flex;align-items:center;gap:24px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="flex-shrink:0;"><rect width="80" height="80" rx="16" fill="#9333ea" fill-opacity="0.1"/><rect x="15" y="25" width="22" height="32" rx="4" stroke="#9333ea" stroke-width="2" fill="none"/><rect x="43" y="25" width="22" height="32" rx="4" stroke="#9333ea" stroke-width="2" fill="none"/><path d="M37 38h6M37 42h6" stroke="#9333ea" stroke-width="2" stroke-linecap="round"/><text x="26" y="46" text-anchor="middle" font-size="16" fill="#9333ea">🎰</text><text x="54" y="46" text-anchor="middle" font-size="16" fill="#9333ea">💰</text></svg>
      <div><p style="font-size:18px;font-weight:700;color:#6b21a8;margin:0 0 4px 0;">Free Spins vs Bonus Cash</p><p style="font-size:14px;color:#9333ea;margin:0;">Comparaison détaillée pour choisir le type de bonus qui vous convient.</p></div>
    </div>`,
};

// Pros/Cons block renderer
function renderProsConsBlock(title: string, pros: string[], cons: string[]): string {
  const prosHtml = pros.map(p =>
    `<li style="padding:8px 0 8px 28px;position:relative;color:#166534;font-size:14px;line-height:1.6;"><span style="position:absolute;left:0;font-size:16px;">✅</span>${p}</li>`
  ).join('');
  const consHtml = cons.map(c =>
    `<li style="padding:8px 0 8px 28px;position:relative;color:#991b1b;font-size:14px;line-height:1.6;"><span style="position:absolute;left:0;font-size:16px;">❌</span>${c}</li>`
  ).join('');

  return `
    <div style="margin:32px 0;display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px;">
        <p style="font-weight:700;color:#166534;font-size:15px;margin:0 0 12px 0;display:flex;align-items:center;gap:8px;">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#16a34a" stroke-width="2"/><path d="M6 10l3 3 5-5" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Avantages
        </p>
        <ul style="margin:0;padding:0;list-style:none;">${prosHtml}</ul>
      </div>
      <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:20px;">
        <p style="font-weight:700;color:#991b1b;font-size:15px;margin:0 0 12px 0;display:flex;align-items:center;gap:8px;">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#dc2626" stroke-width="2"/><path d="M7 7l6 6M13 7l-6 6" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/></svg>
          Inconvénients
        </p>
        <ul style="margin:0;padding:0;list-style:none;">${consHtml}</ul>
      </div>
    </div>`;
}

function markdownToHtml(md: string): string {
  const lines = md.trim().split('\n');
  const output: string[] = [];
  let inList = false;
  let inTable = false;
  let tableHeader = '';
  let tableRows: string[] = [];
  // Pros/cons block state
  let inProsConsBlock = false;
  let prosConsTitle = '';
  let currentPros: string[] = [];
  let currentCons: string[] = [];
  let collectingPros = false;
  let collectingCons = false;

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

  function flushProsCons() {
    if (inProsConsBlock) {
      output.push(renderProsConsBlock(prosConsTitle, currentPros, currentCons));
      inProsConsBlock = false;
      prosConsTitle = '';
      currentPros = [];
      currentCons = [];
      collectingPros = false;
      collectingCons = false;
    }
  }

  function inline(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827;font-weight:600;">$1</strong>');
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Image banner: :::image hero-bonus:::
    const imageMatch = trimmed.match(/^:::image\s+(\S+):::$/);
    if (imageMatch) {
      closeList();
      flushTable();
      const banner = IMAGE_BANNERS[imageMatch[1]];
      if (banner) output.push(banner);
      continue;
    }

    // Pros/Cons block: :::proscons Title:::
    const prosConsStart = trimmed.match(/^:::proscons\s+(.+):::$/);
    if (prosConsStart) {
      closeList();
      flushTable();
      inProsConsBlock = true;
      prosConsTitle = prosConsStart[1];
      collectingPros = false;
      collectingCons = false;
      continue;
    }

    // End pros/cons: :::end:::
    if (trimmed === ':::end:::') {
      flushProsCons();
      continue;
    }

    // Inside proscons block
    if (inProsConsBlock) {
      if (trimmed.startsWith('pros:')) { collectingPros = true; collectingCons = false; continue; }
      if (trimmed.startsWith('cons:')) { collectingCons = true; collectingPros = false; continue; }
      if (trimmed.startsWith('- ') && collectingPros) { currentPros.push(inline(trimmed.slice(2))); continue; }
      if (trimmed.startsWith('- ') && collectingCons) { currentCons.push(inline(trimmed.slice(2))); continue; }
      if (trimmed === '') continue;
      continue;
    }

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

    if (trimmed === '') { closeList(); continue; }

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

    // List
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
        output.push('<ul style="margin:16px 0;padding-left:0;list-style:none;">');
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
  flushProsCons();
  return output.join('\n');
}
