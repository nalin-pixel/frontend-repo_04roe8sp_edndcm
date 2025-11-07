import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">Contact</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">Reach out for demos, pricing, or partnerships. We reply within one business day.</p>
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>• support@pastelpay.co</p>
            <p>• +1 (555) 123-4567</p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-100 backdrop-blur">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-slate-300" />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-slate-300" />
          </div>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tell us about your project" rows={5} className="mt-3 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-slate-300" />
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800">
            <Send className="h-4 w-4"/> {sent ? 'Sent!' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
