import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-sm font-bold text-white">CJ</div>
              <span className="font-bold text-gray-900">CasinoJeuGratuit</span>
            </div>
            <p className="text-sm text-gray-500">
              Le comparateur francophone des bonus casino sans depot. Analyses transparentes et offres verifiees.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Bonus</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bonus-sans-depot" className="text-gray-500 hover:text-orange-600 transition-colors">Tous les bonus</Link></li>
              <li><Link href="/free-spins-sans-depot" className="text-gray-500 hover:text-orange-600 transition-colors">Free Spins</Link></li>
              <li><Link href="/bonus-sans-depot-sans-wagering" className="text-gray-500 hover:text-orange-600 transition-colors">Sans wagering</Link></li>
              <li><Link href="/bonus-casino-gratuit" className="text-gray-500 hover:text-orange-600 transition-colors">Casino gratuit</Link></li>
              <li><Link href="/code-promo-casino" className="text-gray-500 hover:text-orange-600 transition-colors">Codes promo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/comment-fonctionnent-bonus-sans-depot" className="text-gray-500 hover:text-orange-600 transition-colors">Comment ca marche</Link></li>
              <li><Link href="/blog/wagering-explique" className="text-gray-500 hover:text-orange-600 transition-colors">Wagering explique</Link></li>
              <li><Link href="/blog/maximiser-bonus-sans-depot" className="text-gray-500 hover:text-orange-600 transition-colors">Maximiser un bonus</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-orange-600 transition-colors">Tous les articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-500 hover:text-orange-600 transition-colors">A propos</Link></li>
              <li><Link href="/methodologie" className="text-gray-500 hover:text-orange-600 transition-colors">Methodologie</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-orange-600 transition-colors">Contact</Link></li>
              <li><Link href="/politique-confidentialite" className="text-gray-500 hover:text-orange-600 transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/conditions-utilisation" className="text-gray-500 hover:text-orange-600 transition-colors">Conditions d&apos;utilisation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-orange-100">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Jeu responsable :</strong> Les jeux de casino comportent des risques. Ne jouez jamais avec de l&apos;argent que vous ne pouvez pas vous permettre de perdre. Les bonus sans depot vous permettent de jouer gratuitement, mais les gains restent soumis a des conditions. Si vous pensez avoir un probleme avec le jeu, contactez Joueurs Info Service au <a href="tel:0974751313" className="text-orange-600 font-medium underline">09 74 75 13 13</a> (France) ou visitez <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium underline">joueurs-info-service.fr</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} CasinoJeuGratuit.com — Tous droits reserves</p>
            <p>18+ | Les bonus sont soumis a conditions | Jouer comporte des risques</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
