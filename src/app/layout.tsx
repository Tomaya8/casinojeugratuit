import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterPopup from '@/components/NewsletterPopup';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://casinojeugratuit.com'),
  title: {
    default: 'CasinoJeuGratuit — Bonus Casino Sans Dépôt | Free Spins Gratuits 2026',
    template: '%s | CasinoJeuGratuit',
  },
  description: 'Comparez les meilleurs bonus casino sans dépôt : free spins gratuits, codes promo, offres exclusives. Analyses transparentes et score de valeur réelle.',
  keywords: ['bonus casino sans dépôt', 'free spins sans dépôt', 'casino gratuit', 'bonus sans wagering', 'code promo casino'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'CasinoJeuGratuit',
  },
  icons: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#faf7f2] text-gray-800 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
