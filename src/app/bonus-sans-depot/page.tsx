import type { Metadata } from 'next';
import BonusTable from '@/components/BonusTable';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { bonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Bonus Casino Sans Dépôt 2026 — Liste complète des offres gratuites',
  description: 'Liste complète des bonus casino sans dépôt en 2026. Comparez les offres avec notre tableau filtrable : wagering, gain max, valeur réelle, pays éligibles.',
};

export default function BonusSansDepotPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Bonus casino sans dépôt — Mars 2026
        </h1>
        <p className="text-gray-500 max-w-3xl">
          Comparez toutes les offres de bonus sans dépôt disponibles pour les joueurs francophones. Filtrez par type, pays, et triez selon nos critères pour trouver l&apos;offre qui vous convient.
        </p>
      </div>

      <BonusTable bonuses={bonuses} />

      <section className="py-12 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionnent les bonus sans dépôt ?</h2>
        <div className="text-gray-500 space-y-4">
          <p>
            Un bonus sans dépôt est une offre qui vous permet de jouer dans un casino en ligne sans investir votre propre argent. À l&apos;inscription, le casino crédite automatiquement (ou via un code promo) un bonus sous forme de <strong className="text-gray-900">free spins</strong> ou de <strong className="text-gray-900">bonus cash</strong>.
          </p>
          <p>
            L&apos;objectif pour le casino est de vous faire découvrir sa plateforme. Pour vous, c&apos;est une opportunité de tester un casino sans risque et potentiellement de gagner de l&apos;argent réel.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Les critères essentiels</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900">Wagering :</strong> Le nombre de fois que vous devez miser le bonus avant retrait. Moins c&apos;est, mieux c&apos;est.</li>
            <li><strong className="text-gray-900">Gain maximum :</strong> Le plafond de gains retirables. Vérifiez toujours cette limite.</li>
            <li><strong className="text-gray-900">Validité :</strong> Le temps dont vous disposez pour utiliser le bonus et remplir les conditions.</li>
            <li><strong className="text-gray-900">Jeux éligibles :</strong> Certains bonus ne fonctionnent que sur des jeux spécifiques.</li>
            <li><strong className="text-gray-900">Mise max :</strong> La mise maximale autorisée pendant le wagering. La dépasser annule le bonus.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Avantages des bonus sans dépôt</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aucun risque financier pour le joueur</li>
            <li>Possibilité de tester un casino avant de déposer</li>
            <li>Gains réels possibles (soumis à conditions)</li>
            <li>Idéal pour les débutants</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">Inconvénients</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conditions de mise souvent strictes</li>
            <li>Gains plafonnés</li>
            <li>Validité limitée dans le temps</li>
            <li>Choix de jeux restreint</li>
          </ul>
        </div>
      </section>

      <NewsletterInline />

      <FAQ />
    </div>
  );
}
