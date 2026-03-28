import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — CasinoJeuGratuit',
  description: 'Contactez l\'équipe CasinoJeuGratuit pour toute question sur les bonus casino sans dépôt, partenariats ou suggestions.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white border border-orange-100 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Envoyez-nous un message</h2>
            <p className="text-sm text-gray-500">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-orange-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">CasinoJeuGratuit</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              CasinoJeuGratuit est le comparateur francophone dédié aux bonus casino sans dépôt. Nous analysons et comparons les meilleures offres gratuites pour vous aider à jouer en toute transparence.
            </p>
          </div>

          <div className="bg-white border border-orange-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Raisons de nous contacter</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Questions sur un bonus ou une offre</li>
              <li>Propositions de partenariat</li>
              <li>Signaler une erreur ou une offre expirée</li>
              <li>Suggestions d&apos;amélioration</li>
              <li>Demande de suppression de données (RGPD)</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Jeu responsable :</strong> Si vous avez un problème avec le jeu, contactez Joueurs Info Service au <a href="tel:0974751313" className="text-orange-600 underline">09 74 75 13 13</a> ou visitez <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">joueurs-info-service.fr</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-orange-100">
        <Link href="/" className="text-orange-600 hover:text-orange-700">&larr; Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
