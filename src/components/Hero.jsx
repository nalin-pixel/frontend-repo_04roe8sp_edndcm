import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <span className="inline-flex items-center rounded-full bg-pink-100/70 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-200 backdrop-blur">
          Minimal fintech toolkit
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Launch modern payments in minutes
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          A clean, pastel SaaS for digital banking and e‑commerce. Secure by default, beautiful by design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800"
          >
            <Rocket className="h-4 w-4" /> Get Started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            <CreditCard className="h-4 w-4" /> Talk to sales
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-4 text-left ring-1 ring-slate-100 backdrop-blur">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-500" />
              <div className="text-sm font-medium text-slate-800">Bank‑grade security</div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 text-left ring-1 ring-slate-100 backdrop-blur">
            <div className="text-sm font-medium text-slate-800">One‑line integration</div>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 text-left ring-1 ring-slate-100 backdrop-blur">
            <div className="text-sm font-medium text-slate-800">Global commerce ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
