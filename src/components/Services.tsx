import { Globe, Zap, ShoppingCart, BarChart2, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Marketing Websites',
    desc: 'High-converting landing pages and full business sites built to rank on Google and turn visitors into leads.',
    highlights: ['SEO-optimized structure', 'Mobile-first design', 'Contact & quote forms'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    desc: 'Shopify and custom storefronts with seamless checkout, product pages, and inventory management.',
    highlights: ['Shopify & custom builds', 'Payment integration', 'Fast product pages'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Speed audits and rewrites that get your site into Google\'s green zone — faster sites rank higher and convert better.',
    highlights: ['Core Web Vitals', 'Image & code optimization', 'Lighthouse 90+ scores'],
  },
  {
    icon: Palette,
    title: 'Design & Branding',
    desc: 'Visual identity work — logo, color systems, typography, and brand guidelines that look intentional and professional.',
    highlights: ['Logo design', 'Brand system', 'Style guides'],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Tracking',
    desc: 'Set up proper tracking so you know exactly where your leads come from and which pages are doing the heavy lifting.',
    highlights: ['GA4 & GTM setup', 'Conversion tracking', 'Monthly reports'],
  },
  {
    icon: Shield,
    title: 'Maintenance & Hosting',
    desc: 'Ongoing care plans — updates, backups, uptime monitoring, and priority support so your site never goes dark.',
    highlights: ['Monthly updates', '99.9% uptime guarantee', 'Priority support'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Everything your website needs
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            From first sketch to launch day — and everything after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, highlights }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-gray-950 border border-white/6 hover:border-sky-500/30 hover:bg-gray-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:bg-sky-500/20 transition-colors">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs font-semibold text-white/40">
                    <span className="w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
