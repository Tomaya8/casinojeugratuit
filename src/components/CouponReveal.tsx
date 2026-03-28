'use client';
import { useState } from 'react';

export default function CouponReveal({ code }: { code: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
    }
  };

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="px-4 py-2 bg-orange-50 border border-dashed border-orange-300 rounded-lg text-sm font-semibold text-orange-600 hover:bg-orange-100 hover:border-orange-400 transition-colors"
        aria-label={`Révéler le code promo`}
      >
        Voir le code
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-orange-100 border border-orange-300 rounded-lg text-sm font-mono text-orange-700 font-bold hover:bg-orange-200 transition-colors"
      aria-label={copied ? 'Code copié' : `Copier le code ${code}`}
    >
      {copied ? 'Copié !' : code}
    </button>
  );
}
