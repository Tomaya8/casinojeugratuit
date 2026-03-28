import type { Metadata } from 'next';
import BonusCard from '@/components/BonusCard';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { bonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Codes Promo Casino 2026 — Bonus Exclusifs Sans Dépôt',
  description: 'Les meilleurs codes promo casino pour obtenir des bonus sans dépôt exclusifs. Codes vérifiés et mis à jour régulièrement.',
};

const faq = [
  { q: "Où trouver les codes promo casino ?", a: "Sur CasinoJeuGratuit, nous listons tous les codes promo vérifiés. Cliquez sur 'Révéler le code' pour afficher le code, puis copiez-le lors de votre inscription sur le casino." },
  { q: "Les codes promo expirent-ils ?", a: "Oui, les codes promo ont généralement une date d'expiration. Nous vérifions régulièrement la validité de nos codes et mettons à jour les offres." },
  { q: "Un code promo est-il nécessaire pour tous les bonus ?", a: "Non, certains bonus sont crédités automatiquement à l'inscription. Quand un code est requis, nous l'indiquons clairement sur la fiche de l'offre." },
];

export default function CodePromoCasinoPage() {
  const withCode = bonuses.filter(b => b.promoCode !== null);
  const withoutCode = bonuses.filter(b => b.promoCode === null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Codes promo casino — Bonus exclusifs
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Les meilleurs codes promo pour obtenir des bonus casino sans dépôt. Codes vérifiés, offres exclusives, et mises à jour régulières.
        </p>
      </div>

      {/* With Promo Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Offres avec code promo ({withCode.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {withCode.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Without Promo Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Offres sans code promo (automatiques)</h2>
        <p className="text-gray-500 mb-4">Ces bonus sont crédités automatiquement à l&apos;inscription — aucun code nécessaire.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {withoutCode.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment utiliser un code promo casino</h2>
        <div className="text-gray-500 space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong className="text-gray-900">Trouvez votre code</strong> — Parcourez nos offres et cliquez sur &quot;Révéler le code&quot; pour afficher le code promo.</li>
            <li><strong className="text-gray-900">Copiez le code</strong> — Cliquez dessus pour le copier automatiquement dans votre presse-papiers.</li>
            <li><strong className="text-gray-900">Inscrivez-vous</strong> — Rendez-vous sur le casino et créez votre compte.</li>
            <li><strong className="text-gray-900">Entrez le code</strong> — Collez le code promo dans le champ dédié lors de l&apos;inscription ou dans la section bonus.</li>
            <li><strong className="text-gray-900">Profitez du bonus</strong> — Votre bonus est crédité et prêt à être utilisé.</li>
          </ol>
        </div>
      </section>

      <NewsletterInline />
      <FAQ items={faq} />
    </div>
  );
}
