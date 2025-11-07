import React from 'react';
import { ArrowRight, PenSquare } from 'lucide-react';

const posts = [
  {
    title: 'Designing calm fintech interfaces',
    excerpt: 'Use whitespace, soft gradients, and gentle motion to reduce cognitive load in financial apps.',
    tag: 'Design',
  },
  {
    title: 'A guide to modern payment flows',
    excerpt: 'From cards to wallets to BNPL — how to choose the right checkout for your product.',
    tag: 'Product',
  },
  {
    title: 'Security defaults that matter',
    excerpt: 'Practical steps to ship bank‑grade security without slowing your team.',
    tag: 'Security',
  },
];

const BlogCard = ({ title, excerpt, tag }) => (
  <article className="group rounded-2xl bg-white/70 p-6 ring-1 ring-slate-100 backdrop-blur transition hover:shadow-sm">
    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-blue-700 ring-1 ring-blue-200">{tag}</span>
    <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{excerpt}</p>
    <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 transition group-hover:gap-2">
      Read more <ArrowRight className="h-4 w-4" />
    </button>
  </article>
);

const BlogSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200">Insights</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">From the blog</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800">
          <PenSquare className="h-4 w-4" /> View all
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
