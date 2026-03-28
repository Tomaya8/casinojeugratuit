import type { Metadata } from 'next';
import Link from 'next/link';

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

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#faf7f2] text-gray-900"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#faf7f2] text-gray-900"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#faf7f2] text-gray-900 resize-vertical"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
              >
                Envoyer le message
              </button>
            </form>
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
              <strong className="text-gray-800">Jeu responsable :</strong> Si vous avez un problème avec le jeu, contactez Joueurs Info Service au 09 74 75 13 13 ou visitez joueurs-info-service.fr.
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
