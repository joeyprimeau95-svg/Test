import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus D.',
    role: 'Owner, London Pro Wash',
    avatar: 'M',
    color: 'bg-sky-600',
    text: 'I went from getting 2 quote requests a week to 12 or more after the new site launched. The before/after gallery alone has converted so many people. Best investment I made in the business.',
    service: 'Full Marketing Website',
  },
  {
    name: 'Priya S.',
    role: 'Owner, Bloom Beauty Studio',
    avatar: 'P',
    color: 'bg-rose-600',
    text: 'Our old site was embarrassing. The new one looks high-end and the online booking has doubled our throughput without us having to answer the phone all day. Clients love it.',
    service: 'Booking Site + Branding',
  },
  {
    name: 'Jason T.',
    role: 'Director, Peak Performance Gym',
    avatar: 'J',
    color: 'bg-emerald-600',
    text: 'Fast, professional, and the result was beyond what I pictured. We got 58 new members in the first month — the site was the main thing we changed. The ROI paid for it in week two.',
    service: 'Membership Website',
  },
  {
    name: 'Amanda W.',
    role: 'Partner, Maple & Stone Law',
    avatar: 'A',
    color: 'bg-amber-600',
    text: 'Law firm sites tend to look outdated and generic. Ours now gets compliments from clients before meetings even start. The consultation form has been a game changer for intake.',
    service: 'Professional Services Site',
  },
  {
    name: 'Chen R.',
    role: 'Owner, Harvest Table',
    avatar: 'C',
    color: 'bg-orange-600',
    text: 'We were fully booked for three weeks after launch. The reservation system just works and the site actually makes our food look amazing. We\'ve had people come in just because they saw the site.',
    service: 'Restaurant Website',
  },
  {
    name: 'Natalie B.',
    role: 'CEO, Clearwater Coaching',
    avatar: 'N',
    color: 'bg-blue-600',
    text: 'I was hesitant to spend money on a website but the enquiry rate tripled and I recouped the cost in under 6 weeks. Organized, fast, and communicates clearly throughout the whole project.',
    service: 'Coaching & Services Site',
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-28 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What clients say
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Forty-plus businesses trust their web presence to this studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-gray-950 border border-white/6 hover:border-white/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
                <span className="text-[0.65rem] font-bold text-sky-400/60 bg-sky-500/8 border border-sky-500/15 px-2.5 py-1 rounded-full text-right max-w-[100px] leading-tight">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
