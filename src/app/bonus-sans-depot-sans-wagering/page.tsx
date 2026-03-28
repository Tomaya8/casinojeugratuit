import type { Metadata } from 'next';
import Link from 'next/link';
import BonusCard from '@/components/BonusCard';
import FAQ from '@/components/FAQ';
import NewsletterInline from '@/components/NewsletterInline';
import { getNoWageringBonuses, bonuses } from '@/data/bonuses';

export const metadata: Metadata = {
  title: 'Bonus Sans Dépôt SANS Wagering 2026 — Gains 100% Retirables',
  description: 'Les meilleures offres de bonus casino sans dépôt et sans condition de mise en 2026. Gains 100% retirables, offres vérifiées pour la France, Belgique, Suisse et Québec. Comparatif transparent.',
  alternates: { canonical: '/bonus-sans-depot-sans-wagering' },
};

const faq = [
  { q: "Qu'est-ce qu'un bonus sans wagering ?", a: "Un bonus sans wagering (aussi appelé sans condition de mise) est une offre de casino où les gains générés sont directement retirables. Contrairement aux bonus classiques qui exigent de miser X fois le montant avant retrait, un bonus sans wagering vous permet de retirer vos gains immédiatement. C'est objectivement le type de bonus le plus avantageux pour les joueurs." },
  { q: "Les bonus sans wagering existent-ils vraiment ?", a: "Oui, mais ils sont rares. En 2026, environ 5 à 10 % des bonus sans dépôt sont proposés sans condition de mise. Les casinos les utilisent pour se démarquer de la concurrence. Les montants sont généralement plus modestes (5-10€), mais leur valeur réelle est maximale puisque 1€ de bonus = 1€ de valeur réelle." },
  { q: "Pourquoi les bonus sans wagering sont-ils meilleurs que les bonus classiques ?", a: "Avec un bonus classique à wagering x30, un bonus de 10€ ne vaut en réalité que 2-3€ après les pertes statistiques liées au wagering. Un bonus de 5€ sans wagering vaut exactement 5€. Le bonus sans wagering offre donc systématiquement une meilleure valeur réelle, même avec un montant facial inférieur." },
  { q: "Peut-on retirer immédiatement les gains d'un bonus sans wagering ?", a: "Oui, c'est le principe fondamental. Cependant, un gain maximum est souvent appliqué (par exemple 25€ ou 50€). Vous devrez aussi compléter la vérification d'identité (KYC) avant votre premier retrait, ce qui est standard sur tous les casinos en ligne." },
  { q: "Les bonus sans wagering sont-ils disponibles en France ?", a: "Oui, plusieurs casinos en ligne proposent des bonus sans wagering accessibles depuis la France, la Belgique, la Suisse et le Québec. Nous vérifions la disponibilité géographique de chaque offre et l'indiquons clairement sur notre site." },
  { q: "Comment reconnaître un vrai bonus sans wagering ?", a: "Vérifiez les conditions générales de l'offre. Un vrai bonus sans wagering mentionnera explicitement 'pas de conditions de mise' ou 'wagering x0'. Méfiez-vous des offres qui annoncent 'sans wagering' mais qui appliquent des conditions sur les gains (gain max très bas, jeux exclus, etc.)." },
  { q: "Quelle est la différence entre 'sans wagering' et 'faible wagering' ?", a: "Un bonus sans wagering (x0) signifie aucune condition de mise — vos gains sont directement retirables. Un bonus à faible wagering (x10 à x20) impose tout de même de miser un certain montant avant retrait, mais les conditions sont beaucoup plus réalistes que les wagering standards (x30-x50)." },
];

export default function BonusSansWageringPage() {
  const noWagering = getNoWageringBonuses();
  const lowWagering = bonuses.filter(b => b.wagering > 0 && b.wagering <= 25).sort((a, b) => a.wagering - b.wagering);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bonus Sans Dépôt Sans Wagering 2026',
    description: 'Les meilleures offres de bonus casino sans dépôt et sans condition de mise.',
    url: 'https://casinojeugratuit.com/bonus-sans-depot-sans-wagering',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: noWagering.length + lowWagering.length,
      itemListElement: noWagering.map((b, i) => ({
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
        <span className="text-gray-700">Sans wagering</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Bonus sans dépôt <span className="text-emerald-600">SANS wagering</span> — Mars 2026
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          Les offres les plus avantageuses du marché : des bonus dont les gains sont <strong className="text-gray-900">directement retirables</strong>, sans aucune condition de mise. Offres rares, vérifiées et mises à jour chaque semaine.
        </p>
      </div>

      {/* Key Info Box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-800 mb-2">Pourquoi ces offres sont les meilleures</h2>
            <p className="text-gray-700">
              Un bonus sans wagering signifie que <strong>chaque euro gagné est directement retirable</strong>. Pas de conditions cachées, pas de mise minimum à atteindre. La valeur réelle du bonus est égale à sa valeur faciale — c&apos;est le Saint Graal des bonus casino. Un bonus de 5€ sans wagering a une meilleure valeur réelle qu&apos;un bonus de 20€ avec wagering x40.
            </p>
          </div>
        </div>
      </div>

      {/* No Wagering Bonuses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Offres sans wagering ({noWagering.length})</h2>
        <p className="text-gray-500 mb-4">Gains 100% retirables — les meilleures offres du marché francophone.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {noWagering.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Low Wagering */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bonus à faible wagering (x25 ou moins)</h2>
        <p className="text-gray-500 mb-4">
          Ces offres ont des conditions de mise réalistes — les meilleures alternatives quand aucune offre sans wagering n&apos;est disponible. Consultez aussi notre <Link href="/bonus-sans-depot" className="text-orange-600 hover:text-orange-700 underline">liste complète des bonus sans dépôt</Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowWagering.map(bonus => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* SEO Content Block 1 */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;un bonus sans wagering ?</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>
            Un <strong className="text-gray-900">bonus sans wagering</strong> (également appelé bonus sans condition de mise, ou wager-free bonus) est une offre promotionnelle de casino en ligne où les gains sont <strong className="text-gray-900">directement retirables</strong>. Contrairement aux bonus classiques qui imposent de miser un certain multiple du bonus avant de pouvoir retirer (par exemple x30, x40 ou même x50), un bonus sans wagering vous permet de retirer vos gains dès que vous le souhaitez.
          </p>
          <p>
            C&apos;est une distinction fondamentale qui change radicalement la valeur d&apos;une offre. Pour comprendre pourquoi, il faut s&apos;intéresser au concept de <strong className="text-gray-900">valeur réelle estimée</strong> (Expected Value ou EV). Nous avons un <Link href="/blog/wagering-explique" className="text-orange-600 hover:text-orange-700 underline">guide complet sur le wagering</Link> qui explique ce concept en détail.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact du wagering sur la valeur réelle d&apos;un bonus de 10€</h2>
        <p className="text-gray-500 mb-4">Ce tableau montre clairement pourquoi un bonus sans wagering est systématiquement plus avantageux, même avec un montant facial inférieur.</p>
        <div className="overflow-x-auto rounded-xl border border-orange-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Wagering</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Montant à miser</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Perte théorique</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Valeur réelle</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Qualité</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-50/50 border-b border-orange-100"><td className="py-2.5 px-4 text-emerald-700 font-bold">x0 (sans wagering)</td><td className="py-2.5 px-4">0€</td><td className="py-2.5 px-4">0€</td><td className="py-2.5 px-4 text-emerald-700 font-bold">10.00€</td><td className="py-2.5 px-4 text-emerald-700 font-semibold">Exceptionnel</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 text-emerald-600">x10</td><td className="py-2.5 px-4">100€</td><td className="py-2.5 px-4">~4€</td><td className="py-2.5 px-4">~6.50€</td><td className="py-2.5 px-4">Excellent</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 text-teal-600">x20</td><td className="py-2.5 px-4">200€</td><td className="py-2.5 px-4">~8€</td><td className="py-2.5 px-4">~4.00€</td><td className="py-2.5 px-4">Bon</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 text-amber-600">x25</td><td className="py-2.5 px-4">250€</td><td className="py-2.5 px-4">~10€</td><td className="py-2.5 px-4">~3.20€</td><td className="py-2.5 px-4">Bon</td></tr>
              <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 text-orange-600">x30</td><td className="py-2.5 px-4">300€</td><td className="py-2.5 px-4">~12€</td><td className="py-2.5 px-4">~2.80€</td><td className="py-2.5 px-4">Correct</td></tr>
              <tr className="border-b border-orange-100"><td className="py-2.5 px-4 text-orange-500">x40</td><td className="py-2.5 px-4">400€</td><td className="py-2.5 px-4">~16€</td><td className="py-2.5 px-4">~1.80€</td><td className="py-2.5 px-4">Difficile</td></tr>
              <tr><td className="py-2.5 px-4 text-red-600 font-semibold">x50+</td><td className="py-2.5 px-4">500€+</td><td className="py-2.5 px-4">~20€+</td><td className="py-2.5 px-4 text-red-600">~1.00€</td><td className="py-2.5 px-4 text-red-600">À éviter</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">* Calcul basé sur un RTP moyen de 96% sur les machines à sous. La perte théorique = montant à miser × (1 - RTP).</p>
      </section>

      {/* SEO Content Block 2 */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionnent les bonus sans wagering ?</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>
            Le fonctionnement est simple et transparent. Lorsque vous réclamez un bonus sans wagering :
          </p>
          <ol className="space-y-3 my-4">
            {[
              "Inscrivez-vous sur le casino et activez le bonus (automatique ou via code promo)",
              "Le bonus est crédité sur votre compte (free spins ou argent gratuit)",
              "Jouez sur les jeux éligibles avec votre bonus",
              "Les gains générés sont immédiatement retirables (dans la limite du gain maximum)",
              "Complétez la vérification d'identité (KYC) et demandez votre retrait",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-gray-600 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p>
            C&apos;est cette simplicité qui rend les bonus sans wagering si populaires. Pas de calculs complexes, pas de risque de perdre ses gains en essayant de remplir des conditions irréalistes. Pour en savoir plus sur le processus, consultez notre guide <Link href="/blog/comment-fonctionnent-bonus-sans-depot" className="text-orange-600 hover:text-orange-700 underline">Comment fonctionnent les bonus sans dépôt</Link>.
          </p>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avantages et inconvénients des bonus sans wagering</h2>
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
                "Gains 100% retirables — pas de conditions cachées",
                "Valeur réelle maximale (1€ de bonus = 1€ de valeur)",
                "Simplicité : pas de calculs complexes ni de suivi",
                "Pas de risque de perdre ses gains pendant le wagering",
                "Pas de mise maximale à respecter",
                "Idéal pour les débutants comme les joueurs expérimentés",
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
                "Offres rares — seulement 5-10% des bonus du marché",
                "Montants généralement plus petits (5-10€ vs 20-50€)",
                "Gain maximum souvent plus bas (25-50€)",
                "Nombre de free spins parfois limité (10-20)",
                "Pas toujours disponible dans tous les pays",
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

      {/* SEO Content Block 3 */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bonus sans wagering vs bonus classique : la comparaison</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>
            Pour illustrer concrètement la différence, comparons deux offres typiques :
          </p>
          <div className="overflow-x-auto rounded-xl border border-orange-200 shadow-sm my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">Critère</th>
                  <th className="text-left py-3 px-4 font-semibold text-emerald-700 border-b-2 border-orange-200">5€ sans wagering</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b-2 border-orange-200">20€ avec wagering x40</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Montant affiché</td><td className="py-2.5 px-4">5€</td><td className="py-2.5 px-4">20€</td></tr>
                <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Mises requises</td><td className="py-2.5 px-4 text-emerald-700 font-semibold">0€</td><td className="py-2.5 px-4">800€</td></tr>
                <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Valeur réelle</td><td className="py-2.5 px-4 text-emerald-700 font-bold">5.00€</td><td className="py-2.5 px-4">~3.60€</td></tr>
                <tr className="bg-orange-50/30 border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Probabilité de profit</td><td className="py-2.5 px-4 text-emerald-700 font-semibold">~100%</td><td className="py-2.5 px-4">~12%</td></tr>
                <tr className="border-b border-orange-100"><td className="py-2.5 px-4 font-medium">Complexité</td><td className="py-2.5 px-4">Aucune</td><td className="py-2.5 px-4">Élevée</td></tr>
                <tr className="bg-orange-50/30"><td className="py-2.5 px-4 font-medium">Risque de tout perdre</td><td className="py-2.5 px-4 text-emerald-700 font-semibold">Très faible</td><td className="py-2.5 px-4 text-red-600">Élevé (~88%)</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Le constat est sans appel : malgré un montant 4 fois inférieur, le bonus sans wagering offre une <strong className="text-gray-900">meilleure valeur réelle</strong> et une <strong className="text-gray-900">probabilité de profit bien supérieure</strong>. C&apos;est pourquoi nous recommandons toujours de privilégier les offres sans wagering quand elles sont disponibles.
          </p>
        </div>
      </section>

      {/* SEO Content Block 4 */}
      <section className="py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils pour profiter des bonus sans wagering</h2>
        <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
          <p>Même avec un bonus sans wagering, quelques bonnes pratiques vous aideront à maximiser votre expérience :</p>
          <ul className="space-y-2 my-4">
            {[
              { title: "Vérifiez le gain maximum", text: "Même sans wagering, un plafond de gains s'applique presque toujours. Un gain max de 25€ sur un bonus de 5€ reste intéressant, mais soyez-en conscient." },
              { title: "Jouez sur des jeux à RTP élevé", text: "Sans contrainte de wagering, vous êtes libre de choisir les jeux les plus favorables. Consultez notre guide des meilleures machines à sous." },
              { title: "Lisez les conditions", text: "Même un bonus sans wagering peut avoir des restrictions : jeux éligibles, mise min/max, délai de validité." },
              { title: "Complétez le KYC en avance", text: "La vérification d'identité est requise pour retirer. Préparez vos documents pour ne pas perdre de temps." },
              { title: "Diversifiez", text: "Inscrivez-vous sur plusieurs casinos proposant des offres sans wagering pour multiplier vos chances." },
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-gray-900">{tip.title}</strong> — {tip.text}</span>
              </li>
            ))}
          </ul>
          <p>
            Pour des stratégies plus avancées, consultez notre article <Link href="/blog/maximiser-bonus-sans-depot" className="text-orange-600 hover:text-orange-700 underline">7 stratégies pour maximiser un bonus sans dépôt</Link>.
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Articles et guides connexes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: '/bonus-sans-depot', label: 'Tous les bonus sans dépôt' },
            { href: '/free-spins-sans-depot', label: 'Free spins gratuits' },
            { href: '/code-promo-casino', label: 'Codes promo casino' },
            { href: '/blog/wagering-explique', label: 'Le wagering expliqué' },
            { href: '/blog/comment-fonctionnent-bonus-sans-depot', label: 'Guide des bonus sans dépôt' },
            { href: '/blog/peut-on-vraiment-gagner-sans-deposer', label: 'Peut-on vraiment gagner ?' },
            { href: '/blog/meilleurs-bonus-sans-depot-2026', label: 'Classement 2026' },
            { href: '/blog/free-spins-vs-bonus-cash', label: 'Free spins vs bonus cash' },
            { href: '/blog/maximiser-bonus-sans-depot', label: 'Maximiser un bonus' },
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
