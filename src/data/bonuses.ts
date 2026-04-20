export interface Bonus {
  id: string;
  slug: string;
  casinoName: string;
  casinoLogo: string;
  title: string;
  type: 'free-spins' | 'cash' | 'mixed';
  amount: string;
  freeSpins: number | null;
  cashBonus: number | null;
  currency: string;
  wagering: number;
  noWagering: boolean;
  maxBet: number | null;
  maxWin: number | null;
  eligibleGames: string[];
  validity: string;
  countries: string[];
  promoCode: string | null;
  exclusive: boolean;
  isNew: boolean;
  rating: number;
  score: number;
  estimatedValue: number;
  affiliateLink: string;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  howToClaim: string[];
  termsHighlights: string[];
  usersClicked: number;
  dateAdded: string;
  lastUpdated: string;
}

export const bonuses: Bonus[] = [
  {
    id: '1',
    slug: 'casinostars-bonus-bienvenue-2026',
    casinoName: 'CasinoStars',
    casinoLogo: '/images/casinos/casinostars.svg',
    title: '500€ + 200 tours gratuits de bienvenue',
    type: 'mixed',
    amount: '100% jusqu\'à 500€ + 200 FS',
    freeSpins: 200,
    cashBonus: 500,
    currency: 'EUR',
    wagering: 40,
    noWagering: false,
    maxBet: 5,
    maxWin: 5000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.7,
    score: 88,
    estimatedValue: 45,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF3-YnVqGHN08XWNd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt : 100% jusqu\'à 500€ plus 200 tours gratuits chez CasinoStars (dépôt requis).',
    longDescription: 'CasinoStars propose un bonus de bienvenue sur dépôt généreux aux nouveaux joueurs. Ce n\'est PAS une offre sans dépôt : un premier dépôt est requis pour activer le bonus. Vous recevez 100% de votre dépôt jusqu\'à 500€ en crédit bonus, auxquels s\'ajoutent 200 tours gratuits sur des machines à sous sélectionnées. Les conditions de mise sont de x40 sur le montant du bonus, avec une mise maximale de 5€ par tour pendant la libération du bonus. Les jeux de table ne contribuent qu\'à 10% au déblocage. Offre disponible dans plusieurs pays francophones.',
    pros: ['Bonus généreux (jusqu\'à 500€)', '200 tours gratuits inclus', 'Disponible au Québec', '30 jours pour libérer le bonus'],
    cons: ['Dépôt obligatoire pour activer', 'Wagering x40 sur le bonus', 'Licence Curaçao'],
    howToClaim: ['Créez un compte sur CasinoStars', 'Effectuez votre premier dépôt (minimum 20€)', 'Activez le bonus de bienvenue dans l\'espace promotions', 'Complétez les conditions de mise x40 en 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x40 sur le bonus', 'Machines à sous 100%, jeux de table 10%', 'Validité : 30 jours après activation'],
    usersClicked: 1820,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
  {
    id: '2',
    slug: 'casino-orca-bonus-bienvenue-2026',
    casinoName: 'Casino Orca',
    casinoLogo: '/images/casinos/casino-orca.svg',
    title: '500€ + 100 tours gratuits de bienvenue',
    type: 'mixed',
    amount: '100% jusqu\'à 500€ + 100 FS',
    freeSpins: 100,
    cashBonus: 500,
    currency: 'EUR',
    wagering: 35,
    noWagering: false,
    maxBet: 5,
    maxWin: 5000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.6,
    score: 86,
    estimatedValue: 50,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF3_eD2ODgvck4mNd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt : 100% jusqu\'à 500€ plus 100 tours gratuits chez Casino Orca (dépôt requis).',
    longDescription: 'Casino Orca accueille les nouveaux joueurs avec un bonus de bienvenue sur premier dépôt. Attention, ce bonus n\'est PAS sans dépôt : un dépôt initial est nécessaire pour déclencher l\'offre. Vous obtenez un match à 100% jusqu\'à 500€ ainsi que 100 tours gratuits à utiliser sur les machines à sous sélectionnées. Le wagering est fixé à x35, un niveau correct pour ce type d\'offre. La mise maximale autorisée pendant le déblocage est de 5€ par tour, et les jeux de table contribuent à hauteur de 10% seulement. L\'offre est valable 30 jours.',
    pros: ['Wagering x35 (en dessous de la moyenne)', '100 tours gratuits en plus du cashback', 'Accessible en France, Belgique, Suisse, Québec', 'Support francophone'],
    cons: ['Dépôt requis pour activer le bonus', 'Licence offshore (Curaçao)', 'Contribution réduite des jeux de table'],
    howToClaim: ['Inscrivez-vous sur Casino Orca', 'Réalisez votre premier dépôt (min. 20€)', 'Sélectionnez le bonus de bienvenue', 'Remplissez les conditions de mise x35 sous 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x35 sur le bonus', 'Mise max : 5€/tour pendant le wagering', 'Expiration : 30 jours'],
    usersClicked: 1210,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
  {
    id: '3',
    slug: 'art-casino-bonus-bienvenue-2026',
    casinoName: 'Art Casino',
    casinoLogo: '/images/casinos/art-casino.svg',
    title: '1 500€ + 150 tours gratuits de bienvenue',
    type: 'mixed',
    amount: '100% jusqu\'à 1 500€ + 150 FS',
    freeSpins: 150,
    cashBonus: 1500,
    currency: 'EUR',
    wagering: 40,
    noWagering: false,
    maxBet: 5,
    maxWin: 15000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.5,
    score: 84,
    estimatedValue: 80,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF38eR0indqtVW2Nd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt : 100% jusqu\'à 1 500€ plus 150 tours gratuits chez Art Casino (dépôt requis).',
    longDescription: 'Art Casino propose l\'un des bonus de bienvenue les plus élevés du marché francophone : un match à 100% jusqu\'à 1 500€, auquel s\'ajoutent 150 tours gratuits. Il est important de préciser qu\'il s\'agit d\'un bonus sur dépôt et NON d\'une offre sans dépôt : vous devez effectuer un premier versement pour en bénéficier. Le wagering est de x40 sur le montant du bonus, la mise max est plafonnée à 5€ par tour pendant la libération, et les jeux de table ne comptent qu\'à 10%. Le bonus est valable 30 jours après activation.',
    pros: ['Plafond très élevé (1 500€)', '150 tours gratuits inclus', 'Adapté aux dépôts conséquents', 'Disponible dans 4 pays francophones'],
    cons: ['Premier dépôt obligatoire', 'Wagering x40 (au-dessus de la moyenne)', 'Licence Curaçao'],
    howToClaim: ['Créez votre compte Art Casino', 'Effectuez un premier dépôt (min. 20€)', 'Activez le bonus de bienvenue dans l\'onglet promotions', 'Complétez le wagering x40 avant 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x40 sur le bonus', 'Jeux de table : contribution 10%', 'Durée de validité : 30 jours'],
    usersClicked: 2140,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
  {
    id: '4',
    slug: 'betroom24-bonus-bienvenue-2026',
    casinoName: 'Betroom24',
    casinoLogo: '/images/casinos/betroom24.svg',
    title: '500€ + 100 tours gratuits de bienvenue',
    type: 'mixed',
    amount: '100% jusqu\'à 500€ + 100 FS',
    freeSpins: 100,
    cashBonus: 500,
    currency: 'EUR',
    wagering: 35,
    noWagering: false,
    maxBet: 5,
    maxWin: 5000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.4,
    score: 82,
    estimatedValue: 45,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF39ZSuvhn4yj1mNd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt : 100% jusqu\'à 500€ plus 100 tours gratuits chez Betroom24 (dépôt requis).',
    longDescription: 'Betroom24 offre aux nouveaux inscrits un bonus de bienvenue sur premier dépôt avec match à 100% jusqu\'à 500€ et 100 tours gratuits sur machines à sous sélectionnées. Il s\'agit bien d\'un bonus SUR DÉPÔT, pas d\'une offre sans dépôt : un premier versement est obligatoire pour déclencher l\'offre. Les conditions de mise sont fixées à x35 sur le montant du bonus, dans la moyenne basse du marché. La mise maximale pendant la libération est de 5€ par tour et les jeux de table n\'y contribuent qu\'à 10%. Validité : 30 jours.',
    pros: ['Wagering raisonnable (x35)', '100 tours gratuits complémentaires', 'Accessible au Québec', 'Interface francophone'],
    cons: ['Dépôt obligatoire pour activer', 'Licence Curaçao', 'Plafond de gains limité à 5 000€'],
    howToClaim: ['Inscrivez-vous sur Betroom24', 'Effectuez votre premier dépôt (min. 20€)', 'Activez le bonus de bienvenue', 'Complétez le wagering x35 en 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x35 sur le bonus', 'Mise max autorisée : 5€/tour', 'Expiration : 30 jours'],
    usersClicked: 960,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
  {
    id: '5',
    slug: 'thor-casino-bonus-bienvenue-2026',
    casinoName: 'Thor Casino',
    casinoLogo: '/images/casinos/thor-casino.svg',
    title: '1 000€ + 100 tours gratuits (Bonus d\'Asgard)',
    type: 'mixed',
    amount: '100% jusqu\'à 1 000€ + 100 FS',
    freeSpins: 100,
    cashBonus: 1000,
    currency: 'EUR',
    wagering: 40,
    noWagering: false,
    maxBet: 5,
    maxWin: 10000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.6,
    score: 85,
    estimatedValue: 60,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF3_6PBA04iUMN2Nd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt (Bonus d\'Asgard) : 100% jusqu\'à 1 000€ plus 100 tours gratuits chez Thor Casino (dépôt requis).',
    longDescription: 'Thor Casino accueille les nouveaux joueurs avec son "Bonus d\'Asgard", un bonus de bienvenue sur premier dépôt. Ce n\'est pas une offre sans dépôt : vous devez réaliser un versement initial pour activer le match à 100% jusqu\'à 1 000€ et recevoir les 100 tours gratuits complémentaires. Les conditions de mise sont de x40 sur le montant du bonus, la mise max pendant le wagering est de 5€ par tour, et les jeux de table ne contribuent qu\'à 10%. Le bonus reste actif pendant 30 jours après activation.',
    pros: ['Plafond élevé (1 000€)', 'Thématique nordique soignée', '100 tours gratuits supplémentaires', 'Disponible au Québec'],
    cons: ['Dépôt requis pour déclencher l\'offre', 'Wagering x40', 'Licence Curaçao'],
    howToClaim: ['Créez votre compte Thor Casino', 'Effectuez votre premier dépôt (min. 20€)', 'Activez le Bonus d\'Asgard dans les promotions', 'Libérez le bonus avec un wagering x40 sur 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x40 sur le bonus', 'Mise max : 5€/tour pendant le wagering', 'Validité : 30 jours'],
    usersClicked: 1540,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
  {
    id: '6',
    slug: 'mond-casino-bonus-bienvenue-2026',
    casinoName: 'Mond Casino',
    casinoLogo: '/images/casinos/mond-casino.svg',
    title: '500€ + 200 tours gratuits (Bonus Lune)',
    type: 'mixed',
    amount: '100% jusqu\'à 500€ + 200 FS',
    freeSpins: 200,
    cashBonus: 500,
    currency: 'EUR',
    wagering: 35,
    noWagering: false,
    maxBet: 5,
    maxWin: 5000,
    eligibleGames: ['Machines à sous', 'Jeux de table (contribution 10%)'],
    validity: '30 jours',
    countries: ['FR', 'BE', 'CH', 'CA-QC'],
    promoCode: null,
    exclusive: false,
    isNew: true,
    rating: 4.5,
    score: 84,
    estimatedValue: 50,
    affiliateLink: 'https://record.mematoaffiliates.com/_sfCEU0EZF3-YkdHVp7xCcmNd7ZgqdRLk/1/',
    description: 'Bonus de bienvenue sur dépôt (Bonus Lune) : 100% jusqu\'à 500€ plus 200 tours gratuits chez Mond Casino (dépôt requis).',
    longDescription: 'Mond Casino propose son "Bonus Lune" aux nouveaux inscrits : un bonus de bienvenue sur premier dépôt de 100% jusqu\'à 500€, assorti de 200 tours gratuits sur les machines à sous sélectionnées. Il faut insister sur le fait qu\'il s\'agit d\'un bonus SUR DÉPÔT et non d\'une offre sans dépôt : un premier versement est nécessaire pour l\'activer. Les conditions de mise sont fixées à x35, la mise maximale est de 5€ par tour durant le déblocage, et les jeux de table ne comptent qu\'à 10%. Vous disposez de 30 jours pour compléter le wagering.',
    pros: ['200 tours gratuits (très généreux)', 'Wagering x35 (en dessous de la moyenne)', 'Accessible en 4 pays francophones', 'Thème lunaire original'],
    cons: ['Premier dépôt obligatoire', 'Licence Curaçao', 'Contribution 10% sur jeux de table'],
    howToClaim: ['Inscrivez-vous sur Mond Casino', 'Effectuez un premier dépôt (min. 20€)', 'Activez le Bonus Lune dans la section promotions', 'Complétez les conditions de mise x35 en 30 jours'],
    termsHighlights: ['Dépôt minimum : 20€', 'Wagering x35 sur le bonus', 'Machines à sous 100%, table 10%', 'Expiration : 30 jours'],
    usersClicked: 1380,
    dateAdded: '2026-04-01',
    lastUpdated: '2026-04-20',
  },
];

export function getBonusBySlug(slug: string): Bonus | undefined {
  return bonuses.find(b => b.slug === slug);
}

export function getTopBonuses(limit = 5): Bonus[] {
  return [...bonuses].sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getFreeSpinsBonuses(): Bonus[] {
  return bonuses.filter(b => b.type === 'free-spins');
}

export function getNoWageringBonuses(): Bonus[] {
  return bonuses.filter(b => b.noWagering);
}

export function getExclusiveBonuses(): Bonus[] {
  return bonuses.filter(b => b.exclusive);
}

export function getNewBonuses(): Bonus[] {
  return bonuses.filter(b => b.isNew);
}

export function getCashBonuses(): Bonus[] {
  return bonuses.filter(b => b.type === 'cash');
}

export function getBonusesByCountry(country: string): Bonus[] {
  return bonuses.filter(b => b.countries.includes(country));
}
