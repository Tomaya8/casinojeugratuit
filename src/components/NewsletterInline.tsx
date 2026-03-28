'use client';
import { useState } from 'react';

export default function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          className="flex-1 px-4 py-3 bg-[#faf7f2] border border-orange-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all whitespace-nowrap shadow-md shadow-orange-200"
        >
          S&apos;inscrire
        </button>
      </form>
    </div>
  );
}
