export function getScoreColor(score: number): string {
  if (score >= 90) return 'text-emerald-600';
  if (score >= 75) return 'text-amber-600';
  if (score >= 60) return 'text-orange-600';
  return 'text-red-600';
}

export function getScoreBg(score: number): string {
  if (score >= 90) return 'bg-emerald-50 border-emerald-200';
  if (score >= 75) return 'bg-amber-50 border-amber-200';
  if (score >= 60) return 'bg-orange-50 border-orange-200';
  return 'bg-red-50 border-red-200';
}

export function getWageringLabel(wagering: number): string {
  if (wagering === 0) return 'Sans wagering';
  if (wagering <= 15) return 'Excellent';
  if (wagering <= 25) return 'Bon';
  if (wagering <= 35) return 'Correct';
  if (wagering <= 50) return 'Difficile';
  return 'Très difficile';
}

export function getWageringColor(wagering: number): string {
  if (wagering === 0) return 'text-emerald-600';
  if (wagering <= 15) return 'text-emerald-600';
  if (wagering <= 25) return 'text-teal-600';
  if (wagering <= 35) return 'text-amber-600';
  if (wagering <= 50) return 'text-orange-600';
  return 'text-red-600';
}

export function getCountryName(code: string): string {
  const map: Record<string, string> = {
    'FR': 'France',
    'BE': 'Belgique',
    'CH': 'Suisse',
    'CA-QC': 'Québec',
    'SN': 'Sénégal',
    'CI': 'Côte d\'Ivoire',
    'CM': 'Cameroun',
  };
  return map[code] || code;
}

export function getCountryFlag(code: string): string {
  const map: Record<string, string> = {
    'FR': '🇫🇷',
    'BE': '🇧🇪',
    'CH': '🇨🇭',
    'CA-QC': '🇨🇦',
    'SN': '🇸🇳',
    'CI': '🇨🇮',
    'CM': '🇨🇲',
  };
  return map[code] || '🌍';
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
