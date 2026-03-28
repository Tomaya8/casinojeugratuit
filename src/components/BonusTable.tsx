'use client';
import { useState, useMemo } from 'react';
import { Bonus } from '@/data/bonuses';
import { getScoreColor, getWageringColor, getCountryFlag } from '@/lib/utils';
import Link from 'next/link';
import CouponReveal from './CouponReveal';

type SortKey = 'score' | 'wagering' | 'estimatedValue' | 'maxWin' | 'freeSpins';
type FilterType = 'all' | 'free-spins' | 'cash' | 'no-wagering' | 'exclusive';

export default function BonusTable({ bonuses, title }: { bonuses: Bonus[]; title?: string }) {
  const [sortBy, setSortBy] = useState<SortKey>('score');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [filter, setFilter] = useState<FilterType>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    let list = [...bonuses];

    if (filter === 'free-spins') list = list.filter(b => b.type === 'free-spins');
    else if (filter === 'cash') list = list.filter(b => b.type === 'cash');
    else if (filter === 'no-wagering') list = list.filter(b => b.noWagering);
    else if (filter === 'exclusive') list = list.filter(b => b.exclusive);

    if (countryFilter !== 'all') {
      list = list.filter(b => b.countries.includes(countryFilter));
    }

    list.sort((a, b) => {
      const aVal = a[sortBy] ?? 0;
      const bVal = b[sortBy] ?? 0;
      return sortDir === 'desc' ? Number(bVal) - Number(aVal) : Number(aVal) - Number(bVal);
    });

    return list;
  }, [bonuses, filter, countryFilter, sortBy, sortDir]);

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortDir(d => d === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(key);
      setSortDir('desc');
    }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortBy !== col) return <span className="text-orange-200 ml-1">↕</span>;
    return <span className="text-orange-500 ml-1">{sortDir === 'desc' ? '↓' : '↑'}</span>;
  };

  return (
    <div>
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>}

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { key: 'all' as FilterType, label: 'Tous' },
          { key: 'free-spins' as FilterType, label: 'Free Spins' },
          { key: 'cash' as FilterType, label: 'Bonus Cash' },
          { key: 'no-wagering' as FilterType, label: 'Sans wagering' },
          { key: 'exclusive' as FilterType, label: 'Exclusifs' },
        ].map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
              filter === f.key
                ? 'bg-orange-100 border-orange-300 text-orange-700 font-semibold'
                : 'bg-white border-orange-100 text-gray-500 hover:text-gray-900 hover:border-orange-200'
            }`}
          >
            {f.label}
          </button>
        ))}

        <select
          value={countryFilter}
          onChange={e => setCountryFilter(e.target.value)}
          className="px-3 py-1.5 text-sm rounded-lg border bg-white border-orange-100 text-gray-600 ml-auto"
        >
          <option value="all">Tous les pays</option>
          <option value="FR">France</option>
          <option value="BE">Belgique</option>
          <option value="CH">Suisse</option>
          <option value="CA-QC">Québec</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-orange-100 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-orange-50/50 text-gray-500">
              <th className="text-left px-4 py-3 font-medium">Casino / Offre</th>
              <th className="px-3 py-3 font-medium cursor-pointer hover:text-gray-900" onClick={() => handleSort('score')} onKeyDown={e => e.key === 'Enter' && handleSort('score')} tabIndex={0} role="button" aria-label="Trier par score">
                Score <SortIcon col="score" />
              </th>
              <th className="px-3 py-3 font-medium cursor-pointer hover:text-gray-900" onClick={() => handleSort('wagering')} onKeyDown={e => e.key === 'Enter' && handleSort('wagering')} tabIndex={0} role="button" aria-label="Trier par wagering">
                Wagering <SortIcon col="wagering" />
              </th>
              <th className="px-3 py-3 font-medium cursor-pointer hover:text-gray-900" onClick={() => handleSort('estimatedValue')} onKeyDown={e => e.key === 'Enter' && handleSort('estimatedValue')} tabIndex={0} role="button" aria-label="Trier par valeur réelle">
                Valeur réelle <SortIcon col="estimatedValue" />
              </th>
              <th className="px-3 py-3 font-medium cursor-pointer hover:text-gray-900" onClick={() => handleSort('maxWin')} onKeyDown={e => e.key === 'Enter' && handleSort('maxWin')} tabIndex={0} role="button" aria-label="Trier par gain maximum">
                Gain max <SortIcon col="maxWin" />
              </th>
              <th className="px-3 py-3 font-medium">Pays</th>
              <th className="px-3 py-3 font-medium">Code</th>
              <th className="px-3 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-50">
            {filtered.map(bonus => (
              <tr key={bonus.id} className="hover:bg-orange-50/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-200">
                      <span className="font-bold text-orange-600 text-sm">{bonus.casinoName.charAt(0)}</span>
                    </div>
                    <div>
                      <Link href={`/bonus-sans-depot/${bonus.slug}`} className="font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                        {bonus.casinoName}
                      </Link>
                      <p className="text-xs text-gray-400">{bonus.amount}</p>
                    </div>
                    {bonus.exclusive && <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded font-medium">Excl.</span>}
                    {bonus.noWagering && <span className="text-xs px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded font-medium">0x</span>}
                  </div>
                </td>
                <td className="px-3 py-3 text-center">
                  <span className={`font-bold ${getScoreColor(bonus.score)}`}>{bonus.score}</span>
                </td>
                <td className="px-3 py-3 text-center">
                  <span className={`font-semibold ${getWageringColor(bonus.wagering)}`}>
                    {bonus.wagering === 0 ? 'Aucun' : `x${bonus.wagering}`}
                  </span>
                </td>
                <td className="px-3 py-3 text-center">
                  <span className="text-emerald-600 font-semibold">{bonus.estimatedValue.toFixed(2)}€</span>
                </td>
                <td className="px-3 py-3 text-center text-gray-900">
                  {bonus.maxWin ? `${bonus.maxWin}€` : '—'}
                </td>
                <td className="px-3 py-3 text-center">
                  {bonus.countries.slice(0, 3).map(c => (
                    <span key={c} className="text-sm mr-0.5">{getCountryFlag(c)}</span>
                  ))}
                  {bonus.countries.length > 3 && <span className="text-xs text-gray-400">+{bonus.countries.length - 3}</span>}
                </td>
                <td className="px-3 py-3">
                  {bonus.promoCode ? (
                    <CouponReveal code={bonus.promoCode} />
                  ) : (
                    <span className="text-xs text-gray-400">Auto</span>
                  )}
                </td>
                <td className="px-3 py-3">
                  <a
                    href={bonus.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xs rounded-lg hover:from-orange-600 hover:to-red-600 transition-all whitespace-nowrap shadow-sm"
                  >
                    Réclamer
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-gray-400">
          Aucun bonus ne correspond à vos filtres.
        </div>
      )}
    </div>
  );
}
