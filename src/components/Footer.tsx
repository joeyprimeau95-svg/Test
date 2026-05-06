import { Code2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* CTA Strip */}
      <div className="bg-gray-900 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">Your next client is one website away.</h3>
            <p className="text-white/45 text-sm">Free consultation — I'll tell you exactly what I'd build for your business.</p>
          </div>
          <a
            href="#contact"
            onClick={e => handleAnchor(e, '#contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-px"
          >
            Start a Project
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center">
                <Code2 size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white">studio<span className="text-sky-400">.</span>dev</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Custom websites for local businesses and growing brands. Fast delivery, clean code, real results.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Work</h4>
            <ul className="space-y-2.5">
              {['#work', '#services', '#pricing'].map((href, i) => (
                <li key={href}>
                  <a href={href} onClick={e => handleAnchor(e, href)} className="text-white/40 hover:text-white text-sm transition-colors">
                    {['Portfolio', 'Services', 'Pricing'][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Info</h4>
            <ul className="space-y-2.5">
              {['#process', '#about', '#contact'].map((href, i) => (
                <li key={href}>
                  <a href={href} onClick={e => handleAnchor(e, href)} className="text-white/40 hover:text-white text-sm transition-colors">
                    {['Process', 'Testimonials', 'Contact'][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><span className="text-white/40 text-sm">hello@studio.dev</span></li>
              <li><span className="text-white/40 text-sm">(555) 123-4567</span></li>
              <li><span className="text-emerald-400/70 text-xs font-bold">Available for new work</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} studio.dev — All rights reserved.</p>
          <p className="text-white/15 text-xs">Demo site — built to showcase web development skills</p>
        </div>
      </div>
    </footer>
  );
}
