import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Starter sites typically take 5–7 business days. Growth sites are 10–14 days. Premium projects with e-commerce or custom features take 3–4 weeks. These timelines start after you\'ve approved the proposal and provided your content.',
  },
  {
    q: 'Do I need to supply my own content and images?',
    a: 'For best results, yes — you know your business better than anyone. But if you need help, I can write copy, source licensed photography, or source Pexels images for your industry. Just let me know what you need when we talk.',
  },
  {
    q: 'Will my site rank on Google?',
    a: 'Every site is built with solid on-page SEO — meta tags, schema, fast load speeds, mobile-first layout, and clean URL structures. For competitive local keywords, I also offer ongoing SEO strategy as an add-on. A well-built site is the essential foundation.',
  },
  {
    q: 'What happens after the site launches?',
    a: 'Every plan includes post-launch support (30–90 days depending on plan) to fix bugs or make tweaks. After that, you can choose a monthly maintenance plan or handle updates yourself — I\'ll train you either way.',
  },
  {
    q: 'Can I update the site myself after it\'s done?',
    a: 'Yes. Sites that use a CMS (included in Growth and Premium plans) are fully editable by you — no developer needed for text, images, or blog posts. I\'ll record a walkthrough video and give you documentation.',
  },
  {
    q: 'Do you work with businesses outside your area?',
    a: 'Absolutely. All projects are remote-friendly. I work with businesses across Canada and the US. Everything is handled over video calls, email, and shared project tools — no meetings needed in person.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-white/50 text-lg">
            Anything else? Just ask.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                open === i ? 'border-sky-500/40 bg-gray-950' : 'border-white/6 bg-gray-950 hover:border-white/12'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`text-sm font-bold transition-colors ${open === i ? 'text-sky-400' : 'text-white/80 hover:text-white'}`}>
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  strokeWidth={2.5}
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45 text-sky-400' : 'text-white/30'}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
