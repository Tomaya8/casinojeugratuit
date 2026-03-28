import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — CasinoJeuGratuit',
  description: 'Politique de confidentialité de CasinoJeuGratuit. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Politique de Confidentialité</h1>

      <div className="bg-white border border-orange-100 rounded-xl p-6 md:p-8 space-y-8 text-gray-500">
        <p className="text-sm">Dernière mise à jour : mars 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
          <p>
            CasinoJeuGratuit (&laquo; nous &raquo;, &laquo; notre &raquo;) s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit les types de données personnelles que nous collectons, comment nous les utilisons et les droits dont vous disposez concernant vos informations.
          </p>
          <p>
            En utilisant notre site, vous acceptez les pratiques décrites dans la présente politique. Si vous n&apos;êtes pas d&apos;accord, veuillez ne pas utiliser notre site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">2. Données collectées</h2>
          <p>Nous pouvons collecter les données suivantes :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900">Données fournies volontairement :</strong> nom, adresse e-mail et message lorsque vous utilisez notre formulaire de contact ou vous inscrivez à notre newsletter.</li>
            <li><strong className="text-gray-900">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite, source de trafic et autres données analytiques collectées automatiquement.</li>
            <li><strong className="text-gray-900">Données de cookies :</strong> identifiants de session, préférences utilisateur et données de suivi publicitaire (voir section Cookies).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">3. Utilisation des données</h2>
          <p>Nous utilisons vos données pour :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Envoyer notre newsletter si vous y êtes inscrit(e)</li>
            <li>Améliorer notre site et son contenu</li>
            <li>Analyser le trafic et le comportement des utilisateurs</li>
            <li>Assurer le fonctionnement technique du site</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
          <p>Notre site utilise des cookies pour :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900">Cookies essentiels :</strong> nécessaires au fonctionnement du site (session, préférences).</li>
            <li><strong className="text-gray-900">Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site (Google Analytics ou équivalent).</li>
            <li><strong className="text-gray-900">Cookies d&apos;affiliation :</strong> pour suivre les clics vers les sites de casinos partenaires et attribuer correctement les commissions d&apos;affiliation.</li>
          </ul>
          <p>
            Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter votre expérience sur le site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">5. Newsletter et communications par e-mail</h2>
          <p>
            Si vous vous inscrivez à notre newsletter, votre adresse e-mail sera utilisée exclusivement pour vous envoyer des informations sur les bonus casino sans dépôt, les nouvelles offres et nos articles de blog.
          </p>
          <p>
            Vous pouvez vous désinscrire à tout moment en cliquant sur le lien de désinscription présent dans chaque e-mail ou en nous contactant directement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">6. Liens d&apos;affiliation</h2>
          <p>
            Notre site contient des liens d&apos;affiliation vers des casinos en ligne. Lorsque vous cliquez sur ces liens, des cookies tiers peuvent être déposés par les sites partenaires. Ces cookies sont soumis aux politiques de confidentialité respectives de ces sites. Nous n&apos;avons aucun contrôle sur les données collectées par ces tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">7. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900">Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles.</li>
            <li><strong className="text-gray-900">Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
            <li><strong className="text-gray-900">Droit à l&apos;effacement :</strong> demander la suppression de vos données personnelles.</li>
            <li><strong className="text-gray-900">Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible.</li>
            <li><strong className="text-gray-900">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données à des fins de marketing.</li>
            <li><strong className="text-gray-900">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous via notre <Link href="/contact" className="text-orange-600 hover:text-orange-700">page de contact</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">8. Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Cependant, aucune transmission de données sur Internet n&apos;est totalement sécurisée.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">9. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-8 border-t border-orange-100">
        <Link href="/" className="text-orange-600 hover:text-orange-700">&larr; Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
