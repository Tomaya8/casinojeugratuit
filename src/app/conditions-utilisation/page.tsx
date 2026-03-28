import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation — CasinoJeuGratuit',
  description: 'Conditions d\'utilisation de CasinoJeuGratuit. Règles d\'utilisation, jeu responsable, restriction d\'âge et avertissements légaux.',
};

export default function ConditionsUtilisationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Conditions d&apos;Utilisation</h1>

      <div className="bg-white border border-orange-100 rounded-xl p-6 md:p-8 space-y-8 text-gray-500">
        <p className="text-sm">Dernière mise à jour : mars 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">1. Acceptation des conditions</h2>
          <p>
            En accédant et en utilisant le site CasinoJeuGratuit.com (&laquo; le Site &raquo;), vous acceptez d&apos;être lié(e) par les présentes conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">2. Restriction d&apos;âge</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-gray-800 font-semibold">
              Ce site est strictement réservé aux personnes âgées de 18 ans et plus.
            </p>
          </div>
          <p>
            Les jeux d&apos;argent et de hasard sont interdits aux mineurs. En utilisant ce site, vous confirmez avoir au moins 18 ans (ou l&apos;âge légal minimum dans votre juridiction). Nous nous réservons le droit de demander une vérification d&apos;âge à tout moment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">3. Nature du site — Affiliation</h2>
          <p>
            CasinoJeuGratuit est un <strong className="text-gray-900">site comparateur et affilié</strong>. Nous présentons et comparons des offres de bonus casino sans dépôt proposées par des casinos en ligne tiers.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Nous ne sommes <strong className="text-gray-900">pas un casino</strong> et ne proposons aucun jeu d&apos;argent directement.</li>
            <li>Nos liens vers les casinos sont des <strong className="text-gray-900">liens d&apos;affiliation</strong> : nous percevons une commission si vous vous inscrivez via ces liens.</li>
            <li>Cette relation d&apos;affiliation n&apos;affecte pas notre méthodologie d&apos;évaluation ni nos scores attribués aux offres.</li>
            <li>Les offres présentées sont vérifiées mais peuvent être modifiées par les casinos sans préavis.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">4. Aucune garantie de gains</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-gray-800 font-semibold">
              Les jeux de casino sont des jeux de hasard. Il n&apos;existe aucune garantie de gain.
            </p>
          </div>
          <p>
            Les informations fournies sur ce site, y compris les analyses de bonus, les scores et les estimations de valeur réelle, sont données <strong className="text-gray-900">à titre informatif uniquement</strong>. Elles ne constituent en aucun cas :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Un conseil financier ou d&apos;investissement</li>
            <li>Une incitation à jouer</li>
            <li>Une promesse ou garantie de gains</li>
          </ul>
          <p>
            Les résultats aux jeux de casino dépendent entièrement du hasard. Ne jouez jamais avec de l&apos;argent que vous ne pouvez pas vous permettre de perdre.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">5. Jeu responsable</h2>
          <p>
            CasinoJeuGratuit promeut activement le jeu responsable. Nous vous encourageons à :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fixer des limites de temps et de budget avant de jouer</li>
            <li>Ne jamais emprunter de l&apos;argent pour jouer</li>
            <li>Ne pas considérer le jeu comme un moyen de gagner de l&apos;argent</li>
            <li>Faire des pauses régulières</li>
            <li>Demander de l&apos;aide si vous sentez que le jeu devient un problème</li>
          </ul>
          <p>
            Si vous pensez avoir un problème avec le jeu, contactez :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900">Joueurs Info Service</strong> : 09 74 75 13 13 (France)</li>
            <li><strong className="text-gray-900">SOS Joueurs</strong> : 09 69 39 55 12</li>
            <li>Site web : joueurs-info-service.fr</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">6. Exactitude des informations</h2>
          <p>
            Nous nous efforçons de maintenir les informations sur ce site exactes et à jour. Cependant, les offres de bonus, les conditions de wagering et les termes des casinos peuvent changer sans préavis. Nous vous recommandons de toujours vérifier les conditions directement sur le site du casino concerné avant de vous inscrire.
          </p>
          <p>
            CasinoJeuGratuit ne saurait être tenu responsable de toute inexactitude ou de tout changement apporté par les casinos tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">7. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu présent sur ce site (textes, analyses, graphiques, logos, design) est la propriété de CasinoJeuGratuit et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, modification ou distribution sans autorisation préalable est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">8. Limitation de responsabilité</h2>
          <p>
            CasinoJeuGratuit ne peut être tenu responsable des pertes financières résultant de l&apos;utilisation des casinos en ligne référencés sur ce site. Chaque utilisateur est entièrement responsable de ses décisions de jeu et des conséquences financières qui en découlent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">9. Modifications des conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions d&apos;utilisation à tout moment. Les modifications prennent effet dès leur publication sur cette page. En continuant à utiliser le site après une modification, vous acceptez les conditions mises à jour.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">10. Droit applicable</h2>
          <p>
            Les présentes conditions d&apos;utilisation sont régies par le droit français. Tout litige relatif à l&apos;utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-8 border-t border-orange-100">
        <Link href="/" className="text-orange-600 hover:text-orange-700">&larr; Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
