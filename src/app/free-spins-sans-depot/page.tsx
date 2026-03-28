import type { Metadata } from 'next';
import BonusTable from '@/components/BonusTable';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { getFreeSpinsBonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Free Spins Sans Dépôt 2026 — Tours Gratuits Casino',
  description: 'Comparez les meilleures offres de free spins sans dépôt en 2026. Tours gratuits, conditions analysées, valeur réelle calculée.',
};

const faq = [
  { q: "Qu'est-ce qu'un free spin sans dépôt ?", a: "Un free spin sans dépôt est un tour gratuit sur une machine à sous, offert par le casino sans que vous ayez besoin de déposer de l'argent. Les gains générés sont soumis à des conditions de mise." },
  { q: "Combien valent les free spins ?", a: "La valeur d'un free spin varie généralement entre 0.10€ et 0.50€. 20 free spins à 0.20€ équivalent à un bonus de 4€. Mais la valeur réelle dépend du wagering et du gain max." },
  { q: "Puis-je choisir le jeu pour mes free spins ?", a: "Non, les free spins sont généralement attribués sur un ou plusieurs jeux spécifiques choisis par le casino. Vérifiez toujours les jeux éligibles avant de réclamer l'offre." },
];

export default function FreeSpinsSansDepotPage() {
  const freeSpins = getFreeSpinsBonuses();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Free spins sans dépôt — Tours gratuits 2026
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Découvrez les meilleures offres de free spins sans dépôt. Des tours gratuits sur les machines à sous les plus populaires, analysés et classés selon leur valeur réelle.
        </p>
      </div>

      <BonusTable bonuses={freeSpins} />

      <section className="py-12 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Guide des free spins sans dépôt</h2>
        <div className="text-gray-500 space-y-4">
          <p>
            Les <strong className="text-gray-900">free spins sans dépôt</strong> sont des tours gratuits offerts à l&apos;inscription sur un casino en ligne. Ils vous permettent de faire tourner les rouleaux d&apos;une machine à sous sans risquer votre argent.
          </p>
          <p>
            Chaque free spin a une valeur fixe (généralement entre 0.10€ et 0.50€) et les gains générés sont crédités sous forme de bonus, soumis à des conditions de mise avant retrait.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Conseils pour maximiser vos free spins</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Choisissez des offres avec un <strong className="text-gray-900">wagering bas</strong> (x25 ou moins)</li>
            <li>Privilégiez les jeux à <strong className="text-gray-900">RTP élevé</strong> (96%+)</li>
            <li>Vérifiez la <strong className="text-gray-900">mise maximale</strong> pendant le wagering</li>
            <li>Ne laissez pas vos free spins expirer</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Pièges à éviter</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Un grand nombre de free spins ne signifie pas forcément une bonne offre si le wagering est élevé</li>
            <li>Certains jeux éligibles ont un RTP faible — vérifiez avant de jouer</li>
            <li>La mise par spin est souvent fixée à un minimum, ce qui allonge le wagering</li>
          </ul>
        </div>
      </section>

      <NewsletterInline />
      <FAQ items={faq} />
    </div>
  );
}
