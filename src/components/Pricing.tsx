import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$799',
    timeline: '5–7 days',
    desc: 'Perfect for solo operators and small businesses that need a professional web presence fast.',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact / quote form',
      'SEO basics setup',
      'Google Analytics',
      '2 rounds of revisions',
      '30-day support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$1,799',
    timeline: '10–14 days',
    desc: 'Built for businesses ready to scale — more pages, deeper SEO, and integrations that save you time.',
    features: [
      'Up to 12 pages',
      'Custom animations & interactions',
      'CMS for blog or portfolio',
      'Advanced SEO & sitemap',
      'Lead capture system',
      'Google Tag Manager',
      '3 rounds of revisions',
      '60-day priority support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$3,499+',
    timeline: '3–4 weeks',
    desc: 'Full-scope projects for growing brands — e-commerce, booking systems, custom functionality.',
    features: [
      'Unlimited pages',
      'E-commerce or booking system',
      'Database & backend (Supabase)',
      'Custom integrations & APIs',
      'Full brand system',
      'Unlimited revisions',
      '90-day priority support',
      'Monthly maintenance plan',
    ],
    cta: 'Let\'s Talk',
    highlight: false,
  },
];

export default function Pricing() {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Clear, fixed pricing
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            No hourly billing. No surprise invoices. You know the price before we start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-sky-500 border-sky-400 shadow-2xl shadow-sky-500/25'
                  : 'bg-gray-900 border-white/8 hover:border-white/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-sky-600 text-[0.65rem] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`text-sm font-bold mb-1 ${plan.highlight ? 'text-white/80' : 'text-white/50'}`}>
                  {plan.name}
                </div>
                <div className={`text-4xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.price}
                </div>
                <div className={`text-xs font-semibold mb-3 ${plan.highlight ? 'text-white/70' : 'text-white/35'}`}>
                  Delivered in {plan.timeline}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-white/45'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-emerald-400'}`}
                    />
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-white/90' : 'text-white/60'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={handleAnchor}
                className={`block w-full text-center font-bold text-sm py-3.5 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-white text-sky-600 hover:bg-white/90 shadow-lg'
                    : 'bg-sky-500 hover:bg-sky-400 text-white hover:shadow-lg hover:shadow-sky-500/20'
                }`}
              >
                {plan.cta} &rarr;
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          Not sure which plan fits? <a href="#contact" onClick={handleAnchor} className="text-sky-400 hover:text-sky-300 font-semibold underline">Let's talk through it for free.</a>
        </p>
      </div>
    </section>
  );
}
