import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange }) => (
  <div className="group relative">
    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-200 bg-white/80 px-10 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-slate-300 focus:bg-white"
    />
  </div>
);

const AuthSection = () => {
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} for ${email}`);
  };

  return (
    <section id="auth" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">Authentication</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Built‑in auth, no hassle</h2>
          <p className="mt-3 text-slate-600">Email magic links, password logins, and social auth. Start simple and upgrade later.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Passwordless or classic passwords</li>
            <li>• Session & token based flows</li>
            <li>• Role‑based access controls</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-100 backdrop-blur">
          <div className="mb-4 flex w-full rounded-lg bg-slate-100 p-1 text-sm">
            <button type="button" onClick={() => setMode('signin')} className={`flex-1 rounded-md px-3 py-2 transition ${mode==='signin' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Sign in</button>
            <button type="button" onClick={() => setMode('signup')} className={`flex-1 rounded-md px-3 py-2 transition ${mode==='signup' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Create account</button>
          </div>

          {mode === 'signup' && (
            <div className="mb-3">
              <Input icon={User} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}

          <div className="mb-3">
            <Input icon={Mail} type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mb-4">
            <Input icon={Lock} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-3 text-white transition hover:bg-slate-800">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>

          <p className="mt-3 text-center text-xs text-slate-500">By continuing you agree to our Terms and Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
};

export default AuthSection;
