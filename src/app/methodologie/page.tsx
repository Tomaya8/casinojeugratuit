import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Méthodologie — Comment nous évaluons les bonus',
  description: 'Notre méthodologie transparente pour évaluer et classer les bonus casino sans dépôt. Score, critères, et calcul de la valeur réelle.',
};

export default function MethodologiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Notre méthodologie</h1>

      <div className="space-y-6 text-gray-500">
        <p>
          Nous évaluons chaque bonus casino sans dépôt selon une <strong className="text-gray-900">méthodologie rigoureuse et transparente</strong>. Voici comment nous calculons notre score et la valeur réelle estimée.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Le score CasinoJeuGratuit (0-100)</h2>

        <div className="bg-white border border-orange-100 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-900 font-semibold">Wagering</span>
            <span className="text-orange-600 font-bold">40%</span>
          </div>
          <div className="w-full bg-orange-50 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-sm">Le critère le plus important. Un wagering de x0 obtient le score max, x50+ obtient le score min.</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-900 font-semibold">Valeur réelle estimée (EV)</span>
            <span className="text-orange-600 font-bold">20%</span>
          </div>
          <div className="w-full bg-orange-50 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '20%' }}></div>
          </div>
          <p className="text-sm">Calculée à partir du montant du bonus, du wagering, et du RTP moyen des jeux éligibles.</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-900 font-semibold">Gain maximum</span>
            <span className="text-orange-600 font-bold">15%</span>
          </div>
          <div className="w-full bg-orange-50 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '15%' }}></div>
          </div>
          <p className="text-sm">Le plafond de gains retirables. Plus il est élevé par rapport au bonus, mieux c&apos;est.</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-900 font-semibold">Validité</span>
            <span className="text-orange-600 font-bold">10%</span>
          </div>
          <div className="w-full bg-orange-50 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '10%' }}></div>
          </div>
          <p className="text-sm">Plus la durée de validité est longue, plus vous avez de chances de remplir les conditions.</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-900 font-semibold">Jeux + Pays + Réputation</span>
            <span className="text-orange-600 font-bold">15%</span>
          </div>
          <div className="w-full bg-orange-50 rounded-full h-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '15%' }}></div>
          </div>
          <p className="text-sm">Variété des jeux éligibles (5%), couverture géographique (5%), et réputation du casino (5%).</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Calcul de la valeur réelle (EV)</h2>
        <p>
          La <strong className="text-gray-900">valeur réelle estimée</strong> (Expected Value) est le montant moyen qu&apos;un joueur peut espérer retirer d&apos;un bonus. Elle est calculée ainsi :
        </p>
        <div className="bg-white border border-orange-100 rounded-xl p-6 font-mono text-sm">
          <p className="text-orange-600">EV = Bonus × (RTP ^ Wagering) × min(1, GainMax/Bonus)</p>
          <p className="text-gray-500 mt-2">Exemple : 10€, wagering x30, RTP 96%, gain max 100€</p>
          <p className="text-gray-900">EV = 10 × (0.96^30) × 1 ≈ 2.94€</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Mise à jour des données</h2>
        <p>
          Nos offres sont vérifiées et mises à jour au minimum une fois par semaine. La date de dernière mise à jour est affichée sur chaque fiche bonus.
        </p>

        <div className="mt-8 pt-8 border-t border-orange-100">
          <Link href="/" className="text-orange-600 hover:text-orange-700">← Retour à l&apos;accueil</Link>
        </div>
      </div>
    </div>
  );
}
