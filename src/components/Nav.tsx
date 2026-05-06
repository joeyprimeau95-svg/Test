import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 flex-shrink-0 group" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center group-hover:bg-sky-400 transition-colors">
              <Code2 size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-white text-[1.05rem] tracking-tight">
              studio<span className="text-sky-400">.</span>dev
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 ml-auto">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => handleAnchor(e, l.href)}
                className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={e => handleAnchor(e, '#contact')}
            className="hidden md:inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-sky-500/30 ml-2"
          >
            Start a Project
          </a>

          <button
            className="md:hidden ml-auto p-1.5 text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-gray-950/98 backdrop-blur-sm flex flex-col pt-[72px] px-6 pb-8 md:hidden">
          <nav className="flex flex-col gap-1 mt-4">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => handleAnchor(e, l.href)}
                className="text-lg font-semibold text-white/70 hover:text-white py-3 border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={e => handleAnchor(e, '#contact')}
            className="mt-6 flex items-center justify-center bg-sky-500 text-white font-bold text-base py-3.5 rounded-xl"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
