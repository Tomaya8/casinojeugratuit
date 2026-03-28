'use client';
import Link from 'next/link';
import { Bonus } from '@/data/bonuses';
import { getScoreColor, getScoreBg, getWageringColor, getCountryFlag } from '@/lib/utils';
import CouponReveal from './CouponReveal';

export default function BonusCard({ bonus }: { bonus: Bonus }) {
  return (
    <div className="group bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50">
      {(bonus.exclusive || bonus.isNew || bonus.noWagering) && (
        <div className="flex gap-2 px-4 pt-3">
          {bonus.exclusive && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 rounded-full">
              Exclusif
            </span>
          )}
          {bonus.isNew && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-sky-100 text-sky-700 border border-sky-200 rounded-full">
              Nouveau
            </span>
          )}
          {bonus.noWagering && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full">
              Sans wagering
            </span>
          )}
        </div>
      )}

      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-200">
            <span className="text-lg font-bold text-orange-600">{bonus.casinoName.charAt(0)}</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{bonus.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{bonus.casinoName}</p>
          </div>

          <div className={`flex-shrink-0 w-14 h-14 rounded-xl border flex flex-col items-center justify-center ${getScoreBg(bonus.score)}`}>
            <span className={`text-lg font-bold ${getScoreColor(bonus.score)}`}>{bonus.score}</span>
            <span className="text-[10px] text-gray-400">/100</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4 p-3 bg-[#faf7f2] rounded-xl">
          <div className="text-center">
            <p className="text-xs text-gray-400">Wagering</p>
            <p className={`font-bold text-sm ${getWageringColor(bonus.wagering)}`}>
              {bonus.wagering === 0 ? 'Aucun' : `x${bonus.wagering}`}
            </p>
          </div>
          <div className="text-center border-x border-orange-100">
            <p className="text-xs text-gray-400">Gain max</p>
            <p className="font-bold text-sm text-gray-900">{bonus.maxWin ? `${bonus.maxWin}€` : 'N/A'}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Valeur réelle</p>
            <p className="font-bold text-sm text-emerald-600">{bonus.estimatedValue.toFixed(2)}€</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-3">
          {bonus.countries.map(c => (
            <span key={c} className="text-sm" title={c}>{getCountryFlag(c)}</span>
          ))}
          <span className="text-xs text-gray-400 ml-1">| {bonus.validity}</span>
        </div>

        <p className="text-sm text-gray-500 mt-3 line-clamp-2">{bonus.description}</p>

        <div className="flex items-center gap-3 mt-4">
          {bonus.promoCode ? (
            <CouponReveal code={bonus.promoCode} />
          ) : (
            <span className="text-xs text-gray-400 bg-orange-50 px-3 py-2 rounded-lg border border-orange-100">Automatique</span>
          )}

          <Link
            href={`/bonus-sans-depot/${bonus.slug}`}
            className="text-xs text-orange-600 hover:text-orange-700 transition-colors ml-auto font-medium"
          >
            Voir détails →
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-orange-100">
          <span className="text-xs text-gray-400">{bonus.usersClicked.toLocaleString('fr-FR')} utilisateurs</span>
          <a
            href={bonus.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm rounded-xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-orange-200"
          >
            Réclamer le bonus
          </a>
        </div>
      </div>
    </div>
  );
}
