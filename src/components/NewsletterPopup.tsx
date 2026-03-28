'use client';
import { useState, useEffect } from 'react';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('newsletter_dismissed');
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem('newsletter_dismissed', '1');
    setTimeout(() => setShow(false), 3000);
  };

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('newsletter_dismissed', '1');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white border border-orange-200 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
        <button onClick={handleClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 text-xl" aria-label="Fermer">×</button>
        {!submitted ? (
          <>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl mb-4">🎰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Recevez les meilleurs bonus avant tout le monde</h3>
            <p className="text-sm text-gray-500 mb-5">Offres exclusives, nouveaux free spins, et codes promo — directement dans votre boîte mail.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required className="w-full px-4 py-3 bg-[#faf7f2] border border-orange-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-md shadow-orange-200">Recevoir les offres exclusives</button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">Désinscription en un clic. Vos données ne sont jamais partagées.</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bienvenue !</h3>
            <p className="text-gray-500">Vous recevrez nos meilleures offres très bientôt.</p>
          </div>
        )}
      </div>
    </div>
  );
}
