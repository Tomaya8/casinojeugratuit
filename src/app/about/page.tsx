import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos — CasinoJeuGratuit',
  description: 'Découvrez CasinoJeuGratuit, le comparateur francophone de bonus casino sans dépôt. Notre mission, notre méthodologie, notre engagement.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">À propos de CasinoJeuGratuit</h1>

      <div className="space-y-6 text-gray-500">
        <p>
          <strong className="text-gray-900">CasinoJeuGratuit</strong> est le comparateur francophone dédié exclusivement aux bonus casino sans dépôt. Notre mission est simple : vous aider à trouver les meilleures offres gratuites, en toute transparence.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Notre approche</h2>
        <p>
          Contrairement à d&apos;autres sites qui listent des centaines de casinos sans discernement, nous nous concentrons uniquement sur les <strong className="text-gray-900">offres sans dépôt</strong> et les analysons en profondeur. Chaque bonus est évalué selon des critères objectifs pour calculer sa valeur réelle.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Notre score transparent</h2>
        <p>
          Notre score de 0 à 100 est calculé à partir de 7 critères pondérés :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-gray-900">Wagering (40%)</strong> — Plus le wagering est bas, meilleur est le score</li>
          <li><strong className="text-gray-900">Valeur réelle estimée (20%)</strong> — Calcul basé sur le RTP moyen et le wagering</li>
          <li><strong className="text-gray-900">Gain maximum (15%)</strong> — Le plafond de gains retirables</li>
          <li><strong className="text-gray-900">Validité (10%)</strong> — Le temps disponible pour utiliser l&apos;offre</li>
          <li><strong className="text-gray-900">Variété des jeux (5%)</strong> — Le nombre de jeux éligibles</li>
          <li><strong className="text-gray-900">Disponibilité géographique (5%)</strong> — Le nombre de pays francophones couverts</li>
          <li><strong className="text-gray-900">Réputation du casino (5%)</strong> — Historique, licences, avis utilisateurs</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Nos engagements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Aucune promesse de gains irréaliste</li>
          <li>Conditions toujours expliquées clairement</li>
          <li>Offres vérifiées et mises à jour régulièrement</li>
          <li>Contenu éducatif pour jouer en connaissance de cause</li>
          <li>Promotion du jeu responsable</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Jeu responsable</h2>
        <p>
          Les jeux de casino comportent des risques. Ne jouez jamais avec de l&apos;argent que vous ne pouvez pas vous permettre de perdre. Les bonus sans dépôt sont un excellent moyen de découvrir les casinos sans risque financier, mais les gains restent soumis à des conditions strictes.
        </p>
        <p>
          Si vous pensez avoir un problème avec le jeu, contactez <strong className="text-gray-900">Joueurs Info Service</strong> au 09 74 75 13 13.
        </p>

        <div className="mt-8 pt-8 border-t border-orange-100">
          <Link href="/" className="text-orange-600 hover:text-orange-700">← Retour à l&apos;accueil</Link>
        </div>
      </div>
    </div>
  );
}
