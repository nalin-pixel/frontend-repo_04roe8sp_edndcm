import React from 'react';
import Hero from './components/Hero';
import AuthSection from './components/AuthSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import { Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-white text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Star className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">PastelPay</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#auth" className="hover:text-slate-900">Auth</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a href="#auth" className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800">Get started</a>
      </header>

      <Hero />

      <main>
        <AuthSection />
        <div id="blog">
          <BlogSection />
        </div>
        <ContactSection />
      </main>

      <footer className="border-t border-slate-200/70 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
