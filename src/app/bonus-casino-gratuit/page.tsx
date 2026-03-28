import type { Metadata } from 'next';
import BonusTable from '@/components/BonusTable';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { bonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Bonus Casino Gratuit 2026 — Jouer Sans Dépôt',
  description: 'Tous les bonus casino gratuits pour jouer sans dépôt en 2026. Free spins, bonus cash, offres exclusives. Comparatif complet.',
};

export default function BonusCasinoGratuitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Bonus casino gratuit — Jouer sans dépôt
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Toutes les offres pour jouer gratuitement dans un casino en ligne. Free spins, bonus cash, codes promo — comparez et choisissez la meilleure offre.
        </p>
      </div>

      <BonusTable bonuses={bonuses} />

      <section className="py-12 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment jouer gratuitement au casino en ligne</h2>
        <div className="text-gray-500 space-y-4">
          <p>
            Jouer gratuitement au casino en ligne est possible grâce aux <strong className="text-gray-900">bonus sans dépôt</strong>. Ces offres promotionnelles sont proposées par les casinos pour attirer de nouveaux joueurs et leur permettre de tester la plateforme sans engagement financier.
          </p>
          <p>
            Il existe plusieurs types d&apos;offres gratuites : les free spins (tours gratuits sur des machines à sous), les bonus cash (argent crédité sur votre compte), et parfois des offres mixtes combinant les deux.
          </p>
          <p>
            <strong className="text-gray-900">Important :</strong> même si ces bonus sont gratuits, les gains sont toujours soumis à des conditions. Lisez attentivement le wagering, le gain maximum et la validité avant de réclamer une offre.
          </p>
        </div>
      </section>

      <NewsletterInline />
      <FAQ />
    </div>
  );
}
