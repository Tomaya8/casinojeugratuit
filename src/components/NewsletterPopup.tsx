'use client';
import { useState, useEffect } from 'react';
import { subscribeNewsletter } from '@/lib/firebase';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('newsletter_dismissed');
      if (dismissed) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribeNewsletter(email, 'popup');
    } catch {
      // Still close popup
    }
    setSubmitted(true);
    setLoading(false);
    try { localStorage.setItem('newsletter_dismissed', '1'); } catch { /* no-op */ }
    setTimeout(() => setShow(false), 3000);
  };

  const handleClose = () => {
    setShow(false);
    try { localStorage.setItem('newsletter_dismissed', '1'); } catch { /* no-op */ }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
      <div className="relative bg-white border border-orange-200 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
        <button onClick={handleClose} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-xl rounded-full hover:bg-gray-100" aria-label="Fermer">×</button>
        {!submitted ? (
          <>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl mb-4" aria-hidden="true">🎰</div>
            <h2 id="newsletter-title" className="text-xl font-bold text-gray-900 mb-2">Recevez les meilleurs bonus avant tout le monde</h2>
            <p className="text-sm text-gray-500 mb-5">Offres exclusives, nouveaux free spins, et codes promo — directement dans votre boîte mail.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="popup-email" className="sr-only">Adresse email</label>
                <input id="popup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required autoComplete="email" disabled={loading} className="w-full px-4 py-3 bg-[#faf7f2] border border-orange-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 disabled:opacity-50" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-md shadow-orange-200 disabled:opacity-50">
                {loading ? 'Envoi...' : 'Recevoir les offres exclusives'}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              En vous inscrivant, vous acceptez notre <a href="/politique-confidentialite" className="underline hover:text-orange-600">politique de confidentialité</a>. Désinscription en un clic.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3" aria-hidden="true">✅</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Bienvenue !</h2>
            <p className="text-gray-500">Vous recevrez nos meilleures offres très bientôt.</p>
          </div>
        )}
      </div>
    </div>
  );
}
