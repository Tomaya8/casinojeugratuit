import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#faf7f2] px-4 text-center">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page introuvable
      </h2>
      <p className="mt-3 max-w-md text-gray-600">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
