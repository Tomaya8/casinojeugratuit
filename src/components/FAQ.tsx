'use client';
import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const defaultFAQ: FAQItem[] = [
  { q: "Qu'est-ce qu'un bonus sans dépôt ?", a: "Un bonus sans dépôt est une offre promotionnelle qui vous permet de jouer dans un casino en ligne sans avoir à déposer votre propre argent. Il peut s'agir de free spins (tours gratuits) ou d'un bonus en argent crédité à l'inscription." },
  { q: "Peut-on vraiment gagner de l'argent avec un bonus sans dépôt ?", a: "Oui, c'est possible mais peu fréquent. Les gains sont soumis à des conditions de mise (wagering) qui réduisent la valeur réelle du bonus. En moyenne, la valeur réelle d'un bonus sans dépôt est de 30 à 50% du montant affiché." },
  { q: "Qu'est-ce que le wagering ?", a: "Le wagering (ou conditions de mise) est le nombre de fois que vous devez miser le montant du bonus avant de pouvoir retirer vos gains. Par exemple, un wagering x30 sur un bonus de 10€ signifie que vous devez miser 300€ au total avant de retirer." },
  { q: "Les bonus sans dépôt sont-ils gratuits ?", a: "Oui, ils sont gratuits au sens où vous n'avez pas besoin de déposer d'argent. Cependant, vous devez créer un compte et parfois vérifier votre identité. Attention : les gains issus du bonus sont soumis à des conditions." },
  { q: "Comment savoir si un bonus vaut le coup ?", a: "Regardez notre score qui prend en compte le wagering, le gain max, la validité et la valeur réelle estimée. Un bonus avec un faible wagering (x20 ou moins) et un gain max raisonnable est généralement un bon choix." },
  { q: "Les bonus sans dépôt sont-ils disponibles en France ?", a: "Oui, de nombreux casinos en ligne proposent des bonus sans dépôt accessibles depuis la France. Nous indiquons les pays éligibles pour chaque offre afin que vous puissiez vérifier votre éligibilité." },
];

export default function FAQ({ items }: { items?: FAQItem[] }) {
  const faq = items || defaultFAQ;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
      <div className="space-y-2">
        {faq.map((item, i) => (
          <div key={i} className="border border-orange-100 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-orange-50/50 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">{item.q}</span>
              <span className={`text-orange-300 flex-shrink-0 transition-transform text-sm ${open === i ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
            )}
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </section>
  );
}
