'use client';
import { useState } from 'react';

export default function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <p className="text-emerald-700 font-semibold">Merci ! Vous recevrez nos meilleures offres très bientôt.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Ne manquez aucune offre</h3>
      <p className="text-sm text-gray-500 mb-4">
        Bonus exclusifs et free spins gratuits, directement dans votre boîte mail.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="inline-email" className="sr-only">Adresse email</label>
          <input
            id="inline-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-[#faf7f2] border border-orange-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all whitespace-nowrap shadow-md shadow-orange-200"
        >
          S&apos;inscrire
        </button>
      </form>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      <p className="text-xs text-gray-400 mt-3">
        En vous inscrivant, vous acceptez notre <a href="/politique-confidentialite" className="underline hover:text-orange-600">politique de confidentialité</a>.
      </p>
    </div>
  );
}
