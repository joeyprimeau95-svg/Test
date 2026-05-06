const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We talk about your business, goals, and who you\'re trying to reach. I ask the questions most designers skip — so the site actually works.',
  },
  {
    num: '02',
    title: 'Proposal & Quote',
    desc: 'You get a clear scope of work and a fixed price within 24 hours. No hourly billing surprises, no scope creep without your approval.',
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'I design in the browser with real content — not placeholder Lorem Ipsum. You see it evolve and give feedback at every stage.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'Your site goes live, I handle the technical setup, and you get 30 days of free post-launch support to iron out anything that comes up.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Four clear steps from first conversation to live website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent z-0" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative z-10">
              <div
                className="w-20 h-20 rounded-2xl bg-gray-900 border-2 border-sky-500/30 flex flex-col items-center justify-center mb-5 mx-auto md:mx-0"
                style={{ boxShadow: '0 0 30px rgba(14,165,233,0.12)' }}
              >
                <span className="text-[0.6rem] font-black text-sky-500/60 tracking-widest uppercase">Step</span>
                <span className="text-2xl font-black text-sky-400">{i + 1}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
