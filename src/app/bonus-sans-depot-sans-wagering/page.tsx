import type { Metadata } from 'next';
import BonusCard from '@/components/BonusCard';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { getNoWageringBonuses, bonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Bonus Sans Dépôt SANS Wagering 2026 — Gains Retirables',
  description: 'Les meilleures offres de bonus casino sans dépôt et sans condition de mise. Gains 100% retirables. Offres rares et vérifiées.',
};

const faq = [
  { q: "Qu'est-ce qu'un bonus sans wagering ?", a: "Un bonus sans wagering est une offre où les gains sont directement retirables, sans condition de mise. Vous n'avez pas besoin de miser X fois le bonus avant de retirer. C'est le type de bonus le plus avantageux." },
  { q: "Les bonus sans wagering existent-ils vraiment ?", a: "Oui, mais ils sont rares. Les casinos les proposent pour se démarquer de la concurrence. Les montants sont souvent plus petits, mais la valeur réelle est maximale puisque 1€ de bonus = 1€ de valeur." },
  { q: "Pourquoi les bonus sans wagering sont-ils meilleurs ?", a: "Avec un bonus classique (wagering x30), un bonus de 10€ vaut environ 3-4€ en réalité. Avec 0 wagering, un bonus de 5€ vaut exactement 5€. Le bonus sans wagering a donc une meilleure valeur réelle." },
];

export default function BonusSansWageringPage() {
  const noWagering = getNoWageringBonuses();
  const lowWagering = bonuses.filter(b => b.wagering > 0 && b.wagering <= 25).sort((a, b) => a.wagering - b.wagering);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Bonus sans dépôt <span className="text-emerald-700">SANS wagering</span>
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Les offres les plus avantageuses du marché : des bonus dont les gains sont directement retirables, sans aucune condition de mise. Offres rares et vérifiées.
        </p>
      </div>

      {/* Highlight Box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-emerald-700 mb-2">Pourquoi ces offres sont les meilleures</h2>
        <p className="text-gray-500">
          Un bonus sans wagering signifie que <strong className="text-gray-900">chaque euro gagné est directement retirable</strong>. Pas de conditions cachées, pas de mise minimum à atteindre. La valeur réelle du bonus est égale à sa valeur faciale. C&apos;est le Saint Graal des bonus casino.
        </p>
      </div>

      {/* No Wagering Bonuses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Offres sans wagering ({noWagering.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {noWagering.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Low Wagering */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bonus à faible wagering</h2>
        <p className="text-gray-500 mb-4">Ces offres ont un wagering de x25 ou moins — les meilleures après les offres sans wagering.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowWagering.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre le wagering et son impact</h2>
        <div className="text-gray-500 space-y-4">
          <p>
            Le wagering est le facteur qui détermine la <strong className="text-gray-900">valeur réelle</strong> d&apos;un bonus. Voici comment il affecte la valeur d&apos;un bonus de 10€ :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-orange-100">
                  <th className="text-left py-2 px-3 text-gray-700">Wagering</th>
                  <th className="text-left py-2 px-3 text-gray-700">Montant à miser</th>
                  <th className="text-left py-2 px-3 text-gray-700">Valeur réelle estimée</th>
                  <th className="text-left py-2 px-3 text-gray-700">Qualité</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-100/50"><td className="py-2 px-3 text-emerald-700 font-bold">x0</td><td className="py-2 px-3">0€</td><td className="py-2 px-3 text-emerald-700">10.00€</td><td className="py-2 px-3">Exceptionnel</td></tr>
                <tr className="border-b border-orange-100/50"><td className="py-2 px-3">x10</td><td className="py-2 px-3">100€</td><td className="py-2 px-3">~6.50€</td><td className="py-2 px-3">Excellent</td></tr>
                <tr className="border-b border-orange-100/50"><td className="py-2 px-3">x20</td><td className="py-2 px-3">200€</td><td className="py-2 px-3">~4.00€</td><td className="py-2 px-3">Bon</td></tr>
                <tr className="border-b border-orange-100/50"><td className="py-2 px-3 text-orange-600">x30</td><td className="py-2 px-3">300€</td><td className="py-2 px-3">~2.80€</td><td className="py-2 px-3">Correct</td></tr>
                <tr className="border-b border-orange-100/50"><td className="py-2 px-3 text-orange-400">x40</td><td className="py-2 px-3">400€</td><td className="py-2 px-3">~1.80€</td><td className="py-2 px-3">Difficile</td></tr>
                <tr><td className="py-2 px-3 text-red-700">x50+</td><td className="py-2 px-3">500€+</td><td className="py-2 px-3">~1.00€</td><td className="py-2 px-3">A éviter</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NewsletterInline />
      <FAQ items={faq} />
    </div>
  );
}
