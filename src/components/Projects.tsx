import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ArrowUpRight, Github, Code, ExternalLink, Sparkles, Trophy } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'saas' | 'ai' | 'business' | 'e-commerce'>('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'saas', label: 'SaaS Units' },
    { value: 'ai', label: 'AI Cognitive' },
    { value: 'business', label: 'Enterprise portal' },
    { value: 'e-commerce', label: 'E-Commerce' }
  ];

  const filteredProjects = PROJECTS_DATA.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="space-y-12">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Curated Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Selected Production Work
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto font-sans leading-relaxed">
            Case summaries of full-stack products built for international clients, emphasizing speed, design density, and financial outcomes.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto border-b border-neutral-100 dark:border-neutral-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                filter === cat.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/10 backdrop-blur-md shadow-sm"
              >
                
                {/* Product Image Area */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-950">
                  <div className="absolute inset-0 bg-neutral-950/20 z-10 group-hover:bg-neutral-950/10 transition-colors" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] dark:brightness-75"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Body Details Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-550 dark:text-neutral-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map(t => (
                        <span key={t} className="rounded-md border border-neutral-100/50 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 px-2 py-0.8 text-[10px] font-mono font-medium text-neutral-600 dark:text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results Bullet list - Essential proof metric */}
                  <div className="space-y-2.5 pt-5 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                      <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                      Audited Outcomes Achieved
                    </span>
                    <ul className="space-y-1.5">
                      {proj.results.map((res, ridx) => (
                        <li key={ridx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-snug">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-3 pt-4">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/10 hover:bg-indigo-500 active:scale-95 transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo Link</span>
                    </a>
                    
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 px-4 py-2.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-95 transition"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Github Source</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
