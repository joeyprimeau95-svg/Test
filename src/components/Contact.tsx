import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('leads').insert([form]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 focus:border-sky-500/60 focus:bg-white/8 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 transition-all focus:ring-2 focus:ring-sky-500/20';
  const labelClass = 'block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider';

  return (
    <section id="contact" className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-sky-500/6 rounded-full blur-[100px] translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full mb-6">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              Ready to build something great?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Tell me about your project. I'll get back to you within 24 hours with thoughts, ideas, and a clear next step — no pressure, no obligation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/50 text-sm font-semibold">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Mail size={16} />
                </div>
                hello@studio.dev
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm font-semibold">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Phone size={16} />
                </div>
                (555) 123-4567
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/8 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Currently available</span>
              </div>
              <p className="text-white/50 text-sm">Taking on new projects — typical start date within 1–2 weeks.</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-gray-900 border border-white/8 rounded-2xl p-7">
            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={52} className="text-emerald-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-black text-white mb-2">Message sent!</h3>
                <p className="text-white/50 text-sm">I'll be in touch within 24 hours. Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Your Name *</label>
                    <input id="name" name="name" type="text" className={inputClass} placeholder="Alex Johnson" required value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" className={inputClass} placeholder="alex@business.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className={labelClass}>Business Name</label>
                    <input id="company" name="company" type="text" className={inputClass} placeholder="Acme Pressure Washing" value={form.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClass}>Budget</label>
                    <select id="budget" name="budget" className={inputClass} value={form.budget} onChange={handleChange}>
                      <option value="" className="bg-gray-900">Select a range…</option>
                      <option value="Under $1k" className="bg-gray-900">Under $1,000</option>
                      <option value="$1k–$2k" className="bg-gray-900">$1,000 – $2,000</option>
                      <option value="$2k–$5k" className="bg-gray-900">$2,000 – $5,000</option>
                      <option value="$5k+" className="bg-gray-900">$5,000+</option>
                      <option value="Not sure" className="bg-gray-900">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className={labelClass}>Tell me about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${inputClass} resize-none min-h-[120px]`}
                    placeholder="What kind of site do you need? Who are you trying to reach? Any existing site to reference?"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs font-semibold mb-4">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-500/25"
                >
                  {status === 'sending' ? 'Sending…' : (
                    <>
                      Send Message
                      <Send size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                <p className="text-center text-white/25 text-xs mt-3">No spam. I'll reply within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
