import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { bonuses, getBonusBySlug } from '@/data/bonuses';
import { getScoreColor, getScoreBg, getWageringColor, getWageringLabel, getCountryFlag, getCountryName, formatDate } from '@/lib/utils';
import CouponReveal from '@/components/CouponReveal';
import BonusCard from '@/components/BonusCard';
import NewsletterInline from '@/components/NewsletterInline';

export async function generateStaticParams() {
  return bonuses.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bonus = getBonusBySlug(slug);
  if (!bonus) return {};
  return {
    title: `${bonus.title} — ${bonus.casinoName} | Avis & Conditions`,
    description: bonus.description,
  };
}

export default async function BonusDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bonus = getBonusBySlug(slug);
  if (!bonus) notFound();

  const related = bonuses.filter(b => b.id !== bonus.id && b.type === bonus.type).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${bonus.title} — ${bonus.casinoName}`,
    description: bonus.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: bonus.currency,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-orange-600">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/bonus-sans-depot" className="hover:text-orange-600">Bonus sans dépôt</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{bonus.casinoName}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-orange-200 flex-shrink-0 shadow-sm">
            <span className="text-3xl font-bold text-orange-600">{bonus.casinoName.charAt(0)}</span>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              {bonus.exclusive && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 rounded-full">Exclusif</span>
              )}
              {bonus.isNew && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 rounded-full">Nouveau</span>
              )}
              {bonus.noWagering && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full">Sans wagering</span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{bonus.title}</h1>
            <p className="text-gray-500">{bonus.casinoName}</p>
          </div>

          <div className={`w-20 h-20 rounded-2xl border flex flex-col items-center justify-center flex-shrink-0 ${getScoreBg(bonus.score)}`}>
            <span className={`text-2xl font-bold ${getScoreColor(bonus.score)}`}>{bonus.score}</span>
            <span className="text-xs text-gray-400">/100</span>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
            <p className="text-xs text-gray-400 mb-1">Bonus</p>
            <p className="text-lg font-bold text-gray-900">{bonus.amount}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
            <p className="text-xs text-gray-400 mb-1">Wagering</p>
            <p className={`text-lg font-bold ${getWageringColor(bonus.wagering)}`}>
              {bonus.wagering === 0 ? 'Aucun !' : `x${bonus.wagering}`}
            </p>
            <p className="text-xs text-gray-400">{getWageringLabel(bonus.wagering)}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
            <p className="text-xs text-gray-400 mb-1">Gain max</p>
            <p className="text-lg font-bold text-gray-900">{bonus.maxWin ? `${bonus.maxWin}€` : 'N/A'}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
            <p className="text-xs text-gray-400 mb-1">Valeur réelle</p>
            <p className="text-lg font-bold text-emerald-600">{bonus.estimatedValue.toFixed(2)}€</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 p-4 bg-white/60 rounded-xl">
          {bonus.promoCode && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Code promo :</span>
              <CouponReveal code={bonus.promoCode} />
            </div>
          )}
          <a
            href={bonus.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all sm:ml-auto shadow-md shadow-orange-200"
          >
            Réclamer le bonus
          </a>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">{bonus.usersClicked.toLocaleString('fr-FR')} utilisateurs ont cliqué</p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="bg-white border border-orange-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Description de l&apos;offre</h2>
            <p className="text-gray-600 leading-relaxed">{bonus.longDescription}</p>
          </section>

          {/* Pros / Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-semibold text-emerald-700 mb-3">Avantages</h3>
              <ul className="space-y-2">
                {bonus.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-600 mt-0.5 font-bold">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-700 mb-3">Inconvénients</h3>
              <ul className="space-y-2">
                {bonus.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5 font-bold">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to Claim */}
          <section className="bg-white border border-orange-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Comment réclamer ce bonus</h2>
            <ol className="space-y-3">
              {bonus.howToClaim.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Terms */}
          <section className="bg-white border border-orange-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Conditions importantes</h2>
            <ul className="space-y-2">
              {bonus.termsHighlights.map((term, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500">•</span>
                  {term}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-orange-100 rounded-xl p-5 sticky top-20 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Détails du bonus</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Type</dt>
                <dd className="text-gray-900 capitalize">{bonus.type === 'free-spins' ? 'Free Spins' : bonus.type === 'cash' ? 'Bonus Cash' : 'Mixte'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Montant</dt>
                <dd className="text-gray-900">{bonus.amount}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Wagering</dt>
                <dd className={getWageringColor(bonus.wagering)}>{bonus.wagering === 0 ? 'Aucun' : `x${bonus.wagering}`}</dd>
              </div>
              {bonus.maxBet && (
                <div className="flex justify-between">
                  <dt className="text-gray-500">Mise max</dt>
                  <dd className="text-gray-900">{bonus.maxBet}€</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-gray-500">Gain max</dt>
                <dd className="text-gray-900">{bonus.maxWin ? `${bonus.maxWin}€` : 'N/A'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Validité</dt>
                <dd className="text-gray-900">{bonus.validity}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Valeur réelle</dt>
                <dd className="text-emerald-600 font-semibold">{bonus.estimatedValue.toFixed(2)}€</dd>
              </div>
              <div className="pt-2 border-t border-orange-50">
                <dt className="text-gray-500 mb-2">Jeux éligibles</dt>
                <dd className="flex flex-wrap gap-1">
                  {bonus.eligibleGames.map(g => (
                    <span key={g} className="px-2 py-0.5 text-xs bg-orange-50 rounded text-gray-700">{g}</span>
                  ))}
                </dd>
              </div>
              <div className="pt-2 border-t border-orange-50">
                <dt className="text-gray-500 mb-2">Pays éligibles</dt>
                <dd className="flex flex-wrap gap-2">
                  {bonus.countries.map(c => (
                    <span key={c} className="text-sm">{getCountryFlag(c)} {getCountryName(c)}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-4 pt-4 border-t border-orange-50 text-xs text-gray-400 space-y-1">
              <p>Ajouté le {formatDate(bonus.dateAdded)}</p>
              <p>Mis à jour le {formatDate(bonus.lastUpdated)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <NewsletterInline />
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Offres similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(b => (
              <BonusCard key={b.id} bonus={b} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
