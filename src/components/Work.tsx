import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'London Pro Wash',
    category: 'Pressure Washing Business',
    desc: 'Full-featured marketing site with before/after gallery, quote form, service area coverage, and Google review integration. Conversion-optimized from top to bottom.',
    tags: ['React', 'Tailwind', 'Supabase', 'Lead Gen'],
    result: '+340% quote requests in 60 days',
    color: 'from-sky-500/20 to-blue-600/10',
    accent: 'bg-sky-500',
    img: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: true,
  },
  {
    title: 'Bloom Beauty Studio',
    category: 'Salon & Spa',
    desc: 'Elegant booking-focused site for a local salon with online scheduling, service menu, and Instagram feed integration.',
    tags: ['React', 'Booking API', 'Animations'],
    result: '2× more bookings online',
    color: 'from-rose-500/15 to-pink-600/5',
    accent: 'bg-rose-500',
    img: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: false,
  },
  {
    title: 'Peak Performance Gym',
    category: 'Fitness & Wellness',
    desc: 'Membership-driven site with class schedules, trainer profiles, and a high-energy visual identity that drives sign-ups.',
    tags: ['TypeScript', 'Vite', 'CMS'],
    result: '58 new memberships in month 1',
    color: 'from-emerald-500/15 to-teal-600/5',
    accent: 'bg-emerald-500',
    img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: false,
  },
  {
    title: 'Maple & Stone Law',
    category: 'Professional Services',
    desc: 'Trust-building site for a boutique law firm with practice area pages, attorney bios, and a secure consultation request form.',
    tags: ['React', 'Supabase', 'SEO'],
    result: '22 consultation leads in week 1',
    color: 'from-amber-500/15 to-yellow-600/5',
    accent: 'bg-amber-500',
    img: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: false,
  },
  {
    title: 'Harvest Table Restaurant',
    category: 'Food & Hospitality',
    desc: 'Mouthwatering restaurant site with online reservations, seasonal menu showcase, and event booking for private dining.',
    tags: ['React', 'Animations', 'OpenTable'],
    result: 'Fully booked 3 weeks out post-launch',
    color: 'from-orange-500/15 to-red-600/5',
    accent: 'bg-orange-500',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: false,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Real sites for real businesses
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Every project is custom-built — no templates, no shortcuts. Here's what that looks like in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-gray-900 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${p.span ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${p.span ? 'h-64 md:h-80' : 'h-52'}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1.5 rounded-full ${p.accent}`}>
                  {p.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-black text-white group-hover:text-sky-300 transition-colors">
                    {p.title}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-sky-400 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{p.desc}</p>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[0.7rem] font-bold text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    {p.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
