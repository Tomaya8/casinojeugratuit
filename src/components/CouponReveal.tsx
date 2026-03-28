'use client';
import { useState } from 'react';

export default function CouponReveal({ code }: { code: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!revealed) {
    return (
      <button
        onClick={handleReveal}
        className="relative group/coupon px-4 py-2 bg-orange-50 border border-dashed border-orange-300 rounded-lg text-sm font-mono overflow-hidden hover:border-orange-500 transition-colors"
      >
        <span className="text-gray-400 tracking-wider">{'•'.repeat(code.length)}</span>
        <span className="absolute inset-0 flex items-center justify-center bg-orange-50/90 text-orange-600 text-xs font-sans font-semibold opacity-0 group-hover/coupon:opacity-100 transition-opacity">
          Révéler le code
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-orange-100 border border-orange-300 rounded-lg text-sm font-mono text-orange-700 font-bold hover:bg-orange-200 transition-colors"
    >
      {copied ? 'Copié !' : code}
    </button>
  );
}
