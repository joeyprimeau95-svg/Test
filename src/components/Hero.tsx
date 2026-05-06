import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden pt-[72px]">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-white leading-[1.05] tracking-tight mb-6">
            Websites that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              win clients
            </span>
            <br />
            and grow revenue
          </h1>

          <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/55 leading-relaxed mb-10 max-w-2xl">
            I design and build high-performance websites for local businesses and growing brands.
            Fast delivery, clean code, and results you can actually measure.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#work"
              onClick={e => handleAnchor(e, '#work')}
              className="inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
            >
              See My Work
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              onClick={e => handleAnchor(e, '#contact')}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/80 hover:text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:bg-white/5"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white/50 text-sm font-semibold ml-1">5.0 — 40+ clients</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-4 flex-wrap">
              {['Pressure Washing Co.', 'Bloom Salon', 'Peak Fitness', 'Maple Law'].map(name => (
                <span key={name} className="text-white/30 text-sm font-semibold">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs font-semibold tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
