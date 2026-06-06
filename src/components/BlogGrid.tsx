import React, { useState } from 'react';
import { BLOGS_DATA } from '../data';
import { Blog } from '../types';
import { Search, Calendar, Clock, BookOpen, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogGrid({ onOpenArticle }: { onOpenArticle: (blog: Blog) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [newsMsg, setNewsMsg] = useState<string | null>(null);

  // Derive unique categories
  const categories = ['All', ...Array.from(new Set(BLOGS_DATA.map(b => b.category)))];

  // Filter list
  const filteredBlogs = BLOGS_DATA.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubscribeNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;

    setSubscribing(true);
    setNewsMsg(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (data.success) {
        setNewsMsg(data.message);
        setNewsletterEmail('');
      } else {
        setNewsMsg('Subscription failed. Please retry.');
      }
    } catch (err) {
      console.error(err);
      setNewsMsg('Subscription network error.');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <section id="blog" className="py-24 px-4 max-w-7xl mx-auto space-y-16">
      
      {/* Article Captions */}
      <div className="space-y-4 text-center">
        <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
          Technical Publication
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          The Scalable Stack — Architecture Ledger
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed font-sans">
          In-depth technical papers covering browser performance, server scaling algorithms, and modular React patterns.
        </p>
      </div>

      {/* Grid Utilities: Filters + Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-6 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-neutral-100/60 hover:bg-neutral-100 dark:bg-neutral-900/40 dark:hover:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full md:max-w-sm rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-950/20 px-3.5 py-1.8 outline-none focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600/30">
          <Search className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
          <input
            type="text"
            placeholder="Search publications..."
            className="flex-1 bg-transparent text-xs text-neutral-805 dark:text-neutral-200 outline-none placeholder-neutral-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Articles Grid list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              className="group rounded-3xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white/40 dark:bg-neutral-905 bg-white dark:bg-neutral-900/15 overflow-hidden shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="space-y-5">
                {/* Thumb area */}
                <div className="h-48 overflow-hidden bg-neutral-950/20 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-neutral-950/80 backdrop-blur-md px-2.5 py-0.8 text-[10px] font-mono font-semibold text-indigo-400 uppercase tracking-widest border border-indigo-500/10">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Info block details */}
                <div className="px-5 space-y-3.5">
                  <div className="flex items-center gap-3.5 text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-neutral-500 shrink-0" /> {blog.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-neutral-500 shrink-0" /> {blog.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 dark:text-neutral-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Author footer banner */}
              <div className="p-5 mt-4 border-t border-neutral-100 dark:border-neutral-850/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <div>
                    <span className="block text-[11px] font-bold text-neutral-900 dark:text-neutral-200">{blog.author.name}</span>
                    <span className="block text-[9px] font-mono text-neutral-400 leading-none">{blog.author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenArticle(blog)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-indigo-600 group-hover:text-white transition"
                  aria-label="Read complete entry"
                >
                  <BookOpen className="h-4 w-4" />
                </button>
              </div>

            </motion.article>
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-sm text-neutral-500 font-sans">
            No matching articles or tags found. Try updating search metrics.
          </div>
        )}
      </div>

      {/* Newsletter Subscribe banner block */}
      <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-500 dark:text-indigo-400">Newsletter Subscription</span>
          <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-100 leading-snug">Subscribe to The Scalable Stack</h3>
          <p className="text-xs text-neutral-505 text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
            Join 3,500+ other technical founders and engineers who receive our bi-monthly deep dives on system architecture. No spam.
          </p>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {!newsMsg ? (
              <motion.form
                key="newsletter-form"
                onSubmit={handleSubscribeNewsletter}
                className="flex items-center gap-2 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/20 px-3 py-1 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600/30"
              >
                <input
                  type="email"
                  required
                  placeholder="name@startup.com"
                  className="flex-grow bg-transparent py-2.5 text-xs text-neutral-805 dark:text-neutral-200 outline-none"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="rounded-lg bg-indigo-600 px-4 py-1.8 text-xs font-semibold text-white hover:bg-indigo-500 transition active:scale-95 disabled:opacity-45"
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="newsletter-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2.5 items-center p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-sans leading-snug"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>{newsMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
