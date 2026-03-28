import type { Metadata } from 'next';
import Link from 'next/link';
import BonusTable from '@/components/BonusTable';
import BonusCard from '@/components/BonusCard';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { getFreeSpinsBonuses, getNoWageringBonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Free Spins Sans Dépôt 2026 — Tours Gratuits Casino en Ligne',
  description: 'Comparez les meilleures offres de free spins sans dépôt en 2026. Tours gratuits sur les machines à sous populaires, conditions analysées, valeur réelle calculée. France, Belgique, Suisse, Québec.',
  alternates: { canonical: '/free-spins-sans-depot' },
};

const faq = [
  { q: "Qu'est-ce qu'un free spin sans dépôt ?", a: "Un free spin sans dépôt est un tour gratuit sur une machine à sous offert par le casino sans que vous ayez besoin de déposer votre propre argent. Chaque spin a une valeur fixe (généralement 0.10€ à 0.50€) et les gains générés sont crédités sous forme de bonus, soumis à des conditions de mise (wagering) avant retrait." },
  { q: "Combien valent réellement les free spins sans dépôt ?", a: "La valeur d'un free spin varie entre 0.10€ et 0.50€. Par exemple, 20 free spins à 0.20€ équivalent à un bonus de 4€. Mais la valeur réelle dépend du wagering : avec un wagering x30, ces 4€ ne valent en réalité que ~1.50€. Sans wagering, ils valent exactement 4€." },
  { q: "Puis-je choisir sur quel jeu utiliser mes free spins ?", a: "Non, dans la grande majorité des cas. Le casino détermine le ou les jeux éligibles (souvent Book of Dead, Starburst, Sweet Bonanza ou Gates of Olympus). Quelques offres rares proposent un choix entre 2-3 jeux. Vérifiez toujours les jeux éligibles avant de réclamer." },
  { q: "Quelle est la différence entre free spins sans dépôt et free spins classiques ?", a: "Les free spins sans dépôt sont offerts gratuitement à l'inscription, sans aucun dépôt requis. Les free spins classiques font partie d'un bonus de bienvenue et nécessitent un premier dépôt pour être activés. Les conditions (wagering, gain max) peuvent varier entre les deux types." },
  { q: "Combien de free spins sans dépôt peut-on obtenir ?", a: "Les offres varient généralement entre 10 et 50 free spins. Les offres de 20-30 spins sont les plus courantes. Certaines offres exceptionnelles proposent jusqu'à 100 free spins, mais elles sont rares et les conditions sont souvent plus strictes." },
  { q: "Les free spins sans dépôt expirent-ils ?", a: "Oui, les free spins ont toujours une durée de validité, généralement entre 3 et 14 jours après activation. Si vous ne les utilisez pas dans ce délai, ils sont automatiquement supprimés. Les gains du wagering ont aussi leur propre délai d'expiration." },
  { q: "Peut-on gagner le jackpot avec des free spins gratuits ?", a: "Techniquement oui, si le jeu éligible possède un jackpot et que les conditions du bonus ne l'excluent pas. Cependant, les gains sont presque toujours plafonnés par le gain maximum de l'offre (souvent 50€ à 200€), donc même un jackpot serait limité à ce plafond." },
];

export default function FreeSpinsSansDepotPage() {
  const freeSpins = getFreeSpinsBonuses();
  const noWageringFS = getNoWageringBonuses().filter(b => b.type === 'free-spins');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Spins Sans Dépôt 2026 — Tours Gratuits Casino',
    description: 'Les meilleures offres de free spins sans dépôt, analysées et classées selon leur valeur réelle.',
    url: 'https://casinojeugratuit.com/free-spins-sans-depot',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: freeSpins.length,
      itemListElement: freeSpins.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${b.casinoName} — ${b.title}`,
        url: `https://casinojeugratuit.com/bonus-sans-depot/${b.slug}`,
      })),
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
        <Link href="/" className="hover:text-orange-600">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/bonus-sans-depot" className="hover:text-orange-600">Bonus sans dépôt</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Free spins</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs text-orange-600 font-medium mb-4">
          Mis à jour mars 2026 — {freeSpins.length} offres vérifiées
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Free spins sans dépôt — Tours gratuits casino 2026
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          Comparez les meilleures offres de <strong className="text-gray-900">free spins sans dépôt</strong> disponibles pour les joueurs francophones. Tours gratuits sur les machines à sous les plus populaires, analysés et classés selon leur <Link href="/methodologie" className="text-orange-600 hover:text-orange-700 underline">score de valeur réelle</Link>.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{freeSpins.length}</p>
          <p className="text-xs text-gray-500 mt-1">Offres de free spins</p>
        </div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{noWageringFS.length}</p>
          <p className="text-xs text-gray-500 mt-1">Sans wagering</p>
        </div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">{Math.max(...freeSpins.map(b => b.freeSpins || 0))}</p>
          <p className="text-xs text-gray-500 mt-1">Max free spins</p>
        </div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{Math.max(...freeSpins.map(b => b.maxWin || 0))}€</p>
          <p className="text-xs text-gray-500 mt-1">Gain max</p>
        </div>
      </div>

      {/* Comparison Table */}
      <BonusTable bonuses={freeSpins} title="Toutes les offres de free spins sans dépôt" />

      {/* No Wagering Free Spins Highlight */}
      {noWageringFS.length > 0 && (
        <section className="my-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-800 mb-1">Free spins SANS wagering — les meilleures offres</h2>
                <p className="text-sm text-emerald-700">Ces offres rares vous permettent de retirer vos gains directement. Voir aussi notre page dédiée aux <Link href="/bonus-sans-depot-sans-wagering" className="underline font-semibold">bonus sans wagering</Link>.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {noWageringFS.map(bonus => (
              <BonusCard key={bonus.id} bonus={bonus} />
            ))}
          </div>
        </section>
      )}

      {/* SEO Content: What are free spins */}
      <section className="py-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;un free spin sans dépôt ?</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>
            Un <strong className="text-gray-900">free spin sans dépôt</strong> (tour gratuit sans dépôt) est un type de bonus de casino en ligne qui vous offre des tours gratuits sur une machine à sous spécifique, <strong className="text-gray-900">sans avoir à déposer votre propre argent</strong>. Il suffit de créer un compte sur le casino (et parfois d&apos;entrer un code promo) pour recevoir vos free spins.
          </p>
          <p>
            Chaque free spin a une <strong className="text-gray-900">valeur fixe</strong> déterminée par le casino, généralement entre 0.10€ et 0.50€. Par exemple, 30 free spins à 0.20€ représentent un bonus de 6€ au total. Les gains générés par ces tours sont crédités sous forme de bonus et sont soumis à des <Link href="/blog/wagering-explique" className="text-orange-600 hover:text-orange-700 underline">conditions de mise (wagering)</Link> avant retrait.
          </p>
          <p>
            C&apos;est le type de bonus sans dépôt le plus courant sur le marché — environ 60% des offres sans dépôt sont des free spins. Pour comprendre tous les types de bonus disponibles, consultez notre <Link href="/blog/comment-fonctionnent-bonus-sans-depot" className="text-orange-600 hover:text-orange-700 underline">guide complet des bonus sans dépôt</Link>.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionnent les free spins sans dépôt ?</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <ol className="space-y-4 my-4">
            {[
              { title: "Choisissez une offre", text: "Comparez les offres de free spins dans notre tableau ci-dessus. Analysez le nombre de spins, le wagering, le gain max et le jeu éligible." },
              { title: "Inscrivez-vous", text: "Créez un compte sur le casino. Si un code promo est requis, entrez-le lors de l'inscription — il ne sera plus utilisable après." },
              { title: "Recevez vos free spins", text: "Les tours gratuits sont crédités automatiquement ou après validation. Ouvrez le jeu éligible pour les trouver." },
              { title: "Jouez vos tours", text: "Lancez vos free spins. La mise par tour est fixée par le casino. Les gains s'accumulent dans votre solde bonus." },
              { title: "Remplissez le wagering", text: "Misez le montant requis sur les jeux éligibles. Par exemple : 5€ de gains × wagering x30 = 150€ de mises totales." },
              { title: "Retirez vos gains", text: "Une fois le wagering complété et le KYC validé, demandez votre retrait (plafonné au gain maximum de l'offre)." },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <strong className="text-gray-900">{step.title}</strong>
                  <p className="text-gray-600 mt-0.5">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Value Comparison Table */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Valeur réelle des free spins selon le wagering</h2>
        <p className="text-gray-500 mb-4">Exemple avec 30 free spins à 0.20€ (valeur faciale : 6€)</p>
        <div className="overflow-x-auto rounded-xl border border-orange-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Wagering</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Mises requises</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Valeur réelle</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">% de la valeur faciale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-50/50 border-b border-orange-100"><td className="py-2.5 px-4 text-emerald-700 font-bold">x0</td><td className="py-2.5 px-4">0€</td><td className="py-2.5 px-4 text-emerald-700 font-bold">6.00€</td><td className="py-2.5 px-4 text-emerald-700">100%</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4">x20</td><td className="py-2.5 px-4">120€</td><td className="py-2.5 px-4">~2.50€</td><td className="py-2.5 px-4">42%</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 text-amber-600">x25</td><td className="py-2.5 px-4">150€</td><td className="py-2.5 px-4">~2.00€</td><td className="py-2.5 px-4">33%</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 text-orange-600">x30</td><td className="py-2.5 px-4">180€</td><td className="py-2.5 px-4">~1.60€</td><td className="py-2.5 px-4">27%</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 text-orange-500">x35</td><td className="py-2.5 px-4">210€</td><td className="py-2.5 px-4">~1.30€</td><td className="py-2.5 px-4">22%</td></tr>
              <tr><td className="py-2.5 px-4 text-red-600">x40+</td><td className="py-2.5 px-4">240€+</td><td className="py-2.5 px-4 text-red-600">&lt;1.00€</td><td className="py-2.5 px-4 text-red-600">&lt;17%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Free Spins vs Bonus Cash */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Free spins vs bonus cash : lequel choisir ?</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>
            Les deux principaux types de bonus sans dépôt sont les <strong className="text-gray-900">free spins</strong> et les <strong className="text-gray-900">bonus cash</strong>. Chacun a ses avantages selon votre profil. Pour une comparaison complète, consultez notre article <Link href="/blog/free-spins-vs-bonus-cash" className="text-orange-600 hover:text-orange-700 underline">Free spins vs bonus cash</Link>.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-orange-200 shadow-sm my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Critère</th>
                <th className="text-left py-3 px-4 font-semibold text-orange-600 border-b-2 border-orange-200">Free Spins</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Bonus Cash</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Disponibilité</td><td className="py-2.5 px-4 text-emerald-600 font-semibold">Très courant (60%)</td><td className="py-2.5 px-4">Plus rare (40%)</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Choix de jeux</td><td className="py-2.5 px-4">Limité (imposé)</td><td className="py-2.5 px-4 text-emerald-600 font-semibold">Large (libre)</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Contrôle de la mise</td><td className="py-2.5 px-4">Aucun (fixé)</td><td className="py-2.5 px-4 text-emerald-600 font-semibold">Total</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Wagering moyen</td><td className="py-2.5 px-4 text-emerald-600 font-semibold">x25-x35</td><td className="py-2.5 px-4">x25-x40</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Potentiel gros gain</td><td className="py-2.5 px-4 text-emerald-600 font-semibold">Élevé (volatilité)</td><td className="py-2.5 px-4">Moyen</td></tr>
              <tr className="bg-orange-50/30"><td className="py-2.5 px-4 font-medium">Idéal pour</td><td className="py-2.5 px-4">Débutants</td><td className="py-2.5 px-4">Joueurs expérimentés</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avantages et inconvénients des free spins sans dépôt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-bold text-emerald-800 text-lg">Avantages</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Aucun risque financier — 100% gratuit",
                "Type de bonus sans dépôt le plus courant",
                "Découverte de machines à sous populaires",
                "Potentiel de gros gains grâce à la volatilité",
                "Mécanisme simple — pas de stratégie requise",
                "Souvent offerts en grand nombre (20-50 spins)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-900">
                  <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <h3 className="font-bold text-red-800 text-lg">Inconvénients</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Choix de jeux imposé par le casino",
                "Valeur par spin souvent basse (0.10-0.25€)",
                "Impossible de contrôler le montant de la mise",
                "Gains très dépendants de la volatilité du jeu",
                "Wagering souvent appliqué sur les gains",
                "RTP du jeu choisi pas toujours optimal",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-900">
                  <span className="text-red-500 mt-0.5 font-bold flex-shrink-0">−</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5 conseils pour maximiser vos free spins</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <ul className="space-y-3 my-4">
            {[
              { title: "Privilégiez un wagering bas (x25 ou moins)", text: "C'est le critère le plus important. Un wagering élevé annule presque toute la valeur de vos free spins." },
              { title: "Vérifiez le RTP du jeu éligible", text: "Book of Dead (96.21%) et Starburst (96.09%) sont de bons choix. Évitez les jeux sous 95%." },
              { title: "Respectez scrupuleusement la mise max", text: "Pendant le wagering des gains, ne dépassez jamais la mise maximale autorisée sous peine d'annulation." },
              { title: "Ne laissez pas vos spins expirer", text: "Activez vos free spins rapidement. Programmez un rappel si nécessaire." },
              { title: "Cumulez les offres sur plusieurs casinos", text: "Inscrivez-vous sur 3-5 casinos pour multiplier vos chances de gain." },
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-gray-900">{tip.title}</strong> — {tip.text}</span>
              </li>
            ))}
          </ul>
          <p>
            Pour des stratégies plus avancées, lisez notre guide <Link href="/blog/maximiser-bonus-sans-depot" className="text-orange-600 hover:text-orange-700 underline">7 stratégies pour maximiser un bonus sans dépôt</Link>.
          </p>
        </div>
      </section>

      {/* Machines à sous populaires */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Machines à sous populaires pour les free spins</h2>
        <p className="text-gray-500 mb-4">Les jeux les plus fréquemment proposés par les casinos pour les offres de free spins sans dépôt.</p>
        <div className="overflow-x-auto rounded-xl border border-orange-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Machine à sous</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Fournisseur</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">RTP</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Volatilité</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Fréquence dans les offres</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-semibold">Book of Dead</td><td className="py-2.5 px-4">Play&apos;n GO</td><td className="py-2.5 px-4">96.21%</td><td className="py-2.5 px-4">Haute</td><td className="py-2.5 px-4 text-orange-600 font-semibold">Très fréquent</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-semibold">Starburst</td><td className="py-2.5 px-4">NetEnt</td><td className="py-2.5 px-4">96.09%</td><td className="py-2.5 px-4">Basse</td><td className="py-2.5 px-4 text-orange-600 font-semibold">Très fréquent</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-semibold">Sweet Bonanza</td><td className="py-2.5 px-4">Pragmatic Play</td><td className="py-2.5 px-4">96.49%</td><td className="py-2.5 px-4">Moyenne-haute</td><td className="py-2.5 px-4">Fréquent</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-semibold">Gates of Olympus</td><td className="py-2.5 px-4">Pragmatic Play</td><td className="py-2.5 px-4">96.50%</td><td className="py-2.5 px-4">Haute</td><td className="py-2.5 px-4">Fréquent</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-semibold">Gonzo&apos;s Quest</td><td className="py-2.5 px-4">NetEnt</td><td className="py-2.5 px-4">95.97%</td><td className="py-2.5 px-4">Moyenne</td><td className="py-2.5 px-4">Courant</td></tr>
              <tr className="bg-orange-50/30"><td className="py-2.5 px-4 font-semibold">Wolf Gold</td><td className="py-2.5 px-4">Pragmatic Play</td><td className="py-2.5 px-4">96.01%</td><td className="py-2.5 px-4">Moyenne</td><td className="py-2.5 px-4">Courant</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Pour en savoir plus sur ces jeux, consultez notre guide des <Link href="/blog/meilleures-machines-a-sous-gratuites-2026" className="text-orange-500 hover:text-orange-600 underline">meilleures machines à sous gratuites</Link>.</p>
      </section>

      {/* Internal Links */}
      <section className="py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Guides et pages connexes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/bonus-sans-depot', label: 'Tous les bonus sans dépôt' },
            { href: '/bonus-sans-depot-sans-wagering', label: 'Bonus sans wagering' },
            { href: '/bonus-casino-gratuit', label: 'Casino gratuit' },
            { href: '/code-promo-casino', label: 'Codes promo casino' },
            { href: '/blog/free-spins-vs-bonus-cash', label: 'Free spins vs bonus cash' },
            { href: '/blog/wagering-explique', label: 'Le wagering expliqué' },
            { href: '/blog/maximiser-bonus-sans-depot', label: 'Maximiser un bonus' },
            { href: '/blog/meilleurs-bonus-sans-depot-2026', label: 'Classement 2026' },
            { href: '/blog/meilleures-machines-a-sous-gratuites-2026', label: 'Meilleures machines à sous' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 bg-white border border-orange-100 rounded-xl text-sm text-gray-600 hover:text-orange-600 hover:border-orange-300 transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="my-8">
        <NewsletterInline />
      </div>

      {/* FAQ */}
      <FAQ items={faq} />
    </div>
  );
}
