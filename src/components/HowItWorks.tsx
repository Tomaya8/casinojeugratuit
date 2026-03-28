const steps = [
  { num: '1', title: 'Choisissez un bonus', desc: 'Comparez les offres grâce à notre score transparent et nos filtres.' },
  { num: '2', title: 'Inscrivez-vous', desc: 'Créez un compte sur le casino et activez votre bonus (code promo ou auto).' },
  { num: '3', title: 'Jouez gratuitement', desc: 'Utilisez vos free spins ou bonus cash sur les jeux éligibles.' },
  { num: '4', title: 'Retirez vos gains', desc: 'Remplissez les conditions de mise et retirez vos gains réels.' },
];

export default function HowItWorks() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comment ça marche ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(step => (
          <div key={step.num} className="relative bg-white border border-orange-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              {step.num}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
