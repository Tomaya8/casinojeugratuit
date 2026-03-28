import Link from 'next/link';
import BonusCard from '@/components/BonusCard';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import CasinoBg from '@/components/CasinoBg';
import { getTopBonuses, getFreeSpinsBonuses, getExclusiveBonuses, getNewBonuses } from '@/data/bonuses';

export default function Home() {
  const topBonuses = getTopBonuses(5);
  const freeSpins = getFreeSpinsBonuses().slice(0, 3);
  const exclusives = getExclusiveBonuses().slice(0, 3);
  const newOffers = getNewBonuses().slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative text-center py-12 sm:py-16">
        <CasinoBg />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-sm text-orange-600 font-medium mb-6">
            Mis à jour mars 2026 — 10 offres vérifiées
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Bonus casino sans dépôt :<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              les meilleures offres gratuites
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Comparez les bonus sans dépôt avec notre score transparent. Valeur réelle estimée, wagering analysé, conditions décryptées.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/bonus-sans-depot"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-md shadow-orange-200"
            >
              Voir tous les bonus
            </Link>
            <Link
              href="/bonus-sans-depot-sans-wagering"
              className="px-6 py-3 bg-white border border-orange-200 text-gray-700 font-semibold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-colors"
            >
              Offres sans wagering
            </Link>
          </div>
        </div>
      </section>

      {/* Top Offers */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top offres sans dépôt</h2>
          <Link href="/bonus-sans-depot" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topBonuses.slice(0, 3).map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {topBonuses.slice(3, 5).map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Free Spins Section */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Free spins sans dépôt</h2>
          <Link href="/free-spins-sans-depot" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {freeSpins.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">Offres exclusives</h2>
            <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 rounded-full">
              Exclusif
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exclusives.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* New Offers */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">Nouvelles offres</h2>
            <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 rounded-full">
              Nouveau
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newOffers.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Newsletter */}
      <section className="py-8">
        <NewsletterInline />
      </section>

      {/* SEO Content */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tout savoir sur les bonus casino sans dépôt</h2>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p>
            Un <strong className="text-gray-900">bonus casino sans dépôt</strong> est une offre promotionnelle qui vous permet de jouer gratuitement dans un casino en ligne. Contrairement aux bonus classiques qui nécessitent un dépôt, ces offres sont accessibles dès l&apos;inscription, sans engagement financier.
          </p>
          <p>
            Sur CasinoJeuGratuit, nous analysons chaque offre en profondeur pour calculer sa <strong className="text-gray-900">valeur réelle estimée</strong>. Notre score propriétaire prend en compte le wagering, le gain maximum, la validité, les jeux éligibles et la réputation du casino. Cette approche transparente vous permet de comparer objectivement les offres.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Types de bonus sans dépôt</h3>
          <p>
            Il existe principalement deux types de bonus sans dépôt : les <strong className="text-gray-900">free spins</strong> (tours gratuits sur des machines à sous spécifiques) et les <strong className="text-gray-900">bonus cash</strong> (argent gratuit crédité sur votre compte). Chaque type a ses avantages : les free spins sont plus courants et permettent de tester un jeu, tandis que le bonus cash offre plus de flexibilité.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Les conditions à connaître</h3>
          <p>
            Le critère le plus important est le <strong className="text-gray-900">wagering</strong> (conditions de mise). Un wagering de x30 signifie que vous devez miser 30 fois le montant du bonus avant de retirer vos gains. Plus le wagering est bas, plus l&apos;offre est intéressante. Les offres sans wagering, bien que rares, sont les plus avantageuses.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Internal Links */}
      <section className="py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Explorer par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/bonus-sans-depot', label: 'Tous les bonus sans dépôt' },
            { href: '/free-spins-sans-depot', label: 'Free spins gratuits' },
            { href: '/bonus-sans-depot-sans-wagering', label: 'Bonus sans wagering' },
            { href: '/bonus-casino-gratuit', label: 'Casino gratuit' },
            { href: '/code-promo-casino', label: 'Codes promo casino' },
            { href: '/blog/comment-fonctionnent-bonus-sans-depot', label: 'Guide des bonus' },
            { href: '/blog/wagering-explique', label: 'Wagering expliqué' },
            { href: '/blog', label: 'Tous les articles' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 bg-white border border-orange-100 rounded-xl text-sm text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
